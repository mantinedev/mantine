import { DEFAULT_THEME, px, rem } from '../../../../core';
import { AppShellProps } from '../../AppShell';
import { assignAsideVariables } from './assign-aside-variables';

function getTestObject(aside: AppShellProps['aside']) {
  const baseStyles = {};
  const minMediaStyles = {};
  const maxMediaStyles = {};

  assignAsideVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    theme: DEFAULT_THEME,
    aside,
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
        },
      });
    });
  });
});
