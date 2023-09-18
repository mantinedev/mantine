import { rem } from '../../../../core';
import type { AppShellProps } from '../../AppShell';
import { assignPaddingVariables } from './assign-padding-variables';

function getTestObject(padding: AppShellProps['padding']) {
  const baseStyles = {};
  const minMediaStyles = {};
  const maxMediaStyles = {};

  assignPaddingVariables({
    baseStyles,
    minMediaStyles,
    padding,
  });

  return { baseStyles, minMediaStyles, maxMediaStyles };
}

describe('@mantine/core/AppShell/assign-padding-variables', () => {
  it('assigns correct base styles', () => {
    expect(getTestObject(10).baseStyles).toStrictEqual({
      '--app-shell-padding': rem(10),
    });

    expect(getTestObject({ base: 10 }).baseStyles).toStrictEqual({
      '--app-shell-padding': rem(10),
    });
  });

  it('assigns correct min media styles', () => {
    expect(getTestObject({ sm: 10 }).minMediaStyles).toStrictEqual({
      sm: {
        '--app-shell-padding': rem(10),
      },
    });

    expect(getTestObject({ sm: 10, md: 20 }).minMediaStyles).toStrictEqual({
      sm: {
        '--app-shell-padding': rem(10),
      },

      md: {
        '--app-shell-padding': rem(20),
      },
    });
  });
});
