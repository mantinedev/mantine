import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize, getSizeValue } from '@mantine/theme';

interface RingProgressStylesProps {
  theme: MantineTheme;
  size?: MantineNumberSize;
}

export const sizes = {
  xs: 20,
  sm: 40,
  md: 60,
  lg: 80,
  xl: 100,
};

export default createUseStyles(
  {
    wrapperDiv: ({ size }: RingProgressStylesProps) => ({
      height: getSizeValue({ size, sizes }),
      width: getSizeValue({ size, sizes }),
      position: 'relative',
    }),
    labelDiv: () => ({
      position: 'absolute',
      top: '50%',
      left: '0',
      right: '0',
      textAlign: 'center',
      transform: 'translateY(-50%)',
    }),
  },
  { link: true }
);
