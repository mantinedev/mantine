import React, { useEffect, useRef } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { ScrollArea, ScrollAreaProps } from '../ScrollArea';
import { StickyTableHeader } from './StickyTableHeader';
import classes from './Table.module.css';

export type TableScrollContainerStylesNames =
  | 'scrollContainer'
  | 'scrollContainerInner'
  | 'stickyHeader';

export type TableScrollContainerCssVariables = {
  scrollContainer: '--table-min-width' | '--table-overflow';
};

export interface TableScrollContainerProps
  extends BoxProps,
    StylesApiProps<TableScrollContainerFactory>,
    ElementProps<'div'> {
  minWidth?: React.CSSProperties['minWidth'];
  type?: 'native' | 'scrollarea';
  stickyHeader?: boolean;
  stickyHeaderOffset?: number;
}

export type TableScrollContainerFactory = Factory<{
  props: TableScrollContainerProps;
  ref: HTMLDivElement;
  stylesNames: TableScrollContainerStylesNames;
  vars: TableScrollContainerCssVariables;
}>;

const defaultProps: Partial<TableScrollContainerProps> = {
  type: 'scrollarea',
  stickyHeader: false,
  stickyHeaderOffset: 0,
};

const varsResolver = createVarsResolver<TableScrollContainerFactory>((_, { minWidth }) => ({
  scrollContainer: {
    '--table-min-width': minWidth ? rem(minWidth) : undefined,
    '--table-overflow': 'hidden',
  },
}));

export const TableScrollContainer = factory<TableScrollContainerFactory>((props, ref) => {
  const { className, children, minWidth, type, stickyHeader, stickyHeaderOffset, ...others } =
    useProps('TableScrollContainer', defaultProps, props);

  const getStyles = useStyles<TableScrollContainerFactory>({
    name: 'TableScrollContainer',
    classes,
    props,
    className,
    style: others.style,
    classNames: others.classNames,
    styles: others.styles,
    unstyled: others.unstyled,
    vars: others.vars,
    varsResolver,
    rootSelector: 'scrollContainer',
  });

  const tableRef = useRef<HTMLTableElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cloneContainerRef = useRef<HTMLDivElement>(null);
  const stickyInstance = useRef<StickyTableHeader | null>(null);

  useEffect(() => {
    if (stickyHeader && tableRef.current && cloneContainerRef.current && containerRef.current) {
      stickyInstance.current = new StickyTableHeader(
        tableRef.current,
        cloneContainerRef.current,
        {
          max: stickyHeaderOffset ?? 0,
        },
        containerRef.current
      );

      return () => {
        if (stickyInstance.current) {
          stickyInstance.current.destroy();
        }
      };
    }
  }, [stickyHeader, stickyHeaderOffset, children]);

  const content = (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <div
        {...getStyles('scrollContainerInner')}
        style={{
          minWidth,
          width: '100%',
          position: 'relative',
          overflowX: 'auto',
          overflowY: stickyHeader ? 'visible' : 'auto',
        }}
        data-sticky-header={stickyHeader || undefined}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && typeof child.type !== 'string') {
            return React.cloneElement(
              child as React.ReactElement<{ ref: React.Ref<HTMLTableElement> }>,
              { ref: tableRef }
            );
          }
          return child;
        })}
      </div>
      {stickyHeader && (
        <div
          ref={cloneContainerRef}
          {...getStyles('stickyHeader')}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            overflow: 'hidden',
            display: 'none',
          }}
        />
      )}
    </div>
  );

  if (type === 'native') {
    return (
      <Box ref={ref} {...getStyles('scrollContainer')} {...others}>
        {content}
      </Box>
    );
  }

  return (
    <ScrollArea {...(others as ScrollAreaProps)} ref={ref}>
      {content}
    </ScrollArea>
  );
});

TableScrollContainer.classes = classes;
TableScrollContainer.displayName = '@mantine/core/TableScrollContainer';
