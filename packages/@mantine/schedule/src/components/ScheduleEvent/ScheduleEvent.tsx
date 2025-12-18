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
  UnstyledButton,
  useProps,
  useStyles,
} from '@mantine/core';
import { ScheduleEventData } from '../../types';
import classes from './ScheduleEvent.module.css';

export type ScheduleEventStylesNames = 'event' | 'eventInner';

export type ScheduleEventVariant = 'filled' | 'light';
export type ScheduleEventCssVariables = {
  event: '--event-bg' | '--event-color' | '--event-radius' | '--event-hover';
};

export type RenderEventBody = (event: ScheduleEventData<any>) => React.ReactNode;

export interface ScheduleEventProps
  extends BoxProps, StylesApiProps<ScheduleEventFactory>, ElementProps<'button'> {
  __staticSelector?: string;

  /** Event to display */
  event: ScheduleEventData;

  /** Key of `theme.radius` or any valid CSS value to set border-radius @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** If set, event has `white-space: nowrap` @default `false` */
  nowrap?: boolean;

  /** If set, event shrinks its font-size with limited height @default `false` */
  autoSize?: boolean;

  /** Event size @default `'sm'` */
  size?: 'sm' | 'md' | (string & {});

  /** Function to customize event body, `event` object is passed as first argument */
  renderEventBody?: RenderEventBody;
}

export type ScheduleEventFactory = Factory<{
  props: ScheduleEventProps;
  ref: HTMLButtonElement;
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
      variant: variant || 'light',
      autoContrast: true,
    });

    return {
      event: {
        '--event-bg': colors.background,
        '--event-hover': colors.hover,
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
    nowrap,
    radius,
    color,
    __staticSelector,
    event,
    renderEventBody,
    size,
    autoSize,
    mod,
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
    <UnstyledButton
      {...getStyles('event')}
      size={size}
      title={event.title}
      mod={[{ autoSize }, mod]}
      {...others}
    >
      <Box mod={{ nowrap, size, autoSize }} {...getStyles('eventInner')}>
        {typeof renderEventBody === 'function' ? renderEventBody(event) : event.title}
      </Box>
    </UnstyledButton>
  );
});

ScheduleEvent.displayName = '@mantine/schedule/ScheduleEvent';
ScheduleEvent.classes = classes;
