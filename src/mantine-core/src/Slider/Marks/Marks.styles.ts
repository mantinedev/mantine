import { createStyles, MantineColor, rem, getSize } from '@mantine/styles';
import { sizes } from '../SliderRoot/SliderRoot.styles';

interface MarksStyles {
  color: MantineColor;
  disabled: boolean;
}

export default createStyles((theme, { color, disabled }: MarksStyles, { size }) => ({
  markWrapper: {
    position: 'absolute',
    top: 0,
    zIndex: 2,
  },

  mark: {
    boxSizing: 'border-box',
    border: `${rem(2)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
    height: getSize({ sizes, size }),
    width: getSize({ sizes, size }),
    borderRadius: 1000,
    transform: `translateX(calc(-${getSize({ sizes, size })} / 2))`,
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
    marginTop: `calc(${theme.spacing.xs} / 2)`,
    whiteSpace: 'nowrap',
  },
}));
