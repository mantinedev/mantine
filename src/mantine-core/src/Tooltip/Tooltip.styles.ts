import { createUseStyles } from 'react-jss';
import { MantineTheme, getThemeColor, getFontStyles } from '@mantine/theme';

interface TooltipStylesProps {
  theme: MantineTheme;
  color: string;
  gutter: number;
}

export default createUseStyles({
  withArrow: {},

  wrapper: {
    position: 'relative',
    background: 'red',
    display: 'inline-block',
  },

  tooltip: ({ theme, color }: TooltipStylesProps) => ({
    ...getFontStyles(theme),
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.sm,
    position: 'absolute',
    borderRadius: theme.radius.sm,
    padding: [1, theme.spacing.xs],
    backgroundColor: getThemeColor({ theme, color, shade: 9 }),
    color: theme.white,
  }),

  top: ({ gutter }: TooltipStylesProps) => ({
    bottom: `calc(100% + ${gutter}px)`,
  }),

  bottom: ({ gutter }: TooltipStylesProps) => ({
    top: `calc(100% + ${gutter}px)`,
  }),

  right: ({ gutter }: TooltipStylesProps) => ({
    left: `calc(100% + ${gutter}px)`,
  }),

  left: ({ gutter }: TooltipStylesProps) => ({
    right: `calc(100% + ${gutter}px)`,
  }),
});
