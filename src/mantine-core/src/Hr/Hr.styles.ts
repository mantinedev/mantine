import React from 'react';
import { createUseStyles } from 'react-jss';
import { MantineNumberSize, MantineTheme, getSizeValue, getThemeColor } from '@mantine/theme';

interface HrStylesProps {
  theme: MantineTheme;
  size: MantineNumberSize;
  variant: React.CSSProperties['borderTopStyle'];
  color: string;
  inset: boolean;
  insetType: string;
  orientation: string;
}

export const sizes = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5,
};

const getInsetStyles = (inset: boolean, insetType: string) => ({
  marginLeft: inset && (insetType === 'left' || insetType === 'middle') && 70,
  marginRight: inset && (insetType === 'right' || insetType === 'middle') && 70,
});

export default createUseStyles(
  {
    hr: ({ theme, size, variant, color, inset, insetType }: HrStylesProps) => ({
      border: 0,
      borderTopWidth: getSizeValue({ size, sizes }),
      borderTopColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
      borderTopStyle: variant,
      margin: 0,
      ...getInsetStyles(inset, insetType),
    }),
    hrVertical: ({ theme, size, variant, color }: HrStylesProps) => ({
      flexDirection: 'column',
      height: '100%',
      borderTop: 0,
      borderLeftWidth: getSizeValue({ size, sizes }),
      borderLeftColor: getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === 'dark' ? 4 : 6,
      }),
      borderLeftStyle: variant,
    }),
    subHeader: ({ theme, color, inset, insetType }: HrStylesProps) => ({
      fontSize: '14px',
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
      textAlign: inset && insetType === 'right' ? 'end' : 'initial',
    }),
  },
  { link: true }
);
