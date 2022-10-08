import {
  DefaultProps,
  getDefaultZIndex,
  Input,
  MantineShadow,
  MantineSize,
  MantineTransition,
  useInputProps,
} from '@mantine/core';
import { getSelectRightSectionProps } from '@mantine/core/src/components/Select/SelectRightSection/get-select-right-section-props';
import { useDidUpdate, useMergedRef, useScrollIntoView, useUncontrolled } from '@mantine/hooks';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useStyles } from './Cascader.styles';
import { CascaderPopover } from './CascaderPopover/CascaderPopover';
import { CascaderItems } from './CascaderItems/CascaderItems';
import { DefaultItem } from './DefaultItem/DefaultItem';
import { findSelectedValue } from './findSelectedValue';
import { getItem } from './getItem';
import { getValueFromIndexes } from './getValueFromIndexes';
import { BaseCascaderProps, CascaderStylesNames, CascaderItem } from './types';

export interface SharedCascaderProps<Item, CascaderValue> {
  /** Select data used to renderer items in dropdown */
  data: (string | Item)[];

  /** Controlled input value */
  value?: CascaderValue;

  /** Uncontrolled input defaultValue */
  defaultValue?: CascaderValue;

  /** Controlled input onChange handler */
  onChange?(value: CascaderValue): void;

  /** Input size */
  size?: MantineSize;

  /** Change item renderer */
  itemComponent?: React.FC<any>;

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

  /** Called when dropdown is opened */
  onDropdownOpen?(): void;

  /** Called when dropdown is closed */
  onDropdownClose?(): void;

  /** Dropdown z-index */
  zIndex?: number;

  /** Dropdown positioning behavior */
  dropdownPosition?: 'bottom' | 'top' | 'flip';

  /** Whether to switch item order and keyboard navigation on dropdown position flip */
  switchDirectionOnFlip?: boolean;

  /** Maximum dropdown height in px */
  maxDropdownHeight?: number;

  /** Allow to clear item */
  clearable?: boolean;

  /** aria-label for clear button */
  clearButtonLabel?: string;

  /** Change dropdown component, can be used to add native scrollbars */
  dropdownComponent?: any;

  /** Change menu component, which displays options */
  menuComponent?: any;

  /** Select highlighted item on blur */
  selectOnBlur?: boolean;

  /** Allow deselecting items on click */
  allowDeselect?: boolean;

  /** Whether to render the dropdown in a Portal */
  withinPortal?: boolean;

  /** String to separate selected values with */
  separator?: string;

  /** Expand options on hover */
  expandOnHover?: boolean;

  /** Whether the dropdown can leave it's bounding box */
  preventOverflow?: boolean;

  /** Where the dropdown is placed along the input (left, center, or right) */
  placement?: 'start' | 'center' | 'end';

  /** useEffect dependencies to force update dropdown position */
  positionDependencies?: any[];

  /** Nothing found label */
  nothingFound?: React.ReactNode;

  /** Set the clear button tab index to disabled or default after input field */
  clearButtonTabIndex?: -1 | 0;
}

export interface CascaderProps
  extends DefaultProps<CascaderStylesNames>,
    BaseCascaderProps,
    SharedCascaderProps<CascaderItem, string[] | null> {}

const defaultProps: Partial<CascaderProps> = {
  required: false,
  size: 'sm',
  shadow: 'sm',
  transition: 'fade',
  transitionDuration: 0,
  initiallyOpened: false,
  maxDropdownHeight: 220,
  clearable: false,
  disabled: false,
  selectOnBlur: false,
  switchDirectionOnFlip: false,
  expandOnHover: false,
  preventOverflow: false,
  placement: 'start',
  zIndex: getDefaultZIndex('popover'),
  separator: ', ',
  menuComponent: ({ children, ...props }) => <div {...props}>{children}</div>,
  itemComponent: DefaultItem,
  positionDependencies: [],
  clearButtonTabIndex: 0,
};

