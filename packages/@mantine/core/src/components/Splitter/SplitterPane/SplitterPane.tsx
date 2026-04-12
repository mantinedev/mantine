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
  /** Initial size as percentage (0-100). All panes must sum to 100. */
  defaultSize: number;

  /** Minimum size percentage @default 0 */
  min?: number;

  /** Maximum size percentage @default 100 */
  max?: number;

  /** Whether this pane can be collapsed @default false */
  collapsible?: boolean;

  /** Size below which the pane snaps to collapsed (percentage), defaults to `min` */
  collapseThreshold?: number;

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
  const size = ctx.sizes[__index!];
  const isCollapsed = ctx.collapsed[__index!];

  const sizeStyle = { flexBasis: `${size}%` };

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
