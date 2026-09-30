import { Children, Fragment, isValidElement } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSize,
  MantineColor,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { NumberFormatter } from '../NumberFormatter';
import { RollingNumber } from '../RollingNumber';
import { Skeleton } from '../Skeleton';
import { StatProvider } from './Stat.context';
import type { StatCountdown } from './StatCountdown';
import { StatDiff, StatDiffLabels, StatDiffStylesNames } from './StatDiff';
import { StatIcon, StatIconStylesNames } from './StatIcon';
import { StatLabel, StatLabelStylesNames } from './StatLabel';
import { StatValue, StatValueStylesNames } from './StatValue';
import classes from './Stat.module.css';

export type StatStylesNames =
  | 'root'
  | 'body'
  | StatIconStylesNames
  | StatLabelStylesNames
  | StatValueStylesNames
  | StatDiffStylesNames;

export type StatCssVariables = {
  root:
    | '--stat-gap'
    | '--stat-value-fz'
    | '--stat-label-fz'
    | '--stat-diff-fz'
    | '--stat-icon-size';
};

export interface StatProps
  extends BoxProps, StylesApiProps<StatFactory>, ElementProps<'div', 'prefix' | 'color'> {
  /** Caption displayed above the value */
  label?: React.ReactNode;

  /** The metric value. Numbers and numeric strings are formatted with `NumberFormatter`, other strings (`'12k'`, `'N/A'`) are rendered as is */
  value?: number | string;

  /** Limits the number of digits displayed after the decimal point */
  decimalScale?: number;

  /** If set, trailing zeros are added to match `decimalScale` @default false */
  fixedDecimalScale?: boolean;

  /** Character used as a decimal separator @default '.' */
  decimalSeparator?: string;

  /** Character used to separate thousands, set to `true` for `,` */
  thousandSeparator?: string | boolean;

  /** Content rendered before the value (units, icons, currency) */
  prefix?: React.ReactNode;

  /** Content rendered after the value (units, icons, `%`) */
  suffix?: React.ReactNode;

  /** A function to fully customize the value rendering, overrides `decimalScale`, separators and animation */
  formatter?: (value: number | string) => React.ReactNode;

  /** Trend delta. Positive renders an up indicator, negative a down indicator, both colored. With the default formatter a delta that rounds to `0%` is neutral */
  diff?: number;

  /** A function to format the rendered delta. By default the delta is rounded to at most 1 decimal and rendered as a signed percentage, for example `+12.4%` */
  diffFormatter?: (diff: number) => React.ReactNode;

  /** Visually hidden direction texts announced after the delta, used to localize the default `increase`, `decrease` and `no change` */
  diffLabels?: StatDiffLabels;

  /** If set, the up/down arrow is displayed next to the delta @default true */
  withDiffIcon?: boolean;

  /** If set, value changes are animated with `RollingNumber` (only applies to numeric values) @default false */
  animate?: boolean;

  /** Animation duration in milliseconds, applied when `animate` is set @default 600 */
  animationDuration?: number;

  /** If set, a `Skeleton` is displayed in place of the value, the diff is hidden and `aria-busy` is set on the root @default false */
  loading?: boolean;

  /** Key of `theme.colors` or any valid CSS color to set the value color */
  color?: MantineColor;

  /** Leading icon or illustration displayed next to the value */
  icon?: React.ReactNode;

  /** Controls label, value, diff and icon sizes and the gap between the icon and the body @default 'md' */
  size?: MantineSize;

  /** Custom content, replaces the default composition built from shorthand props */
  children?: React.ReactNode;
}

export type StatFactory = Factory<{
  props: StatProps;
  ref: HTMLDivElement;
  stylesNames: StatStylesNames;
  vars: StatCssVariables;
  staticComponents: {
    Label: typeof StatLabel;
    Value: typeof StatValue;
    Diff: typeof StatDiff;
    Icon: typeof StatIcon;
    Countdown: typeof StatCountdown;
  };
}>;

const defaultProps = {
  size: 'md',
  animate: false,
  loading: false,
  withDiffIcon: true,
} satisfies Partial<StatProps>;

