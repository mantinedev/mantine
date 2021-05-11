import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize, getSizeValue } from '@mantine/theme';

export type GroupPosition = 'right' | 'center' | 'left' | 'apart';

interface GroupStylesProps {
  position: GroupPosition;
  noWrap: boolean;
  grow: boolean;
  spacing: MantineNumberSize;
  direction: 'row' | 'column';
  theme: MantineTheme;
}

const POSITIONS = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  apart: 'space-between',
};

export default createUseStyles(
  {
    group: ({ spacing, position, noWrap, direction, theme, grow }: GroupStylesProps) => ({
      display: 'flex',
      flexDirection: direction,
      alignItems: direction === 'row' ? 'center' : grow ? 'stretch' : POSITIONS[position],
      flexWrap: noWrap ? 'nowrap' : 'wrap',
      justifyContent: direction === 'row' && POSITIONS[position],
      margin: (-1 * getSizeValue({ size: spacing, sizes: theme.spacing })) / 2,
    }),

    child: ({ grow, spacing, theme }: GroupStylesProps) => ({
      flexGrow: grow ? 1 : 0,
      margin: getSizeValue({ size: spacing, sizes: theme.spacing }) / 2,
    }),
  },
  { link: true }
);
