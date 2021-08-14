import { createUseStyles } from 'react-jss';
import { theming, INPUT_SIZES } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    control: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 1000,
      paddingLeft: theme.spacing.sm,
      paddingRight: 4,
      marginLeft: theme.spacing.md,
      width: 140,
      height: INPUT_SIZES.sm,
    },

    iconWrapper: {
      height: 28,
      width: 28,
      borderRadius: 28,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.dark[4],
      color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.yellow[4],
    },

    value: {
      lineHeight: 1,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[9],
    },
  }),
  { theming }
);
