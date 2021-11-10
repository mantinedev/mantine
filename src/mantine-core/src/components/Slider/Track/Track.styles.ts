import { createStyles, MantineNumberSize, MantineColor } from '@mantine/styles';
import { sizes } from '../SliderRoot/SliderRoot.styles';

interface TrackStyles {
  radius: MantineNumberSize;
  size: MantineNumberSize;
  color: MantineColor;
}

export default createStyles((theme, { radius, size, color }: TrackStyles) => ({
  track: {
    position: 'relative',
    height: theme.fn.size({ sizes, size }),
    width: '100%',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
    borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
  },

  bar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: theme.fn.themeColor(color, 6),
    borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
  },
}));
