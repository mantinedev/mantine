import { createStyles, MantineNumberSize, MantineColor } from '@mantine/styles';
import { sizes } from '../SliderRoot/SliderRoot.styles';

interface MarksStyles {
  color: MantineColor;
  size: MantineNumberSize;
  disabled: boolean;
}

export default createStyles((theme, { size, color, disabled }: MarksStyles) => ({
  markWrapper: {
    position: 'absolute',
    top: 0,
    zIndex: 2,
  },

  mark: {
    boxSizing: 'border-box',
    border: `${theme.fn.size({ size, sizes }) >= 8 ? '2px' : '1px'} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
    height: theme.fn.size({ sizes, size }),
    width: theme.fn.size({ sizes, size }),
    borderRadius: 1000,
    transform: `translateX(-${theme.fn.size({ sizes, size }) / 2}px)`,
    backgroundColor: theme.white,
  },

  markFilled: {
    borderColor: disabled
      ? theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[4]
      : theme.fn.variant({ variant: 'filled', color }).background,
  },

  markLabel: {
    transform: 'translate(-50%, 0)',
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    marginTop: `calc(${theme.spacing.xs}px / 2)`,
    whiteSpace: 'nowrap',
  },
}));
