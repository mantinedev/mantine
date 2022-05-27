import React, { useRef, forwardRef } from 'react';
import {
  DefaultProps,
  Input,
  InputBaseProps,
  InputWrapperBaseProps,
  MantineTransition,
  InputStylesNames,
  InputWrapperStylesNames,
  MantineSize,
  Modal,
  CloseButton,
  MantineShadow,
  Selectors,
  extractSystemStyles,
  Popover,
} from '@mantine/core';
import { useMergedRef, useId } from '@mantine/hooks';
import { CalendarBaseStylesNames } from '../CalendarBase/CalendarBase';
import useStyles from './DatePickerBase.styles';

export type DatePickerStylesNames =
  | Selectors<typeof useStyles>
  | CalendarBaseStylesNames
  | InputStylesNames
  | InputWrapperStylesNames
  | 'dropdown';

export interface DatePickerBaseSharedProps
  extends InputBaseProps,
    InputWrapperBaseProps,
    DefaultProps<DatePickerStylesNames>,
    Omit<
      React.ComponentPropsWithoutRef<'input'>,
      'value' | 'defaultValue' | 'placeholder' | 'size'
    > {
  /** Props spread to root element */
  wrapperProps?: React.ComponentPropsWithoutRef<'div'>;

  /** Placeholder, displayed when date is not selected */
  placeholder?: string;

  /** Dropdown appear/disappear transition */
  transition?: MantineTransition;

  /** Dropdown appear/disappear transition duration */
  transitionDuration?: number;

  /** Dropdown appear/disappear transition timing function, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Dropdown shadow from theme or css value for custom box-shadow */
  shadow?: MantineShadow;

  /** Input name, useful fon uncontrolled variant to capture data with native form */
  name?: string;

  /** Input size */
  size?: MantineSize;

  /** Where to show calendar in modal or popover */
  dropdownType?: 'popover' | 'modal';

  /** Allow to clear value */
  clearable?: boolean;

  /** aria-label for clear button */
  clearButtonLabel?: string;

  /** useEffect dependencies to force update dropdown position */
  positionDependencies?: any[];

  /** Dropdown zIndex */
  zIndex?: number;

  /** call onChange with last valid value onBlur */
  fixOnBlur?: boolean;

  /** Whether to render the dropdown in a Portal */
  withinPortal?: boolean;

  /** Called when dropdown opens */
  onDropdownOpen?(): void;

  /** Called when dropdown closes */
  onDropdownClose?(): void;

  /** Events that should trigger outside clicks */
  clickOutsideEvents?: string[];

  /** Modal z-index */
  modalZIndex?: number;

  /** Set the clear button tab index to disabled or default after input field */
  clearButtonTabIndex?: -1 | 0;
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

  /** Allow free input */
  allowFreeInput?: boolean;

  /** Amount of months */
  amountOfMonths?: number;
}

const RIGHT_SECTION_WIDTH = {
  xs: 24,
  sm: 30,
  md: 34,
  lg: 40,
  xl: 44,
};

