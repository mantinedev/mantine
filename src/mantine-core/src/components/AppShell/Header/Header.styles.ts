import { createStyles, MantineNumberSize } from '@mantine/styles';

export interface HeaderPosition {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

interface HeaderStyles {
  height: number | string;
  padding: MantineNumberSize;
  fixed: boolean;
  position: HeaderPosition;
  zIndex: number;
}

export default createStyles(
  (theme, { height, padding, fixed, position, zIndex }: HeaderStyles) => ({
    root: {
      ...theme.fn.fontStyles(),
      ...position,
      zIndex,
      height,
      maxHeight: height,
      position: fixed ? 'fixed' : 'static',
      boxSizing: 'border-box',
      padding: theme.fn.size({ size: padding, sizes: theme.spacing }),
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
    },
  })
);
