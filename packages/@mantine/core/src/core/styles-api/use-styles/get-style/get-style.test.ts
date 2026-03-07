import { DEFAULT_THEME } from '../../../MantineProvider';
import { getStyle, GetStyleInput } from './get-style';

const defaultOptions: GetStyleInput = {
  theme: DEFAULT_THEME,
  selector: 'root',
  rootSelector: 'root',
  options: undefined,
  props: {},
  stylesCtx: undefined,
  resolvedStyles: {},
  resolvedThemeStyles: {},
  resolvedVars: {},
  resolvedRootStyle: {},
};

describe('@mantine/core/get-style', () => {
  it('resolves style prop', () => {
    expect(getStyle({ ...defaultOptions, resolvedRootStyle: { color: 'red' } })).toStrictEqual({
      color: 'red',
    });

    expect(
      getStyle({ ...defaultOptions, resolvedRootStyle: { color: 'red', background: 'blue' } })
    ).toStrictEqual({ color: 'red', background: 'blue' });

    expect(
      getStyle({
        ...defaultOptions,
        resolvedRootStyle: { color: DEFAULT_THEME.colors.red[0], background: 'blue' },
      })
    ).toStrictEqual({ color: DEFAULT_THEME.colors.red[0], background: 'blue' });
  });

  it('does not resolve style if selector is not rootSelector', () => {
    expect(
      getStyle({
        ...defaultOptions,
        rootSelector: 'root',
        selector: 'child',
        resolvedRootStyle: { color: 'red' },
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
        resolvedStyles: { root: { color: 'red' } },
      })
    ).toStrictEqual({ color: 'red' });

    expect(
      getStyle({
        ...defaultOptions,
        resolvedStyles: { root: { color: DEFAULT_THEME.colors.red[0] } },
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
        resolvedThemeStyles: { root: { color: 'red' } },
      })
    ).toStrictEqual({ color: 'red' });

    expect(
      getStyle({
        ...defaultOptions,
        resolvedThemeStyles: {
          root: { color: 'red', background: 'blue', outlineColor: DEFAULT_THEME.colors.red[0] },
        },
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
        resolvedVars: { root: { '--color': DEFAULT_THEME.colors.red[0] } },
      })
    ).toStrictEqual({ '--color': DEFAULT_THEME.colors.red[0] });
  });

  it('resolves varsResolver', () => {
    expect(
      getStyle({
        ...defaultOptions,
        resolvedVars: { root: { '--color': DEFAULT_THEME.colors.red[0] } },
      })
    ).toStrictEqual({ '--color': DEFAULT_THEME.colors.red[0] });
  });
});
