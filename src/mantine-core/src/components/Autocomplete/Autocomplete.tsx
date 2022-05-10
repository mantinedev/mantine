import React, { useState, forwardRef, useRef } from 'react';
import { useUncontrolled, useDidUpdate, useMergedRef } from '@mantine/hooks';
import { DefaultProps, Selectors, getDefaultZIndex } from '@mantine/styles';
import { InputWrapper, InputWrapperBaseProps, InputWrapperStylesNames } from '../InputWrapper';
import { Input, InputBaseProps, InputStylesNames, useInputProps } from '../Input';
import { SelectDropdownStylesNames } from '../Select/SelectDropdown/SelectDropdown';
import { SelectItems } from '../Select/SelectItems/SelectItems';
import { DefaultItem } from '../Select/DefaultItem/DefaultItem';
import { SelectPopover } from '../Select/SelectPopover/SelectPopover';
import { SelectScrollArea } from '../Select/SelectScrollArea/SelectScrollArea';
import { filterData } from './filter-data/filter-data';
import useStyles from './Autocomplete.styles';
import { SelectSharedProps } from '../Select/Select';

export type AutocompleteStylesNames =
  | InputStylesNames
  | InputWrapperStylesNames
  | SelectDropdownStylesNames
  | Selectors<typeof useStyles>;

export interface AutocompleteItem {
  value: string;
  [key: string]: any;
}

export interface AutocompleteProps
  extends DefaultProps<AutocompleteStylesNames>,
    InputBaseProps,
    InputWrapperBaseProps,
    SelectSharedProps<AutocompleteItem, string>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'onChange' | 'value' | 'defaultValue'> {
  /** Maximum dropdown height */
  maxDropdownHeight?: number | string;

  /** Change dropdown component, can be used to add native scrollbars */
  dropdownComponent?: any;

  /** Called when item from dropdown was selected */
  onItemSubmit?(item: AutocompleteItem): void;
}

export function defaultFilter(value: string, item: AutocompleteItem) {
  return item.value.toLowerCase().trim().includes(value.toLowerCase().trim());
}

const defaultProps: Partial<AutocompleteProps> = {
  required: false,
  size: 'sm',
  shadow: 'sm',
  limit: 5,
  itemComponent: DefaultItem,
  transition: 'pop',
  transitionDuration: 0,
  initiallyOpened: false,
  filter: defaultFilter,
  switchDirectionOnFlip: false,
  zIndex: getDefaultZIndex('popover'),
  dropdownPosition: 'flip',
  maxDropdownHeight: 'auto',
  positionDependencies: [],
};

