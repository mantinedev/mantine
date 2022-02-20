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

function isValidMargin(margin: any) {
  return typeof margin === 'string' || typeof margin === 'number';
}

function getMarginValue(margin: any, theme: MantineTheme) {
  if (NEGATIVE_VALUES.includes(margin)) {
    return theme.fn.size({ size: margin.replace('-', ''), sizes: theme.spacing }) * -1;
  }

  return theme.fn.size({ size: margin, sizes: theme.spacing });
}

export function getSystemStyles(margins: MantineStyleSystemProps, theme: MantineTheme) {
  const styles: CSSObject = {};

  if (isValidMargin(margins.my)) {
    const margin = getMarginValue(margins.my, theme);
    styles.marginTop = margin;
    styles.marginBottom = margin;
  }

  if (isValidMargin(margins.mx)) {
    const margin = getMarginValue(margins.mx, theme);
    styles.marginLeft = margin;
    styles.marginRight = margin;
  }

  Object.keys(SYSTEM_PROPS).forEach((margin) => {
    if (isValidMargin(margins[margin])) {
      styles[SYSTEM_PROPS[margin]] = theme.fn.size({
        size: getMarginValue(margins[margin], theme),
        sizes: theme.spacing,
      });
    }
  });

  return styles;
}
