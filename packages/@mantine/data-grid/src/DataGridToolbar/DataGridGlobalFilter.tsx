import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  TextInput,
  TextInputProps,
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import { SearchIcon } from '../icons';
import classes from '../DataGrid.module.css';

export type DataGridGlobalFilterStylesNames = 'globalFilter';

export interface DataGridGlobalFilterProps
  extends BoxProps, CompoundStylesApiProps<DataGridGlobalFilterFactory>, ElementProps<'div'> {
  /** Placeholder text for the search input, `labels.globalFilterPlaceholder` by default */
  placeholder?: string;

  /** Props passed down to the `TextInput` component, `size` defaults to `store.controlSize` */
  textInputProps?: Partial<TextInputProps>;
}

export type DataGridGlobalFilterFactory = Factory<{
  props: DataGridGlobalFilterProps;
  ref: HTMLDivElement;
  stylesNames: DataGridGlobalFilterStylesNames;
  compound: true;
}>;

export const DataGridGlobalFilter = factory<DataGridGlobalFilterFactory>((props) => {
  const { className, style, classNames, styles, placeholder, textInputProps, ...others } = useProps(
    'DataGridGlobalFilter',
    null,
    props
  );

  const ctx = useDataGridContext();

  return (
    <Box {...ctx.getStyles('globalFilter', { className, classNames, style, styles })} {...others}>
      <TextInput
        size={ctx.store.controlSize}
        leftSection={<SearchIcon />}
        {...textInputProps}
        value={(ctx.table.store.state.globalFilter as string) ?? ''}
        onChange={(event) => ctx.table.setGlobalFilter(event.currentTarget.value)}
        placeholder={placeholder ?? ctx.labels.globalFilterPlaceholder}
        aria-label={
          textInputProps?.['aria-label'] ?? placeholder ?? ctx.labels.globalFilterPlaceholder
        }
      />
    </Box>
  );
});

DataGridGlobalFilter.classes = classes;
DataGridGlobalFilter.displayName = '@mantine/data-grid/DataGridGlobalFilter';
