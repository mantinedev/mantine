import React, { useState, useRef } from 'react';
import cx from 'clsx';
import { useId, useUncontrolled, useMergedRef } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineSize, mergeStyles } from '../../theme';
import {
  InputWrapper,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';
import { Input, InputBaseProps, InputStylesNames } from '../Input/Input';
import { Paper } from '../Paper/Paper';
import { Transition, MantineTransition } from '../Transition/Transition';
import { DefaultItem } from './DefaultItem/DefaultItem';
import useStyles from './Select.styles';

export type SelectStylesNames =
  | InputStylesNames
  | InputWrapperStylesNames
  | keyof ReturnType<typeof useStyles>;

export interface SelectItem {
  value: string;
  label: string;
  [key: string]: any;
}

export interface SelectProps
  extends DefaultProps<SelectStylesNames>,
    InputBaseProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'onChange'> {
  /** Input size */
  size?: MantineSize;

  /** Get input ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;

  /** Select data used to renderer items in dropdown */
  data: SelectItem[];

  /** Change item renderer */
  itemComponent?: React.FC<any>;

  /** Dropdown shadow from theme or any value to set box-shadow */
  shadow?: string;

  /** Controlled input value */
  value?: string;

  /** Uncontrolled input defaultValue */
  defaultValue?: string;

  /** Controlled input onChange handler */
  onChange?(value: string): void;

  /** Dropdown body appear/disappear transition */
  transition?: MantineTransition;

  /** Dropdown body transition duration */
  transitionDuration?: number;

  /** Dropdown body transition timing function, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Initial dropdown opened state */
  initiallyOpened?: boolean;

  /** Function based on which items in dropdown are filtered */
  filter?(value: string, item: SelectItem): boolean;

  /** Maximum dropdown height in px */
  maxDropdownHeight?: number;
}

function defaultFilter(value: string, item: SelectItem) {
  return item.label.toLowerCase().trim().includes(value.toLowerCase().trim());
}

export function Select({
  className,
  style,
  required = false,
  label,
  id,
  error,
  description,
  size = 'sm',
  shadow = 'sm',
  data,
  value,
  defaultValue,
  onChange,
  itemComponent: Item = DefaultItem,
  onKeyDown,
  onFocus,
  onBlur,
  transition = 'skew-up',
  transitionDuration = 0,
  initiallyOpened = false,
  transitionTimingFunction,
  wrapperProps,
  elementRef,
  themeOverride,
  classNames,
  styles,
  filter = defaultFilter,
  maxDropdownHeight = 220,
  ...others
}: SelectProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, size }, classNames as any, 'autocomplete');
  const _styles = mergeStyles(classes, styles as any);
  const [dropdownOpened, setDropdownOpened] = useState(initiallyOpened);
  const [hovered, setHovered] = useState(-1);
  const inputRef = useRef<HTMLInputElement>();
  const uuid = useId(id);
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
    rule: (val) => typeof val === 'string',
  });

  const selectedValue = data.find((item) => item.value === _value);
  const [inputValue, setInputValue] = useState(selectedValue?.label || '');

  const handleItemSelect = (item: SelectItem) => {
    handleChange(item.value);
    setHovered(-1);
    setInputValue(item.label);
    setDropdownOpened(false);
    inputRef.current.focus();
  };

  const filteredData = data.filter((item) => filter(inputValue, item));

  const items = filteredData.map((item, index) => (
    <Item
      key={item.value}
      className={cx(classes.item, { [classes.hovered]: hovered === index })}
      style={{ ..._styles.item, ...(hovered === index ? _styles.hovered : null) }}
      onMouseEnter={() => setHovered(index)}
      id={`${uuid}-${index}`}
      role="option"
      aria-selected={hovered === index}
      onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        handleItemSelect(item);
      }}
      {...item}
    />
  ));

  const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    typeof onKeyDown === 'function' && onKeyDown(event);

    switch (event.nativeEvent.code) {
      case 'ArrowUp': {
        event.preventDefault();
        setHovered((current) => (current > 0 ? current - 1 : current));
        break;
      }

      case 'ArrowDown': {
        event.preventDefault();
        setHovered((current) => (current < filteredData.length - 1 ? current + 1 : current));
        break;
      }

      case 'Enter': {
        if (filteredData[hovered]) {
          event.preventDefault();
          handleItemSelect(filteredData[hovered]);
        }
      }
    }
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onFocus === 'function' && onFocus(event);
    setDropdownOpened(true);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onBlur === 'function' && onBlur(event);
    const selected = data.find((item) => item.value === _value);
    setInputValue(selected?.label || '');
    setDropdownOpened(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
    setHovered(0);
    setDropdownOpened(true);
  };

  return (
    <InputWrapper
      required={required}
      id={uuid}
      label={label}
      error={error}
      description={description}
      size={size}
      className={className}
      style={style}
      themeOverride={themeOverride}
      classNames={classNames as any}
      styles={styles as any}
      __staticSelector="autocomplete"
      {...wrapperProps}
    >
      <div
        className={classes.wrapper}
        style={_styles.wrapper}
        role="combobox"
        aria-haspopup="listbox"
        aria-owns={`${uuid}-items`}
        aria-controls={uuid}
        aria-expanded={dropdownOpened}
        onMouseLeave={() => setHovered(-1)}
        tabIndex={-1}
      >
        <Input<'input'>
          {...others}
          type="text"
          required={required}
          elementRef={useMergedRef(elementRef, inputRef)}
          id={uuid}
          invalid={!!error}
          size={size}
          onKeyDown={handleInputKeydown}
          themeOverride={themeOverride}
          classNames={classNames as any}
          styles={styles as any}
          __staticSelector="autocomplete"
          value={inputValue}
          onChange={handleInputChange}
          aria-autocomplete="list"
          aria-controls={dropdownOpened ? `${uuid}-items` : null}
          aria-activedescendant={hovered !== -1 ? `${uuid}-${hovered}` : null}
          onClick={() => setDropdownOpened(true)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />

        <Transition
          mounted={dropdownOpened}
          transition={transition}
          duration={transitionDuration}
          timingFunction={transitionTimingFunction}
        >
          {(transitionStyles) => (
            <Paper
              id={`${uuid}-items`}
              aria-labelledby={`${uuid}-label`}
              role="listbox"
              className={classes.dropdown}
              shadow={shadow}
              style={{ ..._styles.dropdown, ...transitionStyles, maxHeight: maxDropdownHeight }}
            >
              {items}
            </Paper>
          )}
        </Transition>
      </div>
    </InputWrapper>
  );
}

Select.displayName = '@mantine/core/Select';
