import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  MantineRadius,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { ScheduleEventData } from '../../types';
import classes from './ScheduleEvent.module.css';

export type ScheduleEventStylesNames = 'event' | 'eventInner';
export type ScheduleEventVariant = 'filled' | 'light';
export type ScheduleEventCssVariables = {
  event: '--event-bg' | '--event-color' | '--event-radius';
};

export interface ScheduleEventProps
  extends BoxProps, StylesApiProps<ScheduleEventFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** Event to display */
  event: ScheduleEventData;

  /** Key of `theme.radius` or any valid CSS value to set border-radius @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** If set, event has `95%` width, allowing time slot selection under the event @default `false` */
  truncate?: boolean;

  /** Function to customize event body, `event` object is passed as first argument */
  renderEventBody?: (event: ScheduleEventData<any>) => React.ReactNode;
}

export type ScheduleEventFactory = Factory<{
  props: ScheduleEventProps;
  ref: HTMLDivElement;
  stylesNames: ScheduleEventStylesNames;
  vars: ScheduleEventCssVariables;
  variant: ScheduleEventVariant;
}>;

const defaultProps = {
  __staticSelector: 'ScheduleEvent',
} satisfies Partial<ScheduleEventProps>;

const varsResolver = createVarsResolver<ScheduleEventFactory>(
  (theme, { event, variant, radius }) => {
    const colors = theme.variantColorResolver({
      color: event.color || theme.primaryColor,
      theme,
      variant: variant || 'filled',
      autoContrast: true,
    });

    return {
      event: {
        '--event-bg': colors.background,
        '--event-color': colors.color,
        '--event-radius': getRadius(radius),
      },
    };
  }
);

export const ScheduleEvent = factory<ScheduleEventFactory>((_props) => {
  const props = useProps('ScheduleEvent', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    children,
    truncate,
    radius,
    color,
    __staticSelector,
    event,
    renderEventBody,
    ...others
  } = props;

  const getStyles = useStyles<ScheduleEventFactory>({
    name: __staticSelector,
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

  return (
    <Box {...getStyles('event')} {...others}>
      <Box mod={{ truncate }} {...getStyles('eventInner')}>
        {typeof renderEventBody === 'function' ? (
          renderEventBody(event)
        ) : (
          <>
            <div>{event.title}</div>
          </>
        )}
      </Box>
    </Box>
  );
});

ScheduleEvent.displayName = '@mantine/schedule/ScheduleEvent';
ScheduleEvent.classes = classes;
