import { createUseStyles } from 'react-jss';
import { getFontStyles, theming } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    wrapper: {
      ...getFontStyles(theme),
      display: 'flex',
      alignItems: 'center',
      flex: `0 0 calc(50% - ${theme.spacing.md}px)`,
      border: `2px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
      }`,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      textAlign: 'left',
      padding: theme.spacing.xl,
      borderRadius: theme.radius.sm,
      margin: theme.spacing.md / 2,
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
      },

      '@media (max-width: 1000px)': {
        flex: `0 0 calc(100% - ${theme.spacing.md}px)`,
      },
    },

    body: {
      marginLeft: theme.spacing.xl,
    },

    title: {
      fontFamily: theme.fontFamilyMonospace,
      marginBottom: 3,
    },

    description: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      fontSize: theme.fontSizes.sm,
    },
  }),
  { theming }
);
