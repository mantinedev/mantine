import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../core';
import { useStatContext } from './Stat.context';

export type StatDiffStylesNames = 'diff' | 'diffIcon';

export type StatDiffDirection = 'up' | 'down' | 'none';

export interface StatDiffProps
  extends BoxProps, CompoundStylesApiProps<StatDiffFactory>, ElementProps<'div'> {
  /** Trend delta value. Its sign selects the direction: positive → up, negative → down, zero → neutral */
  value?: number;

  /** A function to format the delta text @default `` (value) => `${value > 0 ? '+' : ''}${value}%` `` */
  formatter?: (value: number) => React.ReactNode;

  /** If set, the up/down arrow is displayed next to the delta @default true */
  withIcon?: boolean;

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

export function getDiffDirection(value: number | undefined): StatDiffDirection {
  if (value == null || Number.isNaN(value) || value === 0) {
    return 'none';
  }

  return value > 0 ? 'up' : 'down';
}

export function defaultDiffFormatter(value: number): string {
  return `${value > 0 ? '+' : ''}${value}%`;
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
    children,
    mod,
    ...others
  } = props;

  const ctx = useStatContext();
  const direction = getDiffDirection(value);
  const content = children ?? (value != null ? (formatter ?? defaultDiffFormatter)(value) : null);

  return (
    <Box
      mod={[{ direction }, mod]}
      {...ctx.getStyles('diff', { className, style, classNames, styles })}
      {...others}
    >
      {withIcon && direction !== 'none' && (
        <svg
          viewBox="0 0 16 16"
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
    </Box>
  );
});

StatDiff.displayName = '@mantine/core/StatDiff';
