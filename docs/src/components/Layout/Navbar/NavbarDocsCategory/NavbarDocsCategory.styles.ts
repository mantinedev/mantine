import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFocusStyles } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    category: {
      marginBottom: theme.spacing.md,
    },

    categoryCollapsed: {
      marginBottom: 0,
    },

    header: {
      ...getFocusStyles(theme),
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      outline: 0,
      display: 'flex',
      alignItems: 'center',
      width: `calc(100% + ${theme.spacing.md}px)`,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      height: 32,
      border: 0,
      padding: [0, theme.spacing.md],
      paddingLeft: 0,
      cursor: 'pointer',
    },

    icon: {
      width: 15,
      height: 15,
      marginRight: theme.spacing.md,
      transform: 'rotate(0deg)',
      transition: 'transform 150ms ease',
    },

    iconCollapsed: {
      transform: 'rotate(-90deg)',
    },

    link: {
      ...getFocusStyles(theme),
      borderLeft: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[4]
      }`,
      outline: 0,
      display: 'block',
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      paddingLeft: 23,
      paddingRight: theme.spacing.md,
      marginLeft: 7,
      height: 34,
      lineHeight: '34px',
      borderTopRightRadius: theme.radius.sm,
      borderBottomRightRadius: theme.radius.sm,
      fontSize: theme.fontSizes.sm,
      userSelect: 'none',
    },

    linkActive: {
      borderLeftColor: theme.colors.blue[5],
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[0],
      color: theme.colorScheme === 'dark' ? theme.colors.blue[0] : theme.colors.blue[8],
      fontWeight: 500,
    },

    title: {
      userSelect: 'none',
    },
  }),
  { theming }
);
