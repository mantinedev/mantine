import React from 'react';
import { useMantineTheme } from '../MantineThemeProvider';
import { keys, px, em } from '../../utils';
import { useMantineStyleNonce } from '../Mantine.context';

export function MantineClasses() {
  const theme = useMantineTheme();
  const nonce = useMantineStyleNonce();

  const classes = keys(theme.breakpoints).reduce<string>((acc, breakpoint) => {
    const pxValue = px(theme.breakpoints[breakpoint]) as number;

    return `${acc}@media (max-width: ${em(
      pxValue - 0.1
    )}) {.mantine-visible-from-${breakpoint} {display: none !important;}}@media (min-width: ${em(
      pxValue
    )}) {.mantine-hidden-from-${breakpoint} {display: none !important;}}`;
  }, '');

  return (
    <style
      data-mantine-styles="classes"
      nonce={nonce?.()}
      dangerouslySetInnerHTML={{ __html: classes }}
    />
  );
}
