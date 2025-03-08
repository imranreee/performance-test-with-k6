import http from 'k6/http';
import { check } from 'k6';
import { Trend } from 'k6/metrics';

export let authTimeTrend = new Trend('auth_time');

export function getAuthToken() {
    const url = 'https://api.test.com/oauth/token';
    const payload = JSON.stringify({
        client_id: '352345-re343-sdfgfg57456',
        client_secret: '352345-re343-sdfgfg57456352345-re343-sdfgfg57456',
        grant_type: 'abc',
        scope: '*'
    });

    const headers = { 'Content-Type': 'application/json' };

    let res = http.post(url, payload, { headers });
    authTimeTrend.add(res.timings.duration);

    check(res, {
        'Auth request succeeded': (r) => r.status === 200,
        'Token received': (r) => r.json('access_token') !== undefined,
    });

    return `Bearer ${res.json('access_token')}`;
}
