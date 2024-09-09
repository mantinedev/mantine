import cx from 'clsx';
import {
  __BaseInputProps,
  __InputStylesNames,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  InputBase,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
} from '@mantine/core';
import classes from './TimeInput.module.css';

export interface TimeInputProps
  extends BoxProps,
    __BaseInputProps,
    StylesApiProps<TimeInputFactory>,
    ElementProps<'input', 'size'> {
  /** Determines whether seconds input should be rendered */
  withSeconds?: boolean;

  /** Minimum possible string time, if withSeconds is true, time should be in format HH:mm:ss, otherwise HH:mm */
  minTime?: string;

  /** Maximum possible string time, if withSeconds is true, time should be in format HH:mm:ss, otherwise HH:mm */
  maxTime?: string;
}

export type TimeInputFactory = Factory<{
  props: TimeInputProps;
  ref: HTMLInputElement;
  stylesNames: __InputStylesNames;
}>;

const defaultProps: Partial<TimeInputProps> = {};

export const TimeInput = factory<TimeInputFactory>((_props, ref) => {
  const props = useProps('TimeInput', defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    vars,
    withSeconds,
    minTime,
    maxTime,
    value,
    onChange,
    ...others
  } = props;

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<TimeInputFactory>({
    classNames,
    styles,
    props,
  });

  /**
   * Check if time is within limits or not
   * If the given value is within limits, return 0
   * If the given value is greater than the maxTime, return 1
   * If the given value is less than the minTime, return -1
   */
  const checkIfTimeLimitExceeded = (val: string) => {
    if (minTime !== undefined || maxTime !== undefined) {
      const [hours, minutes, seconds] = val.split(':').map(Number);

      if (minTime) {
        const [minHours, minMinutes, minSeconds] = minTime.split(':').map(Number);

        if (
          hours < minHours ||
          (hours === minHours && minutes < minMinutes) ||
          (withSeconds && hours === minHours && minutes === minMinutes && seconds < minSeconds)
        ) {
          return -1;
        }
      }

      if (maxTime) {
        const [maxHours, maxMinutes, maxSeconds] = maxTime.split(':').map(Number);

        if (
          hours > maxHours ||
          (hours === maxHours && minutes > maxMinutes) ||
          (withSeconds && hours === maxHours && minutes === maxMinutes && seconds > maxSeconds)
        ) {
          return 1;
        }
      }
    }

    return 0;
  };

  const onTimeBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    props.onBlur?.(event);
    if (minTime !== undefined || maxTime !== undefined) {
      const val = event.currentTarget.value;

      if (val) {
        const check = checkIfTimeLimitExceeded(val);
        if (check === 1) {
          event.currentTarget.value = maxTime!;
          props.onChange?.(event);
        } else if (check === -1) {
          event.currentTarget.value = minTime!;
          props.onChange?.(event);
        }
      }
    }
  };

  return (
    <InputBase
      classNames={{ ...resolvedClassNames, input: cx(classes.input, resolvedClassNames?.input) }}
      styles={resolvedStyles}
      unstyled={unstyled}
      ref={ref}
      value={value}
      {...others}
      step={withSeconds ? 1 : 60}
      onChange={onChange}
      onBlur={onTimeBlur}
      type="time"
      __staticSelector="TimeInput"
    />
  );
});

TimeInput.classes = InputBase.classes;
TimeInput.displayName = '@mantine/dates/TimeInput';
