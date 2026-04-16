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
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import classes from '../DataGrid.module.css';

export type DataGridColumnVisibilityToggleStylesNames = 'columnVisibilityToggle';

export interface DataGridColumnVisibilityToggleProps
  extends
    BoxProps,
    CompoundStylesApiProps<DataGridColumnVisibilityToggleFactory>,
    ElementProps<'div'> {}

export type DataGridColumnVisibilityToggleFactory = Factory<{
  props: DataGridColumnVisibilityToggleProps;
  ref: HTMLDivElement;
  stylesNames: DataGridColumnVisibilityToggleStylesNames;
  compound: true;
}>;

function ColumnsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </svg>
  );
}

export const DataGridColumnVisibilityToggle = factory<DataGridColumnVisibilityToggleFactory>(
  (props) => {
    const { className, style, classNames, styles, ...others } = useProps(
      'DataGridColumnVisibilityToggle',
      null,
      props
    );

    const ctx = useDataGridContext();
    const allColumns = ctx.table.getAllLeafColumns();

    return (
      <Box
        {...ctx.getStyles('columnVisibilityToggle', { className, classNames, style, styles })}
        {...others}
      >
        <Menu withinPortal position="bottom-end">
          <Menu.Target>
            <ActionIcon variant="default" aria-label={ctx.localization.columnVisibilityLabel}>
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
                {typeof column.columnDef.header === 'string' ? column.columnDef.header : column.id}
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
