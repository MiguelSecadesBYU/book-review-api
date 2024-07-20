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
      },
    },
  },
  apis: ['./controllers/*.js'],
};

const specs = swaggerJsDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
