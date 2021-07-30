import React, { useState, useRef } from 'react';
import cx from 'clsx';
import { useId, useUncontrolled, useMergedRef } from '@mantine/hooks';
import { DefaultProps, MantineSize, mergeStyles, useMantineTheme } from '../../theme';
import { scrollIntoView } from '../../utils';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import { Input } from '../Input/Input';
import { MantineTransition } from '../Transition/Transition';
import { DefaultValue, DefaultValueStylesNames } from './DefaultValue/DefaultValue';
import { DefaultItem } from '../Select/DefaultItem/DefaultItem';
import { filterData } from './filter-data/filter-data';
import { getSelectRightSectionProps } from '../Select/SelectRightSection/get-select-right-section-props';
import {
  SelectItem,
  SelectDataItem,
  BaseSelectProps,
  BaseSelectStylesNames,
} from '../Select/types';
import { SelectItems } from '../Select/SelectItems/SelectItems';
import { SelectDropdown } from '../Select/SelectDropdown/SelectDropdown';
import useStyles from './MultiSelect.styles';

export type MultiSelectStylesNames =
  | DefaultValueStylesNames
  | Exclude<keyof ReturnType<typeof useStyles>, 'searchInputEmpty' | 'searchInputInputHidden'>
  | Exclude<BaseSelectStylesNames, 'selected'>;

export interface MultiSelectProps extends DefaultProps<MultiSelectStylesNames>, BaseSelectProps {
  /** Input size */
  size?: MantineSize;

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: Record<string, any>;

  /** Data for select options */
  data: SelectDataItem[];

  /** Value for controlled component */
  value?: string[];

  /** Default value for uncontrolled component */
  defaultValue?: string[];

  /** Called each time value changes */
  onChange?(value: string[]): void;

  /** Component used to render values */
  valueComponent?: React.FC<any>;

  /** Component used to render item */
  itemComponent?: React.FC<any>;

  /** Dropdown body appear/disappear transition */
  transition?: MantineTransition;

  /** Dropdown body transition duration */
  transitionDuration?: number;

  /** Dropdown body transition timing function, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Dropdown shadow from theme or any value to set box-shadow */
  shadow?: string;

  /** Maximum dropdown height in px */
  maxDropdownHeight?: number;

  /** Nothing found label */
  nothingFound?: React.ReactNode;

  /** Enable items searching */
  searchable?: boolean;

  /** Function based on which items in dropdown are filtered */
  filter?(value: string, selected: boolean, item: SelectItem): boolean;

  /** Limit amount of items displayed at a time for searchable select */
  limit?: number;

  /** Clear search value when item is selected */
  clearSearchOnChange?: boolean;

  /** Allow to clear item */
  clearable?: boolean;

  /** aria-label for clear button */
  clearButtonLabel?: string;

  /** Clear search field value on blur */
  clearSearchOnBlur?: boolean;

  /** Called each time search query changes */
  onSearchChange?(query: string): void;

  /** Initial dropdown opened state */
  initiallyOpened?: boolean;

