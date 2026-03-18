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
  /** Data displayed in the dropdown. Values must be unique. */
  data?: ComboboxStringData;

  /** Controlled component value */
  value?: string[];

  /** Uncontrolled component default value */
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

  /** Maximum number of tags @default `Infinity` */
  maxTags?: number;

  /** If set, duplicate tags are allowed @default `false` */
  allowDuplicates?: boolean;

  /** Called when user tries to submit a duplicated tag */
  onDuplicate?: (value: string) => void;

  /** Characters that should trigger tags split, `[',']` by default */
  splitChars?: string[];

  /** If set, the clear button is displayed in the right section when the component has value @default `false` */
  clearable?: boolean;

  /** Props passed down to the clear button */
  clearButtonProps?: InputClearButtonProps;

  /** Props passed down to the hidden input */
  hiddenInputProps?: Omit<React.ComponentPropsWithoutRef<'input'>, 'value'>;

  /** Divider used to separate values in the hidden input `value` attribute @default `','` */
  hiddenInputValuesDivider?: string;

  /** A function to render content of the option, replaces the default content of the option */
  renderOption?: (input: ComboboxLikeRenderOptionInput<ComboboxStringItem>) => React.ReactNode;

  /** Props passed down to the underlying `ScrollArea` component in the dropdown */
  scrollAreaProps?: ScrollAreaProps;

  /** If set, the value typed in by the user but not submitted is accepted when the input is blurred @default `true` */
  acceptValueOnBlur?: boolean;

  /** Custom function to determine if a tag is duplicate. Accepts tag value and array of current values. By default, checks if the tag exists case-insensitively. */
  isDuplicate?: (value: string, currentValues: string[]) => boolean;

  /** If set, the dropdown opens when the input receives focus @default `true` */
  openOnFocus?: boolean;
}

export type TagsInputFactory = Factory<{
  props: TagsInputProps;
  ref: HTMLInputElement;
  stylesNames: TagsInputStylesNames;
}>;

const defaultProps = {
  maxTags: Infinity,
  acceptValueOnBlur: true,
  splitChars: [','],
  hiddenInputValuesDivider: ',',
  openOnFocus: true,
  size: 'sm',
} satisfies Partial<TagsInputProps>;

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
    isDuplicate,
    openOnFocus,
    attributes,
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
    const isDuplicated = isDuplicate
      ? isDuplicate(val, _value)
      : _value.some((tag) => tag.toLowerCase() === val.toLowerCase());

    if (isDuplicated) {
      onDuplicate?.(val);
      if (!allowDuplicates) {
        handleSearchChange('');
        return;
      }
    }

    if (_value.length < maxTags) {
      onOptionSubmit?.(val);
      handleSearchChange('');
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

    if (splitChars.includes(event.key) && length > 0) {
      setValue(
        getSplittedTags({
          splitChars,
          allowDuplicates,
          maxTags,
          value: _searchValue,
          currentTags: _value,
          isDuplicate,
          onDuplicate,
        })
      );
      handleSearchChange('');
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
      !event.nativeEvent.isComposing &&
      !readOnly
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
          isDuplicate,
          onDuplicate,
        })
      );
      handleSearchChange('');
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
      attributes={attributes}
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
        handleSearchChange('');
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
        attributes={attributes}
        onOptionSubmit={(val) => {
          onOptionSubmit?.(val);
          handleSearchChange('');
          _value.length < maxTags && setValue([..._value, optionsLockup[val].label]);

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
            withErrorStyles={withErrorStyles}
            __stylesApiProps={{ ...props, multiline: true }}
            id={_id}
            mod={mod}
            attributes={attributes}
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
                    openOnFocus && combobox.openDropdown();
                  }}
                  onBlur={(event) => {
                    onBlur?.(event);
                    acceptValueOnBlur && handleValueSelect(_searchValue);
                    combobox.closeDropdown();
                  }}
                  onPaste={handlePaste}
                  value={_searchValue}
                  onChange={(event) => handleSearchChange(event.currentTarget.value)}
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
