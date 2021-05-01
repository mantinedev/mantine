import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize } from '@mantine/theme';

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
    elementsGroup: (props: ElementsGroupStylesProps) => {
      const spacing =
        typeof props.spacing === 'number'
          ? props.spacing / 2
          : props.theme.spacing[props.spacing] / 2;

      return {
        display: 'flex',
        alignItems: 'center',
        flexWrap: props.noWrap ? 'nowrap' : 'wrap',
        justifyContent: JUSTIFY_CONTENT[props.position],
        margin: -1 * spacing,

        '& > [data-mantine-composable]': {
          margin: spacing,
          flexGrow: props.grow ? 1 : 0,
        },
      };
    },
  },
  { link: true }
);
