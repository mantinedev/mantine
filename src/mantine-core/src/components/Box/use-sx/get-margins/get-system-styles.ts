import { MantineStyleSystemProps, MantineTheme, CSSObject } from '@mantine/styles';

const SYSTEM_PROPS = {
  m: 'margin',
  mt: 'marginTop',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
  p: 'padding',
  pt: 'paddingTop',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',
};

const NEGATIVE_VALUES = ['-xs', '-sm', '-md', '-lg', '-xl'];

function isValidSizeValue(margin: any) {
  return typeof margin === 'string' || typeof margin === 'number';
}

function getSizeValue(margin: any, theme: MantineTheme) {
  if (NEGATIVE_VALUES.includes(margin)) {
    return theme.fn.size({ size: margin.replace('-', ''), sizes: theme.spacing }) * -1;
  }

  return theme.fn.size({ size: margin, sizes: theme.spacing });
}

export function getSystemStyles(systemStyles: MantineStyleSystemProps, theme: MantineTheme) {
  const styles: CSSObject = {};

  if (isValidSizeValue(systemStyles.py)) {
    const value = getSizeValue(systemStyles.py, theme);
    styles.paddingTop = value;
    styles.paddingBottom = value;
  }

  if (isValidSizeValue(systemStyles.px)) {
    const value = getSizeValue(systemStyles.px, theme);
    styles.paddingLeft = value;
    styles.paddingRight = value;
  }

  if (isValidSizeValue(systemStyles.my)) {
    const value = getSizeValue(systemStyles.my, theme);
    styles.marginTop = value;
    styles.marginBottom = value;
  }

  if (isValidSizeValue(systemStyles.mx)) {
    const value = getSizeValue(systemStyles.mx, theme);
    styles.marginLeft = value;
    styles.marginRight = value;
  }

  Object.keys(SYSTEM_PROPS).forEach((property) => {
    if (isValidSizeValue(systemStyles[property])) {
      styles[SYSTEM_PROPS[property]] = theme.fn.size({
        size: getSizeValue(systemStyles[property], theme),
        sizes: theme.spacing,
      });
    }
  });

  return styles;
}
