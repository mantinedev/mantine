import dayjs from 'dayjs';
import { useRef, useState } from 'react';
import {
  ActionIcon,
  ActionIconProps,
  Box,
  BoxProps,
  CheckIcon,
  ElementProps,
  Factory,
  genericFactory,
  MantineSize,
  StylesApiProps,
  Text,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useDidUpdate, useMergedRef } from '@mantine/hooks';
import { useUncontrolledDates } from '../../hooks';
import { DatePickerType, DateStringValue, DateValue } from '../../types';
import { assignTime, clampDate, getDefaultClampedDate } from '../../utils';
import { pickCalendarProps } from '../Calendar';
import { DatePicker, DatePickerBaseProps, DatePickerStylesNames } from '../DatePicker';
import { useDatesContext } from '../DatesProvider';
import { getMaxTime, getMinTime } from '../DateTimePicker/get-min-max-time/get-min-max-time';
import { TimePicker, TimePickerProps } from '../TimePicker/TimePicker';
import classes from './InlineDateTimePicker.module.css';

export type InlineDateTimePickerStylesNames =
  | 'root'
  | 'timeWrapper'
  | 'timeInput'
  | 'submitButton'
  | 'rangeTimeWrapper'
  | 'rangeTimeInput'
  | 'rangeInfo'
  | DatePickerStylesNames;

export interface InlineDateTimePickerProps<Type extends DatePickerType = 'default'>
  extends
    BoxProps,
    DatePickerBaseProps<Type>,
    StylesApiProps<InlineDateTimePickerFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
  /** Default time value in `HH:mm` or `HH:mm:ss` format. Assigned to time when date is selected. */
  defaultTimeValue?: string;

  /** Props passed down to `TimePicker` component */
  timePickerProps?: Omit<TimePickerProps, 'defaultValue' | 'value'>;

  /** Props passed down to the end time `TimePicker` component in range mode */
  endTimePickerProps?: Omit<TimePickerProps, 'defaultValue' | 'value'>;

  /** Props passed down to the submit button */
  submitButtonProps?: ActionIconProps & React.ComponentProps<'button'>;

  /** Determines whether the seconds input should be displayed @default false */
  withSeconds?: boolean;

  /** Called when the submit button is clicked */
  onSubmit?: () => void;

  /** `dayjs` format for range display, or a function that receives the value as a `YYYY-MM-DD HH:mm:ss` string and returns the formatted value @default "DD/MM/YYYY HH:mm" */
  valueFormat?: string | ((date: DateStringValue) => string);

  /** Separator between range values */
  labelSeparator?: string;

  /** Component size @default 'sm' */
  size?: MantineSize;

  /** Min date */
  minDate?: DateStringValue | Date;

  /** Max date */
  maxDate?: DateStringValue | Date;

  /** @internal Adds data-mantine-stop-propagation to interactive elements */
  __stopPropagation?: boolean;

  /** @internal Overrides the static selector used for class names */
  __staticSelector?: string;

  /** @internal Called when Enter is pressed in a time input */
  __onEnter?: () => void;

  /** @internal Forwarded to DatePicker for preset handling */
  __onPresetSelect?: (val: any) => void;
}

export type InlineDateTimePickerFactory = Factory<{
  props: InlineDateTimePickerProps;
  ref: HTMLDivElement;
  stylesNames: InlineDateTimePickerStylesNames;
  signature: <Type extends DatePickerType = 'default'>(
    props: InlineDateTimePickerProps<Type> & { ref?: React.Ref<HTMLDivElement> }
  ) => React.JSX.Element;
}>;

const defaultProps = {
  type: 'default',
  size: 'sm',
} satisfies Partial<InlineDateTimePickerProps>;

