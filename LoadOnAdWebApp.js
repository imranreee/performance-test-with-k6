import http from 'k6/http'
import { Counter } from 'k6/metrics';
import { sleep, check } from 'k6';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';


const BASE_URL = 'https://staging.a-d.com.au/new-apartments-developments/nsw/castle-hill-2154/grand-reve';
let httpErrors = new Counter('http_errors');

// number of virtual users (VUs) and time is configurable as per test needs  
export const options = {

    thresholds: {
        http_req_duration: ['p(95) < 100'],
        http_req_failed: ['rate < 0.01'], // http errors should be less than 1%
        'http_req_duration{status:200}': ['p(95) < 200'], //  95% of the successful HTTP requests have a duration less than 200 milliseconds
        'http_req_duration{status:201}': ['p(95) < 200'],
        'http_req_duration{URL:grand-reve}': ['p(95) < 250'], //custom tag for each API
        http_errors: ['count==0'],
        'http_errors{URL:grand-reve}': ['count==0'],
        checks: ['rate>=0.99'],
        'checks{URL:grand-reve}': ['rate>=0.99']
    },


    stages: [
        {
            duration: '30s', //ramp up time
            target: 100
        },
        {
            duration: '1m',
            target: 100 //baseline value or typical load
        },
        {
            duration: '30s', // ramp-down time
            target: 0
        }
    ],

    //for running on cloud
    ext: {
        loadimpact: {
            projectID: 3687471
        }
    }

}


export default function(){
    const respData = http.get(BASE_URL);

    if (respData.error) {
        httpErrors.add(1, { URL: 'grand-reve' });
    }

    check(respData,
        {
            'Status grand reve page is 200': (r) => r.status === 200
        },
        {
            URL: 'grand-reve'
        });

    sleep(randomIntBetween(0, 5));
}