export const DatePickerBase = forwardRef<HTMLInputElement, DatePickerBaseProps>(
  (
    {
      classNames,
      className,
      style,
      styles,
      wrapperProps,
      required,
      allowFreeInput = false,
      label,
      error,
      id,
      description,
      placeholder,
      shadow,
      transition = 'pop',
      transitionDuration = 100,
      transitionTimingFunction,
      size = 'sm',
      children,
      inputLabel,
      __staticSelector = 'DatePickerBase',
      dropdownOpened,
      setDropdownOpened,
      dropdownType = 'popover',
      clearable = true,
      clearButtonLabel,
      onClear,
      positionDependencies = [],
      zIndex,
      withinPortal = true,
      onBlur,
      onFocus,
      onChange,
      onKeyDown,
      name = 'date',
      sx,
      amountOfMonths = 1,
      onDropdownClose,
      onDropdownOpen,
      clickOutsideEvents = ['mousedown', 'touchstart'],
      modalZIndex,
      errorProps,
      labelProps,
      descriptionProps,
      clearButtonTabIndex = 0,
      unstyled,
      inputContainer,
      inputWrapperOrder,
      ...others
    }: DatePickerBaseProps,
    ref
  ) => {
    const { classes, cx, theme } = useStyles(null, { classNames, styles, name: __staticSelector });
    const { systemStyles, rest } = extractSystemStyles(others);
    const uuid = useId(id);
    const inputRef = useRef<HTMLButtonElement>();

    const closeDropdown = () => {
      setDropdownOpened(false);
      onDropdownClose?.();
    };

    const openDropdown = () => {
      setDropdownOpened(true);
      onDropdownOpen?.();
    };

    const toggleDropdown = () => {
      setDropdownOpened(!dropdownOpened);
      !dropdownOpened ? onDropdownOpen?.() : onDropdownClose?.();
    };

    const closeOnEscape = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.nativeEvent.code === 'Escape') {
        closeDropdown();
        window.setTimeout(() => inputRef.current?.focus(), 0);
      }
    };

    const rightSection = clearable ? (
      <CloseButton
        variant="transparent"
        aria-label={clearButtonLabel}
        onClick={onClear}
        size={size}
        tabIndex={clearButtonTabIndex}
      />
    ) : null;

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onBlur === 'function' && onBlur(event);
      if (allowFreeInput) {
        closeDropdown();
      }
    };

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onFocus === 'function' && onFocus(event);
      if (allowFreeInput) {
        openDropdown();
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      typeof onKeyDown === 'function' && onKeyDown(event);
      if ((event.code === 'Space' || event.code === 'Enter') && !allowFreeInput) {
        event.preventDefault();
        openDropdown();
      }
    };

    return (
      <Input.Wrapper
        required={required}
        id={uuid}
        label={label}
        error={error}
        description={description}
        className={className}
        style={style}
        classNames={classNames}
        styles={styles}
        size={size}
        __staticSelector={__staticSelector}
        sx={sx}
        errorProps={errorProps}
        descriptionProps={descriptionProps}
        labelProps={labelProps}
        inputContainer={inputContainer}
        inputWrapperOrder={inputWrapperOrder}
        {...systemStyles}
        {...wrapperProps}
      >
        <Popover
          position="bottom-start"
          __staticSelector={__staticSelector}
          withinPortal={withinPortal}
          offset={10}
          opened={dropdownOpened}
          transitionDuration={transitionDuration}
          transition={transition}
          positionDependencies={positionDependencies}
          shadow={shadow}
          onClose={closeDropdown}
          trapFocus={!allowFreeInput}
          withRoles={false}
          clickOutsideEvents={clickOutsideEvents}
          zIndex={zIndex}
          classNames={classNames}
          styles={styles}
          unstyled={unstyled}
        >
          <Popover.Target>
            <div className={classes.wrapper}>
              <Input<'input'>
                classNames={{
                  ...classNames,
                  input: cx(
                    classes.input,
                    { [classes.freeInput]: allowFreeInput },
                    classNames?.input
                  ),
                }}
                styles={styles}
                onClick={() => (!allowFreeInput ? toggleDropdown() : openDropdown())}
                onKeyDown={handleKeyDown}
                id={uuid}
                ref={useMergedRef(ref, inputRef)}
                __staticSelector={__staticSelector}
                size={size}
                name={name}
                placeholder={placeholder}
                value={inputLabel}
                required={required}
                invalid={!!error}
                readOnly={!allowFreeInput}
                rightSection={rightSection}
                rightSectionWidth={theme.fn.size({ size, sizes: RIGHT_SECTION_WIDTH })}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChange={onChange}
                autoComplete="off"
                {...rest}
              />
            </div>
          </Popover.Target>

          {dropdownType === 'popover' ? (
            <Popover.Dropdown>
              <div
                data-mantine-stop-propagation={dropdownOpened}
                onKeyDownCapture={closeOnEscape}
                aria-hidden={allowFreeInput || undefined}
              >
                {children}
              </div>
            </Popover.Dropdown>
          ) : (
            <Modal
              opened={dropdownOpened}
              onClose={closeDropdown}
              withCloseButton={false}
              size={amountOfMonths * 400}
              zIndex={modalZIndex}
            >
              {children}
            </Modal>
          )}
        </Popover>
      </Input.Wrapper>
    );
  }
);

DatePickerBase.displayName = '@mantine/dates/DatePickerBase';
