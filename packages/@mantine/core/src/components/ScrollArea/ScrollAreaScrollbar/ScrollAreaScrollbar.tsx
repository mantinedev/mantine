import { useEffect } from 'react';
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

export function ScrollAreaScrollbar(props: ScrollAreaScrollbarProps) {
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
    <ScrollAreaScrollbarHover {...scrollbarProps} forceMount={forceMount} />
  ) : context.type === 'scroll' ? (
    <ScrollAreaScrollbarScroll {...scrollbarProps} forceMount={forceMount} />
  ) : context.type === 'auto' ? (
    <ScrollAreaScrollbarAuto {...scrollbarProps} forceMount={forceMount} />
  ) : context.type === 'always' ? (
    <ScrollAreaScrollbarVisible {...scrollbarProps} />
  ) : null;
}

ScrollAreaScrollbar.displayName = '@mantine/core/ScrollAreaScrollbar';
