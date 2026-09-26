import {
  __CloseButtonProps,
  Box,
  BoxProps,
  CloseButton,
  CompoundStylesApiProps,
  DataAttributes,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '@mantine/core';
import { useDataGridContext } from '../DataGrid.context';
import { clearSelectionAnchor } from '../DataGridBody/row-selection';
import { formatLabel } from '../format-label';
import { getSelectedCount } from '../get-selected-count';
import classes from '../DataGrid.module.css';

export type DataGridSelectionBarStylesNames =
  | 'selectionBar'
  | 'selectionBarCount'
  | 'selectionBarClose';

export interface DataGridSelectionBarProps
  extends BoxProps, CompoundStylesApiProps<DataGridSelectionBarFactory>, ElementProps<'div'> {
  /** Determines whether the close button that clears the selection is rendered, @default true */
  withCloseButton?: boolean;

  /** Props passed down to the `CloseButton` component */
  closeButtonProps?: __CloseButtonProps & ElementProps<'button'> & DataAttributes;

  /** Renders the bar floating above the grid content instead of replacing the toolbar, @default false */
  floating?: boolean;

  /** Bulk action controls rendered after the selected count */
  children?: React.ReactNode;
}

export type DataGridSelectionBarFactory = Factory<{
  props: DataGridSelectionBarProps;
  ref: HTMLDivElement;
  stylesNames: DataGridSelectionBarStylesNames;
  compound: true;
}>;

const defaultProps = {
  withCloseButton: true,
} satisfies Partial<DataGridSelectionBarProps>;

export const DataGridSelectionBar = factory<DataGridSelectionBarFactory>((props) => {
  const {
    className,
    style,
    classNames,
    styles,
    withCloseButton,
    closeButtonProps,
    floating,
    children,
    ...others
  } = useProps('DataGridSelectionBar', defaultProps, props);

  const ctx = useDataGridContext();
  const count = getSelectedCount(ctx.store.rowSelection);

  return (
    <Box
      {...ctx.getStyles('selectionBar', { className, classNames, style, styles })}
      data-floating={floating || undefined}
      {...others}
    >
      <span {...ctx.getStyles('selectionBarCount', { classNames, styles })}>
        {formatLabel(ctx.labels.selectionBarSelected, { count })}
      </span>
      {children}
      {withCloseButton && (
        <CloseButton
          size={ctx.store.controlSize}
          aria-label={ctx.labels.selectionBarClear}
          {...closeButtonProps}
          onClick={(event) => {
            closeButtonProps?.onClick?.(event);
            ctx.table.resetRowSelection(true);
            clearSelectionAnchor(ctx.table.store);
          }}
          {...ctx.getStyles('selectionBarClose', {
            className: closeButtonProps?.className,
            classNames,
            styles,
          })}
        />
      )}
    </Box>
  );
});

DataGridSelectionBar.classes = classes;
DataGridSelectionBar.displayName = '@mantine/data-grid/DataGridSelectionBar';
