import { createUseStyles } from 'react-jss';
import { theming, getFontStyles, getFocusStyles } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    guide: {
      paddingTop: theme.spacing.xl,
    },

    controls: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: -theme.spacing.md / 2,
      marginRight: -theme.spacing.md / 2,
      marginTop: theme.spacing.xs,
    },

    control: {
      ...getFontStyles(theme),
      ...getFocusStyles(theme),
      position: 'relative',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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
    },

    checked: {
      position: 'absolute',
      top: 0,
      left: 0,
      borderBottomRightRadius: theme.radius.sm,
      backgroundColor: theme.colors.blue[7],
    },

    controlTitle: {
      marginTop: theme.spacing.md,
    },

    active: {
      borderColor: theme.colors.blue[7],
    },
  }),
  { theming }
);
