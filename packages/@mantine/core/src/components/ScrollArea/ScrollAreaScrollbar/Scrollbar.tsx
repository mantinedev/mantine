import { forwardRef, useEffect, useRef, useState } from 'react';
import { useCallbackRef, useDebouncedCallback, useMergedRef } from '@mantine/hooks';
import { useScrollAreaContext } from '../ScrollArea.context';
import { Sizes } from '../ScrollArea.types';
import { useResizeObserver } from '../use-resize-observer';
import { composeEventHandlers } from '../utils';
import { ScrollbarContextValue, ScrollbarProvider } from './Scrollbar.context';

export interface ScrollbarPrivateProps {
  sizes: Sizes;
  hasThumb: boolean;
  onThumbChange: ScrollbarContextValue['onThumbChange'];
  onThumbPointerUp: ScrollbarContextValue['onThumbPointerUp'];
  onThumbPointerDown: ScrollbarContextValue['onThumbPointerDown'];
  onThumbPositionChange: ScrollbarContextValue['onThumbPositionChange'];
  onWheelScroll: (event: WheelEvent, maxScrollPos: number) => void;
  onDragScroll: (pointerPos: { x: number; y: number }) => void;
  onResize: () => void;
}

interface ScrollbarProps
  extends ScrollbarPrivateProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onResize'> {}

export const Scrollbar = forwardRef<HTMLDivElement, ScrollbarProps>((props, forwardedRef) => {
  const {
    sizes,
    hasThumb,
    onThumbChange,
    onThumbPointerUp,
    onThumbPointerDown,
    onThumbPositionChange,
    onDragScroll,
    onWheelScroll,
    onResize,
    ...scrollbarProps
  } = props;
  const context = useScrollAreaContext();
  const [scrollbar, setScrollbar] = useState<HTMLDivElement | null>(null);
  const composeRefs = useMergedRef(forwardedRef, (node) => setScrollbar(node));
  const rectRef = useRef<DOMRect | null>(null);
  const prevWebkitUserSelectRef = useRef<string>('');
  const { viewport } = context;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = useCallbackRef(onWheelScroll);
  const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
  const handleResize = useDebouncedCallback(onResize, 10);

  const handleDragScroll = (event: React.PointerEvent<HTMLElement>) => {
    if (rectRef.current) {
      const x = event.clientX - rectRef.current.left;
      const y = event.clientY - rectRef.current.top;
      onDragScroll({ x, y });
    }
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const element = event.target as HTMLElement;
      const isScrollbarWheel = scrollbar?.contains(element);
      if (isScrollbarWheel) {
        handleWheelScroll(event, maxScrollPos);
      }
    };
    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel, { passive: false } as any);
  }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);

  useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);

  useResizeObserver(scrollbar, handleResize);
  useResizeObserver(context.content, handleResize);

  return (
    <ScrollbarProvider
      value={{
        scrollbar,
        hasThumb,
        onThumbChange: useCallbackRef(onThumbChange),
        onThumbPointerUp: useCallbackRef(onThumbPointerUp),
        onThumbPositionChange: handleThumbPositionChange,
        onThumbPointerDown: useCallbackRef(onThumbPointerDown),
      }}
    >
      <div
        {...scrollbarProps}
        ref={composeRefs}
        data-mantine-scrollbar
        style={{ position: 'absolute', ...scrollbarProps.style }}
        onPointerDown={composeEventHandlers(props.onPointerDown, (event) => {
          event.preventDefault();

          const mainPointer = 0;
          if (event.button === mainPointer) {
            const element = event.target as HTMLElement;
            element.setPointerCapture(event.pointerId);
            rectRef.current = scrollbar!.getBoundingClientRect();
            prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
            document.body.style.webkitUserSelect = 'none';
            handleDragScroll(event);
          }
        })}
        onPointerMove={composeEventHandlers(props.onPointerMove, handleDragScroll)}
        onPointerUp={composeEventHandlers(props.onPointerUp, (event) => {
          const element = event.target as HTMLElement;
          if (element.hasPointerCapture(event.pointerId)) {
            event.preventDefault();
            element.releasePointerCapture(event.pointerId);
          }
        })}
        onLostPointerCapture={() => {
          document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
          rectRef.current = null;
        }}
      />
    </ScrollbarProvider>
  );
});
