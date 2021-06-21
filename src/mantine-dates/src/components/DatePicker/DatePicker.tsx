import React, { useState } from 'react';
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
} from '@mantine/core';
import { useUncontrolled, useId, useClickOutside, useFocusTrap } from '@mantine/hooks';
import dayjs from 'dayjs';
import { Calendar, CalendarSettings } from '../Calendar/Calendar';
import useStyles from './DatePicker.styles';

interface DatePickerProps
  extends DefaultProps<typeof useStyles>,
    InputBaseProps,
    InputWrapperBaseProps,
    CalendarSettings,
    Omit<
      React.ComponentPropsWithoutRef<'button'>,
      'value' | 'defaultValue' | 'onChange' | 'placeholder'
    > {
  value?: Date;
  onChange?(value: Date): void;
  defaultValue?: Date;
  wrapperProps?: Record<string, any>;
  placeholder?: React.ReactNode;
  transition?: MantineTransition;
  transitionDuration?: number;
  transitionTimingFunction?: string;
  shadow?: string;
  closeCalendarOnChange?: boolean;
  inputFormat?: string;
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
  labelFormat,
  withSelect,
  yearsRange,
  dayClassName,
  dayStyle,
  disableOutsideEvents,
  minDate,
  maxDate,
  excludeDate,
  ...others
}: DatePickerProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, 'date-picker');
  const _styles = mergeStyles(classes, styles);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const closeDropdown = () => setDropdownOpened(false);
  const uuid = useId(id);
  const clickOutsideRef = useClickOutside(closeDropdown);
  const focusTrapRef = useFocusTrap();
  const closeOnEscape = (event: React.KeyboardEvent<HTMLDivElement>) =>
    event.nativeEvent.code === 'Escape' && closeDropdown();

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
            {...others}
          >
            {_value instanceof Date ? (
              dayjs(_value).format(inputFormat)
            ) : (
              <Text className={classes.placeholder}>{placeholder}</Text>
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
              <Paper className={classes.dropdown} shadow={shadow}>
                <Calendar
                  classNames={classNames as any}
                  styles={styles as any}
                  locale={locale}
                  themeOverride={themeOverride}
                  nextMonthLabel={nextMonthLabel}
                  previousMonthLabel={previousMonthLabel}
                  month={_value}
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
                />
              </Paper>
            </div>
          )}
        </Transition>
      </div>
    </InputWrapper>
  );
}

DatePicker.displayName = '@mantine/dates/DatePicker';
