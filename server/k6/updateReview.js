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
  const reviewId = Math.floor(Math.random() * (30000000 - 1)) + 1;
  const rate = Math.ceil(Math.random() * 50) / 10

  const reviewDoc = {
    review_id: reviewId,
    rating: rate
  };

  const params = {
    headers: {
      'Content-Type': 'application/json'
    }
  };


  res = http.patch(`http://localhost:3002/api/reviews/`, JSON.stringify(reviewDoc), params);

  check(res, {
    'status 201': r => r.status == 201
  }) || reviewErrorRate.add(1);

  reviewTrend.add(res.timings.duration);

 sleep(1);
};

