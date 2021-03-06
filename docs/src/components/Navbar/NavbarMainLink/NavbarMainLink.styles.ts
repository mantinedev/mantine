import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    mainLink: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: theme.colors.gray[7],
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,
      padding: 5,
      marginLeft: -5,
      marginRight: -5,
      borderRadius: theme.radius.sm,
      userSelect: 'none',

      '& + &': {
        marginTop: 5,
      },
    },

    active: {
      backgroundColor: theme.white,
    },

    body: {
      marginLeft: theme.spacing.sm,
    },
  }),
  { theming }
);
