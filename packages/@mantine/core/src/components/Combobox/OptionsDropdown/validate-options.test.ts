import { validateOptions } from './validate-options';

describe('@mantine/core/Combobox/validate-options', () => {
  it('does not throw for valid options', () => {
    expect(() =>
      validateOptions([
        { value: '1', label: '1' },
        { group: 'Group', items: [{ value: '2', label: '2' }] },
      ])
    ).not.toThrow();
  });

  it('throws when option has no value', () => {
    expect(() => validateOptions([{ label: '1' }])).toThrow(
      '[@mantine/core] Each option must have value property'
    );
  });

  it('throws on duplicate values', () => {
    expect(() =>
      validateOptions([
        { value: '1', label: '1' },
        { value: '1', label: 'Duplicate' },
      ])
    ).toThrow('Option with value "1" was provided more than once');
  });

  it('throws on duplicate values across groups', () => {
    expect(() =>
      validateOptions([
        { group: 'A', items: [{ value: '1', label: '1' }] },
        { group: 'B', items: [{ value: '1', label: '1' }] },
      ])
    ).toThrow('Option with value "1" was provided more than once');
  });
});
