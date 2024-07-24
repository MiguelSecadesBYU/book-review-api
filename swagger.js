const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger configuration options
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Book Review API',
      version: '1.0.0',
      description: 'API for managing books and reviews'
    },
    servers: [
      {
        url: 'https://book-review-api-aner.onrender.com'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        Book: {
          type: 'object',
          required: ['title', 'author', 'genre', 'description', 'publication', 'pages', 'editorial'],
          properties: {
            id: {
              type: 'string',
              description: 'The auto-generated id of the book'
            },
            title: {
              type: 'string',
              description: 'The title of the book'
            },
            author: {
              type: 'string',
              description: 'The author of the book'
            },
            genre: {
              type: 'string',
              description: 'The genre of the book'
            },
            description: {
              type: 'string',
              description: 'A brief description of the book'
            },
            publication: {
              type: 'string',
              format: 'date',
              description: 'The publication date of the book'
            },
            pages: {
              type: 'integer',
              description: 'The number of pages in the book'
            },
            editorial: {
              type: 'string',
              description: 'The editorial of the book'
            }
          },
          example: {
            id: 'd5fE_asz',
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            genre: 'Fiction',
            description: 'A novel set in the Jazz Age.',
            publication: '1925-04-10',
            pages: 180,
            editorial: 'Scribner'
          }
        },
        Review: {
          type: 'object',
          required: ['bookId', 'userId', 'rating', 'comment'],
          properties: {
            id: {
              type: 'string',
              description: 'The auto-generated id of the review'
            },
            bookId: {
              type: 'string',
              description: 'The id of the book being reviewed'
            },
            userId: {
              type: 'string',
              description: 'The id of the user who wrote the review'
            },
            rating: {
              type: 'integer',
              description: 'The rating given to the book'
            },
            comment: {
              type: 'string',
              description: 'The comment about the book'
            }
          },
          example: {
            id: 'a3f5g8d7',
            bookId: 'd5fE_asz',
            userId: 'u9f6g7d8',
            rating: 5,
            comment: 'An amazing read, highly recommend it!'
          }
        },
        Category: {
          type: 'object',
          required: ['name', 'description'],
          properties: {
            id: {
              type: 'string',
              description: 'The auto-generated id of the category'
            },
            name: {
              type: 'string',
              description: 'The name of the category'
            },
            description: {
              type: 'string',
              description: 'A brief description of the category'
            }
          },
          example: {
            id: 'c1f7h8d9',
            name: 'Fiction',
            description: 'Fictional books'
          }
        },
        User: {
          type: 'object',
          required: ['username', 'password', 'email'],
          properties: {
            id: {
              type: 'string',
              description: 'The auto-generated id of the user'
            },
            username: {
              type: 'string',
              description: 'The username of the user'
            },
            password: {
              type: 'string',
              description: 'The password of the user'
            },
            email: {
              type: 'string',
              description: 'The email of the user'
            }
          },
          example: {
            id: 'u9f6g7d8',
            username: 'john_doe',
            password: 'password123',
            email: 'john_doe@example.com'
          }
        }
      }
    }
  },
  apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerDocs, swaggerUi };
