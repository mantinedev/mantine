import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, MantineColor } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    withIcon: {
      paddingLeft: '10px !important',

      '&::before': {
        display: 'none !important',
      },
    },

    notification: ({ color }: { color: MantineColor }) => ({
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      boxShadow: '1px 1px 3px 1px rgba(0,0,0,.14)',
      paddingLeft: 22,
      paddingRight: 5,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 4,
      backgroundColor: theme.colors.white,

      '&::before': {
        content: "''",
        display: 'block',
        position: 'absolute',
        width: 6,
        top: 4,
        bottom: 4,
        left: 4,
        borderRadius: 4,
        backgroundColor: theme.colors[color || theme.primaryColor][5],
      },

      '& $icon': {
        backgroundColor: theme.colors[color || theme.primaryColor][5],
        color: theme.colors.white,
      },
    }),

    body: {
      flex: 1,
      marginRight: 10,
    },

    icon: {
      boxSizing: 'border-box',
      marginRight: 12,
      width: 28,
      height: 28,
      borderRadius: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.colors.white,
    },

    title: {
      lineHeight: 1.4,
      marginBottom: 2,
    },

    description: {
      color: theme.colors.gray[6],
      lineHeight: 1.4,

      '&:only-child': {
        color: theme.colors.gray[9],
      },
    },
  }),
  { theming }
);
