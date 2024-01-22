interface GetCurveProps {
  size: number;
  thickness: number;
  sum: number;
  value: number | undefined;
  root: boolean | undefined;
  offset: number;
}

export function getCurveProps({ size, thickness, sum, value, root, offset }: GetCurveProps) {
  const radius = (size * 0.9 - thickness * 2) / 2;
  const deg = (Math.PI * radius * 2) / 100;

  const strokeDasharray =
    root || value === undefined
      ? `${(100 - sum) * deg}, ${sum * deg}`
      : `${value * deg}, ${(100 - value) * deg}`;

  return {
    strokeWidth: Number.isNaN(thickness) ? 12 : thickness,
    cx: size / 2 || 0,
    cy: size / 2 || 0,
    r: radius || 0,
    transform: root ? `scale(1, -1) translate(0, -${size})` : undefined,
    strokeDasharray,
    strokeDashoffset: root ? 0 : offset || 0,
  };
}
