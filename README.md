# Review-Service

# Server API

 ## Get review info
  - GET `/api/reviews/:id`

 ## Path Parameters:
  - `id` review id

 Success Status Code: 200

 Returns: JSON

  `{
    productId: Number,
  userName: String,
  userAvatar: String,
  userLocation: String,
  userFriends: Number,
  userReviews: Number,
  userPhotos: Number,
  userEliteStatus: Boolean,
  reviewRating: Number,
  reviewBody: String,
  reviewDate: Date,
  reviewPhotos: Number,
  atrCool: Number,
  atrUseful: Number,
  atrFunny: Number,
  displayPhotos: [String]
  }`


  ## Add Review
    - POST `/api/reviews/`

    success Status Code: 201

    Request Body: Expects JSON with the following keys

    {
     userName: String,
     userReviews: Number,
     reviewRating: Number,
     reviewBody: String,
     reviewDate: Date,
    }


  ## Update review info
    - PATCH `/api/reviews/:id`

   ### Path Parameters:
    - `id` review id
   ### Success Status Code: 204

   ### Request Body: Expects JSON with any of the following keys (include only keys to be updated)

     `  {
     userName: String,
     userReviews: Number,
     reviewRating: Number,
     reviewBody: String,
     reviewDate: Date,
    }`



  ## Delete review
    - DELETE `/api/review/:id`


  ### Path Parameters:
    - `id` review id

  ### Success Status Code: 204


