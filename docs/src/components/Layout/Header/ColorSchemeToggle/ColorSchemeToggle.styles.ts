import { createUseStyles } from 'react-jss';
import { theming, INPUT_SIZES } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    control: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: [theme.spacing.xs, 0],
      borderRadius: 1000,
      marginLeft: theme.spacing.md,
      width: 150,
      height: INPUT_SIZES.sm,
    },

    icon: {
      color: theme.colorScheme === 'dark' ? theme.colors.yellow[5] : theme.colors.blue[6],
      marginRight: theme.spacing.xs,
    },

    value: {
      lineHeight: 1,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[9],
    },
  }),
  { theming }
);
