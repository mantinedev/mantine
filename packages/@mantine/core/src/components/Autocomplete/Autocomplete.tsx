import { useEffect } from 'react';
import { useId } from '@mantine/hooks';
import {
  BoxProps,
  ElementProps,
  factory,
  Factory,
  Primitive,
  StylesApiProps,
  useController,
  useProps,
  useResolvedStylesApi,
} from '../../core';
import {
  Combobox,
  ComboboxGenericData,
  ComboboxGenericItem,
  ComboboxLikeProps,
  ComboboxLikeRenderOptionInput,
  ComboboxLikeStylesNames,
  getOptionsLockup,
  getParsedComboboxData,
  OptionsDropdown,
  OptionsFilter,
} from '../Combobox';
import { getComboboxLabelId } from '../Combobox/get-combobox-label-id/get-combobox-label-id';
import {
  __BaseInputProps,
  __InputStylesNames,
  ClearSectionMode,
  InputClearButtonProps,
  InputVariant,
} from '../Input';
import { InputBase } from '../InputBase';
import { ScrollAreaProps } from '../ScrollArea';
import { AutocompleteStore, useAutocomplete } from './use-autocomplete/use-autocomplete';

export type RenderAutocompleteOption = (
  input: ComboboxLikeRenderOptionInput<ComboboxGenericItem>
) => React.ReactNode;

export type AutocompleteStylesNames = __InputStylesNames | ComboboxLikeStylesNames;

export interface AutocompleteProps
  extends
    BoxProps,
    Omit<__BaseInputProps, 'pointer'>,
    Omit<ComboboxLikeProps, 'data'>,
    StylesApiProps<AutocompleteFactory>,
    ElementProps<'input', 'onChange' | 'size'> {
  /** Data used to display options. Values must be unique. @category appearance */
  data?: ComboboxGenericData;

  /** Controlled component value @category state */
  value?: string;

  /** Default value for uncontrolled component @category state */
  defaultValue?: string;

  /** Called when value changes @category state */
  onChange?: (value: string) => void;

  /** Function to render custom option content @category appearance */
  renderOption?: RenderAutocompleteOption;

  /** Props passed to the underlying `ScrollArea` component in the dropdown */
  scrollAreaProps?: ScrollAreaProps;

  /** Called when the clear button is clicked @category behavior */
  onClear?: () => void;

  /** Props passed down to the clear button */
  clearButtonProps?: InputClearButtonProps;

  /** If set, the clear button is displayed when the component has a value @default false @category behavior */
  clearable?: boolean;

  /** Determines how the clear button and rightSection are rendered @default 'both' @category appearance */
  clearSectionMode?: ClearSectionMode;

  /** If set, the highlighted option is selected when the input loses focus @default false @category behavior */
  autoSelectOnBlur?: boolean;

  /** If set, the dropdown opens when the input receives focus @default true @category behavior */
  openOnFocus?: boolean;

  /** Store returned by the `useAutocomplete` hook. When provided, value and dropdown state are owned by the store and `value`, `defaultValue`, `onChange`, `dropdownOpened`, `defaultDropdownOpened`, `onDropdownOpen`, `onDropdownClose` and `scrollBehavior` props are ignored. The store is also passed to the underlying `Combobox`. A `store` passed in `comboboxProps` is always ignored @category state */
  store?: AutocompleteStore;
}

export type AutocompleteFactory = Factory<{
  props: AutocompleteProps;
  ref: HTMLInputElement;
  stylesNames: AutocompleteStylesNames;
  variant: InputVariant;
}>;

