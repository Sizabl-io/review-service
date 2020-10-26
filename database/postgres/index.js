const {Pool, Client} = require('pg');

const config = {
  host: 'localhost',
  port: 5432,
  user: 'app_user',
  password: 'app_password',
  database: "reviews_database",
};

const pool = new Pool(config);

pool.connect(err => {
  if(err) {
    console.log('connection err', err)
  } else {
    console.log('connected to pg')
  }
})


module.exports = pool;