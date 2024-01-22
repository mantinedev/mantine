import { CSSVariables, cssVariablesObjectToString } from './css-variables-object-to-string';
import { wrapWithSelector } from './wrap-with-selector';

export interface ConvertCSSVariablesInput {
  /** Shared CSS variables that should be accessible independent from color scheme */
  variables: CSSVariables;

  /** CSS variables available only in dark color scheme */
  dark: CSSVariables;

  /** CSS variables available only in light color scheme */
  light: CSSVariables;
}

export function convertCssVariables(input: ConvertCSSVariablesInput, selector: string) {
  const sharedVariables = cssVariablesObjectToString(input.variables);
  const shared = sharedVariables ? wrapWithSelector(selector, sharedVariables) : '';

  const dark = cssVariablesObjectToString(input.dark);
  const darkForced = dark
    ? wrapWithSelector(`${selector}[data-mantine-color-scheme="dark"]`, dark)
    : '';

  const light = cssVariablesObjectToString(input.light);
  const lightForced = light
    ? wrapWithSelector(`${selector}[data-mantine-color-scheme="light"]`, light)
    : '';

  return `${shared}${darkForced}${lightForced}`;
}
