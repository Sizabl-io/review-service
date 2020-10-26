import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate, Trend } from 'k6/metrics';
export let reviewTrend = new Trend('POST /api/reviews Response Time (ms)');
export let reviewErrorRate = new Rate('POST /api/reviews Error Rate');

export let options = {
  stages: [
    {duration: '10s', target: 500},
    {duration: '10s', target: 500},
    {duration: '5s', target: 2000},
    {duration: '30s', target: 2000}
  ]
}

export default function() {
  let res;
  const reviewId = Math.floor(Math.random() * (40000000 - 30000000)) + 30000000;
  const reviewDoc = {
    review_id: reviewId,
    review_date: '9/17/2020',
    restaurant_id: Math.floor(Math.random() * (2500000 - 1)) + 1,
    user_id: Math.floor(Math.random() * (1000000 - 1)) + 1,
    description: 'really good food',
    rating: 3.7
  };

  const params = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  res = http.post(`http://localhost:3002/api/reviews/`, JSON.stringify(reviewDoc), params);

  check(res, {
    'status 201': r => r.status == 201
  }) || reviewErrorRate.add(1);

  reviewTrend.add(res.timings.duration);

 sleep(1);
};

