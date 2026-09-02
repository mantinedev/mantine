import { rem } from '../../../../core';
import type { AppShellProps } from '../../AppShell';
import type { CSSVariables, MediaQueryVariables } from '../get-variables/get-variables';
import { assignHeaderVariables } from './assign-header-variables';

function getTestObject(header: AppShellProps['header']) {
  const baseStyles = {};
  const minMediaStyles = {};
  const maxMediaStyles = {};

  assignHeaderVariables({
    baseStyles,
    minMediaStyles,
    header,
    mode: 'fixed',
  });

  return { baseStyles, minMediaStyles, maxMediaStyles };
}

function getResizedTestObject(
  header: AppShellProps['header'],
  resizedSize: number | undefined,
  resizable = true
) {
  const baseStyles: CSSVariables = {};
  const minMediaStyles: MediaQueryVariables = {};

  assignHeaderVariables({
    baseStyles,
    minMediaStyles,
    header,
    mode: 'fixed',
    resizedSize,
    resizable,
  });

  return { baseStyles, minMediaStyles };
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

describe('@mantine/core/AppShell/assign-header-variables resize', () => {
  it('emits the resized size instead of the configured height', () => {
    const { baseStyles } = getResizedTestObject({ height: 100 }, 420);

    expect(baseStyles).toMatchObject({
      '--app-shell-header-height': rem(420),
      '--app-shell-header-offset': rem(420),
    });
  });

  it('respects offset: false when resized', () => {
    const { baseStyles } = getResizedTestObject({ height: 100, offset: false }, 420);

    expect(baseStyles['--app-shell-header-height']).toBe(rem(420));
    expect(baseStyles['--app-shell-header-offset']).toBeUndefined();
  });

  it('skips responsive rules when the section is resized', () => {
    const { minMediaStyles } = getResizedTestObject({ height: { base: 100, md: 200 } }, 420);

    expect(minMediaStyles.md?.['--app-shell-header-height']).toBeUndefined();
  });

  it('hides the handle when the header is collapsed', () => {
    const { baseStyles } = getResizedTestObject({ height: 100, collapsed: true }, undefined);

    expect(baseStyles).toMatchObject({
      '--app-shell-header-resize-handle-display': 'none',
    });
  });

  it('emits no handle variable when the section is not resizable', () => {
    const { baseStyles } = getResizedTestObject({ height: 100, collapsed: true }, undefined, false);

    expect(baseStyles['--app-shell-header-resize-handle-display']).toBeUndefined();
  });
});
