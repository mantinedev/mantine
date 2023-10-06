import { useId, useUncontrolled } from '@mantine/hooks';
import React from 'react';
import {
  BoxProps,
  ElementProps,
  Factory,
  StylesApiProps,
  extractStyleProps,
  factory,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '../../core';
import { __CloseButtonProps } from '../CloseButton';
import {
  Combobox,
  ComboboxItem,
  ComboboxLikeProps,
  ComboboxLikeStylesNames,
  ComboboxParsedItem,
  OptionsDropdown,
  getOptionsLockup,
  getParsedComboboxData,
  useCombobox,
} from '../Combobox';
import { __BaseInputProps, __InputStylesNames } from '../Input';
import { InputBase } from '../InputBase';
import { Pill } from '../Pill';
import { PillsInput } from '../PillsInput';
import { addNewOptionToData, createLabel } from './createable';
import { filterPickedValues } from './filter-picked-values';

export type MultiSelectStylesNames =
  | __InputStylesNames
  | ComboboxLikeStylesNames
  | 'pill'
  | 'pillsList'
  | 'inputField';

export interface MultiSelectProps
  extends BoxProps,
  __BaseInputProps,
  ComboboxLikeProps,
  StylesApiProps<MultiSelectFactory>,
  ElementProps<'input', 'size' | 'value' | 'defaultValue' | 'onChange'> {
  /** Controlled component value */
  value?: string[];

  /** Default value for uncontrolled component */
  defaultValue?: string[];

  /** Called whe value changes */
  onChange?(value: string[]): void;

  /** Controlled search value */
  searchValue?: string;

  /** Default search value */
  defaultSearchValue?: string;

  /** Called when search changes */
  onSearchChange?(value: string): void;

  /** Maximum number of values, `Infinity` by default */
  maxValues?: number;

  /** Determines whether the select should be searchable, `false` by default */
  searchable?: boolean;

  /** Message displayed when no option matched current search query, only applicable when `searchable` prop is set */
  nothingFoundMessage?: React.ReactNode;

  /** Determines whether check icon should be displayed near the selected option label, `true` by default */
  withCheckIcon?: boolean;

  /** Position of the check icon relative to the option label, `'left'` by default */
  checkIconPosition?: 'left' | 'right';

  /** Determines whether picked options should be removed from the options list, `false` by default */
  hidePickedOptions?: boolean;

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

export type MultiSelectFactory = Factory<{
  props: MultiSelectProps;
  ref: HTMLInputElement;
  stylesNames: MultiSelectStylesNames;
}>;

const defaultProps: Partial<MultiSelectProps> = {
  maxValues: Infinity,
  withCheckIcon: true,
  checkIconPosition: 'left',
};

export const MultiSelect = factory<MultiSelectFactory>((_props, ref) => {
  const props = useProps('MultiSelect', defaultProps, _props);
  const {
    checkIconPosition,
    className,
    classNames,
    clearable,
    clearButtonProps,
    comboboxProps,
    createable,
    data,
    defaultDropdownOpened,
    defaultSearchValue,
    defaultValue,
    description,
    descriptionProps,
    disabled,
    dropdownOpened,
    error,
    errorProps,
    filter,
    form,
    hiddenInputProps,
    hidePickedOptions,
    id,
    inputContainer,
    inputWrapperOrder,
    label,
    labelProps,
    leftSection,
    leftSectionPointerEvents,
    leftSectionProps,
    leftSectionWidth,
    limit,
    maxDropdownHeight,
    maxValues,
    name,
    nothingFoundMessage,
    onBlur,
    onChange,
    onCreate,
    onDropdownClose,
    onDropdownOpen,
    onFocus,
    onKeyDown,
    onOptionSubmit,
    onPaste,
    onSearchChange,
    radius,
    readOnly,
    rightSection,
    rightSectionPointerEvents,
    rightSectionProps,
    rightSectionWidth,
    searchable,
    searchValue,
    selectFirstOptionOnChange,
    size,
    style,
    styles,
    unstyled,
    value,
    variant,
    vars,
    withAsterisk,
    withCheckIcon,
    withErrorStyles,
    withScrollArea,
    wrapperProps,
    ...others
  } = props;

  const _id = useId(id);
  const parsedData = getParsedComboboxData(data);
  const optionsLockup = getOptionsLockup(parsedData);

  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose: () => {
      onDropdownClose?.();
      combobox.resetSelectedOption();
    },
  });

  const {
    styleProps,
    rest: { type, ...rest },
  } = extractStyleProps(others);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    onChange,
  });

  const [_searchValue, setSearchValue] = useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: '',
    onChange: onSearchChange,
  });

  const getStyles = useStyles<MultiSelectFactory>({
    name: 'MultiSelect',
    classes: {} as any,
    props,
    classNames,
    styles,
    unstyled,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<MultiSelectFactory>({
    props,
    styles,
    classNames,
  });

  const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);

    if (event.key === 'Backspace' && _searchValue.length === 0 && _value.length > 0) {
      setValue(_value.slice(0, _value.length - 1));
    }
  };

  const values = _value.map((item, index) => (
    <Pill
      key={`${item}-${index}`}
      withRemoveButton={!readOnly}
      onRemove={() => setValue(_value.filter((i) => item !== i))}
      unstyled={unstyled}
      {...getStyles('pill')}
    >
      {optionsLockup[item]?.label || item}
    </Pill>
  ));

  const clearButton = clearable && _value.length > 0 && !disabled && !readOnly && (
    <Combobox.ClearButton
      size={size as string}
      {...clearButtonProps}
      onClear={() => {
        setValue([]);
        setSearchValue('');
      }}
    />
  );

  const handleCreate = (val: string) => {
    if (onCreate) {
      const newItem = onCreate(val);

      if (newItem && newItem.value) {
        setValue([..._value, newItem.value]);
        setSearchValue('');
      }
    } else {
      setValue([..._value, val]);
      setSearchValue('');
    }
  };

  const handleOptionsSubmit = (val: string): void => {
    const isCreateOptionSelected = val === _searchValue && createable;

    if (isCreateOptionSelected) {
      handleCreate(val);
      setSearchValue('');
      return;
    }

    onOptionSubmit?.(val);
    setSearchValue('');
    combobox.updateSelectedOptionIndex('selected');

    if (_value.includes(optionsLockup[val].value)) {
      setValue(_value.filter((v) => v !== optionsLockup[val].value));
    } else if (_value.length < maxValues!) {
      setValue([..._value, optionsLockup[val].value]);
    }
  };

  const dataWithPotentialNewItem: ComboboxParsedItem[] = addNewOptionToData({
    _searchValue,
    createable,
    data,
  });

  const noOptionsFound =
    hidePickedOptions ?
      filterPickedValues({ data: parsedData, value: _value }).length === 0
      : parsedData.length === 0;

  const displayCreateOption = createable && _searchValue && noOptionsFound;

  let optionsData: ComboboxParsedItem[];

  if (displayCreateOption) {
    optionsData = [{ label: createLabel(_searchValue), value: _searchValue }];
  } else if (hidePickedOptions) {
    optionsData = filterPickedValues({ data: dataWithPotentialNewItem, value: _value }) || [];
  } else {
    optionsData = dataWithPotentialNewItem;
  }

  return (
    <>
      <Combobox
        store={combobox}
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        size={size}
        readOnly={readOnly}
        __staticSelector="MultiSelect"
        onOptionSubmit={handleOptionsSubmit}
        {...comboboxProps}
      >
        <Combobox.DropdownTarget>
          <PillsInput
            {...styleProps}
            __staticSelector="MultiSelect"
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            unstyled={unstyled}
            size={size}
            className={className}
            style={style}
            variant={variant}
            disabled={disabled}
            radius={radius}
            rightSection={
              rightSection ||
              clearButton || <Combobox.Chevron size={size} error={error} unstyled={unstyled} />
            }
            rightSectionPointerEvents={rightSectionPointerEvents || clearButton ? 'all' : 'none'}
            rightSectionWidth={rightSectionWidth}
            rightSectionProps={rightSectionProps}
            leftSection={leftSection}
            leftSectionWidth={leftSectionWidth}
            leftSectionPointerEvents={leftSectionPointerEvents}
            leftSectionProps={leftSectionProps}
            inputContainer={inputContainer}
            inputWrapperOrder={inputWrapperOrder}
            withAsterisk={withAsterisk}
            labelProps={labelProps}
            descriptionProps={descriptionProps}
            errorProps={errorProps}
            wrapperProps={wrapperProps}
            description={description}
            label={label}
            error={error}
            multiline
            withErrorStyles={withErrorStyles}
            __stylesApiProps={{ ...props, multiline: true }}
            pointer={!searchable}
            onClick={() => (searchable ? combobox.openDropdown() : combobox.toggleDropdown())}
            id={_id}
          >
            <Pill.Group disabled={disabled} unstyled={unstyled} {...getStyles('pillsList')}>
              {values}
              <Combobox.EventsTarget>
                <PillsInput.Field
                  {...rest}
                  ref={ref}
                  id={_id}
                  {...getStyles('inputField')}
                  unstyled={unstyled}
                  onFocus={(event) => {
                    onFocus?.(event);
                    searchable && combobox.openDropdown();
                  }}
                  onBlur={(event) => {
                    onBlur?.(event);
                    combobox.closeDropdown();
                    searchable && combobox.closeDropdown();
                    setSearchValue('');
                  }}
                  onKeyDown={handleInputKeydown}
                  value={_searchValue}
                  onChange={(event) => {
                    setSearchValue(event.currentTarget.value);
                    searchable && combobox.openDropdown();
                  }}
                  disabled={disabled}
                  readOnly={readOnly || !searchable}
                  pointer={!searchable}
                />
              </Combobox.EventsTarget>
            </Pill.Group>
          </PillsInput>
        </Combobox.DropdownTarget>

        <OptionsDropdown
          data={optionsData}
          hidden={readOnly || disabled}
          filter={filter}
          search={_searchValue}
          limit={limit}
          hiddenWhenEmpty={
            hidePickedOptions ||
            !nothingFoundMessage ||
            (!searchable && _searchValue.trim().length !== 0)
          }
          withScrollArea={withScrollArea}
          maxDropdownHeight={maxDropdownHeight}
          filterOptions={searchable}
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
        value={_value.join(',')}
        form={form}
        disabled={disabled}
        {...hiddenInputProps}
      />
    </>
  );
});

MultiSelect.classes = { ...InputBase.classes, ...Combobox.classes };
MultiSelect.displayName = '@mantine/core/MultiSelect';
