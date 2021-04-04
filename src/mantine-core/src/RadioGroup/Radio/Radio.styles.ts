import { createUseStyles } from 'react-jss';
import {
  MantineTheme,
  MantineNumberSize,
  getSizeValue,
  getFontStyles,
  getFocusStyles,
} from '@mantine/theme';

interface RadioStylesProps {
  theme: MantineTheme;
  size: MantineNumberSize;
}

export const sizes = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 28,
  xl: 32,
};

export default createUseStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  radio: ({ theme, size }: RadioStylesProps) => ({
    ...getFocusStyles(theme),
    backgroundColor: theme.colors.gray[0],
    border: `1px solid ${theme.colors.gray[4]}`,
    position: 'relative',
    appearance: 'none',
    width: getSizeValue({ sizes, size }),
    height: getSizeValue({ sizes, size }),
    borderRadius: getSizeValue({ sizes, size }),
    margin: 0,
    marginRight: theme.spacing.sm,
    background: 'red',
    display: 'block',
    cursor: 'pointer',

    '&:checked': {
      background: theme.colors[theme.primaryColor][5],
      borderColor: theme.colors[theme.primaryColor][5],

      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        backgroundColor: theme.white,
        top: '20%',
        left: '20%',
        width: '60%',
        height: '60%',
        borderRadius: 1000,
      },
    },

    '&:disabled': {
      borderColor: theme.colors.gray[2],
      backgroundColor: theme.colors.gray[1],

      '& + $label': {
        color: theme.colors.gray[5],
      },
    },
  }),

  label: ({ theme }: RadioStylesProps) => ({
    ...getFontStyles(theme),
    display: 'block',
    lineHeight: theme.lineHeight,
  }),
});
