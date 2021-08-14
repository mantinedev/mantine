import React, { useRef, useState } from 'react';
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
  Popper,
  MantineTransition,
  InputStylesNames,
  InputWrapperStylesNames,
  MantineSize,
  Modal,
  CloseButton,
  getSizeValue,
} from '@mantine/core';
import {
  useId,
  useClickOutside,
  useFocusTrap,
  useMergedRef,
  useWindowEvent,
  useReducedMotion,
} from '@mantine/hooks';
import { CalendarStylesNames } from '../Calendar/Calendar';
import useStyles from './DatePickerBase.styles';

export type DatePickerStylesNames =
  | keyof ReturnType<typeof useStyles>
  | CalendarStylesNames
  | InputStylesNames
  | InputWrapperStylesNames;

export interface DatePickerBaseSharedProps
  extends InputBaseProps,
    InputWrapperBaseProps,
    DefaultProps<DatePickerStylesNames>,
    Omit<
      React.ComponentPropsWithoutRef<'button'>,
      'value' | 'defaultValue' | 'onChange' | 'placeholder'
    > {
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

  /** Get input button ref */
  elementRef?: React.ForwardedRef<HTMLButtonElement>;

  /** Input name, useful fon uncontrolled variant to capture data with native form */
  name?: string;

  /** Set to true to disable dropdown closing on scroll */
  closeDropdownOnScroll?: boolean;

  /** Input size */
  size?: MantineSize;

  /** Where to show calendar in modal or popover */
  dropdownType?: 'popover' | 'modal';

  /** Allow to clear value */
  clearable?: boolean;

  /** aria-label for clear button */
  clearButtonLabel?: string;

  /** useEffect dependencies to force update tooltip position */
  positionDependencies?: any[];
}

export interface DatePickerBaseProps extends DatePickerBaseSharedProps {
  /** Internal prop to set input label */
  inputLabel?: string;

  /** Static css selector base */
  __staticSelector?: string;

  /** Controls dropdown opened state */
  dropdownOpened: boolean;

  /** Called when dropdown opened state changes */
  setDropdownOpened(opened: boolean): void;

  /** Called when clear button in clicked */
  onClear(): void;
}

const RIGHT_SECTION_WIDTH = {
  xs: 24,
  sm: 30,
  md: 34,
  lg: 40,
  xl: 44,
};

export function DatePickerBase({
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
  transition = 'pop-top-left',
  transitionDuration = 200,
  transitionTimingFunction,
  elementRef,
  closeDropdownOnScroll = true,
  size = 'sm',
  children,
  inputLabel,
  __staticSelector = 'date-picker',
  dropdownOpened,
  setDropdownOpened,
  dropdownType = 'popover',
  clearable = true,
  clearButtonLabel,
  onClear,
  positionDependencies = [],
  ...others
}: DatePickerBaseProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, size, invalid: !!error }, classNames, __staticSelector);
  const _styles = mergeStyles(classes, styles);
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement>(null);
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
  const clickOutsideRef = useClickOutside(() => dropdownType === 'popover' && closeDropdown());

  useWindowEvent('scroll', () => closeDropdownOnScroll && setDropdownOpened(false));

  const rightSection = clearable ? (
    <CloseButton
      themeOverride={themeOverride}
      variant="transparent"
      aria-label={clearButtonLabel}
      onClick={onClear}
      size={size}
    />
  ) : null;

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
      classNames={classNames}
      styles={styles}
      size={size}
      __staticSelector={__staticSelector}
      {...wrapperProps}
    >
      <div>
        <div className={classes.wrapper} style={_styles.wrapper} ref={setReferenceElement}>
          <Input
            themeOverride={themeOverride}
            component="button"
            type="button"
            classNames={classNames}
            styles={{ ...styles, input: { ...styles?.input, cursor: 'pointer' } }}
            onClick={() => setDropdownOpened(!dropdownOpened)}
            id={uuid}
            elementRef={useMergedRef(elementRef, inputRef)}
            __staticSelector={__staticSelector}
            size={size}
            required={required}
            invalid={!!error}
            rightSection={rightSection}
            rightSectionWidth={getSizeValue({ size, sizes: RIGHT_SECTION_WIDTH })}
            {...others}
          >
            {inputLabel || (
              <Text style={_styles.placeholder} className={classes.placeholder} size={size}>
                {placeholder}
              </Text>
            )}
          </Input>
        </div>

        {dropdownType === 'popover' ? (
          <Popper
            referenceElement={referenceElement}
            transitionDuration={useReducedMotion() ? 0 : transitionDuration}
            transitionTimingFunction={transitionTimingFunction}
            forceUpdateDependencies={positionDependencies}
            transition={transition}
            mounted={dropdownOpened}
            position="bottom"
            placement="start"
            gutter={0}
            withArrow
            arrowSize={3}
            zIndex={3}
          >
            <div
              className={classes.dropdownWrapper}
              style={_styles.dropdownWrapper}
              ref={useMergedRef(focusTrapRef, clickOutsideRef)}
              onKeyDownCapture={closeOnEscape}
            >
              <Paper className={classes.dropdown} style={_styles.dropdown} shadow={shadow}>
                {children}
              </Paper>
            </div>
          </Popper>
        ) : (
          <Modal opened={dropdownOpened} onClose={closeDropdown} hideCloseButton>
            {children}
          </Modal>
        )}
      </div>
    </InputWrapper>
  );
}

DatePickerBase.displayName = '@mantine/dates/DatePickerBase';
