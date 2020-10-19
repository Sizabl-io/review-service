const fs = require('fs');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker')
const data = require('./restaurantList.js')
// restaurantList contains restaurant names from another file

const num_of_records = 100;
const num_of_docs = 5;
const doc_size = num_of_records / num_of_docs;
const restaurantList = data.names




const reviewGenerator = async (index) => {
  const records = [];
  for (var i = 0; i < doc_size; i++) {
    records.push({
      restaurant_id: Math.floor(Math.random() * (2500000 - 1)) + 1,
      restaurant_name: restaurantList[Math.floor(Math.random() * restaurantList.length)],
      review_description: faker.company.bs(),
      create_date: faker.date.past(),
      rating: Math.ceil(Math.random() * 50) / 10,
      user_id: Math.floor(Math.random() * (2500000 - 1)) + 1,
      user_name: faker.name.firstName() + ' ' + faker.name.lastName().charAt(0),
      avatar: faker.image.avatar(),
      location: faker.address.city()
    })
  }

  const reviewWriter = createCsvWriter({
    path: path.join(__dirname, 'cCSV', `Creview_${index}.csv`),
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

  reviewWriter.writeRecords(records)
    .then(() => {
      console.log ('pg review generated done')
    })
}

const csvGenerator = async () => {
  for (var i = 0; i < num_of_docs; i++) {
    await reviewGenerator(i)
  }
}

csvGenerator();


