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
import classes from './TimeGrid.module.css';

export type TimeGridStylesNames = 'root';
export type TimeGridCssVariables = {
  root: '--test';
};

export interface TimeGridProps
  extends BoxProps,
    StylesApiProps<TimeGridFactory>,
    ElementProps<'div'> {}

export type TimeGridFactory = Factory<{
  props: TimeGridProps;
  ref: HTMLDivElement;
  stylesNames: TimeGridStylesNames;
  vars: TimeGridCssVariables;
}>;

const defaultProps: Partial<TimeGridProps> = {};

const varsResolver = createVarsResolver<TimeGridFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const TimeGrid = factory<TimeGridFactory>((_props, ref) => {
  const props = useProps('TimeGrid', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<TimeGridFactory>({
    name: 'TimeGrid',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <Box ref={ref} {...getStyles('root')} {...others}>
      TimeGrid
    </Box>
  );
});

TimeGrid.displayName = '@mantine/dates/TimeGrid';
TimeGrid.classes = classes;
