import dayjs from 'dayjs';
import { Fragment, useRef, useState } from 'react';
import {
  __BaseInputProps,
  __InputStylesNames,
  BoxProps,
  ClearSectionMode,
  CloseButton,
  CloseButtonProps,
  DataAttributes,
  ElementProps,
  factory,
  Factory,
  InputBase,
  InputVariant,
  MantineSize,
  Popover,
  PopoverProps,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useClickOutside, useId, useMergedRef } from '@mantine/hooks';
import { DateStringValue, DateTimeStringValue } from '../../types';
import { Calendar, CalendarBaseProps, CalendarStylesNames, pickCalendarProps } from '../Calendar';
import { useDatesContext } from '../DatesProvider';
import { DecadeLevelSettings } from '../DecadeLevel';
import { isSameMonth } from '../Month';
import { MonthLevelSettings } from '../MonthLevel';
import { SpinInput } from '../SpinInput';
import { AmPmInput } from '../TimePicker/AmPmInput/AmPmInput';
import { TimePickerProvider } from '../TimePicker/TimePicker.context';
import { YearLevelSettings } from '../YearLevel';
import { getDaysInMonth } from './get-days-in-month/get-days-in-month';
import { useMaskedDateInput } from './use-masked-date-input';
import classes from './MaskedDateInput.module.css';

export type MaskedDateInputStylesNames =
  | 'fieldsRoot'
  | 'fieldsGroup'
  | 'field'
  | 'dateSeparator'
  | 'timeSeparator'
  | 'dropdown'
  | CalendarStylesNames
  | __InputStylesNames;

