DROP KEYSPACE IF EXISTS "reviewservice";

CREATE KEYSPACE "reviewservice" WITH REPLICATION = {
   'class' : 'SimpleStrategy',
   'replication_factor' : 1
  };

  USE "reviewservice";

  CREATE TABLE "ratings_by_restaurant" (
    restaurant_id int,
    restaurant_name text,
    create_date text,
    number_of_reviews int,
    overall_rating float,
    one_star_rating float,
    two_star_rating float,
    three_star_rating float,
    four_star_rating float,
    five_star_rating float,
    PRIMARY KEY (restaurant_id, overall_rating)
  );

  CREATE TABLE "reviews_by_restaurant" (
    restaurant_id int,
    review_id int,
    review_description text,
    create_date text,
    rating float,
    user_id int,
    user_name text,
    avatar text,
    location text,
    PRIMARY KEY (restaurant_id, review_id)
  );

COPY ratings_by_restaurant(restaurant_id, restaurant_name, create_date, number_of_reviews, overall_rating,  one_star_rating, two_star_rating, three_star_rating, four_star_rating, five_star_rating) FROM '/Users/babyfox/Desktop/review-service/database/cassandra/cCSV/Crating_0.csv' WITH HEADER=TRUE and delimiter=',';

COPY ratings_by_restaurant(restaurant_id, restaurant_name, create_date, number_of_reviews, overall_rating,  one_star_rating, two_star_rating, three_star_rating, four_star_rating, five_star_rating) FROM '/Users/babyfox/Desktop/review-service/database/cassandra/cCSV/Crating_1.csv' WITH HEADER=TRUE and delimiter=',';
COPY ratings_by_restaurant(restaurant_id, restaurant_name, create_date, number_of_reviews, overall_rating,  one_star_rating, two_star_rating, three_star_rating, four_star_rating, five_star_rating) FROM '/Users/babyfox/Desktop/review-service/database/cassandra/cCSV/Crating_2.csv' WITH HEADER=TRUE and delimiter=',';
COPY ratings_by_restaurant(restaurant_id, restaurant_name, create_date, number_of_reviews, overall_rating,  one_star_rating, two_star_rating, three_star_rating, four_star_rating, five_star_rating) FROM '/Users/babyfox/Desktop/review-service/database/cassandra/cCSV/Crating_3.csv' WITH HEADER=TRUE and delimiter=',';
COPY ratings_by_restaurant(restaurant_id, restaurant_name, create_date, number_of_reviews, overall_rating,  one_star_rating, two_star_rating, three_star_rating, four_star_rating, five_star_rating) FROM '/Users/babyfox/Desktop/review-service/database/cassandra/cCSV/Crating_4.csv' WITH HEADER=TRUE and delimiter=',';

COPY reviews_by_restaurant(restaurant_id, review_id, review_description, create_date, rating, user_id,  user_name, avatar, location) FROM '/Users/babyfox/Desktop/review-service/database/cassandra/cCSV/Creview_0.csv' WITH HEADER=TRUE and delimiter=',';
COPY reviews_by_restaurant(restaurant_id, review_id, review_description, create_date, rating, user_id,  user_name, avatar, location) FROM '/Users/babyfox/Desktop/review-service/database/cassandra/cCSV/Creview_1.csv' WITH HEADER=TRUE and delimiter=',';
COPY reviews_by_restaurant(restaurant_id, review_id, review_description, create_date, rating, user_id,  user_name, avatar, location) FROM '/Users/babyfox/Desktop/review-service/database/cassandra/cCSV/Creview_2.csv' WITH HEADER=TRUE and delimiter=',';
COPY reviews_by_restaurant(restaurant_id, review_id, review_description, create_date, rating, user_id,  user_name, avatar, location) FROM '/Users/babyfox/Desktop/review-service/database/cassandra/cCSV/Creview_3.csv' WITH HEADER=TRUE and delimiter=',';
COPY reviews_by_restaurant(restaurant_id, review_id, review_description, create_date, rating, user_id,  user_name, avatar, location) FROM '/Users/babyfox/Desktop/review-service/database/cassandra/cCSV/Creview_4.csv' WITH HEADER=TRUE and delimiter=',';


