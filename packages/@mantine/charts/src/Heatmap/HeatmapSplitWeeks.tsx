import { getColumns, HeatmapColumn } from './get-columns/get-columns';
import { getHeatColor } from './get-heat-color/get-heat-color';
import { HeatmapWeeksSharedProps } from './HeatmapWeeks.types';

export function HeatmapSplitWeeks({
  data,
  datesRange,
  rectSize,
  gap,
  rectRadius,
  min,
  max,
  colors,
  withTooltip,
  setHoveredRect,
  getRectProps,
  getStyles,
}: HeatmapWeeksSharedProps) {
  const rectSizeWithGap = rectSize + gap;

  // Columns: computed by a helper so logic is isolated
  const columns: HeatmapColumn[] = getColumns(datesRange, true);

  return (
    <>
      {columns.map((col, columnIndex) => {
        if (col.type === 'spacer') {
          return (
            <g
              key={`spacer-${columnIndex}`}
              transform={`translate(${columnIndex * rectSizeWithGap}, 0)`}
            />
          );
        }

        const week = datesRange[col.weekIndex];

        const days = week.map((date, dayIndex) => {
          if (!date) {
            return null;
          }
          if (new Date(date).getUTCMonth() !== col.month) {
            return null;
          }

          const hasValue = date in data && data[date] !== null;
          const rectValue = hasValue ? data[date] : null;

          return (
            <rect
              key={`${date}-${col.month}`}
              width={rectSize}
              height={rectSize}
              x={gap}
              y={dayIndex * rectSizeWithGap + gap}
              rx={rectRadius}
              data-empty={!hasValue || undefined}
              fill={hasValue ? getHeatColor({ value: data[date], min, max, colors }) : undefined}
              onPointerEnter={
                withTooltip ? () => setHoveredRect({ date, value: rectValue }) : undefined
              }
              {...getRectProps?.({ date, value: rectValue })}
              {...getStyles('rect')}
            />
          );
        });

        return (
          <g
            key={`col-${col.weekIndex}-${col.month}-${columnIndex}`}
            transform={`translate(${columnIndex * rectSizeWithGap}, 0)`}
            data-id="week"
          >
            {days}
          </g>
        );
      })}
    </>
  );
}
