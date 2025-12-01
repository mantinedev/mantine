import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { MonthView } from '../MonthView/MonthView';
import classes from './Schedule.module.css';

export type ScheduleStylesNames = 'root';
export type ScheduleCssVariables = {
  root: '--test';
};

export interface ScheduleProps
  extends BoxProps,
    StylesApiProps<ScheduleFactory>,
    ElementProps<'div'> {}

export type ScheduleFactory = Factory<{
  props: ScheduleProps;
  ref: HTMLDivElement;
  stylesNames: ScheduleStylesNames;
  vars: ScheduleCssVariables;
}>;

const defaultProps = {} satisfies Partial<ScheduleProps>;

const varsResolver = createVarsResolver<ScheduleFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const Schedule = factory<ScheduleFactory>((_props) => {
  const props = useProps('Schedule', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, attributes, ...others } = props;

  const getStyles = useStyles<ScheduleFactory>({
    name: 'Schedule',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<ScheduleFactory>({
    classNames,
    styles,
    props,
  });

  const stylesApiProps = {
    classNames: resolvedClassNames,
    styles: resolvedStyles,
  };

  return (
    <Box {...getStyles('root')} {...others}>
      <MonthView {...stylesApiProps} date={new Date()} />
    </Box>
  );
});

Schedule.displayName = '@mantine/schedule/Schedule';
Schedule.classes = classes;
