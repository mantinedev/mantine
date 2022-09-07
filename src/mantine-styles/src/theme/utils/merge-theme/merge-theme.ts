import { MantineThemeOverride, MantineThemeBase, MantineTheme } from '../../types';
import { attachFunctions } from '../../functions/attach-functions';
import { toPx } from '../to-px/to-px';

export function mergeTheme(
  currentTheme: MantineThemeBase,
  themeOverride?: MantineThemeOverride
): MantineThemeBase {
  if (!themeOverride) {
    return currentTheme;
  }

  // @ts-ignore
  return Object.keys(currentTheme).reduce((acc, key) => {
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

    if (['fontSizes', 'spacing', 'radius', 'breakpoints'].includes(key) && themeOverride[key]) {
      const sizes = themeOverride[key]
        ? Object.keys(currentTheme[key]).reduce((mantineSizesAcc, h) => {
            let calculateSize = currentTheme[key][h];
            if (h in themeOverride[key]) {
              calculateSize =
                typeof themeOverride[key][h] === 'number'
                  ? themeOverride[key][h]
                  : toPx(themeOverride[key][h]);
            }
            // eslint-disable-next-line no-param-reassign
            mantineSizesAcc[h] = calculateSize;
            return mantineSizesAcc;
          }, {})
        : currentTheme[key];

      return {
        ...acc,
        [key]: sizes,
      };
    }

    acc[key] =
      typeof themeOverride[key] === 'object'
        ? { ...currentTheme[key], ...themeOverride[key] }
        : typeof themeOverride[key] === 'number' || typeof themeOverride[key] === 'boolean'
        ? themeOverride[key]
        : themeOverride[key] || currentTheme[key];
    return acc;
  }, {} as MantineThemeBase);
}

export function mergeThemeWithFunctions(
  currentTheme: MantineThemeBase,
  themeOverride?: MantineThemeOverride
): MantineTheme {
  return attachFunctions(mergeTheme(currentTheme, themeOverride));
}
