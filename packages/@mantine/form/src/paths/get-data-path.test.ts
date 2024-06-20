import { getDataPath } from './get-data-path';

describe('@mantine/form/get-data-path', () => {
  it('returns field path if form name is not provided', () => {
    expect(getDataPath(undefined, 'field')).toBe('field');
  });

  it('returns form name and field path if form name is provided', () => {
    expect(getDataPath('form', 'field')).toBe('form-field');
  });
});
