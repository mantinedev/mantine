interface PointLabelProps {
  x?: number;
  y?: number;
  value?: number;
  valueFormatter?: (value: number) => string;
}

export function PointLabel({ x, y, value, valueFormatter }: PointLabelProps) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={-8}
        dx={-10}
        textAnchor="top"
        fill="var(--chart-text-color, var(--mantine-color-dimmed))"
        fontSize={8}
      >
        {valueFormatter ? valueFormatter(value!) : value}
      </text>
    </g>
  );
}