export const Cascader = forwardRef<HTMLInputElement, CascaderProps>((props, ref) => {
  const {
    inputProps,
    positionDependencies,
    shadow,
    data,
    value,
    defaultValue,
    onChange,
    itemComponent,
    preventOverflow,
    placement,
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
    maxDropdownHeight,
    clearable,
    clearButtonLabel,
    disabled,
    rightSection,
    rightSectionWidth,
    selectOnBlur,
    unstyled,
    clearButtonTabIndex,
    placeholder,
    dropdownComponent,
    onDropdownClose,
    onDropdownOpen,
    withinPortal,
    switchDirectionOnFlip,
    zIndex,
    name,
    dropdownPosition,
    allowDeselect,
    menuComponent,
    separator,
    expandOnHover,
    form,
    nothingFound,
    ...others
  } = useInputProps('Cascader', defaultProps, props);

  const { theme } = useStyles();
  const [dropdownOpened, _setDropdownOpened] = useState(true);
  const [hovered, setHovered] = useState<number[]>([0]);
  const inputRef = useRef<HTMLInputElement>();
  const menuRefs = useRef<HTMLDivElement[]>([]);
  const itemsRefs = useRef<HTMLElement[][]>([]);
  const [direction, setDirection] = useState<React.CSSProperties['flexDirection']>('row');
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView({
    duration: 0,
    offset: 5,
    cancelable: false,
    isList: true,
  });

  const setDropdownOpened = (opened: boolean) => {
    if (dropdownOpened !== opened) {
      _setDropdownOpened(opened);
      const handler = opened ? onDropdownOpen : onDropdownClose;
      typeof handler === 'function' && handler();
    }
  };

  const formattedData = data.map((item) =>
    typeof item === 'string' ? { label: item, value: item } : item
  );

  const [_value, handleChange, controlled] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
  });

  const selectedValue = findSelectedValue(formattedData, _value);
  const [inputValue, setInputValue] = useState(
    getValueFromIndexes(formattedData, selectedValue)
  );

  const handleClear = () => {
    handleChange(null);
    if (!controlled) {
      setInputValue(null);
    }
    inputRef.current?.focus();
  };

  useEffect(() => {
    const newSelectedValue = findSelectedValue(formattedData, _value);
    newSelectedValue && setHovered(newSelectedValue);

    if (newSelectedValue) {
      setInputValue(getValueFromIndexes(formattedData, newSelectedValue));
    } else if (!_value) {
      setInputValue(null);
    }
  }, [_value]);

  const getNextIndex = (
    indexes: number[],
    nextItem: (index: number) => number,
    compareFn: (index: number) => boolean
  ) => {
    let i = indexes[indexes.length - 1];
    while (compareFn(i)) {
      i = nextItem(i);
      if (
        !getItem(formattedData, indexes.length - 1, [...indexes.slice(0, indexes.length - 1), i])
          ?.disabled
      ) {
        return [...indexes.slice(0, indexes.length - 1), i];
      }
    }
    return indexes;
  };

  const handleItemSelect = (item: CascaderItem, index: number) => {
    if (allowDeselect && selectedValue && selectedValue[selectedValue.length - 1] === index) {
      handleChange(null);
      setDropdownOpened(false);
    } else if (item.children && item.children.length > 0) {
      setHovered((prev) =>
        getNextIndex(
          [...prev, -1],
          (i) => i + 1,
          (i) => i < data.length - 1
        )
      );
    } else {
      handleChange(getValueFromIndexes(formattedData, hovered));

      if (!controlled) {
        setInputValue(getValueFromIndexes(formattedData, hovered));
      }
      setHovered((prev) => [...prev, index]);
      setDropdownOpened(false);
      inputRef.current.focus();
    }
  };

  useDidUpdate(() => {
    setHovered(
      getNextIndex(
        [0],
        (index) => index + 1,
        (index) => index < data.length - 1
      )
    );
  }, [inputValue]);

  const handlePrevious = () => {
    setHovered((current) => {
      const nextIndexes = getNextIndex(
        current,
        (index) => index - 1,
        (index) => index > 0
      );

      targetRef.current = itemsRefs.current[current.length - 1][current[current.length - 1]];
      scrollIntoView({ alignment: 'center' });
      return nextIndexes;
    });
  };

  const handleNext = () => {
    setHovered((current) => {
      const nextIndexes = getNextIndex(
        current,
        (index) => index + 1,
        (index) =>
          index <
          (current.length > 1
            ? getItem(formattedData, current.length - 2, [...current.slice(0, current.length - 1)])
                ?.children.length || 0
            : formattedData.length) -
            1
      );

      targetRef.current = itemsRefs.current[current.length - 1][current[current.length - 1]];
      scrollIntoView({ alignment: 'center' });
      return nextIndexes;
    });
  };

  const scrollSelectedItemsIntoView = () =>
    window.setTimeout(() => {
      hovered.forEach((item, i) => {
        // get menu the item is in
        const menu = menuRefs.current[i];

        // set menu scroll area as scrollable ref
        // @ts-expect-error
        scrollableRef.current = menu;

        // set target ref to currently selected item
        targetRef.current = itemsRefs.current[i][item];
        scrollIntoView({ alignment: 'center' });
      });
    }, 0);

  const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    typeof onKeyDown === 'function' && onKeyDown(event);

    switch (event.nativeEvent.code) {
      case 'ArrowUp': {
        event.preventDefault();

        if (!dropdownOpened) {
          setHovered(selectedValue);
          setDropdownOpened(true);
          scrollSelectedItemsIntoView();
        } else {
          handlePrevious();
        }

        break;
      }

      case 'ArrowDown': {
        event.preventDefault();

        if (!dropdownOpened) {
          setHovered(selectedValue);
          setDropdownOpened(true);
          scrollSelectedItemsIntoView();
        } else {
          handleNext();
        }

        break;
      }

      case 'ArrowRight': {
        event.preventDefault();

        if (!dropdownOpened) {
          setHovered(selectedValue);
          setDropdownOpened(true);
          scrollSelectedItemsIntoView();
        } else {
          const hoveredItem = getItem(formattedData, hovered.length - 1, hovered);
          if (hoveredItem && hoveredItem.children && hoveredItem.children.length > 0) {
            setHovered((prev) =>
              getNextIndex(
                [...prev, -1],
                (i) => i + 1,
                (i) => i < data.length - 1
              )
            );
          }
        }

        break;
      }

      case 'ArrowLeft': {
        event.preventDefault();

        if (!dropdownOpened) {
          setHovered(selectedValue);
          setDropdownOpened(true);
          scrollSelectedItemsIntoView();
        } else if (hovered.length > 1) {
          setHovered((prev) => [...prev.slice(0, prev.length - 1)]);
        }

        break;
      }

      case 'Escape': {
        event.preventDefault();
        setDropdownOpened(false);
        setHovered([0]);
        break;
      }

      case 'Enter': {
        event.preventDefault();

        const hoveredItem = getItem(formattedData, hovered.length - 1, hovered);
        if (hoveredItem && dropdownOpened) {
          event.preventDefault();
          handleItemSelect(hoveredItem, hovered[hovered.length - 1]);
        } else {
          setDropdownOpened(true);
          setHovered(selectedValue || [0]);
          scrollSelectedItemsIntoView();
        }
      }
    }
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onBlur === 'function' && onBlur(event);
    const selectedItem = getItem(formattedData, hovered.length - 1, hovered);
    if (selectOnBlur && selectedItem && dropdownOpened) {
      // last item/currently hovered is selected
      handleItemSelect(selectedItem, hovered[hovered.length - 1]);
    }
    setDropdownOpened(false);
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onFocus === 'function' && onFocus(event);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (clearable && event.currentTarget.value === '') {
      handleChange(null);
    }

    setHovered(selectedValue || [0]);
    setDropdownOpened(true);
  };

  const handleInputClick = () => {
    setDropdownOpened(true);

    if (_value) {
      setHovered(selectedValue);
      scrollSelectedItemsIntoView();
    }
  };

  const shouldShowDropdown = data.length > 0 ? dropdownOpened : dropdownOpened && !!nothingFound;

  return (
    <Input.Wrapper {...wrapperProps} __staticSelector="Cascader">
      <CascaderPopover
        opened={dropdownOpened}
        transition={transition}
        transitionDuration={transitionDuration}
        shadow="sm"
        withinPortal={withinPortal}
        __staticSelector="Cascader"
        onDirectionChange={setDirection}
        switchDirectionOnFlip={switchDirectionOnFlip}
        zIndex={zIndex}
        dropdownPosition={dropdownPosition}
        positionDependencies={positionDependencies}
        classNames={classNames}
        styles={styles}
        unstyled={unstyled}
      >
        <CascaderPopover.Target>
          <div
            role="combobox"
            aria-haspopup="listbox"
            aria-owns={shouldShowDropdown ? `${inputProps.id}-items` : null}
            aria-controls={inputProps.id}
            aria-expanded={shouldShowDropdown}
            tabIndex={-1}
          >
            <input type="hidden" name={name} value={_value || ''} form={form} />

            <Input<'input'>
              autoComplete="off"
              type="search"
              {...inputProps}
              {...others}
              ref={useMergedRef(ref, inputRef)}
              onKeyDown={handleInputKeydown}
              __staticSelector="Select"
              value={inputValue}
              placeholder={placeholder}
              onChange={handleInputChange}
              aria-autocomplete="list"
              aria-controls={shouldShowDropdown ? `${inputProps.id}-items` : null}
              aria-activedescendant={hovered.length >= 0 ? `${inputProps.id}-${hovered}` : null}
              onClick={handleInputClick}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              disabled={disabled}
              data-mantine-stop-propagation={shouldShowDropdown}
              name={null}
              classNames={classNames}
              {...getSelectRightSectionProps({
                theme,
                rightSection,
                rightSectionWidth,
                styles,
                size: inputProps.size,
                shouldClear: clearable && !!selectedValue,
                clearButtonLabel,
                onClear: handleClear,
                error: wrapperProps.error,
                clearButtonTabIndex,
              })}
            />
          </div>
        </CascaderPopover.Target>

        <CascaderPopover.Dropdown
          component={dropdownComponent}
          maxHeight={maxDropdownHeight}
          direction={direction}
          id={inputProps.id}
          innerRef={scrollableRef}
        >
          <CascaderItems
            data={formattedData}
            hovered={hovered}
            classNames={classNames}
            styles={styles}
            isItemSelected={(val, nesting) =>
              selectedValue && getItem(formattedData, nesting, selectedValue)?.value === val
            }
            uuid={inputProps.id}
            __staticSelector="Cascader"
            onItemHover={setHovered}
            onItemSelect={handleItemSelect}
            itemsRefs={itemsRefs}
            itemComponent={itemComponent}
            size={inputProps.size}
            nothingFound={nothingFound}
            aria-label={wrapperProps.label}
            unstyled={unstyled}
            menuRefs={menuRefs}
            expandOnHover={expandOnHover}
            maxDropdownHeight={maxDropdownHeight}
            menuComponent={menuComponent}
          />
        </CascaderPopover.Dropdown>
      </CascaderPopover>
    </Input.Wrapper>
  );
});
