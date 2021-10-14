import React, { useState, useRef, forwardRef } from 'react';
import { useUncontrolled, useMergedRef, useDidUpdate, useScrollIntoView } from '@mantine/hooks';
import {
  mergeStyles,
  DefaultProps,
  MantineSize,
  MantineShadow,
  ClassNames,
  useUuid,
  useExtractedMargins,
} from '@mantine/styles';
import { InputWrapper } from '../InputWrapper';
import { Input } from '../Input';
import { MantineTransition } from '../Transition';
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
import { groupSortData } from '../Select/group-sort-data/group-sort-data';
import useStyles from './MultiSelect.styles';

export type MultiSelectStylesNames =
  | DefaultValueStylesNames
  | Exclude<
      ClassNames<typeof useStyles>,
      'searchInputEmpty' | 'searchInputInputHidden' | 'searchInputPointer'
    >
  | Exclude<BaseSelectStylesNames, 'selected'>;

export interface MultiSelectProps extends DefaultProps<MultiSelectStylesNames>, BaseSelectProps {
  /** Input size */
  size?: MantineSize;

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: React.ComponentPropsWithoutRef<'div'> & { [key: string]: any };

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
  shadow?: MantineShadow;

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

  /** Allow creatable option  */
  creatable?: boolean;

  /** Function to get create Label */
  getCreateLabel?: (query: string) => React.ReactNode;

  /** Function to determine if create label should be displayed */
  shouldCreate?: (query: string, data: SelectItem[]) => boolean;

  /** Called when create option is selected */
  onCreate?: (query: string) => void;
}

export function defaultFilter(value: string, selected: boolean, item: SelectItem) {
  if (selected) {
    return false;
  }
  return item.label.toLowerCase().trim().includes(value.toLowerCase().trim());
}

export function defaultShouldCreate(query: string, data: SelectItem[]) {
  return !!query && !data.some((item) => item.value.toLowerCase() === query.toLowerCase());
}

