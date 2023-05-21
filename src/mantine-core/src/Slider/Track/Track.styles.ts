import { createStyles, MantineNumberSize, MantineColor, getSize, rem } from '@mantine/styles';
import { sizes } from '../SliderRoot/SliderRoot.styles';

interface TrackStyles {
  radius: MantineNumberSize;
  color: MantineColor;
  disabled: boolean;
  inverted: boolean;
  thumbSize?: number;
}

export default createStyles(
  (theme, { radius, color, disabled, inverted, thumbSize }: TrackStyles, { size }) => ({
    trackContainer: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: `calc(${getSize({ sizes, size })} * 2)`,
      cursor: 'pointer',

      '&:has(~ input:disabled)': {
        '&': {
          pointerEvents: 'none',
        },

        '& .mantine-Slider-thumb': {
          display: 'none',
        },

        '& .mantine-Slider-track::before': {
          content: '""',
          backgroundColor: inverted
            ? theme.colorScheme === 'dark'
              ? theme.colors.dark[3]
              : theme.colors.gray[4]
            : theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2],
        },

        '& .mantine-Slider-bar': {
          backgroundColor: inverted
            ? theme.colorScheme === 'dark'
              ? theme.colors.dark[4]
              : theme.colors.gray[2]
            : theme.colorScheme === 'dark'
            ? theme.colors.dark[3]
            : theme.colors.gray[4],
        },
      },
    },

    track: {
      position: 'relative',
      height: getSize({ sizes, size }),
      width: '100%',
      marginRight: thumbSize ? rem(thumbSize / 2) : getSize({ size, sizes }),
      marginLeft: thumbSize ? rem(thumbSize / 2) : getSize({ size, sizes }),

      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        borderRadius: theme.fn.radius(radius),
        right: `calc(${thumbSize ? rem(thumbSize / 2) : getSize({ size, sizes })} * -1)`,
        left: `calc(${thumbSize ? rem(thumbSize / 2) : getSize({ size, sizes })} * -1)`,
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
