import { useRef, useState } from 'react';
import {
  __BaseInputProps,
  __InputStylesNames,
  BoxProps,
  CloseButton,
  CloseButtonProps,
  createVarsResolver,
  DataAttributes,
  ElementProps,
  factory,
  Factory,
  getFontSize,
  InputBase,
  InputVariant,
  Popover,
  PopoverProps,
  ScrollAreaProps,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useId, useMergedRef } from '@mantine/hooks';
import { SpinInput } from '../SpinInput';
import { AmPmInput } from './AmPmInput/AmPmInput';
import { AmPmControlsList } from './TimeControlsList/AmPmControlsList';
import { TimeControlsList } from './TimeControlsList/TimeControlsList';
import { TimePickerProvider } from './TimePicker.context';
import {
  TimePickerAmPmLabels,
  TimePickerFormat,
  TimePickerPasteSplit,
  TimePickerPresets,
} from './TimePicker.types';
import { TimePresets } from './TimePresets/TimePresets';
import { useTimePicker } from './use-time-picker';
import { getParsedTime } from './utils/get-parsed-time/get-parsed-time';
import classes from './TimePicker.module.css';

export type TimePickerStylesNames =
  | 'fieldsRoot'
  | 'fieldsGroup'
  | 'field'
  | 'controlsList'
  | 'controlsListGroup'
  | 'control'
  | 'dropdown'
  | 'presetsRoot'
  | 'presetsGroup'
  | 'presetsGroupLabel'
  | 'presetControl'
  | 'scrollarea'
  | __InputStylesNames;

export type TimePickerCssVariables = {
  dropdown: '--control-font-size';
};

export interface TimePickerProps
  extends BoxProps,
    __BaseInputProps,
    StylesApiProps<TimePickerFactory>,
    ElementProps<'div', 'onChange' | 'defaultValue'> {
  /** Controlled component value */
  value?: string;

  /** Uncontrolled component default value */
  defaultValue?: string;

  /** Called when the value changes */
  onChange?: (value: string) => void;

  /** Determines whether the clear button should be displayed, `false` by default */
  clearable?: boolean;

  /** `name` prop passed down to the hidden input */
  name?: string;

  /** `form` prop passed down to the hidden input */
  form?: string;

  /** Min possible time value in `hh:mm:ss` format */
  min?: string;

  /** Max possible time value in `hh:mm:ss` format */
  max?: string;

  /** Time format, `'24h'` by default */
  format?: TimePickerFormat;

  /** Number by which hours are incremented/decremented, `1` by default */
  hoursStep?: number;

  /** Number by which minutes are incremented/decremented, `1` by default */
  minutesStep?: number;

  /** Number by which seconds are incremented/decremented, `1` by default */
  secondsStep?: number;

  /** Determines whether the seconds input should be displayed, `false` by default */
  withSeconds?: boolean;

  /** `aria-label` of hours input */
  hoursInputLabel?: string;

  /** `aria-label` of minutes input */
  minutesInputLabel?: string;

  /** `aria-label` of seconds input */
  secondsInputLabel?: string;

  /** `aria-label` of am/pm input */
  amPmInputLabel?: string;

  /** Labels used for am/pm values, `{ am: 'AM', pm: 'PM' }` by default */
  amPmLabels?: TimePickerAmPmLabels;

  /** Determines whether the dropdown with time controls list should be visible when the input has focus, `false` by default */
  withDropdown?: boolean;

  /** Props passed down to `Popover` component */
  popoverProps?: PopoverProps;

  /** Called once when one of the inputs is focused, not called when focused is shifted between hours, minutes, seconds and am/pm inputs */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /** Called once when the focus is no longer on any of the inputs */
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;

  /** Props passed down to clear button */
  clearButtonProps?: CloseButtonProps & ElementProps<'button'> & DataAttributes;

  /** Props passed down to hours input */
  hoursInputProps?: React.ComponentPropsWithoutRef<'input'> & DataAttributes;

  /** Props passed down to minutes input */
  minutesInputProps?: React.ComponentPropsWithoutRef<'input'> & DataAttributes;

  /** Props passed down to seconds input */
  secondsInputProps?: React.ComponentPropsWithoutRef<'input'> & DataAttributes;

  /** Props passed down to am/pm select */
  amPmSelectProps?: React.ComponentPropsWithoutRef<'select'> & DataAttributes;

  /** If set, the value cannot be updated */
  readOnly?: boolean;

  /** If set, the component becomes disabled */
  disabled?: boolean;

  /** Props passed down to the hidden input */
  hiddenInputProps?: React.ComponentPropsWithoutRef<'input'> & DataAttributes;

  /** A function to transform paste values, by default time in 24h format can be parsed on paste for example `23:34:22` */
  pasteSplit?: TimePickerPasteSplit;

  /** A ref object to get node reference of the hours input */
  hoursRef?: React.Ref<HTMLInputElement>;

  /** A ref object to get node reference of the minutes input */
  minutesRef?: React.Ref<HTMLInputElement>;

  /** A ref object to get node reference of the seconds input */
  secondsRef?: React.Ref<HTMLInputElement>;

  /** A ref object to get node reference of the am/pm select */
  amPmRef?: React.Ref<HTMLSelectElement>;

  /** Time presets to display in the dropdown */
  presets?: TimePickerPresets;

  /** Maximum height of the content displayed in the dropdown in px, `200` by default */
  maxDropdownContentHeight?: number;

  /** Props passed down to all underlying `ScrollArea` components */
  scrollAreaProps?: ScrollAreaProps;
}

