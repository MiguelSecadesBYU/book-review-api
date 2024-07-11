// src/models/reviewModel.js
const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       required:
 *         - bookId
 *         - userId
 *         - rating
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the review
 *         bookId:
 *           type: string
 *           description: The id of the book being reviewed
 *         userId:
 *           type: string
 *           description: The id of the user who wrote the review
 *         rating:
 *           type: number
 *           description: The rating given to the book
 *         comment:
 *           type: string
 *           description: Additional comments about the book
 *       example:
 *         id: d5fE_asz
 *         bookId: 60d...e8
 *         userId: 1a2...d3
 *         rating: 4
 *         comment: An excellent read!
 */

const reviewSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  userId: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
