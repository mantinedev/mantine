import { createStyles } from '@mantine/styles';

export interface VerticalSectionPosition {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

interface VerticalSectionStyles {
  height: number | string;
  fixed: boolean;
  position: VerticalSectionPosition;
  zIndex: React.CSSProperties['zIndex'];
  borderPosition: 'top' | 'bottom' | 'none';
}

export default createStyles(
  (theme, { height, fixed, position, zIndex, borderPosition }: VerticalSectionStyles) => ({
    root: {
      ...theme.fn.fontStyles(),
      ...position,
      zIndex,
      height,
      maxHeight: height,
      position: fixed ? 'fixed' : 'static',
      boxSizing: 'border-box',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      borderBottom:
        borderPosition === 'bottom'
          ? `1px solid ${
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`
          : undefined,
      borderTop:
        borderPosition === 'top'
          ? `1px solid ${
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`
          : undefined,
    },
  })
);
