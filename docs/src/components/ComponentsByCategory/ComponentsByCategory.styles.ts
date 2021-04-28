import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFocusStyles } from '@mantine/core';

const BREAKPOINT = 765;

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      marginTop: theme.spacing.md * 2,
    },

    item: {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md * 2,
      },
    },

    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing.xs,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
      }`,
      paddingBottom: theme.spacing.xs,
    },

    links: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: -theme.spacing.xs / 2,
      marginLeft: -theme.spacing.xs - theme.spacing.xs / 2,
    },

    link: {
      ...getFocusStyles(theme),
      flex: `0 0 calc(33.3333% - ${theme.spacing.xs * 4}px)`,
      display: 'block',
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      padding: theme.spacing.xs,
      margin: theme.spacing.xs / 2,
      borderRadius: theme.radius.sm,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      },

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        flex: `0 0 calc(100% - ${theme.spacing.xs * 4}px)`,
      },
    },

    linkTitle: {
      marginBottom: theme.spacing.xs / 2,
    },

    linkDescription: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    },

    title: {
      marginLeft: theme.spacing.xs,
    },
  }),
  { theming }
);
