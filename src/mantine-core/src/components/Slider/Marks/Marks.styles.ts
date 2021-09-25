import {
  createStyles,
  MantineNumberSize,
  getSizeValue,
  getThemeColor,
  MantineColor,
} from '@mantine/styles';
import { sizes } from '../SliderRoot/SliderRoot.styles';

interface MarksStyles {
  color: MantineColor;
  size: MantineNumberSize;
}

export default createStyles((theme, { size, color }: MarksStyles) => ({
  markWrapper: {
    position: 'absolute',
    top: 0,
  },

  mark: {
    boxSizing: 'border-box',
    border: `${getSizeValue({ size, sizes }) >= 8 ? '2px' : '1px'} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
    zIndex: 1,
    height: getSizeValue({ sizes, size }),
    width: getSizeValue({ sizes, size }),
    borderRadius: 1000,
    transform: `translateX(-${getSizeValue({ sizes, size }) / 2}px)`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.white,
  },

  markFilled: {
    borderColor: getThemeColor({ theme, color, shade: 6 }),
  },

  markLabel: {
    transform: 'translate(-50%, 0)',
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    marginTop: theme.spacing.xs / 2,
  },
}));
