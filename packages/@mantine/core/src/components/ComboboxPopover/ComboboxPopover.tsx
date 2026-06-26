import { useMemo } from 'react';
import cx from 'clsx';
import { useUncontrolled } from '@mantine/hooks';
import {
  Factory,
  genericFactory,
  Primitive,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
} from '../../core';
import { CheckIcon } from '../Checkbox';
import {
  Combobox,
  ComboboxData,
  ComboboxItem,
  ComboboxLikeRenderOptionInput,
  ComboboxLikeStylesNames,
  ComboboxProps,
  defaultOptionsFilter,
  getOptionsLockup,
  getParsedComboboxData,
  isOptionsGroup,
  OptionsDropdown,
  OptionsFilter,
  useCombobox,
} from '../Combobox';
import { ComboboxParsedItem } from '../Combobox/Combobox.types';
import { isEmptyComboboxData } from '../Combobox/OptionsDropdown/is-empty-combobox-data';
import { ScrollArea, ScrollAreaProps } from '../ScrollArea';
import { ComboboxPopoverValue } from './ComboboxPopover.types';
import { ComboboxPopoverTarget } from './ComboboxPopoverTarget';
import comboboxClasses from '../Combobox/Combobox.module.css';

function isValueChecked(value: Primitive | Primitive[] | undefined | null, optionValue: Primitive) {
  return Array.isArray(value) ? value.includes(optionValue) : value === optionValue;
}

interface OptionProps {
  data: ComboboxParsedItem<Primitive>;
  withCheckIcon?: boolean;
  withAlignedLabels?: boolean;
  value?: Primitive | Primitive[] | null;
  checkIconPosition?: 'left' | 'right';
  unstyled: boolean | undefined;
  renderOption?: (input: ComboboxLikeRenderOptionInput<any>) => React.ReactNode;
}

function Option({
  data,
  withCheckIcon,
  withAlignedLabels,
  value,
  checkIconPosition,
  unstyled,
  renderOption,
}: OptionProps) {
  if (isOptionsGroup(data)) {
    const options = data.items.map((item) => (
      <Option
        data={item}
        value={value}
        key={`${item.value}`}
        unstyled={unstyled}
        withCheckIcon={withCheckIcon}
        withAlignedLabels={withAlignedLabels}
        checkIconPosition={checkIconPosition}
        renderOption={renderOption}
      />
    ));
    return <Combobox.Group label={data.group}>{options}</Combobox.Group>;
  }

  const checked = isValueChecked(value, data.value);
  const check =
    withCheckIcon &&
    (checked ? (
      <CheckIcon className={comboboxClasses.optionsDropdownCheckIcon} />
    ) : withAlignedLabels ? (
      <div className={comboboxClasses.optionsDropdownCheckPlaceholder} />
    ) : null);

  const defaultContent = (
    <>
      {checkIconPosition === 'left' && check}
      <span>{data.label}</span>
      {checkIconPosition === 'right' && check}
    </>
  );

  return (
    <Combobox.Option
      value={data.value}
      disabled={data.disabled}
      className={cx({ [comboboxClasses.optionsDropdownOption]: !unstyled })}
      data-reverse={checkIconPosition === 'right' || undefined}
      data-checked={checked || undefined}
      aria-selected={checked}
      active={checked}
    >
      {typeof renderOption === 'function'
        ? renderOption({ option: data, checked })
        : defaultContent}
    </Combobox.Option>
  );
}

