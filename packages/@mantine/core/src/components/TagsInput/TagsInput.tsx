import { Fragment, useEffect, useRef } from 'react';
import { useId, useMergedRef } from '@mantine/hooks';
import {
  BoxProps,
  ElementProps,
  extractStyleProps,
  factory,
  Factory,
  Primitive,
  StylesApiProps,
  useController,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '../../core';
import {
  Combobox,
  ComboboxGenericData,
  ComboboxGenericItem,
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
import { filterPickedTags } from './filter-picked-tags';
import { TagsInputStore, useTagsInput } from './use-tags-input/use-tags-input';

export type TagsInputStylesNames =
  | __InputStylesNames
  | ComboboxLikeStylesNames
  | 'pill'
  | 'pillsList'
  | 'inputField';

export interface TagsInputProps
  extends
    BoxProps,
    __BaseInputProps,
    Omit<ComboboxLikeProps, 'data'>,
    StylesApiProps<TagsInputFactory>,
    ElementProps<'input', 'size' | 'value' | 'defaultValue' | 'onChange'> {
  /** Data displayed in the dropdown. Values must be unique. @category appearance */
  data?: ComboboxGenericData;

  /** Controlled component value @category state */
  value?: string[];

  /** Uncontrolled component default value @category state */
  defaultValue?: string[];

  /** Called when value changes @category state */
  onChange?: (value: string[]) => void;

  /** Called when tag is removed @category behavior */
  onRemove?: (value: string) => void;

  /** Called when the clear button is clicked @category behavior */
  onClear?: () => void;

  /** Controlled search value @category state */
  searchValue?: string;

  /** Default search value @category state */
  defaultSearchValue?: string;

  /** Called when search changes @category state */
  onSearchChange?: (value: string) => void;

  /** Maximum number of tags @default Infinity @category behavior */
  maxTags?: number;

  /** Called when user tries to add more tags than maxTags @category behavior */
  onMaxTags?: (value: string) => void;

  /** If set, duplicate tags are allowed @default false @category behavior */
  allowDuplicates?: boolean;

  /** Called when user tries to submit a duplicated tag @category behavior */
  onDuplicate?: (value: string) => void;

  /** Characters that should trigger tags split, `[',']` by default @category behavior */
  splitChars?: string[];

  /** If set, the clear button is displayed in the right section when the component has value @default false @category behavior */
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
  renderOption?: (input: ComboboxLikeRenderOptionInput<ComboboxGenericItem>) => React.ReactNode;

  /** Maximum number of pills displayed, the rest of the values are collapsed into a single `+N more` pill @category appearance */
  maxDisplayedValues?: number;

  /** Content of the pill displayed when the number of values exceeds `maxDisplayedValues` @default `+N more` @category appearance */
  maxDisplayedValuesContent?: React.ReactNode | ((overflow: number) => React.ReactNode);

  /** A function to render content of the pill, replaces the default content of the pill @category appearance */
  renderPill?: (props: ComboboxRenderPillInput) => React.ReactNode;

  /** Props passed down to the underlying `ScrollArea` component in the dropdown */
  scrollAreaProps?: ScrollAreaProps;

  /** If set, the value typed in by the user but not submitted is accepted when the input is blurred @default true @category behavior */
  acceptValueOnBlur?: boolean;

  /** Custom function to determine if a tag is duplicate. Accepts tag value and array of current values. By default, checks if the tag exists case-insensitively. @category behavior */
  isDuplicate?: (value: string, currentValues: string[]) => boolean;

  /** If set, the dropdown opens when the input receives focus @default true @category behavior */
  openOnFocus?: boolean;

  /** If set, tags can be reordered by dragging pills. Disabled when `disabled` or `readOnly` is set. @default false @category behavior */
  withPillsReorder?: boolean;

  /** Store returned by the `useTagsInput` hook. When provided, value, search and dropdown state and tag submission rules are owned by the store and `value`, `defaultValue`, `onChange`, `searchValue`, `defaultSearchValue`, `onSearchChange`, `dropdownOpened`, `defaultDropdownOpened`, `onDropdownOpen`, `onDropdownClose`, `scrollBehavior`, `maxTags`, `onMaxTags`, `allowDuplicates`, `isDuplicate`, `onDuplicate` and `splitChars` props are ignored. The store is also passed to the underlying `Combobox`. A `store` passed in `comboboxProps` is always ignored @category state */
  store?: TagsInputStore;
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

export const TagsInput = factory<TagsInputFactory>((_props) => {
  const props = useProps(['Input', 'InputWrapper', 'TagsInput'], defaultProps, _props);
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
    floatingHeight,
    scrollBehavior,
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
    successProps,
    wrapperProps,
    description,
    label,
    error,
    success,
    withErrorStyles,
    withSuccessStyles,
    name,
    form,
    id,
    clearable,
    clearSectionMode,
    clearButtonProps,
    hiddenInputProps,
    hiddenInputValuesDivider,
    mod,
    renderOption,
    renderPill,
    maxDisplayedValues,
    maxDisplayedValuesContent,
    onRemove,
    onClear,
    onMaxTags,
    scrollAreaProps,
    acceptValueOnBlur,
    isDuplicate,
    openOnFocus,
    attributes,
    ref,
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
  const inputRef = useRef<HTMLInputElement>(null);
  const _ref = useMergedRef(inputRef, ref);

  const store = useController(useTagsInput, storeProp, {
    value,
    defaultValue,
    onChange,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose,
    scrollBehavior,
    maxTags,
    onMaxTags,
    allowDuplicates,
    isDuplicate,
    onDuplicate,
    splitChars,
  });

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

  const _value = store.value;
  const _searchValue = store.search;
  const setValue = store.setValue;

  const {
    styleProps,
    rest: { type, autoComplete, ...rest },
  } = extractStyleProps(others);

  const displayedValues = maxDisplayedValues != null ? _value.slice(0, maxDisplayedValues) : _value;
  const overflowCount = _value.length - displayedValues.length;

  const { getPillProps, getListProps, handleInputKeyDown } = usePillsReorder({
    value: displayedValues,
    onChange: (next) => setValue([...next, ..._value.slice(displayedValues.length)]),
    enabled: withPillsReorder && !disabled && !readOnly,
  });

  const handleSearchChange = (value: string) => {
    store.setSearch(value);
    store.resetSelectedOption();
  };

  const getStyles = useStyles<TagsInputFactory>({
    name: 'TagsInput',
    classes: {} as any,
    props: props as any,
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
    const added = store.addTag(val);
    store.resetSelectedOption();

    if (added) {
      onOptionSubmit?.(val);
    }
  };

  const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);

    if (event.defaultPrevented || event.isPropagationStopped()) {
      return;
    }

    const inputValue = _searchValue.trim();
    const { length } = inputValue;

    if (store.isSplitChar(event.key) && length > 0) {
      store.addSplittedTags(_searchValue);
      store.resetSelectedOption();
      event.preventDefault();
    }

    if (event.key === 'Enter' && length > 0 && !event.nativeEvent.isComposing) {
      event.preventDefault();

      const hasActiveSelection = !!document.querySelector<HTMLDivElement>(
        `#${store.getListId()} [data-combobox-option][data-combobox-selected]`
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

    handleInputKeyDown(event);
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    onPaste?.(event);
    event.preventDefault();

    if (event.clipboardData) {
      const pastedText = event.clipboardData.getData('text/plain');
      store.addSplittedTags(`${_searchValue}${pastedText}`);
      store.resetSelectedOption();
    }
  };

  const values = displayedValues.map((item, index) => {
    const onRemoveItem = () => {
      const next_value = _value.slice();
      next_value.splice(index, 1);
      setValue(next_value);
      onRemove?.(item);
    };

    const reorderProps = getPillProps(index);

    if (renderPill) {
      return (
        <Fragment key={`${item}-${index}`}>
          {renderPill({
            option: optionsLockup[item] || { value: item, label: item, disabled: false },
            value: item,
            onRemove: onRemoveItem,
            disabled: disabled || readOnly,
            reorderProps,
          })}
        </Fragment>
      );
    }

    return (
      <Pill
        key={`${item}-${index}`}
        withRemoveButton={!readOnly}
        onRemove={onRemoveItem}
        unstyled={unstyled}
        disabled={disabled}
        attributes={attributes}
        {...getStyles('pill')}
        {...reorderProps}
      >
        {item}
      </Pill>
    );
  });

  if (overflowCount > 0) {
    values.push(
      <Pill
        key="__overflow"
        unstyled={unstyled}
        disabled={disabled}
        attributes={attributes}
        {...getStyles('pill')}
      >
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
  }, [selectFirstOptionOnChange, _value, _searchValue]);

  const clearButton = (
    <Combobox.ClearButton
      {...clearButtonProps}
      onClear={() => {
        setValue([]);
        handleSearchChange('');
        inputRef.current?.focus();
        store.openDropdown();
        onClear?.();
      }}
    />
  );

  return (
    <>
      <Combobox
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        size={size}
        readOnly={readOnly}
        __staticSelector="TagsInput"
        attributes={attributes}
        floatingHeight={floatingHeight}
        onOptionSubmit={(val) => {
          onOptionSubmit?.(val);
          handleSearchChange('');
          store.addTag(optionsLockup[val].value);
          store.resetSelectedOption();
        }}
        {...comboboxProps}
        store={store}
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
            __clearSectionMode={clearSectionMode}
            rightSectionWidth={rightSectionWidth}
            rightSectionPointerEvents={rightSectionPointerEvents}
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
            required={required}
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
            __stylesApiProps={{ ...props, multiline: true }}
            id={_id}
            mod={mod}
            attributes={attributes}
          >
            <Pill.Group
              disabled={disabled}
              unstyled={unstyled}
              {...getStyles('pillsList')}
              {...getListProps()}
            >
              {values}
              <Combobox.EventsTarget autoComplete={autoComplete} withExpandedAttribute>
                <PillsInput.Field
                  {...rest}
                  ref={_ref}
                  {...getStyles('inputField')}
                  unstyled={unstyled}
                  onKeyDown={handleInputKeydown}
                  onFocus={(event) => {
                    onFocus?.(event);
                    openOnFocus && store.openDropdown();
                  }}
                  onBlur={(event) => {
                    onBlur?.(event);
                    acceptValueOnBlur && handleValueSelect(_searchValue);
                    store.closeDropdown();
                  }}
                  onPaste={handlePaste}
                  value={_searchValue}
                  onChange={(event) => {
                    if (isExternalInputChange(event)) {
                      return;
                    }

                    handleSearchChange(event.currentTarget.value);
                  }}
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
          filter={filter as OptionsFilter<Primitive> | undefined}
          search={_searchValue}
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

export namespace TagsInput {
  export type Props = TagsInputProps;
  export type StylesNames = TagsInputStylesNames;
  export type Factory = TagsInputFactory;
}
