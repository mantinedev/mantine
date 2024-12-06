import { forwardRef, useRef, useState } from 'react';
import { useDirection } from '../../../core';
import { useScrollAreaContext } from '../ScrollArea.context';
import {
  ScrollAreaScrollbarAxisPrivateProps,
  ScrollAreaScrollbarAxisProps,
  Sizes,
} from '../ScrollArea.types';
import { getScrollPositionFromPointer, getThumbOffsetFromScroll, getThumbRatio } from '../utils';
import { ScrollAreaScrollbarX } from './ScrollbarX';
import { ScrollAreaScrollbarY } from './ScrollbarY';

export interface ScrollAreaScrollbarVisibleProps
  extends Omit<ScrollAreaScrollbarAxisProps, keyof ScrollAreaScrollbarAxisPrivateProps> {
  orientation?: 'horizontal' | 'vertical';
}

export const ScrollAreaScrollbarVisible = forwardRef<
  HTMLDivElement,
  ScrollAreaScrollbarVisibleProps
>((props, forwardedRef) => {
  const { orientation = 'vertical', ...scrollbarProps } = props;
  const { dir } = useDirection();
  const context = useScrollAreaContext();
  const thumbRef = useRef<HTMLDivElement | null>(null);
  const pointerOffsetRef = useRef(0);
  const [sizes, setSizes] = useState<Sizes>({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
  });

  const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);

  const commonProps: Omit<
    ScrollAreaScrollbarAxisPrivateProps,
    'onThumbPositionChange' | 'onDragScroll' | 'onWheelScroll'
  > = {
    ...scrollbarProps,
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => {
      thumbRef.current = thumb;
    },
    onThumbPointerUp: () => {
      pointerOffsetRef.current = 0;
    },
    onThumbPointerDown: (pointerPos) => {
      pointerOffsetRef.current = pointerPos;
    },
  };

  const getScrollPosition = (pointerPos: number, direction?: 'ltr' | 'rtl') =>
    getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, direction);

  if (orientation === 'horizontal') {
    return (
      <ScrollAreaScrollbarX
        {...commonProps}
        ref={forwardedRef}
        onThumbPositionChange={() => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollLeft;
            const offset = getThumbOffsetFromScroll(scrollPos, sizes, dir);
            thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
          }
        }}
        onWheelScroll={(scrollPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = scrollPos;
          }
        }}
        onDragScroll={(pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = getScrollPosition(pointerPos, dir);
          }
        }}
      />
    );
  }

  if (orientation === 'vertical') {
    return (
      <ScrollAreaScrollbarY
        {...commonProps}
        ref={forwardedRef}
        onThumbPositionChange={() => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollTop;
            const offset = getThumbOffsetFromScroll(scrollPos, sizes);
            if (sizes.scrollbar.size === 0) {
              thumbRef.current.style.setProperty('--thumb-opacity', '0');
            } else {
              thumbRef.current.style.setProperty('--thumb-opacity', '1');
            }
            thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
          }
        }}
        onWheelScroll={(scrollPos) => {
          if (context.viewport) {
            context.viewport.scrollTop = scrollPos;
          }
        }}
        onDragScroll={(pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollTop = getScrollPosition(pointerPos);
          }
        }}
      />
    );
  }

  return null;
});

ScrollAreaScrollbarVisible.displayName = '@mantine/core/ScrollAreaScrollbarVisible';
