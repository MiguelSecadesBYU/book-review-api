// src/models/bookModel.js
const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of the book
 *         author:
 *           type: string
 *           description: The author of the book
 *         genre:
 *           type: string
 *           description: The genre of the book
 *         description:
 *           type: string
 *           description: A brief description of the book
 *       example:
 *         id: d5fE_asz
 *         title: The Great Gatsby
 *         author: F. Scott Fitzgerald
 *         genre: Fiction
 *         description: A novel set in the Jazz Age.
 */

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  description: { type: String },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
