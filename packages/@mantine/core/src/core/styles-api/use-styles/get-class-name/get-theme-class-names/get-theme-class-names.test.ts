import { DEFAULT_THEME, MantineTheme } from '../../../../MantineProvider';
import { getThemeClassNames } from './get-theme-class-names';

const testTheme: MantineTheme = {
  ...DEFAULT_THEME,
  components: {
    TestComponentObject: {
      classNames: {
        root: 'test-object',
      },
    },

    TestComponentFunction: {
      classNames: (_: any, props: Record<string, any>) => ({
        root: `test-function-${props.test}`,
      }),
    },
  },
};

describe('@mantine/core/get-theme-class-names', () => {
  it('returns empty array if themeName is empty', () => {
    expect(
      getThemeClassNames({
        themeName: [],
        theme: testTheme,
        selector: 'root',
        props: {},
        stylesCtx: undefined,
      })
    ).toStrictEqual([]);
  });

  it('returns correct classes for object classNames on theme', () => {
    expect(
      getThemeClassNames({
        themeName: ['TestComponentObject'],
        theme: testTheme,
        selector: 'root',
        props: {},
        stylesCtx: undefined,
      })
    ).toStrictEqual(['test-object']);
  });

  it('returns correct classes for function classNames on theme', () => {
    expect(
      getThemeClassNames({
        themeName: ['TestComponentFunction'],
        theme: testTheme,
        selector: 'root',
        props: { test: '__test' },
        stylesCtx: undefined,
      })
    ).toStrictEqual(['test-function-__test']);
  });

  it('returns array of undefined if component is not defined on theme', () => {
    expect(
      getThemeClassNames({
        themeName: ['TestComponentNotDefined'],
        theme: testTheme,
        selector: 'root',
        props: {},
        stylesCtx: undefined,
      })
    ).toStrictEqual([undefined]);
  });
});
