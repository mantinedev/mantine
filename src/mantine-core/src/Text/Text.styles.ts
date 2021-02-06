import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, MantineColor, MantineSize } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    text: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontFamily: theme.fontFamily,
      color: ({ color }: { color: MantineColor }) =>
        color ? theme.colors[color][5] : theme.colors.black,
      fontSize: ({ size }: { size: MantineSize }) => theme.fontSizes[size],
    },

    bold: { fontWeight: 700 },
    semibold: { fontWeight: 500 },
  }),
  { theming }
);
