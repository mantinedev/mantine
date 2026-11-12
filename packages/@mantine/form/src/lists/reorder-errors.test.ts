import { reorderErrors } from './reorder-errors';

describe('@mantine/form/reorder-errors', () => {
  it('reorders errors at given path', () => {
    expect(reorderErrors('a', { from: 2, to: 0 }, { 'a.0': true })).toStrictEqual({
      'a.1': true,
    });
    expect(reorderErrors('a', { from: 2, to: 0 }, { 'a.0': true, 'a.2': 'Error' })).toStrictEqual({
      'a.0': 'Error',
      'a.1': true,
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
      'items.1.name': 'Name error 2',
      'items.2.name': 'Name error',
      'items.2.nested.field': 'Nested error',
    });
  });

  it('does not move errors of items whose index starts with the same digits', () => {
    expect(
      reorderErrors(
        'items',
        { from: 1, to: 0 },
        {
          'items.0.name': 'Error 0',
          'items.1.name': 'Error 1',
          'items.10.name': 'Error 10',
          'items.12': 'Error 12',
        }
      )
    ).toStrictEqual({
      'items.0.name': 'Error 1',
      'items.1.name': 'Error 0',
      'items.10.name': 'Error 10',
      'items.12': 'Error 12',
    });
  });

  it.each([
    { from: 0, to: 2, expected: { 'items.0': 'B', 'items.1': 'C', 'items.2': 'A' } },
    { from: 2, to: 0, expected: { 'items.0': 'C', 'items.1': 'A', 'items.2': 'B' } },
  ])('moves errors from $from to $to without mutating the input', ({ from, to, expected }) => {
    const errors = { 'items.0': 'A', 'items.1': 'B', 'items.2': 'C', 'items.3': 'D' };

    expect(reorderErrors('items', { from, to }, errors)).toStrictEqual({
      ...expected,
      'items.3': 'D',
    });
    expect(errors).toStrictEqual({
      'items.0': 'A',
      'items.1': 'B',
      'items.2': 'C',
      'items.3': 'D',
    });
  });

  it('preserves path boundaries and non-index properties of nested lists', () => {
    expect(
      reorderErrors(
        'group.items',
        { from: 0, to: 2 },
        {
          'group.items.1.nested.0.name': 'B',
          'group.items.10.name': 'Outside interval',
          'group.items.01.name': 'Non-index property',
          'group.items.1a.name': 'Non-index property',
          'group.items.name': 'List property',
          'group.items': 'List error',
          'group.itemsExtra.1.name': 'Sibling list',
          'other.group.items.1.name': 'Unrelated path',
        }
      )
    ).toStrictEqual({
      'group.items.0.nested.0.name': 'B',
      'group.items.10.name': 'Outside interval',
      'group.items.01.name': 'Non-index property',
      'group.items.1a.name': 'Non-index property',
      'group.items.name': 'List property',
      'group.items': 'List error',
      'group.itemsExtra.1.name': 'Sibling list',
      'other.group.items.1.name': 'Unrelated path',
    });
  });

  it('preserves errors when an item is moved to its current index', () => {
    const errors = { 'items.0': 'A', 'items.1.name': 'B', 'items.2': 'C' };
    expect(reorderErrors('items', { from: 1, to: 1 }, errors)).toStrictEqual(errors);
  });

  it('returns unchanged object if path does not exist', () => {
    const errors = { 'a.0': true };
    expect(reorderErrors('c', { from: 1, to: 2 }, errors)).toStrictEqual(errors);
  });
});
