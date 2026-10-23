import { keys, rem } from '../../utils';
import { getPrimaryContrastColor, getPrimaryShade } from '../color-functions';
import { ConvertCSSVariablesInput } from '../convert-css-variables';
import { CSSVariablesResolver } from './default-css-variables-resolver';
import { getV9CSSColorVariables } from './v9-get-css-color-variables';
import { isVirtualColor } from './virtual-color/virtual-color';

function assignSizeVariables(
  variables: Record<string, string>,
  sizes: Record<string, string>,
  name: string
) {
  keys(sizes).forEach((size) =>
    Object.assign(variables, { [`--mantine-${name}-${size}`]: sizes[size] })
  );
}

export const v9CssVariablesResolver: CSSVariablesResolver = (theme) => {
  const lightPrimaryShade = getPrimaryShade(theme, 'light');
  const defaultRadius =
    theme.defaultRadius in theme.radius
      ? theme.radius[theme.defaultRadius as 'xs']
      : rem(theme.defaultRadius);

  const result: ConvertCSSVariablesInput = {
    variables: {
      '--mantine-z-index-app': '100',
      '--mantine-z-index-modal': '200',
      '--mantine-z-index-popover': '300',
      '--mantine-z-index-overlay': '400',
      '--mantine-z-index-max': '9999',
      '--mantine-scale': theme.scale.toString(),
      '--mantine-cursor-type': theme.cursorType,
      '--mantine-disabled-opacity': theme.disabledOpacity.toString(),
      '--mantine-webkit-font-smoothing': theme.fontSmoothing ? 'antialiased' : 'unset',
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

      '--mantine-primary-color-filled': `var(--mantine-color-${theme.primaryColor}-filled)`,
      '--mantine-primary-color-filled-hover': `var(--mantine-color-${theme.primaryColor}-filled-hover)`,
      '--mantine-primary-color-light': `var(--mantine-color-${theme.primaryColor}-light)`,
      '--mantine-primary-color-light-hover': `var(--mantine-color-${theme.primaryColor}-light-hover)`,
      '--mantine-primary-color-light-color': `var(--mantine-color-${theme.primaryColor}-light-color)`,
      '--mantine-primary-color-text': `var(--mantine-color-${theme.primaryColor}-text)`,
      '--mantine-color-divider': 'var(--mantine-color-border)',
      '--mantine-color-text-muted': 'var(--mantine-color-dimmed)',
    },
    light: {
      '--mantine-color-scheme': 'light',
      '--mantine-primary-color-contrast': getPrimaryContrastColor(theme, 'light'),
      '--mantine-color-bright': 'var(--mantine-color-black)',
      '--mantine-color-text': 'var(--mantine-color-neutral-8)',
      '--mantine-color-surface-page': 'var(--mantine-color-white)',
      '--mantine-color-surface-panel': 'var(--mantine-color-white)',
      '--mantine-color-surface-panel-2': 'var(--mantine-color-white)',
      '--mantine-color-surface-sunken': 'var(--mantine-color-gray-1)',
      '--mantine-color-surface-muted': 'var(--mantine-color-gray-0)',
      '--mantine-color-surface-input': 'var(--mantine-color-white)',
      '--mantine-color-body': 'var(--mantine-color-surface-page)',
      '--mantine-color-error': 'var(--mantine-color-red-6)',
      '--mantine-color-success': 'var(--mantine-color-teal-8)',
      '--mantine-color-placeholder': 'var(--mantine-color-neutral-5)',
      '--mantine-color-anchor': `var(--mantine-color-${theme.primaryColor}-${lightPrimaryShade})`,
      '--mantine-color-focus-ring': `var(--mantine-color-${theme.primaryColor}-${lightPrimaryShade})`,
      '--mantine-color-default': 'var(--mantine-color-surface-panel)',
      '--mantine-color-default-hover': 'var(--mantine-color-neutral-2)',
      '--mantine-color-default-color': 'var(--mantine-color-black)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-dimmed': 'var(--mantine-color-neutral-6)',
      '--mantine-color-subtle-color': 'var(--mantine-color-neutral-7)',
      '--mantine-color-border': 'var(--mantine-color-neutral-4)',
      '--mantine-color-border-subtle': 'var(--mantine-color-gray-2)',
      '--mantine-color-border-strong': 'var(--mantine-color-gray-4)',
      '--mantine-color-hover': 'var(--mantine-color-neutral-2)',
      '--mantine-color-hover-strong': 'var(--mantine-color-gray-1)',
      '--mantine-color-active': 'var(--mantine-color-gray-1)',
      '--mantine-color-selected': 'var(--mantine-color-gray-1)',
      '--mantine-color-track': 'var(--mantine-color-neutral-4)',
      '--mantine-color-neutral-0': 'var(--mantine-color-white)',
      '--mantine-color-neutral-1': 'var(--mantine-color-white)',
      '--mantine-color-neutral-2': 'var(--mantine-color-gray-0)',
      '--mantine-color-neutral-3': 'var(--mantine-color-gray-2)',
      '--mantine-color-neutral-4': 'var(--mantine-color-gray-3)',
      '--mantine-color-neutral-5': 'var(--mantine-color-gray-5)',
      '--mantine-color-neutral-6': 'var(--mantine-color-gray-6)',
      '--mantine-color-neutral-7': 'var(--mantine-color-gray-7)',
      '--mantine-color-neutral-8': 'var(--mantine-color-black)',
      '--mantine-color-neutral-9': 'var(--mantine-color-black)',
    },
    dark: {
      '--mantine-color-scheme': 'dark',
      '--mantine-primary-color-contrast': getPrimaryContrastColor(theme, 'dark'),
      '--mantine-color-bright': 'var(--mantine-color-white)',
      '--mantine-color-text': 'var(--mantine-color-neutral-8)',
      '--mantine-color-surface-page': 'var(--mantine-color-dark-7)',
      '--mantine-color-surface-panel': 'var(--mantine-color-dark-6)',
      '--mantine-color-surface-panel-2': 'var(--mantine-color-dark-5)',
      '--mantine-color-surface-sunken': 'var(--mantine-color-dark-9)',
      '--mantine-color-surface-muted': 'var(--mantine-color-dark-5)',
      '--mantine-color-surface-input': 'var(--mantine-color-surface-panel)',
      '--mantine-color-body': 'var(--mantine-color-surface-page)',
      '--mantine-color-error': 'var(--mantine-color-red-8)',
      '--mantine-color-success': 'var(--mantine-color-teal-8)',
      '--mantine-color-placeholder': 'var(--mantine-color-neutral-5)',
      '--mantine-color-anchor': `var(--mantine-color-${theme.primaryColor}-4)`,
      '--mantine-color-focus-ring': `var(--mantine-color-${theme.primaryColor}-5)`,
      '--mantine-color-default': 'var(--mantine-color-surface-panel)',
      '--mantine-color-default-hover': 'var(--mantine-color-neutral-2)',
      '--mantine-color-default-color': 'var(--mantine-color-white)',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-dimmed': 'var(--mantine-color-neutral-6)',
      '--mantine-color-subtle-color': 'var(--mantine-color-neutral-7)',
      '--mantine-color-border': 'var(--mantine-color-neutral-4)',
      '--mantine-color-border-subtle': 'var(--mantine-color-dark-5)',
      '--mantine-color-border-strong': 'var(--mantine-color-dark-3)',
      '--mantine-color-hover': 'var(--mantine-color-neutral-1)',
      '--mantine-color-hover-strong': 'var(--mantine-color-dark-5)',
      '--mantine-color-active': 'var(--mantine-color-dark-5)',
      '--mantine-color-selected': 'var(--mantine-color-dark-5)',
      '--mantine-color-track': 'var(--mantine-color-neutral-4)',
      '--mantine-color-neutral-0': 'var(--mantine-color-dark-7)',
      '--mantine-color-neutral-1': 'var(--mantine-color-dark-6)',
      '--mantine-color-neutral-2': 'var(--mantine-color-dark-5)',
      '--mantine-color-neutral-3': 'var(--mantine-color-dark-4)',
      '--mantine-color-neutral-4': 'var(--mantine-color-dark-4)',
      '--mantine-color-neutral-5': 'var(--mantine-color-dark-3)',
      '--mantine-color-neutral-6': 'var(--mantine-color-dark-2)',
      '--mantine-color-neutral-7': 'var(--mantine-color-dark-1)',
      '--mantine-color-neutral-8': 'var(--mantine-color-dark-0)',
      '--mantine-color-neutral-9': 'var(--mantine-color-white)',
    },
  };

  assignSizeVariables(result.variables, theme.breakpoints, 'breakpoint');
  assignSizeVariables(result.variables, theme.spacing, 'spacing');
  assignSizeVariables(result.variables, theme.fontSizes, 'font-size');
  assignSizeVariables(result.variables, theme.lineHeights, 'line-height');
  assignSizeVariables(result.variables, theme.shadows, 'shadow');
  assignSizeVariables(result.variables, theme.radius, 'radius');
  assignSizeVariables(result.variables, theme.fontWeights, 'font-weight');

  theme.colors[theme.primaryColor].forEach((_, index) => {
    result.variables[`--mantine-primary-color-${index}`] =
      `var(--mantine-color-${theme.primaryColor}-${index})`;
  });

  keys(theme.colors).forEach((color) => {
    const value = theme.colors[color];

    if (isVirtualColor(value)) {
      Object.assign(
        result.light,
        getV9CSSColorVariables({
          theme,
          name: value.name,
          color: value.light,
          colorScheme: 'light',
          withColorValues: true,
        })
      );

      Object.assign(
        result.dark,
        getV9CSSColorVariables({
          theme,
          name: value.name,
          color: value.dark,
          colorScheme: 'dark',
          withColorValues: true,
        })
      );

      return;
    }

    value.forEach((shade, index) => {
      result.variables[`--mantine-color-${color}-${index}`] = shade;
    });

    Object.assign(
      result.light,
      getV9CSSColorVariables({
        theme,
        color,
        colorScheme: 'light',
        withColorValues: false,
      })
    );

    Object.assign(
      result.dark,
      getV9CSSColorVariables({
        theme,
        color,
        colorScheme: 'dark',
        withColorValues: false,
      })
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
