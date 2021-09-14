import {
  createMemoStyles,
  getThemeColor,
  MantineTheme,
  getFocusStyles,
  getSizeValue,
  MantineNumberSize,
  MantineColor,
} from '../../../theme';
import { sizes } from '../SliderRoot/SliderRoot.styles';

interface ThumbStyles {
  theme: MantineTheme;
  color: MantineColor;
  size: MantineNumberSize;
}

export default createMemoStyles({
  label: ({ theme, color }: ThumbStyles) => ({
    position: 'absolute',
    top: -32,
    backgroundColor: getThemeColor({ theme, color, shade: 6 }),
    fontSize: theme.fontSizes.xs,
    color: theme.white,
    padding: theme.spacing.xs / 2,
    borderRadius: theme.radius.sm,
    whiteSpace: 'nowrap',
  }),

  thumb: ({ theme, color, size }: ThumbStyles) => ({
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
  }),

  dragging: ({ theme }: ThumbStyles) => ({
    transform: 'translate(-50%, -50%) scale(1.1)',
    boxShadow: theme.shadows.md,
  }),
});
