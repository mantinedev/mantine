import {
  createMemoStyles,
  getFocusStyles,
  getSizeValue,
  getThemeColor,
  MantineNumberSize,
  MantineTheme,
} from '../../theme';

interface SliderStyles {
  theme: MantineTheme;
  color: string;
  radius: MantineNumberSize;
}

export default createMemoStyles({
  root: {
    outline: 0,
  },

  track: ({ theme, radius }: SliderStyles) => ({
    position: 'relative',
    height: 6,
    width: '100%',
    backgroundColor: theme.colors.gray[2],
    cursor: 'pointer',
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

  thumb: ({ theme, radius }: SliderStyles) => ({
    ...getFocusStyles(theme),
    boxSizing: 'border-box',
    position: 'absolute',
    height: 16,
    minWidth: 16,
    backgroundColor: theme.white,
    padding: 5,
    border: `1px solid ${theme.colors.gray[4]}`,
    transform: 'translate(-50%, -50%)',
    top: '50%',
    cursor: 'pointer',
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transitionDuration: '100ms',
    transitionProperty: 'box-shadow, transform',
    transitionTimingFunction: theme.transitionTimingFunction,
  }),

  dragging: ({ theme }: SliderStyles) => ({
    transform: 'translate(-50%, -50%) scale(1.1)',
    boxShadow: theme.shadows.md,
  }),
});
