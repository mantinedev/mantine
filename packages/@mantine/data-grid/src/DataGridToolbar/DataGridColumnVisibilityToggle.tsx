import {
  ActionIcon,
  Box,
  BoxProps,
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
  /** Props passed to the internal Menu component */
  menuProps?: Partial<MenuProps>;
}

export type DataGridColumnVisibilityToggleFactory = Factory<{
  props: DataGridColumnVisibilityToggleProps;
  ref: HTMLDivElement;
  stylesNames: DataGridColumnVisibilityToggleStylesNames;
  compound: true;
}>;

export const DataGridColumnVisibilityToggle = factory<DataGridColumnVisibilityToggleFactory>(
  (props) => {
    const { className, style, classNames, styles, menuProps, ...others } = useProps(
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
            <ActionIcon variant="default" aria-label={ctx.labels.columnVisibilityLabel}>
              <ColumnsIcon />
            </ActionIcon>
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
