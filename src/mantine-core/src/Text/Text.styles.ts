import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineSize, getFocusStyles, getFontStyles } from '@mantine/theme';

export type TextVariant = 'text' | 'link';

export default createUseStyles({
  text: ({
    theme,
    color,
    variant,
    size,
  }: {
    theme: MantineTheme;
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
});