export const Autocomplete = factory<AutocompleteFactory>((_props) => {
  const props = useProps(
    ['Input', 'InputWrapper', 'Autocomplete'],
    { size: 'sm', openOnFocus: true } satisfies Partial<AutocompleteProps>,
    _props
  );
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
    id,
    renderOption,
    autoComplete,
    scrollAreaProps,
    onClear,
    clearButtonProps,
    error,
    clearable,
    clearSectionMode,
    rightSection,
    autoSelectOnBlur,
    openOnFocus,
    attributes,
    store: storeProp,
    ...others
  } = props;

  const _id = useId(id);
  const comboboxLabelId = getComboboxLabelId({
    id: _id,
    label: others.label,
    labelProps: others.labelProps,
    inputWrapperOrder: others.inputWrapperOrder,
  });
  const parsedData = getParsedComboboxData(data);
  const optionsLockup = getOptionsLockup(parsedData);

  const store = useController(useAutocomplete, storeProp, {
    value,
    defaultValue,
    onChange,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose,
    scrollBehavior,
  });

  store.registerDropdownCallbacks({
    onOpen: () => {
      if (selectFirstOptionOnDropdownOpen) {
        store.selectFirstOption();
      }
    },
    onClose: () => {
      setTimeout(store.resetSelectedOption, 0);
    },
  });

  const _value = store.value;

  const handleValueChange = (value: string) => {
    store.setValue(value);
    store.resetSelectedOption();
  };

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<AutocompleteFactory>({
    props,
    styles,
    classNames,
  });

  useEffect(() => {
    if (selectFirstOptionOnChange) {
      store.selectFirstOption();
    }
  }, [selectFirstOptionOnChange, _value]);

  const clearButton = (
    <Combobox.ClearButton
      {...clearButtonProps}
      onClear={() => {
        handleValueChange('');
        onClear?.();
      }}
    />
  );

  return (
    <Combobox
      __staticSelector="Autocomplete"
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      unstyled={unstyled}
      readOnly={readOnly}
      size={size}
      attributes={attributes}
      floatingHeight={floatingHeight}
      keepMounted={autoSelectOnBlur}
      onOptionSubmit={(val) => {
        onOptionSubmit?.(val);
        handleValueChange(optionsLockup[val].label);
        store.closeDropdown();
      }}
      {...comboboxProps}
      store={store}
    >
      <Combobox.Target autoComplete={autoComplete} withExpandedAttribute>
        <InputBase
          {...others}
          size={size}
          __staticSelector="Autocomplete"
          __clearSection={clearButton}
          __clearable={clearable && !!_value && !disabled && !readOnly}
          __clearSectionMode={clearSectionMode}
          rightSection={rightSection}
          disabled={disabled}
          readOnly={readOnly}
          value={_value}
          error={error}
          onChange={(event) => {
            handleValueChange(event.currentTarget.value);
            store.openDropdown();
            selectFirstOptionOnChange && store.selectFirstOption();
          }}
          onFocus={(event) => {
            openOnFocus && store.openDropdown();
            onFocus?.(event);
          }}
          onBlur={(event) => {
            if (autoSelectOnBlur) {
              store.clickSelectedOption();
            }

            store.closeDropdown();
            onBlur?.(event);
          }}
          onClick={(event) => {
            store.openDropdown();
            onClick?.(event);
          }}
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          unstyled={unstyled}
          attributes={attributes}
          id={_id}
        />
      </Combobox.Target>
      <OptionsDropdown
        data={parsedData}
        hidden={readOnly || disabled}
        filter={filter as OptionsFilter<Primitive> | undefined}
        search={_value}
        limit={limit}
        hiddenWhenEmpty
        withScrollArea={withScrollArea}
        maxDropdownHeight={maxDropdownHeight}
        unstyled={unstyled}
        labelId={comboboxLabelId}
        aria-label={comboboxLabelId ? undefined : others['aria-label']}
        renderOption={renderOption}
        scrollAreaProps={scrollAreaProps}
      />
    </Combobox>
  );
});

Autocomplete.classes = { ...InputBase.classes, ...Combobox.classes };
Autocomplete.displayName = '@mantine/core/Autocomplete';

export namespace Autocomplete {
  export type Props = AutocompleteProps;
  export type StylesNames = AutocompleteStylesNames;
  export type RenderOption = RenderAutocompleteOption;
  export type Factory = AutocompleteFactory;
}
