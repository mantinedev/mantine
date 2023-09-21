import dayjs from 'dayjs';
import React, { useRef, useState } from 'react';
import {
  BoxProps,
  StylesApiProps,
  factory,
  useProps,
  useStyles,
  Factory,
  InputVariant,
  ActionIconProps,
  useResolvedStylesApi,
  ActionIcon,
  CheckIcon,
} from '@mantine/core';
import { useDisclosure, useDidUpdate, useMergedRef } from '@mantine/hooks';
import { assignTime, shiftTimezone } from '../../utils';
import { TimeInput, TimeInputProps } from '../TimeInput';
import {
  pickCalendarProps,
  CalendarBaseProps,
  CalendarSettings,
  CalendarStylesNames,
} from '../Calendar';
import { DatePicker } from '../DatePicker';
import {
  PickerInputBase,
  DateInputSharedProps,
  PickerInputBaseStylesNames,
} from '../PickerInputBase';
import { DateValue } from '../../types';
import { useDatesContext } from '../DatesProvider';
import classes from './DateTimePicker.module.css';
import { useUncontrolledDates } from '../../hooks';

export type DateTimePickerStylesNames =
  | 'timeWrapper'
  | 'timeInput'
  | 'submitButton'
  | PickerInputBaseStylesNames
  | CalendarStylesNames;

export interface DateTimePickerProps
  extends BoxProps,
    Omit<DateInputSharedProps, 'classNames' | 'styles' | 'closeOnChange' | 'size'>,
    Omit<CalendarBaseProps, 'defaultDate'>,
    Omit<CalendarSettings, 'onYearMouseEnter' | 'onMonthMouseEnter'>,
    StylesApiProps<DateTimePickerFactory> {
  /** Dayjs format to display input value, "DD/MM/YYYY HH:mm" by default  */
  valueFormat?: string;

  /** Controlled component value */
  value?: DateValue;

  /** Default value for uncontrolled component */
  defaultValue?: DateValue;

  /** Called when value changes */
  onChange?(value: DateValue): void;

  /** TimeInput component props */
  timeInputProps?: TimeInputProps & { ref?: React.ComponentPropsWithRef<'input'>['ref'] };

  /** Props passed down to the submit button */
  submitButtonProps?: ActionIconProps & React.ComponentPropsWithoutRef<'button'>;

  /** Determines whether seconds input should be rendered */
  withSeconds?: boolean;
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
    timeInputProps,
    submitButtonProps,
    withSeconds,
    level,
    defaultLevel,
    size,
    variant,
    dropdownType,
    vars,
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

  const timeInputRef = useRef<HTMLInputElement>();
  const timeInputRefMerged = useMergedRef(timeInputRef, timeInputProps?.ref);

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

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    timeInputProps?.onChange?.(event);
    const val = event.currentTarget.value;
    setTimeValue(val);

    if (val) {
      const [hours, minutes, seconds] = val.split(':').map(Number);
      const timeDate = shiftTimezone('add', new Date(), ctx.getTimezone());
      timeDate.setHours(hours);
      timeDate.setMinutes(minutes);
      timeDate.setSeconds(seconds || 0);
      setValue(assignTime(timeDate, _value || shiftTimezone('add', new Date(), ctx.getTimezone())));
    }
  };

  const handleDateChange = (date: Date) => {
    setValue(assignTime(_value!, date));
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
      setTimeValue(formatTime(_value!));
    }
  }, [_value, dropdownOpened]);

  useDidUpdate(() => {
    if (dropdownOpened) {
      setCurrentLevel('month');
    }
  }, [dropdownOpened]);

  const __stopPropagation = dropdownType === 'popover';

  return (
    <PickerInputBase
      formattedValue={formattedValue}
      dropdownOpened={dropdownOpened}
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
    >
      <DatePicker
        {...calendarProps}
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
        __timezoneApplied
      />

      {currentLevel === 'month' && (
        <div {...getStyles('timeWrapper')}>
          <TimeInput
            value={timeValue}
            withSeconds={withSeconds}
            ref={timeInputRefMerged}
            unstyled={unstyled}
            {...timeInputProps}
            {...getStyles('timeInput', {
              className: timeInputProps?.className,
              style: timeInputProps?.style,
            })}
            onChange={handleTimeChange}
            onKeyDown={handleTimeInputKeyDown}
            size={size}
            data-mantine-stop-propagation={__stopPropagation || undefined}
          />

          <ActionIcon<'button'>
            variant="default"
            size={`input-${size || 'sm'}`}
            {...getStyles('submitButton', {
              className: submitButtonProps?.className,
              style: submitButtonProps?.style,
            })}
            unstyled={unstyled}
            data-mantine-stop-propagation={__stopPropagation || undefined}
            // children prop is required to allow overriding icon with submitButtonProps
            // eslint-disable-next-line react/no-children-prop
            children={<CheckIcon size="30%" />}
            {...submitButtonProps}
            onClick={(event) => {
              submitButtonProps?.onClick?.(event);
              dropdownHandlers.close();
            }}
          />
        </div>
      )}
    </PickerInputBase>
  );
});

DateTimePicker.classes = { ...classes, ...PickerInputBase.classes, ...DatePicker.classes };
DateTimePicker.displayName = '@mantine/dates/DateTimePicker';
