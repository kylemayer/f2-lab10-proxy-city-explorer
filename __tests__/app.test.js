require('dotenv').config();

const fakeRequest = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {

  test('location', async() => {

    const expectation = [

    ];

    const data = await fakeRequest(app)
      .get('/location....')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });
});
