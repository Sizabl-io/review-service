const fs = require('fs');
const path = require('path');
const csvWriter = require('csv-write-stream');
const db = require('')
let writer = csvWriter();
let faker = require('faker')

let counter = 1;

const dataGen = () => {
  writer.pipe(fs.createWriteStream(path.join(__dirname, 'pgCSV', 'PGreview.csv')));
    for (var i = 0; i < 1000000; i++) {
      writer.write({
        review_id: counter++,
        restaurant_id: Math.floor(Math.random() * (10000000 - 1)) + 1,
        user_id: Math.floor(Math.random() * (10000000 - 1)) + 1,
        description: faker.food.description(),
        rating: faker.random.number({
          min: 1,
          max: 5,
          precision: 0.01,
      })
      })

    }
    writer.end();
    console.log('pg reviewCSV generated done')
}
dataGen();