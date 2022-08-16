import {
  createStyles,
  MantineNumberSize,
  MANTINE_SIZES,
  MantineSize,
  MantineTheme,
} from '@mantine/styles';

interface ColStyles {
  gutter: MantineNumberSize;
  columns: number;
  grow: boolean;
  offset: number;
  offsetXs: number;
  offsetSm: number;
  offsetMd: number;
  offsetLg: number;
  offsetXl: number;
  span: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  order: React.CSSProperties['order'];
  orderXs: React.CSSProperties['order'];
  orderSm: React.CSSProperties['order'];
  orderMd: React.CSSProperties['order'];
  orderLg: React.CSSProperties['order'];
  orderXl: React.CSSProperties['order'];
}

const getColumnWidth = (colSpan: number, columns: number) => `${100 / (columns / colSpan)}%`;
const getColumnOffset = (offset: number, columns: number) =>
  offset ? `${100 / (columns / offset)}%` : undefined;

function getBreakpointsStyles({
  sizes,
  offsets,
  orders,
  theme,
  columns,
  grow,
}: {
  sizes: Record<MantineSize, number>;
  offsets: Record<MantineSize, number>;
  orders: Record<MantineSize, React.CSSProperties['order']>;
  grow: boolean;
  theme: MantineTheme;
  columns: number;
}) {
  return MANTINE_SIZES.reduce((acc, size) => {
    if (typeof sizes[size] === 'number') {
      acc[`@media (min-width: ${theme.breakpoints[size] + 1}px)`] = {
        order: orders[size],
        flexBasis: getColumnWidth(sizes[size], columns),
        flexShrink: 0,
        maxWidth: grow ? 'unset' : getColumnWidth(sizes[size], columns),
        marginLeft: getColumnOffset(offsets[size], columns),
      };
    }
    return acc;
  }, {});
}

export default createStyles(
  (
    theme,
    {
      gutter,
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
    root: {
      boxSizing: 'border-box',
      flexGrow: grow ? 1 : 0,
      order,
      padding: theme.fn.size({ size: gutter, sizes: theme.spacing }) / 2,
      marginLeft: getColumnOffset(offset, columns),
      flexBasis: getColumnWidth(span, columns),
      flexShrink: 0,
      maxWidth: grow ? 'unset' : getColumnWidth(span, columns),
      ...getBreakpointsStyles({
        sizes: { xs, sm, md, lg, xl },
        offsets: { xs: offsetXs, sm: offsetSm, md: offsetMd, lg: offsetLg, xl: offsetXl },
        orders: { xs: orderXs, sm: orderSm, md: orderMd, lg: orderLg, xl: orderXl },
        theme,
        columns,
        grow,
      }),
    },
  })
);