export const varsResolver = createVarsResolver<StatFactory>((_, { size }) => ({
  root: {
    '--stat-gap': getSize(size, 'stat-gap'),
    '--stat-value-fz': getSize(size, 'stat-value-fz'),
    '--stat-label-fz': getSize(size, 'stat-label-fz'),
    '--stat-diff-fz': getSize(size, 'stat-diff-fz'),
    '--stat-icon-size': getSize(size, 'stat-icon-size'),
  },
}));

const NUMERIC_STRING_REGEX = /^[+-]?(\d+\.?\d*|\.\d+)$/;

function isFormattableValue(value: number | string) {
  return typeof value === 'number' || NUMERIC_STRING_REGEX.test(value.trim());
}

function isStatIcon(child: React.ReactNode): boolean {
  return (
    isValidElement(child) &&
    (child.type === StatIcon || (child.type as any)?.displayName === '@mantine/core/StatIcon')
  );
}

function collectStatParts(children: React.ReactNode) {
  const body: React.ReactNode[] = [];
  let icon: React.ReactNode = null;

  const walk = (nodes: React.ReactNode) => {
    Children.forEach(nodes, (child) => {
      if (isValidElement(child) && child.type === Fragment) {
        walk((child.props as { children?: React.ReactNode }).children);
      } else if (isStatIcon(child)) {
        icon = child;
      } else if (child != null && child !== false) {
        body.push(child);
      }
    });
  };

  walk(children);
  return { icon, body };
}

export const StatBase = factory<StatFactory>((_props) => {
  const props = useProps('Stat', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    label,
    value,
    decimalScale,
    fixedDecimalScale,
    decimalSeparator,
    thousandSeparator,
    prefix,
    suffix,
    formatter,
    diff,
    diffFormatter,
    diffLabels,
    withDiffIcon,
    animate,
    animationDuration,
    loading,
    color,
    icon,
    children,
    mod,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<StatFactory>({
    name: 'Stat',
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

  const parts = children != null ? collectStatParts(children) : null;

  const renderValue = () => {
    if (loading) {
      return (
        <Skeleton width="3.5em" flex="none">
          <span aria-hidden="true">0000</span>
        </Skeleton>
      );
    }

    if (value === undefined) {
      return null;
    }

    if (formatter) {
      return formatter(value);
    }

    if (typeof value === 'number' && !Number.isFinite(value)) {
      return null;
    }

    if (!isFormattableValue(value)) {
      return value;
    }

    if (animate && typeof value === 'number') {
      return (
        <RollingNumber
          value={value}
          decimalScale={decimalScale}
          fixedDecimalScale={fixedDecimalScale}
          decimalSeparator={decimalSeparator}
          thousandSeparator={thousandSeparator}
          animationDuration={animationDuration}
        />
      );
    }

    return (
      <NumberFormatter
        value={value}
        decimalScale={decimalScale}
        fixedDecimalScale={fixedDecimalScale}
        decimalSeparator={decimalSeparator}
        thousandSeparator={thousandSeparator}
      />
    );
  };

  const iconNode = parts ? parts.icon : icon != null ? <StatIcon>{icon}</StatIcon> : null;
  const showValue = loading || value !== undefined;
  const showDiff = !loading && diff !== undefined && Number.isFinite(diff);

  const bodyContent = parts ? (
    parts.body
  ) : (
    <>
      {label != null && <StatLabel>{label}</StatLabel>}
      {showValue && (
        <StatValue prefix={prefix} suffix={suffix} c={color}>
          {renderValue()}
        </StatValue>
      )}
      {showDiff && (
        <StatDiff
          value={diff}
          formatter={diffFormatter}
          withIcon={withDiffIcon}
          labels={diffLabels}
        />
      )}
    </>
  );

  return (
    <StatProvider value={{ getStyles, unstyled }}>
      <Box
        {...getStyles('root')}
        mod={[{ loading }, mod]}
        aria-busy={loading || undefined}
        {...others}
      >
        {iconNode}
        <div {...getStyles('body')}>{bodyContent}</div>
      </Box>
    </StatProvider>
  );
});
