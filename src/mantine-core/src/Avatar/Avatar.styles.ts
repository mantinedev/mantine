import { createUseStyles } from 'react-jss';
import { MantineTheme, getSizeValue, MantineNumberSize } from '@mantine/theme';

const sizes = {
  xs: 16,
  sm: 26,
  md: 38,
  lg: 56,
  xl: 84,
};

interface AvatarStylesProps {
  size: MantineNumberSize;
  radius: MantineNumberSize;
  theme: MantineTheme;
}

export default createUseStyles({
  avatar: ({ size, radius, theme }: AvatarStylesProps) => ({
    boxSizing: 'border-box',
    position: 'relative',
    userSelect: 'none',
    overflow: 'hidden',
    width: getSizeValue({ size, sizes }),
    height: getSizeValue({ size, sizes }),
    borderRadius: radius ? getSizeValue({ size: radius, sizes: theme.radius }) : size,
  }),

  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },

  placeholder: ({ theme }: { theme: MantineTheme }) => ({
    backgroundColor: theme.colors.gray[1],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  }),

  placeholderIcon: ({ theme }: { theme: MantineTheme }) => ({
    width: '70%',
    height: '70%',
    color: theme.colors.gray[5],
  }),
});
