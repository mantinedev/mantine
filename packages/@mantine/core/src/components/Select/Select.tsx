import { useEffect, useMemo } from 'react';
import { useId, usePrevious } from '@mantine/hooks';
import {
  BoxProps,
  ElementProps,
  Factory,
  genericFactory,
  MantineColor,
  Primitive,
  StylesApiProps,
  useController,
  useProps,
  useResolvedStylesApi,
} from '../../core';
import {
  Combobox,
  ComboboxItem,
  ComboboxLikeProps,
  ComboboxLikeRenderOptionInput,
  ComboboxLikeStylesNames,
  getOptionsLockup,
  getParsedComboboxData,
  OptionsDropdown,
  OptionsFilter,
} from '../Combobox';
import { getOptionByLabel } from '../Combobox/get-options-lockup/get-option-by-label';
import { isExternalInputChange } from '../Combobox/is-external-input-change/is-external-input-change';
import {
  __BaseInputProps,
  __InputStylesNames,
  ClearSectionMode,
  InputClearButtonProps,
  InputVariant,
} from '../Input';
import { InputBase } from '../InputBase';
import { ScrollAreaProps } from '../ScrollArea';
import { SelectStore, useSelect } from './use-select/use-select';

export type SelectStylesNames = __InputStylesNames | ComboboxLikeStylesNames;

export interface SelectProps<Value extends Primitive = string>
  extends
    BoxProps,
    __BaseInputProps,
    ComboboxLikeProps<Value>,
    StylesApiProps<SelectFactory>,
    ElementProps<'input', 'onChange' | 'size' | 'value' | 'defaultValue'> {
  /** Controlled component value @category state */
  value?: Value | null;

  /** Uncontrolled component default value @category state */
  defaultValue?: Value | null;

  /** Called when value changes @category state */
  onChange?: (value: Value | null, option: ComboboxItem<Value>) => void;

  /** Called when the clear button is clicked @category behavior */
  onClear?: () => void;

  /** Determines whether the select should be searchable @default false @category behavior */
  searchable?: boolean;

  /** Displays check icon near the selected option label @default true @category appearance */
  withCheckIcon?: boolean;

  /** Aligns unchecked labels with the checked one @default false @category appearance */
  withAlignedLabels?: boolean;

  /** Position of the check icon relative to the option label @default 'left' @category appearance */
  checkIconPosition?: 'left' | 'right';

  /** Message displayed when no options match the search query or when there is no data @category appearance */
  nothingFoundMessage?: React.ReactNode;

  /** Controlled search value @category state */
  searchValue?: string;

  /** Default search value @category state */
  defaultSearchValue?: string;

  /** Called when search changes @category state */
  onSearchChange?: (value: string) => void;

  /** Allows deselecting the selected option by clicking it @default true @category behavior */
  allowDeselect?: boolean;

  /** Displays clear button in the right section when component has value @default false @category behavior */
  clearable?: boolean;

  /** Determines how the clear button and rightSection are rendered @default 'both' @category appearance */
  clearSectionMode?: ClearSectionMode;

  /** Props passed down to the clear button */
  clearButtonProps?: InputClearButtonProps;

  /** Props passed down to the hidden input */
  hiddenInputProps?: Omit<React.ComponentProps<'input'>, 'value'>;

  /** A function to render content of the option, replaces the default content of the option @category appearance */
  renderOption?: (item: ComboboxLikeRenderOptionInput<ComboboxItem<Value>>) => React.ReactNode;

  /** Props passed down to the underlying `ScrollArea` component in the dropdown */
  scrollAreaProps?: ScrollAreaProps;

  /** Controls color of the default chevron, by default depends on the color scheme @category appearance */
  chevronColor?: MantineColor;

  /** Automatically selects the highlighted option when input loses focus @default false @category behavior */
  autoSelectOnBlur?: boolean;

  /** Opens dropdown when input receives focus (requires searchable={true}) @default true @category behavior */
  openOnFocus?: boolean;

  /** Store returned by the `useSelect` hook. When provided, value, search and dropdown state are owned by the store and `value`, `defaultValue`, `onChange`, `searchValue`, `defaultSearchValue`, `onSearchChange`, `dropdownOpened`, `defaultDropdownOpened`, `onDropdownOpen`, `onDropdownClose` and `scrollBehavior` props are ignored. The store is also passed to the underlying `Combobox`. A `store` passed in `comboboxProps` is always ignored @category state */
  store?: SelectStore<Value>;
}

