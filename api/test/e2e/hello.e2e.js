const request = require('supertest');

const createApp = require('../../src/app');

describe('Test for hello world', () => {
  let app;
  let server;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3000);
  });

  describe('Test for [GET] /', () => {
    test('Should return "Hello World!"', async () => request(app).get('/').expect(200).then((response) => expect(response.text).toBe('Hello World!')));
  });

  afterAll(async () => {
    await server.close();
  });
});
