const fs = require('fs');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker')
const data = require('./restaurantList.js')
// restaurantList contains restaurant names from another file

const num_of_records = 10000000;
const num_of_docs = 5;
const doc_size = num_of_records / num_of_docs;
const restaurantList = data.names


const ratingGenerator = async (index) => {
  const records = [];
  let restaurantId = index*doc_size + 1;
  for (var i = 0; i < doc_size; i++) {
    records.push({
      restaurant_id: restaurantId,
      restaurant_name: restaurantList[Math.floor(Math.random() * restaurantList.length)],
      create_date: faker.date.past(),
      number_of_reviews: Math.ceil(Math.random() * 600),
      overall_rating: Math.ceil(Math.random() * 50) / 10,
      one_star_rating: Math.floor(Math.random()*(10)) / 10,
      two_star_rating: Math.floor(Math.random()*(10)) / 10,
      three_star_rating: Math.floor(Math.random()*(10)) / 10,
      four_star_rating: Math.floor(Math.random()*(10)) / 10,
      five_star_rating: Math.floor(Math.random()*(10)) / 10
    })
    restaurantId += 1
  }

  const ratingWriter = createCsvWriter({
    path: path.join(__dirname, 'cCSV', `Crating_${index}.csv`),
    header: [
      {id: 'restaurant_id', title:'restaurant_id'},
      {id: 'restaurant_name', title:'restaurant_name'},
      {id: 'create_date', title:'create_date'},
      {id: 'number_of_reviews', title:'number_of_reviews'},
      {id: 'overall_rating', title:'overall_rating'},
      {id: 'one_star_rating', title: 'one_star_rating'},
      {id: 'two_star_rating', title: 'two_star_rating'},
      {id: 'three_star_rating', title: 'three_star_rating'},
      {id: 'four_star_rating', title: 'four_star_rating'},
      {id: 'five_star_rating', title: 'five_star_rating'},
    ]
  })

    await ratingWriter.writeRecords(records)
    .then(() => {
      console.log ('cassandra rating generated done')
    })
}

const csvGenerator = async () => {
  for (var i = 0; i < num_of_docs; i++) {
    await ratingGenerator(i)
  }
}

csvGenerator();


