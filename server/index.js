const express = require('express');
const app = express();
const port = 5555;
const db = require('../database');
const bodyParser = require('body-parser');


app.use(express.static(__dirname + '/../client/dist'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening to reviews server on port ${port}`);

});


app.get('/api/reviews/:id', (req, res) => {
  db.getReviews(req.query.text, req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(401).send();
    } else {
      res.status(200).send(data);
    }

  });


});