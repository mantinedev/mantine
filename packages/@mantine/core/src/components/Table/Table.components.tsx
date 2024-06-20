import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  FactoryPayload,
  useProps,
} from '../../core';
import type { TableFactory } from './Table';
import { TableContextValue, useTableContext } from './Table.context';
import classes from './Table.module.css';

export interface TableElementProps<Selector extends string>
  extends BoxProps,
    CompoundStylesApiProps<Omit<TableFactory, 'stylesNames'> & { stylesNames: Selector }> {}

export interface TableThProps extends TableElementProps<'th'>, ElementProps<'th'> {}
export interface TableTdProps extends TableElementProps<'td'>, ElementProps<'td'> {}
export interface TableTrProps extends TableElementProps<'tr'>, ElementProps<'tr'> {}
export interface TableTheadProps extends TableElementProps<'thead'>, ElementProps<'thead'> {}
export interface TableTbodyProps extends TableElementProps<'tbody'>, ElementProps<'tbody'> {}
export interface TableTfootProps extends TableElementProps<'tfoot'>, ElementProps<'tfoot'> {}
export interface TableCaptionProps extends TableElementProps<'caption'>, ElementProps<'caption'> {}

export type TableThFactory = Factory<{
  props: TableThProps;
  ref: HTMLTableCellElement;
  stylesNames: 'th';
  compound: true;
}>;

export type TableTdFactory = Factory<{
  props: TableTdProps;
  ref: HTMLTableCellElement;
  stylesNames: 'td';
  compound: true;
}>;

export type TableTrFactory = Factory<{
  props: TableTrProps;
  ref: HTMLTableRowElement;
  stylesNames: 'tr';
  compound: true;
}>;

export type TableTheadFactory = Factory<{
  props: TableTheadProps;
  ref: HTMLTableSectionElement;
  stylesNames: 'thead';
  compound: true;
}>;

export type TableTbodyFactory = Factory<{
  props: TableTbodyProps;
  ref: HTMLTableSectionElement;
  stylesNames: 'tbody';
  compound: true;
}>;

export type TableTfootFactory = Factory<{
  props: TableTfootProps;
  ref: HTMLTableSectionElement;
  stylesNames: 'tfoot';
  compound: true;
}>;

export type TableCaptionFactory = Factory<{
  props: TableCaptionProps;
  ref: HTMLTableCaptionElement;
  stylesNames: 'caption';
  compound: true;
}>;

interface TableElementOptions {
  columnBorder?: true;
  rowBorder?: true;
  striped?: true;
  highlightOnHover?: true;
  captionSide?: true;
  stickyHeader?: true;
}

function getDataAttributes(ctx: TableContextValue, options?: TableElementOptions) {
  if (!options) {
    return undefined;
  }

  const data: Record<string, boolean | string> = {};

  if (options.columnBorder && ctx.withColumnBorders) {
    data['data-with-column-border'] = true;
  }

  if (options.rowBorder && ctx.withRowBorders) {
    data['data-with-row-border'] = true;
  }

  if (options.striped && ctx.striped) {
    data['data-striped'] = ctx.striped;
  }

  if (options.highlightOnHover && ctx.highlightOnHover) {
    data['data-hover'] = true;
  }

  if (options.captionSide && ctx.captionSide) {
    data['data-side'] = ctx.captionSide;
  }

  if (options.stickyHeader && ctx.stickyHeader) {
    data['data-sticky'] = true;
  }

  return data;
}

export function tableElement<Factory extends FactoryPayload>(
  element: 'th' | 'td' | 'tr' | 'thead' | 'tbody' | 'tfoot' | 'caption',
  options?: TableElementOptions
) {
  const name = `Table${element.charAt(0).toUpperCase()}${element.slice(1)}`;
  const Component = factory<Factory>((_props, ref) => {
    const props = useProps(name, {}, _props);
    const { classNames, className, style, styles, ...others } = props;

    const ctx = useTableContext();

    return (
      <Box
        component={element}
        ref={ref}
        {...getDataAttributes(ctx, options)}
        {...ctx.getStyles(element, { className, classNames, style, styles, props })}
        {...others}
      />
    );
  });

  Component.displayName = `@mantine/core/${name}`;
  Component.classes = classes;
  return Component;
}

export const TableTh = tableElement<TableThFactory>('th', { columnBorder: true });
export const TableTd = tableElement<TableTdFactory>('td', { columnBorder: true });
export const TableTr = tableElement<TableTrFactory>('tr', {
  rowBorder: true,
  striped: true,
  highlightOnHover: true,
});
export const TableThead = tableElement<TableTheadFactory>('thead', { stickyHeader: true });
export const TableTbody = tableElement<TableTbodyFactory>('tbody');
export const TableTfoot = tableElement<TableTfootFactory>('tfoot');
export const TableCaption = tableElement<TableCaptionFactory>('caption', { captionSide: true });
