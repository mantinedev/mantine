// Originally based on https://github.com/Eliav2/react-responsive-overflow-list (MIT License)
// Contains the modified version adapted for Mantine
import { Fragment, isValidElement, useMemo, useRef, useState } from 'react';
import { useIsomorphicEffect, useMergedRef } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  Factory,
  genericFactory,
  getSpacing,
  MantineSpacing,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { getFittingCount, SIZE_TOLERANCE } from './get-fitting-count';
import classes from './OverflowList.module.css';

export type OverflowListStylesNames = 'root';
export type OverflowListCssVariables = {
  root: '--ol-gap';
};

export interface OverflowListProps<T = any>
  extends BoxProps, StylesApiProps<OverflowListFactory>, ElementProps<'div', 'children'> {
  /** Array of items to display */
  data: T[];

  /** Function to render item, must return a single element. Absolutely positioned and hidden siblings (for example, a dropdown with `withinPortal={false}`) are ignored. The element itself must not be hidden (for example, with `hiddenFrom`): filter `data` instead. */
  renderItem: (item: T, index: number) => React.ReactNode;

  /** Function to render hidden items. A single element is rendered as is, any other node (string, number, fragment, array) is wrapped in a `div`. The indicator must render a single root node; absolutely positioned and hidden siblings (for example, a dropdown with `withinPortal={false}`) are ignored. Auto margins (for example, `ml="auto"`) are not counted as part of the indicator width; in browsers without `computedStyleMap` (Firefox) only inline auto margins are detected. */
  renderOverflow: (items: T[]) => React.ReactNode;

  /** Number of rows to display @default 1 */
  maxRows?: number;

  /** Maximum number of visible items @default Infinity */
  maxVisibleItems?: number;

  /** Key of `theme.spacing` or any valid CSS value for `gap`, numbers are converted to rem @default 'xs' */
  gap?: MantineSpacing;

  /** Direction from which items are collapsed when they overflow, `'end'` collapses last items, `'start'` collapses first items @default 'end' */
  collapseFrom?: 'start' | 'end';

  /** A function to resolve a unique key for each item. Used to detect when the contents of `data`
   * change (for example when items are reordered while the length stays the same) so the
   * visible/overflow split can be recomputed. Required to detect reordering when `data` contains
   * objects; for primitive items (strings, numbers) the item value is used by default. */
  getItemKey?: (item: T, index: number) => React.Key;
}

export type OverflowListFactory = Factory<{
  props: OverflowListProps<any>;
  ref: HTMLDivElement;
  stylesNames: OverflowListStylesNames;
  vars: OverflowListCssVariables;
  signature: <T = any>(props: OverflowListProps<T>) => React.JSX.Element;
}>;

const defaultProps = {
  maxRows: 1,
  maxVisibleItems: Infinity,
  collapseFrom: 'end',
} satisfies Partial<OverflowListProps<any>>;

const varsResolver = createVarsResolver<OverflowListFactory>((_, { gap }) => ({
  root: {
    '--ol-gap': getSpacing(gap),
  },
}));

function getDataSignature<T>(
  data: T[],
  getItemKey: ((item: T, index: number) => React.Key) | undefined
): string {
  return data
    .map((item, index) => {
      if (getItemKey) {
        return getItemKey(item, index);
      }
      return item !== null && (typeof item === 'object' || typeof item === 'function')
        ? index
        : String(item);
    })
    .join('\u0000');
}

function getOverflowNode(node: React.ReactNode) {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return null;
  }

  if (isValidElement(node) && node.type !== Fragment) {
    return node;
  }

  return <div>{node}</div>;
}

function getContentWidth(element: HTMLElement) {
  const style = getComputedStyle(element);
  const horizontalSpace = [
    style.paddingLeft,
    style.paddingRight,
    style.borderLeftWidth,
    style.borderRightWidth,
  ].reduce((acc, value) => acc + (parseFloat(value) || 0), 0);

  return element.getBoundingClientRect().width - horizontalSpace;
}

function isAutoMargin(element: HTMLElement, side: 'left' | 'right') {
  const property = `margin-${side}`;
  if (typeof element.computedStyleMap === 'function') {
    return element.computedStyleMap().get(property)?.toString() === 'auto';
  }

  return element.style.getPropertyValue(property) === 'auto';
}

function getMargin(element: HTMLElement, side: 'left' | 'right', value: string) {
  return isAutoMargin(element, side) ? 0 : parseFloat(value) || 0;
}

function isFlexItem(element: HTMLElement) {
  const style = getComputedStyle(element);
  return style.display !== 'none' && style.position !== 'absolute' && style.position !== 'fixed';
}

function getOuterWidth(element: HTMLElement) {
  const style = getComputedStyle(element);
  return (
    element.getBoundingClientRect().width +
    getMargin(element, 'left', style.marginLeft) +
    getMargin(element, 'right', style.marginRight)
  );
}

interface ListLayout {
  root: HTMLElement;
  items: HTMLElement[];
  indicator: HTMLElement | null;
}

interface LayoutSizes {
  containerWidth: number;
  gap: number;
  itemWidths: number[];
  indicatorWidth: number | null;
}

function readLayoutSizes({ root, items, indicator }: ListLayout): LayoutSizes {
  return {
    containerWidth: getContentWidth(root),
    gap: parseFloat(getComputedStyle(root).columnGap) || 0,
    itemWidths: items.map(getOuterWidth),
    indicatorWidth: indicator ? getOuterWidth(indicator) : null,
  };
}

function isSameSize(a: number | null, b: number | null) {
  return a === null || b === null ? a === b : Math.abs(a - b) <= SIZE_TOLERANCE;
}

