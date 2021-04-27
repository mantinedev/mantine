import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFocusStyles } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    mainLink: {
      ...getFocusStyles(theme),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
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
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    },

    body: {
      marginLeft: theme.spacing.sm,
    },
  }),
  { theming }
);
