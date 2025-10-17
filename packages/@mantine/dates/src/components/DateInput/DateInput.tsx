import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import {
  __BaseInputProps,
  __InputStylesNames,
  BoxProps,
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
  useResolvedStylesApi,
} from '@mantine/core';
import { useClickOutside, useDidUpdate } from '@mantine/hooks';
import { useUncontrolledDates } from '../../hooks';
import { CalendarLevel, DateStringValue, DateValue } from '../../types';
import { Calendar, CalendarBaseProps, pickCalendarProps } from '../Calendar';
import { useDatesContext } from '../DatesProvider';
import { DecadeLevelSettings } from '../DecadeLevel';
import { HiddenDatesInput } from '../HiddenDatesInput';
import { isSameMonth } from '../Month';
import { MonthLevelSettings } from '../MonthLevel';
import { YearLevelSettings } from '../YearLevel';
import { dateStringParser } from './date-string-parser/date-string-parser';
import { isDateValid } from './is-date-valid/is-date-valid';
import { DatePicker } from '../DatePicker';

export type DateInputStylesNames =
  | 'root'
  | 'wrapper'
  | 'input'
  | 'dropdown'
  | 'datePickerRoot'
  | 'presetsList'
  | 'presetButton';

export interface DateInputProps
  extends BoxProps,
    Omit<__BaseInputProps, 'size'>,
    CalendarBaseProps,
    DecadeLevelSettings,
    YearLevelSettings,
    MonthLevelSettings,
    StylesApiProps<DateInputFactory>,
    ElementProps<'input', 'size' | 'value' | 'defaultValue' | 'onChange'> {
  dateParser?: (value: string) => DateStringValue | Date | null;
  value?: DateValue | Date;
  defaultValue?: DateValue | Date;
  onChange?: (value: DateStringValue | null) => void;
  popoverProps?: Partial<Omit<PopoverProps, 'children'>>;
  clearable?: boolean;
  clearButtonProps?: React.ComponentPropsWithoutRef<'button'>;
  valueFormat?: string;
  fixOnBlur?: boolean;
  allowDeselect?: boolean;
  maxLevel?: CalendarLevel;
  defaultLevel?: CalendarLevel;
  level?: CalendarLevel;
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
  size: 'sm',
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
    if (controlled && value !== null) setDate(value);
  }, [controlled, value]);

  const [inputValue, setInputValue] = useState(formatValue(_value));

  useEffect(() => {
    setInputValue(formatValue(_value));
  }, [ctx.getLocale(locale)]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value;
    setInputValue(val);
    setDropdownOpened(true);

    if (val.trim() === '' && (allowDeselect || clearable)) {
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
    if (event.key === 'Escape') setDropdownOpened(false);
    onKeyDown?.(event);
  };

  const _getDayProps = (day: DateStringValue) => ({
    ...getDayProps?.(day),
    selected: dayjs(_value).isSame(day, 'day'),
    onClick: (event: any) => {
      getDayProps?.(day).onClick?.(event);
      const val = _allowDeselect ? (dayjs(_value).isSame(day, 'day') ? null : day) : day;
      setValue(val);
      !controlled && val && setInputValue(formatValue(val));
      setDropdownOpened(false);
    },
  });

  const clearButton = (
    <Input.ClearButton
      onClick={() => {
        setValue(null);
        !controlled && setInputValue('');
        setDropdownOpened(false);
      }}
      unstyled={unstyled}
      {...clearButtonProps}
    />
  );

  const _clearable = clearable && !!_value && !readOnly && !disabled;

  useDidUpdate(() => {
    _value !== undefined && !dropdownOpened && setInputValue(formatValue(_value));
  }, [_value]);

  useClickOutside(() => setDropdownOpened(false), undefined, [
    _wrapperRef.current,
    _dropdownRef.current,
  ]);

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<DateInputFactory>({
    classNames,
    styles,
    props,
  });

  const rootStyle = (resolvedStyles as any)?.datePickerRoot || {};

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
          withinPortal={false}
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
              rightSection={rightSection}
              __clearSection={clearButton}
              __clearable={_clearable}
              {...inputProps}
              {...others}
              disabled={disabled}
              __staticSelector="DateInput"
            />
          </Popover.Target>

          {!rootStyle?.display?.includes('none') && (
            <Popover.Dropdown
              ref={_dropdownRef}
              data-dates-dropdown
              onMouseDown={(event) => event.preventDefault()}
              style={{
                background: 'transparent',
                boxShadow: 'none',
                border: 'none',
                padding: 0,
                margin: 0,
                backdropFilter: 'none',
                WebkitBackdropFilter: 'none',
                ['--popover-bg' as any]: 'transparent',
                ['--mantine-color-body' as any]: 'transparent',
                ['--popover-shadow' as any]: 'none',
                ['--mantine-shadow-md' as any]: 'none',
              }}
            >
              <div
                style={{
                  border: rootStyle?.border?.replace('!important', '') || '4px solid transparent',
                  background:
                    rootStyle?.backgroundColor?.replace('!important', '') ||
                    rootStyle?.background?.replace('!important', '') ||
                    'transparent',
                  boxShadow: rootStyle?.boxShadow?.replace('!important', '') || 'none',
                  borderRadius: rootStyle?.borderRadius?.replace('!important', '') || '8px',
                  padding: rootStyle?.padding?.replace('!important', '') || '6px',
                  transform: rootStyle?.transform?.replace('!important', '') || 'none',
                  transition: 'all 0.15s ease-in-out',
                }}
              >
                <DatePicker
                  __staticSelector="DatePicker"
                  {...calendarProps}
                  classNames={resolvedClassNames}
                  styles={resolvedStyles}
                  unstyled={unstyled}
                  __preventFocus
                  minDate={minDate}
                  maxDate={maxDate}
                  locale={locale}
                  getDayProps={_getDayProps}
                  size={inputProps.size as MantineSize}
                  value={_date}
                  onChange={setDate}
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
              </div>
            </Popover.Dropdown>
          )}
        </Popover>
      </Input.Wrapper>
      <HiddenDatesInput name={name} form={form} value={_value} type="default" />
    </>
  );
});

DateInput.classes = { ...Input.classes, ...Calendar.classes };
(DateInput as any).displayName = '@mantine/dates/DateInput';
