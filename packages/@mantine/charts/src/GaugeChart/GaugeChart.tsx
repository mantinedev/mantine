import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getThemeColor,
  MantineColor,
  MantineTheme,
  rem,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useStyles,
} from '@mantine/core';
import { clamp } from '@mantine/hooks';
import classes from './GaugeChart.module.css';

export interface GaugeChartSection {
  /** Upper bound value for this section */
  value: number;

  /** Color of the section */
  color: MantineColor;
}

export type GaugeChartStylesNames =
  | 'root'
  | 'track'
  | 'section'
  | 'sectionCap'
  | 'needle'
  | 'label';

export type GaugeChartCssVariables = {
  root: '--gauge-size';
};

export interface GaugeChartProps
  extends
    BoxProps,
    StylesApiProps<GaugeChartFactory>,
    ElementProps<'svg', 'display' | 'opacity' | 'viewBox' | 'width' | 'height' | 'target'> {
  /** Current value to display. Fills the arc from `min` up to `value`, unless `sections` is set – then the arc is colored by thresholds and the value is displayed only in the center label. @category state */
  value: number;

  /** Minimum value of the gauge. If `min` is greater than `max`, the two are swapped, @default 0 @category appearance */
  min?: number;

  /** Maximum value of the gauge, @default 100 @category appearance */
  max?: number;

  /** Value marked on the arc with a line marker, use to display a goal or the current value of a gauge with `sections` @category state */
  target?: number;

  /** Threshold sections of the gauge arc, each section is filled from the previous section upper bound to its own `value`. If set, the arc is not filled based on `value`. @category appearance */
  sections?: GaugeChartSection[];

  /** Arc thickness in px, @default 12 @category appearance */
  thickness?: number;

  /** Chart width in px, the height is derived from the arc proportions, @default 200 @category appearance */
  size?: number;

  /** Start angle in degrees, @default -120 @category appearance */
  startAngle?: number;

  /** End angle in degrees, @default 120 @category appearance */
  endAngle?: number;

  /** Label displayed in the center of the gauge @category appearance */
  label?: React.ReactNode;

  /** Formats the value in the default label and `aria-valuetext`, @default (v) => String(v) @category appearance */
  valueFormatter?: (value: number) => string;

  /** Color of the gauge track (unfilled portion) @category appearance */
  trackColor?: MantineColor;

  /** Color of the filled arc when sections are not provided @category appearance */
  filledColor?: MantineColor;

  /** Color of the target marker @category appearance */
  targetColor?: MantineColor;

  /** Thickness of the target marker, @default 2 @category appearance */
  targetSize?: number;

  /** Whether to round arc endpoints. With `sections`, only the outer ends of the first and last sections are rounded. @default false @category appearance */
  roundCaps?: boolean;
}

export type GaugeChartFactory = Factory<{
  props: GaugeChartProps;
  ref: SVGSVGElement;
  stylesNames: GaugeChartStylesNames;
  vars: GaugeChartCssVariables;
}>;

const defaultProps = {
  min: 0,
  max: 100,
  thickness: 12,
  size: 200,
  startAngle: -120,
  endAngle: 120,
  roundCaps: false,
  targetSize: 2,
} satisfies Partial<GaugeChartProps>;

const varsResolver = createVarsResolver<GaugeChartFactory>((_theme, { size }) => ({
  root: {
    '--gauge-size': rem(getSafeSize(size)),
  },
}));

function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function getSafeSize(size: number | undefined) {
  return isFiniteNumber(size) && size > 0 ? size : defaultProps.size;
}

