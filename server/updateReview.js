import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate, Trend } from 'k6/metrics';
export let reviewTrend = new Trend('POST /api/reviews Response Time (ms)');
export let reviewErrorRate = new Rate('POST /api/reviews Error Rate');

export let options = {
  stages: [
    // {duration: '1m', target: 100},
    // {duration: '1m', target: 200},
    // {duration: '2m', target: 500},
    // {duration: '3m', target: 1000},
    {duration: '30s', target: 100},
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

