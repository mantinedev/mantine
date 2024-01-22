import { DEFAULT_THEME } from '../../MantineProvider';
import { getBoxStyle } from './get-box-style';

describe('@mantine/core/Box/get-box-style', () => {
  it('returns empty object if no style or vars provided', () => {
    expect(getBoxStyle({ theme: DEFAULT_THEME, styleProps: {} })).toStrictEqual({});
    expect(getBoxStyle({ theme: DEFAULT_THEME, style: {}, styleProps: {} })).toStrictEqual({});
    expect(getBoxStyle({ theme: DEFAULT_THEME, vars: {}, styleProps: {} })).toStrictEqual({});
    expect(
      getBoxStyle({ theme: DEFAULT_THEME, vars: {}, style: {}, styleProps: {} })
    ).toStrictEqual({});
    expect(
      getBoxStyle({ theme: DEFAULT_THEME, vars: () => ({}), style: () => ({}), styleProps: {} })
    ).toStrictEqual({});
  });

  it('merges style and vars', () => {
    expect(
      getBoxStyle({
        theme: DEFAULT_THEME,
        style: { color: 'red' },
        vars: { '--test': 'red' },
        styleProps: {},
      })
    ).toStrictEqual({
      color: 'red',
      '--test': 'red',
    });

    expect(
      getBoxStyle({
        theme: DEFAULT_THEME,
        style: (theme) => ({ color: theme.colors.blue[7] }),
        vars: (theme) => ({ '--test': theme.spacing.md }),
        styleProps: {},
      })
    ).toStrictEqual({
      color: DEFAULT_THEME.colors.blue[7],
      '--test': DEFAULT_THEME.spacing.md,
    });
  });

  it('merges array styles and vars', () => {
    expect(
      getBoxStyle({
        theme: DEFAULT_THEME,
        style: [{ color: 'red' }, { backgroundColor: 'blue' }],
        vars: [{ '--test': 'red' }, { '--test2': 'blue' }],
        styleProps: {},
      })
    ).toStrictEqual({
      color: 'red',
      backgroundColor: 'blue',
      '--test': 'red',
      '--test2': 'blue',
    });

    expect(
      getBoxStyle({
        theme: DEFAULT_THEME,
        style: [{ color: 'red' }, (theme) => ({ backgroundColor: theme.colors.blue[7] })],
        vars: [{ '--test': 'red' }, (theme) => ({ '--test2': theme.spacing.md })],
        styleProps: {},
      })
    ).toStrictEqual({
      color: 'red',
      backgroundColor: DEFAULT_THEME.colors.blue[7],
      '--test': 'red',
      '--test2': DEFAULT_THEME.spacing.md,
    });
  });

  it('merges deeply nested array styles and vars', () => {
    expect(
      getBoxStyle({
        theme: DEFAULT_THEME,
        style: [{ color: 'red' }, [{ backgroundColor: 'blue' }]],
        vars: [{ '--test': 'red' }, [{ '--test2': 'blue' }]],
        styleProps: {},
      })
    ).toStrictEqual({
      color: 'red',
      backgroundColor: 'blue',
      '--test': 'red',
      '--test2': 'blue',
    });

    expect(
      getBoxStyle({
        theme: DEFAULT_THEME,
        style: [{ color: 'red' }, [(theme) => ({ backgroundColor: theme.colors.blue[7] })]],
        vars: [{ '--test': 'red' }, [(theme) => ({ '--test2': theme.spacing.md })]],
        styleProps: {},
      })
    ).toStrictEqual({
      color: 'red',
      backgroundColor: DEFAULT_THEME.colors.blue[7],
      '--test': 'red',
      '--test2': DEFAULT_THEME.spacing.md,
    });
  });
});
