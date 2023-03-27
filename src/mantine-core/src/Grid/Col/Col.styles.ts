import {
  createStyles,
  MantineNumberSize,
  MANTINE_SIZES,
  MantineSize,
  MantineTheme,
  em,
  getSize,
} from '@mantine/styles';

export type ColSpan = number | 'auto' | 'content';

interface ColStyles {
  gutter: MantineNumberSize;
  gutterXs: MantineNumberSize;
  gutterSm: MantineNumberSize;
  gutterMd: MantineNumberSize;
  gutterLg: MantineNumberSize;
  gutterXl: MantineNumberSize;
  columns: number;
  grow: boolean;
  offset: number;
  offsetXs: number;
  offsetSm: number;
  offsetMd: number;
  offsetLg: number;
  offsetXl: number;
  span: ColSpan;
  xs: ColSpan;
  sm: ColSpan;
  md: ColSpan;
  lg: ColSpan;
  xl: ColSpan;
  order: React.CSSProperties['order'];
  orderXs: React.CSSProperties['order'];
  orderSm: React.CSSProperties['order'];
  orderMd: React.CSSProperties['order'];
  orderLg: React.CSSProperties['order'];
  orderXl: React.CSSProperties['order'];
}

const getColumnFlexBasis = (colSpan: ColSpan, columns: number) => {
  if (colSpan === 'content') {
    return 'auto';
  }
  if (colSpan === 'auto') {
    return '0rem';
  }
  return colSpan ? `${100 / (columns / colSpan)}%` : undefined;
};

const getColumnMaxWidth = (colSpan: ColSpan, columns: number, grow: boolean) => {
  if (grow || colSpan === 'auto' || colSpan === 'content') {
    return 'unset';
  }

  return getColumnFlexBasis(colSpan, columns);
};

const getColumnFlexGrow = (colSpan: ColSpan, grow: boolean) => {
  if (!colSpan) {
    return undefined;
  }
  return colSpan === 'auto' || grow ? 1 : 0;
};

const getColumnOffset = (offset: number, columns: number) =>
  offset === 0 ? 0 : offset ? `${100 / (columns / offset)}%` : undefined;

const getGutterSize = (gutter: MantineNumberSize, theme: MantineTheme) =>
  typeof gutter !== 'undefined'
    ? `calc(${getSize({ size: gutter, sizes: theme.spacing })} / 2)`
    : undefined;

function getBreakpointsStyles({
  sizes,
  offsets,
  orders,
  theme,
  columns,
  gutters,
  grow,
}: {
  sizes: Record<MantineSize, ColSpan>;
  offsets: Record<MantineSize, number>;
  orders: Record<MantineSize, React.CSSProperties['order']>;
  gutters: Record<MantineSize, MantineNumberSize>;
  grow: boolean;
  theme: MantineTheme;
  columns: number;
}) {
  return MANTINE_SIZES.reduce((acc, size) => {
    acc[`@media (min-width: ${em(theme.breakpoints[size])})`] = {
      order: orders[size],
      flexBasis: getColumnFlexBasis(sizes[size], columns),
      padding: getGutterSize(gutters[size], theme),
      flexShrink: 0,
      width: sizes[size] === 'content' ? 'auto' : undefined,
      maxWidth: getColumnMaxWidth(sizes[size], columns, grow),
      marginLeft: getColumnOffset(offsets[size], columns),
      flexGrow: getColumnFlexGrow(sizes[size], grow),
    };
    return acc;
  }, {});
}

export default createStyles(
  (
    theme,
    {
      gutter,
      gutterXs,
      gutterSm,
      gutterMd,
      gutterLg,
      gutterXl,
      grow,
      offset,
      offsetXs,
      offsetSm,
      offsetMd,
      offsetLg,
      offsetXl,
      columns,
      span,
      xs,
      sm,
      md,
      lg,
      xl,
      order,
      orderXs,
      orderSm,
      orderMd,
      orderLg,
      orderXl,
    }: ColStyles
  ) => ({
    col: {
      boxSizing: 'border-box',
      flexGrow: getColumnFlexGrow(span, grow),
      order,
      padding: getGutterSize(gutter, theme),
      marginLeft: getColumnOffset(offset, columns),
      flexBasis: getColumnFlexBasis(span, columns),
      flexShrink: 0,
      width: span === 'content' ? 'auto' : undefined,
      maxWidth: getColumnMaxWidth(span, columns, grow),
      ...getBreakpointsStyles({
        sizes: { xs, sm, md, lg, xl },
        offsets: { xs: offsetXs, sm: offsetSm, md: offsetMd, lg: offsetLg, xl: offsetXl },
        orders: { xs: orderXs, sm: orderSm, md: orderMd, lg: orderLg, xl: orderXl },
        gutters: { xs: gutterXs, sm: gutterSm, md: gutterMd, lg: gutterLg, xl: gutterXl },
        theme,
        columns,
        grow,
      }),
    },
  })
);
