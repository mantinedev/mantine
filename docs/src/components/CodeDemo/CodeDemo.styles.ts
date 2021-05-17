import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    demo: {
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
      }`,
      position: 'relative',

      '&:not(:only-child)': {
        borderBottom: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
      },
    },

    code: {
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      marginTop: 0,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
      }`,
    },

    controls: {
      position: 'absolute',
      bottom: theme.spacing.xs - 1,
      right: theme.spacing.xs - 1,
    },

    withToggle: {
      paddingRight: 50,
      minHeight: 80,
    },
  }),
  { theming }
);
