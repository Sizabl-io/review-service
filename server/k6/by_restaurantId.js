import { sleep } from "k6";
import http from "k6/http";

export const options = {
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
};


export default function main() {
  let res;
  const restaurantId = Math.floor(Math.random() * (2500000 - 1)) + 1;
  res = http.get(`http://localhost:3002/api/restaurants/${restaurantId}/reviews`);

 sleep(1);

};







