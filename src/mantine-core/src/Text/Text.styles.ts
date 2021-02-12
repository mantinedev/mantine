import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, MantineSize } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    text: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFamily: theme.fontFamily,
      color: ({ color }: { color: string }) => (color ? theme.colors[color][5] : theme.black),
      fontSize: ({ size }: { size: MantineSize }) => theme.fontSizes[size],
      lineHeight: 1.4,
    },

    bold: { fontWeight: 700 },
    semibold: { fontWeight: 500 },
  }),
  { theming }
);
