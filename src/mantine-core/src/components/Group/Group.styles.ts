import React from 'react';
import { createMemoStyles, MantineTheme, MantineNumberSize, getSizeValue } from '../../theme';

export type GroupPosition = 'right' | 'center' | 'left' | 'apart';

interface GroupStyles {
  position: GroupPosition;
  noWrap: boolean;
  grow: boolean;
  spacing: MantineNumberSize;
  withGutter: boolean,
  direction: 'row' | 'column';
  theme: MantineTheme;
  align: React.CSSProperties['alignItems'];
  count: number;
}

const POSITIONS = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  apart: 'space-between',
};

export default createMemoStyles({
  root: ({ spacing,
    position,
    noWrap,
    direction,
    theme,
    grow,
    align,
    withGutter }: GroupStyles) => ({
      display: 'flex',
      flexDirection: direction,
      alignItems: align || (direction === 'row' ? 'center' : grow ? 'stretch' : POSITIONS[position]),
      flexWrap: noWrap ? 'nowrap' : 'wrap',
      justifyContent: direction === 'row' && POSITIONS[position],
      margin: (-1 * getSizeValue({ size: spacing, sizes: theme.spacing })) / 2,
      padding: withGutter
        ? getSizeValue({ size: spacing, sizes: theme.spacing }) / 2
        : 0,
  }),

  child: ({ grow, spacing, theme, count, direction }: GroupStyles) => ({
    maxWidth:
      grow && direction === 'row'
        ? `calc(${100 / count}% - ${getSizeValue({ size: spacing, sizes: theme.spacing })}px)`
        : undefined,
    flexGrow: grow ? 1 : 0,
    margin: getSizeValue({ size: spacing, sizes: theme.spacing }) / 2,
  }),
});
