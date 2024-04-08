import React, { forwardRef, useEffect, useRef } from 'react';
import { useDebouncedCallback, useMergedRef } from '@mantine/hooks';
import { useScrollAreaContext } from '../ScrollArea.context';
import { useScrollbarContext } from '../ScrollAreaScrollbar/Scrollbar.context';
import { addUnlinkedScrollListener, composeEventHandlers } from '../utils';

interface ThumbProps extends React.ComponentPropsWithoutRef<'div'> {}

export const Thumb = forwardRef<HTMLDivElement, ThumbProps>((props, forwardedRef) => {
  const { style, ...others } = props;
  const scrollAreaContext = useScrollAreaContext();
  const scrollbarContext = useScrollbarContext();
  const { onThumbPositionChange } = scrollbarContext;
  const composedRef = useMergedRef(forwardedRef, (node) => scrollbarContext.onThumbChange(node));
  const removeUnlinkedScrollListenerRef = useRef<() => void>();
  const debounceScrollEnd = useDebouncedCallback(() => {
    if (removeUnlinkedScrollListenerRef.current) {
      removeUnlinkedScrollListenerRef.current();
      removeUnlinkedScrollListenerRef.current = undefined;
    }
  }, 100);

  useEffect(() => {
    const { viewport } = scrollAreaContext;
    if (viewport) {
      const handleScroll = () => {
        debounceScrollEnd();
        if (!removeUnlinkedScrollListenerRef.current) {
          const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
          removeUnlinkedScrollListenerRef.current = listener;
          onThumbPositionChange();
        }
      };
      onThumbPositionChange();
      viewport.addEventListener('scroll', handleScroll);
      return () => viewport.removeEventListener('scroll', handleScroll);
    }

    return undefined;
  }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);

  return (
    <div
      data-state={scrollbarContext.hasThumb ? 'visible' : 'hidden'}
      {...others}
      ref={composedRef}
      style={{
        width: 'var(--sa-thumb-width)',
        height: 'var(--sa-thumb-height)',
        ...style,
      }}
      onPointerDownCapture={composeEventHandlers(props.onPointerDownCapture, (event) => {
        const thumb = event.target as HTMLElement;
        const thumbRect = thumb.getBoundingClientRect();
        const x = event.clientX - thumbRect.left;
        const y = event.clientY - thumbRect.top;
        scrollbarContext.onThumbPointerDown({ x, y });
      })}
      onPointerUp={composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)}
    />
  );
});

interface ScrollAreaThumbProps extends ThumbProps {
  forceMount?: true;
}

export const ScrollAreaThumb = React.forwardRef<HTMLDivElement, ScrollAreaThumbProps>(
  (props, forwardedRef) => {
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext();

    if (forceMount || scrollbarContext.hasThumb) {
      return <Thumb ref={forwardedRef} {...thumbProps} />;
    }

    return null;
  }
);
