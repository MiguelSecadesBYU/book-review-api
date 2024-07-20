const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Book Review API',
      version: '1.0.0',
      description: 'API for managing book reviews, users, and categories',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      schemas: {
        Book: {
          type: 'object',
          required: ['title', 'author'],
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
        Review: {
          type: 'object',
          required: ['bookId', 'userId', 'rating'],
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
              type: 'number',
              description: 'The rating given to the book',
            },
            comment: {
              type: 'string',
              description: 'Additional comments about the book',
            },
          },
          example: {
            id: 'd5fE_asz',
            bookId: '60d...e8',
            userId: '1a2...d3',
            rating: 4,
            comment: 'An excellent read!',
          },
        },
        User: {
          type: 'object',
          required: ['name', 'email', 'password'],
          properties: {
            id: {
              type: 'string',
              description: 'The auto-generated id of the user',
            },
            name: {
              type: 'string',
              description: 'The name of the user',
            },
            email: {
              type: 'string',
              description: 'The email of the user',
            },
            password: {
              type: 'string',
              description: 'The hashed password of the user',
            },
          },
          example: {
            id: 'd5fE_asz',
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: 'hashedpassword123',
          },
        },
        Category: {
          type: 'object',
          required: ['name'],
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
            creationDate: {
              type: 'string',
              format: 'date-time',
              description: 'The creation date of the category',
            },
            lastUpdate: {
              type: 'string',
              format: 'date-time',
              description: 'The last update date of the category',
            },
          },
          example: {
            id: 'd5fE_asz',
            name: 'Fiction',
            description: 'Category for all fiction books',
            creationDate: '2023-07-12T19:23:00Z',
            lastUpdate: '2023-07-12T19:23:00Z',
          },
        },
      },
    },
  },
  apis: ['./controllers/*.js'], 
};

const specs = swaggerJsDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
