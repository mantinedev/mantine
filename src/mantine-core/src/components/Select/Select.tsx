import React, { useEffect, useMemo } from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  useResolvedStylesApi,
} from '../../core';
import { InputBase } from '../InputBase';
import { __CloseButtonProps } from '../CloseButton';
import { __InputStylesNames, __BaseInputProps, InputVariant } from '../Input';
import {
  Combobox,
  OptionsDropdown,
  useCombobox,
  getParsedComboboxData,
  getOptionsLockup,
  ComboboxLikeProps,
  ComboboxLikeStylesNames,
  ComboboxItem,
  ComboboxParsedItem,
} from '../Combobox';
import { addNewOptionToData, createLabel, getOptionExists } from './createable';

export type SelectStylesNames = __InputStylesNames | ComboboxLikeStylesNames;

export interface SelectProps
  extends BoxProps,
  __BaseInputProps,
  ComboboxLikeProps,
  StylesApiProps<SelectFactory>,
  ElementProps<'input', 'onChange' | 'size' | 'value' | 'defaultValue'> {
  /** Controlled component value */
  value?: string | null;

  /** Uncontrolled component default value */
  defaultValue?: string | null;

  /** Called when value changes */
  onChange?(value: string | null): void;

  /** Determines whether the select should be searchable, `false` by default */
  searchable?: boolean;

  /** Determines whether check icon should be displayed near the selected option label, `true` by default */
  withCheckIcon?: boolean;

  /** Position of the check icon relative to the option label, `'left'` by default */
  checkIconPosition?: 'left' | 'right';

  /** Message displayed when no option matched current search query, only applicable when `searchable` prop is set */
  nothingFoundMessage?: React.ReactNode;

  /** Controlled search value */
  searchValue?: string;

  /** Default search value */
  defaultSearchValue?: string;

  /** Called when search changes */
  onSearchChange?(value: string): void;

  /** Determines whether it should be possible to deselect value by clicking on the selected option, `true` by default */
  allowDeselect?: boolean;

  /** Determines whether the clear button should be displayed in the right section when the component has value, `false` by default */
  clearable?: boolean;

  /** Props passed down to the clear button */
  clearButtonProps?: __CloseButtonProps & ElementProps<'button'>;

  /** Props passed down to the hidden input */
  hiddenInputProps?: React.ComponentPropsWithoutRef<'input'>;

  /** Determines if new values can be created by the user, `false` by default */
  createable?: boolean;

  /** Callback when a new value is created */
  onCreate?(value: string): ComboboxItem;
}

export type SelectFactory = Factory<{
  props: SelectProps;
  ref: HTMLInputElement;
  stylesNames: SelectStylesNames;
  variant: InputVariant;
}>;

const defaultProps: Partial<SelectProps> = {
  searchable: false,
  withCheckIcon: true,
  allowDeselect: true,
  checkIconPosition: 'left',
};

