const fs = require('fs');
const path = require('path')
const csvWriter = require('csv-write-stream');
// const db = require('../postgres/pgIndex.js')
let writer = csvWriter();
let faker = require('faker')



let counter = 1;

const dataGen = () => {
  writer.pipe(fs.createWriteStream(path.join(__dirname, 'pgCSV', 'PGuser.csv')));
    for (var i = 0; i < 10000000; i++) {
      writer.write({
        user_id: counter++,
        user_name: faker.name.firstName() + ' ' + faker.name.lastName().charAt(0),
        avatar: faker.image.avatar(),
        user_location: faker.address.city() + ', ' + faker.address.stateAbbr(),
        number_of_reviews: Math.ceil(Math.random() * 50)
      })
    }
    writer.end();
    console.log('pg csvUSER generated done')
}
dataGen();






