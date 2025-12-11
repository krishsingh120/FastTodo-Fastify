import http from "k6/http";
import { Rate } from "k6/metrics";

export let errorRate = new Rate("error"); // custom metrics

export let options = {
  vus: 500,
  duration: "1m",
};

export default function () {
  let response = http.get("http://localhost:8088/api/v1/todos/");
  let success = response.status === 200;

  errorRate.add(!success);

}
