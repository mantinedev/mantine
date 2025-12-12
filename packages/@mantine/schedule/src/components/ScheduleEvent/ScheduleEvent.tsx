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
import classes from './ScheduleEvent.module.css';

export type ScheduleEventStylesNames = 'event';
export type ScheduleEventCssVariables = {
  root: '--test';
};

export interface ScheduleEventProps
  extends BoxProps, StylesApiProps<ScheduleEventFactory>, ElementProps<'div'> {}

export type ScheduleEventFactory = Factory<{
  props: ScheduleEventProps;
  ref: HTMLDivElement;
  stylesNames: ScheduleEventStylesNames;
  vars: ScheduleEventCssVariables;
}>;

const defaultProps = {} satisfies Partial<ScheduleEventProps>;

const varsResolver = createVarsResolver<ScheduleEventFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const ScheduleEvent = factory<ScheduleEventFactory>((_props) => {
  const props = useProps('ScheduleEvent', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, attributes, ...others } = props;

  const getStyles = useStyles<ScheduleEventFactory>({
    name: 'ScheduleEvent',
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
    rootSelector: 'event',
  });

  return <Box {...getStyles('event')} {...others} />;
});

ScheduleEvent.displayName = '@mantine/schedule/ScheduleEvent';
ScheduleEvent.classes = classes;
