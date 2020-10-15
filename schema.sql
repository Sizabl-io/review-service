DROP DATABASE  IF EXISTS reviews_database;
CREATE DATABASE reviews_databae;

\c reviews_database
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
  "location" VARCHAR(200)
);


CREATE TABLE IF NOT EXISTS "reviews" (
  "restaurant_id" INT,
  "user_id" INT REFERENCES reviews.users (user_id),
  "description" VACHAR(500),
  "rating" INT,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants (restaurant_id),
  FOREIGN KEY (user_id) REFERENCES users (user_id)
);
