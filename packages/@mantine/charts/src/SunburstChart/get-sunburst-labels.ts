import {
  ResolvedSunburstNode,
  ResolvedSunburstRoot,
  SUNBURST_VALUE_KEY,
} from './resolve-sunburst-data';

const RADIAN = Math.PI / 180;
const CHARACTER_WIDTH = 0.6;
const LABEL_PADDING = 2;

export interface SunburstLabel {
  key: string;
  x: number;
  y: number;
  text: string;
}

export interface GetSunburstLabelsInput {
  root: ResolvedSunburstRoot;
  cx: number;
  cy: number;
  innerRadius: number;
  thickness: number;
  ringPadding: number;
  startAngle: number;
  angleSpan: number;
  fontSize: number;
  valueFormatter?: (value: number) => string;
}

export function getSunburstLabels({
  root,
  cx,
  cy,
  innerRadius,
  thickness,
  ringPadding,
  startAngle,
  angleSpan,
  fontSize,
  valueFormatter,
}: GetSunburstLabelsInput): SunburstLabel[] {
  const total = root[SUNBURST_VALUE_KEY];
  const labels: SunburstLabel[] = [];

  if (!(total > 0) || !(thickness > 0)) {
    return labels;
  }

  const walk = (
    nodes: ResolvedSunburstNode[],
    innerR: number,
    initialAngle: number,
    path: string
  ) => {
    let currentAngle = initialAngle;

    nodes.forEach((node, index) => {
      const value = node[SUNBURST_VALUE_KEY];
      const arc = (value / total) * angleSpan;
      const key = `${path}-${index}`;
      const midAngle = (currentAngle + arc / 2) * RADIAN;
      const midRadius = innerR + thickness / 2;

      if (value > 0) {
        const text = valueFormatter ? valueFormatter(value) : String(value);
        const width = text.length * fontSize * CHARACTER_WIDTH + LABEL_PADDING * 2;
        const height = fontSize + LABEL_PADDING * 2;
        const cos = Math.abs(Math.cos(midAngle));
        const sin = Math.abs(Math.sin(midAngle));
        const radialExtent = width * cos + height * sin;
        const tangentialExtent = width * sin + height * cos;
        const chord = 2 * midRadius * Math.sin(Math.min(Math.abs(arc) * RADIAN, Math.PI) / 2);

        if (radialExtent <= thickness && tangentialExtent <= chord) {
          labels.push({
            key,
            text,
            x: cx + midRadius * Math.cos(midAngle),
            y: cy - midRadius * Math.sin(midAngle),
          });
        }
      }

      if (node.children) {
        walk(node.children, innerR + thickness + ringPadding, currentAngle, key);
      }

      currentAngle += arc;
    });
  };

  walk(root.children, innerRadius, startAngle, 'label');
  return labels;
}
