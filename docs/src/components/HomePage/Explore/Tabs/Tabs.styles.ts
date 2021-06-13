import { createUseStyles } from 'react-jss';
import { theming, getFocusStyles } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    tab: {
      ...getFocusStyles(theme),
      display: 'block',
      width: '100%',
      backgroundColor: 'transparent',
      border: 0,
      appearance: 'none',
      textAlign: 'left',
      WebkitTapHighlightColor: 'transparent',
      opacity: 0.6,
      cursor: 'pointer',
      paddingBottom: theme.spacing.md,
      paddingTop: theme.spacing.md,

      '&:hover': {
        opacity: 1,
      },

      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.colors.gray[3]}`,
      },
    },

    active: {
      opacity: 1,
    },

    header: {
      display: 'flex',
      alignItems: 'center',
    },

    index: {
      fontSize: theme.fontSizes.xl,
      fontWeight: 500,
      border: `2px solid ${theme.colors.gray[7]}`,
      color: theme.colors.gray[7],
      borderRadius: theme.radius.md,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
    },

    title: {
      fontSize: 22,
      fontWeight: 700,
      marginLeft: theme.spacing.md,
      color: theme.colors.gray[7],
    },

    description: {
      boxSizing: 'border-box',
      height: 80,
      display: 'flex',
      alignItems: 'center',
      color: theme.colors.gray[7],
    },
  }),
  { theming }
);
