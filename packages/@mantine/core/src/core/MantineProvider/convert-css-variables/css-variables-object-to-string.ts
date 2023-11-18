import type { CssVariable } from '../../Box';

export type CSSVariables = Record<CssVariable, string>;

export function cssVariablesObjectToString(variables: CSSVariables) {
  return Object.entries(variables)
    .map(([name, value]) => `${name}: ${value};`)
    .join('');
}
