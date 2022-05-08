import React, { useState, useRef, forwardRef } from 'react';
import {
  useUncontrolled,
  useMergedRef,
  useDidUpdate,
  useScrollIntoView,
  useUuid,
} from '@mantine/hooks';
import {
  DefaultProps,
  Selectors,
  extractSystemStyles,
  getDefaultZIndex,
  useMantineDefaultProps,
} from '@mantine/styles';
import { InputWrapper } from '../InputWrapper';
import { Input } from '../Input';
import { DefaultValue, DefaultValueStylesNames } from './DefaultValue/DefaultValue';
import { DefaultItem } from '../Select/DefaultItem/DefaultItem';
import { filterData } from './filter-data/filter-data';
import { getSelectRightSectionProps } from '../Select/SelectRightSection/get-select-right-section-props';
import { SelectScrollArea } from '../Select/SelectScrollArea/SelectScrollArea';
import { SelectItem, BaseSelectProps, BaseSelectStylesNames } from '../Select/types';
import { SelectItems } from '../Select/SelectItems/SelectItems';
import { SelectDropdown } from '../Select/SelectDropdown/SelectDropdown';
import { groupOptions } from '../../utils';
import useStyles from './MultiSelect.styles';
import { SelectSharedProps } from '../Select/Select';

export type MultiSelectStylesNames =
  | DefaultValueStylesNames
  | Exclude<
      Selectors<typeof useStyles>,
      'searchInputEmpty' | 'searchInputInputHidden' | 'searchInputPointer'
    >
  | Exclude<BaseSelectStylesNames, 'selected'>;

