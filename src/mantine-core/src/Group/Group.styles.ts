import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize, getSizeValue } from '@mantine/theme';

export type GroupPosition = 'right' | 'center' | 'left' | 'apart';

interface GroupStylesProps {
  position: GroupPosition;
  noWrap: boolean;
  grow: boolean;
  spacing: MantineNumberSize;
  theme: MantineTheme;
}

const JUSTIFY_CONTENT = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  apart: 'space-between',
};

export default createUseStyles(
  {
    Group: ({ spacing, position, noWrap, theme }: GroupStylesProps) => ({
      display: 'flex',
      alignItems: 'center',
      flexWrap: noWrap ? 'nowrap' : 'wrap',
      justifyContent: JUSTIFY_CONTENT[position],
      margin: (-1 * getSizeValue({ size: spacing, sizes: theme.spacing })) / 2,
    }),

    child: ({ grow, spacing, theme }: GroupStylesProps) => ({
      flexGrow: grow ? 1 : 0,
      margin: getSizeValue({ size: spacing, sizes: theme.spacing }) / 2,
    }),
  },
  { link: true }
);
