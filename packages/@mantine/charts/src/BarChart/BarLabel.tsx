export function BarLabel({
  value,
  valueFormatter,
  textBreakAll,
  parentViewBox,
  orientation,
  viewBox,
  width,
  height,
  ...others
}: Record<string, any>) {
  return (
    <text
      {...others}
      dy={orientation === 'vertical' ? height / 2 + 4 : -10}
      dx={orientation === 'vertical' ? width - 30 : 0}
      fontSize={12}
      fill="var(--chart-bar-label-color, var(--mantine-color-dimmed))"
    >
      {typeof valueFormatter === 'function' ? valueFormatter(value) : value}
    </text>
  );
}
