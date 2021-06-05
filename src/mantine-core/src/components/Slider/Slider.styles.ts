import { createMemoStyles, getThemeColor, MantineTheme } from '../../theme';

interface SliderStyles {
  theme: MantineTheme;
  color: string;
}

export default createMemoStyles({
  root: {},

  track: ({ theme }: SliderStyles) => ({
    position: 'relative',
    height: 20,
    width: '100%',
    backgroundColor: theme.colors.gray[2],
  }),

  bar: ({ theme, color }: SliderStyles) => ({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: getThemeColor({ theme, color, shade: 6 }),
  }),

  thumb: ({ theme, color }: SliderStyles) => ({
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: theme.colors.red[7],
    cursor: 'pointer',
    transform: 'translate(-50%, -50%)',
    top: '50%',
  }),
});
