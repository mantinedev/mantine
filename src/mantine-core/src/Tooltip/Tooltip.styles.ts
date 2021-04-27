import { createUseStyles } from 'react-jss';
import { MantineTheme, getThemeColor, getFontStyles } from '@mantine/theme';

interface TooltipStylesProps {
  theme: MantineTheme;
  color: string;
  gutter: number;
}

const verticalPlacement = {
  '&$center': {
    left: '50%',
    transform: 'translateX(-50%)',
  },

  '&$end': {
    right: 0,
  },

  '&$start': {
    left: 0,
  },
};

const horizontalPlacement = {
  '&$center': {
    top: '50%',
    transform: 'translateY(-50%)',
  },

  '&$end': {
    bottom: 0,
  },

  '&$start': {
    top: 0,
  },
};

export default createUseStyles({
  withArrow: {},
  center: {},
  start: {},
  end: {},

  wrapper: {
    position: 'relative',
    display: 'inline-block',
  },

  tooltipInner: ({ theme, color }: TooltipStylesProps) => ({
    ...getFontStyles(theme),
    backgroundColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 9 }),
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.sm,
    borderRadius: theme.radius.sm,
    padding: [theme.spacing.xs / 2, theme.spacing.xs],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
  }),

  tooltip: {
    display: 'inline-block',
    position: 'absolute',
  },

  top: ({ gutter }: TooltipStylesProps) => ({
    ...verticalPlacement,
    bottom: `calc(100% + ${gutter}px)`,
  }),

  bottom: ({ gutter }: TooltipStylesProps) => ({
    ...verticalPlacement,
    top: `calc(100% + ${gutter}px)`,
  }),

  right: ({ gutter }: TooltipStylesProps) => ({
    ...horizontalPlacement,
    left: `calc(100% + ${gutter}px)`,
  }),

  left: ({ gutter }: TooltipStylesProps) => ({
    ...horizontalPlacement,
    right: `calc(100% + ${gutter}px)`,
  }),
});
