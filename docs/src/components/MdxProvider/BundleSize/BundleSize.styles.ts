import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      display: 'flex',
      marginTop: theme.spacing.md,
    },

    item: {
      border: `1px solid ${theme.colors.gray[3]}`,
      borderRadius: theme.radius.sm,
      flex: 1,
      padding: theme.spacing.md,

      '& + &': {
        marginLeft: theme.spacing.xl,
      },
    },

    value: {
      textAlign: 'center',
      fontWeight: 700,
      fontSize: 30,
    },

    title: {
      textAlign: 'center',
      marginTop: theme.spacing.xs,
    },

    unit: {
      marginLeft: 6,
      color: theme.colors.gray[6],
    },
  }),
  { theming }
);
