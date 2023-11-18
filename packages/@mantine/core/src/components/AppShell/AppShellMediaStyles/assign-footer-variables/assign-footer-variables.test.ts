import { rem } from '../../../../core';
import type { AppShellProps } from '../../AppShell';
import { assignFooterVariables } from './assign-footer-variables';

function getTestObject(footer: AppShellProps['footer']) {
  const baseStyles = {};
  const minMediaStyles = {};
  const maxMediaStyles = {};

  assignFooterVariables({
    baseStyles,
    minMediaStyles,
    footer,
  });

  return { baseStyles, minMediaStyles, maxMediaStyles };
}

describe('@mantine/core/AppShell/assign-footer-variables', () => {
  describe('assigns correct base styles', () => {
    it('undefined input', () => {
      expect(getTestObject(undefined).baseStyles).toStrictEqual({});
    });

    it('no options', () => {
      expect(getTestObject({ height: 100 }).baseStyles).toStrictEqual({
        '--app-shell-footer-height': rem(100),
        '--app-shell-footer-offset': rem(100),
      });
    });

    it('base height', () => {
      expect(getTestObject({ height: { base: 100 } }).baseStyles).toStrictEqual({
        '--app-shell-footer-height': rem(100),
        '--app-shell-footer-offset': rem(100),
      });
    });

    it('responsive height', () => {
      expect(getTestObject({ height: { base: 100, sm: 200 } }).baseStyles).toStrictEqual({
        '--app-shell-footer-height': rem(100),
        '--app-shell-footer-offset': rem(100),
      });
    });

    it('offset: false', () => {
      expect(getTestObject({ height: 100, offset: false }).baseStyles).toStrictEqual({
        '--app-shell-footer-height': rem(100),
      });
    });

    it('collapsed: true', () => {
      expect(getTestObject({ height: 100, collapsed: true }).baseStyles).toStrictEqual({
        '--app-shell-footer-height': rem(100),
        '--app-shell-footer-offset': '0px !important',
        '--app-shell-footer-transform': 'translateY(var(--app-shell-footer-height))',
      });
    });

    it('offset: false, collapsed: true', () => {
      expect(
        getTestObject({ height: 100, collapsed: true, offset: false }).baseStyles
      ).toStrictEqual({
        '--app-shell-footer-height': rem(100),
        '--app-shell-footer-offset': '0px !important',
        '--app-shell-footer-transform': 'translateY(var(--app-shell-footer-height))',
      });
    });
  });

  describe('assigns correct min media styles', () => {
    it('assigns correct height', () => {
      expect(
        getTestObject({ height: { base: 100, sm: 200, lg: 300 } }).minMediaStyles
      ).toStrictEqual({
        sm: {
          '--app-shell-footer-height': rem(200),
          '--app-shell-footer-offset': rem(200),
        },

        lg: {
          '--app-shell-footer-height': rem(300),
          '--app-shell-footer-offset': rem(300),
        },
      });
    });
  });
});
