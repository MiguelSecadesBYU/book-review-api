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
            id: {
              type: 'string',
              description: 'The auto-generated id of the book',
            },
            title: {
              type: 'string',
              description: 'The title of the book',
            },
            author: {
              type: 'string',
              description: 'The author of the book',
            },
            genre: {
              type: 'string',
              description: 'The genre of the book',
            },
            description: {
              type: 'string',
              description: 'A brief description of the book',
            },
            publication: {
              type: 'string',
              format: 'date',
              description: 'The publication date of the book',
            },
            pages: {
              type: 'integer',
              description: 'The number of pages in the book',
            },
            editorial: {
              type: 'string',
              description: 'The editorial of the book',
            },
          },
          example: {
            id: 'd5fE_asz',
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            genre: 'Fiction',
            description: 'A novel set in the Jazz Age.',
            publication: '1925-04-10',
            pages: 180,
            editorial: 'Scribner',
          },
        },
        Category: {
          type: 'object',
          required: ['name', 'description'],
          properties: {
            id: {
              type: 'string',
              description: 'The auto-generated id of the category',
            },
            name: {
              type: 'string',
              description: 'The name of the category',
            },
            description: {
              type: 'string',
              description: 'A brief description of the category',
            },
          },
          example: {
            id: '1',
            name: 'Fiction',
            description: 'Fictional books',
          },
        },
        Review: {
          type: 'object',
          required: ['bookId', 'userId', 'rating', 'comment'],
          properties: {
            id: {
              type: 'string',
              description: 'The auto-generated id of the review',
            },
            bookId: {
              type: 'string',
              description: 'The id of the book being reviewed',
            },
            userId: {
              type: 'string',
              description: 'The id of the user who wrote the review',
            },
            rating: {
              type: 'integer',
              description: 'The rating given by the user',
            },
            comment: {
              type: 'string',
              description: 'The comment of the review',
            },
          },
          example: {
            id: '1',
            bookId: 'd5fE_asz',
            userId: '1',
            rating: 5,
            comment: 'Excellent book!',
          },
        },
        User: {
          type: 'object',
          required: ['username', 'email', 'password'],
          properties: {
            id: {
              type: 'string',
              description: 'The auto-generated id of the user',
            },
            username: {
              type: 'string',
              description: 'The username of the user',
            },
            email: {
              type: 'string',
              description: 'The email of the user',
            },
            password: {
              type: 'string',
              description: 'The password of the user',
            },
          },
          example: {
            id: '1',
            username: 'johndoe',
            email: 'johndoe@example.com',
            password: 'password123',
          },
        },
      },
    },
  },
  apis: ['./routes/*.js', './models/*.js'],
};

const specs = swaggerJSDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
