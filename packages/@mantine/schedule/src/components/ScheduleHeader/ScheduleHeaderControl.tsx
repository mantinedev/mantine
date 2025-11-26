import {
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  UnstyledButton,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './ScheduleHeaderControl.module.css';

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
  });

  return <UnstyledButton {...getStyles('headerControl')} {...others} />;
});

ScheduleHeaderControl.displayName = '@mantine/core/ScheduleHeaderControl';
ScheduleHeaderControl.classes = classes;
