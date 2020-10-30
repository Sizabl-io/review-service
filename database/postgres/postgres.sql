DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;

DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS restaurants;
-- \c reviews
CREATE TABLE "restaurants" (
  "restaurant_id" SERIAL PRIMARY KEY,
  "restaurant_name" text NOT NULL,
  "restaurant_location" text,
  "number_of_reviews" INT,
  "overall_rating" DECIMAL
);

CREATE TABLE "users" (
  "user_id" SERIAL PRIMARY KEY,
  "user_name" VARCHAR(80) NOT NULL,
  "avatar" VARCHAR,
  "user_location" VARCHAR(200),
  "number_of_reviews" INT
);

CREATE TABLE "reviews" (
  "review_id" INT,
  "review_date" VARCHAR,
  "restaurant_id" INT,
  "user_id" INT,
  "description" VARCHAR,
  "rating" DECIMAL,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants (restaurant_id),
  FOREIGN KEY (user_id) REFERENCES users (user_id)
);


ALTER TABLE "reviews" DISABLE TRIGGER ALL;

\COPY restaurants(restaurant_id, restaurant_name, restaurant_location, number_of_reviews, overall_rating) FROM '/home/ec2-user/pgCSV/PGrestaurant_0.csv' DELIMITER ',' CSV HEADER;

\COPY restaurants(restaurant_id, restaurant_name, restaurant_location, number_of_reviews, overall_rating) FROM '/home/ec2-user/pgCSV/PGrestaurant_1.csv' DELIMITER ',' CSV HEADER;

\COPY restaurants(restaurant_id, restaurant_name, restaurant_location,number_of_reviews, overall_rating) FROM '/home/ec2-user/pgCSV/PGrestaurant_2.csv' DELIMITER ',' CSV HEADER;
\COPY restaurants(restaurant_id, restaurant_name, restaurant_location,number_of_reviews, overall_rating) FROM '/home/ec2-user/pgCSV/PGrestaurant_3.csv' DELIMITER ',' CSV HEADER;
\COPY restaurants(restaurant_id, restaurant_name, restaurant_location,number_of_reviews, overall_rating) FROM '/home/ec2-user/pgCSV/PGrestaurant_4.csv' DELIMITER ',' CSV HEADER;

\COPY users(user_id, user_name, avatar, user_location, number_of_reviews) FROM '/home/ec2-user/pgCSV/PGuser_0.csv' DELIMITER ',' CSV HEADER;
\COPY users(user_id, user_name, avatar, user_location, number_of_reviews) FROM '/home/ec2-user/pgCSV/PGuser_1.csv' DELIMITER ',' CSV HEADER;
\COPY users(user_id, user_name, avatar, user_location, number_of_reviews) FROM '/home/ec2-user/pgCSV/PGuser_2.csv' DELIMITER ',' CSV HEADER;
\COPY users(user_id, user_name, avatar, user_location, number_of_reviews) FROM '/home/ec2-user/pgCSV/PGuser_3.csv' DELIMITER ',' CSV HEADER;
\COPY users(user_id, user_name, avatar, user_location, number_of_reviews) FROM '/home/ec2-user/pgCSV/PGuser_4.csv' DELIMITER ',' CSV HEADER;

\COPY reviews(review_id, review_date, restaurant_id, user_id, description, rating) FROM '/home/ec2-user/pgCSV/PGreview_0.csv' DELIMITER ',' CSV HEADER;
\COPY reviews(review_id, review_date, restaurant_id, user_id, description, rating) FROM '/home/ec2-user/pgCSV/PGreview_1.csv' DELIMITER ',' CSV HEADER;

\COPY reviews(review_id, review_date, restaurant_id, user_id, description, rating) FROM '/home/ec2-user/pgCSV/PGreview_2.csv' DELIMITER ',' CSV HEADER;

\COPY reviews(review_id, review_date, restaurant_id, user_id, description, rating) FROM '/home/ec2-user/pgCSV/PGreview_3.csv' DELIMITER ',' CSV HEADER;

\COPY reviews(review_id, review_date, restaurant_id, user_id, description, rating) FROM '/home/ec2-user/pgCSV/PGreview_4.csv' DELIMITER ',' CSV HEADER;
\COPY reviews(review_id, review_date, restaurant_id, user_id, description, rating) FROM '/home/ec2-user/pgCSV/PGreview_5.csv' DELIMITER ',' CSV HEADER;

\COPY reviews(review_id, review_date, restaurant_id, user_id, description, rating) FROM '/home/ec2-user/pgCSV/PGreview_6.csv' DELIMITER ',' CSV HEADER;
\COPY reviews(review_id, review_date, restaurant_id, user_id, description, rating) FROM '/home/ec2-user/pgCSV/PGreview_7.csv' DELIMITER ',' CSV HEADER;

