import { createStyles, MantineNumberSize, MantineColor } from '@mantine/styles';
import { sizes } from '../SliderRoot/SliderRoot.styles';

interface TrackStyles {
  radius: MantineNumberSize;
  color: MantineColor;
  disabled: boolean;
  inverted: boolean;
}

export default createStyles(
  (theme, { radius, color, disabled, inverted }: TrackStyles, { size }) => ({
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
        borderRadius: theme.fn.radius(radius),
        right: `calc(${theme.fn.size({ size, sizes })} * -1)`,
        left: `calc(${theme.fn.size({ size, sizes })} * -1)`,
        backgroundColor: inverted
          ? disabled
            ? theme.colorScheme === 'dark'
              ? theme.colors.dark[3]
              : theme.colors.gray[4]
            : theme.fn.variant({ variant: 'filled', color }).background
          : theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2],
        zIndex: 0,
      },
    },

    bar: {
      position: 'absolute',
      zIndex: 1,
      top: 0,
      bottom: 0,
      backgroundColor: inverted
        ? theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
        : disabled
        ? theme.colorScheme === 'dark'
          ? theme.colors.dark[3]
          : theme.colors.gray[4]
        : theme.fn.variant({ variant: 'filled', color }).background,
      borderRadius: theme.fn.radius(radius),
    },
  })
);
