import {
  createMemoStyles,
  getFocusStyles,
  getFontStyles,
  getSizeValue,
  getThemeColor,
  MantineNumberSize,
  MantineTheme,
} from '../../theme';

interface SliderStyles {
  theme: MantineTheme;
  color: string;
  radius: MantineNumberSize;
  size: MantineNumberSize;
}

const sizes = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
};

export default createMemoStyles({
  root: ({ theme, size }: SliderStyles) => ({
    ...getFontStyles(theme),
    outline: 0,
    height: getSizeValue({ sizes, size }) * 2,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  }),

  track: ({ theme, radius, size }: SliderStyles) => ({
    position: 'relative',
    height: getSizeValue({ sizes, size }),
    width: '100%',
    backgroundColor: theme.colors.gray[2],
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
  }),

  bar: ({ theme, color, radius }: SliderStyles) => ({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: getThemeColor({ theme, color, shade: 6 }),
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
  }),

  thumb: ({ theme, color, size }: SliderStyles) => ({
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

  dragging: ({ theme }: SliderStyles) => ({
    transform: 'translate(-50%, -50%) scale(1.1)',
    boxShadow: theme.shadows.md,
  }),

  markWrapper: {
    position: 'absolute',
    top: 0,
  },

  mark: ({ theme, size }: SliderStyles) => {
    const MARK_SIZE = getSizeValue({ sizes, size });
    return {
      boxSizing: 'border-box',
      border: `2px solid ${theme.colors.gray[2]}`,
      zIndex: 1,
      height: MARK_SIZE,
      width: MARK_SIZE,
      borderRadius: 1000,
      transform: `translateX(-${MARK_SIZE / 2}px)`,
      backgroundColor: theme.white,
    };
  },

  markFilled: ({ theme, color }: SliderStyles) => ({
    borderColor: getThemeColor({ theme, color, shade: 6 }),
  }),

  markLabel: ({ theme }: SliderStyles) => ({
    transform: 'translate(-50%, 0)',
    fontSize: theme.fontSizes.sm,
    color: theme.colors.gray[6],
    marginTop: theme.spacing.xs / 2,
  }),

  label: ({ theme, color }: SliderStyles) => ({
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
});
