interface GetCurveProps {
  size: number;
  thickness: number;
  sum: number;
  value: number;
  root: boolean;
  offset: number;
}

export function getCurveProps({ size, thickness, sum, value, root, offset }: GetCurveProps) {
  const radius = (size * 0.9 - thickness * 2) / 2;
  const deg = (Math.PI * radius * 2) / 100;

  const strokeDasharray = root
    ? `${(100 - sum) * deg}, ${sum * deg}`
    : `${value * deg}, ${(100 - value) * deg}`;

  return {
    strokeWidth: thickness,
    cx: size / 2,
    cy: size / 2,
    r: radius,
    transform: root ? `scale(1, -1) translate(0, -${size})` : null,
    strokeDasharray,
    strokeDashoffset: root ? 0 : offset,
  };
}
