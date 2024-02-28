const Person = require('../src/05-person');

describe('Set test for IMC calculation', () => {
  let person;
  beforeAll(() => {
    person = new Person('Coco', 80, 1.80);
  });

  afterAll(() => {
    person = null;
  });

  test('Lower weight', () => {
    person.weight = 50;
    expect(person.calcIMC()).toBe('down');
  });

  test('Normal weight', () => {
    person.weight = 70;
    expect(person.calcIMC()).toBe('normal');
  });

  test('Overweight', () => {
    person.weight = 90;
    expect(person.calcIMC()).toBe('overweight');
  });
});
