import dayjs from 'dayjs';
import { useRef, useState } from 'react';
import {
  ActionIcon,
  ActionIconProps,
  BoxProps,
  CheckIcon,
  factory,
  Factory,
  InputVariant,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useDidUpdate, useDisclosure, useMergedRef } from '@mantine/hooks';
import { useUncontrolledDates } from '../../hooks';
import { CalendarLevel, DateValue } from '../../types';
import { assignTime, clampDate } from '../../utils';
import {
  CalendarBaseProps,
  CalendarSettings,
  CalendarStylesNames,
  pickCalendarProps,
} from '../Calendar';
import { DatePicker } from '../DatePicker';
import { useDatesContext } from '../DatesProvider';
import {
  DateInputSharedProps,
  PickerInputBase,
  PickerInputBaseStylesNames,
} from '../PickerInputBase';
import { TimePicker, TimePickerProps } from '../TimePicker/TimePicker';
import { getMaxTime, getMinTime } from './get-min-max-time/get-min-max-time';
import classes from './DateTimePicker.module.css';

export type DateTimePickerStylesNames =
  | 'timeWrapper'
  | 'timeInput'
  | 'submitButton'
  | PickerInputBaseStylesNames
  | CalendarStylesNames;

export interface DateTimePickerProps
  extends BoxProps,
    Omit<
      DateInputSharedProps,
      'classNames' | 'styles' | 'closeOnChange' | 'size' | 'valueFormatter'
    >,
    Omit<CalendarBaseProps, 'defaultDate'>,
    Omit<CalendarSettings, 'onYearMouseEnter' | 'onMonthMouseEnter' | 'hasNextLevel'>,
    StylesApiProps<DateTimePickerFactory> {
  /** Dayjs format to display input value, "DD/MM/YYYY HH:mm" by default  */
  valueFormat?: string;

  /** Controlled component value */
  value?: DateValue;

  /** Default value for uncontrolled component */
  defaultValue?: DateValue;

  /** Called when value changes */
  onChange?: (value: DateValue) => void;

  /** Props passed down to `TimePicker` component */
  timePickerProps?: Omit<TimePickerProps, 'defaultValue' | 'value'>;

  /** Props passed down to the submit button */
  submitButtonProps?: ActionIconProps & React.ComponentPropsWithoutRef<'button'>;

  /** Determines whether seconds input should be rendered */
  withSeconds?: boolean;

  /** Max level that user can go up to (decade, year, month), defaults to decade */
  maxLevel?: CalendarLevel;
}

export type DateTimePickerFactory = Factory<{
  props: DateTimePickerProps;
  ref: HTMLButtonElement;
  stylesNames: DateTimePickerStylesNames;
  variant: InputVariant;
}>;

const defaultProps: Partial<DateTimePickerProps> = {
  dropdownType: 'popover',
};

