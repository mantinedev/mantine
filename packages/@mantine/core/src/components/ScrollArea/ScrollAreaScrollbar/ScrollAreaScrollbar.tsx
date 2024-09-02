import { forwardRef, useEffect } from 'react';
import { useScrollAreaContext } from '../ScrollArea.context';
import { ScrollAreaScrollbarAuto } from './ScrollAreaScrollbarAuto';
import { ScrollAreaScrollbarHover } from './ScrollAreaScrollbarHover';
import { ScrollAreaScrollbarScroll } from './ScrollAreaScrollbarScroll';
import {
  ScrollAreaScrollbarVisible,
  ScrollAreaScrollbarVisibleProps,
} from './ScrollAreaScrollbarVisible';

interface ScrollAreaScrollbarProps extends ScrollAreaScrollbarVisibleProps {
  forceMount?: true;
}

export const ScrollAreaScrollbar = forwardRef<HTMLDivElement, ScrollAreaScrollbarProps>(
  (props, forwardedRef) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext();
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === 'horizontal';

    useEffect(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);

    return context.type === 'hover' ? (
      <ScrollAreaScrollbarHover {...scrollbarProps} ref={forwardedRef} forceMount={forceMount} />
    ) : context.type === 'scroll' ? (
      <ScrollAreaScrollbarScroll {...scrollbarProps} ref={forwardedRef} forceMount={forceMount} />
    ) : context.type === 'auto' ? (
      <ScrollAreaScrollbarAuto {...scrollbarProps} ref={forwardedRef} forceMount={forceMount} />
    ) : context.type === 'always' ? (
      <ScrollAreaScrollbarVisible {...scrollbarProps} ref={forwardedRef} />
    ) : null;
  }
);

ScrollAreaScrollbar.displayName = '@mantine/core/ScrollAreaScrollbar';
