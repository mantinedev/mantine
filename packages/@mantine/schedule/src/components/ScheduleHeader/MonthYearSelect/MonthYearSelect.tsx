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
import { ScheduleHeaderControl } from '../ScheduleHeaderControl';
import classes from './MonthYearSelect.module.css';

export type MonthYearSelectStylesNames = 'root';
export type MonthYearSelectVariant = string;
export type MonthYearSelectCssVariables = {
  root: '--test';
};

export interface MonthYearSelectProps
  extends BoxProps,
    StylesApiProps<MonthYearSelectFactory>,
    ElementProps<'div'> {}

export type MonthYearSelectFactory = Factory<{
  props: MonthYearSelectProps;
  ref: HTMLDivElement;
  stylesNames: MonthYearSelectStylesNames;
  vars: MonthYearSelectCssVariables;
  variant: MonthYearSelectVariant;
}>;

const defaultProps = {} satisfies Partial<MonthYearSelectProps>;

const varsResolver = createVarsResolver<MonthYearSelectFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const MonthYearSelect = factory<MonthYearSelectFactory>((_props) => {
  const props = useProps('MonthYearSelect', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, attributes, ...others } = props;

  const getStyles = useStyles<MonthYearSelectFactory>({
    name: 'MonthYearSelect',
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

  return (
    <Box {...getStyles('root')} {...others}>
      <ScheduleHeaderControl>Hello</ScheduleHeaderControl>
    </Box>
  );
});

MonthYearSelect.displayName = '@mantine/core/MonthYearSelect';
MonthYearSelect.classes = classes;
