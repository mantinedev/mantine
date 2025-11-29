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
import { MonthYearSelect } from './MonthYearSelect/MonthYearSelect';
import {
  ScheduleHeaderControlStylesNames,
  ScheduleHeaderNext,
  ScheduleHeaderPrevious,
  ScheduleHeaderToday,
} from './ScheduleHeaderControl';
import {
  ScheduleHeaderViewSelect,
  ScheduleHeaderViewSelectStylesNames,
} from './ScheduleHeaderViewSelect';
import classes from './ScheduleHeader.module.css';

export type CombinedScheduleHeaderStylesNames =
  | ScheduleHeaderStylesNames
  | ScheduleHeaderViewSelectStylesNames
  | ScheduleHeaderControlStylesNames;

export type ScheduleHeaderStylesNames = 'header';
export type ScheduleHeaderCssVariables = {
  scheduleHeader: '--test';
};

export interface ScheduleHeaderProps
  extends BoxProps,
    StylesApiProps<ScheduleHeaderFactory>,
    ElementProps<'div'> {
  __staticSelector?: string;
}

export type ScheduleHeaderFactory = Factory<{
  props: ScheduleHeaderProps;
  ref: HTMLDivElement;
  stylesNames: ScheduleHeaderStylesNames;
  vars: ScheduleHeaderCssVariables;
  staticComponents: {
    Previous: typeof ScheduleHeaderPrevious;
    Next: typeof ScheduleHeaderNext;
    Today: typeof ScheduleHeaderToday;
    ViewSelect: typeof ScheduleHeaderViewSelect;
    MonthYearSelect: typeof MonthYearSelect;
  };
}>;

const defaultProps = {} satisfies Partial<ScheduleHeaderProps>;

const varsResolver = createVarsResolver<ScheduleHeaderFactory>(() => ({
  scheduleHeader: {
    '--test': 'test',
  },
}));

export const ScheduleHeader = factory<ScheduleHeaderFactory>((_props) => {
  const props = useProps('ScheduleHeader', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, __staticSelector, ...others } =
    props;

  const getStyles = useStyles<ScheduleHeaderFactory>({
    name: __staticSelector || 'ScheduleHeader',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: 'header',
  });

  return <Box {...getStyles('header')} {...others} />;
});

ScheduleHeader.displayName = '@mantine/schedule/ScheduleHeader';
ScheduleHeader.classes = classes;
ScheduleHeader.Next = ScheduleHeaderNext;
ScheduleHeader.Previous = ScheduleHeaderPrevious;
ScheduleHeader.Today = ScheduleHeaderToday;
ScheduleHeader.ViewSelect = ScheduleHeaderViewSelect;
ScheduleHeader.MonthYearSelect = MonthYearSelect;
