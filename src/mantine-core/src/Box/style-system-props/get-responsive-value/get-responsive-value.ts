import { MantineTheme, CSSObject } from '@mantine/styles';

type Property = string | string[];

interface GetResponsiveStyles {
  value: any;
  theme: MantineTheme;
  getValue: (value: any, theme: MantineTheme) => any;
  property: Property;
}

export function getResponsiveValue({ value, theme, getValue, property }: GetResponsiveStyles) {
  if (value == null) {
    return undefined;
  }

  if (typeof value === 'object') {
    const result = Object.keys(value).reduce<CSSObject>((acc, breakpointKey) => {
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
        property.forEach((prop) => {
          acc[theme.fn.largerThan(breakpointKey as any)] = {
            [prop]: breakpointValue,
          };
        });

        return acc;
      }

      acc[theme.fn.largerThan(breakpointKey as any)] = {
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
