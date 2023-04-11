import { MantineThemeOverride, MantineThemeBase, MantineTheme } from '../../types';
import { attachFunctions } from '../../functions/attach-functions';

export function mergeTheme(
  currentTheme: MantineThemeBase,
  themeOverride?: MantineThemeOverride
): MantineThemeBase {
  if (!themeOverride) {
    return currentTheme;
  }

  // @ts-ignore
  const result: MantineThemeBase = Object.keys(currentTheme).reduce((acc, key) => {
    if (key === 'headings' && themeOverride.headings) {
      const sizes = themeOverride.headings.sizes
        ? Object.keys(currentTheme.headings.sizes).reduce((headingsAcc, h) => {
            // eslint-disable-next-line no-param-reassign
            headingsAcc[h] = {
              ...currentTheme.headings.sizes[h],
              ...themeOverride.headings.sizes[h],
            };
            return headingsAcc;
          }, {} as MantineThemeBase['headings']['sizes'])
        : currentTheme.headings.sizes;
      return {
        ...acc,
        headings: {
          ...currentTheme.headings,
          ...themeOverride.headings,
          sizes,
        },
      };
    }

    if (key === 'breakpoints' && themeOverride.breakpoints) {
      const themeBreakpointsKeys = Object.keys(currentTheme.breakpoints);
      const themeOverrideBreakpointsKeys = Object.keys(themeOverride.breakpoints);

      // If overriden theme has extented breakpoints
      if (themeBreakpointsKeys.length !== themeOverrideBreakpointsKeys.length) {
        const missedKeys = themeBreakpointsKeys.filter(
          (bp) => !themeOverrideBreakpointsKeys.includes(bp));

        if (missedKeys.length === 0) {
          return themeOverride.breakpoints;
        }
        // eslint-disable-next-line no-console
        console.warn(
          '[@mantine/core] It looks like you overrided the `theme.config` but forgot to specify the required breakpoints keys',
          missedKeys,
          'Fix the missing keys or the final configuration will have sorting issues'
        );
      }
    }

    acc[key] =
      typeof themeOverride[key] === 'object'
        ? { ...currentTheme[key], ...themeOverride[key] }
        : typeof themeOverride[key] === 'number' ||
          typeof themeOverride[key] === 'boolean' ||
          typeof themeOverride[key] === 'function'
        ? themeOverride[key]
        : themeOverride[key] || currentTheme[key];
    return acc;
  }, {} as MantineThemeBase);

  if (themeOverride?.fontFamily && !themeOverride?.headings?.fontFamily) {
    result.headings.fontFamily = themeOverride.fontFamily as string;
  }

  if (!(result.primaryColor in result.colors)) {
    throw new Error(
      'MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color'
    );
  }

  return result;
}

export function mergeThemeWithFunctions(
  currentTheme: MantineThemeBase,
  themeOverride?: MantineThemeOverride
): MantineTheme {
  return attachFunctions(mergeTheme(currentTheme, themeOverride));
}
