import http from "k6/http";

export let options = {
  stages: [
    { duration: "10s", target: 5000 },
    { duration: "30s", target: 10000 },
    { duration: "30s", target: 10000 },
    { duration: "10s", target: 100 },
  ],
};

export default function () {
  http.get("http://localhost:8088/api/v1/todos/");
}
