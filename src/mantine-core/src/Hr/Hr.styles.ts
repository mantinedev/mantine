import React from 'react';
import { createUseStyles } from 'react-jss';
import { MantineNumberSize, MantineTheme, getSizeValue, getThemeColor } from '@mantine/theme';

interface HrStylesProps {
  theme: MantineTheme;
  size: MantineNumberSize;
  variant: React.CSSProperties['borderTopStyle'];
  color: string;
  orientation: string;
  subHeaderProps: Record<string, any>;
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
    hr: ({ theme, size, variant, color }: HrStylesProps) => ({
      border: 0,
      borderTopWidth: getSizeValue({ size, sizes }),
      borderTopColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
      borderTopStyle: variant,
      margin: 0,
    }),
    hrVertical: ({ theme, size, variant, color }: HrStylesProps) => ({
      border: 0,
      borderLeftWidth: getSizeValue({ size, sizes }),
      borderLeftColor: getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === 'dark' ? 4 : 6,
      }),
      borderLeftStyle: variant,
    }),
    subHeader: ({ theme, color, orientation, subHeaderProps }: HrStylesProps) => ({
      fontSize: theme.fontSizes.xs,
      color: subHeaderProps?.color
        ? subHeaderProps.color
        : getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
      marginLeft: orientation === 'vertical' ? 5 : 0,
    }),
  },
  { link: true }
);
