import { forwardRef, useState } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { Box, BoxProps, ElementProps, Factory, useProps } from '../../../core';
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
  /**
   * Defines scrollbars behavior, `hover` by default
   * - `hover` – scrollbars are visible when mouse is over the scroll area
   * - `scroll` – scrollbars are visible when the scroll area is scrolled
   * - `always` – scrollbars are always visible
   * - `never` – scrollbars are always hidden
   * - `auto` – similar to `overflow: auto` – scrollbars are always visible when the content is overflowing
   * */
  type?: 'auto' | 'always' | 'scroll' | 'hover' | 'never';

  /** Axis at which scrollbars must be rendered, `'xy'` by default */
  scrollbars?: 'x' | 'y' | 'xy' | false;

  /** Scroll hide delay in ms, applicable only when type is set to `hover` or `scroll`, `1000` by default */
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
  const props = useProps('ScrollAreaRoot', defaultProps, _props);
  const { type, scrollHideDelay, scrollbars, ...others } = props;

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
