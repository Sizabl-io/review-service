const fs = require('fs');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker')
const data = require('./restaurantList.js')
// restaurantList contains restaurant names from another file
const restaurantList = data.names

const num_of_records = 15000000;
const num_of_docs = 5;
const doc_size = num_of_records / num_of_docs;

const restaurantGenerator = async (index) => {
  const records = [];
  let restaurantId = index*doc_size + 1;
  for (var i = 0; i < doc_size; i++) {
    records.push({
      restaurant_id: restaurantId,
      restaurant_name: restaurantList[Math.floor(Math.random() * restaurantList.length)],
      restaurant_location: faker.address.city() + ', ' + faker.address.state(),
      number_of_reviews: Math.ceil(Math.random() * 200),
      overall_rating: Math.ceil(Math.random() * 50)/10
  })
  restaurantId += 1
}

  const restaurantWriter = createCsvWriter({
  path: path.join(__dirname, 'pgCSV', `PGrestaurant_${index}.csv`),
  header: [
    {id: 'restaurant_id', title: 'restaurant_id'},
    {id: 'restaurant_name', title:'restaurant_name'},
    {id: 'restaurant_location', title:'restaurant_location'},
    {id: 'number_of_reviews', title: 'umber_of_reviews'},
    {id: 'overall_rating', title: 'overall_rating'}
  ]
})

  await restaurantWriter.writeRecords(records)
  .then(()=> {
  console.log('pg reviewRestaurant generated done')
  });
}

const csvGenerator = async () => {
  for(var i = 0; i < num_of_docs; i++) {
    await restaurantGenerator(i);
  }
}

csvGenerator();
