require('newrelic');
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3002
const pool = require('../database/postgres/index.js')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../Front-End/client/dist'));
app.use( '/loaderio-6e99f4363eaec11c530f7ba79cbc21ff.txt', express.static( path.join(__dirname, './loaderio-6e99f4363eaec11c530f7ba79cbc21ff.txt') ) )

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

// update one review by review id
app.patch('/api/reviews/', (req, res) => {
  let r = req.body;
  q = `update reviews SET rating=${r.rating} WHERE review_id=${r.review_id}`
  pool.query(q, (err, results) => {
    if(err) {
      res.status(400).send();
      console.log('err of update')
    } else {
      res.status(200).send(results.rows[0])
      console.log('saved')
    }
  })
})

// add one new review
app.post('/api/reviews/', (req, res) => {
  let q;
  const{review_id, review_date, restaurant_id, user_id, description, rating} = req.body
  q = "INSERT INTO reviews(review_id, review_date, restaurant_id, user_id, description, rating) values ($1, $2, $3, $4, $5, $6)"
  pool.query(q, [review_id, review_date, restaurant_id, user_id, description, rating], (err, results) => {
    if(err) {
      res.status(400).send(err);
      console.log('err of post')
    } else {
      res.status(200).send()
      console.log('post worked')
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})