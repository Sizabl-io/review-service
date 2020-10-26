import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    {duration: '1m', target: 100},
    {duration: '1m', target: 200},
    {duration: '2m', target: 500},
    {duration: '3m', target: 1000},
    {duration: '30s', target: 100},
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

