import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    title: {
      marginBottom: theme.spacing.xs,
    },

    configurator: {
      display: 'flex',
      border: `1px solid ${theme.colors.gray[3]}`,
      overflow: 'hidden',
      borderTopLeftRadius: theme.radius.sm,
      borderTopRightRadius: theme.radius.sm,
      borderBottom: 0,
    },

    preview: {
      flex: 1,
      padding: theme.spacing.md,
      borderRight: `1px solid ${theme.colors.gray[3]}`,
    },

    controls: {
      width: 250,
      padding: theme.spacing.md,
      backgroundColor: theme.colors.gray[0],
    },

    code: {
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      marginTop: 0,
    },
  }),
  { theming }
);
