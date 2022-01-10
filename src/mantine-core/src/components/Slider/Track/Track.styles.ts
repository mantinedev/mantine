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
    marginRight: theme.fn.size({ size, sizes }),
    marginLeft: theme.fn.size({ size, sizes }),

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
      right: -theme.fn.size({ size, sizes }),
      left: -theme.fn.size({ size, sizes }),
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      zIndex: 0,
    },
  },

  bar: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    bottom: 0,
    backgroundColor: theme.fn.themeColor(color, 6),
    borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
  },
}));
