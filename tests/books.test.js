const request = require('supertest');
const app = require('../testServer');

describe('Books API', () => {
  let bookId;

  // Test for creating a new book
  it('should create a new book', async () => {
    const res = await request(app)
      .post('/api/books')
      .send({
        title: 'Test Book',
        author: 'Test Author',
        genre: 'Test Genre',
        description: 'Test Description'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    bookId = res.body._id;
  });

  // Test for getting all books
  it('should get all books', async () => {
    const res = await request(app).get('/api/books');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  // Test for getting a book by ID
  it('should get a book by ID', async () => {
    const res = await request(app).get(`/api/books/${bookId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id', bookId);
  });

  // Test for updating a book by ID
  it('should update a book by ID', async () => {
    const res = await request(app)
      .put(`/api/books/${bookId}`)
      .send({
        title: 'Updated Test Book',
        author: 'Updated Test Author',
        genre: 'Updated Test Genre',
        description: 'Updated Test Description'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('title', 'Updated Test Book');
  });

  // Test for deleting a book by ID
  it('should delete a book by ID', async () => {
    const res = await request(app).delete(`/api/books/${bookId}`);
    expect(res.statusCode).toEqual(204);
  });
});
