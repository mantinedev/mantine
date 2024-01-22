import type { MantineColor } from '../../../core';

interface CurveData extends React.ComponentPropsWithRef<'circle'> {
  value: number;
  color: MantineColor;
  tooltip?: React.ReactNode;
}

interface RootCurveData extends React.ComponentPropsWithRef<'circle'> {
  color?: MantineColor;
}

interface GetCurves {
  sections: CurveData[];
  size: number;
  thickness: number;
  renderRoundedLineCaps: boolean | undefined;
  rootColor?: MantineColor;
}

interface Curve {
  sum: number;
  offset: number;
  root: boolean;
  data: CurveData | RootCurveData;
  lineRoundCaps?: boolean;
}

export function getCurves({
  size,
  thickness,
  sections,
  renderRoundedLineCaps,
  rootColor,
}: GetCurves) {
  const sum = sections.reduce((acc, current) => acc + current.value, 0);
  const accumulated = Math.PI * ((size * 0.9 - thickness * 2) / 2) * 2;
  let offset = accumulated;
  const curves: Curve[] = [];
  const curvesInOrder: Curve[] = [];

  for (let i = 0; i < sections.length; i += 1) {
    curves.push({ sum, offset, data: sections[i], root: false });
    offset -= (sections[i].value / 100) * accumulated;
  }

  curves.push({ sum, offset, data: { color: rootColor }, root: true });

  // Reorder curves to layer appropriately and selectively set caps to round

  curvesInOrder.push({ ...curves[curves.length - 1], lineRoundCaps: false });
  if (curves.length > 2) {
    curvesInOrder.push({ ...curves[0], lineRoundCaps: renderRoundedLineCaps });
    curvesInOrder.push({ ...curves[curves.length - 2], lineRoundCaps: renderRoundedLineCaps });
    for (let i = 1; i <= curves.length - 3; i += 1) {
      curvesInOrder.push({ ...curves[i], lineRoundCaps: false });
    }
  } else {
    curvesInOrder.push({ ...curves[0], lineRoundCaps: renderRoundedLineCaps });
  }

  return curvesInOrder;
}
