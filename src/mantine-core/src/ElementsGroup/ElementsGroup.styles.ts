import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize, getSizeValue } from '@mantine/theme';

export type ElementsGroupPosition = 'right' | 'center' | 'left' | 'apart';

interface ElementsGroupStylesProps {
  position: ElementsGroupPosition;
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
    elementsGroup: ({ spacing, position, noWrap, theme }: ElementsGroupStylesProps) => ({
      display: 'flex',
      alignItems: 'center',
      flexWrap: noWrap ? 'nowrap' : 'wrap',
      justifyContent: JUSTIFY_CONTENT[position],
      margin: (-1 * getSizeValue({ size: spacing, sizes: theme.spacing })) / 2,
    }),

    child: ({ grow, spacing, theme }: ElementsGroupStylesProps) => ({
      flexGrow: grow ? 1 : 0,
      margin: getSizeValue({ size: spacing, sizes: theme.spacing }) / 2,
    }),
  },
  { link: true }
);
