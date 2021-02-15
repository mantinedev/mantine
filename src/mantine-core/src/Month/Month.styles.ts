import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFontStyles } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    month: {
      ...getFontStyles(theme),
      borderCollapse: 'collapse',

      '& td': {
        padding: 0,
      },

      '& th': {
        padding: 0,
        fontWeight: 'normal',
        paddingBottom: theme.spacing.xs / 2,
        textAlign: 'center',
        cursor: 'default',
        userSelect: 'none',
      },
    },
  }),
  { theming }
);
