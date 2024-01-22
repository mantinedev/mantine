import { DEFAULT_THEME } from '../default-theme';
import {
  CSSVariablesResolver,
  defaultCssVariablesResolver,
} from './default-css-variables-resolver';
import { getMergedVariables } from './get-merged-variables';

const defaultVariables = defaultCssVariablesResolver(DEFAULT_THEME);

describe('@mantine/core/get-merged-variables', () => {
  it('returns default variables if no generator provided', () => {
    expect(getMergedVariables({ theme: DEFAULT_THEME })).toEqual(defaultVariables);
    expect(getMergedVariables({ theme: DEFAULT_THEME, generator: undefined })).toEqual(
      defaultVariables
    );
  });

  it('merges default and provider variables', () => {
    const generator: CSSVariablesResolver = (theme) => ({
      variables: {
        '--mantine-color-red': theme.colors.red[5],
      },
      light: {
        '--mantine-color-blue': theme.colors.blue[5],
      },
      dark: {
        '--mantine-color-orange': theme.colors.orange[5],
      },
    });

    expect(getMergedVariables({ theme: DEFAULT_THEME, generator })).toEqual({
      variables: {
        ...defaultVariables.variables,
        '--mantine-color-red': DEFAULT_THEME.colors.red[5],
      },

      light: {
        ...defaultVariables.light,
        '--mantine-color-blue': DEFAULT_THEME.colors.blue[5],
      },

      dark: {
        ...defaultVariables.dark,
        '--mantine-color-orange': DEFAULT_THEME.colors.orange[5],
      },
    });
  });
});
