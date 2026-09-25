import {
  Box,
  BoxProps,
  Button,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  Menu,
  MenuProps,
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import { copyToClipboard, exportToCsv, exportToExcel, exportToPrint } from '../export';
import type { ClipboardCopyOptions } from '../export/clipboard-copy';
import type { ExportCsvOptions } from '../export/export-csv';
import type { ExportExcelOptions } from '../export/export-excel';
import type { ExportPrintOptions } from '../export/export-print';
import type { ExportColumnScope, ExportRowScope } from '../export/export-utils';
import { getSelectedCount } from '../get-selected-count';
import { DownloadIcon } from '../icons';
import classes from '../DataGrid.module.css';

export type DataGridExportButtonStylesNames = 'exportButton';

export type DataGridExportFormat = 'csv' | 'excel' | 'print' | 'copy';

export interface DataGridExportButtonProps
  extends BoxProps, CompoundStylesApiProps<DataGridExportButtonFactory>, ElementProps<'div'> {
  /** Export formats rendered as menu items in the given order, a single format renders a plain button, @default ['csv', 'excel', 'print', 'copy'] @category appearance */
  formats?: DataGridExportFormat[];

  /** File name without extension used by the csv and excel exports, @default 'data' @category behavior */
  fileName?: string;

  /** Rows included in every export, @default 'all' @category behavior */
  rows?: ExportRowScope;

  /** Columns included in every export, @default 'visible' @category behavior */
  columns?: ExportColumnScope;

  /** Options passed to `exportToCsv` */
  csvOptions?: ExportCsvOptions;

  /** Options passed to `exportToExcel` */
  excelOptions?: ExportExcelOptions;

  /** Options passed to `exportToPrint` */
  printOptions?: ExportPrintOptions;

  /** Options passed to `copyToClipboard` */
  copyOptions?: ClipboardCopyOptions;

  /** Props passed down to the `Menu` component */
  menuProps?: Partial<MenuProps>;

  /** Button label, `labels.exportLabel` by default @category appearance */
  children?: React.ReactNode;

  /** Called after an export has been triggered @category behavior */
  onExport?: (format: DataGridExportFormat) => void;
}

export type DataGridExportButtonFactory = Factory<{
  props: DataGridExportButtonProps;
  ref: HTMLDivElement;
  stylesNames: DataGridExportButtonStylesNames;
  compound: true;
}>;

const defaultProps = {
  formats: ['csv', 'excel', 'print', 'copy'],
  fileName: 'data',
  rows: 'all',
  columns: 'visible',
} satisfies Partial<DataGridExportButtonProps>;

export const DataGridExportButton = factory<DataGridExportButtonFactory>((props) => {
  const {
    className,
    style,
    classNames,
    styles,
    formats,
    fileName,
    rows,
    columns,
    csvOptions,
    excelOptions,
    printOptions,
    copyOptions,
    menuProps,
    children,
    onExport,
    ...others
  } = useProps('DataGridExportButton', defaultProps, props);

  const ctx = useDataGridContext();
  const { table, labels, store } = ctx;

  const formatLabels: Record<DataGridExportFormat, string> = {
    csv: labels.exportCsv,
    excel: labels.exportExcel,
    print: labels.exportPrint,
    copy: labels.exportCopy,
  };

  const handleExport = (format: DataGridExportFormat) => {
    switch (format) {
      case 'csv':
        exportToCsv(table, { fileName, rows, columns, ...csvOptions });
        break;
      case 'excel':
        exportToExcel(table, { fileName, rows, columns, ...excelOptions });
        break;
      case 'print':
        exportToPrint(table, { rows, columns, ...printOptions });
        break;
      case 'copy':
        void copyToClipboard(table, { rows, columns, ...copyOptions });
        break;
    }
    onExport?.(format);
  };

  const label = children ?? labels.exportLabel;
  const disabled = rows === 'selected' && getSelectedCount(store.rowSelection) === 0;

  return (
    <Box {...ctx.getStyles('exportButton', { className, classNames, style, styles })} {...others}>
      {formats.length === 1 ? (
        <Button
          variant="default"
          size={store.controlSize}
          leftSection={<DownloadIcon />}
          disabled={disabled}
          onClick={() => handleExport(formats[0])}
        >
          {label}
        </Button>
      ) : (
        <Menu withinPortal position="bottom-end" {...menuProps}>
          <Menu.Target>
            <Button
              variant="default"
              size={store.controlSize}
              leftSection={<DownloadIcon />}
              disabled={disabled}
            >
              {label}
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            {formats.map((format) => (
              <Menu.Item key={format} onClick={() => handleExport(format)}>
                {formatLabels[format]}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      )}
    </Box>
  );
});

DataGridExportButton.classes = classes;
DataGridExportButton.displayName = '@mantine/data-grid/DataGridExportButton';
