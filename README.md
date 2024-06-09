# Load test with Grafana k6
- Tools: Grafana k6 (https://k6.io/)
- PC Preparation: https://k6.io/docs/get-started/installation/
- To run the script in local: `k6 run script.js --summary-export=results.json`
- To run the script on clud: `k6 cloud script.js`

# Test Results as following
* 100 Virtual Users for 2 Mins

  ![image](https://github.com/imranreee/Load-Test-With-k6/assets/19637476/9c1c60b6-6a5e-4c98-be30-58db020573ba)

  # Test Results details explanation

Here's a detailed explanation of each line of the k6 load test result you provided:

1. **`✓ Status grand reve page is 200`**: This indicates that all HTTP requests to the "grand-reve" page returned a status code of 200, which means the requests were successful.

2. **`✓ checks.........................: 100.00% ✓ 679      ✗ 0`**: This shows that 100% of the checks passed. There were 679 successful checks and 0 failed checks.

3. **`✓ { URL:grand-reve }...........: 100.00% ✓ 679      ✗ 0`**: Similarly, this indicates that 100% of the checks specific to the "grand-reve" URL passed. Again, there were 679 successful checks and 0 failed checks.

4. **`data_received..................: 276 MB  2.2 MB/s`**: This shows the total amount of data received during the test, which was 276 MB, with an average rate of 2.2 MB/s.

5. **`data_sent......................: 710 kB  5.7 kB/s`**: This shows the total amount of data sent during the test, which was 710 kB, with an average rate of 5.7 kB/s.

6. **`✓ http_errors....................: 0       0/s`**: This indicates that there were no HTTP errors during the test.

7. **`✓ { URL:grand-reve }...........: 0       0/s`**: This indicates that there were no HTTP errors specific to the "grand-reve" URL.

8. **`http_req_blocked...............: avg=109.98ms min=0s       med=0s     max=4.83s  p(90)=483.68ms p(95)=696.43ms`**: 
   - **avg**: The average time requests were blocked (waiting for a free TCP connection slot), which was 109.98ms.
   - **min**: The minimum blocked time, which was 0 seconds.
   - **med**: The median blocked time, which was 0 seconds.
   - **max**: The maximum blocked time, which was 4.83 seconds.
   - **p(90)**: 90% of the requests had a blocked time of up to 483.68ms.
   - **p(95)**: 95% of the requests had a blocked time of up to 696.43ms.

9. **`http_req_connecting............: avg=28.13ms  min=0s       med=0s     max=1.17s  p(90)=159.19ms p(95)=161.93ms`**:
   - **avg**: The average time taken to establish TCP connections, which was 28.13ms.
   - **min**: The minimum connection time, which was 0 seconds.
   - **med**: The median connection time, which was 0 seconds.
   - **max**: The maximum connection time, which was 1.17 seconds.
   - **p(90)**: 90% of the connections were established within 159.19ms.
   - **p(95)**: 95% of the connections were established within 161.93ms.

10. **`✗ http_req_duration..............: avg=11.47s   min=511.39ms med=12.43s max=22.08s p(90)=17.18s   p(95)=18.43s`**:
    - **avg**: The average request duration, which was 11.47 seconds.
    - **min**: The minimum request duration, which was 511.39ms.
    - **med**: The median request duration, which was 12.43 seconds.
    - **max**: The maximum request duration, which was 22.08 seconds.
    - **p(90)**: 90% of the requests completed within 17.18 seconds.
    - **p(95)**: 95% of the requests completed within 18.43 seconds.
    - The "✗" indicates that this is a failing threshold. 

11. **`{ expected_response:true }...: avg=11.47s   min=511.39ms med=12.43s max=22.08s p(90)=17.18s   p(95)=18.43s`**: This is a breakdown of the request durations where the response was expected to be true. It shows the same statistics as above.

12. **`✗ { status:200 }...............: avg=11.47s   min=511.39ms med=12.43s max=22.08s p(90)=17.18s   p(95)=18.43s`**: This is a breakdown of the request durations where the status was 200. The "✗" indicates that this is a failing threshold.

13. **`✓ { status:201 }...............: avg=0s       min=0s       med=0s     max=0s     p(90)=0s       p(95)=0s`**: This indicates that there were no requests with a status of 201 during the test.

14. **`✓ { URL:grand-reve }...........: avg=0s       min=0s       med=0s     max=0s     p(90)=0s       p(95)=0s`**: This indicates that there were no requests with the "grand-reve" URL during the test with these specific conditions.

15. **`✓ http_req_failed................: 0.00%   ✓ 0        ✗ 679`**: This indicates that none of the HTTP requests failed during the test.

16. **`http_req_receiving.............: avg=9.96s    min=163.64ms med=10.87s max=19.97s p(90)=15.26s   p(95)=16.26s`**:
    - **avg**: The average time taken to receive the response, which was 9.96 seconds.
    - **min**: The minimum receiving time, which was 163.64ms.
    - **med**: The median receiving time, which was 10.87 seconds.
    - **max**: The maximum receiving time, which was 19.97 seconds.
    - **p(90)**: 90% of the responses were received within 15.26 seconds.
    - **p(95)**: 95% of the responses were received within 16.26 seconds.

17. **`http_req_sending...............: avg=103.12µs min=0s       med=0s     max=1.11ms p(90)=506.52µs p(95)=618.15µs`**:
    - **avg**: The average time taken to send the request, which was 103.12 microseconds.
    - **min**: The minimum sending time, which was 0 seconds.
    - **med**: The median sending time, which was 0 seconds.
    - **max**: The maximum sending time, which was 1.11 milliseconds.
    - **p(90)**: 90% of the requests were sent within 506.52 microseconds.
    - **p(95)**: 95% of the requests were sent within 618.15 microseconds.

18. **`http_req_tls_handshaking.......: avg=81.44ms  min=0s       med=0s     max=4.67s  p(90)=323.62ms p(95)=342.98ms`**:
    - **avg**: The average time taken for TLS handshaking, which was 81.44ms.
    - **min**: The minimum TLS handshaking time, which was 0 seconds.
    - **med**: The median TLS handshaking time, which was 0 seconds.
    - **max**: The maximum TLS handshaking time, which was 4.67 seconds.
    - **p(90)**: 90% of the TLS handshakes were completed within 323.62ms.
    - **p(95)**: 95% of the TLS handshakes were completed within 342.98ms.

19. **`http_req_waiting...............: avg=1.5s     min=294.26ms med=1.47s  max=4.67s  p(90)=2.52s    p(95)=2.87s`**:
    - **avg**: The average time waiting for the server to respond, which was 1.5 seconds.
    - **min**: The minimum waiting time, which was 294.26ms.
    - **med**: The median waiting time, which was 1.47 seconds.
    - **max**: The maximum waiting time, which was 4.67 seconds.
    - **p(90)**: 90% of the wait times were within 2.52 seconds.
    - **p(95)**: 95% of the wait times were within 2.87 seconds.

20. **`http_reqs......................: 679     5.500629/s`**: This shows the total number of HTTP requests made during the test, which was 679, with an average rate

# Test Results for cloud run

![image](https://github.com/imranreee/Load-Test-With-k6/assets/19637476/7d3778a5-2aff-4780-80b7-0499d3f06223)


