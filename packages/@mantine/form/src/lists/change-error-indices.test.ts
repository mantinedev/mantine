import { changeErrorIndices } from './change-error-indices';

const TEST_ERRORS = {
  name: 'name-error',

  // Single level of nesting
  'fruits.0.name': 'fruit-error-1',
  'fruits.0.available': 'fruit-error-2',
  'fruits.4.available': 'fruit-error-3',
  'fruits.15.inner.name': 'fruit-error-4',
  'fruits.15.inner.0.name': 'fruit-error-5',

  // Multiple levels of nesting
  'nested.0.inner.1.name': 'nested-error-1',
  'nested.0.inner.2.name': 'nested-error-2',
  'nested.2.inner.2.name': 'keep-nested-error-1',
  'nested.3.inner.0.name': 'keep-nested-error-2',
  'nested.5.inner.1.check': 'keep-nested-error-2',
  'nested.0.inner.2.check': 'nested-error-3',
  'nested.0.inner.5.check': 'nested-error-4',
};

describe('@mantine/form/change-error-indices', () => {
  it('increments error indices', () => {
    expect(changeErrorIndices('fruits', 4, TEST_ERRORS, 1)).toStrictEqual({
      name: 'name-error',
      // Errors with index lower than the given one don't change
      'fruits.0.name': 'fruit-error-1',
      'fruits.0.available': 'fruit-error-2',
      // Increment everything else
      'fruits.5.available': 'fruit-error-3',
      'fruits.16.inner.name': 'fruit-error-4',
      'fruits.16.inner.0.name': 'fruit-error-5',
      // Ignore non-matching paths
      'nested.0.inner.1.name': 'nested-error-1',
      'nested.0.inner.2.name': 'nested-error-2',
      'nested.2.inner.2.name': 'keep-nested-error-1',
      'nested.3.inner.0.name': 'keep-nested-error-2',
      'nested.5.inner.1.check': 'keep-nested-error-2',
      'nested.0.inner.2.check': 'nested-error-3',
      'nested.0.inner.5.check': 'nested-error-4',
    });
  });

  it('decrements error indices and removes errors for the removed element', () => {
    expect(changeErrorIndices('fruits', 4, TEST_ERRORS, -1)).toStrictEqual({
      name: 'name-error',
      // Errors with index lower than the given one don't change
      'fruits.0.name': 'fruit-error-1',
      'fruits.0.available': 'fruit-error-2',
      // Remove the error with the given index
      // Decrement everything else
      'fruits.14.inner.name': 'fruit-error-4',
      'fruits.14.inner.0.name': 'fruit-error-5',
      // Ignore non-matching paths
      'nested.0.inner.1.name': 'nested-error-1',
      'nested.0.inner.2.name': 'nested-error-2',
      'nested.2.inner.2.name': 'keep-nested-error-1',
      'nested.3.inner.0.name': 'keep-nested-error-2',
      'nested.5.inner.1.check': 'keep-nested-error-2',
      'nested.0.inner.2.check': 'nested-error-3',
      'nested.0.inner.5.check': 'nested-error-4',
    });
  });

  it('increments deeply nested errors', () => {
    expect(changeErrorIndices('nested.0.inner', 2, TEST_ERRORS, 1)).toStrictEqual({
      name: 'name-error',
      'fruits.0.name': 'fruit-error-1',
      'fruits.0.available': 'fruit-error-2',
      'fruits.4.available': 'fruit-error-3',
      'fruits.15.inner.name': 'fruit-error-4',
      'fruits.15.inner.0.name': 'fruit-error-5',
      'nested.0.inner.1.name': 'nested-error-1',
      'nested.0.inner.3.name': 'nested-error-2',
      'nested.2.inner.2.name': 'keep-nested-error-1',
      'nested.3.inner.0.name': 'keep-nested-error-2',
      'nested.5.inner.1.check': 'keep-nested-error-2',
      'nested.0.inner.3.check': 'nested-error-3',
      'nested.0.inner.6.check': 'nested-error-4',
    });
  });

  it('decrements deeply nested errors and removes errors for the removed element', () => {
    expect(changeErrorIndices('nested.0.inner', 2, TEST_ERRORS, -1)).toStrictEqual({
      name: 'name-error',
      'fruits.0.name': 'fruit-error-1',
      'fruits.0.available': 'fruit-error-2',
      'fruits.4.available': 'fruit-error-3',
      'fruits.15.inner.name': 'fruit-error-4',
      'fruits.15.inner.0.name': 'fruit-error-5',
      'nested.0.inner.1.name': 'nested-error-1',
      'nested.2.inner.2.name': 'keep-nested-error-1',
      'nested.3.inner.0.name': 'keep-nested-error-2',
      'nested.5.inner.1.check': 'keep-nested-error-2',
      'nested.0.inner.4.check': 'nested-error-4',
    });
  });

  describe('returns unchanged object', () => {
    it('if index is undefined', () => {
      expect(changeErrorIndices('fruits', undefined, TEST_ERRORS, 1)).toStrictEqual(TEST_ERRORS);
    });

    it('if path is not a string', () => {
      expect(changeErrorIndices(1, 1, TEST_ERRORS, 1)).toStrictEqual(TEST_ERRORS);
    });

    it('if path does not exist', () => {
      expect(changeErrorIndices('does-not-exist', 1, TEST_ERRORS, 1)).toStrictEqual(TEST_ERRORS);
    });

    it('if index is bigger than any error index', () => {
      expect(changeErrorIndices('fruits', 100, TEST_ERRORS, 1)).toStrictEqual(TEST_ERRORS);
    });
  });
});
