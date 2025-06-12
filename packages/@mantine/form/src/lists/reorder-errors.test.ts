import { reorderErrors } from './reorder-errors';

describe('@mantine/form/reorder-errors', () => {
  it('reorders errors at given path', () => {
    expect(reorderErrors('a', { from: 2, to: 0 }, { 'a.0': true })).toStrictEqual({
      'a.2': true,
    });
    expect(reorderErrors('a', { from: 2, to: 0 }, { 'a.0': true, 'a.2': 'Error' })).toStrictEqual({
      'a.0': 'Error',
      'a.2': true,
    });
  });

  it('reorders all keys with the same index', () => {
    expect(
      reorderErrors(
        'sortable',
        { from: 0, to: 1 },
        {
          'sortable.0.value1': 'Error 1',
          'sortable.0.value2': 'Error 2',
          'sortable.1.value1': 'Error 3',
          'sortable.1.value2': 'Error 4',
        }
      )
    ).toStrictEqual({
      'sortable.0.value1': 'Error 3',
      'sortable.0.value2': 'Error 4',
      'sortable.1.value1': 'Error 1',
      'sortable.1.value2': 'Error 2',
    });
  });

  it('handles nested properties correctly', () => {
    expect(
      reorderErrors(
        'items',
        { from: 0, to: 2 },
        {
          'items.0.name': 'Name error',
          'items.0.nested.field': 'Nested error',
          'items.2.name': 'Name error 2',
        }
      )
    ).toStrictEqual({
      'items.0.name': 'Name error 2',
      'items.2.name': 'Name error',
      'items.2.nested.field': 'Nested error',
    });
  });

  it('returns unchanged object if path does not exist', () => {
    const errors = { 'a.0': true };
    expect(reorderErrors('c', { from: 1, to: 2 }, errors)).toStrictEqual(errors);
  });
});
