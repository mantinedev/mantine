import { useEffect } from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
} from '../../core';
import {
  Combobox,
  ComboboxLikeProps,
  ComboboxLikeRenderOptionInput,
  ComboboxLikeStylesNames,
  ComboboxStringData,
  ComboboxStringItem,
  getOptionsLockup,
  getParsedComboboxData,
  OptionsDropdown,
  useCombobox,
} from '../Combobox';
import {
  __BaseInputProps,
  __InputStylesNames,
  InputClearButtonProps,
  InputVariant,
} from '../Input';
import { InputBase } from '../InputBase';
import { ScrollAreaProps } from '../ScrollArea';

export type RenderAutocompleteOption = (
  input: ComboboxLikeRenderOptionInput<ComboboxStringItem>
) => React.ReactNode;

export type AutocompleteStylesNames = __InputStylesNames | ComboboxLikeStylesNames;

export interface AutocompleteProps
  extends BoxProps,
    Omit<__BaseInputProps, 'pointer'>,
    Omit<ComboboxLikeProps, 'data'>,
    StylesApiProps<AutocompleteFactory>,
    ElementProps<'input', 'onChange' | 'size'> {
  /** Data used to display options. Values must be unique. */
  data?: ComboboxStringData;

  /** Controlled component value */
  value?: string;

  /** Default value for uncontrolled component */
  defaultValue?: string;

  /** Called when value changes */
  onChange?: (value: string) => void;

  /** Function to render custom option content */
  renderOption?: RenderAutocompleteOption;

  /** Props passed to the underlying `ScrollArea` component in the dropdown */
  scrollAreaProps?: ScrollAreaProps;

  /** Called when the clear button is clicked */
  onClear?: () => void;

  /** Props passed to the clear button */
  clearButtonProps?: InputClearButtonProps;

  /** If set, the clear button is displayed when the component has a value @default `false` */
  clearable?: boolean;

  /** If set, the highlighted option is selected when the input loses focus @default `false` */
  autoSelectOnBlur?: boolean;
}

export type AutocompleteFactory = Factory<{
  props: AutocompleteProps;
  ref: HTMLInputElement;
  stylesNames: AutocompleteStylesNames;
  variant: InputVariant;
}>;

export const Autocomplete = factory<AutocompleteFactory>((_props, ref) => {
  const props = useProps('Autocomplete', null, _props);
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
    onOptionSubmit,
    comboboxProps,
    readOnly,
    disabled,
    filter,
    limit,
    withScrollArea,
    maxDropdownHeight,
    size,
    id,
    renderOption,
    autoComplete,
    scrollAreaProps,
    onClear,
    clearButtonProps,
    error,
    clearable,
    rightSection,
    autoSelectOnBlur,
    attributes,
    ...others
  } = props;

  const _id = useId(id);
  const parsedData = getParsedComboboxData(data);
  const optionsLockup = getOptionsLockup(parsedData);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
    onChange,
  });

  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose: () => {
      onDropdownClose?.();
      // Required for autoSelectOnBlur to work correctly
      setTimeout(combobox.resetSelectedOption, 0);
    },
  });

  const handleValueChange = (value: string) => {
    setValue(value);
    combobox.resetSelectedOption();
  };

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<AutocompleteFactory>({
    props,
    styles,
    classNames,
  });

  useEffect(() => {
    if (selectFirstOptionOnChange) {
      combobox.selectFirstOption();
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
      store={combobox}
      __staticSelector="Autocomplete"
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      unstyled={unstyled}
      readOnly={readOnly}
      size={size}
      attributes={attributes}
      keepMounted={autoSelectOnBlur}
      onOptionSubmit={(val) => {
        onOptionSubmit?.(val);
        handleValueChange(optionsLockup[val].label);
        combobox.closeDropdown();
      }}
      {...comboboxProps}
    >
      <Combobox.Target autoComplete={autoComplete}>
        <InputBase
          ref={ref}
          {...others}
          size={size}
          __staticSelector="Autocomplete"
          __clearSection={clearButton}
          __clearable={clearable && !!_value && !disabled && !readOnly}
          rightSection={rightSection}
          disabled={disabled}
          readOnly={readOnly}
          value={_value}
          error={error}
          onChange={(event) => {
            handleValueChange(event.currentTarget.value);
            combobox.openDropdown();
            selectFirstOptionOnChange && combobox.selectFirstOption();
          }}
          onFocus={(event) => {
            combobox.openDropdown();
            onFocus?.(event);
          }}
          onBlur={(event) => {
            if (autoSelectOnBlur) {
              combobox.clickSelectedOption();
            }

            combobox.closeDropdown();
            onBlur?.(event);
          }}
          onClick={(event) => {
            combobox.openDropdown();
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
        filter={filter}
        search={_value}
        limit={limit}
        hiddenWhenEmpty
        withScrollArea={withScrollArea}
        maxDropdownHeight={maxDropdownHeight}
        unstyled={unstyled}
        labelId={others.label ? `${_id}-label` : undefined}
        aria-label={others.label ? undefined : others['aria-label']}
        renderOption={renderOption}
        scrollAreaProps={scrollAreaProps}
      />
    </Combobox>
  );
});

Autocomplete.classes = { ...InputBase.classes, ...Combobox.classes };
Autocomplete.displayName = '@mantine/core/Autocomplete';
