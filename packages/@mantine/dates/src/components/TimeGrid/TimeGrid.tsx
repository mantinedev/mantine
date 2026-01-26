import {
  Box,
  BoxProps,
  createVarsResolver,
  DataAttributes,
  ElementProps,
  factory,
  Factory,
  getFontSize,
  getRadius,
  MantineRadius,
  MantineSize,
  SimpleGrid,
  SimpleGridProps,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import type { TimePickerAmPmLabels, TimePickerFormat } from '../TimePicker';
import { isSameTime } from '../TimePicker/utils/is-same-time/is-same-time';
import { isTimeAfter, isTimeBefore } from './compare-time';
import { TimeGridProvider } from './TimeGrid.context';
import classes from './TimeGrid.module.css';
import { TimeGridControl } from './TimeGridControl';

export type TimeGridStylesNames = 'root' | 'control' | 'simpleGrid';
export type TimeGridCssVariables = {
  root: '--time-grid-fz' | '--time-grid-radius';
};

export interface TimeGridProps
  extends
    BoxProps,
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

  /** Determines whether the value can be deselected when the current active option is clicked or activated with keyboard @default false */
  allowDeselect?: boolean;

  /** Time format displayed in the grid @default '24h' */
  format?: TimePickerFormat;

  /** Determines whether the seconds part should be displayed @default false */
  withSeconds?: boolean;

  /** Labels used for am/pm values @default { am: 'AM', pm: 'PM' } */
  amPmLabels?: TimePickerAmPmLabels;

  /** Props passed down to the underlying `SimpleGrid` component @default { cols: 3, spacing: 'xs' } */
  simpleGridProps?: SimpleGridProps;

  /** A function to pass props down to control based on the time value */
  getControlProps?: (time: string) => React.ComponentProps<'button'> & DataAttributes;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default theme.defaultRadius */
  radius?: MantineRadius;

  /** Control `font-size` of controls, key of `theme.fontSizes` or any valid CSS value @default 'sm' */
  size?: MantineSize;

  /** All controls before this time are disabled */
  minTime?: string;

  /** All controls after this time are disabled */
  maxTime?: string;

  /** Array of time values to disable */
  disableTime?: string[] | ((time: string) => boolean);

  /** If set, all controls are disabled */
  disabled?: boolean;
}

export type TimeGridFactory = Factory<{
  props: TimeGridProps;
  ref: HTMLDivElement;
  stylesNames: TimeGridStylesNames;
  vars: TimeGridCssVariables;
}>;

const defaultProps = {
  simpleGridProps: { cols: 3, spacing: 'xs' },
  format: '24h',
  amPmLabels: { am: 'AM', pm: 'PM' },
} satisfies Partial<TimeGridProps>;

const varsResolver = createVarsResolver<TimeGridFactory>((_theme, { size, radius }) => ({
  root: {
    '--time-grid-fz': getFontSize(size),
    '--time-grid-radius': getRadius(radius),
  },
}));

export const TimeGrid = factory<TimeGridFactory>((_props) => {
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
    withSeconds = false,
    amPmLabels,
    allowDeselect,
    simpleGridProps,
    getControlProps,
    minTime,
    maxTime,
    disableTime,
    disabled,
    attributes,
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
    attributes,
    vars,
    varsResolver,
  });

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
  });

  const controls = data.map((time) => {
    const isDisabled =
      disabled ||
      (!!minTime && isTimeBefore(time, minTime)) ||
      (!!maxTime && isTimeAfter(time, maxTime)) ||
      (Array.isArray(disableTime)
        ? !!disableTime.find((t) => isSameTime({ time, compare: t, withSeconds }))
        : !!disableTime?.(time));

    return (
      <TimeGridControl
        key={time}
        active={isSameTime({ time, compare: _value || '', withSeconds })}
        time={time}
        onClick={() => {
          const nextValue =
            allowDeselect &&
            (_value === null ? time === _value : isSameTime({ time, compare: _value, withSeconds }))
              ? null
              : time;
          nextValue !== _value && setValue(nextValue);
        }}
        format={format}
        amPmLabels={amPmLabels}
        disabled={isDisabled}
        data-disabled={isDisabled || undefined}
        withSeconds={withSeconds}
        {...getControlProps?.(time)}
      />
    );
  });

  return (
    <TimeGridProvider value={{ getStyles }}>
      <Box {...getStyles('root')} {...others}>
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
