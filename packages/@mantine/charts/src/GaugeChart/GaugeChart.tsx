import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getThemeColor,
  MantineColor,
  rem,
  StylesApiProps,
  useMantineTheme,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './GaugeChart.module.css';

export interface GaugeChartSection {
  /** Upper bound value for this section */
  value: number;

  /** Color of the section */
  color: MantineColor;
}

export type GaugeChartStylesNames = 'root' | 'track' | 'section' | 'needle' | 'label';

export type GaugeChartCssVariables = {
  root: '--gauge-size' | '--gauge-thickness';
};

export interface GaugeChartProps
  extends
    BoxProps,
    StylesApiProps<GaugeChartFactory>,
    ElementProps<'svg', 'display' | 'opacity' | 'viewBox' | 'width' | 'height' | 'target'> {
  /** Current value to display. Fills the arc from `min` up to `value`, unless `sections` is set – then the arc is colored by thresholds and the value is displayed only in the center label. */
  value: number;

  /** Minimum value of the gauge, @default 0 */
  min?: number;

  /** Maximum value of the gauge, @default 100 */
  max?: number;

  /** Value marked on the arc with a line marker, use to display a goal or the current value of a gauge with `sections` */
  target?: number;

  /** Threshold sections of the gauge arc, each section is filled from the previous section upper bound to its own `value`. If set, the arc is not filled based on `value`. */
  sections?: GaugeChartSection[];

  /** Arc thickness in px, @default 12 */
  thickness?: number;

  /** Chart size (width and height), @default 200 */
  size?: number;

  /** Start angle in degrees, @default -120 */
  startAngle?: number;

  /** End angle in degrees, @default 120 */
  endAngle?: number;

  /** Label displayed in the center of the gauge */
  label?: React.ReactNode;

  /** Value formatter for default label, @default (v) => String(v) */
  valueFormatter?: (value: number) => string;

  /** Color of the gauge track (unfilled portion) */
  trackColor?: MantineColor;

  /** Color of the filled arc when sections are not provided */
  filledColor?: MantineColor;

  /** Color of the target marker */
  targetColor?: MantineColor;

  /** Thickness of the target marker, @default 2 */
  targetSize?: number;

  /** Whether to round arc endpoints. Not applied to `sections` – rounded caps of adjacent sections would overlap each other. @default false */
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

const varsResolver = createVarsResolver<GaugeChartFactory>((_theme, { size, thickness }) => ({
  root: {
    '--gauge-size': rem(size),
    '--gauge-thickness': rem(thickness),
  },
}));

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const delta = endAngle - startAngle;
  const sweep = delta >= 0 ? 1 : 0;
  const start = polarToCartesian(cx, cy, r, startAngle);

  // A single arc command cannot express a full circle – its endpoints would be identical
  // and nothing would be rendered, so it is split into two half-circle arcs.
  if (Math.abs(delta) >= 360) {
    const mid = polarToCartesian(cx, cy, r, startAngle + (delta >= 0 ? 180 : -180));
    return `M ${start.x} ${start.y} A ${r} ${r} 0 0 ${sweep} ${mid.x} ${mid.y} A ${r} ${r} 0 0 ${sweep} ${start.x} ${start.y}`;
  }

  const end = polarToCartesian(cx, cy, r, endAngle);
  const largeArc = Math.abs(delta) > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} ${sweep} ${end.x} ${end.y}`;
}

function valueToAngle(
  value: number,
  min: number,
  max: number,
  startAngle: number,
  endAngle: number
) {
  if (max === min) {
    return startAngle;
  }
  const clamped = Math.max(min, Math.min(max, value));
  return startAngle + ((clamped - min) / (max - min)) * (endAngle - startAngle);
}

function isAngleInArc(angle: number, start: number, end: number) {
  const delta = end - start;

  if (Math.abs(delta) >= 360) {
    return true;
  }

  // Distance from the start angle measured along the direction the arc sweeps,
  // so that descending ranges (endAngle < startAngle) are handled the same way.
  const distance = delta >= 0 ? angle - start : start - angle;
  return ((distance % 360) + 360) % 360 <= Math.abs(delta);
}

function getArcBoundingBox(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
  padding: number
) {
  const startPt = polarToCartesian(cx, cy, r, startAngle);
  const endPt = polarToCartesian(cx, cy, r, endAngle);

  let minX = Math.min(startPt.x, endPt.x);
  let maxX = Math.max(startPt.x, endPt.x);
  let minY = Math.min(startPt.y, endPt.y);
  let maxY = Math.max(startPt.y, endPt.y);

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

  const svgSize = size!;
  const cx = svgSize / 2;
  const cy = svgSize / 2;
  const r = (svgSize - thickness!) / 2;
  const strokeLinecap = roundCaps ? 'round' : 'butt';
  const needleLength = thickness! * 1.5;

  // The needle sticks out past the arc radius, and a round cap adds half of its own
  // width on top of that – both contribute at the same time.
  const needleExtent = needleLength / 2 + (roundCaps ? targetSize! / 2 : 0);
  const strokePadding = Math.max(thickness! / 2, needleExtent);

  // A gauge cannot span more than a full turn – a larger range would wrap the arc onto
  // itself and make later sections overwrite earlier ones.
  const span = endAngle! - startAngle!;
  const resolvedEndAngle = startAngle! + Math.max(-360, Math.min(360, span));

  const bbox = getArcBoundingBox(cx, cy, r, startAngle!, resolvedEndAngle, strokePadding);

  const resolvedTrackColor = trackColor
    ? getThemeColor(trackColor, theme)
    : 'var(--mantine-color-default-border)';

  const trackPath = describeArc(cx, cy, r, startAngle!, resolvedEndAngle);

  const sectionElements =
    sections && sections.length > 0 ? (
      (() => {
        const sortedSections = [...sections].sort((a, b) => a.value - b.value);
        const direction = resolvedEndAngle >= startAngle! ? 1 : -1;
        let prevAngle = startAngle!;

        return sortedSections.map((section, index) => {
          const sectionEndAngle = valueToAngle(
            section.value,
            min!,
            max!,
            startAngle!,
            resolvedEndAngle
          );
          if ((sectionEndAngle - prevAngle) * direction <= 0) {
            return null;
          }
          const path = describeArc(cx, cy, r, prevAngle, sectionEndAngle);
          const resolvedColor = getThemeColor(section.color, theme);
          prevAngle = sectionEndAngle;

          return (
            <path
              key={index}
              {...getStyles('section')}
              d={path}
              fill="none"
              stroke={resolvedColor}
              strokeWidth={thickness}
              strokeLinecap="butt"
            />
          );
        });
      })()
    ) : (
      <path
        {...getStyles('section')}
        d={describeArc(
          cx,
          cy,
          r,
          startAngle!,
          valueToAngle(value, min!, max!, startAngle!, resolvedEndAngle)
        )}
        fill="none"
        stroke={
          filledColor ? getThemeColor(filledColor, theme) : 'var(--mantine-primary-color-filled)'
        }
        strokeWidth={thickness}
        strokeLinecap={strokeLinecap}
      />
    );

  const needleElement =
    target != null
      ? (() => {
          const targetAngle = valueToAngle(target, min!, max!, startAngle!, resolvedEndAngle);
          const inner = polarToCartesian(cx, cy, r - needleLength / 2, targetAngle);
          const outer = polarToCartesian(cx, cy, r + needleLength / 2, targetAngle);
          const resolvedTargetColor = targetColor
            ? getThemeColor(targetColor, theme)
            : 'var(--mantine-color-bright)';

          return (
            <line
              {...getStyles('needle')}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              stroke={resolvedTargetColor}
              strokeWidth={targetSize}
              strokeLinecap={strokeLinecap}
            />
          );
        })()
      : null;

  const formatValue = valueFormatter || ((v: number) => String(v));

  // The arc is drawn from the clamped value, and `aria-valuetext` is defined as the
  // human-readable equivalent of `aria-valuenow` – reporting the raw value in either the
  // default label or `aria-valuetext` would contradict both the arc and `aria-valuenow`.
  const clampedValue = Math.max(min!, Math.min(max!, value));
  const formattedValue = formatValue(clampedValue);
  const labelContent = label !== undefined ? label : formattedValue;

  // A meter with no accessible name is announced as "meter" and nothing else. A string
  // `label` names the metric ("CPU usage"), so it is used unless one is given explicitly.
  // The default label is the formatted value, which would only repeat `aria-valuetext`.
  const ariaLabel = others['aria-label'] ?? (typeof label === 'string' ? label : undefined);

  return (
    <Box
      component="svg"
      viewBox={`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`}
      {...getStyles('root')}
      variant={variant}
      role="meter"
      aria-label={ariaLabel}
      aria-valuenow={clampedValue}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuetext={formattedValue}
      {...others}
    >
      <path
        {...getStyles('track')}
        d={trackPath}
        fill="none"
        stroke={resolvedTrackColor}
        strokeWidth={thickness}
        strokeLinecap={strokeLinecap}
      />

      {sectionElements}
      {needleElement}

      <foreignObject x={bbox.x} y={bbox.y} width={bbox.width} height={bbox.height}>
        <div
          {...getStyles('label', {
            style: {
              transform: `translate(${cx - bbox.x - bbox.width / 2}px, ${cy - bbox.y - bbox.height / 2}px)`,
            },
          })}
        >
          {labelContent}
        </div>
      </foreignObject>
    </Box>
  );
});

GaugeChart.displayName = '@mantine/charts/GaugeChart';
GaugeChart.classes = classes;
GaugeChart.varsResolver = varsResolver;
