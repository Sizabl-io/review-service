CREATE TABLE "restaurants" (
  "id" SERIAL PRIMARY KEY,
  "restaurant_name" varchar(60),
  "first_name" varchar(60) NOT NULL,
  "last_name" varchar(60) NOT NULL,
  "number_of_reviews" int,
  "overall_rating" int
);

CREATE TABLE "reviews" (
  "id" SERIAL PRIMARY KEY,
  "restaurant_id" int NOT NULL,
  "user_id" int,
  "description" varchar(500),
  "rating" int
);

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar(60) NOT NULL,
  "last_name" varchar(60) NOT NULL,
  "avatar" int,
  "location" varchar(200)
);

ALTER TABLE "reviews" ADD FOREIGN KEY ("restaurant_id") REFERENCES "restaurants" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "reviews" ("user_id");
