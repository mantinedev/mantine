interface CurveData {
  value: number;
  color: string;
}

interface GetCurves {
  sections: CurveData[];
  size: number;
  thickness: number;
}

interface Curve {
  sum: number;
  offset: number;
  root: boolean;
  data: CurveData;
}

export function getCurves({ size, thickness, sections }: GetCurves) {
  const sum = sections.reduce((acc, current) => acc + current.value, 0);
  const accumulated = Math.PI * ((size * 0.9 - thickness * 2) / 2) * 2;
  let offset = accumulated;
  const curves: Curve[] = [];

  for (let i = 0; i < sections.length; i += 1) {
    curves.push({ sum, offset, data: sections[i], root: false });
    offset -= (sections[i].value / 100) * accumulated;
  }

  curves.push({ sum, offset, data: null, root: true });

  return curves;
}
