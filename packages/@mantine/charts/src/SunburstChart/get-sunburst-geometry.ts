export interface GetSunburstGeometryInput {
  width: number;
  height: number;
  innerRadius: number;
  outerRadius: number | undefined;
  ringPadding: number;
  depth: number;
}

export interface SunburstGeometry {
  thickness: number;
  rechartsOuterRadius: number;
}

export function getSunburstGeometry({
  width,
  height,
  innerRadius,
  outerRadius,
  ringPadding,
  depth,
}: GetSunburstGeometryInput): SunburstGeometry {
  const availableRadius = outerRadius ?? Math.min(width, height) / 2;
  const levels = Math.max(depth, 1);
  const thickness = (availableRadius - innerRadius - (levels - 1) * ringPadding) / levels;

  return {
    thickness,
    rechartsOuterRadius: innerRadius + thickness * (levels + 1),
  };
}
