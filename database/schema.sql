DROP KEYSPACE IF EXISTS "reviewservice";

CREATE KEYSPACE "reviewservice" WITH REPLICATION = {
   'class' : 'SimpleStrategy',
   'replication_factor' : 1
  };

  USE "reviewservice";

  CREATE TABLE "users" (
    user_id int PRIMARY KEY,
    first_name text,
    last_name text,
    avatar text,
    location text,
);

  CREATE TABLE "restaurants" (
    restaurant_id int,
    restaurant_name text,
    number_of_reviews int,
    overall_rating int,
    one_star_rating int,
    two_star_rating int,
    three_star_rating int,
    four_star_rating int,
    five_star_rating int,
    PRIMARY KEY ((restaurant_id, id), date, user_id)
  )
  WITH CLUSTERING ORDER BY (overall_rating, number_of_reviews)

  CREATE TABLE "reviews" (
    review_id int PRIMARY KEY,
    restaurant_id int,
    user_id int,
    create_date date,
    description text,
    rating int
  )