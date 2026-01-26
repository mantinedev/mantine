import { Fragment, useEffect, useRef } from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  ElementProps,
  extractStyleProps,
  Factory,
  genericFactory,
  MantineColor,
  Primitive,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '../../core';
import {
  Combobox,
  ComboboxItem,
  ComboboxLikeProps,
  ComboboxLikeRenderOptionInput,
  ComboboxLikeStylesNames,
  ComboboxRenderPillInput,
  getOptionsLockup,
  getParsedComboboxData,
  OptionsDropdown,
  OptionsFilter,
  useCombobox,
} from '../Combobox';
import { __BaseInputProps, __InputStylesNames, InputClearButtonProps } from '../Input';
import { InputBase } from '../InputBase';
import { Pill } from '../Pill';
import { PillsInput } from '../PillsInput';
import { ScrollAreaProps } from '../ScrollArea';
import { filterPickedValues } from './filter-picked-values';

export type MultiSelectStylesNames =
  | __InputStylesNames
  | ComboboxLikeStylesNames
  | 'pill'
  | 'pillsList'
  | 'inputField';

export interface MultiSelectProps<Value extends Primitive = string>
  extends
    BoxProps,
    __BaseInputProps,
    ComboboxLikeProps<Value>,
    StylesApiProps<MultiSelectFactory>,
    ElementProps<'input', 'size' | 'value' | 'defaultValue' | 'onChange'> {
  /** Controlled component value */
  value?: Value[];

  /** Uncontrolled component default value */
  defaultValue?: Value[];

  /** Called when value changes */
  onChange?: (value: Value[]) => void;

  /** Called with `value` of the removed item */
  onRemove?: (value: Value) => void;

  /** Called when the clear button is clicked */
  onClear?: () => void;

  /** Called when user attemps to select more values than allowed */
  onMaxValues?: () => void;

  /** Controlled search value */
  searchValue?: string;

  /** Default search value */
  defaultSearchValue?: string;

  /** Called when search changes */
  onSearchChange?: (value: string) => void;

  /** Maximum number of values, no limit if not set */
  maxValues?: number;

  /** Allows searching through options by user input @default false */
  searchable?: boolean;

  /** Message displayed when no options match the search query (when searchable is enabled) or when the data array is empty. If not set, the dropdown will be hidden instead. */
  nothingFoundMessage?: React.ReactNode;

  /** If set, the check icon is displayed near the selected option label @default true */
  withCheckIcon?: boolean;

  /** If set, unchecked labels are aligned with checked ones @default false */
  withAlignedLabels?: boolean;

  /** Position of the checkmark icon shown next to selected options in the dropdown @default 'left' */
  checkIconPosition?: 'left' | 'right';

  /** When enabled, selected options are hidden from the dropdown list @default false */
  hidePickedOptions?: boolean;

  /** When enabled, displays a clear button to remove all selected values (hidden when component is empty, disabled, or read-only) @default false */
  clearable?: boolean;

  /** Props passed down to the clear button */
  clearButtonProps?: InputClearButtonProps;

  /** Props passed down to the hidden input */
  hiddenInputProps?: Omit<React.ComponentProps<'input'>, 'value'>;

  /** Divider used to separate values in the hidden input `value` attribute @default ',' */
  hiddenInputValuesDivider?: string;

  /** A function to render content of the option, replaces the default content of the option */
  renderOption?: (item: ComboboxLikeRenderOptionInput<ComboboxItem>) => React.ReactNode;

  /** A function to render content of the pill */
  renderPill?: (props: ComboboxRenderPillInput<Value>) => React.ReactNode;

  /** Props passed down to the underlying `ScrollArea` component in the dropdown */
  scrollAreaProps?: ScrollAreaProps;

  /** Controls color of the default chevron */
  chevronColor?: MantineColor;

  /** Clear search value when item is selected @default true */
  clearSearchOnChange?: boolean;

  /** Controls whether dropdown opens when the input receives focus @default true */
  openOnFocus?: boolean;
}

export type MultiSelectFactory = Factory<{
  props: MultiSelectProps;
  ref: HTMLInputElement;
  stylesNames: MultiSelectStylesNames;
  signature: <Value extends Primitive = string>(
    props: MultiSelectProps<Value>
  ) => React.JSX.Element;
}>;

