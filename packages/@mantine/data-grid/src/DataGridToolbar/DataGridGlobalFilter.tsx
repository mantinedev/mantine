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
import classes from '../DataGrid.module.css';

export type DataGridGlobalFilterStylesNames = 'globalFilter';

export interface DataGridGlobalFilterProps
  extends BoxProps, CompoundStylesApiProps<DataGridGlobalFilterFactory>, ElementProps<'div'> {
  /** Placeholder text for the search input */
  placeholder?: string;

  /** Props passed to the internal TextInput component */
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
        size="sm"
        {...textInputProps}
        value={(ctx.table.store.state.globalFilter as string) ?? ''}
        onChange={(event) => ctx.table.setGlobalFilter(event.currentTarget.value)}
        placeholder={placeholder ?? ctx.labels.globalFilterPlaceholder}
        aria-label={ctx.labels.globalFilterPlaceholder}
      />
    </Box>
  );
});

DataGridGlobalFilter.classes = classes;
DataGridGlobalFilter.displayName = '@mantine/data-grid/DataGridGlobalFilter';
