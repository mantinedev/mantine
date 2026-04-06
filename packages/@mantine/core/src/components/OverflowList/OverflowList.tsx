// Originally based on https://github.com/Eliav2/react-responsive-overflow-list (MIT License)
// Contains the modified version adapted for Mantine
import { cloneElement, useRef, useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
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
import { getRowPositionsData } from './get-row-position-data';
import { useDimensions } from './use-dimensions';
import classes from './OverflowList.module.css';

export type OverflowListStylesNames = 'root';
export type OverflowListCssVariables = {
  root: '--ol-gap';
};

export interface OverflowListProps<T = any>
  extends BoxProps, StylesApiProps<OverflowListFactory>, ElementProps<'div', 'children'> {
  /** Array of items to display */
  data: T[];

  /** Function to render item */
  renderItem: (item: T, index: number) => React.ReactNode;

  /** Function to render hidden items */
  renderOverflow: (items: T[]) => React.ReactNode;

  /** Number of rows to display @default 1 */
  maxRows?: number;

  /** Maximum number of visible items @default Infinity */
  maxVisibleItems?: number;

  /** Key of `theme.spacing` or any valid CSS value for `gap`, numbers are converted to rem @default 'xs' */
  gap?: MantineSpacing;

  /** Direction from which items are collapsed when they overflow, `'end'` collapses last items, `'start'` collapses first items @default 'end' */
  collapseFrom?: 'start' | 'end';
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
} satisfies Partial<OverflowListProps<any>>;

const varsResolver = createVarsResolver<OverflowListFactory>((_, { gap }) => ({
  root: {
    '--ol-gap': getSpacing(gap),
  },
}));

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
  const [subtractCount, setSubtractCount] = useState(0);
  const [phase, setPhase] = useState<'normal' | 'measuring' | 'measuring-overflow-indicator'>(
    'normal'
  );

  const containerRef = useRef<HTMLElement>(null);
  const rootRef = useMergedRef(containerRef, ref);
  const finalVisibleCount = visibleCount - subtractCount;
  const overflowCount = data.length - finalVisibleCount;
  const showOverflow = overflowCount > 0 && phase !== 'measuring';
  const isCollapseStart = collapseFrom === 'start';
  const overflowItems = isCollapseStart
    ? data.slice(0, data.length - finalVisibleCount)
    : data.slice(finalVisibleCount);
  const overflowElement = showOverflow ? renderOverflow?.(overflowItems) : null;

  const _overflowRef = useRef<HTMLElement>(null);
  const overflowRef = useMergedRef(_overflowRef, (overflowElement as any)?.ref);
  const dimensions = useDimensions(containerRef);

  useIsomorphicEffect(() => {
    setPhase('measuring');
    setVisibleCount(data.length);
    setSubtractCount(0);
  }, [data.length, maxRows, collapseFrom]);

  useIsomorphicEffect(() => {
    if (phase === 'measuring') {
      countVisibleItems();
      setPhase('measuring-overflow-indicator');
    }
  }, [phase]);

  useIsomorphicEffect(() => {
    if (phase === 'measuring-overflow-indicator') {
      const updateWasNeeded = updateOverflowIndicator();
      if (!updateWasNeeded) {
        setPhase('normal');
      }
    }
  }, [phase, subtractCount]);

  useIsomorphicEffect(() => {
    if (phase === 'normal') {
      setPhase('measuring');
      setSubtractCount(0);
    }
  }, [dimensions]);

  const fitsInRows = (itemWidths: number[], containerWidth: number, columnGap: number) => {
    let rows = 1;
    let rowWidth = 0;

    for (const width of itemWidths) {
      const needed = rowWidth > 0 ? width + columnGap : width;

      if (rowWidth + needed > containerWidth && rowWidth > 0) {
        rows++;
        if (rows > maxRows!) {
          return false;
        }
        rowWidth = width;
      } else {
        rowWidth += needed;
      }
    }

    return true;
  };

  const countVisibleItems = () => {
    const rowData = getRowPositionsData(containerRef, _overflowRef);
    if (!rowData) {
      return;
    }

    if (isCollapseStart) {
      const containerWidth = containerRef.current?.getBoundingClientRect().width ?? 0;
      const columnGap = parseFloat(getComputedStyle(containerRef.current!).columnGap) || 0;
      const children = rowData.children;
      const widths = children.map((child) => child.getBoundingClientRect().width);

      let count = 0;
      for (let i = widths.length - 1; i >= 0; i--) {
        const candidate = widths.slice(i);
        if (!fitsInRows(candidate, containerWidth, columnGap)) {
          break;
        }
        count = candidate.length;
      }

      count = Math.min(count, maxVisibleItems!);
      setVisibleCount(count);
      return;
    }

    if (data.length === 1) {
      const itemRef = rowData.itemsSizesMap[rowData.rowPositions[0]].elements.values().next().value;
      const containerWidth = containerRef.current?.getBoundingClientRect().width ?? 0;
      const itemWidth = itemRef?.getBoundingClientRect().width ?? 0;

      if (itemWidth > containerWidth) {
        setVisibleCount(0);
      } else {
        setVisibleCount(1);
      }

      return;
    }

    const visibleRowPositions = rowData.rowPositions.slice(0, maxRows);

    let fittingCount = visibleRowPositions.reduce((acc, position) => {
      return acc + rowData.itemsSizesMap[position].elements.size;
    }, 0);

    fittingCount = Math.min(fittingCount, maxVisibleItems);
    setVisibleCount(fittingCount);
  };

  const updateOverflowIndicator = () => {
    if (!_overflowRef.current) {
      return false;
    }
    const rowData = getRowPositionsData(containerRef, _overflowRef);
    if (!rowData) {
      return false;
    }

    const { rowPositions, itemsSizesMap } = rowData;

    if (isCollapseStart) {
      const containerWidth = containerRef.current?.getBoundingClientRect().width ?? 0;
      const columnGap = parseFloat(getComputedStyle(containerRef.current!).columnGap) || 0;
      const overflowWidth = _overflowRef.current.getBoundingClientRect().width;
      const children = rowData.children;
      const itemWidths = [
        overflowWidth,
        ...children.map((child) => child.getBoundingClientRect().width),
      ];

      if (!fitsInRows(itemWidths, containerWidth, columnGap)) {
        setSubtractCount((c) => c + 1);
        return true;
      }

      return false;
    }

    const overflowRect = _overflowRef.current.getBoundingClientRect();
    const overflowMiddleY = overflowRect.top + overflowRect.height / 2;
    const lastRowTop = rowPositions[rowPositions.length - 1];
    const lastRow = itemsSizesMap[lastRowTop];

    if (overflowMiddleY > lastRow.bottom) {
      setSubtractCount((c) => c + 1);
      return true;
    }

    return false;
  };

  const clonedOverflowElement = overflowElement
    ? cloneElement(overflowElement as React.ReactElement<any>, { ref: overflowRef })
    : null;

  let finalItems = data;
  if (maxVisibleItems) {
    finalItems = isCollapseStart
      ? finalItems.slice(-maxVisibleItems!)
      : finalItems.slice(0, maxVisibleItems);
  }

  return (
    <Box ref={rootRef} {...getStyles('root')} {...others}>
      {isCollapseStart && clonedOverflowElement}

      {finalItems.map((item, index) => {
        const isVisible =
          phase === 'measuring' ||
          (isCollapseStart
            ? index >= finalItems.length - finalVisibleCount
            : index < finalVisibleCount);
        if (!isVisible) {
          return null;
        }
        const itemComponent = renderItem(item, index);

        return <Fragment key={index}>{itemComponent}</Fragment>;
      })}

      {!isCollapseStart && clonedOverflowElement}
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
