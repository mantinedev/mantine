import { createUseStyles } from 'react-jss';
import { MantineTheme, getThemeColor, getFontStyles } from '@mantine/theme';

interface CodeStylesProps {
  theme: MantineTheme;
  color: string;
}

export default createUseStyles({
  code: ({ theme, color }: CodeStylesProps) => ({
    ...getFontStyles(theme),
    fontWeight: 700,
    padding: [3, theme.spacing.xs / 2],
    borderRadius: theme.radius.sm,
    color: getThemeColor({ theme, color, shade: 9 }),
    backgroundColor: getThemeColor({ theme, color, shade: 1 }),
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fontSizes.xs,
  }),
});
