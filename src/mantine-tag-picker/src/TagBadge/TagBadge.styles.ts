import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    tagBadge: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFamily: theme.fontFamily,
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      paddingLeft: 12,
      paddingRight: 12,
      borderRadius: 22,
    },
  }),
  { theming }
);
