test('Object', () => {
  const data = { name: 'Coco' };
  data.lastName = 'Sotevas';
  expect(data).toEqual({ name: 'Coco', lastName: 'Sotevas' });
});

test('Null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('Boolean', () => {
  const data = true;
  expect(data).toBeTruthy();
  expect(data).not.toBeFalsy();
  expect(0).toBeFalsy();
  expect('').toBeFalsy();

  expect(true).toEqual(true);
  expect(false).toBe(false);
});

test('String', () => {
  const data = 'Hello World';
  expect(data).toMatch(/World/);
  expect(data).toHaveLength(11);
});

test('Array', () => {
  const data = [1, 2, 3, 4, 5];
  expect(data).toContain(3);
  expect(data).toHaveLength(5);
});
