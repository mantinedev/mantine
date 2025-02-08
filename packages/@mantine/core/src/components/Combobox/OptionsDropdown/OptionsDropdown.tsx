import cx from 'clsx';
import { CheckIcon } from '../../Checkbox';
import { ScrollArea, ScrollAreaProps } from '../../ScrollArea/ScrollArea';
import { Combobox } from '../Combobox';
import { ComboboxItem, ComboboxLikeRenderOptionInput, ComboboxParsedItem } from '../Combobox.types';
import { defaultOptionsFilter, FilterOptionsInput } from './default-options-filter';
import { isEmptyComboboxData } from './is-empty-combobox-data';
import { isOptionsGroup } from './is-options-group';
import { validateOptions } from './validate-options';
import classes from '../Combobox.module.css';

export type OptionsFilter = (input: FilterOptionsInput) => ComboboxParsedItem[];

export interface OptionsGroup {
  group: string;
  items: ComboboxItem[];
}

export type OptionsData = (ComboboxItem | OptionsGroup)[];

interface OptionProps {
  data: ComboboxItem | OptionsGroup;
  withCheckIcon?: boolean;
  value?: string | string[] | null;
  checkIconPosition?: 'left' | 'right';
  unstyled: boolean | undefined;
  renderOption?: (input: ComboboxLikeRenderOptionInput<any>) => React.ReactNode;
}

function isValueChecked(value: string | string[] | undefined | null, optionValue: string) {
  return Array.isArray(value) ? value.includes(optionValue) : value === optionValue;
}

function Option({
  data,
  withCheckIcon,
  value,
  checkIconPosition,
  unstyled,
  renderOption,
}: OptionProps) {
  if (!isOptionsGroup(data)) {
    const checked = isValueChecked(value, data.value);
    const check = withCheckIcon && checked && (
      <CheckIcon className={classes.optionsDropdownCheckIcon} />
    );

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
        className={cx({ [classes.optionsDropdownOption]: !unstyled })}
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

  const options = data.items.map((item) => (
    <Option
      data={item}
      value={value}
      key={item.value}
      unstyled={unstyled}
      withCheckIcon={withCheckIcon}
      checkIconPosition={checkIconPosition}
      renderOption={renderOption}
    />
  ));

  return <Combobox.Group label={data.group}>{options}</Combobox.Group>;
}

export interface OptionsDropdownProps {
  data: OptionsData;
  filter: OptionsFilter | undefined;
  search: string | undefined;
  limit: number | undefined;
  withScrollArea: boolean | undefined;
  maxDropdownHeight: number | string | undefined;
  hidden?: boolean;
  hiddenWhenEmpty?: boolean;
  filterOptions?: boolean;
  withCheckIcon?: boolean;
  value?: string | string[] | null;
  checkIconPosition?: 'left' | 'right';
  nothingFoundMessage?: React.ReactNode;
  unstyled: boolean | undefined;
  labelId: string | undefined;
  'aria-label': string | undefined;
  renderOption?: (input: ComboboxLikeRenderOptionInput<any>) => React.ReactNode;
  scrollAreaProps: ScrollAreaProps | undefined;
}

export function OptionsDropdown({
  data,
  hidden,
  hiddenWhenEmpty,
  filter,
  search,
  limit,
  maxDropdownHeight,
  withScrollArea = true,
  filterOptions = true,
  withCheckIcon = false,
  value,
  checkIconPosition,
  nothingFoundMessage,
  unstyled,
  labelId,
  renderOption,
  scrollAreaProps,
  'aria-label': ariaLabel,
}: OptionsDropdownProps) {
  validateOptions(data);

  const shouldFilter = typeof search === 'string';
  const filteredData = shouldFilter
    ? (filter || defaultOptionsFilter)({
        options: data,
        search: filterOptions ? search : '',
        limit: limit ?? Infinity,
      })
    : data;
  const isEmpty = isEmptyComboboxData(filteredData);

  const options = filteredData.map((item) => (
    <Option
      data={item}
      key={isOptionsGroup(item) ? item.group : item.value}
      withCheckIcon={withCheckIcon}
      value={value}
      checkIconPosition={checkIconPosition}
      unstyled={unstyled}
      renderOption={renderOption}
    />
  ));

  return (
    <Combobox.Dropdown hidden={hidden || (hiddenWhenEmpty && isEmpty)} data-composed>
      <Combobox.Options labelledBy={labelId} aria-label={ariaLabel}>
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
