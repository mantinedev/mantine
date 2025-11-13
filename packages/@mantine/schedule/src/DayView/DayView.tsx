import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './DayView.module.css';

export type DayViewStylesNames = 'dayView';
export type DayViewCssVariables = {
  dayView: '--test';
};

export interface DayViewProps
  extends BoxProps,
    StylesApiProps<DayViewFactory>,
    ElementProps<'div'> {
  /** Week to display, Date object or date string in `YYYY-MM-DD` format */
  week: Date | string;
}

export type DayViewFactory = Factory<{
  props: DayViewProps;
  ref: HTMLDivElement;
  stylesNames: DayViewStylesNames;
  vars: DayViewCssVariables;
}>;

const defaultProps = {} satisfies Partial<DayViewProps>;

const varsResolver = createVarsResolver<DayViewFactory>(() => ({
  dayView: {
    '--test': 'test',
  },
}));

export const DayView = factory<DayViewFactory>((_props) => {
  const props = useProps('DayView', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<DayViewFactory>({
    name: 'DayView',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: 'dayView',
  });

  return <Box {...getStyles('dayView')} {...others} />;
});

DayView.displayName = '@mantine/schedule/DayView';
DayView.classes = classes;
