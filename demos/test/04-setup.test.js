describe('Set', () => {
  beforeAll(() => {
    // Up db
  });

  afterAll(() => {
    // Down db
  });

  beforeEach(() => {
    // Create data
  });

  afterEach(() => {
    // Delete data
  });

  test('Case 1', () => {
    expect(1).toBe(1);
  });

  test('Case 2', () => {
    expect(2).toBe(2);
  });

  test('Case 3', () => {
    expect(3).toBe(2);
  });
  describe('Nested set', () => {
    beforeAll(() => {
      // Up db
    });

    afterAll(() => {
      // Down db
    });

    test('Case 4', () => {
      expect(4).toBe(4);
    });

    test('Case 5', () => {
      expect(5).toBe(5);
    });

    test('Case 6', () => {
      expect(6).toBe(6);
    });
  });
});
