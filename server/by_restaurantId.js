import { sleep } from "k6";
import http from "k6/http";

export const options = {
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
};


export default function main() {
  let res;
  const restaurantId = Math.floor(Math.random() * (2500000 - 1)) + 1;
  res = http.get(`http://localhost:3002/api/restaurants/${restaurantId}/reviews`);

 sleep(1);

};