function isSameLayout(a: LayoutSizes, b: LayoutSizes) {
  return (
    isSameSize(a.containerWidth, b.containerWidth) &&
    isSameSize(a.gap, b.gap) &&
    isSameSize(a.indicatorWidth, b.indicatorWidth) &&
    a.itemWidths.length === b.itemWidths.length &&
    a.itemWidths.every((width, index) => isSameSize(width, b.itemWidths[index]))
  );
}

export const OverflowList = genericFactory<OverflowListFactory>((_props) => {
  const props = useProps('OverflowList', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    data,
    renderOverflow,
    renderItem,
    maxRows,
    maxVisibleItems,
    collapseFrom,
    getItemKey,
    gap,
    mod,
    ref,
    ...others
  } = props;

  const getStyles = useStyles<OverflowListFactory>({
    name: 'OverflowList',
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

  const [visibleCount, setVisibleCount] = useState(data.length);
  const [phase, setPhase] = useState<'measure' | 'verify' | 'idle'>('measure');
  const containerRef = useRef<HTMLDivElement>(null);
  const rootRef = useMergedRef(containerRef, ref);
  const measurementRef = useRef<LayoutSizes | null>(null);
  const observerRef = useRef<{ observer: ResizeObserver; observed: WeakSet<Element> } | null>(null);
  const dataKey = useMemo(() => getDataSignature(data, getItemKey), [data, getItemKey]);

  const isCollapseStart = collapseFrom === 'start';
  const visibleLimit = Number.isFinite(maxVisibleItems)
    ? Math.max(0, Math.floor(maxVisibleItems))
    : Infinity;
  const cappedCount = Math.min(data.length, visibleLimit);
  const committedCount = Math.min(visibleCount, cappedCount);
  const renderedCount = phase === 'measure' ? cappedCount : committedCount;
  const renderedStart = isCollapseStart ? data.length - renderedCount : 0;
  const renderedItems = data.slice(renderedStart, renderedStart + renderedCount);
  const overflowItems = isCollapseStart
    ? data.slice(0, data.length - committedCount)
    : data.slice(committedCount);
  const overflowNode =
    overflowItems.length > 0 ? getOverflowNode(renderOverflow(overflowItems)) : null;

  const getLayout = (): ListLayout | null => {
    const root = containerRef.current;
    if (!root) {
      return null;
    }

    const children = (Array.from(root.children) as HTMLElement[]).filter(isFlexItem);
    const indicator =
      children.length > renderedCount
        ? isCollapseStart
          ? children[0]
          : children[children.length - 1]
        : null;

    return { root, indicator, items: children.filter((child) => child !== indicator) };
  };

  const fit = (measurement: LayoutSizes, indicatorWidth: number | null) =>
    getFittingCount({
      itemWidths: measurement.itemWidths,
      containerWidth: measurement.containerWidth,
      gap: measurement.gap,
      totalCount: data.length,
      indicatorWidth,
      maxRows,
      collapseFrom,
    });

  const measure = () => {
    const layout = getLayout();
    if (!layout) {
      return;
    }

    const measurement = readLayoutSizes(layout);
    measurementRef.current = measurement;

    const count = fit(measurement, null);
    setVisibleCount(count);
    setPhase(count < data.length ? 'verify' : 'idle');
  };

  const verify = () => {
    const layout = getLayout();
    const measurement = measurementRef.current;
    if (!layout || !measurement) {
      setPhase('idle');
      return;
    }

    const count = fit(measurement, layout.indicator ? getOuterWidth(layout.indicator) : null);
    if (count < committedCount) {
      setVisibleCount(count);
    } else {
      setPhase('idle');
    }
  };

  useIsomorphicEffect(() => {
    setPhase('measure');
  }, [dataKey, maxRows, visibleLimit, collapseFrom, gap]);

  useIsomorphicEffect(() => {
    if (phase === 'measure') {
      measure();
    } else if (phase === 'verify') {
      verify();
    }
  }, [phase, visibleCount]);

  useIsomorphicEffect(() => {
    const layout = getLayout();
    if (phase !== 'idle' || !layout || typeof ResizeObserver === 'undefined') {
      return undefined;
    }

    const settled = readLayoutSizes(layout);
    let frame = 0;
    const observer = new ResizeObserver(() => {
      const current = getLayout();
      if (current && !isSameLayout(readLayoutSizes(current), settled)) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => setPhase('measure'));
      }
    });

    observer.observe(layout.root);
    observerRef.current = { observer, observed: new WeakSet() };

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      observerRef.current = null;
    };
  }, [phase]);

  useIsomorphicEffect(() => {
    const current = observerRef.current;
    const root = containerRef.current;
    if (!current || !root) {
      return;
    }

    Array.from(root.children).forEach((child) => {
      if (!current.observed.has(child)) {
        current.observed.add(child);
        current.observer.observe(child);
      }
    });
  });

  return (
    <Box
      ref={rootRef}
      {...getStyles('root')}
      mod={[{ measuring: phase !== 'idle' }, mod]}
      {...others}
    >
      {isCollapseStart && overflowNode}

      {renderedItems.map((item, index) => {
        const dataIndex = renderedStart + index;
        return <Fragment key={dataIndex}>{renderItem(item, dataIndex)}</Fragment>;
      })}

      {!isCollapseStart && overflowNode}
    </Box>
  );
});

OverflowList.displayName = '@mantine/core/OverflowList';
OverflowList.classes = classes;
OverflowList.varsResolver = varsResolver;

export namespace OverflowList {
  export type Props = OverflowListProps;
  export type Factory = OverflowListFactory;
  export type StylesNames = OverflowListStylesNames;
  export type CssVariables = OverflowListCssVariables;
}
