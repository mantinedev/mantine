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
  extractSystemStyles,
  getDefaultZIndex,
  useMantineDefaultProps,
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
import { groupOptions } from '../../utils';
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

  /** Whether to switch item order and keyboard navigation on dropdown position flip */
  switchDirectionOnFlip?: boolean;

  /** useEffect dependencies to force update dropdown position */
  positionDependencies?: any[];
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

  /** Select highlighted item on blur */
  selectOnBlur?: boolean;

  /** Allow deselecting items on click */
  allowDeselect?: boolean;

  /** Should data be filtered when search value exactly matches selected item */
  filterDataOnExactSearchMatch?: boolean;

  /** Set the clear button tab index to disabled or default after input field */
  clearButtonTabIndex?: -1 | 0;
}

export function defaultFilter(value: string, item: SelectItem) {
  return item.label.toLowerCase().trim().includes(value.toLowerCase().trim());
}

export function defaultShouldCreate(query: string, data: SelectItem[]) {
  return !!query && !data.some((item) => item.label.toLowerCase() === query.toLowerCase());
}

const defaultProps: Partial<SelectProps> = {
  required: false,
  size: 'sm',
  shadow: 'sm',
  itemComponent: DefaultItem,
  transition: 'fade',
  transitionDuration: 0,
  initiallyOpened: false,
  filter: defaultFilter,
  maxDropdownHeight: 220,
  searchable: false,
  clearable: false,
  limit: Infinity,
  disabled: false,
  creatable: false,
  shouldCreate: defaultShouldCreate,
  selectOnBlur: false,
  switchDirectionOnFlip: false,
  filterDataOnExactSearchMatch: false,
  zIndex: getDefaultZIndex('popover'),
  clearButtonTabIndex: 0,
  positionDependencies: [],
};

