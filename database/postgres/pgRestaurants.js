const fs = require('fs');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker')

const restaurantWriter = createCsvWriter({
  path: path.join(__dirname, 'pgCSV', 'PGrestaurant.csv'),
  header: [
    {id: 'restaurant_id', title: 'restaurant_id'},
    {id: 'restaurant_name', title:'restaurant_name'},
    {id: 'number_of_reviews', title: 'review_numbers'},
    {id: 'overall_rating', title: 'rating'}
  ]
})

const restaurantList = ['Chungchun Hotdogs', 'Buncker21', 'Flying Pa-Dak', 'Koko BBQ', 'Tang 88', 'The SmoKING Ribs', 'Grams BBQ', 'Kaju Tofu', 'Pho 45', 'Dry Noodle 168', 'Hue Oi', 'Tam Bien', 'Lien Hue', 'Bien Hen', 'Twinkle Boba', 'Sharetea', '7 Leaves Cafe', 'Kung Fu Tea', 'Gong Cha', 'Taste Tea Cafe', 'Tasty Noodle House', 'Ramen Zuru', 'Umaya Ramen', 'Tampopo', 'Niko Niko', 'Kabuki', 'Gyu-Kaku', 'Dip Shabu Shabu', 'Pepper Lunch', 'Yuzu Shabu', 'Geko Tei', 'Nine Seafood', 'Claws', 'Stinkin Crawfish', 'The Cajun Crab', 'Louisiana Chicken', 'Mezcalero', 'The Grasshopper', 'The Bamboo Club', 'NextDoor', 'District Wine', 'The Carvery', '555 East', 'King Fish House', 'The Crab Shack', 'Pier 76', 'Restauration', 'Simmzy', 'Crooked Duck', 'The Local Spot'];


const restaurantGenerator = () => {
  const restaurants = [];
  for (var i = 0; i < 2000000; i++) {
    restaurants.push({
      restaurant_id: Math.floor(Math.random() * (2500000 - 1)) + 1,
      restaurant_name: restaurantList[Math.floor(Math.random() * restaurantList.length)],
      number_of_reviews: Math.ceil(Math.random() * 50),
      overall_rating: Math.ceil(Math.random() * 5)
  })
}
return restaurants
}
let restaurantRecords = restaurantGenerator();

// write the data in records to csv
restaurantWriter.writeRecords(restaurantRecords)
  .then(()=> {
  console.log('pg reviewRestaurant generated done')
  });





