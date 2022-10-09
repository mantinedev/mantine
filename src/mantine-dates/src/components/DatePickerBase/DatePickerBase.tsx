import React, { useRef, forwardRef } from 'react';
import {
  DefaultProps,
  Input,
  InputSharedProps,
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
  ModalProps,
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
  extends InputSharedProps,
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

  /** Dropdown positioning behavior */
  dropdownPosition?: 'bottom-start' | 'top-start' | 'flip';

  /** Allow to clear value */
  clearable?: boolean;

  /** aria-label for clear button */
  clearButtonLabel?: string;

  /** useEffect dependencies to force update dropdown position */
  positionDependencies?: any[];

  /** Dropdown zIndex */
  zIndex?: React.CSSProperties['zIndex'];

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

  /** Props spread to Modal component */
  modalProps?: Partial<ModalProps>;

  /** Modal z-index */
  modalZIndex?: React.CSSProperties['zIndex'];

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

const defaultTransition: MantineTransition = {
  in: { opacity: 1, transform: 'translateY(0) scale(1)' },
  out: { opacity: 0, transform: 'translateY(-25px) scale(0.93)' },
  common: { transformOrigin: 'top left' },
  transitionProperty: 'opacity, transform',
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
      transition = defaultTransition,
      transitionDuration = 100,
      transitionTimingFunction,
      size = 'sm',
      children,
      inputLabel,
      __staticSelector = 'DatePickerBase',
      dropdownOpened,
      setDropdownOpened,
      dropdownType = 'popover',
      dropdownPosition = 'flip',
      clearable = true,
      clearButtonLabel,
      onClear,
      positionDependencies = [],
      zIndex,
      withinPortal = false,
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
      modalProps,
      withAsterisk,
      ...others
    }: DatePickerBaseProps,
    ref
  ) => {
    const { classes, cx, theme } = useStyles(null, {
      classNames,
      styles,
      unstyled,
      name: __staticSelector,
    });
    const { systemStyles, rest } = extractSystemStyles(others);
    const uuid = useId(id);
    const inputRef = useRef<HTMLInputElement>();

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
      if (event.key === 'Escape') {
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
        unstyled={unstyled}
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
      if ((event.key === 'Space' || event.key === 'Enter') && !allowFreeInput) {
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
        unstyled={unstyled}
        withAsterisk={withAsterisk}
        {...systemStyles}
        {...wrapperProps}
      >
        <Popover
          __staticSelector={__staticSelector}
          withinPortal={withinPortal}
          offset={10}
          opened={dropdownOpened}
          transitionDuration={transitionDuration}
          transition={transition}
          positionDependencies={positionDependencies}
          middlewares={{ flip: dropdownPosition === 'flip', shift: false }}
          position={dropdownPosition === 'flip' ? 'bottom-start' : dropdownPosition}
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
                  input: cx(classes.input, classNames?.input),
                }}
                data-free-input={allowFreeInput || undefined}
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
                unstyled={unstyled}
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
              {...modalProps}
              opened={dropdownOpened}
              onClose={closeDropdown}
              withCloseButton={false}
              size={amountOfMonths * 400}
              zIndex={modalZIndex}
              unstyled={unstyled}
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
