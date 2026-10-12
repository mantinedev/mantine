import { getInputValueProps } from './get-input-value-props';

describe('@mantine/form/get-input-value-props', () => {
  it('returns value for input type', () => {
    expect(getInputValueProps('input', 'a', undefined)).toStrictEqual({ value: 'a' });
    expect(getInputValueProps(undefined, '', undefined)).toStrictEqual({ value: '' });
  });

  it('returns checked for checkbox type', () => {
    expect(getInputValueProps('checkbox', true, 'x')).toStrictEqual({ checked: true });
  });

  it('returns checked and option value for radio type', () => {
    expect(getInputValueProps('radio', 'a', 'a')).toStrictEqual({ checked: true, value: 'a' });
    expect(getInputValueProps('radio', 'a', 'b')).toStrictEqual({ checked: false, value: 'b' });
  });
});
