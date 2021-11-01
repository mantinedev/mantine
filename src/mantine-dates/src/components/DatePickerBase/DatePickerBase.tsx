import React, { useRef, useState, forwardRef } from 'react';
import {
  DefaultProps,
  mergeStyles,
  Input,
  InputWrapper,
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
  MantineShadow,
  ClassNames,
  useUuid,
  useExtractedMargins,
} from '@mantine/core';
import { useClickOutside, useFocusTrap, useMergedRef, useWindowEvent } from '@mantine/hooks';
import { CalendarStylesNames } from '../Calendar/Calendar';
import useStyles from './DatePickerBase.styles';

export type DatePickerStylesNames =
  | ClassNames<typeof useStyles>
  | CalendarStylesNames
  | InputStylesNames
  | InputWrapperStylesNames;

export interface DatePickerBaseSharedProps
  extends InputBaseProps,
    InputWrapperBaseProps,
    DefaultProps<DatePickerStylesNames>,
    Omit<
      React.ComponentPropsWithoutRef<'input'>,
      'value' | 'defaultValue' | 'placeholder' | 'size'
    > {
  /** Props spread to root element (InputWrapper) */
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

  /** Set to true to disable dropdown closing on scroll */
  closeDropdownOnScroll?: boolean;

  /** Input size */
  size?: MantineSize;

  /** Where to show calendar in modal or popover */
  dropdownType?: 'popover' | 'modal';

  /** Allow to clear value */
  clearable?: boolean;

  /** Allow manual typing */
  allowManualTyping?: boolean;

  /** aria-label for clear button */
  clearButtonLabel?: string;

  /** useEffect dependencies to force update tooltip position */
  positionDependencies?: any[];

  /** Popper zIndex */
  zIndex?: number;

  /** call onChange with last valid value onBlur */
  fixOnBlur?: boolean;
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

export const DatePickerBase = forwardRef<HTMLInputElement, DatePickerBaseProps>(
  (
    {
      classNames,
      className,
      style,
      styles,
      wrapperProps,
      required,
      allowManualTyping = false,
      label,
      error,
      id,
      description,
      placeholder,
      shadow = 'sm',
      transition = 'pop-top-left',
      transitionDuration = 200,
      transitionTimingFunction,
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
      zIndex = 3,
      onFocus,
      onBlur,
      onChange,
      name = 'date',
      ...others
    }: DatePickerBaseProps,
    ref
  ) => {
    const { classes, cx } = useStyles({ size, invalid: !!error }, classNames, __staticSelector);
    const _styles = mergeStyles(classes, styles);
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const [dropdownElement, setDropdownElement] = useState<HTMLDivElement>(null);
    const [rootElement, setRootElement] = useState<HTMLDivElement>(null);
    const [referenceElement, setReferenceElement] = useState<HTMLDivElement>(null);
    const [isFocused, setFocused] = useState(false);
    const uuid = useUuid(id);

    const focusTrapRef = useFocusTrap(!isFocused);
    const inputRef = useRef<HTMLButtonElement>();

    const closeDropdown = () => {
      if (dropdownOpened) {
        setDropdownOpened(false);
        setTimeout(() => inputRef.current?.focus(), transitionDuration + 50);
      }
    };

    const closeOnEscape = (event: React.KeyboardEvent<HTMLDivElement>) =>
      event.nativeEvent.code === 'Escape' && closeDropdown();

    useClickOutside(() => dropdownType === 'popover' && closeDropdown(), null, [
      dropdownElement,
      rootElement,
    ]);

    useWindowEvent('scroll', () => closeDropdownOnScroll && setDropdownOpened(false));

    const rightSection = clearable ? (
      <CloseButton
        variant="transparent"
        aria-label={clearButtonLabel}
        onClick={onClear}
        size={size}
      />
    ) : null;

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onFocus === 'function' && onFocus(event);
      setFocused(true);
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onBlur === 'function' && onBlur(event);
      setFocused(false);
    };

    return (
      <InputWrapper
        required={required}
        id={uuid}
        label={label}
        error={error}
        description={description}
        className={className}
        style={mergedStyles}
        classNames={classNames}
        styles={styles}
        size={size}
        __staticSelector={__staticSelector}
        {...wrapperProps}
      >
        <div ref={setRootElement}>
          <div className={classes.wrapper} style={_styles.wrapper} ref={setReferenceElement}>
            <Input
              classNames={{ ...classNames, input: cx(classes.input, classNames?.input) }}
              styles={{ ...styles, input: { ...styles?.input, cursor: 'pointer' } }}
              onClick={() => setDropdownOpened(!dropdownOpened)}
              id={uuid}
              ref={useMergedRef(ref, inputRef)}
              __staticSelector={__staticSelector}
              size={size}
              name={name}
              placeholder={placeholder}
              value={inputLabel}
              required={required}
              invalid={!!error}
              readOnly={!allowManualTyping}
              rightSection={rightSection}
              rightSectionWidth={getSizeValue({ size, sizes: RIGHT_SECTION_WIDTH })}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onChange={onChange}
              autoComplete="off"
              {...rest}
            />
            {/* {inputLabel ? (
                <div className={classes.value} style={_styles.placeholder}>
                  {inputLabel}
                </div>
              ) : (
                <Text style={_styles.placeholder} className={classes.placeholder} size={size}>
                  {placeholder}
                </Text>
              )} */}
            {/* </Input> */}
          </div>

          {dropdownType === 'popover' ? (
            <Popper
              referenceElement={referenceElement}
              transitionDuration={transitionDuration}
              transitionTimingFunction={transitionTimingFunction}
              forceUpdateDependencies={positionDependencies}
              transition={transition}
              mounted={dropdownOpened}
              position="bottom"
              placement="start"
              gutter={0}
              withArrow
              arrowSize={3}
              zIndex={zIndex}
            >
              <div
                className={classes.dropdownWrapper}
                style={_styles.dropdownWrapper}
                ref={useMergedRef(focusTrapRef, setDropdownElement)}
                data-mantine-stop-propagation={dropdownType === 'popover' && dropdownOpened}
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
);

DatePickerBase.displayName = '@mantine/dates/DatePickerBase';