interface SearchableDropdownProps {
  data: ComboboxParsedItem<Primitive>[];
  filter: OptionsFilter<Primitive> | undefined;
  search: string;
  limit: number | undefined;
  nothingFoundMessage: React.ReactNode | undefined;
  withScrollArea: boolean | undefined;
  maxDropdownHeight: number | string | undefined;
  value: Primitive | Primitive[] | null;
  checkIconPosition: 'left' | 'right' | undefined;
  withCheckIcon: boolean | undefined;
  withAlignedLabels: boolean | undefined;
  unstyled: boolean | undefined;
  renderOption?: (input: ComboboxLikeRenderOptionInput<any>) => React.ReactNode;
  scrollAreaProps: ScrollAreaProps | undefined;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchableDropdown({
  data,
  filter,
  search,
  limit,
  nothingFoundMessage,
  withScrollArea = true,
  maxDropdownHeight,
  value,
  checkIconPosition,
  withCheckIcon = false,
  withAlignedLabels = false,
  unstyled,
  renderOption,
  scrollAreaProps,
  onSearchChange,
}: SearchableDropdownProps) {
  const filteredData = (filter || defaultOptionsFilter)({
    options: data,
    search,
    limit: limit ?? Infinity,
  });
  const isEmpty = isEmptyComboboxData(filteredData);

  const options = filteredData.map((item, index) => (
    <Option
      data={item}
      key={
        isOptionsGroup(item)
          ? `group-${typeof item.group === 'string' ? item.group : index}`
          : `${item.value}`
      }
      withCheckIcon={withCheckIcon}
      withAlignedLabels={withAlignedLabels}
      value={value}
      checkIconPosition={checkIconPosition}
      unstyled={unstyled}
      renderOption={renderOption}
    />
  ));

  return (
    <Combobox.Dropdown data-composed>
      <Combobox.Search value={search} onChange={onSearchChange} placeholder="Search..." />
      <Combobox.Options>
        {withScrollArea ? (
          <ScrollArea.Autosize
            mah={maxDropdownHeight ?? 220}
            type="scroll"
            scrollbarSize="var(--combobox-padding)"
            offsetScrollbars="y"
            {...scrollAreaProps}
          >
            {options}
          </ScrollArea.Autosize>
        ) : (
          options
        )}
        {isEmpty && nothingFoundMessage && <Combobox.Empty>{nothingFoundMessage}</Combobox.Empty>}
      </Combobox.Options>
    </Combobox.Dropdown>
  );
}

export type ComboboxPopoverStylesNames = ComboboxLikeStylesNames;

export interface ComboboxPopoverProps<
  Multiple extends boolean = false,
  Value extends Primitive = string,
> extends StylesApiProps<ComboboxPopoverFactory> {
  /** If set, multiple items can be selected at the same time */
  multiple?: Multiple;

  /** Controlled component value */
  value?: ComboboxPopoverValue<Multiple, Value>;

  /** Uncontrolled component default value */
  defaultValue?: ComboboxPopoverValue<Multiple, Value>;

  /** Called when value changes */
  onChange?: (value: ComboboxPopoverValue<Multiple, Value>) => void;

  /** Data used to generate options */
  data?: ComboboxData<Value>;

  /** Controlled dropdown opened state */
  dropdownOpened?: boolean;

  /** Uncontrolled dropdown initial opened state */
  defaultDropdownOpened?: boolean;

  /** Called when dropdown opens */
  onDropdownOpen?: () => void;

  /** Called when dropdown closes */
  onDropdownClose?: () => void;

  /** Called when option is submitted from dropdown with mouse click or Enter key */
  onOptionSubmit?: (value: Value) => void;

  /** Props passed down to Combobox component */
  comboboxProps?: ComboboxProps;

  /** Function based on which items are filtered and sorted */
  filter?: OptionsFilter<Value>;

  /** Maximum number of options displayed at a time @default Infinity */
  limit?: number;

  /** Determines whether the options should be wrapped with ScrollArea.AutoSize @default true */
  withScrollArea?: boolean;

  /** max-height of the dropdown @default 250 */
  maxDropdownHeight?: number | string;

  /** If set, the first option is selected when dropdown opens @default false */
  selectFirstOptionOnDropdownOpen?: boolean;

  /** Displays check icon near the selected option label @default true */
  withCheckIcon?: boolean;

  /** Aligns unchecked labels with the checked one @default false */
  withAlignedLabels?: boolean;

  /** Position of the check icon relative to the option label @default 'left' */
  checkIconPosition?: 'left' | 'right';

  /** Message displayed when no options match the search query or when there is no data */
  nothingFoundMessage?: React.ReactNode;

  /** Allows searching through options @default false */
  searchable?: boolean;

  /** Controlled search value */
  searchValue?: string;

  /** Default search value */
  defaultSearchValue?: string;

  /** Called when search changes */
  onSearchChange?: (value: string) => void;

  /** Allows deselecting the selected option by clicking it (only for single mode) @default true */
  allowDeselect?: boolean;

  /** A function to render content of the option, replaces the default content of the option */
  renderOption?: (item: ComboboxLikeRenderOptionInput<ComboboxItem>) => React.ReactNode;

  /** Props passed down to the underlying ScrollArea component in the dropdown */
  scrollAreaProps?: ScrollAreaProps;

  /** Props passed down to the hidden input */
  hiddenInputProps?: Omit<React.ComponentProps<'input'>, 'value'>;

  /** Hidden input name for form submission */
  name?: string;

  /** Hidden input form for form submission */
  form?: string;

  /** Content of the component */
  children?: React.ReactNode;

  /** Divider used to separate values in the hidden input value attribute @default ',' */
  hiddenInputValuesDivider?: string;
}

export type ComboboxPopoverFactory = Factory<{
  props: ComboboxPopoverProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxPopoverStylesNames;
  signature: <Multiple extends boolean = false, Value extends Primitive = string>(
    props: ComboboxPopoverProps<Multiple, Value>
  ) => React.JSX.Element;
  staticComponents: {
    Target: typeof ComboboxPopoverTarget;
  };
}>;

const defaultProps = {
  withCheckIcon: true,
  allowDeselect: true,
  checkIconPosition: 'left',
  hiddenInputValuesDivider: ',',
} satisfies Partial<ComboboxPopoverProps>;

export const ComboboxPopover = genericFactory<ComboboxPopoverFactory>((_props) => {
  const props = useProps('ComboboxPopover', defaultProps as any, _props);
  const {
    classNames,
    styles,
    unstyled,
    vars,
    children,
    multiple,
    value,
    defaultValue,
    onChange,
    data,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose,
    onOptionSubmit,
    comboboxProps,
    filter,
    limit,
    withScrollArea,
    maxDropdownHeight,
    selectFirstOptionOnDropdownOpen,
    withCheckIcon,
    withAlignedLabels,
    checkIconPosition,
    nothingFoundMessage,
    searchable,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    allowDeselect,
    renderOption,
    scrollAreaProps,
    hiddenInputProps,
    name,
    form,
    hiddenInputValuesDivider,
    attributes,
    ...others
  } = props;

  const parsedData = useMemo(() => getParsedComboboxData(data), [data]);
  const optionsLockup = useMemo(() => getOptionsLockup(parsedData), [parsedData]);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: multiple ? ([] as any) : null,
    onChange,
  });

