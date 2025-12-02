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
import {
  HeaderControlStylesNames,
  ScheduleHeaderNext,
  ScheduleHeaderPrevious,
  ScheduleHeaderToday,
} from './HeaderControl/HeaderControl';
import { MonthYearSelect, MonthYearSelectStylesNames } from './MonthYearSelect/MonthYearSelect';
import { ViewSelect, ViewSelectStylesNames } from './ViewSelect/ViewSelect';
import classes from './ScheduleHeader.module.css';

export type CombinedScheduleHeaderStylesNames =
  | ScheduleHeaderStylesNames
  | ViewSelectStylesNames
  | HeaderControlStylesNames
  | MonthYearSelectStylesNames;

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
    ViewSelect: typeof ViewSelect;
    MonthYearSelect: typeof MonthYearSelect;
  };
}>;

const defaultProps = {
  __staticSelector: 'ScheduleHeader',
} satisfies Partial<ScheduleHeaderProps>;

const varsResolver = createVarsResolver<ScheduleHeaderFactory>(() => ({
  scheduleHeader: {
    '--test': 'test',
  },
}));

export const ScheduleHeader = factory<ScheduleHeaderFactory>((_props) => {
  const props = useProps('ScheduleHeader', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    __staticSelector,
    ...others
  } = props;

  const getStyles = useStyles<ScheduleHeaderFactory>({
    name: __staticSelector,
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    attributes,
    rootSelector: 'header',
  });

  return <Box {...getStyles('header')} {...others} />;
});

ScheduleHeader.displayName = '@mantine/schedule/ScheduleHeader';
ScheduleHeader.classes = classes;
ScheduleHeader.Next = ScheduleHeaderNext;
ScheduleHeader.Previous = ScheduleHeaderPrevious;
ScheduleHeader.Today = ScheduleHeaderToday;
ScheduleHeader.ViewSelect = ViewSelect;
ScheduleHeader.MonthYearSelect = MonthYearSelect;
