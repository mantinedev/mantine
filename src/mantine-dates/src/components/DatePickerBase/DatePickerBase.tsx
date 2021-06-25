import React, { useRef } from 'react';
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
  MantineSize,
} from '@mantine/core';
import { useId, useClickOutside, useFocusTrap, useMergedRef, useWindowEvent } from '@mantine/hooks';
import { CalendarStylesNames } from '../Calendar/Calendar';
import useStyles from './DatePickerBase.styles';

export type DatePickerStylesNames =
  | keyof ReturnType<typeof useStyles>
  | CalendarStylesNames
  | InputStylesNames
  | InputWrapperStylesNames;

export interface DatePickerBaseSharedProps
  extends DefaultProps<DatePickerStylesNames>,
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
  size: MantineSize;
}

export interface DatePickerBaseProps
  extends InputBaseProps,
    InputWrapperBaseProps,
    DatePickerBaseSharedProps {
  /** Internal prop to set input label */
  __inputLabel?: string;

  /** Static css selector base */
  __staticSelector?: string;

  /** Controls dropdown opened state */
  dropdownOpened: boolean;
  setDropdownOpened(opened: boolean): void;
}

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
  transition = 'rotate-right',
  transitionDuration = 200,
  transitionTimingFunction,
  elementRef,
  closeDropdownOnScroll = true,
  size = 'sm',
  children,
  __inputLabel,
  __staticSelector = 'date-picker',
  dropdownOpened,
  setDropdownOpened,
  ...others
}: DatePickerBaseProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames as any, __staticSelector);
  const _styles = mergeStyles(classes, styles as any);
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
      size={size}
      __staticSelector={__staticSelector}
      {...wrapperProps}
    >
      <div ref={clickOutsideRef}>
        <div className={cx(classes.wrapper, className)} style={_styles.wrapper}>
          <Input
            themeOverride={themeOverride}
            component="button"
            classNames={classNames as any}
            styles={styles as any}
            onClick={() => setDropdownOpened(!dropdownOpened)}
            id={uuid}
            elementRef={useMergedRef(elementRef, inputRef)}
            __staticSelector={__staticSelector}
            size={size}
            {...others}
          >
            {__inputLabel || (
              <Text style={_styles.placeholder} className={classes.placeholder} size={size}>
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
                {children}
              </Paper>
            </div>
          )}
        </Transition>
      </div>
    </InputWrapper>
  );
}

DatePickerBase.displayName = '@mantine/dates/DatePickerBase';