export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  (props: AutocompleteProps, ref) => {
    const {
      inputProps,
      wrapperProps,
      shadow,
      data,
      limit,
      value,
      defaultValue,
      onChange,
      itemComponent,
      onItemSubmit,
      onKeyDown,
      onFocus,
      onBlur,
      onClick,
      transition,
      transitionDuration,
      initiallyOpened,
      transitionTimingFunction,
      classNames,
      styles,
      filter,
      nothingFound,
      onDropdownClose,
      onDropdownOpen,
      withinPortal,
      switchDirectionOnFlip,
      zIndex,
      dropdownPosition,
      maxDropdownHeight,
      dropdownComponent,
      positionDependencies,
      ...others
    } = useInputProps('Autocomplete', defaultProps, props);
    const { classes } = useStyles(
      { size: inputProps.size },
      { classNames, styles, name: 'Autocomplete' }
    );
    const [dropdownOpened, _setDropdownOpened] = useState(initiallyOpened);
    const [hovered, setHovered] = useState(-1);
    const [direction, setDirection] = useState<React.CSSProperties['flexDirection']>('column');
    const inputRef = useRef<HTMLInputElement>(null);
    const [_value, handleChange] = useUncontrolled({
      value,
      defaultValue,
      finalValue: '',
      onChange,
      rule: (val) => typeof val === 'string',
    });

    const setDropdownOpened = (opened: boolean) => {
      _setDropdownOpened(opened);
      const handler = opened ? onDropdownOpen : onDropdownClose;
      typeof handler === 'function' && handler();
    };

    useDidUpdate(() => {
      setHovered(0);
    }, [_value]);

    const handleItemClick = (item: AutocompleteItem) => {
      handleChange(item.value);
      typeof onItemSubmit === 'function' && onItemSubmit(item);
      setDropdownOpened(false);
    };

    const formattedData = data.map((item) => (typeof item === 'string' ? { value: item } : item));
    const filteredData = filterData({ data: formattedData, value: _value, limit, filter });

    const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      typeof onKeyDown === 'function' && onKeyDown(event);

      const isColumn = direction === 'column';

      const handleNext = () => {
        setHovered((current) => (current < filteredData.length - 1 ? current + 1 : current));
      };

      const handlePrevious = () => {
        setHovered((current) => (current > 0 ? current - 1 : current));
      };

      switch (event.nativeEvent.code) {
        case 'ArrowUp': {
          event.preventDefault();
          isColumn ? handlePrevious() : handleNext();
          break;
        }

        case 'ArrowDown': {
          event.preventDefault();
          isColumn ? handleNext() : handlePrevious();
          break;
        }

        case 'Enter': {
          if (filteredData[hovered] && dropdownOpened) {
            event.preventDefault();
            handleChange(filteredData[hovered].value);
            typeof onItemSubmit === 'function' && onItemSubmit(filteredData[hovered]);
            setDropdownOpened(false);
          }
          break;
        }

        case 'Escape': {
          if (dropdownOpened) {
            event.preventDefault();
            setDropdownOpened(false);
          }
        }
      }
    };

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onFocus === 'function' && onFocus(event);
      setDropdownOpened(true);
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      typeof onBlur === 'function' && onBlur(event);
      setDropdownOpened(false);
    };

    const handleInputClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      typeof onClick === 'function' && onClick(event);
      setDropdownOpened(true);
    };

    const shouldRenderDropdown =
      dropdownOpened && (filteredData.length > 0 || (filteredData.length === 0 && !!nothingFound));

    return (
      <InputWrapper {...wrapperProps} __staticSelector="Autocomplete">
        <SelectPopover
          opened={shouldRenderDropdown}
          transition={transition}
          transitionDuration={transitionDuration}
          shadow="sm"
          withinPortal={withinPortal}
          __staticSelector="Autocomplete"
          onDirectionChange={setDirection}
          switchDirectionOnFlip={switchDirectionOnFlip}
          zIndex={zIndex}
          dropdownPosition={dropdownPosition}
          positionDependencies={positionDependencies}
        >
          <SelectPopover.Target>
            <div
              className={classes.wrapper}
              role="combobox"
              aria-haspopup="listbox"
              aria-owns={`${inputProps.id}-items`}
              aria-controls={inputProps.id}
              aria-expanded={shouldRenderDropdown}
              onMouseLeave={() => setHovered(-1)}
              tabIndex={-1}
            >
              <Input<'input'>
                {...inputProps}
                {...others}
                data-mantine-stop-propagation={dropdownOpened}
                ref={useMergedRef(ref, inputRef)}
                type="string"
                onKeyDown={handleInputKeydown}
                classNames={classNames}
                styles={styles}
                __staticSelector="Autocomplete"
                value={_value}
                onChange={(event) => {
                  handleChange(event.currentTarget.value);
                  setDropdownOpened(true);
                }}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onClick={handleInputClick}
                autoComplete="nope"
                aria-autocomplete="list"
                aria-controls={shouldRenderDropdown ? `${inputProps.id}-items` : null}
                aria-activedescendant={hovered !== -1 ? `${inputProps.id}-${hovered}` : null}
              />
            </div>
          </SelectPopover.Target>

          <SelectPopover.Dropdown
            component={dropdownComponent || SelectScrollArea}
            maxHeight={maxDropdownHeight}
            direction={direction}
            id={inputProps.id}
          >
            <SelectItems
              data={filteredData}
              hovered={hovered}
              classNames={classNames}
              styles={styles}
              uuid={inputProps.id}
              __staticSelector="Autocomplete"
              onItemHover={setHovered}
              onItemSelect={handleItemClick}
              itemComponent={itemComponent}
              size={inputProps.size}
              nothingFound={nothingFound}
            />
          </SelectPopover.Dropdown>
        </SelectPopover>
      </InputWrapper>
    );
  }
);

Autocomplete.displayName = '@mantine/core/Autocomplete';