export type SelectFactory = Factory<{
  props: SelectProps;
  ref: HTMLInputElement;
  stylesNames: SelectStylesNames;
  variant: InputVariant;
  signature: <Value extends Primitive = string>(props: SelectProps<Value>) => React.JSX.Element;
}>;

const defaultProps = {
  size: 'sm',
  withCheckIcon: true,
  allowDeselect: true,
  checkIconPosition: 'left',
  openOnFocus: true,
} satisfies Partial<SelectProps>;

export const Select = genericFactory<SelectFactory>((_props) => {
  const props = useProps(['Input', 'InputWrapper', 'Select'], defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    vars,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownClose,
    onDropdownOpen,
    onFocus,
    onBlur,
    onClick,
    onChange,
    data,
    value,
    defaultValue,
    selectFirstOptionOnChange,
    selectFirstOptionOnDropdownOpen,
    onOptionSubmit,
    comboboxProps,
    readOnly,
    disabled,
    filter,
    limit,
    withScrollArea,
    maxDropdownHeight,
    floatingHeight,
    scrollBehavior,
    size,
    searchable,
    rightSection,
    checkIconPosition,
    withCheckIcon,
    withAlignedLabels,
    nothingFoundMessage,
    name,
    form,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    allowDeselect,
    error,
    rightSectionPointerEvents,
    id,
    clearable,
    clearSectionMode,
    clearButtonProps,
    hiddenInputProps,
    renderOption,
    onClear,
    autoComplete,
    scrollAreaProps,
    __defaultRightSection,
    __clearSection,
    __clearable,
    chevronColor,
    autoSelectOnBlur,
    openOnFocus,
    attributes,
    store: storeProp,
    ...others
  } = props;

  const parsedData = useMemo(() => getParsedComboboxData(data), [data]);
  const optionsLockup = useMemo(() => getOptionsLockup(parsedData), [parsedData]);
  const _id = useId(id);
  const initialValue = value !== undefined ? value : defaultValue;

  const store = useController(
    useSelect<Primitive>,
    storeProp as unknown as SelectStore<Primitive> | undefined,
    {
      value,
      defaultValue,
      onChange: onChange as SelectProps<Primitive>['onChange'],
      searchValue,
      defaultSearchValue:
        defaultSearchValue ??
        (initialValue != null ? optionsLockup[`${initialValue}`]?.label : undefined),
      onSearchChange,
      dropdownOpened,
      defaultDropdownOpened,
      onDropdownOpen,
      onDropdownClose,
      scrollBehavior,
    }
  );

  store.registerOptions(optionsLockup);

  const _value = store.value;
  const search = store.getDisplayedSearch();
  const controlled = store.valueControlled;
  const setValue = store.setValue;
  const setSearch = store.setSearch;
  const selectedOption = store.getValueOption();
  const previousSelectedOption = usePrevious(selectedOption);
  const controlledValue = controlled ? _value : undefined;

  store.registerDropdownCallbacks({
    onOpen: () => {
      if (selectFirstOptionOnDropdownOpen) {
        store.selectFirstOption();
      } else {
        store.updateSelectedOptionIndex('active', { scrollIntoView: true });
      }
    },
    onClose: () => {
      // Required for autoSelectOnBlur to work correctly
      setTimeout(store.resetSelectedOption, 0);
    },
  });

  const handleSearchChange = (value: string) => {
    setSearch(value);
    store.resetSelectedOption();
  };

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<SelectFactory>({
    props,
    styles,
    classNames,
  });

  useEffect(() => {
    if (selectFirstOptionOnChange) {
      store.selectFirstOption();
    }
  }, [selectFirstOptionOnChange, search]);

  useEffect(() => {
    if (controlledValue === null) {
      handleSearchChange('');
    }

    if (
      controlledValue != null &&
      selectedOption &&
      (previousSelectedOption?.value !== selectedOption.value ||
        previousSelectedOption?.label !== selectedOption.label)
    ) {
      handleSearchChange(selectedOption.label);
    }
  }, [controlledValue, selectedOption]);

  useEffect(() => {
    if (!controlled && !store.searchControlled) {
      handleSearchChange(selectedOption?.label || '');
    }
  }, [_value, selectedOption?.value, selectedOption?.label]);

  const clearButton = (
    <Combobox.ClearButton
      {...clearButtonProps}
      onClear={() => {
        setValue(null);
        handleSearchChange('');
        onClear?.();
      }}
    />
  );

  const _clearable = clearable && _value != null && !disabled && !readOnly;

  return (
    <>
      <Combobox
        __staticSelector="Select"
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        readOnly={readOnly}
        size={size}
        attributes={attributes}
        floatingHeight={floatingHeight}
        keepMounted={autoSelectOnBlur}
        onOptionSubmit={(val) => {
          onOptionSubmit?.(optionsLockup[val].value as any);
          const optionLockup = allowDeselect
            ? `${optionsLockup[val].value}` === `${_value}`
              ? null
              : optionsLockup[val]
            : optionsLockup[val];

          const nextValue = optionLockup ? optionLockup.value : null;

          nextValue !== _value && setValue(nextValue, optionLockup ?? undefined);
          !controlled && handleSearchChange(nextValue != null ? optionLockup?.label || '' : '');
          store.closeDropdown();
        }}
        {...comboboxProps}
        store={store}
      >
        <Combobox.Target
          targetType={searchable ? 'input' : 'button'}
          autoComplete={autoComplete}
          withExpandedAttribute
        >
          <InputBase
            id={_id}
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
            {...others}
            size={size}
            __staticSelector="Select"
            disabled={disabled}
            readOnly={readOnly || !searchable}
            value={search}
            onChange={(event) => {
              if (isExternalInputChange(event)) {
                if (!readOnly) {
                  const externalOption = getOptionByLabel(optionsLockup, event.currentTarget.value);

                  if (externalOption && `${externalOption.value}` !== `${_value}`) {
                    setValue(externalOption.value, externalOption);
                    !controlled && handleSearchChange(externalOption.label);
                  }
                }

                return;
              }

              handleSearchChange(event.currentTarget.value);
              store.openDropdown();
              selectFirstOptionOnChange && store.selectFirstOption();
            }}
            onFocus={(event) => {
              openOnFocus && !!searchable && store.openDropdown();
              onFocus?.(event);
            }}
            onBlur={(event) => {
              if (autoSelectOnBlur) {
                store.clickSelectedOption();
              }

              store.closeDropdown();
              const optionLockup = store.getValueOption();
              handleSearchChange(optionLockup ? optionLockup.label || '' : '');
              onBlur?.(event);
            }}
            onClick={(event) => {
              searchable ? store.openDropdown() : store.toggleDropdown();
              onClick?.(event);
            }}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            unstyled={unstyled}
            pointer={!searchable}
            error={error}
            attributes={attributes}
          />
        </Combobox.Target>
        <OptionsDropdown
          data={parsedData as any}
          hidden={readOnly || disabled}
          filter={filter as OptionsFilter<Primitive> | undefined}
          search={search}
          limit={limit}
          hiddenWhenEmpty={!nothingFoundMessage}
          withScrollArea={withScrollArea}
          maxDropdownHeight={maxDropdownHeight}
          filterOptions={!!searchable && selectedOption?.label !== search}
          value={_value}
          checkIconPosition={checkIconPosition}
          withCheckIcon={withCheckIcon}
          withAlignedLabels={withAlignedLabels}
          nothingFoundMessage={nothingFoundMessage}
          unstyled={unstyled}
          labelId={others.label ? `${_id}-label` : undefined}
          aria-label={others.label ? undefined : others['aria-label']}
          renderOption={renderOption}
          scrollAreaProps={scrollAreaProps}
        />
      </Combobox>
      <Combobox.HiddenInput
        value={_value}
        name={name}
        form={form}
        disabled={disabled}
        {...hiddenInputProps}
      />
    </>
  );
});

Select.classes = { ...InputBase.classes, ...Combobox.classes };
Select.displayName = '@mantine/core/Select';

export namespace Select {
  export type Props<Value extends Primitive = string> = SelectProps<Value>;
  export type StylesNames = SelectStylesNames;
  export type Factory = SelectFactory;
}
