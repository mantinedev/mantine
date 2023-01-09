import { createStyles, MantineColor, rem, getSize } from '@mantine/styles';
import { sizes } from '../SliderRoot/SliderRoot.styles';

interface ThumbStyles {
  color: MantineColor;
  disabled: boolean;
  thumbSize: number | string;
}

export default createStyles((theme, { color, disabled, thumbSize }: ThumbStyles, { size }) => ({
  label: {
    position: 'absolute',
    top: rem(-36),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[9],
    fontSize: theme.fontSizes.xs,
    color: theme.white,
    padding: `calc(${theme.spacing.xs} / 2)`,
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
    height: thumbSize ? rem(thumbSize) : `calc(${getSize({ sizes, size })} * 2)`,
    width: thumbSize ? rem(thumbSize) : `calc(${getSize({ sizes, size })} * 2)`,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.themeColor(color, theme.fn.primaryShade())
        : theme.white,
    border: `${rem(4)} solid ${
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
