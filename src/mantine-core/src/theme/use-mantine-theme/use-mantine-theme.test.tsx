import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { MantineProvider } from '../MantineProvider/MantineProvider';
import { useMantineTheme } from './use-mantine-theme';
import { DEFAULT_THEME } from '../default-theme';

describe('../theme/use-mantine-theme', () => {
  it('returns default theme if called outside of MantineProvider', () => {
    const hook = renderHook(() => useMantineTheme());
    expect(hook.result.current).toEqual(DEFAULT_THEME);
  });

  it('returns theme from context', () => {
    const wrapper = ({ children }) => <MantineProvider>{children}</MantineProvider>;
    const hook = renderHook(() => useMantineTheme(), { wrapper });
    expect(hook.result.current).toEqual(DEFAULT_THEME);
  });

  it('overrides context theme with given themeOverride', () => {
    const theme = { ...DEFAULT_THEME, primaryColor: 'red' };
    const wrapper = ({ children }) => <MantineProvider theme={theme}>{children}</MantineProvider>;
    const hook = renderHook(
      () =>
        useMantineTheme({
          colors: { stone: ['#ccc', '#ddd', '#eee'], red: ['red'] },
          spacing: { xl: 900 },
          primaryColor: 'yellow',
        }),
      { wrapper }
    );

    expect(hook.result.current).toEqual({
      ...DEFAULT_THEME,
      primaryColor: 'yellow',
      colors: { ...DEFAULT_THEME.colors, stone: ['#ccc', '#ddd', '#eee'], red: ['red'] },
      spacing: {
        ...DEFAULT_THEME.spacing,
        xl: 900,
      },
    });
  });
});
