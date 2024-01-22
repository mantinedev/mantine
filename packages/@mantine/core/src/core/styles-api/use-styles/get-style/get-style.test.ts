import { DEFAULT_THEME, MantineTheme } from '../../../MantineProvider';
import { getStyle, GetStyleInput } from './get-style';

const THEME_WITH_STYLES: MantineTheme = {
  ...DEFAULT_THEME,
  components: {
    TestComponentObject: {
      styles: {
        root: { color: 'red' },
      },
    },

    TestComponentFunction: {
      styles: (theme: MantineTheme, props: Record<string, any>) => ({
        root: { background: props['data-color'], outlineColor: theme.colors.red[0] },
      }),
    },
  },
};

const defaultOptions: GetStyleInput = {
  theme: DEFAULT_THEME,
  themeName: [],
  selector: 'root',
  rootSelector: 'root',
  options: undefined,
  props: {},
  stylesCtx: undefined,
  styles: undefined,
  style: undefined,
  vars: undefined,
  varsResolver: undefined,
};

describe('@mantine/core/get-style', () => {
  it('resolves style prop', () => {
    expect(getStyle({ ...defaultOptions, style: { color: 'red' } })).toStrictEqual({
      color: 'red',
    });

    expect(
      getStyle({ ...defaultOptions, style: [{ color: 'red' }, { background: 'blue' }] })
    ).toStrictEqual({ color: 'red', background: 'blue' });

    expect(
      getStyle({
        ...defaultOptions,
        style: [(theme) => ({ color: theme.colors.red[0] }), { background: 'blue' }],
      })
    ).toStrictEqual({ color: DEFAULT_THEME.colors.red[0], background: 'blue' });
  });

  it('does not resolve style if selector is not rootSelector', () => {
    expect(
      getStyle({
        ...defaultOptions,
        rootSelector: 'root',
        selector: 'child',
        style: { color: 'red' },
      })
    ).toStrictEqual({});
  });

  it('resolves options.style', () => {
    expect(getStyle({ ...defaultOptions, options: { style: { color: 'red' } } })).toStrictEqual({
      color: 'red',
    });

    expect(
      getStyle({
        ...defaultOptions,
        options: { style: [{ color: 'red' }, { background: 'blue' }] },
      })
    ).toStrictEqual({ color: 'red', background: 'blue' });

    expect(
      getStyle({
        ...defaultOptions,
        options: { style: [(theme) => ({ color: theme.colors.red[0] }), { background: 'blue' }] },
      })
    ).toStrictEqual({ color: DEFAULT_THEME.colors.red[0], background: 'blue' });
  });

  it('resolves styles', () => {
    expect(
      getStyle({
        ...defaultOptions,
        styles: { root: { color: 'red' } },
      })
    ).toStrictEqual({ color: 'red' });

    expect(
      getStyle({
        ...defaultOptions,
        styles: (theme) => ({ root: { color: theme.colors.red[0] } }),
      })
    ).toStrictEqual({ color: DEFAULT_THEME.colors.red[0] });
  });

  it('resolves options.styles', () => {
    expect(
      getStyle({
        ...defaultOptions,
        options: { styles: { root: { color: 'red' } } },
      })
    ).toStrictEqual({ color: 'red' });

    expect(
      getStyle({
        ...defaultOptions,
        options: { styles: (theme) => ({ root: { color: theme.colors.red[0] } }) },
      })
    ).toStrictEqual({ color: DEFAULT_THEME.colors.red[0] });
  });

  it('resolves theme styles', () => {
    expect(
      getStyle({
        ...defaultOptions,
        theme: THEME_WITH_STYLES,
        themeName: ['TestComponentObject'],
      })
    ).toStrictEqual({ color: 'red' });

    expect(
      getStyle({
        ...defaultOptions,
        theme: THEME_WITH_STYLES,
        props: { 'data-color': 'blue' },
        themeName: ['TestComponentObject', 'TestComponentFunction'],
      })
    ).toStrictEqual({
      color: 'red',
      background: 'blue',
      outlineColor: DEFAULT_THEME.colors.red[0],
    });
  });

  it('resolves vars', () => {
    expect(
      getStyle({
        ...defaultOptions,
        vars: (theme) => ({ root: { '--color': theme.colors.red[0] } }),
      })
    ).toStrictEqual({ '--color': DEFAULT_THEME.colors.red[0] });
  });

  it('resolves varsResolver', () => {
    expect(
      getStyle({
        ...defaultOptions,
        varsResolver: (theme) => ({ root: { '--color': theme.colors.red[0] } }),
      })
    ).toStrictEqual({ '--color': DEFAULT_THEME.colors.red[0] });
  });
});
