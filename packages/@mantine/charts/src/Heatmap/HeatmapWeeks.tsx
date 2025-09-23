import { getHeatColor } from './get-heat-color/get-heat-color';
import { HeatmapWeeksSharedProps } from './HeatmapWeeks.types';

export function HeatmapWeeks({
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

  return (
    <>
      {datesRange.map((week, weekIndex) => {
        // Original simple logic without month splitting
        const days = week.map((date, dayIndex) => {
          if (!date) {
            return null;
          }

          const hasValue = date in data && data[date] !== null;
          const rectValue = hasValue ? data[date] : null;

          return (
            <rect
              key={date}
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
            key={weekIndex}
            transform={`translate(${weekIndex * rectSizeWithGap}, 0)`}
            data-id="week"
          >
            {days}
          </g>
        );
      })}
    </>
  );
}