export interface MultiSelectProps
  extends DefaultProps<MultiSelectStylesNames>,
    BaseSelectProps,
    Omit<SelectSharedProps<SelectItem, string[]>, 'filter'> {
  /** Component used to render values */
  valueComponent?: React.FC<any>;

  /** Maximum dropdown height in px */
  maxDropdownHeight?: number;

  /** Enable items searching */
  searchable?: boolean;

  /** Function based on which items in dropdown are filtered */
  filter?(value: string, selected: boolean, item: SelectItem): boolean;

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

  /** Allow creatable option  */
  creatable?: boolean;

  /** Function to get create Label */
  getCreateLabel?: (query: string) => React.ReactNode;

  /** Function to determine if create label should be displayed */
  shouldCreate?: (query: string, data: SelectItem[]) => boolean;

  /** Called when create option is selected */
  onCreate?: (query: string) => void;

  /** Change dropdown component, can be used to add custom scrollbars */
  dropdownComponent?: any;

  /** Limit amount of items selected */
  maxSelectedValues?: number;

  /** Select highlighted item on blur */
  selectOnBlur?: boolean;

  /** Set the clear button tab index to disabled or default after input field */
  clearButtonTabIndex?: -1 | 0;
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

const defaultProps: Partial<MultiSelectProps> = {
  size: 'sm',
  valueComponent: DefaultValue,
  itemComponent: DefaultItem,
  transition: 'pop-top-left',
  transitionDuration: 0,
  maxDropdownHeight: 220,
  shadow: 'sm',
  searchable: false,
  filter: defaultFilter,
  limit: Infinity,
  clearSearchOnChange: true,
  clearable: false,
  clearSearchOnBlur: false,
  disabled: false,
  initiallyOpened: false,
  creatable: false,
  shouldCreate: defaultShouldCreate,
  switchDirectionOnFlip: false,
  zIndex: getDefaultZIndex('popover'),
  selectOnBlur: false,
  clearButtonTabIndex: 0,
  positionDependencies: [],
};

export const MultiSelect = forwardRef<HTMLInputElement, MultiSelectProps>(
  (props: MultiSelectProps, ref) => {
    const {
      className,
      style,
      required,
      label,
      description,
      size,
      error,
      classNames,
      styles,
      wrapperProps,
      value,
      defaultValue,
      data,
      onChange,
      valueComponent: Value,
      itemComponent,
      id,
      transition,
      transitionDuration,
      transitionTimingFunction,
      maxDropdownHeight,
      shadow,
      nothingFound,
      onFocus,
      onBlur,
      searchable,
      placeholder,
      filter,
      limit,
      clearSearchOnChange,
      clearable,
      clearSearchOnBlur,
      clearButtonLabel,
      variant,
      onSearchChange,
      disabled,
      initiallyOpened,
      radius,
      icon,
      rightSection,
      rightSectionWidth,
      creatable,
      getCreateLabel,
      shouldCreate,
      onCreate,
      sx,
      dropdownComponent,
      onDropdownClose,
      onDropdownOpen,
      maxSelectedValues,
      withinPortal,
      switchDirectionOnFlip,
      zIndex,
      selectOnBlur,
      name,
      dropdownPosition,
      errorProps,
      labelProps,
      descriptionProps,
      clearButtonTabIndex,
      form,
      positionDependencies,
      onKeyDown,
      ...others
    } = useMantineDefaultProps('MultiSelect', defaultProps, props);

    const { classes, cx, theme } = useStyles(
      { size, invalid: !!error },
      { classNames, styles, name: 'MultiSelect' }
    );
    const { systemStyles, rest } = extractSystemStyles(others);
    const dropdownRef = useRef<HTMLDivElement>();
    const inputRef = useRef<HTMLInputElement>();
    const wrapperRef = useRef<HTMLDivElement>();
    const itemsRefs = useRef<Record<string, HTMLDivElement>>({});
    const uuid = useUuid(id);
    const [dropdownOpened, _setDropdownOpened] = useState(initiallyOpened);
    const [hovered, setHovered] = useState(-1);
    const [direction, setDirection] = useState<React.CSSProperties['flexDirection']>('column');
    const [searchValue, setSearchValue] = useState('');

    const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView({
      duration: 0,
      offset: 5,
      cancelable: false,
      isList: true,
    });

    const isCreatable = creatable && typeof getCreateLabel === 'function';
    let createLabel = null;

    const setDropdownOpened = (opened: boolean) => {
      _setDropdownOpened(opened);
      const handler = opened ? onDropdownOpen : onDropdownClose;
      typeof handler === 'function' && handler();
    };

    const handleSearchChange = (val: string) => {
      typeof onSearchChange === 'function' && onSearchChange(val);
      setSearchValue(val);
    };

    const formattedData = data.map((item) =>
      typeof item === 'string' ? { label: item, value: item } : item
    );

    const sortedData = groupOptions({ data: formattedData });

    const [_value, setValue] = useUncontrolled({
      value,
      defaultValue,
      finalValue: [],
      rule: (val) => Array.isArray(val),
      onChange,
    });

    const valuesOverflow = useRef(!!maxSelectedValues && maxSelectedValues < _value.length);

    const handleValueRemove = (_val: string) => {
      const newValue = _value.filter((val) => val !== _val);
      setValue(newValue);

      if (!!maxSelectedValues && newValue.length < maxSelectedValues) {
        valuesOverflow.current = false;
      }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      handleSearchChange(event.currentTarget.value);
      setDropdownOpened(true);
    };

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onFocus === 'function' && onFocus(event);
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

    useDidUpdate(() => {
      if (!disabled && _value.length >= data.length) {
        setDropdownOpened(false);
      }

      if (!!maxSelectedValues && _value.length < maxSelectedValues) {
        valuesOverflow.current = false;
      }

      if (!!maxSelectedValues && _value.length >= maxSelectedValues) {
        valuesOverflow.current = true;
        setDropdownOpened(false);
      }
    }, [_value]);

    const handleItemSelect = (item: SelectItem) => {
      clearSearchOnChange && handleSearchChange('');
      if (_value.includes(item.value)) {
        handleValueRemove(item.value);
      } else {
        setValue([..._value, item.value]);
        if (_value.length === maxSelectedValues - 1) {
          valuesOverflow.current = true;
          setDropdownOpened(false);
        }
        if (hovered === filteredData.length - 1) {
          setHovered(filteredData.length - 2);
        }
      }
      if (item.creatable) {
        typeof onCreate === 'function' && onCreate(item.value);
      }
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onBlur === 'function' && onBlur(event);
      if (selectOnBlur && filteredData[hovered] && dropdownOpened) {
        handleItemSelect(filteredData[hovered]);
      }
      clearSearchOnBlur && handleSearchChange('');
      setDropdownOpened(false);
    };

    const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(event);

      if (event.nativeEvent.code !== 'Backspace' && !!maxSelectedValues && valuesOverflow.current) {
        return;
      }

      const isColumn = direction === 'column';

      const handleNext = () => {
        setHovered((current) => {
          const nextIndex = getNextIndex(
            current,
            (index) => index + 1,
            (index) => index < filteredData.length - 1
          );

          if (dropdownOpened) {
            targetRef.current = itemsRefs.current[filteredData[nextIndex]?.value];

            scrollIntoView({
              alignment: isColumn ? 'end' : 'start',
            });
          }

          return nextIndex;
        });
      };

      const handlePrevious = () => {
        setHovered((current) => {
          const nextIndex = getNextIndex(
            current,
            (index) => index - 1,
            (index) => index > 0
          );

          if (dropdownOpened) {
            targetRef.current = itemsRefs.current[filteredData[nextIndex]?.value];

            scrollIntoView({
              alignment: isColumn ? 'start' : 'end',
            });
          }

          return nextIndex;
        });
      };

      switch (event.nativeEvent.code) {
        case 'ArrowUp': {
          event.preventDefault();
          setDropdownOpened(true);

          isColumn ? handlePrevious() : handleNext();

          break;
        }

        case 'ArrowDown': {
          event.preventDefault();
          setDropdownOpened(true);

          isColumn ? handleNext() : handlePrevious();

          break;
        }

        case 'Enter': {
          event.preventDefault();

          if (filteredData[hovered] && dropdownOpened) {
            handleItemSelect(filteredData[hovered]);
          } else {
            setDropdownOpened(true);
          }

          break;
        }

        case 'Space': {
          if (!searchable) {
            event.preventDefault();
            if (filteredData[hovered] && dropdownOpened) {
              handleItemSelect(filteredData[hovered]);
            } else {
              setDropdownOpened(true);
            }
          }

          break;
        }

        case 'Backspace': {
          if (_value.length > 0 && searchValue.length === 0) {
            setValue(_value.slice(0, -1));
            setDropdownOpened(true);
            if (maxSelectedValues) {
              valuesOverflow.current = false;
            }
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
            scrollIntoView({
              alignment: isColumn ? 'end' : 'start',
            });
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
            scrollIntoView({
              alignment: isColumn ? 'end' : 'start',
            });
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
          onRemove={(event: React.MouseEvent<HTMLButtonElement>) => {
            if (dropdownOpened) {
              event.preventDefault();
              event.stopPropagation();
            }
            handleValueRemove(item.value);
            setDropdownOpened(true);
          }}
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
      if (maxSelectedValues) {
        valuesOverflow.current = false;
      }
    };

    if (isCreatable && shouldCreate(searchValue, sortedData)) {
      createLabel = getCreateLabel(searchValue);
      filteredData.push({ label: searchValue, value: searchValue, creatable: true });
    }

    const shouldRenderDropdown =
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
        __staticSelector="MultiSelect"
        sx={sx}
        errorProps={errorProps}
        descriptionProps={descriptionProps}
        labelProps={labelProps}
        {...systemStyles}
        {...wrapperProps}
      >
        <div
          className={classes.wrapper}
          role="combobox"
          aria-haspopup="listbox"
          aria-owns={`${uuid}-items`}
          aria-controls={uuid}
          aria-expanded={dropdownOpened}
          onMouseLeave={() => setHovered(-1)}
          tabIndex={-1}
          ref={wrapperRef}
        >
          <input type="hidden" name={name} value={_value.join(',')} form={form} />

          <Input<'div'>
            __staticSelector="MultiSelect"
            style={{ overflow: 'hidden' }}
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
              !disabled && !valuesOverflow.current && setDropdownOpened(!dropdownOpened);
              inputRef.current?.focus();
            }}
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
              shouldClear: clearable && _value.length > 0,
              clearButtonLabel,
              onClear: handleClear,
              error,
              disabled,
              clearButtonTabIndex,
            })}
          >
            <div className={classes.values}>
              {selectedItems}

              <input
                ref={useMergedRef(ref, inputRef)}
                type="text"
                id={uuid}
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
                readOnly={!searchable || valuesOverflow.current}
                placeholder={_value.length === 0 ? placeholder : undefined}
                disabled={disabled}
                data-mantine-stop-propagation={dropdownOpened}
                autoComplete="nope"
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
            __staticSelector="MultiSelect"
            dropdownComponent={dropdownComponent || SelectScrollArea}
            referenceElement={wrapperRef.current}
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
              uuid={uuid}
              __staticSelector="MultiSelect"
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
