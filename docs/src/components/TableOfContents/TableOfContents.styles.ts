import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export const TABLE_OF_CONTENTS_WIDTH = 260;

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      boxSizing: 'border-box',
      width: TABLE_OF_CONTENTS_WIDTH,
      position: 'fixed',
      top: 76,
      right: 0,
      paddingRight: theme.spacing.md,
      paddingLeft: theme.spacing.md,
    },

    link: {
      marginTop: theme.spacing.xs,
      display: 'block',
      color: theme.colors.gray[6],
    },
  }),
  { theming }
);
