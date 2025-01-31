import { forwardRef, useState } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { Box, BoxProps, ElementProps, Factory, GetStylesApi, useProps } from '../../../core';
import type { ScrollAreaFactory } from '../ScrollArea';
import { ScrollAreaProvider } from '../ScrollArea.context';

export type ScrollAreaRootStylesNames =
  | 'root'
  | 'viewport'
  | 'viewportInner'
  | 'scrollbar'
  | 'thumb'
  | 'corner';

export type ScrollAreaRootCssVariables = {
  root: '--sa-corner-width' | '--sa-corner-height';
};

export interface ScrollAreaRootStylesCtx {
  cornerWidth: number;
  cornerHeight: number;
}

export interface ScrollAreaRootProps extends BoxProps, ElementProps<'div'> {
  getStyles: GetStylesApi<ScrollAreaFactory>;
  type?: 'auto' | 'always' | 'scroll' | 'hover' | 'never';
  scrollbars?: 'x' | 'y' | 'xy' | false;
  scrollHideDelay?: number;
}

export type ScrollAreaRootFactory = Factory<{
  props: ScrollAreaRootProps;
  ref: HTMLDivElement;
  stylesNames: ScrollAreaRootStylesNames;
}>;

const defaultProps: Partial<ScrollAreaRootProps> = {
  scrollHideDelay: 1000,
  type: 'hover',
};

export const ScrollAreaRoot = forwardRef<HTMLDivElement, ScrollAreaRootProps>((_props, ref) => {
  const { type, scrollHideDelay, scrollbars, getStyles, ...others } = useProps(
    'ScrollAreaRoot',
    defaultProps,
    _props
  );

  const [scrollArea, setScrollArea] = useState<HTMLDivElement | null>(null);
  const [viewport, setViewport] = useState<HTMLDivElement | null>(null);
  const [content, setContent] = useState<HTMLDivElement | null>(null);
  const [scrollbarX, setScrollbarX] = useState<HTMLDivElement | null>(null);
  const [scrollbarY, setScrollbarY] = useState<HTMLDivElement | null>(null);
  const [cornerWidth, setCornerWidth] = useState(0);
  const [cornerHeight, setCornerHeight] = useState(0);
  const [scrollbarXEnabled, setScrollbarXEnabled] = useState(false);
  const [scrollbarYEnabled, setScrollbarYEnabled] = useState(false);
  const rootRef = useMergedRef(ref, (node) => setScrollArea(node));

  return (
    <ScrollAreaProvider
      value={{
        type: type!,
        scrollHideDelay: scrollHideDelay!,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight,
        getStyles,
      }}
    >
      <Box
        {...others}
        ref={rootRef}
        __vars={{
          '--sa-corner-width': scrollbars !== 'xy' ? '0px' : `${cornerWidth}px`,
          '--sa-corner-height': scrollbars !== 'xy' ? '0px' : `${cornerHeight}px`,
        }}
      />
    </ScrollAreaProvider>
  );
});

ScrollAreaRoot.displayName = '@mantine/core/ScrollAreaRoot';
