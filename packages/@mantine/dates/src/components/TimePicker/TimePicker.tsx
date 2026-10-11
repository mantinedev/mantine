import { useRef, useState } from 'react';
import {
  __BaseInputProps,
  __InputStylesNames,
  BoxProps,
  ClearSectionMode,
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
  useController,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { useId, useMergedRef } from '@mantine/hooks';
import { getDatesPopoverMiddlewares } from '../PickerInputBase/get-dates-popover-middlewares/get-dates-popover-middlewares';
import { SpinInput } from '../SpinInput';
import { AmPmInput } from './AmPmInput/AmPmInput';
import { AmPmControlsList } from './TimeControlsList/AmPmControlsList';
import { TimeControlsList } from './TimeControlsList/TimeControlsList';
import { TimePickerProvider } from './TimePicker.context';
import {
  TimePickerAmPmLabels,
  TimePickerField,
  TimePickerFormat,
  TimePickerPasteSplit,
  TimePickerPresets,
  TimePickerType,
} from './TimePicker.types';
import { TimePresets } from './TimePresets/TimePresets';
import {
  TimePickerController,
  TimePickerControllerOptions,
  useTimePicker,
} from './use-time-picker';
import { getParsedTime } from './utils/get-parsed-time/get-parsed-time';
import { padTime } from './utils/pad-time/pad-time';
import timeFieldsClasses from './TimeFields.module.css';
import moduleClasses from './TimePicker.module.css';

const classes = { ...timeFieldsClasses, ...moduleClasses };

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
  extends
    BoxProps,
    __BaseInputProps,
    StylesApiProps<TimePickerFactory>,
    ElementProps<'div', 'onChange' | 'defaultValue'> {
  /** TimePicker type, `'time'` for regular time input, `'duration'` for duration input that allows values greater than 24 hours @default 'time' @category state */
  type?: TimePickerType;

  /** Controlled component value @category state */
  value?: string;

  /** Uncontrolled component default value @category state */
  defaultValue?: string;

  /** Called when the value changes @category state */
  onChange?: (value: string) => void;

  /** Determines whether the clear button should be displayed @default false @category behavior */
  clearable?: boolean;

  /** Determines how the clear button and rightSection are rendered @default 'both' @category appearance */
  clearSectionMode?: ClearSectionMode;

  /** `name` prop passed down to the hidden input */
  name?: string;

  /** `form` prop passed down to the hidden input */
  form?: string;

  /** Min possible time value in `hh:mm` or `hh:mm:ss` format @category behavior */
  min?: string;

  /** Max possible time value in `hh:mm` or `hh:mm:ss` format @category behavior */
  max?: string;

  /** Time format, `'24h'` by default @category appearance */
  format?: TimePickerFormat;

  /** Number by which hours are incremented/decremented @default 1 @category behavior */
  hoursStep?: number;

  /** Number by which minutes are incremented/decremented @default 1 @category behavior */
  minutesStep?: number;

  /** Number by which seconds are incremented/decremented @default 1 @category behavior */
  secondsStep?: number;

  /** Determines whether the seconds input should be displayed @default false @category appearance */
  withSeconds?: boolean;

  /** `aria-label` of hours input @category accessibility */
  hoursInputLabel?: string;

  /** `aria-label` of minutes input @category accessibility */
  minutesInputLabel?: string;

  /** `aria-label` of seconds input @category accessibility */
  secondsInputLabel?: string;

  /** `aria-label` of am/pm input @category accessibility */
  amPmInputLabel?: string;

  /** Labels used for am/pm values @default { am: 'AM', pm: 'PM' } @category appearance */
  amPmLabels?: TimePickerAmPmLabels;

  /** Determines whether the dropdown with time controls list should be visible when the input has focus @default false @category behavior */
  withDropdown?: boolean;

  /** Props passed down to `Popover` component */
  popoverProps?: PopoverProps;

  /** Called once when one of the inputs is focused, not called when focused is shifted between hours, minutes, seconds and am/pm inputs @category behavior */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /** Called once when the focus is no longer on any of the inputs @category behavior */
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;

  /** Props passed down to clear button */
  clearButtonProps?: CloseButtonProps & ElementProps<'button'> & DataAttributes;

  /** Props passed down to hours input */
  hoursInputProps?: React.ComponentProps<'input'> & DataAttributes;

  /** Props passed down to minutes input */
  minutesInputProps?: React.ComponentProps<'input'> & DataAttributes;

  /** Props passed down to seconds input */
  secondsInputProps?: React.ComponentProps<'input'> & DataAttributes;

  /** Props passed down to am/pm select */
  amPmSelectProps?: React.ComponentProps<'select'> & DataAttributes;

  /** If set, the value cannot be updated @category behavior */
  readOnly?: boolean;

  /** If set, the component becomes disabled @category behavior */
  disabled?: boolean;

  /** Props passed down to the hidden input */
  hiddenInputProps?: React.ComponentProps<'input'> & DataAttributes;

  /** A function to transform paste values, by default time in 24h format can be parsed on paste for example `23:34:22` @category behavior */
  pasteSplit?: TimePickerPasteSplit;

  /** A ref object to get node reference of the hours input */
  hoursRef?: React.Ref<HTMLInputElement>;

  /** A ref object to get node reference of the minutes input */
  minutesRef?: React.Ref<HTMLInputElement>;

  /** A ref object to get node reference of the seconds input */
  secondsRef?: React.Ref<HTMLInputElement>;

  /** A ref object to get node reference of the am/pm select */
  amPmRef?: React.Ref<HTMLSelectElement>;

  /** Time presets to display in the dropdown @category appearance */
  presets?: TimePickerPresets;

  /** If set, the dropdown is closed when a value is selected from the presets list @default false @category behavior */
  closeDropdownOnPresetSelect?: boolean;

  /** Maximum height of the content displayed in the dropdown in px @default 200 @category appearance */
  maxDropdownContentHeight?: number;

  /** Props passed down to all underlying `ScrollArea` components */
  scrollAreaProps?: ScrollAreaProps;

  /** If set, the time controls list are reversed, @default false @category appearance */
  reverseTimeControlsList?: boolean;

  /** Hours input placeholder, @default -- @category appearance */
  hoursPlaceholder?: string;

  /** Minutes input placeholder, @default -- @category appearance */
  minutesPlaceholder?: string;

  /** Seconds input placeholder, @default -- @category appearance */
  secondsPlaceholder?: string;

  /** Minimum number of digits displayed in the hours input, applicable only when `type="duration"` is set @default 2 @category appearance */
  minHoursDigits?: number;

  /** Controller returned by the `useTimePicker` hook. When provided, the state is owned by the controller and `value`, `defaultValue`, `onChange`, `type`, `format`, `amPmLabels`, `withSeconds`, `min`, `max` and `pasteSplit` props are ignored @category state */
  controller?: TimePickerController;
}

export type TimePickerFactory = Factory<{
  props: TimePickerProps;
  ref: HTMLDivElement;
  stylesNames: TimePickerStylesNames;
  vars: TimePickerCssVariables;
  variant: InputVariant;
}>;

const defaultProps = {
  type: 'time',
  hoursStep: 1,
  minutesStep: 1,
  secondsStep: 1,
  format: '24h',
  amPmLabels: { am: 'AM', pm: 'PM' },
  pasteSplit: getParsedTime,
  maxDropdownContentHeight: 200,
  hoursPlaceholder: '--',
  minutesPlaceholder: '--',
  secondsPlaceholder: '--',
  minHoursDigits: 2,
} satisfies Partial<TimePickerProps>;

const varsResolver = createVarsResolver<TimePickerFactory>((_theme, { size }) => ({
  dropdown: {
    '--control-font-size': getFontSize(size),
  },
}));

const DURATION_HOURS_MAX = Infinity;

export const TimePicker = factory<TimePickerFactory>((_props) => {
  const props = useProps(['Input', 'InputWrapper', 'TimePicker'], defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    onClick,
    type,
    format: _format,
    value,
    defaultValue,
    onChange,
    hoursStep,
    minutesStep,
    secondsStep,
    withSeconds: withSecondsProp,
    hoursInputLabel,
    minutesInputLabel,
    secondsInputLabel,
    amPmInputLabel,
    amPmLabels: amPmLabelsProp,
    clearable,
    clearSectionMode,
    onMouseDown,
    onKeyDown,
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
    closeDropdownOnPresetSelect,
    maxDropdownContentHeight,
    scrollAreaProps,
    attributes,
    reverseTimeControlsList,
    hoursPlaceholder,
    minutesPlaceholder,
    secondsPlaceholder,
    minHoursDigits,
    controller: controllerProp,
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
    attributes,
    vars,
    varsResolver,
  });

  const controller = useController(useTimePicker, controllerProp, {
    value,
    defaultValue,
    onChange,
    type,
    format: _format,
    amPmLabels: amPmLabelsProp,
    withSeconds: withSecondsProp,
    min,
    max,
    pasteSplit,
  });

  const isDuration = controller.type === 'duration';
  const isClearable = clearable && !readOnly && !disabled && controller.hasValue();
  const resolvedHoursPlaceholder =
    isDuration && hoursPlaceholder === '--' ? '-'.repeat(minHoursDigits!) : hoursPlaceholder;

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

  const closeDropdown = () => {
    setDropdownOpened(false);
    popoverProps?.onChange?.(false);
  };

  const handlePresetSelect = (timeString: string) => {
    controller.setValue(timeString);

    if (closeDropdownOnPresetSelect) {
      closeDropdown();
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      controller.clamp();
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
        disabled={disabled || readOnly || !withDropdown || isDuration}
        {...popoverProps}
        middlewares={getDatesPopoverMiddlewares(popoverProps?.middlewares)}
      >
        <Popover.Target>
          <InputBase
            component="div"
            size={size}
            disabled={disabled}
            onClick={(event) => {
              onClick?.(event);
              controller.focus('hours');
              if (!disabled) {
                setDropdownOpened(true);
              }
            }}
            onMouseDown={(event) => {
              event.preventDefault();
              onMouseDown?.(event);
            }}
            onKeyDown={(event) => {
              onKeyDown?.(event);
              if (
                event.key === 'Escape' &&
                dropdownOpened &&
                popoverProps?.closeOnEscape !== false
              ) {
                closeDropdown();
              }
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
            __clearable={isClearable}
            __clearSectionMode={clearSectionMode}
            labelProps={{ htmlFor: hoursInputId, ...labelProps }}
            style={style}
            className={className}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            attributes={attributes}
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
                    style: isDuration
                      ? {
                          width: `calc(${Math.max(minHoursDigits!, padTime(controller.hours ?? 0).length)}ch + 0.3em)`,
                          ...hoursInputProps?.style,
                        }
                      : hoursInputProps?.style,
                  })}
                  value={controller.hours}
                  onChange={controller.setHours}
                  onNextInput={() => controller.focus('minutes')}
                  min={controller.format === '12h' ? 1 : 0}
                  max={isDuration ? DURATION_HOURS_MAX : controller.format === '12h' ? 12 : 23}
                  allowTemporaryZero={controller.format === '12h'}
                  disableAutoAdvance={isDuration}
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
                  onBlur={(event) => {
                    const actualInputValue = event.currentTarget.value;
                    const numericValue = actualInputValue ? parseInt(actualInputValue, 10) : null;

                    if (controller.format === '12h' && numericValue === 0) {
                      controller.setHours(12);
                    }
                    hoursInputProps?.onBlur?.(event);
                  }}
                  placeholder={resolvedHoursPlaceholder}
                />
                <span>:</span>
                <SpinInput
                  {...minutesInputProps}
                  {...getStyles('field', {
                    className: minutesInputProps?.className,
                    style: minutesInputProps?.style,
                  })}
                  value={controller.minutes}
                  onChange={controller.setMinutes}
                  min={0}
                  max={59}
                  step={minutesStep}
                  ref={_minutesRef}
                  onPreviousInput={() => controller.focus('hours')}
                  onNextInput={() =>
                    controller.withSeconds ? controller.focus('seconds') : controller.focus('amPm')
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
                  placeholder={minutesPlaceholder}
                />

                {controller.withSeconds && (
                  <>
                    <span>:</span>
                    <SpinInput
                      {...secondsInputProps}
                      {...getStyles('field', {
                        className: secondsInputProps?.className,
                        style: secondsInputProps?.style,
                      })}
                      value={controller.seconds}
                      onChange={controller.setSeconds}
                      min={0}
                      max={59}
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
                      placeholder={secondsPlaceholder}
                    />
                  </>
                )}

                {controller.format === '12h' && !isDuration && (
                  <AmPmInput
                    {...amPmSelectProps}
                    inputType={withDropdown ? 'input' : 'select'}
                    labels={controller.amPmLabels}
                    value={controller.amPm}
                    onChange={controller.setAmPm}
                    ref={_amPmRef}
                    aria-label={amPmInputLabel}
                    onPreviousInput={() =>
                      controller.withSeconds
                        ? controller.focus('seconds')
                        : controller.focus('minutes')
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
              value={controller.value}
              {...hiddenInputProps}
            />
          </InputBase>
        </Popover.Target>
        <Popover.Dropdown
          {...getStyles('dropdown')}
          onMouseDown={(event) => event.preventDefault()}
        >
          <div className={unstyled ? undefined : classes.dropdownContent}>
            {presets ? (
              <TimePresets
                value={controller.value}
                onChange={handlePresetSelect}
                format={controller.format}
                presets={presets}
                amPmLabels={controller.amPmLabels}
                withSeconds={controller.withSeconds || false}
              />
            ) : (
              <div {...getStyles('controlsListGroup')}>
                <TimeControlsList
                  min={controller.format === '12h' ? 1 : 0}
                  max={controller.format === '12h' ? 12 : 23}
                  step={hoursStep}
                  value={controller.hours}
                  onSelect={controller.setHours}
                  reversed={reverseTimeControlsList}
                />
                <TimeControlsList
                  min={0}
                  max={59}
                  step={minutesStep}
                  value={controller.minutes}
                  onSelect={controller.setMinutes}
                  reversed={reverseTimeControlsList}
                />
                {controller.withSeconds && (
                  <TimeControlsList
                    min={0}
                    max={59}
                    step={secondsStep}
                    value={controller.seconds}
                    onSelect={controller.setSeconds}
                    reversed={reverseTimeControlsList}
                  />
                )}
                {controller.format === '12h' && (
                  <AmPmControlsList
                    labels={controller.amPmLabels}
                    value={controller.amPm}
                    onSelect={controller.setAmPm}
                  />
                )}
              </div>
            )}
          </div>
        </Popover.Dropdown>
      </Popover>
    </TimePickerProvider>
  );
});

TimePicker.displayName = '@mantine/dates/TimePicker';
TimePicker.classes = classes;
TimePicker.varsResolver = varsResolver;

export namespace TimePicker {
  export type Props = TimePickerProps;
  export type StylesNames = TimePickerStylesNames;
  export type Factory = TimePickerFactory;
  export type CssVariables = TimePickerCssVariables;
  export type Format = TimePickerFormat;
  export type AmPmLabels = TimePickerAmPmLabels;
  export type PasteSplit = TimePickerPasteSplit;
  export type Presets = TimePickerPresets;
  export type Field = TimePickerField;
  export type Controller = TimePickerController;
  export type ControllerOptions = TimePickerControllerOptions;
}
