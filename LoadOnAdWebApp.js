import http from 'k6/http'

const BASE_URL = 'https://staging.a-d.com.au/new-apartments-developments/nsw/castle-hill-2154/grand-reve';

export default function(){
    const respData = http.get(BASE_URL);
}

