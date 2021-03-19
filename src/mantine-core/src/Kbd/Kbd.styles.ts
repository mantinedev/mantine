import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/theme';

interface KbdStylesProps {
  theme: MantineTheme;
}

export default createUseStyles({
  kbd: ({ theme }: KbdStylesProps) => ({
    lineHeight: theme.lineHeight,
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
    backgroundColor: theme.colors.gray[0],
    color: theme.colors.gray[7],
    padding: [3, theme.spacing.xs / 2],
    borderRadius: theme.radius.sm,
    border: `1px solid ${theme.colors.gray[3]}`,
    borderBottomWidth: 3,
  }),
});
