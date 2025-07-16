const request = require('supertest');
const app = require('./server');

describe('Express App', () => {
  test('GET / should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });

  test('GET /api should return JSON', async () => {
    const response = await request(app).get('/api');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'API is working' });
  });
});
