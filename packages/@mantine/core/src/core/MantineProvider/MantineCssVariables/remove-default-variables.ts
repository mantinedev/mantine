import { ConvertCSSVariablesInput } from '../convert-css-variables';
import { defaultCssVariablesResolver } from './default-css-variables-resolver';
import { DEFAULT_THEME } from '../default-theme';
import { keys } from '../../utils';

const defaultCssVariables = defaultCssVariablesResolver(DEFAULT_THEME);

export function removeDefaultVariables(input: ConvertCSSVariablesInput): ConvertCSSVariablesInput {
  const cleaned: ConvertCSSVariablesInput = {
    variables: {},
    light: {},
    dark: {},
  };

  keys(input.variables).forEach((key) => {
    if (defaultCssVariables.variables[key] !== input.variables[key]) {
      cleaned.variables[key] = input.variables[key];
    }
  });

  keys(input.light).forEach((key) => {
    if (defaultCssVariables.light[key] !== input.light[key]) {
      cleaned.light[key] = input.light[key];
    }
  });

  keys(input.dark).forEach((key) => {
    if (defaultCssVariables.dark[key] !== input.dark[key]) {
      cleaned.dark[key] = input.dark[key];
    }
  });

  return cleaned;
}
