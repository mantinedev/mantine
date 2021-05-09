import React from 'react';
import { createUseStyles } from 'react-jss';
import { MantineNumberSize, MantineTheme, getSizeValue, getThemeColor } from '@mantine/theme';

interface DividerStylesProps {
  theme: MantineTheme;
  size: MantineNumberSize;
  margins: MantineNumberSize;
  variant: React.CSSProperties['borderTopStyle'];
  color: string;
  orientation: string;
}

export const sizes = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5,
};

export default createUseStyles(
  {
    horizontal: ({ theme, size, variant, color, margins }: DividerStylesProps) => ({
      border: 0,
      borderTopWidth: getSizeValue({ size, sizes }),
      borderTopColor: getThemeColor({ theme, color, shade: 5 }),
      borderTopStyle: variant,
      margin: 0,
      marginTop: getSizeValue({ size: margins, sizes: theme.spacing }),
      marginBottom: getSizeValue({ size: margins, sizes: theme.spacing }),
    }),

    vertical: ({ theme, size, variant, color, margins }: DividerStylesProps) => ({
      border: 0,
      borderLeftWidth: getSizeValue({ size, sizes }),
      borderLeftColor: getThemeColor({ theme, color, shade: 5 }),
      borderLeftStyle: variant,
      marginLeft: getSizeValue({ size: margins, sizes: theme.spacing }),
      marginRight: getSizeValue({ size: margins, sizes: theme.spacing }),
    }),
  },
  { link: true }
);
