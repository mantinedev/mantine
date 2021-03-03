import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFocusStyles } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    category: {
      '& + &': {
        marginTop: theme.spacing.md,
        paddingTop: theme.spacing.md,
        borderTop: `1px solid ${theme.colors.gray[1]}`,
      },
    },

    header: {
      ...getFocusStyles(theme),
      outline: 0,
      display: 'flex',
      alignItems: 'center',
      width: `calc(100% + ${theme.spacing.md * 2}px)`,
      justifyContent: 'space-between',
      backgroundColor: 'transparent',
      borderRadius: theme.radius.sm,
      color: theme.colors.gray[6],
      height: 32,
      border: 0,
      padding: [0, theme.spacing.md],
      marginBottom: theme.spacing.xs,
      marginLeft: -1 * theme.spacing.md,
      marginRight: -1 * theme.spacing.md,
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: theme.colors.gray[0],
      },
    },

    icon: {
      transform: 'rotate(0deg)',
      transition: 'transform 150ms ease',
    },

    iconCollapsed: {
      transform: 'rotate(-90deg)',
    },

    link: {
      outline: 0,
      ...getFocusStyles(theme),
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
      userSelect: 'none',
    },
  }),
  { theming }
);
