import {
  createStyles,
  getSizeValue,
  getThemeColor,
  MantineNumberSize,
  MantineColor,
} from '@mantine/tss';
import { sizes } from '../SliderRoot/SliderRoot.styles';

interface TrackStyles {
  radius: MantineNumberSize;
  size: MantineNumberSize;
  color: MantineColor;
}

export default createStyles((theme, { radius, size, color }: TrackStyles) => ({
  track: {
    position: 'relative',
    height: getSizeValue({ sizes, size }),
    width: '100%',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
  },

  bar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: getThemeColor({ theme, color, shade: 6 }),
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
  },
}));