export const InlineDateTimePicker = genericFactory<InlineDateTimePickerFactory>((_props) => {
  const props = useProps('InlineDateTimePicker', defaultProps as any, _props);
  const {
    value,
    defaultValue,
    onChange,
    valueFormat,
    locale,
    classNames,
    styles,
    unstyled,
    timePickerProps,
    endTimePickerProps,
    submitButtonProps,
    withSeconds,
    level,
    defaultLevel,
    size,
    variant,
    vars,
    minDate,
    maxDate,
    defaultDate,
    defaultTimeValue,
    presets,
    attributes,
    onSubmit,
    labelSeparator,
    type,
    className,
    style,
    __stopPropagation,
    __staticSelector,
    __onEnter,
    __onPresetSelect,
    fullWidth,
    ...rest
  } = props;

  const _staticSelector = __staticSelector || 'InlineDateTimePicker';

  const getStyles = useStyles<InlineDateTimePickerFactory>({
    name: _staticSelector,
    classes,
    props: props as InlineDateTimePickerProps,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<InlineDateTimePickerFactory>({
    classNames,
    styles,
    props: props as InlineDateTimePickerProps,
  });

  const ctx = useDatesContext();
  const _valueFormat = valueFormat || (withSeconds ? 'DD/MM/YYYY HH:mm:ss' : 'DD/MM/YYYY HH:mm');
  const _labelSeparator = ctx.getLabelSeparator(labelSeparator);
  const isRange = (type as string) === 'range';

  const startTimePickerRef = useRef<HTMLInputElement>(null);
  const startTimePickerRefMerged = useMergedRef(startTimePickerRef, timePickerProps?.hoursRef);
  const endTimePickerRef = useRef<HTMLInputElement>(null);
  const endTimePickerRefMerged = useMergedRef(endTimePickerRef, endTimePickerProps?.hoursRef);

  const {
    calendarProps: { allowSingleDateInRange, ...calendarProps },
    others,
  } = pickCalendarProps(rest);

  const [_value, setValue] = useUncontrolledDates({
    type: type as any,
    value,
    defaultValue,
    onChange: onChange as any,
    withTime: true,
  });

  const formatTime = (dateValue: DateStringValue | null) =>
    dateValue ? dayjs(dateValue).format(withSeconds ? 'HH:mm:ss' : 'HH:mm') : '';

  const getInitialStartTime = () => {
    if (defaultTimeValue) {
      return defaultTimeValue;
    }
    if (isRange) {
      return Array.isArray(_value) ? formatTime(_value[0]) : '';
    }
    return formatTime(_value as DateStringValue | null);
  };

  const getInitialEndTime = () => {
    if (defaultTimeValue) {
      return defaultTimeValue;
    }
    return isRange && Array.isArray(_value) ? formatTime(_value[1]) : '';
  };

  const [startTimeValue, setStartTimeValue] = useState(getInitialStartTime);
  const [endTimeValue, setEndTimeValue] = useState(getInitialEndTime);
  const [currentLevel, setCurrentLevel] = useState(level || defaultLevel || 'month');

  const _defaultDate = isRange
    ? (Array.isArray(_value) ? _value[0] : null) || defaultDate
    : (_value as DateStringValue | null) || defaultDate;

  const handleDefaultDateChange = (date: DateValue) => {
    if (date) {
      setValue(
        assignTime(clampDate(minDate, maxDate, date), startTimeValue || defaultTimeValue || '')
      );
    }
    startTimePickerRef.current?.focus();
  };

  const handleRangeDateChange = (dates: any) => {
    const [start, end] = dates;
    const newStart = start
      ? assignTime(clampDate(minDate, maxDate, start), startTimeValue || defaultTimeValue || '')
      : null;
    const newEnd = end
      ? assignTime(clampDate(minDate, maxDate, end), endTimeValue || defaultTimeValue || '')
      : null;
    setValue([newStart, newEnd] as any);

    if (start && end) {
      startTimePickerRef.current?.focus();
    }
  };

  const handleDateChange = (date: any) => {
    if (isRange) {
      handleRangeDateChange(date);
    } else {
      handleDefaultDateChange(date);
    }
  };

  const handleStartTimeChange = (timeString: string) => {
    timePickerProps?.onChange?.(timeString);
    setStartTimeValue(timeString);

    if (timeString) {
      if (isRange && Array.isArray(_value)) {
        if (_value[0]) {
          const newStart = assignTime(_value[0], timeString);
          setValue([newStart, _value[1]] as any);
        }
      } else {
        setValue(assignTime(_value as DateStringValue | null, timeString));
      }
    }
  };

  const handleEndTimeChange = (timeString: string) => {
    endTimePickerProps?.onChange?.(timeString);
    setEndTimeValue(timeString);

    if (timeString && isRange && Array.isArray(_value) && _value[1]) {
      const newEnd = assignTime(_value[1], timeString);
      setValue([_value[0], newEnd] as any);
    }
  };

  const handleTimeInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      __onEnter?.();
    }
  };

  const getFormattedRange = () => {
    if (!isRange || !Array.isArray(_value)) {
      return '';
    }

    const formatDate = (v: DateStringValue | null) => {
      if (!v) {
        return '';
      }
      if (typeof _valueFormat === 'function') {
        return _valueFormat(v);
      }
      return dayjs(v).locale(ctx.getLocale(locale)).format(_valueFormat);
    };

    const start = formatDate(_value[0]);
    const end = formatDate(_value[1]);

    if (start && end) {
      return `${start} ${_labelSeparator} ${end}`;
    }

    if (start) {
      return `${start} ${_labelSeparator} ...`;
    }

    return '';
  };

  useDidUpdate(() => {
    if (isRange && Array.isArray(_value)) {
      setStartTimeValue(formatTime(_value[0]));
      setEndTimeValue(formatTime(_value[1]));
    } else {
      setStartTimeValue(formatTime(_value as DateStringValue | null));
    }
  }, [_value]);

  const startMinTime = isRange
    ? getMinTime({ minDate, value: Array.isArray(_value) ? _value[0] : null })
    : getMinTime({ minDate, value: _value as DateStringValue | null });

  const startMaxTime = isRange
    ? getMaxTime({ maxDate, value: Array.isArray(_value) ? _value[0] : null })
    : getMaxTime({ maxDate, value: _value as DateStringValue | null });

  const endMinTime = isRange
    ? getMinTime({ minDate, value: Array.isArray(_value) ? _value[1] : null })
    : undefined;

  const endMaxTime = isRange
    ? getMaxTime({ maxDate, value: Array.isArray(_value) ? _value[1] : null })
    : undefined;

  return (
    <Box {...getStyles('root', { className, style })} {...others} ref={props.ref as any}>
      <DatePicker
        fullWidth={fullWidth ?? true}
        {...calendarProps}
        maxDate={maxDate}
        minDate={minDate}
        size={size}
        variant={variant}
        type={type as any}
        value={_value as any}
        defaultDate={_defaultDate || getDefaultClampedDate({ maxDate, minDate })}
        onChange={handleDateChange}
        locale={locale}
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        __staticSelector={_staticSelector}
        __stopPropagation={__stopPropagation}
        level={level}
        defaultLevel={defaultLevel}
        onLevelChange={(_level) => {
          setCurrentLevel(_level);
          calendarProps.onLevelChange?.(_level);
        }}
        presets={presets}
        allowSingleDateInRange={allowSingleDateInRange}
        __onPresetSelect={__onPresetSelect}
        attributes={attributes}
      />

      {currentLevel === 'month' && !isRange && (
        <div {...getStyles('timeWrapper')}>
          <TimePicker
            value={startTimeValue}
            withSeconds={withSeconds}
            unstyled={unstyled}
            min={startMinTime}
            max={startMaxTime}
            {...timePickerProps}
            {...getStyles('timeInput', {
              className: timePickerProps?.className,
              style: timePickerProps?.style,
            })}
            onChange={handleStartTimeChange}
            onKeyDown={handleTimeInputKeyDown}
            size={size}
            data-mantine-stop-propagation={__stopPropagation || undefined}
            hoursRef={startTimePickerRefMerged}
          />

          <ActionIcon
            variant="default"
            size={`input-${size || 'sm'}`}
            {...getStyles('submitButton', {
              className: submitButtonProps?.className,
              style: submitButtonProps?.style,
            })}
            unstyled={unstyled}
            data-mantine-stop-propagation={__stopPropagation || undefined}
            // eslint-disable-next-line react/no-children-prop
            children={<CheckIcon size="30%" />}
            {...submitButtonProps}
            onClick={(event) => {
              submitButtonProps?.onClick?.(event);
              onSubmit?.();
            }}
          />
        </div>
      )}

      {currentLevel === 'month' && isRange && (
        <>
          <Text {...getStyles('rangeInfo')}>{getFormattedRange()}</Text>

          <div {...getStyles('rangeTimeWrapper')}>
            <TimePicker
              value={startTimeValue}
              withSeconds={withSeconds}
              unstyled={unstyled}
              min={startMinTime}
              max={startMaxTime}
              {...timePickerProps}
              {...getStyles('rangeTimeInput', {
                className: timePickerProps?.className,
                style: timePickerProps?.style,
              })}
              onChange={handleStartTimeChange}
              onKeyDown={handleTimeInputKeyDown}
              size={size}
              data-mantine-stop-propagation={__stopPropagation || undefined}
              hoursRef={startTimePickerRefMerged}
            />

            <TimePicker
              value={endTimeValue}
              withSeconds={withSeconds}
              unstyled={unstyled}
              min={endMinTime}
              max={endMaxTime}
              {...endTimePickerProps}
              {...getStyles('rangeTimeInput', {
                className: endTimePickerProps?.className,
                style: endTimePickerProps?.style,
              })}
              onChange={handleEndTimeChange}
              onKeyDown={handleTimeInputKeyDown}
              size={size}
              data-mantine-stop-propagation={__stopPropagation || undefined}
              hoursRef={endTimePickerRefMerged}
            />

            <ActionIcon
              variant="default"
              size={`input-${size || 'sm'}`}
              {...getStyles('submitButton', {
                className: submitButtonProps?.className,
                style: submitButtonProps?.style,
              })}
              unstyled={unstyled}
              data-mantine-stop-propagation={__stopPropagation || undefined}
              // eslint-disable-next-line react/no-children-prop
              children={<CheckIcon size="30%" />}
              {...submitButtonProps}
              onClick={(event) => {
                submitButtonProps?.onClick?.(event);
                onSubmit?.();
              }}
            />
          </div>
        </>
      )}
    </Box>
  );
});

InlineDateTimePicker.classes = { ...classes, ...DatePicker.classes };
InlineDateTimePicker.displayName = '@mantine/dates/InlineDateTimePicker';
