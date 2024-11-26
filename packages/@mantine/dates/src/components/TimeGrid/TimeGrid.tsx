import {
  Box,
  BoxProps,
  createVarsResolver,
  DataAttributes,
  ElementProps,
  factory,
  Factory,
  SimpleGrid,
  SimpleGridProps,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import type { TimePickerAmPmLabels, TimePickerFormat } from '../TimePicker';
import { TimeGridProvider } from './TimeGrid.context';
import { TimeGridControl } from './TimeGridControl';
import classes from './TimeGrid.module.css';

export type TimeGridStylesNames = 'root' | 'control' | 'simpleGrid';
export type TimeGridCssVariables = {
  root: '--test';
};

export interface TimeGridProps
  extends BoxProps,
    StylesApiProps<TimeGridFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
  /** Time data in 24h format to be displayed in the grid, for example `['10:00', '18:30', '22:00']`. Time values must be unique. */
  data: string[];

  /** Controlled component value */
  value?: string | null;

  /** Uncontrolled component default value */
  defaultValue?: string | null;

  /** Called when value changes */
  onChange?: (value: string | null) => void;

  /** Determines whether the value can be deselected when the current active option is clicked or activated with keyboard, `false` by default */
  allowDeselect?: boolean;

  /** Time format displayed in the grid, `'24h'` by default */
  format?: TimePickerFormat;

  /** Determines whether the seconds part should be displayed, `false` by default */
  withSeconds?: boolean;

  /** Labels used for am/pm values, `{ am: 'AM', pm: 'PM' }` by default */
  amPmLabels?: TimePickerAmPmLabels;

  /** Props passed down to the underlying `SimpleGrid` component, `{ cols: 2 }` by default */
  simpleGridProps?: SimpleGridProps;

  /** A function to pass props down to control based on the time value */
  getControlProps?: (time: string) => React.ComponentPropsWithoutRef<'button'> & DataAttributes;
}

export type TimeGridFactory = Factory<{
  props: TimeGridProps;
  ref: HTMLDivElement;
  stylesNames: TimeGridStylesNames;
  vars: TimeGridCssVariables;
}>;

const defaultProps: Partial<TimeGridProps> = {
  simpleGridProps: { cols: 2 },
  format: '24h',
  amPmLabels: { am: 'AM', pm: 'PM' },
};

const varsResolver = createVarsResolver<TimeGridFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const TimeGrid = factory<TimeGridFactory>((_props, ref) => {
  const props = useProps('TimeGrid', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    value,
    defaultValue,
    onChange,
    format,
    withSeconds,
    amPmLabels,
    allowDeselect,
    simpleGridProps,
    getControlProps,
    ...others
  } = props;

  const getStyles = useStyles<TimeGridFactory>({
    name: 'TimeGrid',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
  });

  const controls = data.map((time) => (
    <TimeGridControl
      key={time}
      active={time === _value}
      time={time}
      onClick={() => setValue(allowDeselect && _value === time ? null : time)}
      format={format!}
      amPmLabels={amPmLabels!}
    />
  ));

  return (
    <TimeGridProvider value={{ getStyles }}>
      <Box ref={ref} {...getStyles('root')} {...others}>
        <SimpleGrid
          {...simpleGridProps}
          {...getStyles('simpleGrid', {
            className: simpleGridProps?.className,
            style: simpleGridProps?.style,
          })}
        >
          {controls}
        </SimpleGrid>
      </Box>
    </TimeGridProvider>
  );
});

TimeGrid.displayName = '@mantine/dates/TimeGrid';
TimeGrid.classes = classes;
