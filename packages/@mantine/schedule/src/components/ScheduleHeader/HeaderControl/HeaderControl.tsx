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
import { useScheduleContext } from '../../Schedule/Schedule.context';
import classes from './HeaderControl.module.css';

export type HeaderControlStylesNames = 'headerControl';
export type HeaderControlCssVariables = {
  headerControl: '--control-radius';
};

export interface HeaderControlProps
  extends BoxProps, StylesApiProps<HeaderControlFactory>, ElementProps<'button'> {
  __staticSelector?: string;

  /** Applies active styles */
  active?: boolean;

  /** Removes inline padding */
  square?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;
}

export type HeaderControlFactory = Factory<{
  props: HeaderControlProps;
  ref: HTMLButtonElement;
  stylesNames: HeaderControlStylesNames;
  vars: HeaderControlCssVariables;
}>;

const defaultProps = {
  __staticSelector: 'HeaderControl',
} satisfies Partial<HeaderControlProps>;

const varsResolver = createVarsResolver<HeaderControlFactory>((_theme, { radius }) => ({
  headerControl: {
    '--control-radius': radius === undefined ? undefined : getRadius(radius),
  },
}));

export const HeaderControl = factory<HeaderControlFactory>((_props) => {
  const props = useProps('HeaderControl', defaultProps, _props);
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

  const getStyles = useStyles<HeaderControlFactory>({
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

HeaderControl.displayName = '@mantine/schedule/HeaderControl';
HeaderControl.classes = classes;

export function ScheduleHeaderNext(props: HeaderControlProps) {
  const { dir } = useDirection();
  const ctx = useScheduleContext();

  return (
    <HeaderControl data-type="next" aria-label={ctx.labels.next} square {...props}>
      <AccordionChevron transform={`rotate(${dir === 'rtl' ? 90 : -90} 0 0)`} />
    </HeaderControl>
  );
}

export function ScheduleHeaderPrevious(props: HeaderControlProps) {
  const { dir } = useDirection();
  const ctx = useScheduleContext();

  return (
    <HeaderControl data-type="previous" aria-label={ctx.labels.previous} square {...props}>
      <AccordionChevron transform={`rotate(${dir === 'rtl' ? -90 : 90} 0 0)`} />
    </HeaderControl>
  );
}

export function ScheduleHeaderToday(props: HeaderControlProps) {
  const ctx = useScheduleContext();

  return (
    <HeaderControl data-type="today" {...props}>
      {ctx.labels.today}
    </HeaderControl>
  );
}

ScheduleHeaderNext.displayName = '@mantine/schedule/ScheduleHeaderNext';
ScheduleHeaderPrevious.displayName = '@mantine/schedule/ScheduleHeaderPrevious';
ScheduleHeaderToday.displayName = '@mantine/schedule/ScheduleHeaderToday';