export const Select = factory<SelectFactory>((_props, ref) => {
  const props = useProps('Select', defaultProps, _props);
  const {
    allowDeselect,
    checkIconPosition,
    classNames,
    clearable,
    clearButtonProps,
    comboboxProps,
    createable,
    data,
    defaultDropdownOpened,
    defaultSearchValue,
    defaultValue,
    disabled,
    dropdownOpened,
    error,
    filter,
    form,
    hiddenInputProps,
    id,
    limit,
    maxDropdownHeight,
    name,
    nothingFoundMessage,
    onBlur,
    onChange,
    onClick,
    onCreate,
    onDropdownClose,
    onDropdownOpen,
    onFocus,
    onOptionSubmit,
    onSearchChange,
    readOnly,
    rightSection,
    rightSectionPointerEvents,
    searchable,
    searchValue,
    selectFirstOptionOnChange,
    size,
    styles,
    unstyled,
    value,
    vars,
    withCheckIcon,
    withScrollArea,
    ...others
  } = props;

  const parsedData = useMemo(() => getParsedComboboxData(data), [data]);

  const _id = useId(id);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
  });

  const optionsLockup = useMemo(() => getOptionsLockup(parsedData), [parsedData, _value]);

  const selectedOption = _value ? optionsLockup[_value] : undefined;
  const [search, setSearch] = useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: selectedOption ? selectedOption.label : '',
    onChange: onSearchChange,
  });

  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose: () => {
      onDropdownClose?.();
      combobox.resetSelectedOption();
    },
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<SelectFactory>({
    props,
    styles,
    classNames,
  });

  useEffect(() => {
    if (selectFirstOptionOnChange) {
      combobox.selectFirstOption();
    }
  }, [selectFirstOptionOnChange, _value]);

  useEffect(() => {
    if (value === null) {
      setSearch('');
    }

    if (typeof value === 'string' && optionsLockup[value]) {
      setSearch(optionsLockup[value].label);
    }
  }, [value, optionsLockup]);

  const clearButton = clearable && !!_value && !disabled && !readOnly && (
    <Combobox.ClearButton
      size={size as string}
      {...clearButtonProps}
      onClear={() => {
        setValue(null);
        setSearch('');
      }}
    />
  );

  const handleCreate = (val: string) => {
    if (onCreate) {
      const newItem = onCreate(val);
      if (newItem && newItem.value) {
        setValue(newItem.value);
        setSearch(newItem.label);
      }
    } else {
      setValue(val);
      setSearch(val);
    }
  };

  const dataWithPotentialNewItem = useMemo(() => addNewOptionToData({
    search,
    createable,
    parsedData,
    optionsLockup,
    _value,
  }), [search, createable, data, optionsLockup, _value]);

  const optionExists = useMemo(() => getOptionExists(parsedData, search), [parsedData, search]);

  const isOptionSelected =
    _value && optionsLockup[_value] && optionsLockup[_value].label === search;

  const displayCreateOption = createable && search && !optionExists && !isOptionSelected;

  let optionsData: ComboboxParsedItem[];

  if (displayCreateOption) {
    optionsData = [{ label: createLabel(search), value: search }];
  } else {
    optionsData = dataWithPotentialNewItem;
  }

  const handleOptionSubmit = (val: string): void => {
    const isCreateOptionSelected = val === search && createable;

    if (isCreateOptionSelected) {
      handleCreate(val);
    }

    onOptionSubmit?.(val);

    if (!optionsLockup[val]) {
      optionsLockup[val] = { value: val, label: val };
    }

    const selectedOptionValue = optionsLockup[val]?.value;
    const isDeselectingCurrentOption = allowDeselect && selectedOptionValue === _value;

    if (isDeselectingCurrentOption) {
      setValue(null);
      setSearch('');
    } else {
      setValue(selectedOptionValue);
      setSearch(optionsLockup[val]?.label);
    }
    combobox.closeDropdown();
  };

  return (
    <>
      <Combobox
        store={combobox}
        __staticSelector="Select"
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        readOnly={readOnly}
        onOptionSubmit={handleOptionSubmit}
        size={size}
        {...comboboxProps}
      >
        <Combobox.Target targetType={searchable ? 'input' : 'button'}>
          <InputBase
            id={_id}
            ref={ref}
            rightSection={
              rightSection ||
              clearButton || <Combobox.Chevron size={size} error={error} unstyled={unstyled} />
            }
            rightSectionPointerEvents={rightSectionPointerEvents || clearButton ? 'all' : 'none'}
            {...others}
            size={size}
            __staticSelector="Select"
            disabled={disabled}
            readOnly={readOnly || !searchable}
            value={search}
            onChange={(event) => {
              setSearch(event.currentTarget.value);
              combobox.openDropdown();
              selectFirstOptionOnChange && combobox.selectFirstOption();
            }}
            onFocus={(event) => {
              searchable && combobox.openDropdown();
              onFocus?.(event);
            }}
            onBlur={(event) => {
              searchable && combobox.closeDropdown();
              setSearch(_value ? optionsLockup[_value].label : '');
              onBlur?.(event);
            }}
            onClick={(event) => {
              searchable ? combobox.openDropdown() : combobox.toggleDropdown();
              onClick?.(event);
            }}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            unstyled={unstyled}
            pointer={!searchable}
            error={error}
          />
        </Combobox.Target>
        <OptionsDropdown
          data={optionsData}
          hidden={readOnly || disabled}
          filter={filter}
          search={search}
          limit={limit}
          hiddenWhenEmpty={!searchable || !nothingFoundMessage}
          withScrollArea={withScrollArea}
          maxDropdownHeight={maxDropdownHeight}
          filterOptions={searchable && selectedOption?.label !== search}
          value={_value}
          checkIconPosition={checkIconPosition}
          withCheckIcon={withCheckIcon}
          nothingFoundMessage={nothingFoundMessage}
          unstyled={unstyled}
          labelId={`${_id}-label`}
        />
      </Combobox>
      <input
        type="hidden"
        name={name}
        value={_value || ''}
        form={form}
        disabled={disabled}
        {...hiddenInputProps}
      />
    </>
  );
});

Select.classes = { ...InputBase.classes, ...Combobox.classes };
Select.displayName = '@mantine/core/Select';
