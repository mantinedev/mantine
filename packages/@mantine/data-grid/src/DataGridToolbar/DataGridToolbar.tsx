import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import { DataGridColumnVisibilityToggle } from './DataGridColumnVisibilityToggle';
import { DataGridExportButton } from './DataGridExportButton';
import { DataGridGlobalFilter } from './DataGridGlobalFilter';
import classes from '../DataGrid.module.css';

export type DataGridToolbarStylesNames = 'toolbar';

export interface DataGridToolbarProps
  extends BoxProps, CompoundStylesApiProps<DataGridToolbarFactory>, ElementProps<'div'> {
  /** Toolbar content, replaces the default global filter, column visibility toggle and export button */
  children?: React.ReactNode;
}

export type DataGridToolbarFactory = Factory<{
  props: DataGridToolbarProps;
  ref: HTMLDivElement;
  stylesNames: DataGridToolbarStylesNames;
  compound: true;
}>;

export const DataGridToolbar = factory<DataGridToolbarFactory>((props) => {
  const { className, style, classNames, styles, children, ...others } = useProps(
    'DataGridToolbar',
    null,
    props
  );

  const ctx = useDataGridContext();

  return (
    <Box
      {...ctx.getStyles('toolbar', { className, classNames, style, styles })}
      data-hidden={ctx.toolbarHidden || undefined}
      {...others}
    >
      {children ?? (
        <>
          {ctx.withGlobalFilter && <DataGridGlobalFilter />}
          <div data-toolbar-spacer />
          {ctx.withColumnVisibility && <DataGridColumnVisibilityToggle />}
          <DataGridExportButton />
        </>
      )}
    </Box>
  );
});

DataGridToolbar.classes = classes;
DataGridToolbar.displayName = '@mantine/data-grid/DataGridToolbar';
