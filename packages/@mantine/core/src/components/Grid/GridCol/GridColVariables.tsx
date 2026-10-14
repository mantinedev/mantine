import { filterProps, getBaseValue, InlineStyles, useMantineTheme } from '../../../core';
import { getGridQueries } from '../get-grid-queries';
import { useGridContext } from '../Grid.context';
import type { ColSpan, GridColProps } from './GridCol';

interface GridColVariablesProps extends Pick<GridColProps, 'span' | 'order' | 'offset' | 'align'> {
  selector: string;
}

const getColumnFlexBasis = (colSpan: ColSpan | undefined, columns: number) => {
  if (colSpan === 'content') {
    return 'auto';
  }

  if (colSpan === 'auto') {
    return '0rem';
  }

  if (!colSpan) {
    return undefined;
  }

  if (colSpan === columns) {
    return '100%';
  }

  const percentage = (100 * colSpan) / columns;
  const gapFactor = (columns - colSpan) / columns;
  return `calc(${percentage}% - ${gapFactor} * var(--grid-column-gap))`;
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

  return colSpan === 'auto' || grow ? '1' : '0';
};

const getColumnOffset = (offset: number | undefined, columns: number) => {
  if (offset === 0) {
    return '0';
  }

  if (!offset) {
    return undefined;
  }

  const percentage = (100 * offset) / columns;
  const gapFactor = offset / columns;
  return `calc(${percentage}% + ${gapFactor} * var(--grid-column-gap))`;
};

export function GridColVariables({ span, order, offset, align, selector }: GridColVariablesProps) {
  const theme = useMantineTheme();
  const ctx = useGridContext();

  const baseValue = getBaseValue(span);
  const baseSpan = baseValue === undefined ? ctx.columns : baseValue;

  const baseStyles: Record<string, string | undefined> = filterProps({
    '--col-order': getBaseValue(order)?.toString(),
    '--col-flex-grow': getColumnFlexGrow(baseSpan, ctx.grow),
    '--col-flex-basis': getColumnFlexBasis(baseSpan, ctx.columns),
    '--col-width': baseSpan === 'content' ? 'auto' : undefined,
    '--col-max-width': getColumnMaxWidth(baseSpan, ctx.columns, ctx.grow),
    '--col-offset': getColumnOffset(getBaseValue(offset), ctx.columns),
    '--col-align-self': getBaseValue(align),
  });

  const queries = getGridQueries({
    breakpoints: ctx.breakpoints || theme.breakpoints,
    type: ctx.type,
    getBreakpointStyles: (breakpoint) => {
      const styles: Record<string, string | undefined> = {};

      if (typeof order === 'object' && order[breakpoint] !== undefined) {
        styles['--col-order'] = order[breakpoint]?.toString();
      }

      if (typeof span === 'object' && span[breakpoint] !== undefined) {
        styles['--col-flex-grow'] = getColumnFlexGrow(span[breakpoint], ctx.grow);
        styles['--col-flex-basis'] = getColumnFlexBasis(span[breakpoint], ctx.columns);
        styles['--col-width'] = span[breakpoint] === 'content' ? 'auto' : undefined;
        styles['--col-max-width'] = getColumnMaxWidth(span[breakpoint], ctx.columns, ctx.grow);
      }

      if (typeof offset === 'object' && offset[breakpoint] !== undefined) {
        styles['--col-offset'] = getColumnOffset(offset[breakpoint], ctx.columns);
      }

      if (typeof align === 'object' && align[breakpoint] !== undefined) {
        styles['--col-align-self'] = align[breakpoint];
      }

      return styles;
    },
  });

  return <InlineStyles styles={baseStyles} selector={selector} {...queries} />;
}
