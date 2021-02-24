import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, MantineSize, getFocusStyles, getFontStyles } from '@mantine/theme';

export type TextVariant = 'text' | 'link';

export default createUseStyles(
  (theme: MantineTheme) => ({
    text: ({
      color,
      variant,
      size,
    }: {
      color: string;
      variant: TextVariant;
      size: MantineSize;
    }) => ({
      ...getFontStyles(theme),
      ...getFocusStyles(theme),
      outline: 0,
      color:
        color in theme.colors
          ? theme.colors[color][6]
          : variant === 'link'
          ? theme.colors[theme.primaryColor][6]
          : theme.black,
      fontSize: theme.fontSizes[size],
      lineHeight: 1.4,
      textDecoration: variant === 'link' ? 'underline' : 'none',
    }),
  }),
  { theming }
);
