import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFocusStyles } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      marginTop: theme.spacing.xl * 2,
      paddingTop: theme.spacing.md,
      borderTop: `1px dashed ${theme.colors.gray[3]}`,
    },

    links: {
      marginTop: theme.spacing.xs,
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginLeft: -theme.spacing.xs,
      marginRight: -theme.spacing.xs,
    },

    link: {
      ...getFocusStyles(theme),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      margin: theme.spacing.xs,

      '&:hover': {
        color: theme.colors[theme.primaryColor][6],
      },
    },

    linkLabel: {
      marginLeft: theme.spacing.xs,
    },
  }),
  { theming }
);
