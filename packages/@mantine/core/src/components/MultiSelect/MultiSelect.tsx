import { Fragment, useEffect } from 'react';
import { useId } from '@mantine/hooks';
import {
  BoxProps,
  ElementProps,
  extractStyleProps,
  Factory,
  genericFactory,
  MantineColor,
  Primitive,
  StylesApiProps,
  useController,
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
  usePillsReorder,
} from '../Combobox';
import { getComboboxLabelId } from '../Combobox/get-combobox-label-id/get-combobox-label-id';
import { getOptionByLabel } from '../Combobox/get-options-lockup/get-option-by-label';
import { isAutofillInputChange } from '../Combobox/is-autofill-input-change/is-autofill-input-change';
import { isExternalInputChange } from '../Combobox/is-external-input-change/is-external-input-change';
import {
  __BaseInputProps,
  __InputStylesNames,
  ClearSectionMode,
  InputClearButtonProps,
} from '../Input';
import { InputBase } from '../InputBase';
import { Pill } from '../Pill';
import { PillsInput } from '../PillsInput';
import { ScrollAreaProps } from '../ScrollArea';
import { filterPickedValues } from './filter-picked-values';
import { MultiSelectStore, useMultiSelect } from './use-multi-select/use-multi-select';

const clearSectionOffset: Record<string, number> = {
  xs: 41,
  sm: 50,
  md: 60,
  lg: 72,
  xl: 89,
};

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
  /** Controlled component value @category state */
  value?: Value[];

  /** Uncontrolled component default value @category state */
  defaultValue?: Value[];

  /** Called when value changes @category state */
  onChange?: (value: Value[]) => void;

  /** Called with `value` of the removed item @category behavior */
  onRemove?: (value: Value) => void;

  /** Called when the clear button is clicked @category behavior */
  onClear?: () => void;

  /** Called when user attempts to select more values than allowed @category behavior */
  onMaxValues?: () => void;

  /** Controlled search value @category state */
  searchValue?: string;

  /** Default search value @category state */
  defaultSearchValue?: string;

  /** Called when search changes @category state */
  onSearchChange?: (value: string) => void;

  /** Maximum number of values, no limit if not set @category behavior */
  maxValues?: number;

  /** Allows searching through options by user input @default false @category behavior */
  searchable?: boolean;

  /** Message displayed when no options match the search query (when searchable is enabled) or when the data array is empty. If not set, the dropdown will be hidden instead. @category appearance */
  nothingFoundMessage?: React.ReactNode;

  /** If set, the check icon is displayed near the selected option label @default true @category appearance */
  withCheckIcon?: boolean;

  /** If set, unchecked labels are aligned with checked ones @default false @category appearance */
  withAlignedLabels?: boolean;

  /** Position of the checkmark icon shown next to selected options in the dropdown @default 'left' @category appearance */
  checkIconPosition?: 'left' | 'right';

  /** When enabled, selected options are hidden from the dropdown list @default false @category appearance */
  hidePickedOptions?: boolean;

  /** When enabled, displays a clear button to remove all selected values (hidden when component is empty, disabled, or read-only) @default false @category behavior */
  clearable?: boolean;

  /** Determines how the clear button and rightSection are rendered @default 'both' @category appearance */
  clearSectionMode?: ClearSectionMode;

  /** Props passed down to the clear button */
  clearButtonProps?: InputClearButtonProps;

  /** Props passed down to the hidden input */
  hiddenInputProps?: Omit<React.ComponentProps<'input'>, 'value'>;

  /** Divider used to separate values in the hidden input `value` attribute @default ',' */
  hiddenInputValuesDivider?: string;

  /** A function to render content of the option, replaces the default content of the option @category appearance */
  renderOption?: (item: ComboboxLikeRenderOptionInput<ComboboxItem<Value>>) => React.ReactNode;

  /** Maximum number of pills displayed, the rest of the values are collapsed into a single `+N more` pill @category appearance */
  maxDisplayedValues?: number;

  /** Content of the pill displayed when the number of values exceeds `maxDisplayedValues` @default `+N more` @category appearance */
  maxDisplayedValuesContent?: React.ReactNode | ((overflow: number) => React.ReactNode);

  /** A function to render content of the pill @category appearance */
  renderPill?: (props: ComboboxRenderPillInput<Value>) => React.ReactNode;

  /** Props passed down to the underlying `ScrollArea` component in the dropdown */
  scrollAreaProps?: ScrollAreaProps;

  /** Controls color of the default chevron @category appearance */
  chevronColor?: MantineColor;

  /** Clear search value when item is selected @default true @category behavior */
  clearSearchOnChange?: boolean;

  /** Controls whether dropdown opens when the input receives focus @default true @category behavior */
  openOnFocus?: boolean;

  /** If set, selected values can be reordered by dragging pills. Disabled when `disabled` or `readOnly` is set. @default false @category behavior */
  withPillsReorder?: boolean;

  /** Store returned by the `useMultiSelect` hook. When provided, value, search and dropdown state are owned by the store and `value`, `defaultValue`, `onChange`, `searchValue`, `defaultSearchValue`, `onSearchChange`, `dropdownOpened`, `defaultDropdownOpened`, `onDropdownOpen`, `onDropdownClose` and `scrollBehavior` props are ignored. The store is also passed to the underlying `Combobox`. A `store` passed in `comboboxProps` is always ignored @category state */
  store?: MultiSelectStore<Value>;
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
  const props = useProps(['Input', 'InputWrapper', 'MultiSelect'], defaultProps, _props);
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
    floatingHeight,
    scrollBehavior,
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
    successProps,
    wrapperProps,
    description,
    label,
    error,
    success,
    maxValues,
    searchable,
    nothingFoundMessage,
    withCheckIcon,
    withAlignedLabels,
    checkIconPosition,
    hidePickedOptions,
    withErrorStyles,
    withSuccessStyles,
    name,
    form,
    id,
    clearable,
    clearSectionMode,
    clearButtonProps,
    hiddenInputProps,
    placeholder,
    hiddenInputValuesDivider,
    required,
    mod,
    renderOption,
    renderPill,
    maxDisplayedValues,
    maxDisplayedValuesContent,
    onRemove,
    onClear,
    onMaxValues,
    scrollAreaProps,
    chevronColor,
    attributes,
    clearSearchOnChange,
    openOnFocus,
    loading,
    loadingPosition,
    withPillsReorder,
    store: storeProp,
    ...others
  } = props;

  const _id = useId(id);
  const comboboxLabelId = getComboboxLabelId({
    id: _id,
    label,
    labelProps,
    inputWrapperOrder,
  });
  const parsedData = getParsedComboboxData(data);
  const optionsLockup = getOptionsLockup(parsedData);

  const store = useController(
    useMultiSelect<Primitive>,
    storeProp as unknown as MultiSelectStore<Primitive> | undefined,
    {
      value,
      defaultValue,
      onChange: onChange as MultiSelectProps<Primitive>['onChange'],
      searchValue,
      defaultSearchValue,
      onSearchChange,
      dropdownOpened,
      defaultDropdownOpened,
      onDropdownOpen,
      onDropdownClose,
      scrollBehavior,
    }
  );

  store.registerOptions(optionsLockup);

  store.registerDropdownCallbacks({
    onOpen: () => {
      if (selectFirstOptionOnDropdownOpen) {
        store.selectFirstOption();
      }
    },
    onClose: () => {
      store.resetSelectedOption();
    },
  });

  const {
    styleProps,
    rest: { type, autoComplete, ...rest },
  } = extractStyleProps(others);

  const _value = store.value as NonNullable<typeof value>;
  const setValue = store.setValue;

  const displayedValues = maxDisplayedValues != null ? _value.slice(0, maxDisplayedValues) : _value;
  const overflowCount = _value.length - displayedValues.length;

  const { getPillProps, getListProps, handleInputKeyDown } = usePillsReorder({
    value: displayedValues,
    onChange: (next) =>
      setValue([...next, ..._value.slice(displayedValues.length)] as typeof _value),
    enabled: withPillsReorder && !disabled && !readOnly,
  });

  const _searchValue = store.search;
  const valueOptions = store.getValueOptions();

  const handleSearchChange = (value: string) => {
    store.setSearch(value);
    store.resetSelectedOption();
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

    if (event.defaultPrevented) {
      return;
    }

    if (event.key === ' ' && !searchable) {
      event.preventDefault();
      store.toggleDropdown();
    }

    if (event.key === 'Backspace' && !readOnly && _searchValue.length === 0) {
      let removableIndex = _value.length - 1;
      while (removableIndex >= 0 && optionsLockup[`${_value[removableIndex]}`]?.disabled) {
        removableIndex -= 1;
      }

      if (removableIndex !== -1) {
        const removedValue = _value[removableIndex];
        onRemove?.(removedValue);
        setValue(_value.filter((_, index) => index !== removableIndex));
      }
    }

    handleInputKeyDown(event);
  };

  const values = displayedValues.map((item, index) => {
    const optionData = valueOptions[index];
    const reorderProps = getPillProps(index);

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
            reorderProps,
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
        {...reorderProps}
      >
        {optionData.label || item}
      </Pill>
    );
  });

  if (overflowCount > 0) {
    values.push(
      <Pill key="__overflow" unstyled={unstyled} disabled={disabled} {...getStyles('pill')}>
        {typeof maxDisplayedValuesContent === 'function'
          ? maxDisplayedValuesContent(overflowCount)
          : maxDisplayedValuesContent || `+${overflowCount} more`}
      </Pill>
    );
  }

  useEffect(() => {
    if (selectFirstOptionOnChange) {
      store.selectFirstOption();
    }
  }, [selectFirstOptionOnChange, _searchValue]);

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
  const pillsListStyle = _clearable
    ? { paddingInlineEnd: clearSectionOffset[size] ?? clearSectionOffset.sm }
    : undefined;

  return (
    <>
      <Combobox
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        size={size}
        readOnly={readOnly}
        __staticSelector="MultiSelect"
        attributes={attributes}
        floatingHeight={floatingHeight}
        onOptionSubmit={(val) => {
          onOptionSubmit?.(optionsLockup[`${val}`].value as any);
          if (clearSearchOnChange) {
            handleSearchChange('');
          }
          store.updateSelectedOptionIndex('selected');

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
        store={store}
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
            __clearSectionMode={clearSectionMode}
            rightSection={rightSection}
            rightSectionPointerEvents={rightSectionPointerEvents || 'none'}
            rightSectionWidth={rightSectionWidth}
            rightSectionProps={rightSectionProps}
            leftSection={leftSection}
            leftSectionWidth={leftSectionWidth}
            leftSectionPointerEvents={leftSectionPointerEvents}
            leftSectionProps={leftSectionProps}
            loading={loading}
            loadingPosition={loadingPosition}
            inputContainer={inputContainer}
            inputWrapperOrder={inputWrapperOrder}
            withAsterisk={withAsterisk}
            labelProps={labelProps}
            descriptionProps={descriptionProps}
            errorProps={errorProps}
            successProps={successProps}
            wrapperProps={wrapperProps}
            description={description}
            label={label}
            error={error}
            success={success}
            withErrorStyles={withErrorStyles}
            withSuccessStyles={withSuccessStyles}
            __stylesApiProps={{
              ...props,
              rightSectionPointerEvents: rightSectionPointerEvents || 'none',
              multiline: true,
            }}
            pointer={!searchable}
            onClick={() => (searchable ? store.openDropdown() : store.toggleDropdown())}
            data-expanded={store.dropdownOpened || undefined}
            id={_id}
            required={required}
            mod={mod}
            attributes={attributes}
          >
            <Pill.Group
              attributes={attributes}
              disabled={disabled}
              unstyled={unstyled}
              {...getStyles('pillsList', { style: pillsListStyle })}
              {...getListProps()}
            >
              {values}
              <Combobox.EventsTarget autoComplete={autoComplete} withExpandedAttribute>
                <PillsInput.Field
                  {...rest}
                  id={_id}
                  placeholder={placeholder}
                  type={!searchable && !placeholder ? 'hidden' : 'visible'}
                  {...getStyles('inputField')}
                  unstyled={unstyled}
                  onFocus={(event) => {
                    onFocus?.(event);
                    openOnFocus && searchable && store.openDropdown();
                  }}
                  onBlur={(event) => {
                    onBlur?.(event);
                    store.closeDropdown();
                    handleSearchChange('');
                  }}
                  onKeyDown={handleInputKeydown}
                  value={_searchValue}
                  onChange={(event) => {
                    if (isExternalInputChange(event)) {
                      if (!readOnly) {
                        const externalOption = getOptionByLabel(
                          optionsLockup,
                          event.currentTarget.value
                        );

                        if (
                          externalOption &&
                          !_value.includes(externalOption.value as any) &&
                          _value.length < maxValues
                        ) {
                          setValue([..._value, externalOption.value] as any);
                        }
                      }

                      return;
                    }

                    const autofillOption =
                      isAutofillInputChange(event) && !readOnly
                        ? getOptionByLabel(optionsLockup, event.currentTarget.value)
                        : undefined;

                    if (autofillOption) {
                      const selected = _value.includes(autofillOption.value as any);

                      if (!selected && _value.length >= maxValues) {
                        onMaxValues?.();
                        return;
                      }

                      if (!selected) {
                        setValue([..._value, autofillOption.value] as any);
                      }

                      handleSearchChange(clearSearchOnChange ? '' : event.currentTarget.value);
                      return;
                    }

                    handleSearchChange(event.currentTarget.value);
                    searchable && store.openDropdown();
                    selectFirstOptionOnChange && store.selectFirstOption();
                  }}
                  disabled={disabled}
                  readOnly={readOnly || !searchable}
                  pointer={!searchable}
                  required={required && _value.length === 0}
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
          labelId={comboboxLabelId}
          aria-label={comboboxLabelId ? undefined : others['aria-label']}
          multiple
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

export namespace MultiSelect {
  export type Props<Value extends Primitive = string> = MultiSelectProps<Value>;
  export type StylesNames = MultiSelectStylesNames;
  export type Factory = MultiSelectFactory;
}
