# Review-Service

# Server API

## Get all reviews of one restaurant
  - GET `/api/restaurant/:{restaurant_id}/reviews`
 ## Path Parameters:
  - `restaurant_id` restaurant id
  
   Success Status Code: 200

Req: JSON

  `{
     "restaurant_id": "integer",
  "restaurant_name": "string",
  "number_of_reviews": "integer",
  "overall_rating": "integer",
  "one_star_rating": "integer",
  "two_star_rating": "integer",
  "three_star_rating": "integer",
  "four_star_rating": "integer",
  "five_star_rating": "integer"
  }`
 ## Get one review info
  - GET `/api/restaurant/:{restaurant_id}/reviews/:{review_id}`

 ## Path Parameters:
  - `restaurant_id` restaurant id
  - `review_id` review id

 Success Status Code: 200

 Req: JSON

  `{
     "restaurant_id": "integer",
  "restaurant_name": "string",
  "user_id": "integer"
  "review_id": "integer",
  "rating": "integer",
  "description": "string",
  "one_star_rating": "integer",
  "two_star_rating": "integer",
  "three_star_rating": "integer",
  "four_star_rating": "integer",
  "five_star_rating": "integer"
  }`


  ## Add Review
    - POST `/api/restaurant/:{restaurant_id}/reviews`
  ## Path Parameters:
  - `restaurant_id` restaurant id
  
    success Status Code: 201

    Request Body: Expects JSON with the following keys

   ` {
  "restaurant_id": "integer",
  "restaurant_name": "string",
  "user_id": "integer"
  "review_id": "integer",
  "rating": "integer",
  "description": "string",
    }`

## Create a new user
    - POST `/api/users`

   ### Path Parameters:
    N/A
    
    success Status Code: 201

 Req: JSON
       `{
      "first_name" : "string",
      "last_name" : "string",
      "avatar" : "string",
      "location" : "string",
    }`
 
 
  ## Update review info
    - PATCH `api/restaurant/:{restaurant_id}/reviews/:{review_id}`

   ### Path Parameters:
    - `restaurant_id` restaurant id
    - `review_id` review id
  
   ### Success Status Code: 204

   ### Request Body: Expects JSON with any of the following keys (include only keys to be updated)

     `  {
      "restaurant_id": "integer",
      "restaurant_name": "string",
      "user_id": "integer"
      "review_id": "integer",
      "rating": "integer",
      "description": "string",
    }`

  ## Update user info
    - PATCH `api/users/: {user_id}
   ### Path Parameters:
   - `user_id`  user id
   ### Success Status Code: 204

   ### Request Body: Expects JSON with any of the following keys (include only keys to be updated)
   
    `{
      "first_name" : "string",
      "last_name" : "string",
      "avatar" : "string",
      "location" : "string",
    }`
  ## Delete review
    - DELETE `/api/restaurant/:{restaurant_id}/reviews/:{review_id}`


  ### Path Parameters:
    - `restaurant_id` restaurant id
    - `review_id` review id

  ### Success Status Code: 204
  
  ## Delete user
     - DELETE `api/users/:{user_id}`
     
  ### Path Parameters:
        `user_id` user id

  ### Success Status Code: 204


#### Postgress schema diagram https://app.diagrams.net/?src=about#G1lhFISIX8PbDvX_BNxNrNKF1vbN-fb3oP

#### Cassandra schema diagram https://app.diagrams.net/?src=about#G1FFW8gfQobvYm7Fk8ztkYRI7PHCBdcNky
