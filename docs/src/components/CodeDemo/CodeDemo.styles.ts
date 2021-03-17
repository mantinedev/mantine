import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.xs,
    },

    demo: {
      border: `1px solid ${theme.colors.gray[3]}`,
      borderBottom: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      position: 'relative',
      zIndex: 1,
    },

    code: {
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      marginTop: 0,
    },
  }),
  { theming }
);
