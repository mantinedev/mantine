import { createUseStyles } from 'react-jss';

export type ElementsGroupPosition = 'right' | 'center' | 'left';

interface ElementsGroupStylesProps {
  position: ElementsGroupPosition;
  noWrap: boolean;
  grow: boolean;
  spacing: number;
}

const JUSTIFY_CONTENT = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

export default createUseStyles({
  elementsGroup: (props: ElementsGroupStylesProps) => ({
    display: 'flex',
    flexWrap: props.noWrap ? 'nowrap' : 'wrap',
    justifyContent: JUSTIFY_CONTENT[props.position],
    margin: -1 * (props.spacing / 2),

    '& [data-composable]': {
      margin: props.spacing / 2,
      flexGrow: props.grow ? 1 : 0,
    },
  }),
});
