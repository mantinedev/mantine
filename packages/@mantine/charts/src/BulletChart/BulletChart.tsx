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
import { useId } from '@mantine/hooks';
import classes from './BulletChart.module.css';

export interface BulletChartRange {
  /** Upper bound value for this range */
  value: number;

  /** Background color of the range band */
  color: MantineColor;

  /** Range name, for example `'Good'`. Used in the accessible name and in the default tooltip for the range the value falls in. Visible range labels always display the formatted range value. */
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
  /** Current actual value @category state */
  value: number;

  /** Target value, displayed as a marker line @category state */
  target?: number;

  /** Qualitative ranges displayed as background bands @category appearance */
  ranges: BulletChartRange[];

  /** Orientation @default 'horizontal' @category appearance */
  orientation?: 'horizontal' | 'vertical';

  /** Label displayed next to the chart @category appearance */
  label?: React.ReactNode;

  /** Value formatter for tooltip/display and labels @category appearance */
  valueFormatter?: (value: number) => string;

  /** Color of the actual value bar @default 'white' @category appearance */
  barColor?: MantineColor;

  /** Color of the target marker @default 'black' @category appearance */
  targetColor?: MantineColor;

  /** Thickness of the chart track area (ranges) @default 32 @category appearance */
  size?: number | string;

  /** Thickness of the actual value bar @default 16 @category appearance */
  barSize?: number | string;

  /** Target marker length relative to the track thickness @default 0.7 @category appearance */
  targetRatio?: number;

  /** Target marker thickness @default 2 @category appearance */
  targetSize?: number | string;

  /** If set, the chart displays a tooltip on hover and becomes focusable to display it on focus @default false @category behavior */
  withTooltip?: boolean;

  /** Custom tooltip content, called only when `withTooltip` is set. `value` is passed as is, a non-finite `target` is passed as `undefined` @category appearance */
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
    mod,
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
  const labelId = useId();
  const summaryId = useId();
  const finiteValue = Number.isFinite(value) ? value : undefined;
  const finiteTarget = typeof target === 'number' && Number.isFinite(target) ? target : undefined;
  const finiteRanges = ranges.filter((range) => Number.isFinite(range.value));
  const scaleMax = Math.max(
    0,
    ...finiteRanges.map((range) => range.value),
    finiteValue ?? 0,
    finiteTarget ?? 0
  );
  const formatValue = (v: number) => (valueFormatter ? valueFormatter(v) : v.toString());

  const toPercentage = (v: number) =>
    scaleMax > 0 ? Math.max(0, Math.min((v / scaleMax) * 100, 100)) : 0;

  const getLengthStyle = (percentage: number) =>
    isVertical ? { height: `${percentage}%` } : { width: `${percentage}%` };

  const getPositionStyle = (percentage: number) => ({ '--bullet-position': `${percentage}%` });

  const getColorStyle = (color: MantineColor | undefined) =>
    color ? { backgroundColor: getThemeColor(color, theme) } : null;

  const rangesByValueDesc = [...finiteRanges].sort((a, b) => b.value - a.value);
  const currentRange =
    finiteValue !== undefined
      ? [...rangesByValueDesc].reverse().find((range) => finiteValue <= range.value)
      : undefined;
  const currentRangeLabel = currentRange?.label;

  const rangeBands = rangesByValueDesc.map((range, index) => (
    <div
      key={index}
      {...getStyles('range', {
        style: { ...getLengthStyle(toPercentage(range.value)), ...getColorStyle(range.color) },
      })}
    />
  ));

  const rangeLabels = rangesByValueDesc.map((range, index) => (
    <div
      key={index}
      {...getStyles('rangeLabel', { style: getPositionStyle(toPercentage(range.value)) })}
    >
      {formatValue(range.value)}
    </div>
  ));

  const barPercentage = finiteValue !== undefined ? toPercentage(finiteValue) : 0;
  const targetPercentage = finiteTarget !== undefined ? toPercentage(finiteTarget) : 0;
  const targetLength = `${targetRatio! * 100}%`;
  const targetThickness = rem(targetSize);

  const summary =
    [
      finiteValue !== undefined && `value ${formatValue(finiteValue)}`,
      currentRangeLabel && `in ${currentRangeLabel} range`,
      finiteTarget !== undefined && `target ${formatValue(finiteTarget)}`,
    ]
      .filter(Boolean)
      .join(', ') || (label ? '' : 'No data');

  const userLabelled = others['aria-label'] != null || others['aria-labelledby'] != null;

  const getDefaultTooltipLabel = () =>
    [
      finiteValue !== undefined && `Value: ${formatValue(finiteValue)}`,
      currentRangeLabel && `Range: ${currentRangeLabel}`,
      finiteTarget !== undefined && `Target: ${formatValue(finiteTarget)}`,
    ]
      .filter(Boolean)
      .join(' / ');

  const chart = (
    <Box
      {...getStyles('root', { focusable: withTooltip })}
      variant={variant}
      mod={[{ orientation }, mod]}
      role="img"
      aria-labelledby={userLabelled ? undefined : label ? `${labelId} ${summaryId}` : summaryId}
      tabIndex={withTooltip ? 0 : undefined}
      {...others}
    >
      {label && (
        <div {...getStyles('label')} id={labelId} aria-hidden>
          {label}
        </div>
      )}
      <span id={summaryId} hidden>
        {summary}
      </span>
      <div
        {...getStyles('trackWrapper')}
        data-with-target={finiteTarget !== undefined || undefined}
        aria-hidden
      >
        {rangeLabels}
        <div {...getStyles('track')}>
          {rangeBands}
          {finiteValue !== undefined && (
            <div
              {...getStyles('bar', {
                style: { ...getLengthStyle(barPercentage), ...getColorStyle(barColor) },
              })}
            />
          )}
          {finiteTarget !== undefined && (
            <div
              {...getStyles('target', {
                style: {
                  ...getPositionStyle(targetPercentage),
                  width: isVertical ? targetLength : targetThickness,
                  height: isVertical ? targetThickness : targetLength,
                  ...getColorStyle(targetColor),
                },
              })}
            />
          )}
        </div>
        {finiteValue !== undefined && (
          <div {...getStyles('barLabel', { style: getPositionStyle(barPercentage) })}>
            {formatValue(finiteValue)}
          </div>
        )}
        {finiteTarget !== undefined && (
          <div {...getStyles('targetLabel', { style: getPositionStyle(targetPercentage) })}>
            {formatValue(finiteTarget)}
          </div>
        )}
      </div>
    </Box>
  );

  if (!withTooltip) {
    return chart;
  }

  return (
    <Tooltip
      label={
        getTooltipLabel
          ? getTooltipLabel({ value, target: finiteTarget })
          : getDefaultTooltipLabel()
      }
      position={isVertical ? 'right' : 'top'}
      events={{ hover: true, focus: true, touch: true }}
    >
      {chart}
    </Tooltip>
  );
});

BulletChart.displayName = '@mantine/charts/BulletChart';
BulletChart.classes = classes;
BulletChart.varsResolver = varsResolver;
