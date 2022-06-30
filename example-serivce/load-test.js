import http from 'k6/http';           // import dependencies
import {sleep, check, group} from 'k6';

const SERVICE_URL = ""

export const options = {       // define test stages and duration
    stages: [
        {target: 5, duration: '10s'},  // ramp-up
        {target: 10, duration: '20s'},  // peak point
        {target: 0, duration: '10s'},  // ramp-down
    ],
};

export default function () {     // VU code
    group('example-service load testing', function () {
        group("example-endpoint load test", function (){
            let res = http.get(SERVICE_URL);

            check(res, {
                "status is 200": (r) => r.status === 200
            });
        })
    });

    sleep(1);
}