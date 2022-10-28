import { MantineStyleSystemProps, MantineTheme, CSSObject } from '@mantine/styles';

type SystemPropType = 'spacing' | 'color' | 'default';

interface SystemProp {
  type: SystemPropType;
  property: keyof React.CSSProperties | (keyof React.CSSProperties)[];
}

const SYSTEM: Record<string, SystemProp> = {
  m: { type: 'spacing', property: 'margin' },
  mt: { type: 'spacing', property: 'marginTop' },
  mb: { type: 'spacing', property: 'marginBottom' },
  ml: { type: 'spacing', property: 'marginLeft' },
  mr: { type: 'spacing', property: 'marginRight' },
  mx: { type: 'spacing', property: ['marginRight', 'marginLeft'] },
  my: { type: 'spacing', property: ['marginTop', 'marginBottom'] },

  p: { type: 'spacing', property: 'padding' },
  pt: { type: 'spacing', property: 'paddingTop' },
  pb: { type: 'spacing', property: 'paddingBottom' },
  pl: { type: 'spacing', property: 'paddingLeft' },
  pr: { type: 'spacing', property: 'paddingRight' },
  px: { type: 'spacing', property: ['paddingRight', 'paddingLeft'] },
  py: { type: 'spacing', property: ['paddingTop', 'paddingBottom'] },
};

const NEGATIVE_VALUES = ['-xs', '-sm', '-md', '-lg', '-xl'];

function getSizeValue(size: any, theme: MantineTheme) {
  if (NEGATIVE_VALUES.includes(size)) {
    return theme.fn.size({ size: size.replace('-', ''), sizes: theme.spacing }) * -1;
  }

  return theme.fn.size({ size, sizes: theme.spacing });
}

interface GetResponsiveStyles {
  value: any;
  theme: MantineTheme;
  getValue: (value: any, theme: MantineTheme) => any;
  property: string | string[];
}

function getResponsiveValue({ value, theme, getValue, property }: GetResponsiveStyles) {
  if (value == null) {
    return undefined;
  }

  if (typeof value === 'object') {
    const results = Object.keys(value).reduce<CSSObject>((acc, breakpointKey) => {
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

    console.log(results);
    return results;
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

// interface GetPropertyStyles {
//   value: any;
//   type: 'spacing' | 'color' | 'default';
//   theme: MantineTheme;
//   property: string | string[];
// }

// function getPropertyStyles({ value, type, theme, property }: GetPropertyStyles): CSSObject {
//   const cssValue = type === 'spacing' ? getSizeValue(value, theme) : value;

//   if (Array.isArray(property)) {
//     return property.reduce((acc, prop) => {
//       acc[prop] = cssValue;
//       return acc;
//     }, {});
//   }

//   return { [property]: cssValue };
// }

const valueGetters = {
  spacing: getSizeValue,
  default: (value: any) => value,
  color: (value: any) => value,
};

export function getSystemStyles(systemStyles: MantineStyleSystemProps, theme: MantineTheme) {
  const styles = Object.keys(SYSTEM).reduce((acc, systemProp) => {
    if (systemProp in systemStyles && systemStyles[systemProp] !== undefined) {
      acc.push(
        getResponsiveValue({
          value: systemStyles[systemProp],
          getValue: valueGetters[SYSTEM[systemProp].type],
          property: SYSTEM[systemProp].property,
          theme,
        })
      );
    }

    return acc;
  }, []);

  return styles.reduce((acc, stylesPartial) => {
    const result = { ...acc, ...stylesPartial };
    return result;
  }, {});
}
