DROP DATABASE  IF EXISTS reviews_database;
CREATE DATABASE reviews_database;

DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS restaurants;

-- \c reviews_database
CREATE TABLE IF NOT EXISTS "restaurants" (
  "restaurant_id" SERIAL PRIMARY KEY,
  "restaurant_name" VARCHAR(60) UNIQUE NOT NULL,
  "number_of_reviews" INT,
  "overall_rating" DECIMAL,
  "one_star_rating" DECIMAL,
  "two_star_rating" DECIMAL,
  "three_star_rating" DECIMAL,
  "four_star_rating" DECIMAL,
  "five_star_rating" DECIMAL
);


CREATE TABLE IF NOT EXISTS  "users" (
  "user_id" SERIAL PRIMARY KEY,
  "first_name" VARCHAR(60) NOT NULL,
  "last_name" VARCHAR(60) NOT NULL,
  "avatar" INT,
  "location" VARCHAR(200)，
  "number_of_reviews" INT
);


CREATE TABLE IF NOT EXISTS "reviews" (
  "review_id" INT
  "restaurant_id" INT,
  "user_id" INT,
  "description" VARCHAR(500),
  "rating" INT,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants (restaurant_id),
  FOREIGN KEY (user_id) REFERENCES users (user_id)
);
