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
    transform: 'translateX(-50%) !important',
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
    background: 'red',
    display: 'inline-block',
  },

  tooltipInner: ({ theme, color }: TooltipStylesProps) => ({
    ...getFontStyles(theme),
    backgroundColor: getThemeColor({ theme, color, shade: 9 }),
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.sm,
    borderRadius: theme.radius.sm,
    padding: [1, theme.spacing.xs],
    color: theme.white,
  }),

  tooltip: {
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
