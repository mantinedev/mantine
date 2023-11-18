import { rem } from '../../../../core';
import type { AppShellProps } from '../../AppShell';
import { assignHeaderVariables } from './assign-header-variables';

function getTestObject(header: AppShellProps['header']) {
  const baseStyles = {};
  const minMediaStyles = {};
  const maxMediaStyles = {};

  assignHeaderVariables({
    baseStyles,
    minMediaStyles,
    header,
  });

  return { baseStyles, minMediaStyles, maxMediaStyles };
}

describe('@mantine/core/AppShell/assign-header-variables', () => {
  describe('assigns correct base styles', () => {
    it('undefined input', () => {
      expect(getTestObject(undefined).baseStyles).toStrictEqual({});
    });

    it('no options', () => {
      expect(getTestObject({ height: 100 }).baseStyles).toStrictEqual({
        '--app-shell-header-height': rem(100),
        '--app-shell-header-offset': rem(100),
      });
    });

    it('base height', () => {
      expect(getTestObject({ height: { base: 100 } }).baseStyles).toStrictEqual({
        '--app-shell-header-height': rem(100),
        '--app-shell-header-offset': rem(100),
      });
    });

    it('responsive height', () => {
      expect(getTestObject({ height: { base: 100, sm: 200 } }).baseStyles).toStrictEqual({
        '--app-shell-header-height': rem(100),
        '--app-shell-header-offset': rem(100),
      });
    });

    it('offset: false', () => {
      expect(getTestObject({ height: 100, offset: false }).baseStyles).toStrictEqual({
        '--app-shell-header-height': rem(100),
      });
    });

    it('collapsed: true', () => {
      expect(getTestObject({ height: 100, collapsed: true }).baseStyles).toStrictEqual({
        '--app-shell-header-height': rem(100),
        '--app-shell-header-offset': '0px !important',
        '--app-shell-header-transform': 'translateY(calc(var(--app-shell-header-height) * -1))',
      });
    });

    it('offset: false, collapsed: true', () => {
      expect(
        getTestObject({ height: 100, collapsed: true, offset: false }).baseStyles
      ).toStrictEqual({
        '--app-shell-header-height': rem(100),
        '--app-shell-header-offset': '0px !important',
        '--app-shell-header-transform': 'translateY(calc(var(--app-shell-header-height) * -1))',
      });
    });
  });

  describe('assigns correct min media styles', () => {
    it('assigns correct height', () => {
      expect(
        getTestObject({ height: { base: 100, sm: 200, lg: 300 } }).minMediaStyles
      ).toStrictEqual({
        sm: {
          '--app-shell-header-height': rem(200),
          '--app-shell-header-offset': rem(200),
        },

        lg: {
          '--app-shell-header-height': rem(300),
          '--app-shell-header-offset': rem(300),
        },
      });
    });
  });
});
