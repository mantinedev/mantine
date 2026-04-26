import {
  ActionIcon,
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  Menu,
  MenuProps,
  useProps,
} from '@mantine/core';
import { DataGridDensity, useDataGridContext } from '../DataGrid.context';
import { DensityIcon } from '../icons';
import classes from '../DataGrid.module.css';

export type DataGridDensityToggleStylesNames = 'densityToggle';

export interface DataGridDensityToggleProps
  extends BoxProps, CompoundStylesApiProps<DataGridDensityToggleFactory>, ElementProps<'div'> {
  /** Props passed to the internal Menu component */
  menuProps?: Partial<MenuProps>;
}

export type DataGridDensityToggleFactory = Factory<{
  props: DataGridDensityToggleProps;
  ref: HTMLDivElement;
  stylesNames: DataGridDensityToggleStylesNames;
  compound: true;
}>;

const DENSITY_ORDER: DataGridDensity[] = ['compact', 'default', 'comfortable'];

export const DataGridDensityToggle = factory<DataGridDensityToggleFactory>((props) => {
  const { className, style, classNames, styles, menuProps, ...others } = useProps(
    'DataGridDensityToggle',
    null,
    props
  );

  const ctx = useDataGridContext();
  const { labels } = ctx;

  const densityLabels: Record<DataGridDensity, string> = {
    compact: labels.densityCompact,
    default: labels.densityDefault,
    comfortable: labels.densityComfortable,
  };

  return (
    <Box {...ctx.getStyles('densityToggle', { className, classNames, style, styles })} {...others}>
      <Menu withinPortal position="bottom-end" {...menuProps}>
        <Menu.Target>
          <ActionIcon variant="default" aria-label={labels.densityToggleLabel}>
            <DensityIcon />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          {DENSITY_ORDER.map((d) => (
            <Menu.Item
              key={d}
              data-active={ctx.density === d || undefined}
              onClick={() => ctx.onDensityChange(d)}
            >
              {densityLabels[d]}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
});

DataGridDensityToggle.classes = classes;
DataGridDensityToggle.displayName = '@mantine/data-grid/DataGridDensityToggle';
