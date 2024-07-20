const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the category
 *         name:
 *           type: string
 *           description: The name of the category
 *         description:
 *           type: string
 *           description: A brief description of the category
 *         creationDate:
 *           type: string
 *           format: date-time
 *           description: The creation date of the category
 *         lastUpdate:
 *           type: string
 *           format: date-time
 *           description: The last update date of the category
 *       example:
 *         id: d5fE_asz
 *         name: Fiction
 *         description: Category for all fiction books
 *         creationDate: "2023-07-12T19:23:00Z"
 *         lastUpdate: "2023-07-12T19:23:00Z"
 */

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  creationDate: { type: Date, default: Date.now },
  lastUpdate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Category', categorySchema);
