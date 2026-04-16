import {
  ActionIcon,
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  Menu,
  useProps,
} from '@mantine/core';
import { DataGridDensity, useDataGridContext } from '../DataGrid.context';
import classes from '../DataGrid.module.css';

export type DataGridDensityToggleStylesNames = 'densityToggle';

export interface DataGridDensityToggleProps
  extends BoxProps, CompoundStylesApiProps<DataGridDensityToggleFactory>, ElementProps<'div'> {}

export type DataGridDensityToggleFactory = Factory<{
  props: DataGridDensityToggleProps;
  ref: HTMLDivElement;
  stylesNames: DataGridDensityToggleStylesNames;
  compound: true;
}>;

const DENSITY_ORDER: DataGridDensity[] = ['compact', 'default', 'comfortable'];

function DensityIcon() {
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
      <path d="M3 6h18" />
      <path d="M3 12h18" />
      <path d="M3 18h18" />
    </svg>
  );
}

export const DataGridDensityToggle = factory<DataGridDensityToggleFactory>((props) => {
  const { className, style, classNames, styles, ...others } = useProps(
    'DataGridDensityToggle',
    null,
    props
  );

  const ctx = useDataGridContext();
  const { localization } = ctx;

  const densityLabels: Record<DataGridDensity, string> = {
    compact: localization.densityCompact,
    default: localization.densityDefault,
    comfortable: localization.densityComfortable,
  };

  return (
    <Box {...ctx.getStyles('densityToggle', { className, classNames, style, styles })} {...others}>
      <Menu withinPortal position="bottom-end">
        <Menu.Target>
          <ActionIcon variant="default" aria-label={localization.densityToggleLabel}>
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