  const [_searchValue, setSearchValue] = useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: '',
    onChange: onSearchChange,
  });

  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen: () => {
      onDropdownOpen?.();
      if (searchable) {
        combobox.focusSearchInput();
      }
      if (selectFirstOptionOnDropdownOpen) {
        combobox.selectFirstOption();
      }
    },
    onDropdownClose: () => {
      onDropdownClose?.();
      combobox.resetSelectedOption();
      if (searchable) {
        combobox.focusTarget();
      }
    },
  });

  const handleSearchChange = (val: string) => {
    setSearchValue(val);
    combobox.resetSelectedOption();
  };

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<ComboboxPopoverFactory>({
    props,
    styles,
    classNames,
  });

  const handleOptionSubmit = (val: string) => {
    onOptionSubmit?.(val as any);
    const option = optionsLockup[val];

    if (multiple) {
      const currentValue = Array.isArray(_value) ? _value : [];
      if (currentValue.includes(option.value)) {
        setValue(currentValue.filter((v: any) => v !== option.value) as any);
      } else {
        setValue([...currentValue, option.value] as any);
      }
      combobox.updateSelectedOptionIndex('selected');
    } else {
      const nextValue = allowDeselect && `${option.value}` === `${_value}` ? null : option.value;
      setValue(nextValue as any);
      combobox.closeDropdown();
    }

    if (searchable) {
      handleSearchChange('');
    }
  };

  return (
    <>
      <Combobox
        store={combobox}
        __staticSelector="ComboboxPopover"
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        attributes={attributes}
        onOptionSubmit={handleOptionSubmit}
        {...comboboxProps}
        {...others}
      >
        {children}
        {searchable ? (
          <SearchableDropdown
            data={parsedData as any}
            filter={filter as OptionsFilter<Primitive> | undefined}
            search={_searchValue}
            limit={limit}
            nothingFoundMessage={nothingFoundMessage}
            withScrollArea={withScrollArea}
            maxDropdownHeight={maxDropdownHeight}
            value={_value}
            checkIconPosition={checkIconPosition}
            withCheckIcon={withCheckIcon}
            withAlignedLabels={withAlignedLabels}
            unstyled={unstyled}
            renderOption={renderOption}
            scrollAreaProps={scrollAreaProps}
            onSearchChange={(event) => {
              handleSearchChange(event.currentTarget.value);
            }}
          />
        ) : (
          <OptionsDropdown
            data={parsedData as any}
            filter={filter as OptionsFilter<Primitive> | undefined}
            search={undefined}
            limit={limit}
            hiddenWhenEmpty={!nothingFoundMessage}
            withScrollArea={withScrollArea}
            maxDropdownHeight={maxDropdownHeight}
            filterOptions={false}
            value={_value}
            checkIconPosition={checkIconPosition}
            withCheckIcon={withCheckIcon}
            withAlignedLabels={withAlignedLabels}
            nothingFoundMessage={nothingFoundMessage}
            unstyled={unstyled}
            renderOption={renderOption}
            scrollAreaProps={scrollAreaProps}
            labelId={undefined}
            aria-label={undefined}
          />
        )}
      </Combobox>
      <Combobox.HiddenInput
        name={name}
        value={_value}
        form={form}
        valuesDivider={hiddenInputValuesDivider}
        {...hiddenInputProps}
      />
    </>
  );
});

ComboboxPopover.classes = Combobox.classes;
ComboboxPopover.displayName = '@mantine/core/ComboboxPopover';
ComboboxPopover.Target = ComboboxPopoverTarget;
