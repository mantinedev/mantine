import { DEFAULT_THEME, px, rem } from '../../../../core';
import { AppShellProps } from '../../AppShell';
import { getResizedValue } from '../get-resized-value/get-resized-value';
import type { CSSVariables, MediaQueryVariables } from '../get-variables/get-variables';
import { assignNavbarVariables } from './assign-navbar-variables';

function getTestObject(navbar: AppShellProps['navbar'], mode: 'fixed' | 'static' = 'fixed') {
  const baseStyles = {};
  const minMediaStyles = {};
  const maxMediaStyles = {};

  assignNavbarVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    theme: DEFAULT_THEME,
    navbar,
    mode,
  });

  return { baseStyles, minMediaStyles, maxMediaStyles };
}

function getResizedTestObject(
  navbar: AppShellProps['navbar'],
  resizedSize: number | undefined,
  resizable = true
) {
  const baseStyles: CSSVariables = {};
  const minMediaStyles: MediaQueryVariables = {};
  const maxMediaStyles: MediaQueryVariables = {};

  assignNavbarVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    navbar,
    theme: DEFAULT_THEME,
    mode: 'fixed',
    resizedSize,
    resizable,
  });

  return { baseStyles, minMediaStyles, maxMediaStyles };
}

describe('@mantine/core/AppShell/assign-navbar-variables', () => {
  describe('assigns correct base styles', () => {
    it('undefined input', () => {
      expect(getTestObject(undefined).baseStyles).toStrictEqual({});
    });

    it('no options', () => {
      expect(getTestObject({ width: 100, breakpoint: 'sm' }).baseStyles).toStrictEqual({
        '--app-shell-navbar-width': rem(100),
        '--app-shell-navbar-offset': rem(100),
      });
    });

    it('base width', () => {
      expect(getTestObject({ width: { base: 100 }, breakpoint: 'sm' }).baseStyles).toStrictEqual({
        '--app-shell-navbar-width': rem(100),
        '--app-shell-navbar-offset': rem(100),
      });
    });
  });

  describe('assigns correct max media styles', () => {
    it('sets correct breakpoint variables', () => {
      expect(getTestObject({ width: 100, breakpoint: 'sm' }).maxMediaStyles).toStrictEqual({
        sm: {
          '--app-shell-navbar-offset': '0px',
          '--app-shell-navbar-width': '100%',
        },
      });
    });

    it('sets correct variables when navbar is collapsed on mobile', () => {
      expect(
        getTestObject({ width: 100, breakpoint: 'sm', collapsed: { mobile: true } }).maxMediaStyles
      ).toStrictEqual({
        [(px(DEFAULT_THEME.breakpoints.sm) as number) - 0.1]: {
          '--app-shell-navbar-offset': '0px',
          '--app-shell-navbar-width': '100%',
          '--app-shell-navbar-transform': 'translateX(calc(var(--app-shell-navbar-width) * -1))',
          '--app-shell-navbar-transform-rtl': 'translateX(var(--app-shell-navbar-width))',
        },
      });
    });
  });

  describe('assigns correct min media styles', () => {
    it('sets correct responsive width', () => {
      expect(
        getTestObject({ width: { base: 100, sm: 200, lg: 300 }, breakpoint: 'sm' }).minMediaStyles
      ).toStrictEqual({
        sm: {
          '--app-shell-navbar-width': rem(200),
          '--app-shell-navbar-offset': rem(200),
        },

        lg: {
          '--app-shell-navbar-width': rem(300),
          '--app-shell-navbar-offset': rem(300),
        },
      });
    });

    it('supports breakpoint=0 in static mode', () => {
      expect(getTestObject({ width: 100, breakpoint: 0 }, 'static').minMediaStyles).toStrictEqual({
        0: {
          '--app-shell-navbar-position': 'sticky',
          '--app-shell-navbar-grid-row': '2',
          '--app-shell-navbar-grid-column': '1',
          '--app-shell-main-column-start': '2',
        },
      });
    });

    it('sets correct responsive width when navbar is collapsed on desktop', () => {
      expect(
        getTestObject({
          width: { base: 100, sm: 200 },
          breakpoint: 'sm',
          collapsed: { desktop: true },
        }).minMediaStyles
      ).toStrictEqual({
        sm: {
          '--app-shell-navbar-width': rem(200),
          '--app-shell-navbar-offset': '0px !important',
          '--app-shell-navbar-transform': 'translateX(calc(var(--app-shell-navbar-width) * -1))',
          '--app-shell-navbar-transform-rtl': 'translateX(var(--app-shell-navbar-width))',
        },
      });
    });
  });
});

describe('@mantine/core/AppShell/assign-navbar-variables resize', () => {
  it('emits the resized size instead of the configured width', () => {
    const { baseStyles } = getResizedTestObject({ width: 300, breakpoint: 'sm' }, 420);

    expect(baseStyles).toMatchObject({
      '--app-shell-navbar-width': getResizedValue(420, 'horizontal'),
      '--app-shell-navbar-offset': getResizedValue(420, 'horizontal'),
    });
  });

  it('skips responsive rules when the section is resized', () => {
    const { minMediaStyles } = getResizedTestObject(
      { width: { base: 200, md: 300 }, breakpoint: 'sm' },
      420
    );

    expect(minMediaStyles.md?.['--app-shell-navbar-width']).toBeUndefined();
  });

  it('keeps the mobile full width rule and hides the handle below the breakpoint', () => {
    const { maxMediaStyles } = getResizedTestObject({ width: 300, breakpoint: 'sm' }, 420);

    expect(maxMediaStyles.sm).toMatchObject({
      '--app-shell-navbar-width': '100%',
      '--app-shell-navbar-resize-handle-display': 'none',
    });
  });

  it('hides the handle when the navbar is collapsed on desktop', () => {
    const { minMediaStyles } = getResizedTestObject(
      { width: 300, breakpoint: 'sm', collapsed: { desktop: true } },
      undefined
    );

    expect(minMediaStyles.sm).toMatchObject({
      '--app-shell-navbar-resize-handle-display': 'none',
    });
  });

  it('emits no handle variables when the section is not resizable', () => {
    const { maxMediaStyles } = getResizedTestObject(
      { width: 300, breakpoint: 'sm' },
      undefined,
      false
    );

    expect(maxMediaStyles.sm?.['--app-shell-navbar-resize-handle-display']).toBeUndefined();
  });

  it('overrides the static mode grid width', () => {
    const baseStyles = {};
    assignNavbarVariables({
      baseStyles,
      minMediaStyles: {},
      maxMediaStyles: {},
      navbar: { width: 300, breakpoint: 'sm' },
      theme: DEFAULT_THEME,
      mode: 'static',
      resizedSize: 420,
      resizable: true,
    });

    expect(baseStyles).toMatchObject({
      '--app-shell-navbar-grid-width': getResizedValue(420, 'horizontal'),
    });
  });
});
