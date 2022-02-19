import { MantineMargins, MantineTheme, CSSObject } from '@mantine/styles';

const MARGINS = {
  m: 'margin',
  mt: 'marginTop',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
};

const NEGATIVE_MARGINS = ['-xs', '-sm', '-md', '-lg', '-xl'];

function isValidMargin(margin: any) {
  return typeof margin === 'string' || typeof margin === 'number';
}

function getMarginValue(margin: any, theme: MantineTheme) {
  if (NEGATIVE_MARGINS.includes(margin)) {
    return theme.fn.size({ size: margin.replace('-', ''), sizes: theme.spacing }) * -1;
  }

  return theme.fn.size({ size: margin, sizes: theme.spacing });
}

export function getMargins(margins: MantineMargins, theme: MantineTheme) {
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

  Object.keys(MARGINS).forEach((margin) => {
    if (isValidMargin(margins[margin])) {
      styles[MARGINS[margin]] = theme.fn.size({
        size: getMarginValue(margins[margin], theme),
        sizes: theme.spacing,
      });
    }
  });

  return styles;
}
