import {
  filterProps,
  getBaseValue,
  getSortedBreakpoints,
  InlineStyles,
  keys,
  MantineBreakpoint,
  useMantineTheme,
} from '../../../core';
import { useGridContext } from '../Grid.context';
import type { ColSpan, GridColProps } from './GridCol';

interface GridColVariablesProps {
  selector: string;
  span: GridColProps['span'] | undefined;
  order?: GridColProps['order'] | undefined;
  offset?: GridColProps['offset'] | undefined;
}

const getColumnFlexBasis = (colSpan: ColSpan | undefined, columns: number) => {
  if (colSpan === 'content') {
    return 'auto';
  }

  if (colSpan === 'auto') {
    return '0rem';
  }

  return colSpan ? `${100 / (columns / colSpan)}%` : undefined;
};

const getColumnMaxWidth = (
  colSpan: ColSpan | undefined,
  columns: number,
  grow: boolean | undefined
) => {
  if (grow || colSpan === 'auto') {
    return '100%';
  }

  if (colSpan === 'content') {
    return 'unset';
  }

  return getColumnFlexBasis(colSpan, columns);
};

const getColumnFlexGrow = (colSpan: ColSpan | undefined, grow: boolean | undefined) => {
  if (!colSpan) {
    return undefined;
  }

  return colSpan === 'auto' || grow ? '1' : 'auto';
};

const getColumnOffset = (offset: number | undefined, columns: number) =>
  offset === 0 ? '0' : offset ? `${100 / (columns / offset)}%` : undefined;

export function GridColVariables({ span, order, offset, selector }: GridColVariablesProps) {
  const theme = useMantineTheme();
  const ctx = useGridContext();

  const baseValue = getBaseValue(span);
  const baseSpan = baseValue === undefined ? 12 : getBaseValue(span);
  const baseColumns = getBaseValue(ctx.columns) ?? 12;

  const baseStyles: Record<string, string | undefined> = filterProps({
    '--col-order': getBaseValue(order)?.toString(),
    '--col-flex-grow': getColumnFlexGrow(baseSpan, ctx.grow),
    '--col-flex-basis': getColumnFlexBasis(baseSpan, baseColumns),
    '--col-width': baseSpan === 'content' ? 'auto' : undefined,
    '--col-max-width': getColumnMaxWidth(baseSpan, baseColumns, ctx.grow),
    '--col-offset': getColumnOffset(getBaseValue(offset), baseColumns),
  });

  const queries = keys(theme.breakpoints).reduce<Record<string, Record<string, any>>>(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }

      if (typeof order === 'object' && order[breakpoint] !== undefined) {
        acc[breakpoint]['--col-order'] = order[breakpoint]?.toString();
      }

      const breakpointColumns =
        typeof ctx.columns === 'object' ? ctx.columns[breakpoint] ?? baseColumns : baseColumns;

      if (typeof span === 'object' && span[breakpoint] !== undefined) {
        acc[breakpoint]['--col-flex-grow'] = getColumnFlexGrow(span[breakpoint], ctx.grow);
        acc[breakpoint]['--col-flex-basis'] = getColumnFlexBasis(
          span[breakpoint],
          breakpointColumns
        );
        acc[breakpoint]['--col-width'] = span[breakpoint] === 'content' ? 'auto' : undefined;
        acc[breakpoint]['--col-max-width'] = getColumnMaxWidth(
          span[breakpoint],
          breakpointColumns,
          ctx.grow
        );
      }

      if (typeof offset === 'object' && offset[breakpoint] !== undefined) {
        acc[breakpoint]['--col-offset'] = getColumnOffset(offset[breakpoint], breakpointColumns);
      }

      return acc;
    },
    {}
  );

  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme).filter(
    (breakpoint) => keys(queries[breakpoint.value]).length > 0
  );

  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value as MantineBreakpoint]})`,
    styles: queries[breakpoint.value],
  }));

  return <InlineStyles styles={baseStyles} media={media} selector={selector} />;
}
