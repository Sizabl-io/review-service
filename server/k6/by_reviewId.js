import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    {duration: '10s', target: 500},
    {duration: '10s', target: 500},
    {duration: '5s', target: 2000},
    {duration: '30s', target: 2000}
  ],
  ext: {
    loadimpact: {
      distribution: {
        "amazon:us:ashburn": { loadZone: "amazon:us:ashburn", percent: 100 },
      },
    },
  },
}

export default function main() {
  let res;
  const reviewId = Math.floor(Math.random() * (30000000 - 1)) + 1;
  res = http.get(`http://localhost:3002/api/reviews/${reviewId}`);

 sleep(1);
};

