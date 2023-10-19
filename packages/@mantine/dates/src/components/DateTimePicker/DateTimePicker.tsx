import dayjs from 'dayjs';
import React, { useRef, useState } from 'react';
import {
  ActionIcon,
  ActionIconProps,
  BoxProps,
  CheckIcon,
  factory,
  Factory,
  InputVariant,
  MantineComponentStaticProperties,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useDidUpdate, useDisclosure, useMergedRef } from '@mantine/hooks';
import { useUncontrolledDates } from '../../hooks';
import { DatePickerValue, DatesRangeValue, DateValue } from '../../types';
import { assignTime, getDefaultClampedDate, shiftTimezone } from '../../utils';
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
import { TimeInput, TimeInputProps } from '../TimeInput';
import classes from './DateTimePicker.module.css';

export type DateTimePickerStylesNames =
  | 'timeWrapper'
  | 'timeInput'
  | 'submitButton'
  | PickerInputBaseStylesNames
  | CalendarStylesNames;

export type DateTimePickerType = 'default' | 'range';

export interface DateTimePickerProps<Type extends DateTimePickerType = 'default'>
  extends BoxProps,
    Omit<DateInputSharedProps, 'classNames' | 'styles' | 'closeOnChange' | 'size'>,
    Omit<CalendarBaseProps, 'defaultDate'>,
    Omit<CalendarSettings, 'onYearMouseEnter' | 'onMonthMouseEnter'>,
    StylesApiProps<DateTimePickerFactory> {
  /** Dayjs format to display input value, "DD/MM/YYYY HH:mm" by default  */
  valueFormat?: string;

  /** Controlled component value */
  value?: DatePickerValue<Type>;

  /** Picker type: range or default */
  type?: DateTimePickerType | Type;

  /** Allow same day for range selects */
  allowSameDay?: boolean;

  /** Default value for uncontrolled component */
  defaultValue?: DatePickerValue<Type>;

  /** Called when value changes */
  onChange?: (value: DatePickerValue<Type>) => void;

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

type DateTimePickerComponent = (<Type extends DateTimePickerType = 'default'>(
  props: DateTimePickerProps<Type> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => JSX.Element) & {
  displayName?: string;
} & MantineComponentStaticProperties<DateTimePickerFactory>;

export const DateTimePicker: DateTimePickerComponent = factory<DateTimePickerFactory>(
  (_props, ref) => {
    const props = useProps('DateTimePicker', defaultProps, _props);
    const {
      value,
      defaultValue,
      type = 'default',
      allowSameDay = true,
      labelSeparator,
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
      minDate,
      maxDate,
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
    const _labelSeparator = ctx.getLabelSeparator(labelSeparator);

    const [_value, setValue] = useUncontrolledDates({
      type,
      value,
      defaultValue,
      onChange: onChange as any,
    });

    const formatTime = (dateValue: Date) =>
      dateValue ? dayjs(dateValue).format(withSeconds ? 'HH:mm:ss' : 'HH:mm') : '';

    const [timeValue, setTimeValue] = useState<string | string[]>(
      type === 'range' ? [formatTime(_value[0]!), formatTime(_value[1]!)] : formatTime(_value!)
    );
    const [currentLevel, setCurrentLevel] = useState(level || defaultLevel || 'month');

    const [dropdownOpened, dropdownHandlers] = useDisclosure(false);
    const getFormattedValue = (valueForFormat?: DateValue | DatesRangeValue): string => {
      if (Array.isArray(valueForFormat)) {
        if (!valueForFormat[0]) {
          return '';
        }
        return `${getFormattedValue(valueForFormat[0])} ${_labelSeparator} ${getFormattedValue(
          valueForFormat[1]
        )}`;
      }
      if (valueForFormat) {
        return dayjs(valueForFormat).locale(ctx.getLocale(locale)).format(_valueFormat);
      }
      return '';
    };
    const formattedValue = getFormattedValue(_value);

    const handleTimeChange = (
      event: React.ChangeEvent<HTMLInputElement>,
      timeInputType: 'from' | 'until' | 'single'
    ) => {
      timeInputProps?.onChange?.(event);
      const val = event.currentTarget.value;
      setTimeValue(val);

      let timeDate: Date | null = null;
      if (val) {
        const [hours, minutes, seconds] = val.split(':').map(Number);
        timeDate = shiftTimezone('add', new Date(), ctx.getTimezone());
        timeDate.setHours(hours);
        timeDate.setMinutes(minutes);
        timeDate.setSeconds(seconds || 0);
        setValue(
          assignTime(timeDate, _value || shiftTimezone('add', new Date(), ctx.getTimezone()))
        );
      }

      if (timeInputType === 'single') {
        setTimeValue(val);
        if (timeDate) {
          setValue(
            assignTime(timeDate, _value || shiftTimezone('add', new Date(), ctx.getTimezone()))
          );
        }
      } else if (timeInputType === 'from') {
        setTimeValue([val, timeValue[1]]);
        if (timeDate) {
          setValue([
            assignTime(timeDate, _value[0] || shiftTimezone('add', new Date(), ctx.getTimezone())),
            _value[1],
          ]);
        }
      } else if (timeInputType === 'until') {
        setTimeValue([timeValue[0], val]);
        if (timeDate) {
          setValue([
            _value[0],
            assignTime(timeDate, _value[1] || shiftTimezone('add', new Date(), ctx.getTimezone())),
          ]);
        }
      }
    };

    const handleDateChange = (date: DateValue | DatesRangeValue) => {
      if (date) {
        if (Array.isArray(date)) {
          setValue([
            date[0] ? assignTime(_value[0], date[0]) : null,
            date[1] ? assignTime(_value[1], date[1]) : null,
          ]);
        } else {
          setValue(assignTime(_value, date));
        }
      }
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
        if (type === 'range') {
          setTimeValue([formatTime(_value[0]!), formatTime(_value[1]!)]);
        } else {
          setTimeValue(formatTime(_value!));
        }
      }
    }, [_value, dropdownOpened, type]);

    useDidUpdate(() => {
      if (dropdownOpened) {
        setCurrentLevel('month');
      }
    }, [dropdownOpened]);

    const _defaultDate = Array.isArray(_value) ? _value[0] : _value;
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
          allowSameDay={allowSameDay}
          type={type}
          value={_value}
          defaultDate={
            _defaultDate || getDefaultClampedDate({ maxDate, minDate, timezone: ctx.getTimezone() })
          }
          onChange={handleDateChange}
          locale={locale}
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          unstyled={unstyled}
          minDate={minDate}
          maxDate={maxDate}
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
            {type === 'range' ? (
              <>
                <TimeInput
                  value={timeValue[0]}
                  withSeconds={withSeconds}
                  ref={timeInputRefMerged}
                  unstyled={unstyled}
                  {...timeInputProps}
                  {...getStyles('timeInput', {
                    className: timeInputProps?.className,
                    style: timeInputProps?.style,
                  })}
                  onChange={(event) => handleTimeChange(event, 'from')}
                  onKeyDown={handleTimeInputKeyDown}
                  size={size}
                  data-mantine-stop-propagation={__stopPropagation || undefined}
                />
                <TimeInput
                  value={timeValue[1]}
                  withSeconds={withSeconds}
                  unstyled={unstyled}
                  {...timeInputProps}
                  {...getStyles('timeInput', {
                    className: timeInputProps?.className,
                    style: timeInputProps?.style,
                  })}
                  onChange={(event) => handleTimeChange(event, 'until')}
                  onKeyDown={handleTimeInputKeyDown}
                  size={size}
                  data-mantine-stop-propagation={__stopPropagation || undefined}
                />
              </>
            ) : (
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
                onChange={(event) => handleTimeChange(event, 'single')}
                onKeyDown={handleTimeInputKeyDown}
                size={size}
                data-mantine-stop-propagation={__stopPropagation || undefined}
              />
            )}

            <ActionIcon<'button'>
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
              }}
            />
          </div>
        )}
      </PickerInputBase>
    );
  }
) as any;

DateTimePicker.classes = { ...classes, ...PickerInputBase.classes, ...DatePicker.classes };
DateTimePicker.displayName = '@mantine/dates/DateTimePicker';
