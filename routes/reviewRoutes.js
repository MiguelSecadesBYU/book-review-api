const express = require('express');
const {
  createReview,
  getReviews,
  getReviewById,
  updateReview,
  deleteReview,
} = require('../controllers/reviewController');
const router = express.Router();

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

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: The reviews managing API
 */

/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: Create a new review
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       201:
 *         description: The review was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       400:
 *         description: Some properties are missing or invalid
 */
router.post('/', createReview);

/**
 * @swagger
 * /api/reviews:
 *   get:
 *     summary: Returns the list of all the reviews
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: The list of the reviews
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 */
router.get('/', getReviews);

/**
 * @swagger
 * /api/reviews/{id}:
 *   get:
 *     summary: Get the review by id
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The review id
 *     responses:
 *       200:
 *         description: The review description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       404:
 *         description: The review was not found
 */
router.get('/:id', getReviewById);

/**
 * @swagger
 * /api/reviews/{id}:
 *   put:
 *     summary: Update the review by the id
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The review id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       200:
 *         description: The review was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       404:
 *         description: The review was not found
 *       400:
 *         description: Some properties are missing or invalid
 */
router.put('/:id', updateReview);

/**
 * @swagger
 * /api/reviews/{id}:
 *   delete:
 *     summary: Remove the review by id
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The review id
 *     responses:
 *       204:
 *         description: The review was deleted
 *       404:
 *         description: The review was not found
 */
router.delete('/:id', deleteReview);

module.exports = router;
