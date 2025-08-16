import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import {
  __BaseInputProps,
  __InputStylesNames,
  BoxProps,
  CloseButton,
  ElementProps,
  factory,
  Factory,
  Input,
  InputVariant,
  MantineSize,
  Popover,
  PopoverProps,
  StylesApiProps,
  useInputProps,
} from '@mantine/core';
import { useClickOutside, useDidUpdate } from '@mantine/hooks';
import { useUncontrolledDates } from '../../hooks';
import { CalendarLevel, DateStringValue, DateValue } from '../../types';
import { Calendar, CalendarBaseProps, CalendarStylesNames, pickCalendarProps } from '../Calendar';
import { useDatesContext } from '../DatesProvider';
import { DecadeLevelSettings } from '../DecadeLevel';
import { HiddenDatesInput } from '../HiddenDatesInput';
import { isSameMonth } from '../Month';
import { MonthLevelSettings } from '../MonthLevel';
import { YearLevelSettings } from '../YearLevel';
import { dateStringParser } from './date-string-parser/date-string-parser';
import { isDateValid } from './is-date-valid/is-date-valid';

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
  /** A function to parse user input and convert it to date string value */
  dateParser?: (value: string) => DateStringValue | Date | null;

  /** Controlled component value */
  value?: DateValue | Date;

  /** Uncontrolled component default value */
  defaultValue?: DateValue | Date;

  /** Called when value changes */
  onChange?: (value: DateStringValue | null) => void;

  /** Props passed down to the `Popover` component */
  popoverProps?: Partial<Omit<PopoverProps, 'children'>>;

  /** If set, clear button is displayed in the `rightSection` when the component has value. Ignored if `rightSection` prop is set. @default `false` */
  clearable?: boolean;

  /** Props passed down to the clear button */
  clearButtonProps?: React.ComponentPropsWithoutRef<'button'>;

  /** `dayjs` format to display input value, `"MMMM D, YYYY"` by default  */
  valueFormat?: string;

  /** If set to `false`, invalid user input is preserved and is not corrected on blur */
  fixOnBlur?: boolean;

  /** If set, the value can be deselected by deleting everything from the input or by clicking the selected date in the dropdown. By default, `true` if `clearable` prop is set, `false` otherwise. */
  allowDeselect?: boolean;

  /** Max level that user can go up to @default `'decade'` */
  maxLevel?: CalendarLevel;

  /** Initial displayed level (uncontrolled) */
  defaultLevel?: CalendarLevel;

  /** Current displayed level (controlled) */
  level?: CalendarLevel;

  /** Called when the level changes */
  onLevelChange?: (level: CalendarLevel) => void;
}

export type DateInputFactory = Factory<{
  props: DateInputProps;
  ref: HTMLInputElement;
  stylesNames: DateInputStylesNames;
  variant: InputVariant;
}>;

const defaultProps = {
  valueFormat: 'MMMM D, YYYY',
  fixOnBlur: true,
} satisfies Partial<DateInputProps>;

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
    onKeyDown,
    readOnly,
    name,
    form,
    rightSection,
    unstyled,
    classNames,
    styles,
    allowDeselect,
    date,
    defaultDate,
    onDateChange,
    getMonthControlProps,
    getYearControlProps,
    disabled,
    ...rest
  } = props;

  const _wrapperRef = useRef<HTMLDivElement>(null);
  const _dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const { calendarProps, others } = pickCalendarProps(rest);
  const ctx = useDatesContext();
  const defaultDateParser = (val: string): DateStringValue | null => {
    const parsedDate = dayjs(val, valueFormat, ctx.getLocale(locale)).toDate();
    return Number.isNaN(parsedDate.getTime())
      ? dateStringParser(val)
      : dayjs(parsedDate).format('YYYY-MM-DD');
  };

  const _dateParser = dateParser || defaultDateParser;
  const _allowDeselect = allowDeselect !== undefined ? allowDeselect : clearable;

  const formatValue = (val: DateStringValue) =>
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
    if (controlled && value !== null) {
      setDate(value);
    }
  }, [controlled, value]);

  const [inputValue, setInputValue] = useState(formatValue(_value));

  useEffect(() => {
    setInputValue(formatValue(_value));
  }, [ctx.getLocale(locale)]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value;
    setInputValue(val);
    setDropdownOpened(true);

    if (val.trim() === '' && clearable) {
      setValue(null);
    } else {
      const dateValue = _dateParser(val);
      if (dateValue && isDateValid({ date: dateValue, minDate, maxDate })) {
        setValue(dateValue);
        setDate(dateValue);
      }
    }
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
    setDropdownOpened(false);
    fixOnBlur && setInputValue(formatValue(_value));
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    onFocus?.(event);
    setDropdownOpened(true);
  };

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    onClick?.(event);
    setDropdownOpened(true);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setDropdownOpened(false);
    }
    onKeyDown?.(event);
  };

  const _getDayProps = (day: DateStringValue) => ({
    ...getDayProps?.(day),
    selected: dayjs(_value).isSame(day, 'day'),
    onClick: (event: any) => {
      getDayProps?.(day).onClick?.(event);

      const val =
        clearable && _allowDeselect ? (dayjs(_value).isSame(day, 'day') ? null : day) : day;
      setValue(val);
      !controlled && val && setInputValue(formatValue(val));
      setDropdownOpened(false);
    },
  });

  const _rightSection =
    rightSection ||
    (clearable && _value && !readOnly && !disabled ? (
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
        size={inputProps.size || 'sm'}
        {...clearButtonProps}
      />
    ) : null);

  useDidUpdate(() => {
    _value !== undefined && !dropdownOpened && setInputValue(formatValue(_value));
  }, [_value]);

  useClickOutside(() => setDropdownOpened(false), undefined, [
    _wrapperRef.current,
    _dropdownRef.current,
  ]);

  return (
    <>
      <Input.Wrapper {...wrapperProps} __staticSelector="DateInput" ref={_wrapperRef}>
        <Popover
          opened={dropdownOpened}
          trapFocus={false}
          position="bottom-start"
          disabled={readOnly || disabled}
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
              onKeyDown={handleInputKeyDown}
              readOnly={readOnly}
              rightSection={_rightSection}
              {...inputProps}
              {...others}
              disabled={disabled}
              __staticSelector="DateInput"
            />
          </Popover.Target>
          <Popover.Dropdown
            onMouseDown={(event) => event.preventDefault()}
            data-dates-dropdown
            ref={_dropdownRef}
          >
            <Calendar
              __staticSelector="DateInput"
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
              date={_date}
              onDateChange={setDate}
              getMonthControlProps={(date) => ({
                selected: typeof _value === 'string' ? isSameMonth(date, _value) : false,
                ...getMonthControlProps?.(date),
              })}
              getYearControlProps={(date) => ({
                selected: typeof _value === 'string' ? dayjs(date).isSame(_value, 'year') : false,
                ...getYearControlProps?.(date),
              })}
              attributes={wrapperProps.attributes}
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
