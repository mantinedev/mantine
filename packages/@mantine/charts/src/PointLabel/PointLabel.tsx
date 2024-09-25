interface PointLabelProps {
  x?: number;
  y?: number;
  value?: number;
}

export function PointLabel({ x, y, value }: PointLabelProps) {
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
        {value}
      </text>
    </g>
  );
}
