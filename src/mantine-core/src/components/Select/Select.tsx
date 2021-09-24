/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { useId, useUncontrolled, useMergedRef } from '@mantine/hooks';
import { DefaultProps, MantineSize, MantineShadow } from '@mantine/styles';
import { scrollIntoView } from '../../utils';
import { InputWrapper } from '../InputWrapper';
import { Input } from '../Input';
import { MantineTransition } from '../Transition';
import { DefaultItem } from './DefaultItem/DefaultItem';
import { getSelectRightSectionProps } from './SelectRightSection/get-select-right-section-props';
import { SelectItems } from './SelectItems/SelectItems';
import { SelectDropdown } from './SelectDropdown/SelectDropdown';
import { SelectDataItem, SelectItem, SelectSeperatorItem, BaseSelectStylesNames, BaseSelectProps } from './types';
import { filterData } from './filter-data/filter-data';

export interface SelectProps extends DefaultProps<BaseSelectStylesNames>, BaseSelectProps {
  /** Input size */
  size?: MantineSize;

  /** Get input ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;

  /** Select data used to renderer items in dropdown */
  data: SelectDataItem[];

  /** Change item renderer */
  itemComponent?: React.FC<any>;

  /** Dropdown shadow from theme or any value to set box-shadow */
  shadow?: MantineShadow;

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
  filter?(value: string, item: SelectItem | SelectSeperatorItem): boolean;

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

  /** Called each time search value changes */
  onSearchChange?(query: string): void;
}

export function defaultFilter(value: string, item: SelectItem | SelectSeperatorItem) {
  if (value.trim() === '' && item.seperator) return true;
  if (item.seperator) return false;
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
  itemComponent = DefaultItem,
  onKeyDown,
  onFocus,
  onBlur,
  transition = 'fade',
  transitionDuration = 0,
  initiallyOpened = false,
  transitionTimingFunction,
  wrapperProps,
  elementRef,
  classNames,
  styles,
  filter = defaultFilter,
  maxDropdownHeight = 220,
  searchable = false,
  clearable = false,
  nothingFound,
  clearButtonLabel,
  limit = Infinity,
  disabled = false,
  onSearchChange,
  rightSection,
  rightSectionWidth,
  ...others
}: SelectProps) {
  const [dropdownOpened, setDropdownOpened] = useState(initiallyOpened);
  const [hovered, setHovered] = useState(-1);
  const inputRef = useRef<HTMLInputElement>();
  const dropdownRef = useRef<HTMLDivElement>();
  const itemsRefs = useRef<Record<string, HTMLDivElement>>({});
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

  const formattedSelectableData = formattedData.filter((item) => !item.seperator) as SelectItem[];

  const selectedValue = formattedSelectableData.find((item) => item.value === _value);

  const [inputValue, setInputValue] = useState(selectedValue?.label || '');

  const handleSearchChange = (val: string) => {
    setInputValue(val);
    if (searchable && typeof onSearchChange === 'function') {
      onSearchChange(val);
    }
  };

  const handleClear = () => {
    handleChange(null);
    if (inputMode === 'uncontrolled') {
      handleSearchChange('');
    }
    inputRef.current?.focus();
  };

  useEffect(() => {
    const newSelectedValue = formattedSelectableData.find((item) => item.value === _value);

      if (newSelectedValue) {
      handleSearchChange(newSelectedValue.label);
    } else {
      handleSearchChange('');
    }
  }, [_value]);

  const handleItemSelect = (item: SelectItem) => {
    handleChange(item.value);
    setHovered(-1);
    if (inputMode === 'uncontrolled') {
      handleSearchChange(item.label);
    }
    setTimeout(() => setDropdownOpened(false));
    inputRef.current.focus();
  };

  const filteredData = filterData({
    data: formattedData,
    searchable,
    limit,
    searchValue: inputValue,
    filter,
  });

  const getNextIndex = (
    index: number,
    nextItem: (index: number) => number,
    compareFn: (index: number) => boolean) => {
    let i = index;
    while (compareFn(i)) {
      i = nextItem(i);
      if (filteredData[i].seperator) i = nextItem(i);
      else if (!filteredData[i].disabled) return i;
    }
    return index;
  };

  useDidUpdate(() => {
    setHovered(getNextIndex(
      -1,
      (index) => index + 1,
      (index) => index < filteredData.length - 1));
  }, [inputValue]);

  const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    typeof onKeyDown === 'function' && onKeyDown(event);

    switch (event.nativeEvent.code) {
      case 'ArrowUp': {
        event.preventDefault();
        setDropdownOpened(true);
        setHovered((current) => {
          const nextIndex = getNextIndex(current, (index) => index - 1, (index) => index > 0);
          scrollIntoView(dropdownRef.current, itemsRefs.current[filteredData[nextIndex]?.value]);
          return nextIndex;
        });
        break;
      }

      case 'ArrowDown': {
        event.preventDefault();
        setDropdownOpened(true);
        setHovered((current) => {
          const nextIndex = getNextIndex(
            current,
            (index) => index + 1,
            (index) => index < filteredData.length - 1);
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
          setHovered(getNextIndex(
            -1,
            (index) => index + 1,
            (index) => index < filteredData.length - 1));
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
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onBlur === 'function' && onBlur(event);
    const selected = formattedSelectableData.find((item) => item.value === _value);
    handleSearchChange(selected?.label || '');
    setDropdownOpened(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (clearable && event.currentTarget.value === '') {
      handleChange(null);
      if (inputMode === 'uncontrolled') {
        handleSearchChange('');
      }
    } else {
      handleSearchChange(event.currentTarget.value);
    }
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
      classNames={classNames}
      styles={styles}
      __staticSelector="select"
      {...wrapperProps}
    >
      <div
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
          classNames={classNames}
          __staticSelector="select"
          value={inputValue}
          onChange={handleInputChange}
          aria-autocomplete="list"
          aria-controls={dropdownOpened ? `${uuid}-items` : null}
          aria-activedescendant={hovered !== -1 ? `${uuid}-${hovered}` : null}
          onClick={() => setDropdownOpened((o) => !o)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          readOnly={!searchable}
          disabled={disabled}
          data-mantine-stop-propagation={dropdownOpened}
          {...getSelectRightSectionProps({
            rightSection,
            rightSectionWidth,
            styles: {
              ...styles,
              input: {
                cursor: !searchable ? (disabled ? 'not-allowed' : 'pointer') : undefined,
                ...styles?.input,
              },
            },
            size,
            shouldClear: clearable && !!selectedValue,
            clearButtonLabel,
            onClear: handleClear,
            error,
          })}
        />

        <SelectDropdown
          mounted={dropdownOpened}
          transition={transition}
          transitionDuration={transitionDuration}
          transitionTimingFunction={transitionTimingFunction}
          uuid={uuid}
          shadow={shadow}
          maxDropdownHeight={maxDropdownHeight}
          classNames={classNames}
          styles={styles}
          elementRef={dropdownRef}
          __staticSelector="select"
        >
          <SelectItems
            data={filteredData}
            hovered={hovered}
            classNames={classNames}
            styles={styles}
            isItemSelected={(val) => val === _value}
            uuid={uuid}
            __staticSelector="select"
            onItemHover={setHovered}
            onItemSelect={handleItemSelect}
            itemsRefs={itemsRefs}
            itemComponent={itemComponent}
            size={size}
            nothingFound={nothingFound}
          />
        </SelectDropdown>
      </div>
    </InputWrapper>
  );
}

Select.displayName = '@mantine/core/Select';
