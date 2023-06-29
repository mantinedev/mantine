import React, { useState, useRef, forwardRef } from 'react';
import {
  useUncontrolled,
  useMergedRef,
  useDidUpdate,
  useScrollIntoView,
  useId,
} from '@mantine/hooks';
import {
  DefaultProps,
  Selectors,
  getDefaultZIndex,
  useComponentDefaultProps,
} from '@mantine/styles';
import { groupOptions } from '@mantine/utils';
import { extractSystemStyles } from '../Box';
import { Input } from '../Input';
import { DefaultValue, DefaultValueStylesNames } from './DefaultValue/DefaultValue';
import { DefaultItem } from '../Select/DefaultItem/DefaultItem';
import { filterData } from './filter-data/filter-data';
import { getSelectRightSectionProps } from '../Select/SelectRightSection/get-select-right-section-props';
import { SelectScrollArea } from '../Select/SelectScrollArea/SelectScrollArea';
import { SelectPopover } from '../Select/SelectPopover/SelectPopover';
import { SelectItem, BaseSelectProps, BaseSelectStylesNames } from '../Select/types';
import { SelectItems } from '../Select/SelectItems/SelectItems';
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

  /** Maximum dropdown height */
  maxDropdownHeight?: number | string;

  /** Enable items searching */
  searchable?: boolean;

  /** Function based on which items in dropdown are filtered */
  filter?(value: string, selected: boolean, item: SelectItem): boolean;

  /** Clear search value when item is selected */
  clearSearchOnChange?: boolean;

  /** Allow to clear item */
  clearable?: boolean;

  /** Disable removing selected items from the list */
  disableSelectedItemFiltering?: boolean;

  /** Clear search field value on blur */
  clearSearchOnBlur?: boolean;

  /** Called each time search query changes */
  onSearchChange?(query: string): void;

  /** Controlled search input value */
  searchValue?: string;

  /** Hovers the first result when search query changes */
  hoverOnSearchChange?: boolean;

  /** Allow creatable option  */
  creatable?: boolean;

  /** Function to get create Label */
  getCreateLabel?(query: string): React.ReactNode;

  /** Function to determine if create label should be displayed */
  shouldCreate?(query: string, data: SelectItem[]): boolean;

  /** Called when create option is selected */
  onCreate?(query: string): SelectItem | string | null | undefined;

  /** Change dropdown component, can be used to add custom scrollbars */
  dropdownComponent?: any;

  /** Limit amount of items selected */
  maxSelectedValues?: number;

  /** Select highlighted item on blur */
  selectOnBlur?: boolean;

  /** Props added to clear button */
  clearButtonProps?: React.ComponentPropsWithoutRef<'button'>;
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

function filterValue(value: string[], data: ReadonlyArray<string | SelectItem>): string[] {
  if (!Array.isArray(value)) {
    return undefined;
  }

  if (data.length === 0) {
    return [];
  }

  const flatData: string[] = data.map((item) => {
    if (typeof item === 'object') {
      return item.value;
    }
    return item;
  });
  return value.filter((val) => flatData.includes(val));
}

const defaultProps: Partial<MultiSelectProps> = {
  size: 'sm',
  valueComponent: DefaultValue,
  itemComponent: DefaultItem,
  transitionProps: { transition: 'fade', duration: 0 },
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
  positionDependencies: [],
  dropdownPosition: 'flip',
};