export interface MaskedDateInputProps
  extends
    BoxProps,
    Omit<__BaseInputProps, 'size'>,
    CalendarBaseProps,
    DecadeLevelSettings,
    YearLevelSettings,
    MonthLevelSettings,
    StylesApiProps<MaskedDateInputFactory>,
    ElementProps<'div', 'onChange' | 'defaultValue' | 'size'> {
  /** Controlled component value. YYYY-MM-DD format when withTime=false, YYYY-MM-DD HH:mm:ss when withTime=true. @category state */
  value?: DateStringValue | DateTimeStringValue | null;

  /** Uncontrolled component default value @category state */
  defaultValue?: DateStringValue | DateTimeStringValue | null;

  /** Called when value changes. Value is null when fields are incomplete. Format depends on withTime prop. @category state */
  onChange?: (value: DateStringValue | DateTimeStringValue | null) => void;

  /** Order of date fields @default ['day', 'month', 'year'] @category appearance */
  fieldsOrder?: ('day' | 'month' | 'year')[];

  /** Separator displayed between date fields @default '/' @category appearance */
  dateSeparator?: string;

  /** Separator displayed between time fields @default ':' @category appearance */
  timeSeparator?: string;

  /** Determines whether time fields (hours, minutes) are displayed @default false @category state */
  withTime?: boolean;

  /** Determines whether seconds field is displayed (requires withTime) @default false @category appearance */
  withSeconds?: boolean;

  /** Time format, 24h or 12h @default '24h' @category appearance */
  format?: '24h' | '12h';

  /** Labels used for am/pm values @default { am: 'AM', pm: 'PM' } @category appearance */
  amPmLabels?: { am: string; pm: string };

  /** Number by which hours are incremented/decremented @default 1 @category behavior */
  hoursStep?: number;

  /** Number by which minutes are incremented/decremented @default 1 @category behavior */
  minutesStep?: number;

  /** Number by which seconds are incremented/decremented @default 1 @category behavior */
  secondsStep?: number;

  /** Determines whether the calendar dropdown is displayed when input is focused @default true @category behavior */
  withDropdown?: boolean;

  /** Props passed down to Popover component */
  popoverProps?: PopoverProps;

  /** Determines whether the clear button should be displayed @default false @category behavior */
  clearable?: boolean;

  /** Determines how the clear button and rightSection are rendered @default 'both' @category appearance */
  clearSectionMode?: ClearSectionMode;

  /** If set, the value can be deselected by clicking the selected date in the calendar dropdown @category behavior */
  allowDeselect?: boolean;

  /** If set, the value cannot be updated @category behavior */
  readOnly?: boolean;

  /** If set, the component becomes disabled @category behavior */
  disabled?: boolean;

  /** `name` prop passed down to the hidden input */
  name?: string;

  /** `form` prop passed down to the hidden input */
  form?: string;

  /** `aria-label` of day input @category accessibility */
  dayInputLabel?: string;

  /** `aria-label` of month input @category accessibility */
  monthInputLabel?: string;

  /** `aria-label` of year input @category accessibility */
  yearInputLabel?: string;

  /** `aria-label` of hours input @category accessibility */
  hoursInputLabel?: string;

  /** `aria-label` of minutes input @category accessibility */
  minutesInputLabel?: string;

  /** `aria-label` of seconds input @category accessibility */
  secondsInputLabel?: string;

  /** `aria-label` of am/pm input @category accessibility */
  amPmInputLabel?: string;

  /** Props passed to day input */
  dayInputProps?: React.ComponentProps<'input'> & DataAttributes;

  /** Props passed to month input */
  monthInputProps?: React.ComponentProps<'input'> & DataAttributes;

  /** Props passed to year input */
  yearInputProps?: React.ComponentProps<'input'> & DataAttributes;

  /** Props passed to hours input */
  hoursInputProps?: React.ComponentProps<'input'> & DataAttributes;

  /** Props passed to minutes input */
  minutesInputProps?: React.ComponentProps<'input'> & DataAttributes;

  /** Props passed to seconds input */
  secondsInputProps?: React.ComponentProps<'input'> & DataAttributes;

  /** Props passed to am/pm select */
  amPmSelectProps?: React.ComponentProps<'select'> & DataAttributes;

  /** Props passed to clear button */
  clearButtonProps?: CloseButtonProps & ElementProps<'button'> & DataAttributes;

  /** Props passed to hidden input */
  hiddenInputProps?: React.ComponentProps<'input'> & DataAttributes;

  /** Day input placeholder @default '--' @category appearance */
  dayPlaceholder?: string;

  /** Month input placeholder @default '--' @category appearance */
  monthPlaceholder?: string;

  /** Year input placeholder @default '----' @category appearance */
  yearPlaceholder?: string;

  /** Hours input placeholder @default '--' @category appearance */
  hoursPlaceholder?: string;

  /** Minutes input placeholder @default '--' @category appearance */
  minutesPlaceholder?: string;

  /** Seconds input placeholder @default '--' @category appearance */
  secondsPlaceholder?: string;

  /** Ref to day input element */
  dayRef?: React.Ref<HTMLInputElement>;

  /** Ref to month input element */
  monthRef?: React.Ref<HTMLInputElement>;

  /** Ref to year input element */
  yearRef?: React.Ref<HTMLInputElement>;

  /** Ref to hours input element */
  hoursRef?: React.Ref<HTMLInputElement>;

  /** Ref to minutes input element */
  minutesRef?: React.Ref<HTMLInputElement>;

  /** Ref to seconds input element */
  secondsRef?: React.Ref<HTMLInputElement>;

  /** Ref to am/pm select element */
  amPmRef?: React.Ref<HTMLSelectElement>;

  /** Called once when one of the inputs is focused @category behavior */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /** Called once when focus leaves all inputs @category behavior */
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;

  /** A function to transform pasted values @category behavior */
  pasteSplit?: (value: string) => {
    day: number | null;
    month: number | null;
    year: number | null;
    hours?: number | null;
    minutes?: number | null;
    seconds?: number | null;
  };
}

export type MaskedDateInputFactory = Factory<{
  props: MaskedDateInputProps;
  ref: HTMLDivElement;
  stylesNames: MaskedDateInputStylesNames;
  variant: InputVariant;
}>;

