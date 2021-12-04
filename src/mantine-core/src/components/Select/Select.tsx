import React, { useState, useEffect, useRef, forwardRef } from 'react';
import {
  useUncontrolled,
  useMergedRef,
  useDidUpdate,
  useScrollIntoView,
  useUuid,
} from '@mantine/hooks';
import {
  DefaultProps,
  MantineSize,
  MantineShadow,
  useExtractedMargins,
  getDefaultZIndex,
} from '@mantine/styles';
import { SelectScrollArea } from './SelectScrollArea/SelectScrollArea';
import { InputWrapper } from '../InputWrapper';
import { Input } from '../Input';
import { MantineTransition } from '../Transition';
import { DefaultItem } from './DefaultItem/DefaultItem';
import { getSelectRightSectionProps } from './SelectRightSection/get-select-right-section-props';
import { SelectItems } from './SelectItems/SelectItems';
import { SelectDropdown } from './SelectDropdown/SelectDropdown';
import { SelectItem, BaseSelectStylesNames, BaseSelectProps } from './types';
import { filterData } from './filter-data/filter-data';
import { groupSortData } from './group-sort-data/group-sort-data';
import useStyles from './Select.styles';

export interface SelectSharedProps<Item, Value> {
  /** Select data used to renderer items in dropdown */
  data: (string | Item)[];

  /** Controlled input value */
  value?: Value;

  /** Uncontrolled input defaultValue */
  defaultValue?: Value;

  /** Controlled input onChange handler */
  onChange?(value: Value): void;

  /** Function based on which items in dropdown are filtered */
  filter?(value: string, item: Item): boolean;

  /** Input size */
  size?: MantineSize;

  /** Dropdown body appear/disappear transition */
  transition?: MantineTransition;

  /** Dropdown body transition duration */
  transitionDuration?: number;

  /** Dropdown body transition timing function, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Dropdown shadow from theme or any value to set box-shadow */
  shadow?: MantineShadow;

  /** Initial dropdown opened state */
  initiallyOpened?: boolean;

  /** Change item renderer */
  itemComponent?: React.FC<any>;

  /** Called when dropdown is opened */
  onDropdownOpen?(): void;

  /** Called when dropdown is closed */
  onDropdownClose?(): void;

  /** Whether to render the dropdown in a Portal */
  withinPortal?: boolean;

  /** Limit amount of items displayed at a time for searchable select */
  limit?: number;

  /** Nothing found label */
  nothingFound?: React.ReactNode;

  /** Dropdown z-index */
  zIndex?: number;

  /** Dropdown positioning behavior */
  dropdownPosition?: 'bottom' | 'top' | 'flip';
}

export interface SelectProps
  extends DefaultProps<BaseSelectStylesNames>,
    BaseSelectProps,
    SelectSharedProps<SelectItem, string | null> {
  /** Maximum dropdown height in px */
  maxDropdownHeight?: number;

  /** Set to true to enable search */
  searchable?: boolean;

  /** Allow to clear item */
  clearable?: boolean;

  /** aria-label for clear button */
  clearButtonLabel?: string;

  /** Called each time search value changes */
  onSearchChange?(query: string): void;

  /** Allow creatable option  */
  creatable?: boolean;

  /** Function to get create Label */
  getCreateLabel?: (query: string) => React.ReactNode;

  /** Function to determine if create label should be displayed */
  shouldCreate?: (query: string, data: SelectItem[]) => boolean;

  /** Called when create option is selected */
  onCreate?: (query: string) => void;

  /** Change dropdown component, can be used to add native scrollbars */
  dropdownComponent?: any;
}

export function defaultFilter(value: string, item: SelectItem) {
  return item.label.toLowerCase().trim().includes(value.toLowerCase().trim());
}

