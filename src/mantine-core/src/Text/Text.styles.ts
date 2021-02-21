import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, MantineSize, getFontStyles } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    text: {
      ...getFontStyles(theme),
      color: ({ color }: { color: string }) =>
        color in theme.colors ? theme.colors[color][7] : theme.black,
      fontSize: ({ size }: { size: MantineSize }) => theme.fontSizes[size],
      lineHeight: 1.4,
    },
  }),
  { theming }
);
