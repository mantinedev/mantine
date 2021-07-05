import {
  createMemoStyles,
  getThemeColor,
  MantineTheme,
  getFocusStyles,
  getSizeValue,
  MantineNumberSize,
} from '../../../theme';
import { sizes } from '../SliderRoot/SliderRoot.styles';

interface ThumbStyles {
  theme: MantineTheme;
  color: string;
  size: MantineNumberSize;
}

export default createMemoStyles({
  label: ({ theme, color }: ThumbStyles) => ({
    position: 'absolute',
    top: -32,
    backgroundColor: getThemeColor({ theme, color, shade: 7 }),
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
    backgroundColor: theme.white,
    border: `2px solid ${getThemeColor({
      theme,
      color,
      shade: 7,
    })}`,
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
