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
import classes from '../DataGrid.module.css';

export type DataGridToolbarStylesNames = 'toolbar';

export interface DataGridToolbarProps
  extends BoxProps, CompoundStylesApiProps<DataGridToolbarFactory>, ElementProps<'div'> {}

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
    <Box {...ctx.getStyles('toolbar', { className, classNames, style, styles })} {...others}>
      {children}
    </Box>
  );
});

DataGridToolbar.classes = classes;
DataGridToolbar.displayName = '@mantine/data-grid/DataGridToolbar';
