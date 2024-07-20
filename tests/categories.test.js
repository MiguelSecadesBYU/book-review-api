const request = require('supertest');
const app = require('../testServer');

describe('Categories API', () => {
  let categoryId;

  // Test for creating a new category
  it('should create a new category', async () => {
    const res = await request(app)
      .post('/api/categories')
      .send({
        name: 'New Category',
        description: 'A brief description'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    categoryId = res.body._id;
  });

  // Test for getting all categories
  it('should get all categories', async () => {
    const res = await request(app).get('/api/categories');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  // Test for getting a category by ID
  it('should get a category by ID', async () => {
    const res = await request(app).get(`/api/categories/${categoryId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id', categoryId);
  });

  // Test for updating a category by ID
  it('should update a category by ID', async () => {
    const res = await request(app)
      .put(`/api/categories/${categoryId}`)
      .send({
        name: 'Updated Category',
        description: 'An updated description'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Updated Category');
  });

  // Test for deleting a category by ID
  it('should delete a category by ID', async () => {
    const res = await request(app).delete(`/api/categories/${categoryId}`);
    expect(res.statusCode).toEqual(204);
  });
});
