import { createStyles } from '@mantine/styles';

export interface HeaderPosition {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

interface HeaderStyles {
  height: number | string;
  fixed: boolean;
  position: HeaderPosition;
  zIndex: number;
}

export default createStyles((theme, { height, fixed, position, zIndex }: HeaderStyles) => ({
  root: {
    ...theme.fn.fontStyles(),
    ...position,
    zIndex,
    height,
    maxHeight: height,
    position: fixed ? 'fixed' : 'static',
    boxSizing: 'border-box',
    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    backgroundColor: 'var(--mantine-header-color)',
  },
}));
