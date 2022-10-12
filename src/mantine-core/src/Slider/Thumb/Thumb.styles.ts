import { createStyles, MantineNumberSize, MantineColor } from '@mantine/styles';
import { sizes } from '../SliderRoot/SliderRoot.styles';

interface ThumbStyles {
  color: MantineColor;
  size: MantineNumberSize;
  disabled: boolean;
  thumbSize: number;
}

export default createStyles((theme, { color, size, disabled, thumbSize }: ThumbStyles) => ({
  label: {
    position: 'absolute',
    top: -36,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[9],
    fontSize: theme.fontSizes.xs,
    color: theme.white,
    padding: `calc(${theme.spacing.xs}px / 2)`,
    borderRadius: theme.radius.sm,
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    userSelect: 'none',
    touchAction: 'none',
  },

  thumb: {
    ...theme.fn.focusStyles(),
    boxSizing: 'border-box',
    position: 'absolute',
    display: disabled ? 'none' : 'flex',
    height: thumbSize || theme.fn.size({ sizes, size }) * 2,
    width: thumbSize || theme.fn.size({ sizes, size }) * 2,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.themeColor(color, theme.fn.primaryShade())
        : theme.white,
    border: `4px solid ${
      theme.colorScheme === 'dark'
        ? theme.white
        : theme.fn.themeColor(color, theme.fn.primaryShade())
    }`,
    color:
      theme.colorScheme === 'dark'
        ? theme.white
        : theme.fn.themeColor(color, theme.fn.primaryShade()),
    transform: 'translate(-50%, -50%)',
    top: '50%',
    cursor: 'pointer',
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    transitionDuration: '100ms',
    transitionProperty: 'box-shadow, transform',
    transitionTimingFunction: theme.transitionTimingFunction,
    zIndex: 3,
    userSelect: 'none',
    touchAction: 'none',
  },

  dragging: {
    transform: 'translate(-50%, -50%) scale(1.05)',
    boxShadow: theme.shadows.sm,
  },
}));