export type TimePickerFactory = Factory<{
  props: TimePickerProps;
  ref: HTMLDivElement;
  stylesNames: TimePickerStylesNames;
  vars: TimePickerCssVariables;
  variant: InputVariant;
}>;

const defaultProps = {
  hoursStep: 1,
  minutesStep: 1,
  secondsStep: 1,
  format: '24h',
  amPmLabels: { am: 'AM', pm: 'PM' },
  pasteSplit: getParsedTime,
  maxDropdownContentHeight: 200,
} satisfies Partial<TimePickerProps>;

const varsResolver = createVarsResolver<TimePickerFactory>((_theme, { size }) => ({
  dropdown: {
    '--control-font-size': getFontSize(size),
  },
}));

export const TimePicker = factory<TimePickerFactory>((_props, ref) => {
  const props = useProps('TimePicker', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    onClick,
    format,
    value,
    defaultValue,
    onChange,
    hoursStep,
    minutesStep,
    secondsStep,
    withSeconds,
    hoursInputLabel,
    minutesInputLabel,
    secondsInputLabel,
    amPmInputLabel,
    amPmLabels,
    clearable,
    onMouseDown,
    onFocusCapture,
    onBlurCapture,
    min,
    max,
    popoverProps,
    withDropdown,
    rightSection,
    onFocus,
    onBlur,
    clearButtonProps,
    hoursInputProps,
    minutesInputProps,
    secondsInputProps,
    amPmSelectProps,
    readOnly,
    disabled,
    size,
    name,
    form,
    hiddenInputProps,
    labelProps,
    pasteSplit,
    hoursRef,
    minutesRef,
    secondsRef,
    amPmRef,
    presets,
    maxDropdownContentHeight,
    scrollAreaProps,
    ...others
  } = props;

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<TimePickerFactory>({
    classNames,
    styles,
    props,
  });

  const getStyles = useStyles<TimePickerFactory>({
    name: 'TimePicker',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const controller = useTimePicker({
    value,
    defaultValue,
    onChange,
    format,
    amPmLabels,
    withSeconds,
    min,
    max,
    clearable,
    disabled,
    readOnly,
    pasteSplit,
  });

  const _hoursRef = useMergedRef(controller.refs.hours, hoursRef);
  const _minutesRef = useMergedRef(controller.refs.minutes, minutesRef);
  const _secondsRef = useMergedRef(controller.refs.seconds, secondsRef);
  const _amPmRef = useMergedRef(controller.refs.amPm, amPmRef);

  const hoursInputId = useId();
  const hasFocusRef = useRef(false);
  const [dropdownOpened, setDropdownOpened] = useState(false);

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

  return (
    <TimePickerProvider value={{ getStyles, scrollAreaProps, maxDropdownContentHeight }}>
      <Popover
        opened={dropdownOpened}
        transitionProps={{ duration: 0 }}
        position="bottom-start"
        withRoles={false}
        disabled={disabled || readOnly || !withDropdown}
        {...popoverProps}
      >
        <Popover.Target>
          <InputBase
            component="div"
            size={size}
            disabled={disabled}
            ref={ref}
            onClick={(event) => {
              onClick?.(event);
              controller.focus('hours');
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
            rightSection={
              rightSection ||
              (controller.isClearable && (
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
              ))
            }
            labelProps={{ htmlFor: hoursInputId, ...labelProps }}
            style={style}
            className={className}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            __staticSelector="TimePicker"
            {...others}
          >
            <div {...getStyles('fieldsRoot')} dir="ltr">
              <div {...getStyles('fieldsGroup')} onBlur={handleBlur}>
                <SpinInput
                  id={hoursInputId}
                  {...hoursInputProps}
                  {...getStyles('field', {
                    className: hoursInputProps?.className,
                    style: hoursInputProps?.style,
                  })}
                  value={controller.values.hours}
                  onChange={controller.setHours}
                  onNextInput={() => controller.focus('minutes')}
                  min={format === '12h' ? 1 : 0}
                  max={format === '12h' ? 12 : 23}
                  focusable
                  step={hoursStep}
                  ref={_hoursRef}
                  aria-label={hoursInputLabel}
                  readOnly={readOnly}
                  disabled={disabled}
                  onPaste={controller.onPaste}
                  onFocus={(event) => {
                    handleFocus(event);
                    hoursInputProps?.onFocus?.(event);
                  }}
                />
                <span>:</span>
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
                  focusable
                  step={minutesStep}
                  ref={_minutesRef}
                  onPreviousInput={() => controller.focus('hours')}
                  onNextInput={() =>
                    withSeconds ? controller.focus('seconds') : controller.focus('amPm')
                  }
                  aria-label={minutesInputLabel}
                  tabIndex={-1}
                  readOnly={readOnly}
                  disabled={disabled}
                  onPaste={controller.onPaste}
                  onFocus={(event) => {
                    handleFocus(event);
                    minutesInputProps?.onFocus?.(event);
                  }}
                />

                {withSeconds && (
                  <>
                    <span>:</span>
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
                      focusable
                      step={secondsStep}
                      ref={_secondsRef}
                      onPreviousInput={() => controller.focus('minutes')}
                      onNextInput={() => controller.focus('amPm')}
                      aria-label={secondsInputLabel}
                      tabIndex={-1}
                      readOnly={readOnly}
                      disabled={disabled}
                      onPaste={controller.onPaste}
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
                    inputType={withDropdown ? 'input' : 'select'}
                    labels={amPmLabels}
                    value={controller.values.amPm}
                    onChange={controller.setAmPm}
                    ref={_amPmRef}
                    aria-label={amPmInputLabel}
                    onPreviousInput={() =>
                      withSeconds ? controller.focus('seconds') : controller.focus('minutes')
                    }
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
              </div>
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
        >
          {presets ? (
            <TimePresets
              value={controller.hiddenInputValue}
              onChange={controller.setTimeString}
              format={format}
              presets={presets}
              amPmLabels={amPmLabels}
              withSeconds={withSeconds || false}
            />
          ) : (
            <div {...getStyles('controlsListGroup')}>
              <TimeControlsList
                min={format === '12h' ? 1 : 0}
                max={format === '12h' ? 12 : 23}
                step={hoursStep}
                value={controller.values.hours}
                onSelect={controller.setHours}
              />
              <TimeControlsList
                min={0}
                max={59}
                step={minutesStep}
                value={controller.values.minutes}
                onSelect={controller.setMinutes}
              />
              {withSeconds && (
                <TimeControlsList
                  min={0}
                  max={59}
                  step={secondsStep}
                  value={controller.values.seconds}
                  onSelect={controller.setSeconds}
                />
              )}
              {format === '12h' && (
                <AmPmControlsList
                  labels={amPmLabels}
                  value={controller.values.amPm}
                  onSelect={controller.setAmPm}
                />
              )}
            </div>
          )}
        </Popover.Dropdown>
      </Popover>
    </TimePickerProvider>
  );
});

TimePicker.displayName = '@mantine/dates/TimePicker';
TimePicker.classes = classes;
