import {
  createMemoStyles,
  getSizeValue,
  getThemeColor,
  MantineNumberSize,
  MantineTheme,
} from '../../../theme';
import { sizes } from '../Slider.styles';

interface TrackStyles {
  theme: MantineTheme;
  radius: MantineNumberSize;
  size: MantineNumberSize;
  color: string;
}

export default createMemoStyles({
  track: ({ theme, radius, size }: TrackStyles) => ({
    position: 'relative',
    height: getSizeValue({ sizes, size }),
    width: '100%',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
  }),

  bar: ({ theme, color, radius }: TrackStyles) => ({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 8 : 6 }),
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
  }),
});
