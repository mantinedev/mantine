import { forwardRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { Box, BoxProps, ElementProps } from '../../../core';
import { useScrollAreaContext } from '../ScrollArea.context';

export interface ScrollAreaViewportProps extends BoxProps, ElementProps<'div'> {}

export const ScrollAreaViewport = forwardRef<HTMLDivElement, ScrollAreaViewportProps>(
  ({ children, style, onWheel, ...others }, ref) => {
    const ctx = useScrollAreaContext();
    const rootRef = useMergedRef(ref, ctx.onViewportChange);

    const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
      onWheel?.(event);

      // Fix for Windows: Allow horizontal scrolling even when vertical scroll is at boundaries
      // When at vertical boundaries, Windows tries to scroll the parent/page instead of allowing horizontal scroll
      if (ctx.scrollbarXEnabled && ctx.viewport && event.shiftKey) {
        const { scrollTop, scrollHeight, clientHeight, scrollWidth, clientWidth } = ctx.viewport;
        const isAtTop = scrollTop < 1;
        const isAtBottom = scrollTop >= scrollHeight - clientHeight - 1;
        const canScrollHorizontally = scrollWidth > clientWidth;

        if (canScrollHorizontally && (isAtTop || isAtBottom)) {
          event.stopPropagation();
        }
      }
    };

    return (
      <Box
        {...others}
        ref={rootRef}
        onWheel={handleWheel}
        style={{
          overflowX: ctx.scrollbarXEnabled ? 'scroll' : 'hidden',
          overflowY: ctx.scrollbarYEnabled ? 'scroll' : 'hidden',
          ...style,
        }}
      >
        <div {...ctx.getStyles('content')} ref={ctx.onContentChange}>
          {children}
        </div>
      </Box>
    );
  }
);

ScrollAreaViewport.displayName = '@mantine/core/ScrollAreaViewport';
