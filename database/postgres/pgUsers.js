const fs = require('fs');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker')

let sexes = ['female', 'male']
let sex = sexes[Math.floor(Math.random()*2)];

const num_of_records = 10000000;
const num_of_docs = 5;
const doc_size = num_of_records / num_of_docs;


const userGenerator = async (index) => {
  let userId = index * doc_size + 1
  const records = [];
  for (var i = 0; i < doc_size; i++) {
    records.push({
      user_id: userId,
      user_name: faker.internet.userName(),
      avatar: `https://bookable-hrsf130-photos.s3.us-east-2.amazonaws.com/${sex}-${Math.floor(Math.random() * 50) + 1}.jpg`,
      user_location: faker.address.city(),
      number_of_reviews: Math.floor(Math.random() * (2500000 - 1)) + 1
    })
    userId += 1;
  }

  const userWriter = createCsvWriter({
    path: path.join(__dirname, 'pgCSV', `PGuser_${index}.csv`),
    header: [
      {id: 'user_id', title: 'user_id'},
      {id: 'user_name', title:'user_name'},
      {id: 'avatar', title:'avatar'},
      {id: 'user_location', title: 'user_location'},
      {id: 'number_of_reviews', title: 'number_of_reviews'}
    ]
  })

  await userWriter.writeRecords(records)
    .then(() => {
      console.log ('pg user generated done')
    })
}

const csvGenerator = async () => {
  for(var i = 0; i < num_of_docs; i++) {
    await userGenerator(i);
  }
}

csvGenerator();
