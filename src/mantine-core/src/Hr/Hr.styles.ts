import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    hr: {
      border: 0,
      borderTopWidth: 1,
      borderTopColor: theme.colors.gray[5],
    },
  }),
  { theming }
);
