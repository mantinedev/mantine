import {
  createStyles,
  getThemeColor,
  getFocusStyles,
  getSizeValue,
  MantineNumberSize,
  MantineColor,
} from '@mantine/styles';
import { sizes } from '../SliderRoot/SliderRoot.styles';

interface ThumbStyles {
  color: MantineColor;
  size: MantineNumberSize;
}

export default createStyles((theme, { color, size }: ThumbStyles) => ({
  label: {
    position: 'absolute',
    top: -32,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[9],
    fontSize: theme.fontSizes.xs,
    color: theme.white,
    padding: theme.spacing.xs / 2,
    borderRadius: theme.radius.sm,
    whiteSpace: 'nowrap',
  },

  thumb: {
    ...getFocusStyles(theme),
    boxSizing: 'border-box',
    position: 'absolute',
    height: getSizeValue({ sizes, size }) * 2,
    width: getSizeValue({ sizes, size }) * 2,
    backgroundColor:
      theme.colorScheme === 'dark' ? getThemeColor({ theme, color, shade: 6 }) : theme.white,
    border: `4px solid ${
      theme.colorScheme === 'dark' ? theme.white : getThemeColor({ theme, color, shade: 6 })
    }`,
    transform: 'translate(-50%, -50%)',
    top: '50%',
    cursor: 'pointer',
    borderRadius: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transitionDuration: '100ms',
    transitionProperty: 'box-shadow, transform',
    transitionTimingFunction: theme.transitionTimingFunction,
    zIndex: 2,
  },

  dragging: {
    transform: 'translate(-50%, -50%) scale(1.1)',
    boxShadow: theme.shadows.md,
  },
}));
