import { Children, Fragment, isValidElement } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  MantineColor,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { NumberFormatter } from '../NumberFormatter';
import { RollingNumber } from '../RollingNumber';
import { Skeleton } from '../Skeleton';
import { getStatSizeVars } from './get-stat-vars';
import { StatProvider } from './Stat.context';
import { StatCountdown } from './StatCountdown';
import { StatDiff, StatDiffFactory, StatDiffProps, StatDiffStylesNames } from './StatDiff';
import { StatIcon, StatIconFactory, StatIconProps, StatIconStylesNames } from './StatIcon';
import { StatLabel, StatLabelFactory, StatLabelProps, StatLabelStylesNames } from './StatLabel';
import { StatValue, StatValueFactory, StatValueProps, StatValueStylesNames } from './StatValue';
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
  /** Caption displayed above the value @category appearance */
  label?: React.ReactNode;

  /** The metric value @category state */
  value?: number | string;

  /** Limits the number of digits displayed after the decimal point @category appearance */
  decimalScale?: number;

  /** If set, trailing zeros are added to match `decimalScale` @default false @category appearance */
  fixedDecimalScale?: boolean;

  /** Character used as a decimal separator @default '.' @category appearance */
  decimalSeparator?: string;

  /** Character used to separate thousands, set to `true` for `,` @category appearance */
  thousandSeparator?: string | boolean;

  /** Content rendered before the value (units, icons, currency) @category appearance */
  prefix?: React.ReactNode;

  /** Content rendered after the value (units, icons, `%`) @category appearance */
  suffix?: React.ReactNode;

  /** A function to fully customize the value rendering, overrides `decimalScale`, separators and animation @category appearance */
  formatter?: (value: number | string) => React.ReactNode;

  /** Trend delta. Positive renders an up indicator, negative a down indicator, both colored @category state */
  diff?: number;

  /** A function to format the rendered delta @default `` (value) => `${value > 0 ? '+' : ''}${value}%` `` @category appearance */
  diffFormatter?: (diff: number) => React.ReactNode;

  /** If set, the up/down arrow is displayed next to the delta @default true @category appearance */
  withDiffIcon?: boolean;

  /** If set, value changes are animated with `RollingNumber` (only applies to numeric values) @default false @category appearance */
  animate?: boolean;

  /** Animation duration in milliseconds, applied when `animate` is set @default 600 @category appearance */
  animationDuration?: number;

  /** If set, a `Skeleton` is displayed in place of the value @default false @category appearance */
  loading?: boolean;

  /** Key of `theme.colors` or any valid CSS color to set the value color @category appearance */
  color?: MantineColor;

  /** Leading icon or illustration displayed next to the value @category appearance */
  icon?: React.ReactNode;

  /** Controls label, value and icon sizes @default 'md' @category appearance */
  size?: MantineSize;

  /** Custom content, replaces the default composition built from shorthand props @category appearance */
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

const varsResolver = createVarsResolver<StatFactory>((_, { size }) => ({
  root: getStatSizeVars(size),
}));

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

export const Stat = factory<StatFactory>((_props) => {
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
      return <Skeleton height="1.15em" width="3.5em" />;
    }

    if (formatter && value !== undefined) {
      return formatter(value);
    }

    if (value === undefined) {
      return null;
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
  const showValue = loading || value !== undefined || !!formatter;

  const bodyContent = parts ? (
    parts.body
  ) : (
    <>
      {label != null && <StatLabel>{label}</StatLabel>}
      {showValue && (
        <StatValue
          prefix={loading ? undefined : prefix}
          suffix={loading ? undefined : suffix}
          c={color}
        >
          {renderValue()}
        </StatValue>
      )}
      {diff !== undefined && (
        <StatDiff value={diff} formatter={diffFormatter} withIcon={withDiffIcon} />
      )}
    </>
  );

  return (
    <StatProvider value={{ getStyles, unstyled }}>
      <Box {...getStyles('root')} mod={[{ loading }, mod]} {...others}>
        {iconNode}
        <div {...getStyles('body')}>{bodyContent}</div>
      </Box>
    </StatProvider>
  );
});

Stat.classes = classes;
Stat.varsResolver = varsResolver;
Stat.displayName = '@mantine/core/Stat';
Stat.Label = StatLabel;
Stat.Value = StatValue;
Stat.Diff = StatDiff;
Stat.Icon = StatIcon;
Stat.Countdown = StatCountdown;

export namespace Stat {
  export type Props = StatProps;
  export type StylesNames = StatStylesNames;
  export type CssVariables = StatCssVariables;
  export type Factory = StatFactory;

  export namespace Label {
    export type Props = StatLabelProps;
    export type StylesNames = StatLabelStylesNames;
    export type Factory = StatLabelFactory;
  }

  export namespace Value {
    export type Props = StatValueProps;
    export type StylesNames = StatValueStylesNames;
    export type Factory = StatValueFactory;
  }

  export namespace Diff {
    export type Props = StatDiffProps;
    export type StylesNames = StatDiffStylesNames;
    export type Factory = StatDiffFactory;
  }

  export namespace Icon {
    export type Props = StatIconProps;
    export type StylesNames = StatIconStylesNames;
    export type Factory = StatIconFactory;
  }
}
