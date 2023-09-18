import React from 'react';
import cx from 'clsx';
import { ScrollArea } from '../../ScrollArea/ScrollArea';
import { CheckIcon } from '../../Checkbox';
import { Combobox } from '../Combobox';
import { ComboboxItem, ComboboxParsedItem } from '../Combobox.types';
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
}

function isValueChecked(value: string | string[] | undefined | null, optionValue: string) {
  return Array.isArray(value) ? value.includes(optionValue) : value === optionValue;
}

function Option({ data, withCheckIcon, value, checkIconPosition, unstyled }: OptionProps) {
  if (!isOptionsGroup(data)) {
    const check = withCheckIcon && isValueChecked(value, data.value) && (
      <CheckIcon className={classes.optionsDropdownCheckIcon} />
    );
    return (
      <Combobox.Option
        value={data.value}
        disabled={data.disabled}
        className={cx({ [classes.optionsDropdownOption]: !unstyled })}
        data-reverse={checkIconPosition === 'right' || undefined}
        data-checked={isValueChecked(value, data.value) || undefined}
        aria-selected={isValueChecked(value, data.value)}
      >
        {checkIconPosition === 'left' && check}
        {data.label}
        {checkIconPosition === 'right' && check}
      </Combobox.Option>
    );
  }

  const options = data.items.map((item) => (
    <Option data={item} key={item.value} unstyled={unstyled} />
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
  labelId: string;
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
    />
  ));

  return (
    <Combobox.Dropdown hidden={hidden || (hiddenWhenEmpty && isEmpty)}>
      <Combobox.Options labelledBy={labelId}>
        {withScrollArea ? (
          <ScrollArea.Autosize
            mah={maxDropdownHeight ?? 220}
            type="scroll"
            scrollbarSize="var(--_combobox-padding)"
            offsetScrollbars="y"
            className={classes.optionsDropdownScrollArea}
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