export const MultiSelect = forwardRef<HTMLInputElement, MultiSelectProps>(
  (
    {
      className,
      style,
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
      icon,
      rightSection,
      rightSectionWidth,
      creatable = false,
      getCreateLabel,
      shouldCreate = defaultShouldCreate,
      onCreate,
      ...others
    }: MultiSelectProps,
    ref
  ) => {
    const { classes, cx } = useStyles({ size, invalid: !!error }, classNames, 'multi-select');
    const _styles = mergeStyles(classes, styles);
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const dropdownRef = useRef<HTMLDivElement>();
    const inputRef = useRef<HTMLInputElement>();
    const itemsRefs = useRef<Record<string, HTMLDivElement>>({});
    const uuid = useUuid(id);
    const [dropdownOpened, setDropdownOpened] = useState(initiallyOpened);
    const [hovered, setHovered] = useState(-1);
    const [searchValue, setSearchValue] = useState('');
    const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView({
      duration: 0.25,
      offset: 5,
      cancelable: false,
    });
    const isCreatable = creatable && typeof getCreateLabel === 'function';
    let createLabel = null;

    const handleSearchChange = (val: string) => {
      typeof onSearchChange === 'function' && onSearchChange(val);
      setSearchValue(val);
    };

    const formattedData = data.map((item) =>
      typeof item === 'string' ? { label: item, value: item } : item
    );

    const sortedData = groupSortData({ data: formattedData });

    const [_value, setValue] = useUncontrolled({
      value,
      defaultValue,
      finalValue: [],
      rule: (val) => Array.isArray(val),
      onChange,
    });

    const handleValueRemove = (_val: string) => setValue(_value.filter((val) => val !== _val));

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      handleSearchChange(event.currentTarget.value);
      setDropdownOpened(true);
    };

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onFocus === 'function' && onFocus(event);
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onBlur === 'function' && onBlur(event);
      clearSearchOnBlur && handleSearchChange('');
      setDropdownOpened(false);
    };

    const filteredData = filterData({
      data: sortedData,
      searchable,
      searchValue,
      limit,
      filter,
      value: _value,
    });

    const getNextIndex = (
      index: number,
      nextItem: (index: number) => number,
      compareFn: (index: number) => boolean
    ) => {
      let i = index;
      while (compareFn(i)) {
        i = nextItem(i);
        if (!filteredData[i].disabled) return i;
      }
      return index;
    };

    useDidUpdate(() => {
      setHovered(
        getNextIndex(
          -1,
          (index) => index + 1,
          (index) => index < filteredData.length - 1
        )
      );
    }, [searchValue]);

    const handleItemSelect = (item: SelectItem) => {
      setTimeout(() => {
        clearSearchOnChange && handleSearchChange('');
        if (_value.includes(item.value)) {
          handleValueRemove(item.value);
        } else {
          setValue([..._value, item.value]);
          if (hovered === filteredData.length - 1) {
            setHovered(filteredData.length - 2);
          }
        }
        if (item.creatable) {
          typeof onCreate === 'function' && onCreate(item.value);
        }
      });
    };

    const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (event.nativeEvent.code) {
        case 'ArrowUp': {
          event.preventDefault();
          setDropdownOpened(true);
          setHovered((current) => {
            const nextIndex = getNextIndex(
              current,
              (index) => index - 1,
              (index) => index > 0
            );

            targetRef.current = itemsRefs.current[filteredData[nextIndex]?.value];

            scrollIntoView({
              alignment: 'start',
            });
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
              (index) => index < filteredData.length - 1
            );

            targetRef.current = itemsRefs.current[filteredData[nextIndex]?.value];

            scrollIntoView({
              alignment: 'end',
            });
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
      .map((val) => {
        let selectedItem = sortedData.find((item) => item.value === val && !item.disabled);
        if (!selectedItem && isCreatable) {
          selectedItem = {
            value: val,
            label: val,
          };
        }
        return selectedItem;
      })
      .filter((val) => !!val)
      .map((item) => (
        <Value
          {...item}
          disabled={disabled}
          className={classes.value}
          style={_styles.value}
          onRemove={() => handleValueRemove(item.value)}
          key={item.value}
          size={size}
          styles={styles}
          classNames={classNames}
          radius={radius}
        />
      ));

    const handleClear = () => {
      handleSearchChange('');
      setValue([]);
      inputRef.current?.focus();
    };

    if (isCreatable && shouldCreate(searchValue, filteredData)) {
      createLabel = getCreateLabel(searchValue);
      filteredData.push({ label: searchValue, value: searchValue, creatable: true });
    }

    const shouldRenderDropdown =
      filteredData.length > 0 ||
      isCreatable ||
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
        style={mergedStyles}
        classNames={classNames}
        styles={styles}
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
            classNames={classNames}
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
              !disabled && setDropdownOpened((o) => !o);
              inputRef.current?.focus();
            }}
            {...getSelectRightSectionProps({
              rightSection,
              rightSectionWidth,
              styles: {
                ...styles,
                input: {
                  ...styles?.input,
                  cursor: !searchable ? (disabled ? 'not-allowed' : 'pointer') : undefined,
                },
              },
              size,
              shouldClear: clearable && _value.length > 0,
              clearButtonLabel,
              onClear: handleClear,
              error,
            })}
          >
            <div className={classes.values} style={_styles.values}>
              {selectedItems}

              <input
                ref={useMergedRef(ref, inputRef)}
                type="text"
                id={uuid}
                style={_styles.searchInput}
                className={cx(classes.searchInput, {
                  [classes.searchInputPointer]: !searchable,
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
                data-mantine-stop-propagation={dropdownOpened}
                autoComplete="off"
                {...rest}
              />
            </div>
          </Input>

          <SelectDropdown
            mounted={dropdownOpened && shouldRenderDropdown}
            transition={transition}
            transitionDuration={transitionDuration}
            transitionTimingFunction={transitionTimingFunction}
            uuid={uuid}
            shadow={shadow}
            maxDropdownHeight={maxDropdownHeight}
            classNames={classNames}
            styles={styles}
            ref={useMergedRef(dropdownRef, scrollableRef)}
            __staticSelector="multi-select"
          >
            <SelectItems
              data={filteredData}
              hovered={hovered}
              classNames={classNames}
              styles={styles}
              uuid={uuid}
              __staticSelector="multi-select"
              onItemHover={setHovered}
              onItemSelect={handleItemSelect}
              itemsRefs={itemsRefs}
              itemComponent={itemComponent}
              size={size}
              nothingFound={nothingFound}
              creatable={creatable && !!createLabel}
              createLabel={createLabel}
            />
          </SelectDropdown>
        </div>
      </InputWrapper>
    );
  }
);

MultiSelect.displayName = '@mantine/core/MultiSelect';
