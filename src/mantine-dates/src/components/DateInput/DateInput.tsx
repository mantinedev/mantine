import React, { useEffect, useState } from 'react';
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  Factory,
  InputVariant,
  __BaseInputProps,
  __InputStylesNames,
  PopoverProps,
  useInputProps,
  Input,
  Popover,
  CloseButton,
  MantineSize,
} from '@mantine/core';
import { useDidUpdate } from '@mantine/hooks';
import dayjs from 'dayjs';
import { Calendar, CalendarBaseProps, CalendarStylesNames, pickCalendarProps } from '../Calendar';
import { DecadeLevelSettings } from '../DecadeLevel';
import { YearLevelSettings } from '../YearLevel';
import { MonthLevelSettings } from '../MonthLevel';
import { HiddenDatesInput } from '../HiddenDatesInput';
import { assignTime } from '../../utils';
import { DateValue, CalendarLevel } from '../../types';
import { useDatesContext } from '../DatesProvider';
import { isDateValid } from './is-date-valid/is-date-valid';
import { dateStringParser } from './date-string-parser/date-string-parser';
import { useUncontrolledDates } from '../../hooks';

export type DateInputStylesNames = __InputStylesNames | CalendarStylesNames;

export interface DateInputProps
  extends BoxProps,
    Omit<__BaseInputProps, 'size'>,
    CalendarBaseProps,
    DecadeLevelSettings,
    YearLevelSettings,
    MonthLevelSettings,
    StylesApiProps<DateInputFactory>,
    ElementProps<'input', 'size' | 'value' | 'defaultValue' | 'onChange'> {
  /** Parses user input to convert it to Date object */
  dateParser?: (value: string) => Date | null;

  /** Value for controlled component */
  value?: DateValue;

  /** Default value for uncontrolled component */
  defaultValue?: DateValue;

  /** Called when value changes */
  onChange?: (value: DateValue) => void;

  /** Props added to Popover component */
  popoverProps?: Partial<Omit<PopoverProps, 'children'>>;

  /** Determines whether input value can be cleared, adds clear button to right section, false by default */
  clearable?: boolean;

  /** Props added to clear button */
  clearButtonProps?: React.ComponentPropsWithoutRef<'button'>;

  /** Dayjs format to display input value, "MMMM D, YYYY" by default  */
  valueFormat?: string;

  /** Determines whether input value should be reverted to last known valid value on blur, true by default */
  fixOnBlur?: boolean;

  /** Determines whether value can be deselected when the user clicks on the selected date in the calendar (only when clearable prop is set), defaults to true if clearable prop is set, false otherwise */
  allowDeselect?: boolean;

  /** Determines whether time (hours, minutes, seconds and milliseconds) should be preserved when new date is picked, true by default */
  preserveTime?: boolean;

  /** Max level that user can go up to (decade, year, month), defaults to decade */
  maxLevel?: CalendarLevel;

  /** Initial level displayed to the user (decade, year, month), used for uncontrolled component */
  defaultLevel?: CalendarLevel;

  /** Current level displayed to the user (decade, year, month), used for controlled component */
  level?: CalendarLevel;

  /** Called when level changes */
  onLevelChange?: (level: CalendarLevel) => void;
}

export type DateInputFactory = Factory<{
  props: DateInputProps;
  ref: HTMLInputElement;
  stylesNames: DateInputStylesNames;
  variant: InputVariant;
}>;

const defaultProps: Partial<DateInputProps> = {
  valueFormat: 'MMMM D, YYYY',
  fixOnBlur: true,
  preserveTime: true,
};

