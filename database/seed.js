const {pool} = require('pg');

const pool = new Pool ({
  user: 'app_user'
  host: 'localhost',
  password: 'app_password',
  port: 5432
  database: 'reviews_database',
});



module.exports = pool;



















/*
let seeder = (photos) => {

  for (let i = 1; i <= 100; i++) {
    let randomReviews = Math.ceil(Math.random() * 10);
    for (let j = 0; j < randomReviews; j++) {
      reviewData = {
        productId: i,
        userName: faker.name.firstName() + ' ' + faker.name.lastName().charAt(0) + '.',
        userAvatar: `https://photoreviews.s3-us-west-1.amazonaws.com/${photos[Math.ceil(Math.random() * photos.length) - 1].Key}`,
        userLocation: faker.address.city() + ', ' + faker.address.stateAbbr(),
        userFriends: Math.ceil(Math.random() * 25),
        userReviews: Math.ceil(Math.random() * 50),
        userPhotos: Math.ceil(Math.random() * 75),
        userEliteStatus: false,
        reviewRating: Math.ceil(Math.random() * 5),
        reviewBody: faker.lorem.paragraphs(Math.ceil(Math.random() * 4)),
        reviewDate: faker.date.past(),
        reviewPhotos: Math.ceil(Math.random() * 7),
        atrCool: Math.ceil(Math.random() * 3),
        atrUseful: Math.ceil(Math.random() * 3),
        atrFunny: Math.ceil(Math.random() * 3),
        displayPhotos: []
      };
      for (let i = 1; i <= reviewData.reviewPhotos && i <= 3; i++) {
        reviewData.displayPhotos.push(  `https://photoreviews.s3-us-west-1.amazonaws.com/${photos[Math.ceil(Math.random() * photos.length) - 1].Key}`);
      }
      let review = new Review(reviewData);
      review.save(() => {
        if (i === 100 && j === randomReviews - 1) {
          mongoose.disconnect();
        }
      });
    }
  }


};




AWS.config.loadFromPath('./config.json');

// Create S3 service object
s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Create the parameters for calling listObjects
var bucketParams = {
  Bucket: 'photoreviews',
};

//run the seeder function once the photo data has been retrieved
s3.listObjects(bucketParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    seeder(data.Contents);
  }
});

*/
