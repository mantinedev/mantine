/* eslint-disable prefer-destructuring */
import { keys, rem } from '../../utils';
import { getPrimaryContrastColor, getPrimaryShade, rgba } from '../color-functions';
import { ConvertCSSVariablesInput } from '../convert-css-variables';
import { MantineTheme } from '../theme.types';

export type CSSVariablesResolver = (theme: MantineTheme) => ConvertCSSVariablesInput;

function assignSizeVariables(
  variables: Record<string, string>,
  sizes: Record<string, string>,
  name: string
) {
  keys(sizes).forEach((size) =>
    Object.assign(variables, { [`--mantine-${name}-${size}`]: sizes[size] })
  );
}

export const defaultCssVariablesResolver: CSSVariablesResolver = (theme) => {
  const darkPrimaryShade = getPrimaryShade(theme, 'dark');
  const lightPrimaryShade = getPrimaryShade(theme, 'light');
  const defaultRadius =
    theme.defaultRadius in theme.radius
      ? theme.radius[theme.defaultRadius as 'xs']
      : rem(theme.defaultRadius);

  const result: ConvertCSSVariablesInput = {
    variables: {
      '--mantine-scale': theme.scale.toString(),
      '--mantine-cursor-type': theme.cursorType,
      '--mantine-webkit-font-smoothing': theme.fontSmoothing ? 'antialiased' : 'unset',
      '--mantine-color-scheme': 'light dark',
      '--mantine-moz-font-smoothing': theme.fontSmoothing ? 'grayscale' : 'unset',
      '--mantine-color-white': theme.white,
      '--mantine-color-black': theme.black,
      '--mantine-line-height': theme.lineHeights.md,
      '--mantine-font-family': theme.fontFamily,
      '--mantine-font-family-monospace': theme.fontFamilyMonospace,
      '--mantine-font-family-headings': theme.headings.fontFamily,
      '--mantine-heading-font-weight': theme.headings.fontWeight,
      '--mantine-heading-text-wrap': theme.headings.textWrap,
      '--mantine-radius-default': defaultRadius,

      // Primary colors
      '--mantine-primary-color-filled': `var(--mantine-color-${theme.primaryColor}-filled)`,
      '--mantine-primary-color-filled-hover': `var(--mantine-color-${theme.primaryColor}-filled-hover)`,
      '--mantine-primary-color-light': `var(--mantine-color-${theme.primaryColor}-light)`,
      '--mantine-primary-color-light-hover': `var(--mantine-color-${theme.primaryColor}-light-hover)`,
      '--mantine-primary-color-light-color': `var(--mantine-color-${theme.primaryColor}-light-color)`,
    },
    light: {
      '--mantine-primary-color-contrast': getPrimaryContrastColor(theme, 'light'),
      '--mantine-color-bright': 'var(--mantine-color-black)',
      '--mantine-color-text': theme.black,
      '--mantine-color-body': theme.white,
      '--mantine-color-error': 'var(--mantine-color-red-6)',
      '--mantine-color-placeholder': 'var(--mantine-color-gray-5)',
      '--mantine-color-anchor': `var(--mantine-color-${theme.primaryColor}-${lightPrimaryShade})`,
      '--mantine-color-default': 'var(--mantine-color-white)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-0)',
      '--mantine-color-default-color': 'var(--mantine-color-black)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
    },
    dark: {
      '--mantine-primary-color-contrast': getPrimaryContrastColor(theme, 'dark'),
      '--mantine-color-bright': 'var(--mantine-color-white)',
      '--mantine-color-text': 'var(--mantine-color-dark-0)',
      '--mantine-color-body': 'var(--mantine-color-dark-7)',
      '--mantine-color-error': 'var(--mantine-color-red-8)',
      '--mantine-color-placeholder': 'var(--mantine-color-dark-3)',
      '--mantine-color-anchor': `var(--mantine-color-${theme.primaryColor}-4)`,
      '--mantine-color-default': 'var(--mantine-color-dark-6)',
      '--mantine-color-default-hover': 'var(--mantine-color-dark-5)',
      '--mantine-color-default-color': 'var(--mantine-color-white)',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
    },
  };

  assignSizeVariables(result.variables, theme.breakpoints, 'breakpoint');
  assignSizeVariables(result.variables, theme.spacing, 'spacing');
  assignSizeVariables(result.variables, theme.fontSizes, 'font-size');
  assignSizeVariables(result.variables, theme.lineHeights, 'line-height');
  assignSizeVariables(result.variables, theme.shadows, 'shadow');
  assignSizeVariables(result.variables, theme.radius, 'radius');

  theme.colors[theme.primaryColor].forEach((_, index) => {
    result.variables[`--mantine-primary-color-${index}`] =
      `var(--mantine-color-${theme.primaryColor}-${index})`;
  });

  keys(theme.colors).forEach((color) => {
    theme.colors[color].forEach((shade, index) => {
      result.variables[`--mantine-color-${color}-${index}`] = shade;
    });

    const lightFilledHover = `var(--mantine-color-${color}-${
      lightPrimaryShade === 9 ? 8 : lightPrimaryShade + 1
    })`;
    const darkFilledHover = `var(--mantine-color-${color}-${
      darkPrimaryShade === 9 ? 8 : darkPrimaryShade + 1
    })`;

    result.light['--mantine-color-dimmed'] = 'var(--mantine-color-gray-6)';
    result.light[`--mantine-color-${color}-text`] = `var(--mantine-color-${color}-filled)`;
    result.light[`--mantine-color-${color}-filled`] =
      `var(--mantine-color-${color}-${lightPrimaryShade})`;
    result.light[`--mantine-color-${color}-filled-hover`] = lightFilledHover;
    result.light[`--mantine-color-${color}-light`] = rgba(
      theme.colors[color][lightPrimaryShade],
      0.1
    );
    result.light[`--mantine-color-${color}-light-hover`] = rgba(
      theme.colors[color][lightPrimaryShade],
      0.12
    );
    result.light[`--mantine-color-${color}-light-color`] =
      `var(--mantine-color-${color}-${lightPrimaryShade})`;
    result.light[`--mantine-color-${color}-outline`] =
      `var(--mantine-color-${color}-${lightPrimaryShade})`;
    result.light[`--mantine-color-${color}-outline-hover`] = rgba(
      theme.colors[color][lightPrimaryShade],
      0.05
    );

    result.dark['--mantine-color-dimmed'] = 'var(--mantine-color-dark-2)';
    result.dark[`--mantine-color-${color}-text`] = `var(--mantine-color-${color}-4)`;
    result.dark[`--mantine-color-${color}-filled`] =
      `var(--mantine-color-${color}-${darkPrimaryShade})`;
    result.dark[`--mantine-color-${color}-filled-hover`] = darkFilledHover;
    result.dark[`--mantine-color-${color}-light`] = rgba(
      theme.colors[color][Math.max(0, darkPrimaryShade - 2)],
      0.15
    );
    result.dark[`--mantine-color-${color}-light-hover`] = rgba(
      theme.colors[color][Math.max(0, darkPrimaryShade - 2)],
      0.2
    );
    result.dark[`--mantine-color-${color}-light-color`] = `var(--mantine-color-${color}-${Math.max(
      darkPrimaryShade - 5,
      0
    )})`;
    result.dark[`--mantine-color-${color}-outline`] = `var(--mantine-color-${color}-${Math.max(
      darkPrimaryShade - 4,
      0
    )})`;
    result.dark[`--mantine-color-${color}-outline-hover`] = rgba(
      theme.colors[color][Math.max(darkPrimaryShade - 4, 0)],
      0.05
    );
  });

  const headings = theme.headings.sizes;

  keys(headings).forEach((heading) => {
    result.variables[`--mantine-${heading}-font-size`] = headings[heading].fontSize;
    result.variables[`--mantine-${heading}-line-height`] = headings[heading].lineHeight;
    result.variables[`--mantine-${heading}-font-weight`] =
      headings[heading].fontWeight || theme.headings.fontWeight;
  });

  return result;
};
