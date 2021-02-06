import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/types';
import { theming } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    avatar: {
      boxSizing: 'border-box',
      position: 'relative',
      userSelect: 'none',
    },

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
    },

    placeholderIcon: {
      width: '70%',
      height: '70%',
      color: theme.colors.gray[5],
    },
  }),
  { theming }
);
