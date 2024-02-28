const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence(),
});

const generateManyBooks = (size = 10) => {
  const books = [];
  for (let i = 0; i < size; i += 1) {
    books.push(generateOneBook());
  }
  return [...books];
};

module.exports = { generateOneBook, generateManyBooks };
