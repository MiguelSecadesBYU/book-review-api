const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Book Review API',
      version: '1.0.0',
      description: 'A simple API for book reviews',
    },
    servers: [
      {
        url: 'https://book-review-api-aner.onrender.com',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
      schemas: {
        Book: {
          type: 'object',
          required: ['title', 'author', 'genre', 'description', 'publication', 'pages', 'editorial'],
          properties: {
            id: { type: 'string', description: 'The auto-generated id of the book' },
            title: { type: 'string', description: 'The title of the book' },
            author: { type: 'string', description: 'The author of the book' },
            genre: { type: 'string', description: 'The genre of the book' },
            description: { type: 'string', description: 'A brief description of the book' },
            publication: { type: 'string', format: 'date', description: 'The publication date of the book' },
            pages: { type: 'integer', description: 'The number of pages in the book' },
            editorial: { type: 'string', description: 'The editorial of the book' },
          },
        },
        Review: {
          type: 'object',
          required: ['bookId', 'reviewer', 'rating', 'comment'],
          properties: {
            id: { type: 'string', description: 'The auto-generated id of the review' },
            bookId: { type: 'string', description: 'The id of the book being reviewed' },
            reviewer: { type: 'string', description: 'The name of the reviewer' },
            rating: { type: 'number', description: 'The rating given by the reviewer' },
            comment: { type: 'string', description: 'The comment provided by the reviewer' },
          },
        },
        User: {
          type: 'object',
          required: ['username', 'password'],
          properties: {
            id: { type: 'string', description: 'The auto-generated id of the user' },
            username: { type: 'string', description: 'The username of the user' },
            password: { type: 'string', description: 'The password of the user' },
          },
        },
        Category: {
          type: 'object',
          required: ['name', 'description'],
          properties: {
            id: { type: 'string', description: 'The auto-generated id of the category' },
            name: { type: 'string', description: 'The name of the category' },
            description: { type: 'string', description: 'The description of the category' },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
