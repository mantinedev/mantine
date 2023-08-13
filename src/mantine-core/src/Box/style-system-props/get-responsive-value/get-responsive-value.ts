import { MantineTheme, CSSObject, getSize, getBreakpointValue } from '@mantine/styles';

function getSortedKeys(value: Record<string, any>, theme: MantineTheme) {
  const sorted = Object.keys(value)
    .filter((breakpoint) => breakpoint !== 'base')
    .sort(
      (a, b) =>
        getBreakpointValue(getSize({ size: a, sizes: theme.breakpoints })) -
        getBreakpointValue(getSize({ size: b, sizes: theme.breakpoints }))
    );
  return 'base' in value ? ['base', ...sorted] : sorted;
}

export type StyleProperty = string | string[];

interface GetResponsiveStyles {
  value: any;
  theme: MantineTheme;
  getValue: (value: any, theme: MantineTheme) => any;
  property: StyleProperty;
}

export function getResponsiveValue({ value, theme, getValue, property }: GetResponsiveStyles) {
  if (value == null) {
    return undefined;
  }

  if (typeof value === 'object') {
    const result = getSortedKeys(value, theme).reduce<CSSObject>((acc, breakpointKey) => {
      if (breakpointKey === 'base' && value.base !== undefined) {
        const baseValue = getValue(value.base, theme);

        if (Array.isArray(property)) {
          property.forEach((prop) => {
            acc[prop] = baseValue;
          });
          return acc;
        }

        acc[property] = baseValue;
        return acc;
      }

      const breakpointValue = getValue(value[breakpointKey], theme);

      if (Array.isArray(property)) {
        acc[theme.fn.largerThan(breakpointKey)] = {};
        property.forEach((prop) => {
          acc[theme.fn.largerThan(breakpointKey)][prop] = breakpointValue;
        });

        return acc;
      }

      acc[theme.fn.largerThan(breakpointKey)] = {
        [property]: breakpointValue,
      };

      return acc;
    }, {});

    return result;
  }

  const cssValue = getValue(value, theme);

  if (Array.isArray(property)) {
    return property.reduce((acc, prop) => {
      acc[prop] = cssValue;
      return acc;
    }, {});
  }

  return { [property]: cssValue };
}