export const DateInput = factory<DateInputFactory>((_props, ref) => {
  const props = useInputProps('DateInput', defaultProps, _props);
  const {
    inputProps,
    wrapperProps,
    value,
    defaultValue,
    onChange,
    clearable,
    clearButtonProps,
    popoverProps,
    getDayProps,
    locale,
    valueFormat,
    dateParser,
    minDate,
    maxDate,
    fixOnBlur,
    onFocus,
    onBlur,
    onClick,
    readOnly,
    name,
    form,
    rightSection,
    unstyled,
    classNames,
    styles,
    allowDeselect,
    preserveTime,
    date,
    defaultDate,
    onDateChange,
    ...rest
  } = props;

  const { calendarProps, others } = pickCalendarProps(rest);
  const ctx = useDatesContext();
  const defaultDateParser = (val: string) => {
    const parsedDate = dayjs(val, valueFormat, ctx.getLocale(locale)).toDate();
    return Number.isNaN(parsedDate.getTime())
      ? dateStringParser(val, ctx.getTimezone())
      : parsedDate;
  };

  const _dateParser = dateParser || defaultDateParser;
  const _allowDeselect = allowDeselect !== undefined ? allowDeselect : clearable;

  const formatValue = (val: Date) =>
    val ? dayjs(val).locale(ctx.getLocale(locale)).format(valueFormat) : '';

  const [_value, setValue, controlled] = useUncontrolledDates({
    type: 'default',
    value,
    defaultValue,
    onChange,
  });

  const [_date, setDate] = useUncontrolledDates({
    type: 'default',
    value: date,
    defaultValue: defaultValue || defaultDate,
    onChange: onDateChange as any,
  });

  useEffect(() => {
    if (controlled) {
      setDate(value!);
    }
  }, [controlled, value]);

  const [inputValue, setInputValue] = useState(formatValue(_value!));

  useEffect(() => {
    setInputValue(formatValue(_value!));
  }, [ctx.getLocale(locale)]);

  const [dropdownOpened, setDropdownOpened] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value;
    setInputValue(val);

    if (val.trim() === '' && clearable) {
      setValue(null);
    } else {
      const dateValue = _dateParser(val);
      if (isDateValid({ date: dateValue!, minDate, maxDate })) {
        setValue(dateValue);
        setDate(dateValue);
      }
    }
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
    setDropdownOpened(false);
    fixOnBlur && setInputValue(formatValue(_value!));
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    onFocus?.(event);
    setDropdownOpened(true);
  };

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    onClick?.(event);
    setDropdownOpened(true);
  };

  const _getDayProps = (day: Date) => ({
    ...getDayProps?.(day),
    selected: dayjs(_value!).isSame(day, 'day'),
    onClick: () => {
      const valueWithTime = preserveTime ? assignTime(_value!, day) : day;
      const val =
        clearable && _allowDeselect
          ? dayjs(_value!).isSame(day, 'day')
            ? null
            : valueWithTime
          : valueWithTime;
      setValue(val);
      !controlled && setInputValue(formatValue(val!));
      setDropdownOpened(false);
    },
  });

  const _rightSection =
    rightSection ||
    (clearable && _value && !readOnly ? (
      <CloseButton
        variant="transparent"
        onMouseDown={(event) => event.preventDefault()}
        tabIndex={-1}
        onClick={() => {
          setValue(null);
          !controlled && setInputValue('');
          setDropdownOpened(false);
        }}
        unstyled={unstyled}
        {...clearButtonProps}
      />
    ) : null);

  useDidUpdate(() => {
    value !== undefined && !dropdownOpened && setInputValue(formatValue(value!));
  }, [value]);

  return (
    <>
      <Input.Wrapper {...wrapperProps} __staticSelector="DateInput">
        <Popover
          opened={dropdownOpened}
          trapFocus={false}
          position="bottom-start"
          disabled={readOnly}
          withRoles={false}
          unstyled={unstyled}
          {...popoverProps}
        >
          <Popover.Target>
            <Input
              data-dates-input
              data-read-only={readOnly || undefined}
              autoComplete="off"
              ref={ref}
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onClick={handleInputClick}
              readOnly={readOnly}
              rightSection={_rightSection}
              {...inputProps}
              {...others}
              __staticSelector="DateInput"
            />
          </Popover.Target>
          <Popover.Dropdown onMouseDown={(event) => event.preventDefault()} data-dates-dropdown>
            <Calendar
              __staticSelector="DateInput"
              __timezoneApplied
              {...calendarProps}
              classNames={classNames}
              styles={styles}
              unstyled={unstyled}
              __preventFocus
              minDate={minDate}
              maxDate={maxDate}
              locale={locale}
              getDayProps={_getDayProps}
              size={inputProps.size as MantineSize}
              date={_date!}
              onDateChange={setDate}
            />
          </Popover.Dropdown>
        </Popover>
      </Input.Wrapper>
      <HiddenDatesInput name={name} form={form} value={_value} type="default" />
    </>
  );
});

DateInput.classes = { ...Input.classes, ...Calendar.classes };
DateInput.displayName = '@mantine/dates/DateInput';