const defaultProps = {
  maxValues: Infinity,
  withCheckIcon: true,
  checkIconPosition: 'left',
  hiddenInputValuesDivider: ',',
  clearSearchOnChange: true,
  openOnFocus: true,
  size: 'sm',
} satisfies Partial<MultiSelectProps>;

export const MultiSelect = genericFactory<MultiSelectFactory>((_props) => {
  const props = useProps('MultiSelect', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    value,
    defaultValue,
    onChange,
    onKeyDown,
    variant,
    data,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose,
    selectFirstOptionOnChange,
    selectFirstOptionOnDropdownOpen,
    onOptionSubmit,
    comboboxProps,
    filter,
    limit,
    withScrollArea,
    maxDropdownHeight,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    readOnly,
    disabled,
    onFocus,
    onBlur,
    radius,
    rightSection,
    rightSectionWidth,
    rightSectionPointerEvents,
    rightSectionProps,
    leftSection,
    leftSectionWidth,
    leftSectionPointerEvents,
    leftSectionProps,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    labelProps,
    descriptionProps,
    errorProps,
    wrapperProps,
    description,
    label,
    error,
    maxValues,
    searchable,
    nothingFoundMessage,
    withCheckIcon,
    withAlignedLabels,
    checkIconPosition,
    hidePickedOptions,
    withErrorStyles,
    name,
    form,
    id,
    clearable,
    clearButtonProps,
    hiddenInputProps,
    placeholder,
    hiddenInputValuesDivider,
    required,
    mod,
    renderOption,
    renderPill,
    onRemove,
    onClear,
    onMaxValues,
    scrollAreaProps,
    chevronColor,
    attributes,
    clearSearchOnChange,
    openOnFocus,
    ...others
  } = props;

  const _id = useId(id);
  const parsedData = getParsedComboboxData(data);
  const optionsLockup = getOptionsLockup(parsedData);
  const retainedSelectedOptions = useRef<Record<string, ComboboxItem<Primitive>>>({});

  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen: () => {
      onDropdownOpen?.();
      if (selectFirstOptionOnDropdownOpen) {
        combobox.selectFirstOption();
      }
    },
    onDropdownClose: () => {
      onDropdownClose?.();
      combobox.resetSelectedOption();
    },
  });

  const {
    styleProps,
    rest: { type, autoComplete, ...rest },
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

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    combobox.resetSelectedOption();
  };

  const getStyles = useStyles<MultiSelectFactory>({
    name: 'MultiSelect',
    classes: {} as any,
    props: props as any,
    classNames,
    styles,
    unstyled,
    attributes,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<MultiSelectFactory>({
    props,
    styles,
    classNames,
  });

  const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);

    if (event.key === ' ' && !searchable) {
      event.preventDefault();
      combobox.toggleDropdown();
    }

    if (event.key === 'Backspace' && _searchValue.length === 0 && _value.length > 0) {
      onRemove?.(_value[_value.length - 1]);
      setValue(_value.slice(0, _value.length - 1));
    }
  };

  const values = _value.map((item, index) => {
    const optionData = optionsLockup[`${item}`] || retainedSelectedOptions.current[`${item}`];

    if (renderPill) {
      return (
        <Fragment key={`${item}-${index}`}>
          {renderPill({
            option: optionData,
            value: item,
            onRemove: () => {
              setValue(_value.filter((i) => item !== i));
              onRemove?.(item);
            },
            disabled,
          })}
        </Fragment>
      );
    }

    return (
      <Pill
        key={`${item}-${index}`}
        withRemoveButton={!readOnly && !optionsLockup[`${item}`]?.disabled}
        onRemove={() => {
          setValue(_value.filter((i) => item !== i));
          onRemove?.(item);
        }}
        unstyled={unstyled}
        disabled={disabled}
        {...getStyles('pill')}
      >
        {optionData?.label || item}
      </Pill>
    );
  });

  useEffect(() => {
    if (selectFirstOptionOnChange) {
      combobox.selectFirstOption();
    }
  }, [selectFirstOptionOnChange, _searchValue]);

  useEffect(() => {
    _value.forEach((val) => {
      if (`${val}` in optionsLockup) {
        retainedSelectedOptions.current[`${val}`] = optionsLockup[`${val}`];
      }
    });
  }, [optionsLockup, _value]);

  const clearButton = (
    <Combobox.ClearButton
      {...clearButtonProps}
      onClear={() => {
        onClear?.();
        setValue([]);
        handleSearchChange('');
      }}
    />
  );

  const filteredData = filterPickedValues({ data: parsedData, value: _value });
  const _clearable = clearable && _value.length > 0 && !disabled && !readOnly;

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
        attributes={attributes}
        onOptionSubmit={(val) => {
          onOptionSubmit?.(val as any);
          if (clearSearchOnChange) {
            handleSearchChange('');
          }
          combobox.updateSelectedOptionIndex('selected');

          if (_value.includes(optionsLockup[`${val}`].value as any)) {
            setValue(_value.filter((v) => v !== optionsLockup[`${val}`].value));
            onRemove?.(optionsLockup[`${val}`].value as any);
          } else if (_value.length < maxValues) {
            setValue([..._value, optionsLockup[`${val}`].value] as any);
          } else {
            onMaxValues?.();
          }
        }}
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
            __defaultRightSection={
              <Combobox.Chevron
                size={size}
                error={error}
                unstyled={unstyled}
                color={chevronColor}
              />
            }
            __clearSection={clearButton}
            __clearable={_clearable}
            rightSection={rightSection}
            rightSectionPointerEvents={rightSectionPointerEvents || 'none'}
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
            withErrorStyles={withErrorStyles}
            __stylesApiProps={{
              ...props,
              rightSectionPointerEvents: rightSectionPointerEvents || (_clearable ? 'all' : 'none'),
              multiline: true,
            }}
            pointer={!searchable}
            onClick={() => (searchable ? combobox.openDropdown() : combobox.toggleDropdown())}
            data-expanded={combobox.dropdownOpened || undefined}
            id={_id}
            required={required}
            mod={mod}
            attributes={attributes}
          >
            <Pill.Group
              attributes={attributes}
              disabled={disabled}
              unstyled={unstyled}
              {...getStyles('pillsList')}
            >
              {values}
              <Combobox.EventsTarget autoComplete={autoComplete}>
                <PillsInput.Field
                  {...rest}
                  id={_id}
                  placeholder={placeholder}
                  type={!searchable && !placeholder ? 'hidden' : 'visible'}
                  {...getStyles('inputField')}
                  unstyled={unstyled}
                  onFocus={(event) => {
                    onFocus?.(event);
                    openOnFocus && searchable && combobox.openDropdown();
                  }}
                  onBlur={(event) => {
                    onBlur?.(event);
                    combobox.closeDropdown();
                    handleSearchChange('');
                  }}
                  onKeyDown={handleInputKeydown}
                  value={_searchValue}
                  onChange={(event) => {
                    handleSearchChange(event.currentTarget.value);
                    searchable && combobox.openDropdown();
                    selectFirstOptionOnChange && combobox.selectFirstOption();
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
          data={hidePickedOptions ? filteredData : parsedData}
          hidden={readOnly || disabled}
          filter={filter as OptionsFilter<Primitive> | undefined}
          search={_searchValue}
          limit={limit}
          hiddenWhenEmpty={!nothingFoundMessage}
          withScrollArea={withScrollArea}
          maxDropdownHeight={maxDropdownHeight}
          filterOptions={searchable}
          value={_value}
          checkIconPosition={checkIconPosition}
          withCheckIcon={withCheckIcon}
          withAlignedLabels={withAlignedLabels}
          nothingFoundMessage={nothingFoundMessage}
          unstyled={unstyled}
          labelId={label ? `${_id}-label` : undefined}
          aria-label={label ? undefined : others['aria-label']}
          renderOption={renderOption}
          scrollAreaProps={scrollAreaProps}
        />
      </Combobox>
      <Combobox.HiddenInput
        name={name}
        valuesDivider={hiddenInputValuesDivider}
        value={_value}
        form={form}
        disabled={disabled}
        {...hiddenInputProps}
      />
    </>
  );
});

MultiSelect.classes = { ...InputBase.classes, ...Combobox.classes };
MultiSelect.displayName = '@mantine/core/MultiSelect';
