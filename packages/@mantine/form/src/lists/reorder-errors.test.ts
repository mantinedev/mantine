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

  it('returns unchanged object if path does not exist', () => {
    const errors = { 'a.0': true };
    expect(reorderErrors('c', { from: 1, to: 2 }, errors)).toStrictEqual(errors);
  });
});
