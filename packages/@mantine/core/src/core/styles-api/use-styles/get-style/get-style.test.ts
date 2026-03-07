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

  it('resolvedStyles overrides resolvedThemeStyles for same property', () => {
    expect(
      getStyle({
        ...defaultOptions,
        resolvedThemeStyles: { root: { color: 'red' } },
        resolvedStyles: { root: { color: 'blue' } },
      })
    ).toStrictEqual({ color: 'blue' });
  });

  it('resolvedVars overrides resolvedStyles for same property', () => {
    expect(
      getStyle({
        ...defaultOptions,
        resolvedStyles: { root: { color: 'red' } },
        resolvedVars: { root: { color: 'blue' } },
      })
    ).toStrictEqual({ color: 'blue' });
  });

  it('resolvedRootStyle overrides resolvedVars for same property', () => {
    expect(
      getStyle({
        ...defaultOptions,
        resolvedVars: { root: { color: 'red' } },
        resolvedRootStyle: { color: 'blue' },
      })
    ).toStrictEqual({ color: 'blue' });
  });

  it('options.style overrides all other sources for same property', () => {
    expect(
      getStyle({
        ...defaultOptions,
        resolvedThemeStyles: { root: { color: 'theme' } },
        resolvedStyles: { root: { color: 'component' } },
        resolvedVars: { root: { color: 'vars' } },
        resolvedRootStyle: { color: 'root' },
        options: { style: { color: 'options' } },
      })
    ).toStrictEqual({ color: 'options' });
  });

  it('options.styles overrides resolvedStyles but not resolvedVars', () => {
    expect(
      getStyle({
        ...defaultOptions,
        resolvedStyles: { root: { color: 'component', background: 'red' } },
        options: { styles: { root: { color: 'options' } } },
        resolvedVars: { root: { color: 'vars' } },
      })
    ).toStrictEqual({ color: 'vars', background: 'red' });
  });

  it('all sources compose non-overlapping properties', () => {
    expect(
      getStyle({
        ...defaultOptions,
        resolvedThemeStyles: { root: { color: 'red' } },
        resolvedStyles: { root: { background: 'blue' } },
        resolvedVars: { root: { '--size': '10px' } },
        resolvedRootStyle: { fontSize: '14px' },
        options: { style: { fontWeight: 'bold' } },
      })
    ).toStrictEqual({
      color: 'red',
      background: 'blue',
      '--size': '10px',
      fontSize: '14px',
      fontWeight: 'bold',
    });
  });

  it('returns empty for non-root selector when only resolvedRootStyle is set', () => {
    expect(
      getStyle({
        ...defaultOptions,
        selector: 'label',
        resolvedRootStyle: { color: 'red' },
      })
    ).toStrictEqual({});
  });
});
