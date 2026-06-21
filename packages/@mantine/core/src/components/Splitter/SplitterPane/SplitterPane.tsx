import type { SplitterPaneSize } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { useSplitterContext } from '../Splitter.context';
import classes from '../Splitter.module.css';

export type SplitterPaneStylesNames = 'pane';

export interface SplitterPaneProps
  extends BoxProps, CompoundStylesApiProps<SplitterPaneFactory>, ElementProps<'div'> {
  /** Initial size, a `number`/`%` is a flexible size (shares leftover space), `px`/`rem` is a fixed size. A bare number is treated as a percentage. */
  defaultSize: SplitterPaneSize;

  /** Minimum size in the same units as `defaultSize` @default 0 */
  min?: SplitterPaneSize;

  /** Maximum size in the same units as `defaultSize`, no limit by default */
  max?: SplitterPaneSize;

  /** Whether this pane can be collapsed @default false */
  collapsible?: boolean;

  /** Size below which the pane snaps to collapsed, defaults to `min` */
  collapseThreshold?: SplitterPaneSize;

  /** Pane content */
  children?: React.ReactNode;

  /** @internal Index set by parent */
  __index?: number;
}

export type SplitterPaneFactory = Factory<{
  props: SplitterPaneProps;
  ref: HTMLDivElement;
  stylesNames: SplitterPaneStylesNames;
  compound: true;
}>;

export const SplitterPane = factory<SplitterPaneFactory>((_props) => {
  const props = useProps('SplitterPane', null, _props);
  const {
    className,
    classNames,
    style,
    styles,
    vars,
    children,
    defaultSize,
    min,
    max,
    collapsible,
    collapseThreshold,
    __index,
    mod,
    ...others
  } = props;

  const ctx = useSplitterContext();
  const isCollapsed = ctx.collapsed[__index!];

  const sizeStyle = ctx.getPaneStyle(__index!);

  return (
    <Box
      {...ctx.getStyles('pane', {
        className,
        classNames,
        style: [sizeStyle, style],
        styles,
        props,
      })}
      mod={[{ collapsed: isCollapsed || undefined }, mod]}
      {...others}
    >
      {children}
    </Box>
  );
});

SplitterPane.classes = classes;
SplitterPane.displayName = '@mantine/core/SplitterPane';
