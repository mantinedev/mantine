import React from 'react';
import { createStyles, MantineNumberSize } from '@mantine/styles';

export type GroupPosition = 'right' | 'center' | 'left' | 'apart';

export interface GroupStylesParams {
  position: GroupPosition;
  noWrap: boolean;
  grow: boolean;
  spacing: MantineNumberSize;
  align: React.CSSProperties['alignItems'];
  count: number;
}

export const GROUP_POSITIONS = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  apart: 'space-between',
};

export default createStyles(
  (theme, { spacing, position, noWrap, grow, align, count }: GroupStylesParams) => ({
    root: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      alignItems: align || 'center',
      flexWrap: noWrap ? 'nowrap' : 'wrap',
      justifyContent: GROUP_POSITIONS[position],
      gap: theme.fn.size({ size: spacing, sizes: theme.spacing }),
      '& > *': {
        boxSizing: 'border-box',
        maxWidth: grow
          ? `calc(${100 / count}% - ${
              theme.fn.size({ size: spacing, sizes: theme.spacing }) -
              theme.fn.size({ size: spacing, sizes: theme.spacing }) / count
            }px)`
          : undefined,
        flexGrow: grow ? 1 : 0,
      },
    },
  })
);
