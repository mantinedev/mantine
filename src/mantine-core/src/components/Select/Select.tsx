import React, { useState, useEffect, useRef } from 'react';
import cx from 'clsx';
import { useId, useUncontrolled, useMergedRef } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, MantineSize, mergeStyles } from '../../theme';
import { scrollIntoView } from '../../utils';
import {
  InputWrapper,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';
import { Input, InputBaseProps, InputStylesNames } from '../Input/Input';
import { Paper } from '../Paper/Paper';
import { Text } from '../Text/Text';
import { Transition, MantineTransition } from '../Transition/Transition';
import { DefaultItem } from './DefaultItem/DefaultItem';
import { getSelectRightSectionProps } from './SelectRightSection/get-select-right-section-props';
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

export type SelectDataItem = string | SelectItem;

export interface SelectProps
  extends DefaultProps<SelectStylesNames>,
    Omit<InputBaseProps, 'rightSection' | 'rightSectionProps' | 'rightSectionWidth'>,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'onChange'> {
  /** Input size */
  size?: MantineSize;

  /** Get input ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;

  /** Select data used to renderer items in dropdown */
  data: SelectDataItem[];

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

  /** Set to true to enable search */
  searchable?: boolean;

  /** Nothing found label */
  nothingFound?: React.ReactNode;

  /** Allow to clear item */
  clearable?: boolean;

  /** aria-label for clear button */
  clearButtonLabel?: string;

  /** Limit amount of items displayed at a time for searchable select */
  limit?: number;
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
  transition = 'fade',
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
  searchable = false,
  clearable = false,
  nothingFound,
  clearButtonLabel,
  limit = Infinity,
  ...others
}: SelectProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, size }, classNames as any, 'select');
  const _styles = mergeStyles(classes, styles as any);
  const [dropdownOpened, setDropdownOpened] = useState(initiallyOpened);
  const [hovered, setHovered] = useState(-1);
  const inputRef = useRef<HTMLInputElement>();
  const dropdownRef = useRef<HTMLDivElement>();
  const itemsRefs = useRef<Record<string, HTMLButtonElement>>({});
  const uuid = useId(id);
  const [_value, handleChange, inputMode] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
    rule: (val) => typeof val === 'string',
  });

  const formattedData = data.map((item) =>
    typeof item === 'string' ? { label: item, value: item } : item
  );

  const selectedValue = formattedData.find((item) => item.value === _value);
  const [inputValue, setInputValue] = useState(selectedValue?.label || '');

  const handleClear = () => {
    handleChange(null);
    if (inputMode === 'uncontrolled') {
      setInputValue('');
    }
    inputRef.current?.focus();
  };

  useEffect(() => {
    const newSelectedValue = formattedData.find((item) => item.value === _value);
    if (newSelectedValue) {
      setInputValue(newSelectedValue.label);
    } else {
      setInputValue('');
    }
  }, [_value]);

  const handleItemSelect = (item: SelectItem) => {
    handleChange(item.value);
    setHovered(-1);
    if (inputMode === 'uncontrolled') {
      setInputValue(item.label);
    }
    setDropdownOpened(false);
    inputRef.current.focus();
  };

  const shouldFilter = searchable && formattedData.every((item) => item.label !== inputValue);
  const filteredData = shouldFilter
    ? formattedData.filter((item) => filter(inputValue, item)).slice(0, limit)
    : formattedData;

  const items = filteredData.map((item, index) => (
    <Item
      key={item.value}
      className={cx(classes.item, {
        [classes.hovered]: hovered === index,
        [classes.selected]: item.value === _value,
      })}
      style={{ ..._styles.item, ...(hovered === index ? _styles.hovered : null) }}
      onMouseEnter={() => setHovered(index)}
      id={`${uuid}-${index}`}
      role="option"
      tabIndex={-1}
      aria-selected={hovered === index}
      elementRef={(node: HTMLButtonElement) => {
        itemsRefs.current[item.value] = node;
      }}
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
        setDropdownOpened(true);
        setHovered((current) => {
          const nextIndex = current > 0 ? current - 1 : current;
          scrollIntoView(dropdownRef.current, itemsRefs.current[filteredData[nextIndex]?.value]);
          return nextIndex;
        });
        break;
      }

      case 'ArrowDown': {
        event.preventDefault();
        setDropdownOpened(true);
        setHovered((current) => {
          const nextIndex = current < filteredData.length - 1 ? current + 1 : current;
          scrollIntoView(dropdownRef.current, itemsRefs.current[filteredData[nextIndex]?.value]);
          return nextIndex;
        });
        break;
      }

      case 'Escape': {
        event.preventDefault();
        setDropdownOpened(false);
        setHovered(-1);
        break;
      }

      case 'Space': {
        if (!searchable && !dropdownOpened) {
          event.preventDefault();
          setDropdownOpened(true);
          setHovered(0);
        }
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
    const selected = formattedData.find((item) => item.value === _value);
    setInputValue(selected?.label || '');
    setDropdownOpened(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (clearable && event.currentTarget.value === '') {
      handleChange(null);
      if (inputMode === 'uncontrolled') {
        setInputValue('');
      }
    } else {
      setInputValue(event.currentTarget.value);
    }
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
      __staticSelector="select"
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
          classNames={{
            ...classNames,
            input: cx({ [classes.notSearchable]: !searchable }, (classNames as any)?.input),
          }}
          __staticSelector="select"
          value={inputValue}
          onChange={handleInputChange}
          aria-autocomplete="list"
          aria-controls={dropdownOpened ? `${uuid}-items` : null}
          aria-activedescendant={hovered !== -1 ? `${uuid}-${hovered}` : null}
          onClick={() => setDropdownOpened(true)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          readOnly={!searchable}
          {...getSelectRightSectionProps({
            styles,
            size,
            shouldClear: clearable && !!selectedValue,
            themeOverride,
            clearButtonLabel,
            onClear: handleClear,
            error,
          })}
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
              elementRef={dropdownRef}
              style={{ ..._styles.dropdown, ...transitionStyles, maxHeight: maxDropdownHeight }}
              onMouseDown={(event) => event.preventDefault()}
            >
              {items.length > 0 ? (
                items
              ) : (
                <Text size={size} className={classes.nothingFound} style={_styles.nothingFound}>
                  {nothingFound}
                </Text>
              )}
            </Paper>
          )}
        </Transition>
      </div>
    </InputWrapper>
  );
}

Select.displayName = '@mantine/core/Select';
