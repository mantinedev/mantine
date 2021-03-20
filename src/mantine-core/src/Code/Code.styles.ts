import { createUseStyles } from 'react-jss';
import { MantineTheme, getThemeColor, getFontStyles } from '@mantine/theme';

interface CodeStylesProps {
  theme: MantineTheme;
  color: string;
}

export default createUseStyles({
  code: ({ theme, color }: CodeStylesProps) => ({
    ...getFontStyles(theme),
    padding: [3, theme.spacing.xs / 2],
    borderRadius: theme.radius.sm,
    color: getThemeColor({ theme, color, shade: 9 }),
    backgroundColor: getThemeColor({ theme, color, shade: 0 }),
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fontSizes.xs,
  }),

  pre: ({ theme }: CodeStylesProps) => ({
    padding: theme.spacing.xs,
    margin: 0,
    overflowX: 'auto',
  }),
});
