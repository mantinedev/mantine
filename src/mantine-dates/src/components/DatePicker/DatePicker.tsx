import React, { useState, useRef } from 'react';
import cx from 'clsx';
import {
  DefaultProps,
  useMantineTheme,
  mergeStyles,
  Input,
  InputWrapper,
  Text,
  InputBaseProps,
  InputWrapperBaseProps,
  Paper,
  Transition,
  MantineTransition,
  InputStylesNames,
  InputWrapperStylesNames,
} from '@mantine/core';
import {
  useUncontrolled,
  useId,
  useClickOutside,
  useFocusTrap,
  useMergedRef,
  useWindowEvent,
} from '@mantine/hooks';
import dayjs from 'dayjs';
import { Calendar, CalendarSettings, CalendarStylesNames } from '../Calendar/Calendar';
import useStyles from './DatePicker.styles';

export type DatePickerStylesNames =
  | keyof ReturnType<typeof useStyles>
  | CalendarStylesNames
  | InputStylesNames
  | InputWrapperStylesNames;

interface DatePickerProps
  extends DefaultProps<typeof useStyles>,
    InputBaseProps,
    InputWrapperBaseProps,
    CalendarSettings,
    Omit<
      React.ComponentPropsWithoutRef<'button'>,
      'value' | 'defaultValue' | 'onChange' | 'placeholder'
    > {
  /** Selected date, required with controlled input */
  value?: Date;

  /** Called when date changes */
  onChange?(value: Date): void;

  /** Default value for uncontrolled input */
  defaultValue?: Date;

  /** Props spread to root element (InputWrapper) */
  wrapperProps?: Record<string, any>;

  /** Placeholder, displayed when date is not selected */
  placeholder?: React.ReactNode;

  /** Dropdown appear/disappear transition */
  transition?: MantineTransition;

  /** Dropdown appear/disappear transition duration */
  transitionDuration?: number;

  /** Dropdown appear/disappear transition timing function, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Dropdown shadow from theme or css value for custom box-shadow */
  shadow?: string;

  /** Set to false to force dropdown to stay open after date was selected */
  closeCalendarOnChange?: boolean;

  /** dayjs input format */
  inputFormat?: string;

  /** Get input button ref */
  elementRef?: React.ForwardedRef<HTMLButtonElement>;

  /** Control initial dropdown opened state */
  initiallyOpened?: boolean;

  /** Input name, useful fon uncontrolled variant to capture data with native form */
  name?: string;

  /** Set to true to disable dropdown closing on scroll */
  closeDropdownOnScroll?: boolean;
}

export function DatePicker({
  value,
  onChange,
  defaultValue,
  themeOverride,
  classNames,
  className,
  style,
  styles,
  wrapperProps,
  required,
  label,
  error,
  id,
  description,
  placeholder,
  shadow = 'sm',
  locale = 'en',
  inputFormat = 'MMMM D, YYYY',
  transition = 'rotate-right',
  transitionDuration = 200,
  transitionTimingFunction,
  nextMonthLabel,
  previousMonthLabel,
  closeCalendarOnChange = true,
  labelFormat = 'MMMM YYYY',
  withSelect = false,
  yearsRange,
  dayClassName,
  dayStyle,
  disableOutsideEvents,
  minDate,
  maxDate,
  excludeDate,
  elementRef,
  initialMonth,
  initiallyOpened = false,
  closeDropdownOnScroll = true,
  name = 'date',
  ...others
}: DatePickerProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, 'date-picker');
  const _styles = mergeStyles(classes, styles);
  const [dropdownOpened, setDropdownOpened] = useState(initiallyOpened);
  const uuid = useId(id);

  const focusTrapRef = useFocusTrap();
  const inputRef = useRef<HTMLButtonElement>();
  const closeDropdown = () => {
    if (dropdownOpened) {
      setDropdownOpened(false);
      setTimeout(() => inputRef.current?.focus(), transitionDuration + 20);
    }
  };
  const closeOnEscape = (event: React.KeyboardEvent<HTMLDivElement>) =>
    event.nativeEvent.code === 'Escape' && closeDropdown();
  const clickOutsideRef = useClickOutside(closeDropdown);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
    rule: (val) => val instanceof Date,
  });

  const handleValueChange = (date: Date) => {
    setValue(date);
    closeCalendarOnChange && closeDropdown();
  };

  useWindowEvent('scroll', () => closeDropdownOnScroll && setDropdownOpened(false));

  return (
    <InputWrapper
      required={required}
      id={uuid}
      label={label}
      error={error}
      description={description}
      className={className}
      style={style}
      themeOverride={themeOverride}
      classNames={classNames as any}
      styles={styles as any}
      __staticSelector="date-picker"
      {...wrapperProps}
    >
      <div ref={clickOutsideRef}>
        <div className={cx(classes.wrapper, className)} style={_styles.wrapper}>
          <Input
            themeOverride={themeOverride}
            component="button"
            classNames={classNames as any}
            styles={styles as any}
            onClick={() => setDropdownOpened((o) => !o)}
            id={uuid}
            elementRef={useMergedRef(elementRef, inputRef)}
            __staticSelector="date-picker"
            {...others}
          >
            {_value instanceof Date ? (
              dayjs(_value).format(inputFormat)
            ) : (
              <Text style={_styles.placeholder} className={classes.placeholder}>
                {placeholder}
              </Text>
            )}
          </Input>
        </div>

        <Transition
          mounted={dropdownOpened}
          transition={transition}
          duration={transitionDuration}
          timingFunction={transitionTimingFunction}
        >
          {(transitionStyles) => (
            <div
              className={classes.dropdownWrapper}
              style={{ ..._styles.dropdownWrapper, ...transitionStyles }}
              ref={focusTrapRef}
              onKeyDownCapture={closeOnEscape}
            >
              <Paper className={classes.dropdown} style={_styles.dropdown} shadow={shadow}>
                <Calendar
                  classNames={classNames as any}
                  styles={styles as any}
                  locale={locale}
                  themeOverride={themeOverride}
                  nextMonthLabel={nextMonthLabel}
                  previousMonthLabel={previousMonthLabel}
                  month={_value instanceof Date ? _value : initialMonth}
                  value={_value}
                  onChange={handleValueChange}
                  labelFormat={labelFormat}
                  withSelect={withSelect}
                  yearsRange={yearsRange}
                  dayClassName={dayClassName}
                  dayStyle={dayStyle}
                  disableOutsideEvents={disableOutsideEvents}
                  minDate={minDate}
                  maxDate={maxDate}
                  excludeDate={excludeDate}
                  __staticSelector="date-picker"
                />
              </Paper>
            </div>
          )}
        </Transition>
      </div>
      <input type="hidden" name={name} value={_value instanceof Date ? _value.toISOString() : ''} />
    </InputWrapper>
  );
}

DatePicker.displayName = '@mantine/dates/DatePicker';
