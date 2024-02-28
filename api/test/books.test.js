const BooksService = require('../src/services/books.service');
const { generateManyBooks } = require('../fakes/book.fake');

const mockGetAll = jest.fn();

// const MongoLibStub = {
//   getAll: mockGetAll,
//   create: () => {},
// };

jest.mock('../src/lib/mongo.lib.js', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Testo for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('Should return a list of books', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(9);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Should be The amazing title', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(4);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books[0].title).toEqual(fakeBooks[0].title);
    });
  });
});
