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
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { getRowPositionsData } from './get-row-position-data';
import { useDimensions } from './use-dimensions';
import classes from './OverflowList.module.css';

export type OverflowListStylesNames = 'root';
export type OverflowListCssVariables = {
  root: '--test';
};

export interface OverflowListProps<T>
  extends BoxProps,
    StylesApiProps<OverflowListFactory>,
    ElementProps<'div', 'children'> {
  /** Array of items to display */
  data: T[];

  /** Function to render item */
  renderItem: (item: NoInfer<T>, index: number) => React.ReactNode;

  /** Function to render hidden items */
  renderOverflow: (items: NoInfer<T>[]) => React.ReactNode;

  /** Number of rows to display @default `1` */
  maxRows?: number;

  /** Maximum number of visible items @default `Infinity` */
  maxVisibleItems?: number;
}

export type OverflowListFactory = Factory<{
  props: OverflowListProps<any>;
  ref: HTMLDivElement;
  stylesNames: OverflowListStylesNames;
  vars: OverflowListCssVariables;
}>;

const defaultProps = {
  maxRows: 1,
  maxVisibleItems: Infinity,
} satisfies Partial<OverflowListProps<any>>;

const varsResolver = createVarsResolver<OverflowListFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const OverflowList = factory<OverflowListFactory>((_props, ref) => {
  const props = useProps('OverflowList', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    renderOverflow,
    renderItem,
    maxRows,
    maxVisibleItems,
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
    vars,
    varsResolver,
  });

  const [visibleCount, setVisibleCount] = useState(data.length);
  const [subtractCount, setSubtractCount] = useState(0);
  const [phase, setPhase] = useState<'normal' | 'measuring' | 'measuring-overflow-indicator'>(
    'normal'
  );

  const containerRef = useRef<HTMLElement>(null);
  const finalContainerRef = useMergedRef(containerRef, ref);
  const finalVisibleCount = visibleCount - subtractCount;

  const overflowCount = data.length - finalVisibleCount;
  const showOverflow = overflowCount > 0 && phase !== 'measuring';

  const finalRenderOverflow = renderOverflow?.(data.slice(finalVisibleCount));
  const overflowElement = showOverflow ? finalRenderOverflow : null;

  const overflowRef = useRef<HTMLElement>(null);
  const finalOverflowRef = useMergedRef(overflowRef, (overflowElement as any)?.ref);

  useIsomorphicEffect(() => {
    setPhase('measuring');
    setVisibleCount(data.length);
    setSubtractCount(0);
  }, [data.length, maxRows]);

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

  const containerDims = useDimensions(containerRef);

  useIsomorphicEffect(() => {
    if (phase === 'normal') {
      setPhase('measuring');
      setSubtractCount(0);
    }
  }, [containerDims]);

  const countVisibleItems = () => {
    const rowData = getRowPositionsData(containerRef, overflowRef);
    if (!rowData) {
      return;
    }

    const { itemsSizesMap, rowPositions } = rowData;

    if (data.length === 1) {
      const itemRef = itemsSizesMap[rowPositions[0]].elements.values().next().value;
      const containerWidth = containerRef.current?.getBoundingClientRect().width ?? 0;
      const itemWidth = itemRef?.getBoundingClientRect().width ?? 0;

      if (itemWidth > containerWidth) {
        setVisibleCount(0);
      } else {
        setVisibleCount(1);
      }

      return;
    }

    const visibleRowPositions = rowPositions.slice(0, maxRows);

    let fittingCount = visibleRowPositions.reduce((acc, position) => {
      return acc + itemsSizesMap[position].elements.size;
    }, 0);

    fittingCount = Math.min(fittingCount, maxVisibleItems);
    setVisibleCount(fittingCount);
  };

  const updateOverflowIndicator = () => {
    if (!overflowRef.current) {
      return false;
    }
    const rowData = getRowPositionsData(containerRef, overflowRef);
    if (!rowData) {
      return false;
    }

    const { rowPositions, itemsSizesMap } = rowData;

    const overflowRect = overflowRef.current.getBoundingClientRect();
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
    ? cloneElement(overflowElement as React.ReactElement<any>, { ref: finalOverflowRef })
    : null;

  let finalItems = data;
  if (maxVisibleItems) {
    finalItems = finalItems.slice(0, maxVisibleItems);
  }

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    contain: 'layout style',
  };

  return (
    <Box {...others} ref={finalContainerRef} style={containerStyles}>
      {finalItems.map((item, index) => {
        const isVisible = phase === 'measuring' || index < finalVisibleCount;
        if (!isVisible) {
          return null;
        }
        const itemComponent = renderItem(item, index);

        return <Fragment key={index}>{itemComponent}</Fragment>;
      })}

      {clonedOverflowElement}
    </Box>
  );
});

OverflowList.displayName = '@mantine/core/OverflowList';
OverflowList.classes = classes;
