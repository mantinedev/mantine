import {
  createMemoStyles,
  getThemeColor,
  MantineTheme,
  getFocusStyles,
  getSizeValue,
  MantineNumberSize,
} from '../../../theme';
import { sizes } from '../Slider.styles';

interface ThumbStyles {
  theme: MantineTheme;
  color: string;
  size: MantineNumberSize;
}

export default createMemoStyles({
  label: ({ theme, color }: ThumbStyles) => ({
    position: 'absolute',
    top: -33,
    backgroundColor: getThemeColor({ theme, color, shade: 6 }),
    fontSize: theme.fontSizes.xs,
    color: theme.white,
    padding: theme.spacing.xs / 2,
    borderRadius: theme.radius.sm,

    '&::after': {
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 4px)',
      content: "''",
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '3px 4px 0 4px',
      borderColor: `${getThemeColor({
        theme,
        color,
        shade: 6,
      })} transparent transparent transparent`,
    },
  }),

  thumb: ({ theme, color, size }: ThumbStyles) => ({
    ...getFocusStyles(theme),
    boxSizing: 'border-box',
    position: 'absolute',
    height: getSizeValue({ sizes, size }) * 2,
    width: getSizeValue({ sizes, size }) * 2,
    backgroundColor: theme.white,
    border: `2px solid ${getThemeColor({ theme, color, shade: 6 })}`,
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