export const DateTimePicker = factory<DateTimePickerFactory>((_props, ref) => {
  const props = useProps('DateTimePicker', defaultProps, _props);
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
    submitButtonProps,
    withSeconds,
    level,
    defaultLevel,
    size,
    variant,
    dropdownType,
    vars,
    minDate,
    maxDate,
    ...rest
  } = props;

  const getStyles = useStyles<DateTimePickerFactory>({
    name: 'DateTimePicker',
    classes,
    props,
    classNames,
    styles,
    unstyled,
    vars,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<DateTimePickerFactory>({
    classNames,
    styles,
    props,
  });

  const _valueFormat = valueFormat || (withSeconds ? 'DD/MM/YYYY HH:mm:ss' : 'DD/MM/YYYY HH:mm');

  const timePickerRef = useRef<HTMLInputElement>(null);
  const timePickerRefMerged = useMergedRef(timePickerRef, timePickerProps?.hoursRef);

  const {
    calendarProps: { allowSingleDateInRange, ...calendarProps },
    others,
  } = pickCalendarProps(rest);

  const ctx = useDatesContext();
  const [_value, setValue] = useUncontrolledDates({
    type: 'default',
    value,
    defaultValue,
    onChange,
  });

  const formatTime = (dateValue: Date) =>
    dateValue ? dayjs(dateValue).format(withSeconds ? 'HH:mm:ss' : 'HH:mm') : '';

  const [timeValue, setTimeValue] = useState(formatTime(_value!));
  const [currentLevel, setCurrentLevel] = useState(level || defaultLevel || 'month');

  const [dropdownOpened, dropdownHandlers] = useDisclosure(false);
  const formattedValue = _value
    ? dayjs(_value).locale(ctx.getLocale(locale)).format(_valueFormat)
    : '';

  const handleTimeChange = (timeString: string) => {
    timePickerProps?.onChange?.(timeString);
    setTimeValue(timeString);

    if (timeString) {
      const [hours, minutes, seconds] = timeString.split(':').map(Number);
      const timeDate = new Date();
      timeDate.setHours(hours);
      timeDate.setMinutes(minutes);
      timeDate.setSeconds(seconds || 0);
      timeDate.setMilliseconds(0);
      setValue(assignTime(timeDate, _value || new Date()));
    }
  };

  const handleDateChange = (date: DateValue) => {
    if (date) {
      setValue(clampDate(minDate, maxDate, assignTime(_value, date)));
    }
    timePickerRef.current?.focus();
  };

  const handleTimeInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      dropdownHandlers.close();
    }
  };

  useDidUpdate(() => {
    if (!dropdownOpened) {
      setTimeValue(formatTime(_value!));
    }
  }, [_value, dropdownOpened]);

  useDidUpdate(() => {
    if (dropdownOpened) {
      setCurrentLevel('month');
    }
  }, [dropdownOpened]);

  const __stopPropagation = dropdownType === 'popover';

  const handleDropdownClose = () => {
    const clamped = clampDate(minDate, maxDate, _value);
    if (_value && _value.toISOString() !== clamped.toISOString()) {
      setValue(clampDate(minDate, maxDate, _value));
    }
  };

  return (
    <PickerInputBase
      formattedValue={formattedValue}
      dropdownOpened={!rest.disabled ? dropdownOpened : false}
      dropdownHandlers={dropdownHandlers}
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      unstyled={unstyled}
      ref={ref}
      onClear={() => setValue(null)}
      shouldClear={!!_value}
      value={_value}
      size={size!}
      variant={variant}
      dropdownType={dropdownType}
      {...others}
      type="default"
      __staticSelector="DateTimePicker"
      onDropdownClose={handleDropdownClose}
    >
      <DatePicker
        {...calendarProps}
        maxDate={maxDate}
        minDate={minDate}
        size={size}
        variant={variant}
        type="default"
        value={_value}
        defaultDate={_value!}
        onChange={handleDateChange}
        locale={locale}
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        __staticSelector="DateTimePicker"
        __stopPropagation={__stopPropagation}
        level={level}
        defaultLevel={defaultLevel}
        onLevelChange={(_level) => {
          setCurrentLevel(_level);
          calendarProps.onLevelChange?.(_level);
        }}
      />

      {currentLevel === 'month' && (
        <div {...getStyles('timeWrapper')}>
          <TimePicker
            value={timeValue}
            withSeconds={withSeconds}
            unstyled={unstyled}
            min={getMinTime({ minDate, value: _value })}
            max={getMaxTime({ maxDate, value: _value })}
            {...timePickerProps}
            {...getStyles('timeInput', {
              className: timePickerProps?.className,
              style: timePickerProps?.style,
            })}
            onChange={handleTimeChange}
            onKeyDown={handleTimeInputKeyDown}
            size={size}
            data-mantine-stop-propagation={__stopPropagation || undefined}
            hoursRef={timePickerRefMerged}
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
              dropdownHandlers.close();
              handleDropdownClose();
            }}
          />
        </div>
      )}
    </PickerInputBase>
  );
});

DateTimePicker.classes = { ...classes, ...PickerInputBase.classes, ...DatePicker.classes };
DateTimePicker.displayName = '@mantine/dates/DateTimePicker';
