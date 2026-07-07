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
  Tooltip,
  useMantineTheme,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './BulletChart.module.css';

export interface BulletChartRange {
  /** Upper bound value for this range */
  value: number;

  /** Background color of the range band */
  color: MantineColor;

  /** Optional label for the range */
  label?: string;
}

export type BulletChartStylesNames =
  | 'root'
  | 'label'
  | 'trackWrapper'
  | 'track'
  | 'range'
  | 'bar'
  | 'target'
  | 'rangeLabel'
  | 'barLabel'
  | 'targetLabel';

export type BulletChartCssVariables = {
  root: '--bullet-size' | '--bullet-bar-size';
};

export interface BulletChartProps
  extends BoxProps, StylesApiProps<BulletChartFactory>, ElementProps<'div'> {
  /** Current actual value */
  value: number;

  /** Target value, displayed as a marker line */
  target?: number;

  /** Qualitative ranges displayed as background bands */
  ranges: BulletChartRange[];

  /** Orientation, @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';

  /** Label displayed next to the chart */
  label?: React.ReactNode;

  /** Value formatter for tooltip/display and labels */
  valueFormatter?: (value: number) => string;

  /** Color of the actual value bar, @default 'white' */
  barColor?: MantineColor;

  /** Color of the target marker, @default 'dark' for light, 'white' for dark */
  targetColor?: MantineColor;

  /** Height of the chart track area (ranges), @default 32 */
  size?: number | string;

  /** Height of the actual value bar, @default 16 */
  barSize?: number | string;

  /** Target marker size relative to chart size, @default 0.7 */
  targetRatio?: number;

  /** Target marker thickness, @default 2 */
  targetSize?: number | string;

  /** Whether to show tooltip on hover, @default false */
  withTooltip?: boolean;

  /** Custom tooltip content */
  getTooltipLabel?: (data: { value: number; target?: number }) => React.ReactNode;
}

export type BulletChartFactory = Factory<{
  props: BulletChartProps;
  ref: HTMLDivElement;
  stylesNames: BulletChartStylesNames;
  vars: BulletChartCssVariables;
}>;

const defaultProps = {
  orientation: 'horizontal',
  size: 32,
  barSize: 16,
  targetRatio: 0.7,
  targetSize: 2,
  withTooltip: false,
} satisfies Partial<BulletChartProps>;

const varsResolver = createVarsResolver<BulletChartFactory>((_theme, { size, barSize }) => ({
  root: {
    '--bullet-size': rem(size),
    '--bullet-bar-size': rem(barSize),
  },
}));

export const BulletChart = factory<BulletChartFactory>((_props) => {
  const props = useProps('BulletChart', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    value,
    target,
    ranges,
    orientation,
    label,
    valueFormatter,
    barColor,
    targetColor,
    size,
    barSize,
    targetRatio,
    targetSize,
    withTooltip,
    getTooltipLabel,
    variant,
    ...others
  } = props;

  const theme = useMantineTheme();

  const getStyles = useStyles<BulletChartFactory>({
    name: 'BulletChart',
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

  const isVertical = orientation === 'vertical';
  const maxRange = Math.max(...ranges.map((r) => r.value), 0);
  const formatValue = (v: number) => (valueFormatter ? valueFormatter(v) : v.toString());

  // Clamp positions/sizes to the track so out-of-range values and targets never overflow it
  const toPercentage = (v: number) =>
    maxRange > 0 ? Math.max(0, Math.min((v / maxRange) * 100, 100)) : 0;

  const resolvedBarColor = barColor ? getThemeColor(barColor, theme) : 'var(--mantine-color-white)';

  const resolvedTargetColor = targetColor ? getThemeColor(targetColor, theme) : undefined;

  const sortedRanges = [...ranges].sort((a, b) => b.value - a.value);

  const rangeBands = sortedRanges.map((range, index) => {
    const percentage = toPercentage(range.value);
    const sizeStyle = isVertical
      ? { height: `${percentage}%`, bottom: 0 }
      : { width: `${percentage}%` };

    return (
      <div
        key={index}
        {...getStyles('range', {
          style: {
            ...sizeStyle,
            backgroundColor: getThemeColor(range.color, theme),
          },
        })}
      />
    );
  });

  const rangeLabels = sortedRanges.map((range, index) => {
    const percentage = toPercentage(range.value);
    const positionStyle = isVertical ? { bottom: `${percentage}%` } : { left: `${percentage}%` };

    return (
      <div key={index} {...getStyles('rangeLabel', { style: positionStyle })}>
        {formatValue(range.value)}
      </div>
    );
  });

  const barPercentage = toPercentage(value);
  const barSizeStyle = isVertical
    ? { height: `${barPercentage}%`, bottom: 0 }
    : { width: `${barPercentage}%` };

  const barElement = (
    <div
      {...getStyles('bar', {
        style: {
          ...barSizeStyle,
          backgroundColor: resolvedBarColor,
        },
      })}
    />
  );

  const barLabelPosition = isVertical
    ? { bottom: `${barPercentage}%` }
    : { left: `${barPercentage}%` };

  const barLabelElement = (
    <div {...getStyles('barLabel', { style: barLabelPosition })}>{formatValue(value)}</div>
  );

  const targetPercentage = target != null ? toPercentage(target) : 0;

  const targetElement =
    target != null ? (
      <div
        {...getStyles('target', {
          style: isVertical
            ? {
                bottom: `${targetPercentage}%`,
                width: `${targetRatio! * 100}%`,
                height: rem(targetSize),
                backgroundColor: resolvedTargetColor,
              }
            : {
                left: `${targetPercentage}%`,
                height: `${targetRatio! * 100}%`,
                width: rem(targetSize),
                backgroundColor: resolvedTargetColor,
              },
        })}
      />
    ) : null;

  const targetLabelElement =
    target != null ? (
      <div
        {...getStyles('targetLabel', {
          style: isVertical ? { bottom: `${targetPercentage}%` } : { left: `${targetPercentage}%` },
        })}
      >
        {formatValue(target)}
      </div>
    ) : null;

  const getDefaultTooltipLabel = () => {
    const parts = [`Value: ${formatValue(value)}`];
    if (target != null) {
      parts.push(`Target: ${formatValue(target)}`);
    }
    return parts.join(' / ');
  };

  const tooltipLabel = getTooltipLabel
    ? getTooltipLabel({ value, target })
    : getDefaultTooltipLabel();

  const trackWrapper = (
    <div {...getStyles('trackWrapper')} data-orientation={orientation}>
      {rangeLabels}
      {targetLabelElement}
      <div {...getStyles('track')} data-orientation={orientation}>
        {rangeBands}
        {barElement}
        {targetElement}
      </div>
      {barLabelElement}
    </div>
  );

  return (
    <Box {...getStyles('root')} variant={variant} mod={{ orientation }} {...others}>
      {label && <div {...getStyles('label')}>{label}</div>}
      {withTooltip ? (
        <Tooltip label={tooltipLabel} position={isVertical ? 'right' : 'top'}>
          {trackWrapper}
        </Tooltip>
      ) : (
        trackWrapper
      )}
    </Box>
  );
});

BulletChart.displayName = '@mantine/charts/BulletChart';
BulletChart.classes = classes;
BulletChart.varsResolver = varsResolver;