  /** Get input ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;
}

export function defaultFilter(value: string, selected: boolean, item: SelectItem) {
  if (selected) {
    return false;
  }

  return item.label.toLowerCase().trim().includes(value.toLowerCase().trim());
}

export function MultiSelect({
  className,
  style,
  themeOverride,
  required,
  label,
  description,
  size = 'sm',
  error,
  classNames,
  styles,
  wrapperProps,
  value,
  defaultValue,
  data,
  onChange,
  valueComponent: Value = DefaultValue,
  itemComponent = DefaultItem,
  id,
  transition = 'pop-top-left',
  transitionDuration = 0,
  transitionTimingFunction,
  maxDropdownHeight = 220,
  shadow = 'sm',
  nothingFound,
  onFocus,
  onBlur,
  searchable = false,
  placeholder,
  filter = defaultFilter,
  limit = Infinity,
  clearSearchOnChange = true,
  clearable = false,
  clearSearchOnBlur = false,
  clearButtonLabel,
  variant,
  onSearchChange,
  disabled = false,
  initiallyOpened = false,
  radius = 'sm',
  elementRef,
  icon,
  ...others
}: MultiSelectProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles(
    { theme, size, variant, invalid: !!error },
    classNames as any,
    'multi-select'
  );
  const _styles = mergeStyles(classes, styles as any);
  const dropdownRef = useRef<HTMLDivElement>();
  const inputRef = useRef<HTMLInputElement>();
  const itemsRefs = useRef<Record<string, HTMLDivElement>>({});
  const uuid = useId(id);
  const [dropdownOpened, setDropdownOpened] = useState(initiallyOpened);
  const [hovered, setHovered] = useState(-1);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (val: string) => {
    typeof onSearchChange === 'function' && onSearchChange(val);
    setSearchValue(val);
  };

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    rule: (val) => Array.isArray(val),
    onChange,
  });

  const formattedData = data.map((item) =>
    typeof item === 'string' ? { label: item, value: item } : item
  );

  const handleValueRemove = (_val: string) => setValue(_value.filter((val) => val !== _val));

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHovered(0);
    handleSearchChange(event.currentTarget.value);
    setDropdownOpened(true);
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onFocus === 'function' && onFocus(event);
    setDropdownOpened(true);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onBlur === 'function' && onBlur(event);
    clearSearchOnBlur && handleSearchChange('');
    setDropdownOpened(false);
  };

  const filteredData = filterData({
    data: formattedData,
    searchable,
    searchValue,
    limit,
    filter,
    value: _value,
  });

  const handleItemSelect = (item: SelectItem) => {
    clearSearchOnChange && handleSearchChange('');

    if (_value.includes(item.value)) {
      handleValueRemove(item.value);
    } else {
      setValue([..._value, item.value]);
      if (hovered === filteredData.length - 1) {
        setHovered(filteredData.length - 2);
      }
    }
  };

  const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
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

      case 'Enter': {
        if (filteredData[hovered]) {
          event.preventDefault();
          handleItemSelect(filteredData[hovered]);
        }

        break;
      }

      case 'Backspace': {
        if (_value.length > 0 && searchValue.length === 0 && searchable) {
          setValue(_value.slice(0, -1));
          setDropdownOpened(true);
        }

        break;
      }

      case 'Escape': {
        setDropdownOpened(false);
      }
    }
  };

  const selectedItems = _value
    .map((val) => formattedData.find((item) => item.value === val))
    .filter((val) => !!val)
    .map((item) => (
      <Value
        {...item}
        disabled={disabled}
        className={classes.value}
        style={_styles.value}
        onRemove={() => handleValueRemove(item.value)}
        key={item.value}
        themeOverride={themeOverride}
        size={size}
        styles={styles as any}
        classNames={classNames as any}
        radius={radius}
      />
    ));

  const handleClear = () => {
    handleSearchChange('');
    setValue([]);
    inputRef.current?.focus();
  };

  const shouldRenderDropdown =
    filteredData.length > 0 ||
    (searchValue.length > 0 && !!nothingFound && filteredData.length === 0);

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
      __staticSelector="multi-select"
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
        <Input<'div'>
          __staticSelector="multi-select"
          style={{ overflow: 'hidden' }}
          classNames={classNames as any}
          styles={{ ...styles, rightSection: { pointerEvents: 'none' } } as any}
          component="div"
          multiline
          size={size}
          variant={variant}
          disabled={disabled}
          invalid={!!error}
          required={required}
          radius={radius}
          icon={icon}
          onMouseDown={(event) => {
            event.preventDefault();
            inputRef.current?.focus();
          }}
          {...getSelectRightSectionProps({
            styles,
            size,
            shouldClear: clearable && _value.length > 0,
            themeOverride,
            clearButtonLabel,
            onClear: handleClear,
            error,
          })}
        >
          <div className={classes.values} style={_styles.values}>
            {selectedItems}

            <input
              ref={useMergedRef(elementRef, inputRef)}
              type="text"
              id={uuid}
              style={_styles.searchInput}
              className={cx(classes.searchInput, {
                [classes.searchInputInputHidden]:
                  (!dropdownOpened && _value.length > 0) || (!searchable && _value.length > 0),
                [classes.searchInputEmpty]: _value.length === 0,
              })}
              onKeyDown={handleInputKeydown}
              value={searchValue}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              readOnly={!searchable}
              placeholder={_value.length === 0 ? placeholder : undefined}
              disabled={disabled}
              {...others}
            />
          </div>
        </Input>

        <SelectDropdown
          themeOverride={themeOverride}
          mounted={dropdownOpened && shouldRenderDropdown}
          transition={transition}
          transitionDuration={transitionDuration}
          transitionTimingFunction={transitionTimingFunction}
          uuid={uuid}
          shadow={shadow}
          maxDropdownHeight={maxDropdownHeight}
          classNames={classNames as any}
          styles={styles as any}
          size={size}
          elementRef={dropdownRef}
          __staticSelector="multi-select"
        >
          <SelectItems
            data={filteredData}
            hovered={hovered}
            themeOverride={themeOverride}
            classNames={classNames as any}
            styles={styles as any}
            uuid={uuid}
            __staticSelector="multi-select"
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

MultiSelect.displayName = '@mantine/core/MultiSelect';
