import { createStyles, MantineColor, MantineNumberSize } from '@mantine/styles';

export interface TooltipStylesParams {
  color: MantineColor;
  radius: MantineNumberSize;
}

export default createStyles((theme, { color, radius }: TooltipStylesParams) => ({
  root: {
    position: 'relative',
    display: 'inline-block',
  },

  body: {
    ...theme.fn.fontStyles(),
    backgroundColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 3 : 9),
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.sm,
    borderRadius: theme.fn.radius(radius),
    padding: `${theme.spacing.xs / 2}px ${theme.spacing.xs}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
    position: 'relative',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  arrow: {
    border: 0,
    background: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 3 : 9),
    zIndex: 1,
  },
}));
