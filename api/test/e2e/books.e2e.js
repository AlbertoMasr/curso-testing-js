const request = require('supertest');

const { MongoClient } = require('mongodb');
const { config } = require('../../src/config');

const { generateManyBooks } = require('../../fakes/book.fake');

const createApp = require('../../src/app');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app;
  let server;
  let database;
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3000);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('Should return a list of books', async () => {
      // Arrange
      const seedData = await database.collection('books').insertMany(generateManyBooks(3));
      // Act
      const response = await request(app).get('/api/v1/books').expect(200);
      // Assert
      expect(response.body.length).toEqual(seedData.insertedCount);
    });
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });
});
