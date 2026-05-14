import { getBoxMod } from './get-box-mod';

describe('@mantine/core/Box/get-box-mod', () => {
  it('returns null if mod is not provided', () => {
    expect(getBoxMod()).toBe(null);
  });

  it('transforms adds data- prefix to keys that do not have it', () => {
    expect(getBoxMod({ test: true, 'data-test-2': true })).toStrictEqual({
      'data-test': true,
      'data-test-2': true,
    });
  });

  it('returns object with truthy data attributes', () => {
    expect(
      getBoxMod({
        'data-test': true,
        'data-test-2': 'test',
        'data-test-3': undefined,
        'data-test-4': null,
        'data-test-5': '',
        'data-test-6': false,
      })
    ).toStrictEqual({
      'data-test': true,
      'data-test-2': 'test',
    });
  });

  it('supports array of mods', () => {
    expect(
      getBoxMod([
        {
          'data-test': true,
          'data-test-2': 'test',
          'data-test-3': undefined,
          'data-test-4': null,
          'data-test-5': '',
          'data-test-6': false,
        },
        {
          'data-test': false,
          'data-test-2': 'test-2',
          'data-test-3': undefined,
          'data-test-4': null,
          'data-test-5': '',
          'data-test-6': false,
        },
      ])
    ).toStrictEqual({
      'data-test': true,
      'data-test-2': 'test-2',
    });
  });

  it('correctly converts nested array of mods', () => {
    expect(getBoxMod([[{ 'data-test': true }]])).toStrictEqual({ 'data-test': true });
  });

  it('supports string mod', () => {
    expect(getBoxMod('test')).toStrictEqual({ 'data-test': true });
    expect(getBoxMod('data-test')).toStrictEqual({ 'data-test': true });

    expect(getBoxMod(['test', { variant: 'test' }])).toStrictEqual({
      'data-test': true,
      'data-variant': 'test',
    });
  });

  it('converts camelCase to kebab-case', () => {
    expect(getBoxMod({ someValue: true })).toStrictEqual({
      'data-some-value': true,
    });
    expect(getBoxMod('someValue')).toStrictEqual({
      'data-some-value': true,
    });
    expect(getBoxMod({ myCustomProp: 'test' })).toStrictEqual({
      'data-my-custom-prop': 'test',
    });
  });

  it('converts data- prefixed camelCase to kebab-case', () => {
    expect(getBoxMod({ 'data-SomeValue': true })).toStrictEqual({
      'data-some-value': true,
    });
    expect(getBoxMod('data-someValue')).toStrictEqual({
      'data-some-value': true,
    });
    expect(getBoxMod({ 'data-MyCustomProp': 'test' })).toStrictEqual({
      'data-my-custom-prop': 'test',
    });
  });

  it('handles mixed kebab-case and camelCase', () => {
    expect(
      getBoxMod({
        'data-test': true,
        someValue: 'value',
        'data-anotherValue': true,
        regularKey: false,
      })
    ).toStrictEqual({
      'data-test': true,
      'data-some-value': 'value',
      'data-another-value': true,
    });
  });
});
