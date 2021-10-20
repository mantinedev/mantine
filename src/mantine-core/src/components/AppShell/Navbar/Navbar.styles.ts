import { createStyles, getFontStyles, MantineNumberSize, getSizeValue } from '@mantine/styles';

export interface NavbarPosition {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

interface NavbarStyles {
  width: number | string;
  height: number | string;
  padding: MantineNumberSize;
  position: NavbarPosition;
  fixed: boolean;
}

export default createStyles((theme, { width, height, padding, fixed, position }: NavbarStyles) => ({
  root: {
    ...getFontStyles(theme),
    ...position,
    width,
    height,
    position: fixed ? 'fixed' : 'static',
    boxSizing: 'border-box',
    padding: getSizeValue({ size: padding, sizes: theme.spacing }),
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
    }`,
  },
}));
