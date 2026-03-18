import { CSSVariables, cssVariablesObjectToString } from './css-variables-object-to-string';

export interface ConvertCSSVariablesInput {
  /** Shared CSS variables that should be accessible independent from color scheme */
  variables: CSSVariables;

  /** CSS variables available only in dark color scheme */
  dark: CSSVariables;

  /** CSS variables available only in light color scheme */
  light: CSSVariables;
}

export function convertCssVariables(input: ConvertCSSVariablesInput, selectorOverride?: string) {
  const selectors = selectorOverride ? [selectorOverride] : [':root', ':host'];
  const sharedVariables = cssVariablesObjectToString(input.variables);
  const shared = sharedVariables ? `${selectors.join(', ')}{${sharedVariables}}` : '';
  const dark = cssVariablesObjectToString(input.dark);
  const light = cssVariablesObjectToString(input.light);

  const selectorsWithScheme = (scheme: 'light' | 'dark') =>
    selectors
      .map((selector) =>
        selector === ':host'
          ? `${selector}([data-mantine-color-scheme="${scheme}"])`
          : `${selector}[data-mantine-color-scheme="${scheme}"]`
      )
      .join(', ');

  const darkForced = dark ? `${selectorsWithScheme('dark')}{${dark}}` : '';
  const lightForced = light ? `${selectorsWithScheme('light')}{${light}}` : '';

  return `${shared}\n\n${darkForced}\n\n${lightForced}`;
}
