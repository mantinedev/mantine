import { replacePath } from './replace-path';

describe('@mantine/form/replace-path', () => {
  it('replaces item at specified index in array', () => {
    expect(replacePath('field', 'new', 1, { field: ['old', 'old'] })).toEqual({
      field: ['old', 'new'],
    });
  });

  it('does nothing if path is not an array', () => {
    expect(replacePath('field', 'new', 1, { field: 'old' })).toEqual({ field: 'old' });
  });

  it('does nothing if index is out of bounds', () => {
    expect(replacePath('field', 'new', 2, { field: ['old'] })).toEqual({ field: ['old'] });
  });
});