export function defaultShouldCreate(query: string, data: SelectItem[]) {
  return !!query && !data.some((item) => item.value.toLowerCase() === query.toLowerCase());
}

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  (
    {
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
      onBlur,
      onFocus,
      transition = 'fade',
      transitionDuration = 0,
      initiallyOpened = false,
      transitionTimingFunction,
      wrapperProps,
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
      creatable = false,
      getCreateLabel,
      shouldCreate = defaultShouldCreate,
      onCreate,
      sx,
      dropdownComponent,
      onDropdownClose,
      onDropdownOpen,
      withinPortal,
      zIndex = getDefaultZIndex('popover'),
      name,
      dropdownPosition,
      ...others
    }: SelectProps,
    ref
  ) => {
    const { classes, cx, theme } = useStyles();
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const [dropdownOpened, _setDropdownOpened] = useState(initiallyOpened);
    const [hovered, setHovered] = useState(-1);
    const inputRef = useRef<HTMLInputElement>();
    const dropdownRef = useRef<HTMLDivElement>();
    const itemsRefs = useRef<Record<string, HTMLDivElement>>({});
    const [creatableDataValue, setCreatableDataValue] = useState<string | undefined>(undefined);
    const [direction, setDirection] = useState<React.CSSProperties['flexDirection']>('column');
    const isColumn = direction === 'column';
    const uuid = useUuid(id);
    const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView({
      duration: 0,
      offset: 5,
      cancelable: false,
      isList: true,
    });

    const setDropdownOpened = (opened: boolean) => {
      _setDropdownOpened(opened);
      const handler = opened ? onDropdownOpen : onDropdownClose;
      typeof handler === 'function' && handler();
    };

    const isCreatable = creatable && typeof getCreateLabel === 'function';
    let createLabel = null;

    const formattedData = data.map((item) =>
      typeof item === 'string' ? { label: item, value: item } : item
    );

    const sortedData = groupSortData({ data: formattedData });

    const [_value, handleChange, inputMode] = useUncontrolled({
      value,
      defaultValue,
      finalValue: null,
      onChange,
      rule: (val) => typeof val === 'string' || val === null,
    });

    const selectedValue = sortedData.find((item) => item.value === _value);
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
      const newSelectedValue = sortedData.find((item) => item.value === _value);

      if (newSelectedValue) {
        handleSearchChange(newSelectedValue.label);
      } else if (!isCreatable || !_value) {
        handleSearchChange('');
      }
    }, [_value]);

    const handleItemSelect = (item: SelectItem) => {
      handleChange(item.value);
      if (item.creatable) {
        setCreatableDataValue(item.value);
        typeof onCreate === 'function' && onCreate(item.value);
      }
      if (inputMode === 'uncontrolled') {
        handleSearchChange(item.label);
      }
      setHovered(-1);
      setTimeout(() => setDropdownOpened(false));
      inputRef.current.focus();
    };

    const filteredData = filterData({
      data: sortedData,
      searchable,
      limit,
      searchValue: inputValue,
      creatable: !!creatableDataValue && creatableDataValue === inputValue,
      filter,
    });

    if (isCreatable && shouldCreate(inputValue, filteredData)) {
      createLabel = getCreateLabel(inputValue);
      filteredData.push({ label: inputValue, value: inputValue, creatable: true });
    }

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
    }, [inputValue]);

    const selectedItemIndex = _value ? filteredData.findIndex((el) => el.value === _value) : 0;

    const handlePrevious = () => {
      setHovered((current) => {
        const nextIndex = getNextIndex(
          current,
          (index) => index - 1,
          (index) => index > 0
        );

        targetRef.current = itemsRefs.current[filteredData[nextIndex]?.value];
        scrollIntoView({ alignment: isColumn ? 'start' : 'end' });
        return nextIndex;
      });
    };

    const handleNext = () => {
      setHovered((current) => {
        const nextIndex = getNextIndex(
          current,
          (index) => index + 1,
          (index) => index < filteredData.length - 1
        );

        targetRef.current = itemsRefs.current[filteredData[nextIndex]?.value];
        scrollIntoView({ alignment: isColumn ? 'end' : 'start' });
        return nextIndex;
      });
    };

    const scrollSelectedItemIntoView = () =>
      window.setTimeout(() => {
        targetRef.current = itemsRefs.current[filteredData[selectedItemIndex]?.value];
        scrollIntoView({ alignment: isColumn ? 'end' : 'start' });
      }, 0);

    const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      typeof onKeyDown === 'function' && onKeyDown(event);

      switch (event.nativeEvent.code) {
        case 'ArrowUp': {
          event.preventDefault();

          if (!dropdownOpened) {
            setHovered(selectedItemIndex);
            setDropdownOpened(true);
            scrollSelectedItemIntoView();
          } else {
            isColumn ? handlePrevious() : handleNext();
          }

          break;
        }

        case 'ArrowDown': {
          event.preventDefault();

          if (!dropdownOpened) {
            setHovered(selectedItemIndex);
            setDropdownOpened(true);
            scrollSelectedItemIntoView();
          } else {
            isColumn ? handleNext() : handlePrevious();
          }

          break;
        }

        case 'Escape': {
          event.preventDefault();
          setDropdownOpened(false);
          setHovered(-1);
          break;
        }

        case 'Space': {
          if (!searchable) {
            if (filteredData[hovered] && dropdownOpened) {
              event.preventDefault();
              handleItemSelect(filteredData[hovered]);
            } else {
              setDropdownOpened(!dropdownOpened);
              setHovered(selectedItemIndex);
              scrollSelectedItemIntoView();
            }
          }

          break;
        }

        case 'Enter': {
          event.preventDefault();

          if (filteredData[hovered] && dropdownOpened) {
            event.preventDefault();
            handleItemSelect(filteredData[hovered]);
          } else {
            setDropdownOpened(true);
            setHovered(selectedItemIndex);
            scrollSelectedItemIntoView();
          }
        }
      }
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onBlur === 'function' && onBlur(event);
      const selected = sortedData.find((item) => item.value === _value);
      handleSearchChange(selected?.label || '');
      setDropdownOpened(false);
    };

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onFocus === 'function' && onFocus(event);
      if (searchable) {
        setDropdownOpened(true);
      }
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
      setHovered(0);
      setDropdownOpened(true);
    };

    const handleInputClick = () => {
      if (!searchable) {
        setDropdownOpened(!dropdownOpened);
      } else {
        setDropdownOpened(true);
      }

      if (_value && !dropdownOpened) {
        setHovered(selectedItemIndex);
        scrollSelectedItemIntoView();
      }
    };

    const shouldShowDropdown =
      dropdownOpened &&
      (searchable && !creatable ? filteredData.length > 0 || !!nothingFound : dropdownOpened);

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
        __staticSelector="Select"
        sx={sx}
        {...wrapperProps}
      >
        <div
          role="combobox"
          aria-haspopup="listbox"
          aria-owns={`${uuid}-items`}
          aria-controls={uuid}
          aria-expanded={shouldShowDropdown}
          onMouseLeave={() => setHovered(-1)}
          tabIndex={-1}
        >
          <Input<'input'>
            {...rest}
            type="text"
            required={required}
            ref={useMergedRef(ref, inputRef)}
            id={uuid}
            invalid={!!error}
            size={size}
            onKeyDown={handleInputKeydown}
            __staticSelector="Select"
            value={inputValue}
            onChange={handleInputChange}
            aria-autocomplete="list"
            aria-controls={shouldShowDropdown ? `${uuid}-items` : null}
            aria-activedescendant={hovered !== -1 ? `${uuid}-${hovered}` : null}
            onClick={handleInputClick}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            readOnly={!searchable}
            disabled={disabled}
            data-mantine-stop-propagation={shouldShowDropdown}
            autoComplete="off"
            classNames={{
              ...classNames,
              input: cx({ [classes.input]: !searchable }, classNames?.input),
            }}
            {...getSelectRightSectionProps({
              theme,
              rightSection,
              rightSectionWidth,
              styles,
              size,
              shouldClear: clearable && !!selectedValue,
              clearButtonLabel,
              onClear: handleClear,
              error,
            })}
          />

          <SelectDropdown
            referenceElement={inputRef.current}
            mounted={shouldShowDropdown}
            transition={transition}
            transitionDuration={transitionDuration}
            transitionTimingFunction={transitionTimingFunction}
            uuid={uuid}
            shadow={shadow}
            maxDropdownHeight={maxDropdownHeight}
            classNames={classNames}
            styles={styles}
            ref={useMergedRef(dropdownRef, scrollableRef)}
            __staticSelector="Select"
            dropdownComponent={dropdownComponent || SelectScrollArea}
            direction={direction}
            onDirectionChange={setDirection}
            withinPortal={withinPortal}
            zIndex={zIndex}
            dropdownPosition={dropdownPosition}
          >
            <SelectItems
              data={filteredData}
              hovered={hovered}
              classNames={classNames}
              styles={styles}
              isItemSelected={(val) => val === _value}
              uuid={uuid}
              __staticSelector="Select"
              onItemHover={setHovered}
              onItemSelect={handleItemSelect}
              itemsRefs={itemsRefs}
              itemComponent={itemComponent}
              size={size}
              nothingFound={nothingFound}
              creatable={isCreatable && !!createLabel}
              createLabel={createLabel}
            />
          </SelectDropdown>
        </div>

        {name && <input type="hidden" name={name} value={_value} />}
      </InputWrapper>
    );
  }
);

Select.displayName = '@mantine/core/Select';
