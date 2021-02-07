import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    table: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFamily: theme.fontFamily,
      width: '100%',
      borderCollapse: 'collapse',

      '& > thead > tr > th': {
        textAlign: 'left',
        fontWeight: 'bold',
        color: theme.colors.gray[7],
        fontSize: 14,
        padding: [7, 10],
        borderBottom: `1px solid ${theme.colors.gray[3]}`,
      },

      '& > tbody > tr > td': {
        padding: [7, 10],
        borderBottom: `1px solid ${theme.colors.gray[3]}`,
        fontSize: 14,
      },

      '& > tbody > tr:last-of-type > td': {
        borderBottom: 'none',
      },
    },

    striped: {
      '& > tbody > tr:nth-of-type(odd)': {
        backgroundColor: theme.colors.gray[0],
      },
    },

    hover: {
      '& > tbody > tr:hover': {
        backgroundColor: theme.colors.gray[1],
      },
    },
  }),
  { theming }
);
