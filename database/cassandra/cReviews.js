const fs = require('fs');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker')
const data = require('./restaurantList.js')

const restaurantList = data.names
let sexes = ['female', 'male']
let sex = sexes[Math.floor(Math.random()*2)];
const num_of_records = 30000000;
const num_of_docs = 15;
const doc_size = num_of_records / num_of_docs;

const reviewGenerator = async (index) => {
  const records = [];
  let reviewId = index*doc_size + 1;
  for (var i = 0; i < doc_size; i++) {
    records.push({
      restaurant_id: Math.floor(Math.random() * (2500000 - 1)) + 1,
      review_id: reviewId,
      review_description: faker.lorem.paragraph(),
      create_date: faker.date.past(),
      rating: Math.ceil(Math.random() * 50) / 10,
      user_id: Math.floor(Math.random() * (2500000 - 1)) + 1,
      user_name: faker.internet.userName(),
      avatar: `https://bookable-hrsf130-photos.s3.us-east-2.amazonaws.com/${sex}-${Math.floor(Math.random() * 50) + 1}.jpg`,
      location: faker.address.city()
    })
    reviewId += 1
  }

  const reviewWriter = createCsvWriter({
    path: path.join(__dirname, 'cCSV', `Creview_${index}.csv`),
    header: [
      {id: 'restaurant_id', title:'restaurant_id'},
      {id: 'review_id', title:'review_id'},
      {id: 'review_description', title:'review_description'},
      {id: 'create_date', title:'create_date'},
      {id: 'rating', title:'rating'},
      {id: 'user_id', title: 'user_id'},
      {id: 'user_name', title: 'user_name'},
      {id: 'avatar', title: 'avatar'},
      {id: 'location', title: 'location'},
    ]
  })

  await reviewWriter.writeRecords(records)
    .then(() => {
      console.log ('cassandra review generated done')
    })
}

const csvGenerator = async () => {
  for (var i = 0; i < num_of_docs; i++) {
    await reviewGenerator(i)
  }
}

csvGenerator();