const defaultProps = {
  fieldsOrder: ['day', 'month', 'year'] as ('day' | 'month' | 'year')[],
  dateSeparator: '/',
  timeSeparator: ':',
  format: '24h' as const,
  amPmLabels: { am: 'AM', pm: 'PM' },
  withDropdown: true,
  hoursStep: 1,
  minutesStep: 1,
  secondsStep: 1,
  dayPlaceholder: '--',
  monthPlaceholder: '--',
  yearPlaceholder: '----',
  hoursPlaceholder: '--',
  minutesPlaceholder: '--',
  secondsPlaceholder: '--',
} satisfies Partial<MaskedDateInputProps>;

export const MaskedDateInput = factory<MaskedDateInputFactory>((_props) => {
  const props = useProps('MaskedDateInput', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    onClick,
    value,
    defaultValue,
    onChange,
    fieldsOrder,
    dateSeparator,
    timeSeparator,
    withTime,
    withSeconds,
    format: _format,
    amPmLabels,
    hoursStep,
    minutesStep,
    secondsStep,
    withDropdown,
    popoverProps,
    clearable,
    clearSectionMode,
    allowDeselect,
    readOnly,
    disabled,
    name,
    form,
    dayInputLabel,
    monthInputLabel,
    yearInputLabel,
    hoursInputLabel,
    minutesInputLabel,
    secondsInputLabel,
    amPmInputLabel,
    dayInputProps,
    monthInputProps,
    yearInputProps,
    hoursInputProps,
    minutesInputProps,
    secondsInputProps,
    amPmSelectProps,
    clearButtonProps,
    hiddenInputProps,
    dayPlaceholder,
    monthPlaceholder,
    yearPlaceholder,
    hoursPlaceholder,
    minutesPlaceholder,
    secondsPlaceholder,
    dayRef,
    monthRef,
    yearRef,
    hoursRef,
    minutesRef,
    secondsRef,
    amPmRef,
    onFocus,
    onBlur,
    onMouseDown,
    onFocusCapture,
    onBlurCapture,
    rightSection,
    size,
    labelProps,
    pasteSplit,
    locale,
    attributes,
    getDayProps,
    getMonthControlProps,
    getYearControlProps,
    ...others
  } = props;

  const format = _format!;
  const _allowDeselect = allowDeselect !== undefined ? allowDeselect : clearable;
  const ctx = useDatesContext();

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<MaskedDateInputFactory>({
    classNames,
    styles,
    props,
  });

  const getStyles = useStyles<MaskedDateInputFactory>({
    name: 'MaskedDateInput',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
  });

  const { calendarProps, others: restProps } = pickCalendarProps(others);

  const controller = useMaskedDateInput({
    value,
    defaultValue,
    onChange,
    withTime,
    withSeconds,
    format,
    amPmLabels: amPmLabels!,
    clearable,
    readOnly,
    disabled,
    pasteSplit,
    minDate: calendarProps.minDate ? dayjs(calendarProps.minDate).format('YYYY-MM-DD') : undefined,
    maxDate: calendarProps.maxDate ? dayjs(calendarProps.maxDate).format('YYYY-MM-DD') : undefined,
  });

  const _dayRef = useMergedRef(controller.refs.day, dayRef);
  const _monthRef = useMergedRef(controller.refs.month, monthRef);
  const _yearRef = useMergedRef(controller.refs.year, yearRef);
  const _hoursRef = useMergedRef(controller.refs.hours, hoursRef);
  const _minutesRef = useMergedRef(controller.refs.minutes, minutesRef);
  const _secondsRef = useMergedRef(controller.refs.seconds, secondsRef);
  const _amPmRef = useMergedRef(controller.refs.amPm, amPmRef);

  const dayInputId = useId();
  const hasFocusRef = useRef(false);
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const _wrapperRef = useRef<HTMLDivElement>(null);
  const _dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(() => setDropdownOpened(false), undefined, [
    _wrapperRef.current,
    _dropdownRef.current,
  ]);

  const handleFocus = (event: React.FocusEvent<any>) => {
    if (!hasFocusRef.current) {
      hasFocusRef.current = true;
      onFocus?.(event);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      hasFocusRef.current = false;
      onBlur?.(event);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      setDropdownOpened(false);
    }
  };

  const fieldsSequence: string[] = [...fieldsOrder!];
  if (withTime) {
    fieldsSequence.push('hours', 'minutes');
    if (withSeconds) {
      fieldsSequence.push('seconds');
    }
    if (format === '12h') {
      fieldsSequence.push('amPm');
    }
  }

  const getNextField = (field: string) => {
    const idx = fieldsSequence.indexOf(field);
    return idx < fieldsSequence.length - 1 ? fieldsSequence[idx + 1] : undefined;
  };

  const getPrevField = (field: string) => {
    const idx = fieldsSequence.indexOf(field);
    return idx > 0 ? fieldsSequence[idx - 1] : undefined;
  };

  const focusNext = (field: string) => {
    const next = getNextField(field);
    if (next) {
      controller.focus(next as any);
    }
  };

  const focusPrev = (field: string) => {
    const prev = getPrevField(field);
    if (prev) {
      controller.focus(prev as any);
    }
  };

  const currentDateValue =
    controller.values.day !== null &&
    controller.values.month !== null &&
    controller.values.year !== null
      ? `${String(controller.values.year).padStart(4, '0')}-${String(controller.values.month).padStart(2, '0')}-${String(controller.values.day).padStart(2, '0')}`
      : null;

  const _getDayProps = (day: DateStringValue) => ({
    ...getDayProps?.(day),
    selected: currentDateValue !== null && dayjs(currentDateValue).isSame(day, 'day'),
    onClick: (event: any) => {
      getDayProps?.(day)?.onClick?.(event);
      if (
        _allowDeselect &&
        currentDateValue !== null &&
        dayjs(currentDateValue).isSame(day, 'day')
      ) {
        controller.clear();
      } else {
        controller.setFromDateString(day);
      }
      setDropdownOpened(false);
    },
  });

  const dayMax = getDaysInMonth(controller.values.month, controller.values.year);

  const dateFields: Record<string, React.ReactNode> = {
    day: (
      <SpinInput
        key="day"
        id={fieldsOrder![0] === 'day' ? dayInputId : undefined}
        {...dayInputProps}
        {...getStyles('field', {
          className: dayInputProps?.className,
          style: dayInputProps?.style,
        })}
        value={controller.values.day}
        onChange={controller.setDay}
        min={1}
        max={dayMax}
        focusable={fieldsOrder![0] === 'day'}
        step={1}
        ref={_dayRef}
        aria-label={dayInputLabel}
        tabIndex={fieldsOrder![0] === 'day' ? undefined : -1}
        readOnly={readOnly}
        disabled={disabled}
        onPaste={controller.onPaste}
        placeholder={dayPlaceholder}
        allowTemporaryZero
        onNextInput={() => focusNext('day')}
        onPreviousInput={() => focusPrev('day')}
        onFocus={(event) => {
          handleFocus(event);
          dayInputProps?.onFocus?.(event);
        }}
      />
    ),
    month: (
      <SpinInput
        key="month"
        id={fieldsOrder![0] === 'month' ? dayInputId : undefined}
        {...monthInputProps}
        {...getStyles('field', {
          className: monthInputProps?.className,
          style: monthInputProps?.style,
        })}
        value={controller.values.month}
        onChange={controller.setMonth}
        min={1}
        max={12}
        focusable={fieldsOrder![0] === 'month'}
        step={1}
        ref={_monthRef}
        aria-label={monthInputLabel}
        tabIndex={fieldsOrder![0] === 'month' ? undefined : -1}
        readOnly={readOnly}
        disabled={disabled}
        onPaste={controller.onPaste}
        placeholder={monthPlaceholder}
        allowTemporaryZero
        onNextInput={() => focusNext('month')}
        onPreviousInput={() => focusPrev('month')}
        onFocus={(event) => {
          handleFocus(event);
          monthInputProps?.onFocus?.(event);
        }}
      />
    ),
    year: (
      <SpinInput
        key="year"
        id={fieldsOrder![0] === 'year' ? dayInputId : undefined}
        {...yearInputProps}
        {...getStyles('field', {
          className: yearInputProps?.className,
          style: { width: 'calc(4ch + 0.3em)', ...yearInputProps?.style },
        })}
        value={controller.values.year}
        onChange={controller.setYear}
        min={1}
        max={9999}
        focusable={fieldsOrder![0] === 'year'}
        step={1}
        ref={_yearRef}
        aria-label={yearInputLabel}
        tabIndex={fieldsOrder![0] === 'year' ? undefined : -1}
        readOnly={readOnly}
        disabled={disabled}
        onPaste={controller.onPaste}
        placeholder={yearPlaceholder}
        disableAutoAdvance
        maxDigits={4}
        padValue={String}
        onNextInput={() => focusNext('year')}
        onPreviousInput={() => focusPrev('year')}
        onFocus={(event) => {
          handleFocus(event);
          yearInputProps?.onFocus?.(event);
        }}
      />
    ),
  };

  return (
    <Popover
      opened={dropdownOpened}
      trapFocus={false}
      position="bottom-start"
      disabled={disabled || readOnly || !withDropdown}
      withRoles={false}
      unstyled={unstyled}
      {...popoverProps}
    >
      <Popover.Target>
        <InputBase
          component="div"
          ref={_wrapperRef}
          size={size}
          disabled={disabled}
          onClick={(event) => {
            onClick?.(event);
            controller.focus(fieldsOrder![0] as any);
          }}
          onMouseDown={(event) => {
            event.preventDefault();
            onMouseDown?.(event);
          }}
          onFocusCapture={(event) => {
            setDropdownOpened(true);
            onFocusCapture?.(event);
          }}
          onBlurCapture={(event) => {
            setDropdownOpened(false);
            onBlurCapture?.(event);
          }}
          rightSection={rightSection}
          __clearSection={
            <CloseButton
              {...clearButtonProps}
              size={size}
              onClick={(event) => {
                controller.clear();
                clearButtonProps?.onClick?.(event);
              }}
              onMouseDown={(event) => {
                event.preventDefault();
                clearButtonProps?.onMouseDown?.(event);
              }}
            />
          }
          __clearable={controller.isClearable}
          __clearSectionMode={clearSectionMode}
          labelProps={{ htmlFor: dayInputId, ...labelProps }}
          style={style}
          className={className}
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          attributes={attributes}
          __staticSelector="MaskedDateInput"
          {...restProps}
        >
          <div {...getStyles('fieldsRoot')} dir="ltr">
            <TimePickerProvider
              value={{
                getStyles: getStyles as any,
                maxDropdownContentHeight: 0,
                scrollAreaProps: undefined,
              }}
            >
              <div {...getStyles('fieldsGroup')} onBlur={handleBlur} onKeyDown={handleKeyDown}>
                {fieldsOrder!.map((field, index) => (
                  <Fragment key={field}>
                    {index > 0 && <span {...getStyles('dateSeparator')}>{dateSeparator}</span>}
                    {dateFields[field]}
                  </Fragment>
                ))}

                {withTime && (
                  <>
                    <span {...getStyles('dateSeparator')}>{'\u00A0'}</span>
                    <SpinInput
                      {...hoursInputProps}
                      {...getStyles('field', {
                        className: hoursInputProps?.className,
                        style: hoursInputProps?.style,
                      })}
                      value={controller.values.hours}
                      onChange={controller.setHours}
                      min={format === '12h' ? 1 : 0}
                      max={format === '12h' ? 12 : 23}
                      allowTemporaryZero={format === '12h'}
                      focusable={false}
                      step={hoursStep}
                      ref={_hoursRef}
                      aria-label={hoursInputLabel}
                      tabIndex={-1}
                      readOnly={readOnly}
                      disabled={disabled}
                      onPaste={controller.onPaste}
                      placeholder={hoursPlaceholder}
                      onNextInput={() => focusNext('hours')}
                      onPreviousInput={() => focusPrev('hours')}
                      onFocus={(event) => {
                        handleFocus(event);
                        hoursInputProps?.onFocus?.(event);
                      }}
                    />
                    <span {...getStyles('timeSeparator')}>{timeSeparator}</span>
                    <SpinInput
                      {...minutesInputProps}
                      {...getStyles('field', {
                        className: minutesInputProps?.className,
                        style: minutesInputProps?.style,
                      })}
                      value={controller.values.minutes}
                      onChange={controller.setMinutes}
                      min={0}
                      max={59}
                      focusable={false}
                      step={minutesStep}
                      ref={_minutesRef}
                      aria-label={minutesInputLabel}
                      tabIndex={-1}
                      readOnly={readOnly}
                      disabled={disabled}
                      onPaste={controller.onPaste}
                      placeholder={minutesPlaceholder}
                      onNextInput={() => focusNext('minutes')}
                      onPreviousInput={() => focusPrev('minutes')}
                      onFocus={(event) => {
                        handleFocus(event);
                        minutesInputProps?.onFocus?.(event);
                      }}
                    />

                    {withSeconds && (
                      <>
                        <span {...getStyles('timeSeparator')}>{timeSeparator}</span>
                        <SpinInput
                          {...secondsInputProps}
                          {...getStyles('field', {
                            className: secondsInputProps?.className,
                            style: secondsInputProps?.style,
                          })}
                          value={controller.values.seconds}
                          onChange={controller.setSeconds}
                          min={0}
                          max={59}
                          focusable={false}
                          step={secondsStep}
                          ref={_secondsRef}
                          aria-label={secondsInputLabel}
                          tabIndex={-1}
                          readOnly={readOnly}
                          disabled={disabled}
                          onPaste={controller.onPaste}
                          placeholder={secondsPlaceholder}
                          onNextInput={() => focusNext('seconds')}
                          onPreviousInput={() => focusPrev('seconds')}
                          onFocus={(event) => {
                            handleFocus(event);
                            secondsInputProps?.onFocus?.(event);
                          }}
                        />
                      </>
                    )}

                    {format === '12h' && (
                      <AmPmInput
                        {...amPmSelectProps}
                        inputType="select"
                        labels={amPmLabels}
                        value={controller.values.amPm}
                        onChange={controller.setAmPm}
                        ref={_amPmRef}
                        aria-label={amPmInputLabel}
                        onPreviousInput={() => focusPrev('amPm')}
                        readOnly={readOnly}
                        disabled={disabled}
                        tabIndex={-1}
                        onPaste={controller.onPaste}
                        onFocus={(event) => {
                          handleFocus(event);
                          amPmSelectProps?.onFocus?.(event);
                        }}
                      />
                    )}
                  </>
                )}
              </div>
            </TimePickerProvider>
          </div>

          <input
            type="hidden"
            name={name}
            form={form}
            value={controller.hiddenInputValue}
            {...hiddenInputProps}
          />
        </InputBase>
      </Popover.Target>
      <Popover.Dropdown
        {...getStyles('dropdown')}
        onMouseDown={(event) => event.preventDefault()}
        ref={_dropdownRef}
      >
        <Calendar
          __staticSelector="MaskedDateInput"
          __preventFocus
          {...calendarProps}
          classNames={classNames as any}
          styles={styles as any}
          unstyled={unstyled}
          minDate={calendarProps.minDate}
          maxDate={calendarProps.maxDate}
          locale={calendarProps.locale || ctx.getLocale(locale)}
          getDayProps={_getDayProps}
          size={size as MantineSize}
          date={currentDateValue || undefined}
          getMonthControlProps={(date) => ({
            selected: currentDateValue !== null ? isSameMonth(date, currentDateValue) : false,
            ...getMonthControlProps?.(date),
          })}
          getYearControlProps={(date) => ({
            selected:
              currentDateValue !== null ? dayjs(date).isSame(currentDateValue, 'year') : false,
            ...getYearControlProps?.(date),
          })}
          attributes={attributes}
        />
      </Popover.Dropdown>
    </Popover>
  );
});

MaskedDateInput.displayName = '@mantine/dates/MaskedDateInput';
MaskedDateInput.classes = { ...classes, ...Calendar.classes };

export namespace MaskedDateInput {
  export type Props = MaskedDateInputProps;
  export type StylesNames = MaskedDateInputStylesNames;
  export type Factory = MaskedDateInputFactory;
}
