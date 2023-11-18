import { DEFAULT_THEME, px, rem } from '../../../../core';
import { AppShellProps } from '../../AppShell';
import { assignNavbarVariables } from './assign-navbar-variables';

function getTestObject(navbar: AppShellProps['navbar']) {
  const baseStyles = {};
  const minMediaStyles = {};
  const maxMediaStyles = {};

  assignNavbarVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    theme: DEFAULT_THEME,
    navbar,
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
