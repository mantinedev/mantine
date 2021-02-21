import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    category: {
      '& + &': {
        marginTop: theme.spacing.md,
        paddingTop: theme.spacing.md,
        borderTop: `1px solid ${theme.colors.gray[1]}`,
      },
    },

    link: {
      display: 'block',
      textDecoration: 'none',
      color: theme.colors.gray[7],
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      height: 34,
      lineHeight: '34px',
      borderRadius: theme.radius.sm,
      fontSize: theme.fontSizes.sm,
      userSelect: 'none',
    },

    linkActive: {
      backgroundColor: theme.colors.blue[0],
      color: theme.colors.blue[8],
      fontWeight: 500,
    },

    title: {
      marginBottom: 5,
      userSelect: 'none',
      color: theme.colors.gray[6],
    },
  }),
  { theming }
);
