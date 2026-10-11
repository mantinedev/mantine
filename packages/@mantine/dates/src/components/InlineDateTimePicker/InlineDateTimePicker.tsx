import dayjs from 'dayjs';
import { useRef, useState } from 'react';
import {
  Button,
  ButtonProps,
  Box,
  BoxProps,
  ElementProps,
  Factory,
  genericFactory,
  MantineSize,
  StylesApiProps,
  Text,
  useController,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useCallbackRef, useIsomorphicEffect, useLatestRef, useMergedRef } from '@mantine/hooks';
import { useUncontrolledDates } from '../../hooks';
import { DateStringValue, DateValue } from '../../types';
import { assignTime, clampDate, getDefaultClampedDate } from '../../utils';
import { pickCalendarProps } from '../Calendar';
import { clampLevel } from '../Calendar/clamp-level/clamp-level';
import { getPresetsClasses, Presets } from '../Calendar/Presets/Presets';
import { DatePicker, DatePickerBaseProps, DatePickerStylesNames } from '../DatePicker';
import { useDatesContext } from '../DatesProvider';
import { getMaxTime, getMinTime } from '../DateTimePicker/get-min-max-time/get-min-max-time';
import { useDatesDropdownContext } from '../PickerInputBase/DatesDropdown.context';
import { isIncompleteRange } from '../PickerInputBase/use-dropdown-draft/use-dropdown-draft';
import { TimeInput } from '../TimeInput';
import { TimePicker, TimePickerProps } from '../TimePicker/TimePicker';
import { TimePickerField } from '../TimePicker/TimePicker.types';
import {
  useInlineDateTimePicker,
  InlineDateTimePickerController,
} from './use-inline-date-time-picker/use-inline-date-time-picker';
import { TimeEntryTarget } from './use-inline-date-time-picker/use-time-entry';
import moduleClasses from './InlineDateTimePicker.module.css';

const classes = { ...moduleClasses, ...getPresetsClasses('datePickerRoot') };

type TimePickerPassedProps = Omit<TimePickerProps, 'defaultValue' | 'value' | 'controller'>;

const toNativeTime = (time: string | undefined) => (time ? time.slice(0, 5) : '');

const getNativePlaceholder = (props: TimePickerPassedProps | undefined) =>
  `${props?.hoursPlaceholder ?? '--'}:${props?.minutesPlaceholder ?? '--'}`;

export type InlineDateTimePickerStylesNames =
  | 'root'
  | 'content'
  | 'timeWrapper'
  | 'timeInput'
  | 'submitButton'
  | 'rangeTimeWrapper'
  | 'rangeTimeInput'
  | 'rangeInfo'
  | DatePickerStylesNames;

export interface InlineDateTimePickerProps<Type extends 'default' | 'range' = 'default'>
  extends
    BoxProps,
    DatePickerBaseProps<Type>,
    StylesApiProps<InlineDateTimePickerFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
  /** Default time value in `HH:mm` or `HH:mm:ss` format. Assigned to time when date is selected. @category state */
  defaultTimeValue?: string;

  /** Props passed down to `TimePicker` component */
  timePickerProps?: Omit<TimePickerProps, 'defaultValue' | 'value' | 'controller'>;

  /** Props passed down to the end time `TimePicker` component in range mode */
  endTimePickerProps?: Omit<TimePickerProps, 'defaultValue' | 'value' | 'controller'>;

  /** Props passed down to the submit button */
  submitButtonProps?: ButtonProps & ElementProps<'button'>;

  /** Label of the submit button, overrides `submitButtonLabel` from `DatesProvider` settings @default 'Save' @category appearance */
  submitButtonLabel?: string;

  /** Determines whether the seconds input should be displayed @default false @category appearance */
  withSeconds?: boolean;

  /** Called when the submit button is clicked @category behavior */
  onSubmit?: () => void;

  /** `dayjs` format for range display, or a function that receives the value as a `YYYY-MM-DD HH:mm:ss` string and returns the formatted value @default "DD/MM/YYYY HH:mm" @category appearance */
  valueFormat?: string | ((date: DateStringValue) => string);

  /** Separator between range values, overrides `labelSeparator` from `DatesProvider` settings @default '–' @category appearance */
  labelSeparator?: string;

  /** Component size @default 'sm' @category appearance */
  size?: MantineSize;

  /** Min date @category behavior */
  minDate?: DateStringValue | Date;

  /** Max date @category behavior */
  maxDate?: DateStringValue | Date;

  /** Controller returned by the `useInlineDateTimePicker` hook. When provided, the displayed date and level and the time inputs are owned by the controller and `date`, `defaultDate`, `onDateChange`, `level`, `defaultLevel`, `onLevelChange` and `defaultTimeValue` props are ignored @category state */
  controller?: InlineDateTimePickerController;

  /** @internal Overrides the static selector used for class names */
  __staticSelector?: string;
}

