import {
  AccordionChevron,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  MantineRadius,
  StylesApiProps,
  UnstyledButton,
  useDirection,
  useProps,
  useStyles,
} from '@mantine/core';
import { useScheduleContext } from '../Schedule/Schedule.context';
import classes from './ScheduleHeader.module.css';

export type ScheduleHeaderControlStylesNames = 'headerControl';
export type ScheduleHeaderControlVariant = string;
export type ScheduleHeaderControlCssVariables = {
  headerControl: '--control-radius';
};

export interface ScheduleHeaderControlProps
  extends BoxProps,
    StylesApiProps<ScheduleHeaderControlFactory>,
    ElementProps<'button'> {
  __staticSelector?: string;

  /** Applies active styles */
  active?: boolean;

  /** Removes inline padding */
  square?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;
}

export type ScheduleHeaderControlFactory = Factory<{
  props: ScheduleHeaderControlProps;
  ref: HTMLButtonElement;
  stylesNames: ScheduleHeaderControlStylesNames;
  vars: ScheduleHeaderControlCssVariables;
  variant: ScheduleHeaderControlVariant;
}>;

const defaultProps = {} satisfies Partial<ScheduleHeaderControlProps>;

const varsResolver = createVarsResolver<ScheduleHeaderControlFactory>((_theme, { radius }) => ({
  headerControl: {
    '--control-radius': radius === undefined ? undefined : getRadius(radius),
  },
}));

export const ScheduleHeaderControl = factory<ScheduleHeaderControlFactory>((_props) => {
  const props = useProps('ScheduleHeaderControl', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    mod,
    attributes,
    active,
    square,
    radius,
    ...others
  } = props;

  const getStyles = useStyles<ScheduleHeaderControlFactory>({
    name: __staticSelector || 'ScheduleHeaderControl',
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
    rootSelector: 'headerControl',
  });

  return (
    <UnstyledButton
      {...getStyles('headerControl', { active: true })}
      mod={[{ active, square }, mod]}
      {...others}
    />
  );
});

ScheduleHeaderControl.displayName = '@mantine/schedule/ScheduleHeaderControl';
ScheduleHeaderControl.classes = classes;

export function ScheduleHeaderNext(props: ScheduleHeaderControlProps) {
  const { dir } = useDirection();
  const ctx = useScheduleContext();

  return (
    <ScheduleHeaderControl data-type="next" aria-label={ctx.labels.next} square {...props}>
      <AccordionChevron transform={`rotate(${dir === 'rtl' ? 90 : -90} 0 0)`} />
    </ScheduleHeaderControl>
  );
}

export function ScheduleHeaderPrevious(props: ScheduleHeaderControlProps) {
  const { dir } = useDirection();
  const ctx = useScheduleContext();

  return (
    <ScheduleHeaderControl data-type="previous" aria-label={ctx.labels.previous} square {...props}>
      <AccordionChevron transform={`rotate(${dir === 'rtl' ? -90 : 90} 0 0)`} />
    </ScheduleHeaderControl>
  );
}

export function ScheduleHeaderToday(props: ScheduleHeaderControlProps) {
  const ctx = useScheduleContext();

  return (
    <ScheduleHeaderControl data-type="today" {...props}>
      {ctx.labels.today}
    </ScheduleHeaderControl>
  );
}

ScheduleHeaderNext.displayName = '@mantine/schedule/ScheduleHeaderNext';
ScheduleHeaderPrevious.displayName = '@mantine/schedule/ScheduleHeaderPrevious';
ScheduleHeaderToday.displayName = '@mantine/schedule/ScheduleHeaderToday';
