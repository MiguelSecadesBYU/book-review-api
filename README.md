# Book Review API

This is a Node.js REST API for managing books and their reviews. It allows users to create, read, update, and delete books and reviews. The API is built with Express.js and MongoDB, and it uses Mongoose for database operations. Swagger is used for API documentation.

## Features

- Create, read, update, and delete books
- Create, read, update, and delete reviews
- Validation of input data
- Error handling
- API documentation with Swagger

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/book-review-api.git
    ```

2. Install dependencies:

    ```bash
    cd book-review-api
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB URI and other environment variables:

    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    ```

## Running the API

To start the server in development mode with nodemon:

```bash
npm run dev
```

To start the server in production mode:

```bash
npm start
```
The server will be running on http://localhost:3000.

## API Endpoints

```bash
Books
  POST /books - Create a new book
  GET /books - Retrieve all books
  GET /books/:id - Retrieve a single book by ID
  PUT /books/:id - Update a book by ID
  DELETE /books/:id - Delete a book by ID
Reviews
  POST /reviews - Create a new review
  GET /reviews - Retrieve all reviews
  GET /reviews/:id - Retrieve a single review by ID
  PUT /reviews/:id - Update a review by ID
  DELETE /reviews/:id - Delete a review by ID
Users
  POST /users/register - Register a new user
  POST /users/login - Login a user
  GET /users/profile - Retrieve user profile
```

## Validation

The API uses express-validator for input validation to ensure data integrity and to provide meaningful error messages.

## Error Handling

Errors are handled gracefully and appropriate HTTP status codes are returned. Error details are logged to the console.

## API Documentation

Swagger is used for API documentation. Once the server is running, you can access the API documentation at http://localhost:3000/api-docs.

## Project Structure

```bash
/src
  /config
    db.js
  /controllers
    authController.js
    bookController.js
    reviewController.js
  /models
    userModel.js
    bookModel.js
    reviewModel.js
  /routes
    authRoutes.js
    bookRoutes.js
    reviewRoutes.js
package.json
README.md 
server.js
swagger.js
```


## Author

Miguel Secades García

## Course

CSE 341 Web Services - Brigham Young University - Idaho


