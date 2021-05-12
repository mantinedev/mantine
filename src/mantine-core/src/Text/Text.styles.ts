import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineSize, getFocusStyles, getFontStyles } from '@mantine/theme';

export type TextVariant = 'text' | 'link';

interface TextStylesProps {
  theme: MantineTheme;
  color: string;
  variant: TextVariant;
  size: MantineSize;
}

export default createUseStyles(
  {
    text: ({ theme, color, variant, size }: TextStylesProps) => ({
      ...getFontStyles(theme),
      ...getFocusStyles(theme),
      color:
        color in theme.colors
          ? theme.colors[color][theme.colorScheme === 'dark' ? 4 : 6]
          : variant === 'link'
          ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
          : theme.colorScheme === 'dark'
          ? theme.colors.dark[0]
          : theme.black,
      fontSize: theme.fontSizes[size],
      lineHeight: theme.lineHeight,
      textDecoration: 'none',
      WebkitTapHighlightColor: 'transparent',

      '&:hover': {
        textDecoration: variant === 'link' ? 'underline' : 'none',
      },
    }),
  },
  { link: true }
);
