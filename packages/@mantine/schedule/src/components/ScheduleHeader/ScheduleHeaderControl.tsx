import {
  AccordionChevron,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
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
  control: '--test';
};

export interface ScheduleHeaderControlProps
  extends BoxProps,
    StylesApiProps<ScheduleHeaderControlFactory>,
    ElementProps<'button'> {
  __staticSelector?: string;
}

export type ScheduleHeaderControlFactory = Factory<{
  props: ScheduleHeaderControlProps;
  ref: HTMLButtonElement;
  stylesNames: ScheduleHeaderControlStylesNames;
  vars: ScheduleHeaderControlCssVariables;
  variant: ScheduleHeaderControlVariant;
}>;

const defaultProps = {} satisfies Partial<ScheduleHeaderControlProps>;

const varsResolver = createVarsResolver<ScheduleHeaderControlFactory>(() => ({
  control: {
    '--test': 'test',
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
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<ScheduleHeaderControlFactory>({
    name: __staticSelector || 'ScheduleHeader',
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

  return <UnstyledButton {...getStyles('headerControl')} {...others} />;
});

ScheduleHeaderControl.displayName = '@mantine/core/ScheduleHeaderControl';
ScheduleHeaderControl.classes = classes;

export function ScheduleHeaderNext(props: ScheduleHeaderControlProps) {
  const { dir } = useDirection();
  const ctx = useScheduleContext();

  return (
    <ScheduleHeaderControl aria-label={ctx.labels.next} {...props}>
      <AccordionChevron transform={`rotate(${dir === 'rtl' ? 90 : -90} 0 0)`} />
    </ScheduleHeaderControl>
  );
}

export function ScheduleHeaderPrevious(props: ScheduleHeaderControlProps) {
  const { dir } = useDirection();
  const ctx = useScheduleContext();

  return (
    <ScheduleHeaderControl aria-label={ctx.labels.previous} {...props}>
      <AccordionChevron transform={`rotate(${dir === 'rtl' ? -90 : 90} 0 0)`} />
    </ScheduleHeaderControl>
  );
}

ScheduleHeaderNext.displayName = '@mantine/schedule/ScheduleHeaderNext';
ScheduleHeaderPrevious.displayName = '@mantine/schedule/ScheduleHeaderPrevious';
