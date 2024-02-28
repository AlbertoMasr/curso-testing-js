const request = require('supertest');

const { generateManyBooks } = require('../../fakes/book.fake');

const mockGetAll = jest.fn();

jest.mock('../../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

const createApp = require('../../src/app');

describe('Test for books', () => {
  let app;
  let server;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3000);
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('Should return a list of books', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(4);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const response = await request(app).get('/api/v1/books').expect(200);
      // Assert
      expect(response.body.length).toEqual(fakeBooks.length);
    });
  });

  afterAll(async () => {
    await server.close();
  });
});
