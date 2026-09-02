import { DEFAULT_THEME, px, rem } from '../../../../core';
import { AppShellProps } from '../../AppShell';
import type { CSSVariables, MediaQueryVariables } from '../get-variables/get-variables';
import { assignAsideVariables } from './assign-aside-variables';

function getTestObject(aside: AppShellProps['aside'], mode: 'fixed' | 'static' = 'fixed') {
  const baseStyles = {};
  const minMediaStyles = {};
  const maxMediaStyles = {};

  assignAsideVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    theme: DEFAULT_THEME,
    aside,
    mode,
  });

  return { baseStyles, minMediaStyles, maxMediaStyles };
}

function getResizedTestObject(
  aside: AppShellProps['aside'],
  resizedSize: number | undefined,
  resizable = true
) {
  const baseStyles: CSSVariables = {};
  const minMediaStyles: MediaQueryVariables = {};
  const maxMediaStyles: MediaQueryVariables = {};

  assignAsideVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    aside,
    theme: DEFAULT_THEME,
    mode: 'fixed',
    resizedSize,
    resizable,
  });

  return { baseStyles, minMediaStyles, maxMediaStyles };
}

describe('@mantine/core/AppShell/assign-aside-variables', () => {
  describe('assigns correct base styles', () => {
    it('undefined input', () => {
      expect(getTestObject(undefined).baseStyles).toStrictEqual({});
    });

    it('no options', () => {
      expect(getTestObject({ width: 100, breakpoint: 'sm' }).baseStyles).toStrictEqual({
        '--app-shell-aside-width': rem(100),
        '--app-shell-aside-offset': rem(100),
      });
    });

    it('base width', () => {
      expect(getTestObject({ width: { base: 100 }, breakpoint: 'sm' }).baseStyles).toStrictEqual({
        '--app-shell-aside-width': rem(100),
        '--app-shell-aside-offset': rem(100),
      });
    });
  });

  describe('assigns correct max media styles', () => {
    it('sets correct breakpoint variables', () => {
      expect(getTestObject({ width: 100, breakpoint: 'sm' }).maxMediaStyles).toStrictEqual({
        sm: {
          '--app-shell-aside-offset': '0px',
          '--app-shell-aside-width': '100%',
        },
      });
    });

    it('sets correct variables when aside is collapsed on mobile', () => {
      expect(
        getTestObject({ width: 100, breakpoint: 'sm', collapsed: { mobile: true } }).maxMediaStyles
      ).toStrictEqual({
        [(px(DEFAULT_THEME.breakpoints.sm) as number) - 0.1]: {
          '--app-shell-aside-offset': '0px',
          '--app-shell-aside-width': '100%',
          '--app-shell-aside-transform-rtl': 'translateX(calc(var(--app-shell-aside-width) * -1))',
          '--app-shell-aside-transform': 'translateX(var(--app-shell-aside-width))',
          '--app-shell-aside-scroll-locked-visibility': 'hidden',
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
          '--app-shell-aside-width': rem(200),
          '--app-shell-aside-offset': rem(200),
        },

        lg: {
          '--app-shell-aside-width': rem(300),
          '--app-shell-aside-offset': rem(300),
        },
      });
    });

    it('supports breakpoint=0 in static mode', () => {
      expect(getTestObject({ width: 100, breakpoint: 0 }, 'static').minMediaStyles).toStrictEqual({
        0: {
          '--app-shell-aside-position': 'sticky',
          '--app-shell-aside-grid-row': '2',
          '--app-shell-aside-grid-column': '3',
          '--app-shell-main-column-end': '3',
        },
      });
    });

    it('sets correct responsive width when aside is collapsed on desktop', () => {
      expect(
        getTestObject({
          width: { base: 100, sm: 200 },
          breakpoint: 'sm',
          collapsed: { desktop: true },
        }).minMediaStyles
      ).toStrictEqual({
        sm: {
          '--app-shell-aside-width': rem(200),
          '--app-shell-aside-offset': '0px !important',
          '--app-shell-aside-transform-rtl': 'translateX(calc(var(--app-shell-aside-width) * -1))',
          '--app-shell-aside-transform': 'translateX(var(--app-shell-aside-width))',
          '--app-shell-aside-scroll-locked-visibility': 'hidden',
        },
      });
    });
  });
});

describe('@mantine/core/AppShell/assign-aside-variables resize', () => {
  it('emits the resized size instead of the configured width', () => {
    const { baseStyles } = getResizedTestObject({ width: 300, breakpoint: 'sm' }, 420);

    expect(baseStyles).toMatchObject({
      '--app-shell-aside-width': rem(420),
      '--app-shell-aside-offset': rem(420),
    });
  });

  it('skips responsive rules when the section is resized', () => {
    const { minMediaStyles } = getResizedTestObject(
      { width: { base: 200, md: 300 }, breakpoint: 'sm' },
      420
    );

    expect(minMediaStyles.md?.['--app-shell-aside-width']).toBeUndefined();
  });

  it('keeps the mobile full width rule and hides the handle below the breakpoint', () => {
    const { maxMediaStyles } = getResizedTestObject({ width: 300, breakpoint: 'sm' }, 420);

    expect(maxMediaStyles.sm).toMatchObject({
      '--app-shell-aside-width': '100%',
      '--app-shell-aside-resize-handle-display': 'none',
    });
  });

  it('hides the handle when the aside is collapsed on desktop', () => {
    const { minMediaStyles } = getResizedTestObject(
      { width: 300, breakpoint: 'sm', collapsed: { desktop: true } },
      undefined
    );

    expect(minMediaStyles.sm).toMatchObject({
      '--app-shell-aside-resize-handle-display': 'none',
    });
  });

  it('emits no handle variables when the section is not resizable', () => {
    const { maxMediaStyles } = getResizedTestObject(
      { width: 300, breakpoint: 'sm' },
      undefined,
      false
    );

    expect(maxMediaStyles.sm?.['--app-shell-aside-resize-handle-display']).toBeUndefined();
  });

  it('overrides the static mode grid width', () => {
    const baseStyles = {};
    assignAsideVariables({
      baseStyles,
      minMediaStyles: {},
      maxMediaStyles: {},
      aside: { width: 300, breakpoint: 'sm' },
      theme: DEFAULT_THEME,
      mode: 'static',
      resizedSize: 420,
      resizable: true,
    });

    expect(baseStyles).toMatchObject({ '--app-shell-aside-grid-width': rem(420) });
  });
});
