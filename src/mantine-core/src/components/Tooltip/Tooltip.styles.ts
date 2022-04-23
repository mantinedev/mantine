import { createStyles, MantineColor, MantineNumberSize } from '@mantine/styles';

export interface TooltipStylesParams {
  color: MantineColor;
  radius: MantineNumberSize;
  width: number | 'auto';
  multiline: boolean;
}

export default createStyles((theme, { color, radius, width, multiline }: TooltipStylesParams) => ({
  root: {
    ...theme.fn.fontStyles(),
    backgroundColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 3 : 9),
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.sm,
    borderRadius: theme.fn.radius(radius),
    padding: `${theme.spacing.xs / 2}px ${theme.spacing.xs}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
    position: 'absolute',
    whiteSpace: multiline ? 'unset' : 'nowrap',
    pointerEvents: 'none',
    width,
  },

  arrow: {
    border: 0,
    background: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 3 : 9),
    zIndex: 1,
  },
}));
