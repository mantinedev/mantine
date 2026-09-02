import { rem } from '../../../../core';
import type { AppShellProps } from '../../AppShell';
import type { CSSVariables, MediaQueryVariables } from '../get-variables/get-variables';
import { assignFooterVariables } from './assign-footer-variables';

function getTestObject(footer: AppShellProps['footer']) {
  const baseStyles = {};
  const minMediaStyles = {};
  const maxMediaStyles = {};

  assignFooterVariables({
    baseStyles,
    minMediaStyles,
    footer,
    mode: 'fixed',
  });

  return { baseStyles, minMediaStyles, maxMediaStyles };
}

function getResizedTestObject(
  footer: AppShellProps['footer'],
  resizedSize: number | undefined,
  resizable = true
) {
  const baseStyles: CSSVariables = {};
  const minMediaStyles: MediaQueryVariables = {};

  assignFooterVariables({
    baseStyles,
    minMediaStyles,
    footer,
    mode: 'fixed',
    resizedSize,
    resizable,
  });

  return { baseStyles, minMediaStyles };
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

describe('@mantine/core/AppShell/assign-footer-variables resize', () => {
  it('emits the resized size instead of the configured height', () => {
    const { baseStyles } = getResizedTestObject({ height: 100 }, 420);

    expect(baseStyles).toMatchObject({
      '--app-shell-footer-height': rem(420),
      '--app-shell-footer-offset': rem(420),
    });
  });

  it('respects offset: false when resized', () => {
    const { baseStyles } = getResizedTestObject({ height: 100, offset: false }, 420);

    expect(baseStyles['--app-shell-footer-height']).toBe(rem(420));
    expect(baseStyles['--app-shell-footer-offset']).toBeUndefined();
  });

  it('skips responsive rules when the section is resized', () => {
    const { minMediaStyles } = getResizedTestObject({ height: { base: 100, md: 200 } }, 420);

    expect(minMediaStyles.md?.['--app-shell-footer-height']).toBeUndefined();
  });

  it('hides the handle when the footer is collapsed', () => {
    const { baseStyles } = getResizedTestObject({ height: 100, collapsed: true }, undefined);

    expect(baseStyles).toMatchObject({
      '--app-shell-footer-resize-handle-display': 'none',
    });
  });

  it('emits no handle variable when the section is not resizable', () => {
    const { baseStyles } = getResizedTestObject({ height: 100, collapsed: true }, undefined, false);

    expect(baseStyles['--app-shell-footer-resize-handle-display']).toBeUndefined();
  });
});
