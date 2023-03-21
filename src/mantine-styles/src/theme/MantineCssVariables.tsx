import React from 'react';
import { Global } from '@emotion/react';
import type { MantineTheme, MantineSize } from './types';
import { rem, em } from './utils';

function assignSizeVariables(
  variables: Record<string, string>,
  sizes: Record<MantineSize, number | string>,
  name: string,
  targetUnitConverter: typeof rem = rem
) {
  Object.keys(sizes).forEach((size) => {
    // eslint-disable-next-line no-param-reassign
    variables[`--mantine-${name}-${size}`] = targetUnitConverter(sizes[size]);
  });
}

export function MantineCssVariables({ theme }: { theme: MantineTheme }) {
  const variables: Record<string, string> = {
    '--mantine-color-white': theme.white,
    '--mantine-color-black': theme.black,
    '--mantine-transition-timing-function': theme.transitionTimingFunction,
    '--mantine-line-height': `${theme.lineHeight}`,
    '--mantine-font-family': theme.fontFamily,
    '--mantine-font-family-monospace': theme.fontFamilyMonospace,
    '--mantine-font-family-headings': theme.headings.fontFamily,
    '--mantine-heading-font-weight': `${theme.headings.fontWeight}`,
  };

  assignSizeVariables(variables, theme.shadows, 'shadow');
  assignSizeVariables(variables, theme.fontSizes, 'font-size');
  assignSizeVariables(variables, theme.radius, 'radius');
  assignSizeVariables(variables, theme.spacing, 'spacing');
  assignSizeVariables(variables, theme.breakpoints, 'breakpoints', em);

  Object.keys(theme.colors).forEach((color) => {
    theme.colors[color].forEach((shade, index) => {
      variables[`--mantine-color-${color}-${index}`] = shade;
    });
  });

  const headings = theme.headings.sizes;

  Object.keys(headings).forEach((heading) => {
    variables[`--mantine-${heading}-font-size`] = headings[heading].fontSize;
    variables[`--mantine-${heading}-line-height`] = `${headings[heading].lineHeight}`;
  });

  return (
    <Global
      styles={{
        ':root': variables,
      }}
    />
  );
}
