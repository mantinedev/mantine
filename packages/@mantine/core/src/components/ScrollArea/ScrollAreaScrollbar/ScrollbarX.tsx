import { forwardRef, useEffect, useRef, useState } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { useScrollAreaContext } from '../ScrollArea.context';
import { ScrollAreaScrollbarAxisProps } from '../ScrollArea.types';
import { getThumbSize, isScrollingWithinScrollbarBounds, toInt } from '../utils';
import { Scrollbar } from './Scrollbar';

export const ScrollAreaScrollbarX = forwardRef<HTMLDivElement, ScrollAreaScrollbarAxisProps>(
  (props, forwardedRef) => {
    const { sizes, onSizesChange, style, ...others } = props;
    const ctx = useScrollAreaContext();
    const [computedStyle, setComputedStyle] = useState<CSSStyleDeclaration>();
    const ref = useRef<HTMLDivElement>(null);
    const composeRefs = useMergedRef(forwardedRef, ref, ctx.onScrollbarXChange);

    useEffect(() => {
      if (ref.current) {
        setComputedStyle(getComputedStyle(ref.current));
      }
    }, [ref]);

    return (
      <Scrollbar
        data-orientation="horizontal"
        {...others}
        ref={composeRefs}
        sizes={sizes}
        style={{
          ...style,
          ['--sa-thumb-width' as any]: `${getThumbSize(sizes)}px`,
        }}
        onThumbPointerDown={(pointerPos) => props.onThumbPointerDown(pointerPos.x)}
        onDragScroll={(pointerPos) => props.onDragScroll(pointerPos.x)}
        onWheelScroll={(event, maxScrollPos) => {
          if (ctx.viewport) {
            const scrollPos = ctx.viewport.scrollLeft + event.deltaX;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        }}
        onResize={() => {
          if (ref.current && ctx.viewport && computedStyle) {
            onSizesChange({
              content: ctx.viewport.scrollWidth,
              viewport: ctx.viewport.offsetWidth,
              scrollbar: {
                size: ref.current.clientWidth,
                paddingStart: toInt(computedStyle.paddingLeft),
                paddingEnd: toInt(computedStyle.paddingRight),
              },
            });
          }
        }}
      />
    );
  }
);

ScrollAreaScrollbarX.displayName = '@mantine/core/ScrollAreaScrollbarX';
