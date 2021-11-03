import React from 'react';
import { createStyles, MantineNumberSize, getSizeValue } from '@mantine/styles';

export type GroupPosition = 'right' | 'center' | 'left' | 'apart';

interface GroupStyles {
  position: GroupPosition;
  noWrap: boolean;
  grow: boolean;
  spacing: MantineNumberSize;
  withGutter: boolean;
  direction: 'row' | 'column';
  align: React.CSSProperties['alignItems'];
  count: number;
}

const POSITIONS = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  apart: 'space-between',
};

export default createStyles(
  (
    theme,
    { spacing, position, noWrap, direction, grow, align, withGutter, count }: GroupStyles
  ) => ({
    root: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: direction,
      alignItems:
        align || (direction === 'row' ? 'center' : grow ? 'stretch' : POSITIONS[position]),
      flexWrap: noWrap ? 'nowrap' : 'wrap',
      justifyContent: direction === 'row' && POSITIONS[position],
      margin: (-1 * getSizeValue({ size: spacing, sizes: theme.spacing })) / 2,
      padding: withGutter ? getSizeValue({ size: spacing, sizes: theme.spacing }) / 2 : 0,
    },

    child: {
      boxSizing: 'border-box',
      maxWidth:
        grow && direction === 'row'
          ? `calc(${100 / count}% - ${getSizeValue({ size: spacing, sizes: theme.spacing })}px)`
          : undefined,
      flexGrow: grow ? 1 : 0,
      margin: getSizeValue({ size: spacing, sizes: theme.spacing }) / 2,
    },
  })
);
