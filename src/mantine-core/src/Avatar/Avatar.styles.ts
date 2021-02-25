import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getSizeValue } from '@mantine/theme';

const sizes = {
  xs: 14,
  sm: 18,
  md: 26,
  lg: 36,
  xl: 52,
};

export default createUseStyles(
  (theme: MantineTheme) => ({
    avatar: ({ size, radius }) => ({
      boxSizing: 'border-box',
      position: 'relative',
      userSelect: 'none',
      overflow: 'hidden',
      width: getSizeValue({ size, sizes }),
      height: getSizeValue({ size, sizes }),
      borderRadius: radius ? getSizeValue({ size: radius, sizes: theme.radius }) : size,
    }),

    image: {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    },

    placeholder: {
      backgroundColor: theme.colors.gray[1],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },

    placeholderIcon: {
      width: '70%',
      height: '70%',
      color: theme.colors.gray[5],
    },
  }),
  { theming }
);