export const Select = forwardRef<HTMLInputElement, SelectProps>((props: SelectProps, ref) => {
  const {
    className,
    style,
    required,
    label,
    id,
    error,
    description,
    size,
    shadow,
    data,
    value,
    defaultValue,
    onChange,
    itemComponent,
    onKeyDown,
    onBlur,
    onFocus,
    transition,
    transitionDuration,
    initiallyOpened,
    transitionTimingFunction,
    wrapperProps,
    classNames,
    styles,
    filter,
    maxDropdownHeight,
    searchable,
    clearable,
    nothingFound,
    clearButtonLabel,
    limit,
    disabled,
    onSearchChange,
    rightSection,
    rightSectionWidth,
    creatable,
    getCreateLabel,
    shouldCreate,
    selectOnBlur,
    onCreate,
    sx,
    dropdownComponent,
    onDropdownClose,
    onDropdownOpen,
    withinPortal,
    switchDirectionOnFlip,
    zIndex,
    name,
    dropdownPosition,
    allowDeselect,
    errorProps,
    descriptionProps,
    labelProps,
    placeholder,
    filterDataOnExactSearchMatch,
    clearButtonTabIndex,
    form,
    positionDependencies,
    ...others
  } = useMantineDefaultProps('Select', defaultProps, props);

  const { classes, cx, theme } = useStyles();
  const { systemStyles, rest } = extractSystemStyles(others);
  const [dropdownOpened, _setDropdownOpened] = useState(initiallyOpened);
  const [hovered, setHovered] = useState(-1);
  const inputRef = useRef<HTMLInputElement>();
  const dropdownRef = useRef<HTMLDivElement>();
  const itemsRefs = useRef<Record<string, HTMLDivElement>>({});
  const [direction, setDirection] = useState<React.CSSProperties['flexDirection']>('column');
  const isColumn = direction === 'column';
  const uuid = useUuid(id);
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView({
    duration: 0,
    offset: 5,
    cancelable: false,
    isList: true,
  });

  const isDeselectable = allowDeselect === undefined ? clearable : allowDeselect;

  const setDropdownOpened = (opened: boolean) => {
    if (dropdownOpened !== opened) {
      _setDropdownOpened(opened);
      const handler = opened ? onDropdownOpen : onDropdownClose;
      typeof handler === 'function' && handler();
    }
  };

  const isCreatable = creatable && typeof getCreateLabel === 'function';
  let createLabel = null;

  const formattedData = data.map((item) =>
    typeof item === 'string' ? { label: item, value: item } : item
  );

  const sortedData = groupOptions({ data: formattedData });

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

  useEffect(() => {
    if (selectedValue && (!searchable || !dropdownOpened)) {
      handleSearchChange(selectedValue.label);
    }
  }, [selectedValue?.label]);

  const handleItemSelect = (item: SelectItem) => {
    if (isDeselectable && selectedValue?.value === item.value) {
      handleChange(null);
      setDropdownOpened(false);
    } else {
      handleChange(item.value);

      if (item.creatable) {
        typeof onCreate === 'function' && onCreate(item.value);
      }

      if (inputMode === 'uncontrolled') {
        handleSearchChange(item.label);
      }
      setHovered(-1);
      setDropdownOpened(false);
      inputRef.current.focus();
    }
  };

  const filteredData = filterData({
    data: sortedData,
    searchable,
    limit,
    searchValue: inputValue,
    filter,
    filterDataOnExactSearchMatch,
    value: _value,
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

      case 'Home': {
        if (!searchable) {
          event.preventDefault();

          if (!dropdownOpened) {
            setDropdownOpened(true);
          }

          const firstItemIndex = filteredData.findIndex((item) => !item.disabled);
          setHovered(firstItemIndex);
          scrollIntoView({ alignment: isColumn ? 'end' : 'start' });
        }
        break;
      }

      case 'End': {
        if (!searchable) {
          event.preventDefault();

          if (!dropdownOpened) {
            setDropdownOpened(true);
          }

          const lastItemIndex = filteredData.map((item) => !!item.disabled).lastIndexOf(false);
          setHovered(lastItemIndex);
          scrollIntoView({ alignment: isColumn ? 'end' : 'start' });
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
            setDropdownOpened(true);
            setHovered(selectedItemIndex);
            scrollSelectedItemIntoView();
          }
        }

        break;
      }

      case 'Enter': {
        if (!searchable) {
          event.preventDefault();
        }

        if (filteredData[hovered] && dropdownOpened) {
          event.preventDefault();
          handleItemSelect(filteredData[hovered]);
        }
      }
    }
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onBlur === 'function' && onBlur(event);
    const selected = sortedData.find((item) => item.value === _value);
    if (selectOnBlur && filteredData[hovered] && dropdownOpened) {
      handleItemSelect(filteredData[hovered]);
    }
    handleSearchChange(selected?.label || '');
    setDropdownOpened(false);
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onFocus === 'function' && onFocus(event);
    if (searchable) {
      setDropdownOpened(true);
      scrollSelectedItemIntoView();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(event.currentTarget.value);

    if (clearable && event.currentTarget.value === '') {
      handleChange(null);
    }

    setHovered(0);
    setDropdownOpened(true);
  };

  const handleInputClick = () => {
    let dropdownOpen = true;

    if (!searchable) {
      dropdownOpen = !dropdownOpened;
    }

    setDropdownOpened(dropdownOpen);

    if (_value && dropdownOpen) {
      setHovered(selectedItemIndex);
      scrollSelectedItemIntoView();
    }
  };

  const shouldShowDropdown =
    filteredData.length > 0 ? dropdownOpened : dropdownOpened && !!nothingFound;

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
      __staticSelector="Select"
      sx={sx}
      errorProps={errorProps}
      descriptionProps={descriptionProps}
      labelProps={labelProps}
      {...systemStyles}
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
        <input type="hidden" name={name} value={_value || ''} form={form} />

        <Input<'input'>
          autoComplete="nope"
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
          placeholder={placeholder}
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
          name={null}
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
            clearButtonTabIndex,
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
          switchDirectionOnFlip={switchDirectionOnFlip}
          withinPortal={withinPortal}
          zIndex={zIndex}
          dropdownPosition={dropdownPosition}
          positionDependencies={positionDependencies}
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
            aria-label={label}
          />
        </SelectDropdown>
      </div>
    </InputWrapper>
  );
});

Select.displayName = '@mantine/core/Select';
