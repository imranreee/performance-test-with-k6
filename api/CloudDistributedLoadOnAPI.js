import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';
import { getAuthToken } from './GenerateAuthToken.js';

export let responseTimeTrend = new Trend('response_time');
export let failureRate = new Rate('failed_requests');
export let requestCount = new Counter('request_count');

const BASE_URL = 'https://api.test.com';

const ENDPOINT = '/users?status=active&age=30';

export const options = {
    stages: [
        { duration: '10s', target: 10 },  // Ramp-up to 10 users
        { duration: '30s', target: 50 },  // Hold at 50 users
        { duration: '10s', target: 0 },   // Ramp-down to 0
    ],
    thresholds: {
        http_req_duration: ['p(95)<1000'], // 95% of requests < 1s
        failed_requests: ['rate<0.01'],    // Failures < 1%
    },

    cloud: {
        name: 'Distributed Load Test',
        projectID: 987654,
        staticIPs: true,
        drop_metrics: ['http_req_tls_handshaking', 'http_req_connecting'],
        drop_tags: { '*': ['instance_id'] },
        keep_tags: { http_req_waiting: ['instance_id'] },
        distribution: {
            us_east: { loadZone: 'amazon:us:ashburn', percent: 30 },
            eu_west: { loadZone: 'amazon:ie:dublin', percent: 30 },
            au_sydney: { loadZone: 'amazon:au:sydney', percent: 40 }
        },
        note: 'Testing API performance with distributed load from different locations.',
    }
};

export default function () {
    const authToken = getAuthToken();

    const headers = {
        Authorization: authToken,
        'Content-Type': 'application/json',
        Accept: 'application/json'
    };

    let res = http.get(`${BASE_URL}${ENDPOINT}`, { headers });

    responseTimeTrend.add(res.timings.duration);
    failureRate.add(res.status !== 200);
    requestCount.add(1);

    group(`Result for: ${ENDPOINT}`, function (){
        check(res, {
            'Status is 200': (r) => r.status === 200,
            'Response time < 1s': (r) => r.timings.duration < 1000,
            'Success is true': (r) => r.json('success') === true,
            'Data exists': (r) => r.json('data') !== undefined,
        });
    });

    // sleep(Math.random() * 4 + 1); // Randomized wait time (1-5 sec)
    sleep(Math.random() * 5 + 5); // Randomized wait time (5-10 sec)
}
