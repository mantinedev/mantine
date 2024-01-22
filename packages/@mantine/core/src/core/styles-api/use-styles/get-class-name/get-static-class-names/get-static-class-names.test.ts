import { getStaticClassNames } from './get-static-class-names';

describe('@mantine/core/get-static-class-names', () => {
  it('returns correct static class names for single themeName', () => {
    expect(
      getStaticClassNames({
        themeName: ['Input'],
        selector: 'wrapper',
        classNamesPrefix: 'mantine',
      })
    ).toStrictEqual(['mantine-Input-wrapper']);
  });

  it('returns correct static class names for multiple themeNames', () => {
    expect(
      getStaticClassNames({
        themeName: ['Input', 'Select'],
        selector: 'wrapper',
        classNamesPrefix: 'mantine',
      })
    ).toStrictEqual(['mantine-Input-wrapper', 'mantine-Select-wrapper']);
  });

  it('returns empty array if withStaticClass is false', () => {
    expect(
      getStaticClassNames({
        themeName: ['Input', 'Select'],
        selector: 'wrapper',
        classNamesPrefix: 'mantine',
        withStaticClass: false,
      })
    ).toStrictEqual([]);
  });
});
