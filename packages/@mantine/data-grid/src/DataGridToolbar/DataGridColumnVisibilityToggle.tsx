import {
  Box,
  BoxProps,
  Button,
  Checkbox,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  Menu,
  MenuProps,
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import { getColumnLabel } from '../get-column-label';
import { ColumnsIcon } from '../icons';
import classes from '../DataGrid.module.css';

export type DataGridColumnVisibilityToggleStylesNames = 'columnVisibilityToggle';

export interface DataGridColumnVisibilityToggleProps
  extends
    BoxProps,
    CompoundStylesApiProps<DataGridColumnVisibilityToggleFactory>,
    ElementProps<'div'> {
  /** Props passed down to the `Menu` component */
  menuProps?: Partial<MenuProps>;

  /** Button label, `labels.columnVisibilityLabel` by default */
  children?: React.ReactNode;
}

export type DataGridColumnVisibilityToggleFactory = Factory<{
  props: DataGridColumnVisibilityToggleProps;
  ref: HTMLDivElement;
  stylesNames: DataGridColumnVisibilityToggleStylesNames;
  compound: true;
}>;

export const DataGridColumnVisibilityToggle = factory<DataGridColumnVisibilityToggleFactory>(
  (props) => {
    const { className, style, classNames, styles, menuProps, children, ...others } = useProps(
      'DataGridColumnVisibilityToggle',
      null,
      props
    );

    const ctx = useDataGridContext();
    const allColumns = ctx.table
      .getAllLeafColumns()
      .filter((column) => !column.columnDef.meta?.utility && column.getCanHide());

    return (
      <Box
        {...ctx.getStyles('columnVisibilityToggle', { className, classNames, style, styles })}
        {...others}
      >
        <Menu withinPortal position="bottom-end" {...menuProps}>
          <Menu.Target>
            <Button variant="default" size={ctx.store.controlSize} leftSection={<ColumnsIcon />}>
              {children ?? ctx.labels.columnVisibilityLabel}
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            {allColumns.map((column) => (
              <Menu.Item
                key={column.id}
                closeMenuOnClick={false}
                leftSection={
                  <Checkbox
                    size="xs"
                    checked={column.getIsVisible()}
                    onChange={column.getToggleVisibilityHandler()}
                    aria-label={`Toggle ${column.id} visibility`}
                  />
                }
              >
                {getColumnLabel(column)}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </Box>
    );
  }
);

DataGridColumnVisibilityToggle.classes = classes;
DataGridColumnVisibilityToggle.displayName = '@mantine/data-grid/DataGridColumnVisibilityToggle';
