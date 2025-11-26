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
import { ScheduleHeaderNext, ScheduleHeaderPrevious } from './ScheduleHeaderControl';
import classes from './ScheduleHeader.module.css';

export type ScheduleHeaderStylesNames = 'scheduleHeader';
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
    rootSelector: 'scheduleHeader',
  });

  return (
    <Box {...getStyles('scheduleHeader')} {...others}>
      <ScheduleHeaderPrevious />
      <ScheduleHeaderNext />
    </Box>
  );
});

ScheduleHeader.displayName = '@mantine/schedule/ScheduleHeader';
ScheduleHeader.classes = classes;
