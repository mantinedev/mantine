import React, { useState, useRef } from 'react';
import cx from 'clsx';
import { useId, useUncontrolled } from '@mantine/hooks';
import { DefaultProps, MantineSize, mergeStyles, useMantineTheme } from '../../theme';
import { scrollIntoView } from '../../utils';
import {
  InputWrapper,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';
import { CloseButton } from '../ActionIcon/CloseButton/CloseButton';
import { ChevronIcon } from '../NativeSelect/ChevronIcon';
import { Input, InputBaseProps, InputStylesNames } from '../Input/Input';
import { Transition, MantineTransition } from '../Transition/Transition';
import { Paper } from '../Paper/Paper';
import { Text } from '../Text/Text';
import { DefaultValue, DefaultValueStylesNames } from './DefaultValue/DefaultValue';
import { DefaultItem } from '../Select/DefaultItem/DefaultItem';
import { filterData } from './filter-data/filter-data';
import useStyles from './MultiSelect.styles';

export interface MultiSelectItem {
  value: string;
  label: string;
  [key: string]: any;
}

type MultiSelectDataItem = string | MultiSelectItem;

export type MultiSelectStylesNames =
  | DefaultValueStylesNames
  | Exclude<keyof ReturnType<typeof useStyles>, 'searchInputEmpty' | 'searchInputInputHidden'>
  | InputWrapperStylesNames
  | InputStylesNames;

interface MultiSelectProps
  extends DefaultProps<MultiSelectStylesNames>,
    InputWrapperBaseProps,
    InputBaseProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'value' | 'onChange' | 'size'> {
  /** Input size */
  size?: MantineSize;

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: Record<string, any>;

  /** Data for select options */
  data: MultiSelectDataItem[];

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
  filter?(value: string, selected: boolean, item: MultiSelectItem): boolean;

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
}

function defaultFilter(value: string, selected: boolean, item: MultiSelectItem) {
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
  itemComponent: Item = DefaultItem,
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
  ...others
}: MultiSelectProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, size, variant }, classNames as any, 'multi-select');
  const _styles = mergeStyles(classes, styles as any);

  const dropdownRef = useRef<HTMLDivElement>();
  const inputRef = useRef<HTMLInputElement>();
  const itemsRefs = useRef<Record<string, HTMLButtonElement>>({});
  const uuid = useId(id);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [hovered, setHovered] = useState(-1);

  const [searchValue, setSearchValue] = useState('');

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
    setSearchValue(event.currentTarget.value);
    setDropdownOpened(true);
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onFocus === 'function' && onFocus(event);
    setDropdownOpened(true);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onBlur === 'function' && onBlur(event);
    clearSearchOnBlur && setSearchValue('');
    setDropdownOpened(false);
  };

  const selectedItems = _value
    .map((val) => formattedData.find((item) => item.value === val))
    .filter((val) => !!val)
    .map((item) => (
      <Value
        {...item}
        className={classes.value}
        style={_styles.value}
        onRemove={() => handleValueRemove(item.value)}
        key={item.value}
        themeOverride={themeOverride}
        size={size}
        styles={styles as any}
        classNames={classNames as any}
      />
    ));

  const filteredData = filterData({
    data: formattedData,
    searchable,
    searchValue,
    limit,
    filter,
    value: _value,
  });

  const handleItemSelect = (item: MultiSelectItem) => {
    clearSearchOnChange && setSearchValue('');

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

  const items = filteredData.map((item, index) => (
    <Item
      key={item.value}
      className={cx(classes.item, { [classes.hovered]: hovered === index })}
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

  const handleClear = () => {
    setSearchValue('');
    setValue([]);
    inputRef.current?.focus();
  };

  const shouldRenderDropdown =
    items.length > 0 || (searchValue.length > 0 && !!nothingFound && items.length === 0);

  const shouldShowClear = clearable && _value.length > 0;
  const rightSection = shouldShowClear ? (
    <CloseButton
      themeOverride={themeOverride}
      variant="transparent"
      aria-label={clearButtonLabel}
      onClick={handleClear}
      size={size}
    />
  ) : (
    <ChevronIcon error={error} size={size} themeOverride={themeOverride} />
  );

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
          style={{ overflow: 'hidden' }}
          classNames={classNames as any}
          styles={styles as any}
          component="div"
          multiline
          size={size}
          variant={variant}
          rightSection={rightSection}
          onMouseDown={(event) => {
            event.preventDefault();
            inputRef.current?.focus();
          }}
        >
          <div className={classes.values} style={_styles.values}>
            {selectedItems}

            <input
              ref={inputRef}
              type="text"
              id={uuid}
              style={_styles.searchInput}
              className={cx(classes.searchInput, {
                [classes.searchInputInputHidden]:
                  !dropdownOpened || (!searchable && _value.length > 0),
                [classes.searchInputEmpty]: _value.length === 0,
              })}
              onKeyDown={handleInputKeydown}
              value={searchValue}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              readOnly={!searchable}
              placeholder={_value.length === 0 ? placeholder : undefined}
              {...others}
            />
          </div>
        </Input>

        <div style={{ position: 'relative' }}>
          <Transition
            mounted={shouldRenderDropdown && dropdownOpened}
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
      </div>
    </InputWrapper>
  );
}

MultiSelect.displayName = '@mantine/core/MultiSelect';