function finiteOr(value: number | undefined, fallback: number) {
  return isFiniteNumber(value) ? value : fallback;
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const delta = endAngle - startAngle;
  const sweep = delta >= 0 ? 1 : 0;
  const start = polarToCartesian(cx, cy, r, startAngle);

  if (Math.abs(delta) >= 360) {
    const mid = polarToCartesian(cx, cy, r, startAngle + (delta >= 0 ? 180 : -180));
    return `M ${start.x} ${start.y} A ${r} ${r} 0 0 ${sweep} ${mid.x} ${mid.y} A ${r} ${r} 0 0 ${sweep} ${start.x} ${start.y}`;
  }

  const end = polarToCartesian(cx, cy, r, endAngle);
  const largeArc = Math.abs(delta) > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} ${sweep} ${end.x} ${end.y}`;
}

interface GaugeGeometry {
  cx: number;
  cy: number;
  r: number;
  min: number;
  max: number;
  startAngle: number;
  endAngle: number;
}

function valueToAngle(value: number, geometry: GaugeGeometry) {
  const { min, max, startAngle, endAngle } = geometry;

  if (max === min) {
    return startAngle;
  }

  return startAngle + ((clamp(value, min, max) - min) / (max - min)) * (endAngle - startAngle);
}

function isAngleInArc(angle: number, start: number, end: number) {
  const delta = end - start;

  if (Math.abs(delta) >= 360) {
    return true;
  }

  const distance = delta >= 0 ? angle - start : start - angle;
  return ((distance % 360) + 360) % 360 <= Math.abs(delta);
}

function getArcBoundingBox(geometry: GaugeGeometry, padding: number, labelReserve: number) {
  const { cx, cy, r, startAngle, endAngle } = geometry;
  const startPt = polarToCartesian(cx, cy, r, startAngle);
  const endPt = polarToCartesian(cx, cy, r, endAngle);

  let minX = Math.min(startPt.x, endPt.x, cx - labelReserve);
  let maxX = Math.max(startPt.x, endPt.x, cx + labelReserve);
  let minY = Math.min(startPt.y, endPt.y, cy - labelReserve);
  let maxY = Math.max(startPt.y, endPt.y, cy + labelReserve);

  const cardinals = [
    { angle: 0, x: cx, y: cy - r },
    { angle: 90, x: cx + r, y: cy },
    { angle: 180, x: cx, y: cy + r },
    { angle: 270, x: cx - r, y: cy },
  ];

  for (const cardinal of cardinals) {
    if (isAngleInArc(cardinal.angle, startAngle, endAngle)) {
      minX = Math.min(minX, cardinal.x);
      maxX = Math.max(maxX, cardinal.x);
      minY = Math.min(minY, cardinal.y);
      maxY = Math.max(maxY, cardinal.y);
    }
  }

  return {
    x: minX - padding,
    y: minY - padding,
    width: maxX - minX + padding * 2,
    height: maxY - minY + padding * 2,
  };
}

function getLabelBox(
  geometry: GaugeGeometry,
  innerRadius: number,
  bbox: { x: number; y: number; width: number; height: number }
) {
  const { cx, cy } = geometry;
  const inscribedHalf = (innerRadius * Math.SQRT2) / 2;
  const halfWidth = Math.max(0, Math.min(inscribedHalf, cx - bbox.x, bbox.x + bbox.width - cx));
  const halfHeight = Math.max(0, Math.min(inscribedHalf, cy - bbox.y, bbox.y + bbox.height - cy));

  return {
    x: cx - halfWidth,
    y: cy - halfHeight,
    width: halfWidth * 2,
    height: halfHeight * 2,
  };
}

function getSectionArcs(
  sections: GaugeChartSection[],
  geometry: GaugeGeometry,
  theme: MantineTheme
) {
  const direction = geometry.endAngle >= geometry.startAngle ? 1 : -1;
  const sortedSections = sections
    .filter((section) => Number.isFinite(section.value))
    .sort((a, b) => a.value - b.value);
  const arcs: { path: string; color: string }[] = [];
  let prevAngle = geometry.startAngle;

  for (const section of sortedSections) {
    const sectionEndAngle = valueToAngle(section.value, geometry);
    if ((sectionEndAngle - prevAngle) * direction > 0) {
      arcs.push({
        path: describeArc(geometry.cx, geometry.cy, geometry.r, prevAngle, sectionEndAngle),
        color: getThemeColor(section.color, theme),
      });
      prevAngle = sectionEndAngle;
    }
  }

  return arcs;
}

function getTargetMarkerPoints(target: number, length: number, geometry: GaugeGeometry) {
  const angle = valueToAngle(target, geometry);
  return {
    inner: polarToCartesian(geometry.cx, geometry.cy, geometry.r - length / 2, angle),
    outer: polarToCartesian(geometry.cx, geometry.cy, geometry.r + length / 2, angle),
  };
}

export const GaugeChart = factory<GaugeChartFactory>((_props) => {
  const props = useProps('GaugeChart', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    value,
    min,
    max,
    target,
    sections,
    thickness,
    size,
    startAngle,
    endAngle,
    label,
    valueFormatter,
    trackColor,
    filledColor,
    targetColor,
    targetSize,
    roundCaps,
    variant,
    ...others
  } = props;

  const theme = useMantineTheme();

  const getStyles = useStyles<GaugeChartFactory>({
    name: 'GaugeChart',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const safeSize = getSafeSize(size);
  const safeThickness = Math.min(
    isFiniteNumber(thickness) && thickness >= 0 ? thickness : defaultProps.thickness,
    safeSize / 2
  );
  const safeTargetSize = finiteOr(targetSize, defaultProps.targetSize);
  const rawMin = finiteOr(min, defaultProps.min);
  const rawMax = finiteOr(max, defaultProps.max);
  const rangeMin = Math.min(rawMin, rawMax);
  const rangeMax = Math.max(rawMin, rawMax);
  const rawStartAngle = finiteOr(startAngle, defaultProps.startAngle);
  const rawEndAngle = finiteOr(endAngle, defaultProps.endAngle);
  const hasSpan = rawEndAngle !== rawStartAngle;
  const resolvedStartAngle = hasSpan ? rawStartAngle : defaultProps.startAngle;
  const resolvedEndAngle = hasSpan
    ? resolvedStartAngle + clamp(rawEndAngle - rawStartAngle, -360, 360)
    : defaultProps.endAngle;
  const clampedValue = isFiniteNumber(value) ? clamp(value, rangeMin, rangeMax) : undefined;
  const finiteTarget = isFiniteNumber(target) ? target : undefined;

  const geometry: GaugeGeometry = {
    cx: safeSize / 2,
    cy: safeSize / 2,
    r: (safeSize - safeThickness) / 2,
    min: rangeMin,
    max: rangeMax,
    startAngle: resolvedStartAngle,
    endAngle: resolvedEndAngle,
  };

  const strokeLinecap = roundCaps ? 'round' : 'butt';
  const targetMarkerLength = safeThickness * 1.5;
  const targetMarkerExtent = targetMarkerLength / 2 + (roundCaps ? safeTargetSize / 2 : 0);
  const strokePadding =
    finiteTarget !== undefined
      ? Math.max(safeThickness / 2, targetMarkerExtent)
      : safeThickness / 2;

  const labelReserve = Math.max(safeThickness, safeSize * 0.11);
  const bbox = getArcBoundingBox(geometry, strokePadding, labelReserve);
  const labelBox = getLabelBox(geometry, geometry.r - safeThickness / 2, bbox);

  const sectionArcs =
    sections && sections.length > 0 ? getSectionArcs(sections, geometry, theme) : null;
  const capArcs =
    roundCaps && sectionArcs && sectionArcs.length > 0
      ? sectionArcs.length > 1
        ? [sectionArcs[0], sectionArcs[sectionArcs.length - 1]]
        : sectionArcs
      : [];

  const valueEndAngle =
    clampedValue !== undefined ? valueToAngle(clampedValue, geometry) : geometry.startAngle;

  const targetMarker =
    finiteTarget !== undefined
      ? getTargetMarkerPoints(finiteTarget, targetMarkerLength, geometry)
      : null;

  const formatValue = valueFormatter || ((v: number) => String(v));
  const formattedValue = clampedValue !== undefined ? formatValue(clampedValue) : undefined;
  const labelContent = label !== undefined ? label : formattedValue;

  const ariaLabel =
    others['aria-labelledby'] !== undefined ? undefined : (others['aria-label'] ?? 'Gauge');

  return (
    <Box
      component="svg"
      viewBox={`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`}
      {...getStyles('root', { style: { aspectRatio: `${bbox.width} / ${bbox.height}` } })}
      variant={variant}
      role="meter"
      aria-label={ariaLabel}
      aria-valuenow={clampedValue}
      aria-valuemin={rangeMin}
      aria-valuemax={rangeMax}
      aria-valuetext={formattedValue ?? 'No data'}
      {...others}
    >
      <path
        {...getStyles('track', {
          style: trackColor ? { stroke: getThemeColor(trackColor, theme) } : undefined,
        })}
        d={describeArc(
          geometry.cx,
          geometry.cy,
          geometry.r,
          geometry.startAngle,
          geometry.endAngle
        )}
        fill="none"
        stroke="var(--mantine-color-default-border)"
        strokeWidth={safeThickness}
        strokeLinecap={strokeLinecap}
      />

      {sectionArcs ? (
        <>
          {capArcs.map((arc, index) => (
            <path
              key={index}
              {...getStyles('sectionCap')}
              d={arc.path}
              fill="none"
              stroke={arc.color}
              strokeWidth={safeThickness}
              strokeLinecap="round"
            />
          ))}
          {sectionArcs.map((arc, index) => (
            <path
              key={index}
              {...getStyles('section')}
              d={arc.path}
              fill="none"
              stroke={arc.color}
              strokeWidth={safeThickness}
              strokeLinecap="butt"
            />
          ))}
        </>
      ) : (
        valueEndAngle !== geometry.startAngle && (
          <path
            {...getStyles('section')}
            d={describeArc(
              geometry.cx,
              geometry.cy,
              geometry.r,
              geometry.startAngle,
              valueEndAngle
            )}
            fill="none"
            stroke={
              filledColor
                ? getThemeColor(filledColor, theme)
                : 'var(--mantine-primary-color-filled)'
            }
            strokeWidth={safeThickness}
            strokeLinecap={strokeLinecap}
          />
        )
      )}

      {targetMarker && (
        <line
          {...getStyles('needle')}
          x1={targetMarker.inner.x}
          y1={targetMarker.inner.y}
          x2={targetMarker.outer.x}
          y2={targetMarker.outer.y}
          stroke={targetColor ? getThemeColor(targetColor, theme) : 'var(--mantine-color-bright)'}
          strokeWidth={safeTargetSize}
          strokeLinecap={strokeLinecap}
        />
      )}

      <foreignObject x={labelBox.x} y={labelBox.y} width={labelBox.width} height={labelBox.height}>
        <div {...getStyles('label')}>{labelContent}</div>
      </foreignObject>
    </Box>
  );
});

GaugeChart.displayName = '@mantine/charts/GaugeChart';
GaugeChart.classes = classes;
GaugeChart.varsResolver = varsResolver;
