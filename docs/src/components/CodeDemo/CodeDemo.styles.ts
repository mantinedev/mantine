import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    demo: {
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[3]
      }`,
      position: 'relative',
      zIndex: 1,

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
    },
  }),
  { theming }
);
