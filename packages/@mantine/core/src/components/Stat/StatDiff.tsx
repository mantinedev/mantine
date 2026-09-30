import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../core';
import { VisuallyHidden } from '../VisuallyHidden';
import { useStatContext } from './Stat.context';

export type StatDiffStylesNames = 'diff' | 'diffIcon';

export type StatDiffDirection = 'up' | 'down' | 'none';

export interface StatDiffLabels {
  /** Text announced to screen readers after a positive delta @default 'increase' */
  increase?: string;

  /** Text announced to screen readers after a negative delta @default 'decrease' */
  decrease?: string;

  /** Text announced to screen readers after a zero delta @default 'no change' */
  neutral?: string;
}

export interface StatDiffProps
  extends BoxProps, CompoundStylesApiProps<StatDiffFactory>, ElementProps<'div'> {
  /** Trend delta value. Its sign selects the direction: positive → up, negative → down, zero → neutral. With the default formatter the sign of the rounded delta is used, so a delta that rounds to `0%` is neutral */
  value?: number;

  /** A function to format the delta text. By default the delta is rounded to at most 1 decimal and rendered as a signed percentage, for example `+12.4%` */
  formatter?: (value: number) => React.ReactNode;

  /** If set, the up/down arrow is displayed next to the delta @default true */
  withIcon?: boolean;

  /** Visually hidden direction texts announced after the delta, used to localize the default `increase`, `decrease` and `no change` */
  labels?: StatDiffLabels;

  /** Custom content, replaces the formatted delta */
  children?: React.ReactNode;
}

export type StatDiffFactory = Factory<{
  props: StatDiffProps;
  ref: HTMLDivElement;
  stylesNames: StatDiffStylesNames;
  compound: true;
}>;

const defaultProps = {
  withIcon: true,
} satisfies Partial<StatDiffProps>;

const defaultLabels: Required<StatDiffLabels> = {
  increase: 'increase',
  decrease: 'decrease',
  neutral: 'no change',
};

function getDiffDirection(value: number | undefined): StatDiffDirection {
  if (value == null || !Number.isFinite(value) || value === 0) {
    return 'none';
  }

  return value > 0 ? 'up' : 'down';
}

function roundDiff(value: number) {
  const rounded = (Math.sign(value) * Math.round(Math.abs(value) * 10)) / 10;
  return rounded === 0 ? 0 : rounded;
}

function defaultDiffFormatter(value: number): string {
  const rounded = roundDiff(value);
  return `${rounded > 0 ? '+' : ''}${rounded}%`;
}

export const StatDiff = factory<StatDiffFactory>((_props) => {
  const props = useProps('StatDiff', defaultProps, _props);
  const {
    className,
    style,
    classNames,
    styles,
    vars,
    value,
    formatter,
    withIcon,
    labels,
    children,
    mod,
    ...others
  } = props;

  const ctx = useStatContext();
  const hasValue = value != null && Number.isFinite(value);
  const usesDefaultFormatter = children == null && !formatter;
  const direction = getDiffDirection(usesDefaultFormatter && hasValue ? roundDiff(value) : value);
  const directionLabels = { ...defaultLabels, ...labels };
  const directionLabel =
    direction === 'up'
      ? directionLabels.increase
      : direction === 'down'
        ? directionLabels.decrease
        : directionLabels.neutral;

  const content =
    children ??
    (hasValue ? <bdi dir="ltr">{(formatter ?? defaultDiffFormatter)(value)}</bdi> : null);

  return (
    <Box
      mod={[{ direction }, mod]}
      {...ctx.getStyles('diff', { className, style, classNames, styles })}
      {...others}
    >
      {withIcon && direction !== 'none' && (
        <svg
          viewBox="0 0 16 16"
          width="1em"
          height="1em"
          aria-hidden="true"
          {...ctx.getStyles('diffIcon', { classNames, styles })}
        >
          <path
            d={direction === 'up' ? 'M8 4 L13 11 L3 11 Z' : 'M3 5 L13 5 L8 12 Z'}
            fill="currentColor"
          />
        </svg>
      )}
      {content}
      {hasValue && <VisuallyHidden>{` ${directionLabel}`}</VisuallyHidden>}
    </Box>
  );
});

StatDiff.displayName = '@mantine/core/StatDiff';
