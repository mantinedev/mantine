import { clearListState } from './clear-list-state';

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

describe('@mantine/form/clear-list-state', () => {
  it('clears list errors of given field', () => {
    expect(clearListState('fruits', TEST_ERRORS)).toStrictEqual({
      name: 'name-error',
      'nested.0.inner.1.name': 'nested-error-1',
      'nested.0.inner.2.name': 'nested-error-2',
      'nested.2.inner.2.name': 'keep-nested-error-1',
      'nested.3.inner.0.name': 'keep-nested-error-2',
      'nested.5.inner.1.check': 'keep-nested-error-2',
      'nested.0.inner.2.check': 'nested-error-3',
      'nested.0.inner.5.check': 'nested-error-4',
    });
  });

  it('clears deeply nested errors', () => {
    expect(clearListState('nested.0.inner', TEST_ERRORS)).toStrictEqual({
      name: 'name-error',

      'fruits.0.name': 'fruit-error-1',
      'fruits.0.available': 'fruit-error-2',
      'fruits.4.available': 'fruit-error-3',
      'fruits.15.inner.name': 'fruit-error-4',
      'fruits.15.inner.0.name': 'fruit-error-5',

      'nested.2.inner.2.name': 'keep-nested-error-1',
      'nested.3.inner.0.name': 'keep-nested-error-2',
      'nested.5.inner.1.check': 'keep-nested-error-2',
    });
  });
});
