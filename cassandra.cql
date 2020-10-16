DROP KEYSPACE IF EXISTS "reviewservice";

CREATE KEYSPACE "reviewservice" WITH REPLICATION = {
   'class' : 'SimpleStrategy',
   'replication_factor' : 1
  };

  USE "reviewservice";


  CREATE TABLE "ratings_by_restaurant" (
    restaurant_id int,
    restaurant_name text,
    create_date date,
    overall_rating int,
    one_star_rating int,
    two_star_rating int,
    three_star_rating int,
    four_star_rating int,
    five_star_rating int,
    PRIMARY KEY (restaurant_id, create_date)
  )
  WITH CLUSTERING ORDER BY (overall_rating, number_of_reviews)

  CREATE TABLE "reviews_by_restaurant" (
    restaurant_id int,
    review_id int,
    review_description text,
    create_date date,
    rating int,
    user_id int,
    first_name text,
    last_name text,
    avatar text,
    location text,
    PRIMARY KEY (restaurant_id, review_id)
  )

