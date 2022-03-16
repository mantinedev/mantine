import {
  DefaultProps,
  extractSystemStyles,
  getDefaultZIndex,
  Input,
  InputWrapper,
  MantineShadow,
  MantineSize,
  MantineTransition,
  useMantineDefaultProps,
} from '@mantine/core';
import {
  useDidUpdate,
  useMergedRef,
  useScrollIntoView,
  useUncontrolled,
  useUuid,
} from '@mantine/hooks';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useStyles } from './Cascader.styles';
import { CascaderDropdown } from './CascaderDropdown/CascaderDropdown';
import { CascaderMenus } from './CascaderMenus/CascaderMenus';
import { getCascaderRightSectionProps } from './CascaderRightSection/get-cascader-right-section-props';
import { DefaultItem } from './DefaultItem/DefaultItem';
import { findSelectedValue } from './findSelectedValue';
import { getItem } from './getItem';
import { getValuesFromIndexes } from './getValuesFromIndexes';
import { BaseCascaderProps, BaseCascaderStylesNames, CascaderItem } from './types';

export interface SharedCascaderProps<Item, Value>
  extends DefaultProps<BaseCascaderStylesNames>,
    BaseCascaderProps {
  /** Select data used to renderer items in dropdown */
  data: (string | Item)[];

  /** Controlled input value */
  value?: Value;

  /** Uncontrolled input defaultValue */
  defaultValue?: Value;

  /** Controlled input onChange handler */
  onChange?(value: Value): void;

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
}

export interface CascaderProps extends SharedCascaderProps<CascaderItem, string | null> {}

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
};

export const Cascader = forwardRef<HTMLInputElement, CascaderProps>((props, ref) => {
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
    menuComponent,
    separator,
    expandOnHover,
    ...others
  } = useMantineDefaultProps('Cascader', defaultProps, props);

  const { classes, cx, theme } = useStyles();
  const { systemStyles, rest } = extractSystemStyles(others);
  const [dropdownOpened, _setDropdownOpened] = useState(true);
  const [hovered, setHovered] = useState<number[]>([0]);
  const inputRef = useRef<HTMLInputElement>();
  const dropdownRef = useRef<HTMLDivElement>();
  const menuRefs = useRef<Record<number, HTMLDivElement>>({});
  const itemsRefs = useRef<Record<number, Record<number, HTMLDivElement>>>({});
  const [direction, setDirection] = useState<React.CSSProperties['flexDirection']>('row');
  const uuid = useUuid(id);
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

  const [_value, handleChange, inputMode] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
    rule: (val) => typeof val === 'string' || val === null,
  });

  const selectedValue = findSelectedValue(formattedData, separator, _value);
  const [inputValue, setInputValue] = useState(
    getValuesFromIndexes(formattedData, selectedValue, separator)
  );

  const handleClear = () => {
    handleChange(null);
    if (inputMode === 'uncontrolled') {
      setInputValue('');
    }
    inputRef.current?.focus();
  };

  useEffect(() => {
    const newSelectedValue = findSelectedValue(formattedData, separator, _value);
    newSelectedValue && setHovered(newSelectedValue);

    if (newSelectedValue) {
      setInputValue(getValuesFromIndexes(formattedData, newSelectedValue, separator));
    } else if (!_value) {
      setInputValue('');
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
          .disabled
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
      handleChange(getValuesFromIndexes(formattedData, hovered, separator));

      if (inputMode === 'uncontrolled') {
        setInputValue(getValuesFromIndexes(formattedData, hovered, separator));
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
          index < (current.length > 1
            ? getItem(formattedData, current.length - 2, [...current.slice(0, current.length - 1)])
                ?.children.length || 0
            : formattedData.length) - 1
      );

      targetRef.current = itemsRefs.current[current.length - 1][current[current.length - 1]];
      scrollIntoView({ alignment: 'center' });
      return nextIndexes;
    });
  };

  const scrollSelectedItemIntoView = () =>
    window.setTimeout(() => {
      targetRef.current = itemsRefs.current[hovered.length - 1][hovered[hovered.length - 1]];
      scrollIntoView({ alignment: 'center' });
    }, 0);

  const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    typeof onKeyDown === 'function' && onKeyDown(event);

    switch (event.nativeEvent.code) {
      case 'ArrowUp': {
        event.preventDefault();

        if (!dropdownOpened) {
          setHovered(selectedValue);
          setDropdownOpened(true);
          scrollSelectedItemIntoView();
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
          scrollSelectedItemIntoView();
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
          scrollSelectedItemIntoView();
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
          scrollSelectedItemIntoView();
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
          scrollSelectedItemIntoView();
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
      scrollSelectedItemIntoView();
    }
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
      __staticSelector="Cascader"
      sx={sx}
      {...systemStyles}
      {...wrapperProps}
    >
      <div
        role="combobox"
        aria-haspopup="listbox"
        aria-owns={`${uuid}-items`}
        aria-controls={uuid}
        aria-expanded={dropdownOpened}
        tabIndex={-1}
      >
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
          __staticSelector="Cascader"
          value={inputValue}
          onChange={handleInputChange}
          aria-autocomplete="list"
          aria-controls={dropdownOpened ? `${uuid}-items` : null}
          aria-activedescendant={hovered.length !== 0 ? `${uuid}-${hovered}` : null}
          onClick={handleInputClick}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          disabled={disabled}
          data-mantine-stop-propagation={dropdownOpened}
          name={name}
          classNames={{
            ...classNames,
            input: cx(classes.input, classNames?.input),
          }}
          {...getCascaderRightSectionProps({
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

        <CascaderDropdown
          referenceElement={inputRef.current}
          mounted={dropdownOpened}
          transition={transition}
          placement={placement}
          preventOverflow={preventOverflow}
          transitionDuration={transitionDuration}
          transitionTimingFunction={transitionTimingFunction}
          uuid={uuid}
          shadow={shadow}
          maxDropdownHeight={maxDropdownHeight}
          classNames={classNames}
          styles={styles}
          ref={useMergedRef(dropdownRef, scrollableRef)}
          __staticSelector="Cascader"
          dropdownComponent={dropdownComponent}
          direction={direction}
          onDirectionChange={setDirection}
          switchDirectionOnFlip={switchDirectionOnFlip}
          withinPortal={withinPortal}
          zIndex={zIndex}
          dropdownPosition={dropdownPosition}
        >
          <CascaderMenus
            data={formattedData}
            hovered={hovered}
            classNames={classNames}
            expandOnHover={expandOnHover}
            styles={styles}
            isItemSelected={(val, nesting) =>
              selectedValue && getItem(formattedData, nesting, selectedValue)?.value === val
            }
            uuid={uuid}
            maxDropdownHeight={maxDropdownHeight}
            onItemHover={setHovered}
            onItemSelect={handleItemSelect}
            itemsRefs={itemsRefs}
            menuRefs={menuRefs}
            scrollableRef={scrollableRef}
            itemComponent={itemComponent}
            menuComponent={menuComponent}
            size={size}
          />
        </CascaderDropdown>
      </div>
    </InputWrapper>
  );
});
