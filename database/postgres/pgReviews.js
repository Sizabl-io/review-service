const fs = require('fs');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker')

const num_of_records = 10000000;
const num_of_docs = 5;
const doc_size = num_of_records / num_of_docs;

const reviewGenerator = async (index) => {
  const records = [];
  for (var i = 0; i < doc_size; i++) {
    records.push({
      review_id: Math.floor(Math.random() * (2500000 - 1)) + 1,
      restaurant_id: Math.floor(Math.random() * (2500000 - 1)) + 1,
      user_id: Math.floor(Math.random() * (2500000 - 1)) + 1,
      description: faker.company.bs(),
      rating: Math.ceil(Math.random() * 50) / 10
    })
  }

  const reviewWriter = createCsvWriter({
    path: path.join(__dirname, 'pgCSV', `PGreview_${index}.csv`),
    header: [
      {id: 'review_id', title: 'review_id'},
      {id: 'restaurant_id', title:'restaurant_id'},
      {id: 'user_id', title:'user_id'},
      {id: 'description', title: 'description'},
      {id: 'rating', title: 'rating'}
    ]
  })


  await reviewWriter.writeRecords(records)
    .then(() => {
      console.log ('pg review generated done')
    })

}

const csvGenerator = async () => {
  for(var i = 0; i < num_of_docs; i++) {
    await reviewGenerator(i);
  }
}


csvGenerator();