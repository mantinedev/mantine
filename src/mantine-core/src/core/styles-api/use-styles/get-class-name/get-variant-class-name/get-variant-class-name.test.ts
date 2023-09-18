import { getVariantClassName } from './get-variant-class-name';

const testClasses = {
  test: 'test',
  'test--light': 'light-variant',
};

describe('@mantine/core/get-variant-class-name', () => {
  it('returns correct class name for variant', () => {
    expect(
      getVariantClassName({
        options: { variant: 'light' },
        classes: testClasses,
        selector: 'test',
        unstyled: false,
      })
    ).toBe('light-variant');
  });

  it('returns undefined if unstyled is true', () => {
    expect(
      getVariantClassName({
        options: { variant: 'light' },
        classes: testClasses,
        selector: 'test',
        unstyled: true,
      })
    ).toBe(undefined);
  });

  it('returns undefined if variant is not in classes', () => {
    expect(
      getVariantClassName({
        options: { variant: 'default' },
        classes: testClasses,
        selector: 'test',
        unstyled: false,
      })
    ).toBe(undefined);
  });

  it('returns undefined if variant is not defined in options', () => {
    expect(
      getVariantClassName({
        options: undefined,
        classes: testClasses,
        selector: 'test',
        unstyled: false,
      })
    ).toBe(undefined);
  });

  it('returns undefined if options are undefined', () => {
    expect(
      getVariantClassName({
        options: undefined,
        classes: testClasses,
        selector: 'test',
        unstyled: false,
      })
    ).toBe(undefined);
  });
});
