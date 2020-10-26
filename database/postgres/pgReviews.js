const fs = require('fs');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker')

const num_of_records = 30000000;
const num_of_docs = 10;
const doc_size = num_of_records / num_of_docs;

// const descriptionList = [faker.lorem.words(), faker.lorem.sentence(), faker.lorem.sentences(), faker.lorem.paragraph(), faker.lorem.paragraphs()];

const reviewGenerator = async (index) => {
  let reviewId = index * doc_size + 1
  const records = [];
  for (var i = 0; i < doc_size; i++) {
    records.push({
      review_id: reviewId,
      review_date: faker.date.past(),
      restaurant_id: Math.floor(Math.random() * (2500000 - 1)) + 1,
      user_id: Math.floor(Math.random() * (2500000 - 1)) + 1,
      description: faker.lorem.paragraph(),
      rating: Math.ceil(Math.random() * 50) / 10,
    })
    reviewId += 1
  }

  const reviewWriter = createCsvWriter({
    path: path.join(__dirname, 'pgCSV', `PGreview_${index}.csv`),
    header: [
      {id: 'review_id', title: 'review_id'},
      {id: 'review_date', title: 'review_date'},
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

