import dayjs from 'dayjs';
import React, { forwardRef, useState, useRef } from 'react';
import {
  useComponentDefaultProps,
  CheckIcon,
  ActionIcon,
  ActionIconProps,
  Selectors,
  DefaultProps,
} from '@mantine/core';
import { useDisclosure, useUncontrolled, useDidUpdate } from '@mantine/hooks';
import { assignTime } from '../../utils';
import { TimeInput, TimeInputProps } from '../TimeInput';
import { pickCalendarProps, CalendarBaseProps, CalendarSettings } from '../Calendar';
import { DatePicker } from '../DatePicker';
import {
  PickerInputBase,
  DateInputSharedProps,
  PickerInputBaseStylesNames,
} from '../PickerInputBase';
import { DateValue } from '../../types';
import { useDatesContext } from '../DatesProvider';
import useStyles from './DateTimePicker.styles';

export type DateTimePickerStylesNames = PickerInputBaseStylesNames | Selectors<typeof useStyles>;

export interface DateTimePickerProps
  extends DefaultProps<DateTimePickerStylesNames>,
    Omit<DateInputSharedProps, 'classNames' | 'styles' | 'closeOnChange'>,
    Omit<CalendarBaseProps, 'defaultDate'>,
    CalendarSettings {
  /** Dayjs format to display input value, "DD/MM/YYYY HH:mm" by default  */
  valueFormat?: string;

  /** Controlled component value */
  value?: DateValue;

  /** Default value for uncontrolled component */
  defaultValue?: DateValue;

  /** Called when value changes */
  onChange?(value: DateValue): void;

  /** TimeInput component props */
  timeInputProps?: TimeInputProps;

  /** Props added to submit button */
  submitButtonProps?: ActionIconProps & React.ComponentPropsWithoutRef<'button'>;

  /** Determines whether seconds input should be rendered */
  withSeconds?: boolean;
}

const defaultProps: Partial<DateTimePickerProps> = {};

export const DateTimePicker = forwardRef<HTMLButtonElement, DateTimePickerProps>((props, ref) => {
  const {
    value,
    defaultValue,
    onChange,
    valueFormat,
    locale,
    classNames,
    styles,
    unstyled,
    timeInputProps,
    submitButtonProps,
    withSeconds,
    level,
    defaultLevel,
    ...rest
  } = useComponentDefaultProps('DateTimePicker', defaultProps, props);

  const _valueFormat = valueFormat || (withSeconds ? 'DD/MM/YYYY HH:mm:ss' : 'DD/MM/YYYY HH:mm');

  const { classes, cx } = useStyles(null, { name: 'DateTimePicker', classNames, styles, unstyled });

  const timeInputRef = useRef<HTMLInputElement>();

  const {
    calendarProps: { allowSingleDateInRange, ...calendarProps },
    others,
  } = pickCalendarProps(rest);

  const ctx = useDatesContext();
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
  });

  const formatTime = (dateValue: Date) =>
    dateValue ? dayjs(dateValue).format(withSeconds ? 'HH:mm:ss' : 'HH:mm') : '';

  const [timeValue, setTimeValue] = useState(formatTime(_value));
  const [currentLevel, setCurrentLevel] = useState(level || defaultLevel || 'month');

  const [dropdownOpened, dropdownHandlers] = useDisclosure(false);
  const formattedValue = _value
    ? dayjs(_value).locale(ctx.getLocale(locale)).format(_valueFormat)
    : '';

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    timeInputProps?.onChange?.(event);
    const val = event.currentTarget.value;
    setTimeValue(val);

    if (val) {
      const [hours, minutes, seconds] = val.split(':').map(Number);
      const timeDate = new Date();
      timeDate.setHours(hours);
      timeDate.setMinutes(minutes);
      seconds !== undefined && timeDate.setSeconds(seconds);
      setValue(assignTime(timeDate, _value || new Date()));
    }
  };

  const handleDateChange = (date: Date) => {
    setValue(assignTime(_value, date));
    timeInputRef.current?.focus();
  };

  const handleTimeInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    timeInputProps?.onKeyDown?.(event);

    if (event.key === 'Enter') {
      event.preventDefault();
      dropdownHandlers.close();
    }
  };

  useDidUpdate(() => {
    if (!dropdownOpened) {
      setTimeValue(formatTime(_value));
    }
  }, [_value, dropdownOpened]);

  return (
    <PickerInputBase
      formattedValue={formattedValue}
      dropdownOpened={dropdownOpened}
      dropdownHandlers={dropdownHandlers}
      classNames={classNames}
      styles={styles}
      unstyled={unstyled}
      __staticSelector="DateTimePicker"
      ref={ref}
      onClear={() => setValue(null)}
      shouldClear={!!_value}
      value={_value}
      type="default"
      {...others}
    >
      <DatePicker
        {...calendarProps}
        type="default"
        value={_value}
        defaultDate={_value}
        onChange={handleDateChange}
        locale={locale}
        classNames={classNames}
        styles={styles}
        unstyled={unstyled}
        __staticSelector="DateTimePicker"
        level={level}
        defaultLevel={defaultLevel}
        onLevelChange={(_level) => {
          setCurrentLevel(_level);
          calendarProps.onLevelChange?.(_level);
        }}
      />

      {currentLevel === 'month' && (
        <div className={classes.timeWrapper}>
          <TimeInput
            value={timeValue}
            withSeconds={withSeconds}
            ref={timeInputRef}
            unstyled={unstyled}
            {...timeInputProps}
            className={cx(classes.timeInput, timeInputProps?.className)}
            onChange={handleTimeChange}
            onKeyDown={handleTimeInputKeyDown}
          />

          <ActionIcon<'button'>
            variant="default"
            size={36}
            onClick={(event) => {
              submitButtonProps?.onClick?.(event);
              dropdownHandlers.close();
            }}
            // eslint-disable-next-line react/no-children-prop
            children={<CheckIcon width={12} />}
            unstyled={unstyled}
            {...submitButtonProps}
          />
        </div>
      )}
    </PickerInputBase>
  );
});

DateTimePicker.displayName = '@mantine/dates/DateTimePicker';
