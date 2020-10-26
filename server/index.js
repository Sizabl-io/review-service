require('newrelic');

const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3002
const pool = require('../database/postgres/index.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// get all reviews of one restaurant
app.get('/api/restaurants/:restaurantId/reviews', (req, res) => {
  const {restaurantId} = req.params;
  q = `SELECT * FROM reviews WHERE restaurant_id = ${restaurantId}`
  pool.query(q, (err, results) => {
    if(err) {
      res.status(400).send();
    } else {
      res.status(200).send(results.rows[0])
    }
  })
})
// get one single review by review id
app.get('/api/reviews/:reviewId', (req, res) => {
  const {reviewId} = req.params;
  q = `SELECT * FROM reviews WHERE review_id = ${reviewId}`
  pool.query(q, (err, results) => {
    if(err) {
      res.status(400).send();
    } else {
      res.status(200).send(results.rows[0])
    }
  })
})

app.post('/api/reviews/', (req, res) => {
  let r = req.body;
  // q = `INSERT INTO reviews(review_id, review_date, restaurant_id, user_id, description, rating) values (${r.review_id}, ${r.review_date}, ${r.restaurant_id}, ${r.user_id}, ${r.description}, ${r.rating})`
  // q = "insert into reviews(review_id, review_date, restaurant_id, user_id, description, rating) values(58248479, '9/17/2020', 563623, 555567, 'really good food', 3.7)"
  q = `update reviews SET rating=${r.rating} WHERE review_id=${r.review_id}`

  pool.query(q, (err, results) => {
    if(err) {
      res.status(400).send();
      console.log('err in index.js')
    } else {
      res.status(200).send(results.rows[0])
      console.log('saved')
    }
  })
})
app.patch('/api/reviews/', (req, res) => {
  let r = req.body;
  // q = `INSERT INTO reviews(review_id, review_date, restaurant_id, user_id, description, rating) values (${r.review_id}, ${r.review_date}, ${r.restaurant_id}, ${r.user_id}, ${r.description}, ${r.rating})`
  // q = "insert into reviews(review_id, review_date, restaurant_id, user_id, description, rating) values(58248479, '9/17/2020', 563623, 555567, 'really good food', 3.7)"
  q = `update reviews SET rating=${r.rating} WHERE review_id=${r.review_id}`

  pool.query(q, (err, results) => {
    if(err) {
      res.status(400).send();
      console.log('err in index.js')
    } else {
      res.status(200).send(results.rows[0])
      console.log('saved')
    }
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})