export const MultiSelect = forwardRef<HTMLInputElement, MultiSelectProps>((props, ref) => {
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
    transitionProps,
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
    variant,
    onSearchChange,
    searchValue,
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
    portalProps,
    switchDirectionOnFlip,
    zIndex,
    selectOnBlur,
    name,
    dropdownPosition,
    errorProps,
    labelProps,
    descriptionProps,
    form,
    positionDependencies,
    onKeyDown,
    unstyled,
    inputContainer,
    inputWrapperOrder,
    readOnly,
    withAsterisk,
    clearButtonProps,
    hoverOnSearchChange,
    disableSelectedItemFiltering,
    ...others
  } = useComponentDefaultProps('MultiSelect', defaultProps, props);

  const { classes, cx, theme } = useStyles(
    { invalid: !!error },
    { name: 'MultiSelect', classNames, styles, unstyled, size, variant }
  );
  const { systemStyles, rest } = extractSystemStyles(others);
  const inputRef = useRef<HTMLInputElement>();
  const itemsRefs = useRef<Record<string, HTMLDivElement>>({});
  const uuid = useId(id);
  const [dropdownOpened, setDropdownOpened] = useState(initiallyOpened);
  const [_hovered, setHovered] = useState(-1);
  const [direction, setDirection] = useState<React.CSSProperties['flexDirection']>('column');
  const [_searchValue, handleSearchChange] = useUncontrolled({
    value: searchValue,
    defaultValue: '',
    finalValue: undefined,
    onChange: onSearchChange,
  });
  const [IMEOpen, setIMEOpen] = useState(false);

  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView({
    duration: 0,
    offset: 5,
    cancelable: false,
    isList: true,
  });

  const isCreatable = creatable && typeof getCreateLabel === 'function';
  let createLabel = null;

  const formattedData = data.map((item) =>
    typeof item === 'string' ? { label: item, value: item } : item
  );

  const sortedData = groupOptions({ data: formattedData });

  const [_value, setValue] = useUncontrolled({
    value: filterValue(value, data),
    defaultValue: filterValue(defaultValue, data),
    finalValue: [],
    onChange,
  });

  const valuesOverflow = useRef(!!maxSelectedValues && maxSelectedValues < _value.length);

  const handleValueRemove = (_val: string) => {
    if (!readOnly) {
      const newValue = _value.filter((val) => val !== _val);
      setValue(newValue);

      if (!!maxSelectedValues && newValue.length < maxSelectedValues) {
        valuesOverflow.current = false;
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(event.currentTarget.value);
    !disabled && !valuesOverflow.current && searchable && setDropdownOpened(true);
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onFocus === 'function' && onFocus(event);
    !disabled && !valuesOverflow.current && searchable && setDropdownOpened(true);
  };

  const filteredData = filterData({
    data: sortedData,
    searchable,
    searchValue: _searchValue,
    limit,
    filter,
    value: _value,
    disableSelectedItemFiltering,
  });

  if (isCreatable && shouldCreate(_searchValue, sortedData)) {
    createLabel = getCreateLabel(_searchValue);
    filteredData.push({ label: _searchValue, value: _searchValue, creatable: true });
  }

  const hovered = Math.min(_hovered, filteredData.length - 1);

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
    if (hoverOnSearchChange && _searchValue) {
      setHovered(0);
    } else {
      setHovered(-1);
    }
  }, [_searchValue, hoverOnSearchChange]);

  useDidUpdate(() => {
    if (!disabled && _value.length > data.length) {
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
    if (!readOnly) {
      clearSearchOnChange && handleSearchChange('');

      if (_value.includes(item.value)) {
        handleValueRemove(item.value);
      } else {
        if (item.creatable && typeof onCreate === 'function') {
          const createdItem = onCreate(item.value);
          if (typeof createdItem !== 'undefined' && createdItem !== null) {
            if (typeof createdItem === 'string') {
              setValue([..._value, createdItem]);
            } else {
              setValue([..._value, createdItem.value]);
            }
          }
        } else {
          setValue([..._value, item.value]);
        }

        if (_value.length === maxSelectedValues - 1) {
          valuesOverflow.current = true;
          setDropdownOpened(false);
        }
        if (filteredData.length === 1) {
          setDropdownOpened(false);
        }
      }
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
    if (IMEOpen) {
      return;
    }

    onKeyDown?.(event);

    if (readOnly) {
      return;
    }

    if (event.key !== 'Backspace' && !!maxSelectedValues && valuesOverflow.current) {
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

    switch (event.key) {
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

      case ' ': {
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
        if (_value.length > 0 && _searchValue.length === 0) {
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
    .map((item, index) => (
      <Value
        {...item}
        variant={variant}
        disabled={disabled}
        className={classes.value}
        readOnly={readOnly}
        onRemove={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          event.stopPropagation();
          handleValueRemove(item.value);
        }}
        key={item.value}
        size={size}
        styles={styles}
        classNames={classNames}
        radius={radius}
        index={index}
      />
    ));

  const isItemSelected = (itemValue: string) => _value.includes(itemValue);

  const handleClear = () => {
    handleSearchChange('');
    setValue([]);
    inputRef.current?.focus();
    if (maxSelectedValues) {
      valuesOverflow.current = false;
    }
  };

  const shouldRenderDropdown =
    !readOnly && (filteredData.length > 0 ? dropdownOpened : dropdownOpened && !!nothingFound);

  useDidUpdate(() => {
    const handler = shouldRenderDropdown ? onDropdownOpen : onDropdownClose;
    typeof handler === 'function' && handler();
  }, [shouldRenderDropdown]);

  return (
    <Input.Wrapper
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
      inputContainer={inputContainer}
      inputWrapperOrder={inputWrapperOrder}
      unstyled={unstyled}
      withAsterisk={withAsterisk}
      variant={variant}
      {...systemStyles}
      {...wrapperProps}
    >
      <SelectPopover
        opened={shouldRenderDropdown}
        transitionProps={transitionProps}
        shadow="sm"
        withinPortal={withinPortal}
        portalProps={portalProps}
        __staticSelector="MultiSelect"
        onDirectionChange={setDirection}
        switchDirectionOnFlip={switchDirectionOnFlip}
        zIndex={zIndex}
        dropdownPosition={dropdownPosition}
        positionDependencies={[...positionDependencies, _searchValue]}
        classNames={classNames}
        styles={styles}
        unstyled={unstyled}
        variant={variant}
      >
        <SelectPopover.Target>
          <div
            className={classes.wrapper}
            role="combobox"
            aria-haspopup="listbox"
            aria-owns={dropdownOpened && shouldRenderDropdown ? `${uuid}-items` : null}
            aria-controls={uuid}
            aria-expanded={dropdownOpened}
            onMouseLeave={() => setHovered(-1)}
            tabIndex={-1}
          >
            <input
              type="hidden"
              name={name}
              value={_value.join(',')}
              form={form}
              disabled={disabled}
            />

            <Input<'div'>
              __staticSelector="MultiSelect"
              style={{ overflow: 'hidden' }}
              component="div"
              multiline
              size={size}
              variant={variant}
              disabled={disabled}
              error={error}
              required={required}
              radius={radius}
              icon={icon}
              unstyled={unstyled}
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
                onClear: handleClear,
                error,
                disabled,
                clearButtonProps,
                readOnly,
              })}
            >
              <div className={classes.values} data-clearable={clearable || undefined}>
                {selectedItems}

                <input
                  ref={useMergedRef(ref, inputRef)}
                  type="search"
                  id={uuid}
                  className={cx(classes.searchInput, {
                    [classes.searchInputPointer]: !searchable,
                    [classes.searchInputInputHidden]:
                      (!dropdownOpened && _value.length > 0) || (!searchable && _value.length > 0),
                    [classes.searchInputEmpty]: _value.length === 0,
                  })}
                  onKeyDown={handleInputKeydown}
                  value={_searchValue}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  readOnly={!searchable || valuesOverflow.current || readOnly}
                  placeholder={_value.length === 0 ? placeholder : undefined}
                  disabled={disabled}
                  data-mantine-stop-propagation={dropdownOpened}
                  autoComplete="off"
                  onCompositionStart={() => setIMEOpen(true)}
                  onCompositionEnd={() => setIMEOpen(false)}
                  {...rest}
                />
              </div>
            </Input>
          </div>
        </SelectPopover.Target>

        <SelectPopover.Dropdown
          component={dropdownComponent || SelectScrollArea}
          maxHeight={maxDropdownHeight}
          direction={direction}
          id={uuid}
          innerRef={scrollableRef}
          __staticSelector="MultiSelect"
          classNames={classNames}
          styles={styles}
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
            isItemSelected={isItemSelected}
            creatable={creatable && !!createLabel}
            createLabel={createLabel}
            unstyled={unstyled}
            variant={variant}
          />
        </SelectPopover.Dropdown>
      </SelectPopover>
    </Input.Wrapper>
  );
});

MultiSelect.displayName = '@mantine/core/MultiSelect';
