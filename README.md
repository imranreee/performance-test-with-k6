# Load test with Grafana k6
- Tools: Grafana k6 (https://k6.io/)
- PC Preparation: https://k6.io/docs/get-started/installation/

# Test Results as following
* 100 Virtual Usera for 2 Mins

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: LoadOnAdWebApp.js
     output: -

  scenarios: (100.00%) 1 scenario, 100 max VUs, 2m30s max duration (incl. graceful stop):
           * default: Up to 100 looping VUs for 2m0s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)


     ✓ Status grand reve page is 200

   ✓ checks.........................: 100.00% ✓ 679      ✗ 0
     ✓ { URL:grand-reve }...........: 100.00% ✓ 679      ✗ 0
     data_received..................: 276 MB  2.2 MB/s
     data_sent......................: 710 kB  5.7 kB/s
   ✓ http_errors....................: 0       0/s
     ✓ { URL:grand-reve }...........: 0       0/s
     http_req_blocked...............: avg=109.98ms min=0s       med=0s     max=4.83s  p(90)=483.68ms p(95)=696.43ms
     http_req_connecting............: avg=28.13ms  min=0s       med=0s     max=1.17s  p(90)=159.19ms p(95)=161.93ms
   ✗ http_req_duration..............: avg=11.47s   min=511.39ms med=12.43s max=22.08s p(90)=17.18s   p(95)=18.43s
       { expected_response:true }...: avg=11.47s   min=511.39ms med=12.43s max=22.08s p(90)=17.18s   p(95)=18.43s
     ✗ { status:200 }...............: avg=11.47s   min=511.39ms med=12.43s max=22.08s p(90)=17.18s   p(95)=18.43s
     ✓ { status:201 }...............: avg=0s       min=0s       med=0s     max=0s     p(90)=0s       p(95)=0s
     ✓ { URL:grand-reve }...........: avg=0s       min=0s       med=0s     max=0s     p(90)=0s       p(95)=0s
   ✓ http_req_failed................: 0.00%   ✓ 0        ✗ 679
     http_req_receiving.............: avg=9.96s    min=163.64ms med=10.87s max=19.97s p(90)=15.26s   p(95)=16.26s
     http_req_sending...............: avg=103.12µs min=0s       med=0s     max=1.11ms p(90)=506.52µs p(95)=618.15µs
     http_req_tls_handshaking.......: avg=81.44ms  min=0s       med=0s     max=4.67s  p(90)=323.62ms p(95)=342.98ms
     http_req_waiting...............: avg=1.5s     min=294.26ms med=1.47s  max=4.67s  p(90)=2.52s    p(95)=2.87s
     http_reqs......................: 679     5.500629/s
     iteration_duration.............: avg=13.98s   min=1.15s    med=14.83s max=24.72s p(90)=20.46s   p(95)=21.26s
     iterations.....................: 679     5.500629/s
     vus............................: 2       min=2      max=100
     vus_max........................: 100     min=100    max=100


  ![image](https://github.com/imranreee/Load-Test-With-k6/assets/19637476/9c1c60b6-6a5e-4c98-be30-58db020573ba)

  # Test Results explanation

