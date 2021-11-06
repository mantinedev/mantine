import { createStyles, getThemeColor, getFontStyles, MantineColor } from '@mantine/styles';

interface TooltipStyles {
  color: MantineColor;
}

export default createStyles((theme, { color }: TooltipStyles) => ({
  root: {
    position: 'relative',
    display: 'inline-block',
  },

  wrapper: {
    background: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },

  body: {
    ...theme.fn.fontStyles(),
    backgroundColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 9 }),
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.sm,
    borderRadius: theme.radius.sm,
    padding: `${theme.spacing.xs / 2}px ${theme.spacing.xs}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
    position: 'relative',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  tooltip: {
    display: 'inline-block',
    position: 'absolute',
  },

  arrow: {
    border: 0,
    background: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 9 }),
    zIndex: 1,
  },
}));
