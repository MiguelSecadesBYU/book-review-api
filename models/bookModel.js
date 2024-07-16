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
 *         - genre
 *         - description
 *         - publication
 *         - pages
 *         - editorial
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
 *         publication:
 *           type: string
 *           format: date
 *           description: The publication date of the book
 *         pages:
 *           type: integer
 *           description: The number of pages in the book
 *         editorial:
 *           type: string
 *           description: The editorial of the book
 *       example:
 *         id: d5fE_asz
 *         title: The Great Gatsby
 *         author: F. Scott Fitzgerald
 *         genre: Fiction
 *         description: A novel set in the Jazz Age.
 *         publication: "1925-04-10"
 *         pages: 180
 *         editorial: Scribner
 */

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  publication: { type: Date, required: true },
  pages: { type: Number, required: true },
  editorial: { type: String, required: true }
});

module.exports = mongoose.model('Book', bookSchema);