export type InlineDateTimePickerFactory = Factory<{
  props: InlineDateTimePickerProps;
  ref: HTMLDivElement;
  stylesNames: InlineDateTimePickerStylesNames;
  signature: <Type extends 'default' | 'range' = 'default'>(
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
    submitButtonLabel,
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
    __staticSelector,
    fullWidth,
    controller: controllerProp,
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
  const dropdown = useDatesDropdownContext();
  const _withSeconds = withSeconds || timePickerProps?.withSeconds;
  const _valueFormat = valueFormat || (_withSeconds ? 'DD/MM/YYYY HH:mm:ss' : 'DD/MM/YYYY HH:mm');
  const _labelSeparator = ctx.getLabelSeparator(labelSeparator);
  const isRange = (type as string) === 'range';

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

  const submitDisabled = isIncompleteRange(type, _value);

  const formatTime = (dateValue: DateStringValue | null) =>
    dateValue ? dayjs(dateValue).format(_withSeconds ? 'HH:mm:ss' : 'HH:mm') : '';

  const _defaultDate = isRange
    ? (Array.isArray(_value) ? _value[0] : null) || defaultDate
    : (_value as DateStringValue | null) || defaultDate;

  const minLevel = calendarProps.minLevel || 'month';

  const controller = useController(useInlineDateTimePicker, controllerProp, {
    date: calendarProps.date,
    defaultDate: _defaultDate || getDefaultClampedDate({ maxDate, minDate }),
    onDateChange: calendarProps.onDateChange,
    level: level ? clampLevel(level, minLevel, calendarProps.maxLevel) : undefined,
    defaultLevel: clampLevel(defaultLevel, minLevel, calendarProps.maxLevel),
    onLevelChange: calendarProps.onLevelChange,
    defaultTimeValue,
  });

  const withTimeInputs = clampLevel(controller.level, minLevel, calendarProps.maxLevel) === 'month';
  const [mountFocus] = useState(controller.getPendingTimeFocus);

  const getAutofocusProps = (target: TimeEntryTarget, field: TimePickerField) =>
    mountFocus?.target === target && mountFocus.field === field
      ? { 'data-autofocus': true }
      : undefined;

  const getFieldProps = (target: TimeEntryTarget, props: typeof timePickerProps) => ({
    hoursInputProps: { ...props?.hoursInputProps, ...getAutofocusProps(target, 'hours') },
    minutesInputProps: { ...props?.minutesInputProps, ...getAutofocusProps(target, 'minutes') },
    secondsInputProps: { ...props?.secondsInputProps, ...getAutofocusProps(target, 'seconds') },
    amPmSelectProps: { ...props?.amPmSelectProps, ...getAutofocusProps(target, 'amPm') },
  });
  const fallbackTime = controller.getTime() || controller.defaultTimeValue || '';
  const fallbackEndTime = controller.getEndTime() || controller.defaultTimeValue || '';

  const timeRefs = {
    hours: useMergedRef(controller.timeFieldRefs.time.hours, timePickerProps?.hoursRef),
    minutes: useMergedRef(controller.timeFieldRefs.time.minutes, timePickerProps?.minutesRef),
    seconds: useMergedRef(controller.timeFieldRefs.time.seconds, timePickerProps?.secondsRef),
    amPm: useMergedRef(controller.timeFieldRefs.time.amPm, timePickerProps?.amPmRef),
  };

  const endTimeRefs = {
    hours: useMergedRef(controller.timeFieldRefs.endTime.hours, endTimePickerProps?.hoursRef),
    minutes: useMergedRef(controller.timeFieldRefs.endTime.minutes, endTimePickerProps?.minutesRef),
    seconds: useMergedRef(controller.timeFieldRefs.endTime.seconds, endTimePickerProps?.secondsRef),
    amPm: useMergedRef(controller.timeFieldRefs.endTime.amPm, endTimePickerProps?.amPmRef),
  };

  const nativeTimeRef = useMergedRef(timeRefs.hours, timeRefs.minutes, timeRefs.seconds);
  const nativeEndTimeRef = useMergedRef(
    endTimeRefs.hours,
    endTimeRefs.minutes,
    endTimeRefs.seconds
  );

  const isSheet = dropdown.layout === 'sheet';
  const withNativeTimeInput = isSheet && !_withSeconds;

  const handleDefaultDateChange = (date: DateValue) => {
    if (date) {
      setValue(assignTime(clampDate(minDate, maxDate, date), fallbackTime));
    }
    if (!isSheet) {
      controller.focusTime('hours');
    }
  };

  const handleRangeDateChange = (dates: any) => {
    const [start, end] = dates;
    const newStart = start ? assignTime(clampDate(minDate, maxDate, start), fallbackTime) : null;
    const newEnd = end ? assignTime(clampDate(minDate, maxDate, end), fallbackEndTime) : null;
    setValue([newStart, newEnd] as any);

    if (start && end && !isSheet) {
      controller.focusTime('hours');
    }
  };

  const handleDateChange = (date: any) => {
    if (isRange) {
      handleRangeDateChange(date);
    } else {
      handleDefaultDateChange(date);
    }
  };

  const valueRef = useLatestRef(_value);

  const applyTime = useCallbackRef((timeString: string) => {
    const current = valueRef.current;

    if (!timeString) {
      return;
    }

    if (isRange && Array.isArray(current)) {
      if (current[0]) {
        const next = [assignTime(current[0], timeString), current[1]];
        valueRef.current = next as any;
        setValue(next as any);
      }
    } else if (current) {
      const next = assignTime(current as DateStringValue, timeString);
      valueRef.current = next as any;
      setValue(next as any);
    }
  });

  const applyEndTime = useCallbackRef((timeString: string) => {
    const current = valueRef.current;

    if (timeString && isRange && Array.isArray(current) && current[1]) {
      const next = [current[0], assignTime(current[1], timeString)];
      valueRef.current = next as any;
      setValue(next as any);
    }
  });

  const handleStartTimeChange = (timeString: string) => {
    timePickerProps?.onChange?.(timeString);
    controller.setTime(timeString);
  };

  const handleEndTimeChange = (timeString: string) => {
    endTimePickerProps?.onChange?.(timeString);
    controller.setEndTime(timeString);
  };

  const handlePresetSelect = (val: any) => {
    const first = Array.isArray(val) ? val[0] : val;
    setValue(val);
    first && controller.setDate(first);
    controller.setLevel('month');
  };

  const handleSubmit = () => {
    if (!submitDisabled) {
      onSubmit?.();
    }
  };

  const handleTimeInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit();
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

  const instanceRef = useRef({});
  const valueTime = formatTime(
    isRange ? (Array.isArray(_value) ? _value[0] : null) : (_value as DateStringValue | null)
  );
  const valueEndTime = isRange && Array.isArray(_value) ? formatTime(_value[1]) : '';

  useIsomorphicEffect(
    () =>
      controller.registerTimePicker({
        instance: instanceRef.current,
        valueTime,
        valueEndTime,
        applyTime,
        applyEndTime,
      }),
    [controller.registerTimePicker, valueTime, valueEndTime]
  );

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

  const renderNativeTimeInput = ({
    time,
    pickerProps,
    selector,
    minTime,
    maxTime,
    onTimeChange,
    inputRef,
    target,
  }: {
    time: string;
    pickerProps: TimePickerPassedProps | undefined;
    selector: 'timeInput' | 'rangeTimeInput';
    minTime: string | undefined;
    maxTime: string | undefined;
    onTimeChange: (timeString: string) => void;
    inputRef: React.Ref<HTMLInputElement>;
    target: TimeEntryTarget;
  }) => (
    <TimeInput
      ref={inputRef}
      data-autofocus={mountFocus?.target === target || undefined}
      value={toNativeTime(time)}
      placeholder={getNativePlaceholder(pickerProps)}
      minTime={minTime}
      maxTime={maxTime}
      size={size}
      unstyled={unstyled}
      disabled={pickerProps?.disabled}
      readOnly={pickerProps?.readOnly}
      aria-label={pickerProps?.['aria-label']}
      aria-describedby={pickerProps?.['aria-describedby']}
      id={pickerProps?.id}
      name={pickerProps?.name}
      {...getStyles(selector, { className: pickerProps?.className, style: pickerProps?.style })}
      onChange={(event) => onTimeChange(event.currentTarget.value)}
      onKeyDown={handleTimeInputKeyDown}
    />
  );

  const submitButton = (
    <Button
      size={size}
      data-layout={dropdown.layout}
      unstyled={unstyled}
      data-mantine-stop-propagation={dropdown.stopPropagation || undefined}
      {...submitButtonProps}
      disabled={submitDisabled || submitButtonProps?.disabled}
      {...getStyles('submitButton', {
        className: submitButtonProps?.className,
        style: submitButtonProps?.style,
      })}
      onClick={(event) => {
        submitButtonProps?.onClick?.(event);
        handleSubmit();
      }}
    >
      {ctx.getSubmitButtonLabel(submitButtonLabel)}
    </Button>
  );

  return (
    <Box {...getStyles('root', { className, style })} {...others} ref={props.ref as any}>
      <Presets
        presets={presets}
        onPresetSelect={handlePresetSelect}
        getStyles={getStyles}
        rootSelector="datePickerRoot"
        size={size}
      >
        <div {...getStyles('content')}>
          <DatePicker
            fullWidth={fullWidth ?? true}
            {...calendarProps}
            maxDate={maxDate}
            minDate={minDate}
            size={size}
            variant={variant}
            type={type as any}
            value={_value as any}
            controller={controller}
            getDayProps={
              mountFocus
                ? (date) => ({ ...calendarProps.getDayProps?.(date), 'data-autofocus': undefined })
                : calendarProps.getDayProps
            }
            onChange={handleDateChange}
            locale={locale}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            unstyled={unstyled}
            __staticSelector={_staticSelector}
            allowSingleDateInRange={allowSingleDateInRange}
            attributes={attributes}
          />

          {withTimeInputs && !isRange && (
            <div {...getStyles('timeWrapper')} data-layout={dropdown.layout}>
              {withNativeTimeInput ? (
                renderNativeTimeInput({
                  time: controller.time,
                  pickerProps: timePickerProps,
                  selector: 'timeInput',
                  inputRef: nativeTimeRef,
                  target: 'time',
                  minTime: startMinTime,
                  maxTime: startMaxTime,
                  onTimeChange: handleStartTimeChange,
                })
              ) : (
                <TimePicker
                  value={controller.time}
                  withSeconds={_withSeconds}
                  unstyled={unstyled}
                  min={startMinTime}
                  max={startMaxTime}
                  {...timePickerProps}
                  {...getStyles('timeInput', {
                    className: timePickerProps?.className,
                    style: timePickerProps?.style,
                  })}
                  {...getFieldProps('time', timePickerProps)}
                  onChange={handleStartTimeChange}
                  onKeyDown={handleTimeInputKeyDown}
                  size={size}
                  data-mantine-stop-propagation={dropdown.stopPropagation || undefined}
                  hoursRef={timeRefs.hours}
                  minutesRef={timeRefs.minutes}
                  secondsRef={timeRefs.seconds}
                  amPmRef={timeRefs.amPm}
                />
              )}

              {submitButton}
            </div>
          )}

          {withTimeInputs && isRange && (
            <>
              <Text {...getStyles('rangeInfo')} aria-live="polite">
                {getFormattedRange()}
              </Text>

              <div {...getStyles('rangeTimeWrapper')} data-layout={dropdown.layout}>
                {withNativeTimeInput ? (
                  <>
                    {renderNativeTimeInput({
                      time: controller.time,
                      pickerProps: timePickerProps,
                      selector: 'rangeTimeInput',
                      inputRef: nativeTimeRef,
                      target: 'time',
                      minTime: startMinTime,
                      maxTime: startMaxTime,
                      onTimeChange: handleStartTimeChange,
                    })}
                    {renderNativeTimeInput({
                      time: controller.endTime,
                      pickerProps: endTimePickerProps,
                      selector: 'rangeTimeInput',
                      inputRef: nativeEndTimeRef,
                      target: 'endTime',
                      minTime: endMinTime,
                      maxTime: endMaxTime,
                      onTimeChange: handleEndTimeChange,
                    })}
                  </>
                ) : (
                  <>
                    <TimePicker
                      value={controller.time}
                      withSeconds={_withSeconds}
                      unstyled={unstyled}
                      min={startMinTime}
                      max={startMaxTime}
                      {...timePickerProps}
                      {...getStyles('rangeTimeInput', {
                        className: timePickerProps?.className,
                        style: timePickerProps?.style,
                      })}
                      {...getFieldProps('time', timePickerProps)}
                      onChange={handleStartTimeChange}
                      onKeyDown={handleTimeInputKeyDown}
                      size={size}
                      data-mantine-stop-propagation={dropdown.stopPropagation || undefined}
                      hoursRef={timeRefs.hours}
                      minutesRef={timeRefs.minutes}
                      secondsRef={timeRefs.seconds}
                      amPmRef={timeRefs.amPm}
                    />

                    <TimePicker
                      value={controller.endTime}
                      withSeconds={_withSeconds}
                      unstyled={unstyled}
                      min={endMinTime}
                      max={endMaxTime}
                      {...endTimePickerProps}
                      {...getStyles('rangeTimeInput', {
                        className: endTimePickerProps?.className,
                        style: endTimePickerProps?.style,
                      })}
                      {...getFieldProps('endTime', endTimePickerProps)}
                      onChange={handleEndTimeChange}
                      onKeyDown={handleTimeInputKeyDown}
                      size={size}
                      data-mantine-stop-propagation={dropdown.stopPropagation || undefined}
                      hoursRef={endTimeRefs.hours}
                      minutesRef={endTimeRefs.minutes}
                      secondsRef={endTimeRefs.seconds}
                      amPmRef={endTimeRefs.amPm}
                    />
                  </>
                )}

                {submitButton}
              </div>
            </>
          )}
        </div>
      </Presets>
    </Box>
  );
});

InlineDateTimePicker.classes = { ...classes, ...DatePicker.classes };
InlineDateTimePicker.displayName = '@mantine/dates/InlineDateTimePicker';
