const request = require('supertest');
const app = require('../testServer');

describe('Reviews API', () => {
  let reviewId;
  const bookId = '669be06214220b7b123f3353'; 
  const userId = '669bdaf68baf44084568a1a3'; 

  // Test for creating a new review
  it('should create a new review', async () => {
    const res = await request(app)
      .post('/api/reviews')
      .send({
        bookId: bookId,
        userId: userId,
        rating: 5,
        comment: 'An excellent book'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    reviewId = res.body._id;
  });

  // Test for getting all reviews
  it('should get all reviews', async () => {
    const res = await request(app).get('/api/reviews');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  // Test for getting a review by ID
  it('should get a review by ID', async () => {
    const res = await request(app).get(`/api/reviews/${reviewId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id', reviewId);
  });

  // Test for updating a review by ID
  it('should update a review by ID', async () => {
    const res = await request(app)
      .put(`/api/reviews/${reviewId}`)
      .send({
        rating: 4,
        comment: 'A very good book'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('rating', 4);
  });

  // Test for deleting a review by ID
  it('should delete a review by ID', async () => {
    const res = await request(app).delete(`/api/reviews/${reviewId}`);
    expect(res.statusCode).toEqual(204);
  });
});
