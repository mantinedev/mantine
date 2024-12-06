import { useEffect, useRef } from 'react';
import { useId, useMergedRef, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  ElementProps,
  extractStyleProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
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
import { __BaseInputProps, __InputStylesNames, InputClearButtonProps } from '../Input';
import { InputBase } from '../InputBase';
import { Pill } from '../Pill';
import { PillsInput } from '../PillsInput';
import { ScrollAreaProps } from '../ScrollArea';
import { filterPickedTags } from './filter-picked-tags';
import { getSplittedTags } from './get-splitted-tags';

export type TagsInputStylesNames =
  | __InputStylesNames
  | ComboboxLikeStylesNames
  | 'pill'
  | 'pillsList'
  | 'inputField';

export interface TagsInputProps
  extends BoxProps,
    __BaseInputProps,
    Omit<ComboboxLikeProps, 'data'>,
    StylesApiProps<TagsInputFactory>,
    ElementProps<'input', 'size' | 'value' | 'defaultValue' | 'onChange'> {
  /** Data displayed in the dropdown. Values must be unique, otherwise an error will be thrown and component will not render. */
  data?: ComboboxStringData;

  /** Controlled component value */
  value?: string[];

  /** Default value for uncontrolled component */
  defaultValue?: string[];

  /** Called when value changes */
  onChange?: (value: string[]) => void;

  /** Called when tag is removed */
  onRemove?: (value: string) => void;

  /** Called when the clear button is clicked */
  onClear?: () => void;

  /** Controlled search value */
  searchValue?: string;

  /** Default search value */
  defaultSearchValue?: string;

  /** Called when search changes */
  onSearchChange?: (value: string) => void;

  /** Maximum number of tags, `Infinity` by default */
  maxTags?: number;

  /** Determines whether duplicate tags are allowed, `false` by default */
  allowDuplicates?: boolean;

  /** Called when user tries to submit a duplicated tag */
  onDuplicate?: (value: string) => void;

  /** Characters that should trigger tags split, `[',']` by default */
  splitChars?: string[];

  /** Determines whether the clear button should be displayed in the right section when the component has value, `false` by default */
  clearable?: boolean;

  /** Props passed down to the clear button */
  clearButtonProps?: InputClearButtonProps & ElementProps<'button'>;

  /** Props passed down to the hidden input */
  hiddenInputProps?: Omit<React.ComponentPropsWithoutRef<'input'>, 'value'>;

  /** Divider used to separate values in the hidden input `value` attribute, `','` by default */
  hiddenInputValuesDivider?: string;

  /** A function to render content of the option, replaces the default content of the option */
  renderOption?: (input: ComboboxLikeRenderOptionInput<ComboboxStringItem>) => React.ReactNode;

  /** Props passed down to the underlying `ScrollArea` component in the dropdown */
  scrollAreaProps?: ScrollAreaProps;

  /** Determines whether the value typed in by the user but not submitted should be accepted when the input is blurred, `true` by default */
  acceptValueOnBlur?: boolean;
}

export type TagsInputFactory = Factory<{
  props: TagsInputProps;
  ref: HTMLInputElement;
  stylesNames: TagsInputStylesNames;
}>;

const defaultProps: Partial<TagsInputProps> = {
  maxTags: Infinity,
  allowDuplicates: false,
  acceptValueOnBlur: true,
  splitChars: [','],
  hiddenInputValuesDivider: ',',
};

export const TagsInput = factory<TagsInputFactory>((_props, ref) => {
  const props = useProps('TagsInput', defaultProps, _props);
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
    maxTags,
    allowDuplicates,
    onDuplicate,
    variant,
    data,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose,
    selectFirstOptionOnChange,
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
    splitChars,
    onFocus,
    onBlur,
    onPaste,
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
    required,
    labelProps,
    descriptionProps,
    errorProps,
    wrapperProps,
    description,
    label,
    error,
    withErrorStyles,
    name,
    form,
    id,
    clearable,
    clearButtonProps,
    hiddenInputProps,
    hiddenInputValuesDivider,
    mod,
    renderOption,
    onRemove,
    onClear,
    scrollAreaProps,
    acceptValueOnBlur,
    ...others
  } = props;

  const _id = useId(id);
  const parsedData = getParsedComboboxData(data);
  const optionsLockup = getOptionsLockup(parsedData);
  const inputRef = useRef<HTMLInputElement>(null);
  const _ref = useMergedRef(inputRef, ref);

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

  const getStyles = useStyles<TagsInputFactory>({
    name: 'TagsInput',
    classes: {} as any,
    props,
    classNames,
    styles,
    unstyled,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<TagsInputFactory>({
    props,
    styles,
    classNames,
  });

  const handleValueSelect = (val: string) => {
    const isDuplicate = _value.some((tag) => tag.toLowerCase() === val.toLowerCase());

    if (isDuplicate) {
      onDuplicate?.(val);
    }

    if ((!isDuplicate || (isDuplicate && allowDuplicates)) && _value.length < maxTags!) {
      onOptionSubmit?.(val);
      setSearchValue('');
      if (val.length > 0) {
        setValue([..._value, val]);
      }
    }
  };

  const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);

    if (event.isPropagationStopped()) {
      return;
    }

    const inputValue = _searchValue.trim();
    const { length } = inputValue;

    if (splitChars!.includes(event.key) && length > 0) {
      setValue(
        getSplittedTags({
          splitChars,
          allowDuplicates,
          maxTags,
          value: _searchValue,
          currentTags: _value,
        })
      );
      setSearchValue('');
      event.preventDefault();
    }

    if (event.key === 'Enter' && length > 0 && !event.nativeEvent.isComposing) {
      event.preventDefault();

      const hasActiveSelection = !!document.querySelector<HTMLDivElement>(
        `#${combobox.listId} [data-combobox-option][data-combobox-selected]`
      );

      if (hasActiveSelection) {
        return;
      }

      handleValueSelect(inputValue);
    }

    if (
      event.key === 'Backspace' &&
      length === 0 &&
      _value.length > 0 &&
      !event.nativeEvent.isComposing
    ) {
      onRemove?.(_value[_value.length - 1]);
      setValue(_value.slice(0, _value.length - 1));
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    onPaste?.(event);
    event.preventDefault();

    if (event.clipboardData) {
      const pastedText = event.clipboardData.getData('text/plain');
      setValue(
        getSplittedTags({
          splitChars,
          allowDuplicates,
          maxTags,
          value: `${_searchValue}${pastedText}`,
          currentTags: _value,
        })
      );
      setSearchValue('');
    }
  };

  const values = _value.map((item, index) => (
    <Pill
      key={`${item}-${index}`}
      withRemoveButton={!readOnly}
      onRemove={() => {
        const next_value = _value.slice();
        next_value.splice(index, 1);
        setValue(next_value);
        onRemove?.(item);
      }}
      unstyled={unstyled}
      disabled={disabled}
      {...getStyles('pill')}
    >
      {item}
    </Pill>
  ));

  useEffect(() => {
    if (selectFirstOptionOnChange) {
      combobox.selectFirstOption();
    }
  }, [selectFirstOptionOnChange, _value, _searchValue]);

  const clearButton = (
    <Combobox.ClearButton
      {...clearButtonProps}
      onClear={() => {
        setValue([]);
        setSearchValue('');
        inputRef.current?.focus();
        combobox.openDropdown();
        onClear?.();
      }}
    />
  );

  return (
    <>
      <Combobox
        store={combobox}
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        size={size}
        readOnly={readOnly}
        __staticSelector="TagsInput"
        onOptionSubmit={(val) => {
          onOptionSubmit?.(val);
          setSearchValue('');
          _value.length < maxTags! && setValue([..._value, optionsLockup[val].label]);

          combobox.resetSelectedOption();
        }}
        {...comboboxProps}
      >
        <Combobox.DropdownTarget>
          <PillsInput
            {...styleProps}
            __staticSelector="TagsInput"
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            unstyled={unstyled}
            size={size}
            className={className}
            style={style}
            variant={variant}
            disabled={disabled}
            radius={radius}
            rightSection={rightSection}
            __clearSection={clearButton}
            __clearable={clearable && _value.length > 0 && !disabled && !readOnly}
            rightSectionWidth={rightSectionWidth}
            rightSectionPointerEvents={rightSectionPointerEvents}
            rightSectionProps={rightSectionProps}
            leftSection={leftSection}
            leftSectionWidth={leftSectionWidth}
            leftSectionPointerEvents={leftSectionPointerEvents}
            leftSectionProps={leftSectionProps}
            inputContainer={inputContainer}
            inputWrapperOrder={inputWrapperOrder}
            withAsterisk={withAsterisk}
            required={required}
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
            id={_id}
            mod={mod}
          >
            <Pill.Group disabled={disabled} unstyled={unstyled} {...getStyles('pillsList')}>
              {values}
              <Combobox.EventsTarget autoComplete={autoComplete}>
                <PillsInput.Field
                  {...rest}
                  ref={_ref}
                  {...getStyles('inputField')}
                  unstyled={unstyled}
                  onKeyDown={handleInputKeydown}
                  onFocus={(event) => {
                    onFocus?.(event);
                    combobox.openDropdown();
                  }}
                  onBlur={(event) => {
                    onBlur?.(event);
                    acceptValueOnBlur && handleValueSelect(_searchValue);
                    combobox.closeDropdown();
                  }}
                  onPaste={handlePaste}
                  value={_searchValue}
                  onChange={(event) => setSearchValue(event.currentTarget.value)}
                  required={required && _value.length === 0}
                  disabled={disabled}
                  readOnly={readOnly}
                  id={_id}
                />
              </Combobox.EventsTarget>
            </Pill.Group>
          </PillsInput>
        </Combobox.DropdownTarget>

        <OptionsDropdown
          data={filterPickedTags({ data: parsedData, value: _value })}
          hidden={readOnly || disabled}
          filter={filter}
          search={_searchValue}
          limit={limit}
          hiddenWhenEmpty
          withScrollArea={withScrollArea}
          maxDropdownHeight={maxDropdownHeight}
          unstyled={unstyled}
          labelId={label ? `${_id}-label` : undefined}
          aria-label={label ? undefined : others['aria-label']}
          renderOption={renderOption}
          scrollAreaProps={scrollAreaProps}
        />
      </Combobox>
      <Combobox.HiddenInput
        name={name}
        form={form}
        value={_value}
        valuesDivider={hiddenInputValuesDivider}
        disabled={disabled}
        {...hiddenInputProps}
      />
    </>
  );
});

TagsInput.classes = { ...InputBase.classes, ...Combobox.classes };
TagsInput.displayName = '@mantine/core/TagsInput';
