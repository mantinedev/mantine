import { forwardRef, useEffect, useState } from 'react';
import { useDebouncedCallback } from '@mantine/hooks';
import { useScrollAreaContext } from '../ScrollArea.context';
import { composeEventHandlers } from '../utils';
import {
  ScrollAreaScrollbarVisible,
  ScrollAreaScrollbarVisibleProps,
} from './ScrollAreaScrollbarVisible';

interface ScrollAreaScrollbarScrollProps extends ScrollAreaScrollbarVisibleProps {
  forceMount?: true;
}

export const ScrollAreaScrollbarScroll = forwardRef<HTMLDivElement, ScrollAreaScrollbarScrollProps>(
  (props, red) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext();
    const isHorizontal = props.orientation === 'horizontal';
    const [state, setState] = useState<'hidden' | 'idle' | 'interacting' | 'scrolling'>('hidden');
    const debounceScrollEnd = useDebouncedCallback(() => setState('idle'), 100);

    useEffect(() => {
      if (state === 'idle') {
        const hideTimer = window.setTimeout(() => setState('hidden'), context.scrollHideDelay);
        return () => window.clearTimeout(hideTimer);
      }

      return undefined;
    }, [state, context.scrollHideDelay]);

    useEffect(() => {
      const { viewport } = context;
      const scrollDirection = isHorizontal ? 'scrollLeft' : 'scrollTop';

      if (viewport) {
        let prevScrollPos = viewport[scrollDirection];
        const handleScroll = () => {
          const scrollPos = viewport[scrollDirection];
          const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
          if (hasScrollInDirectionChanged) {
            setState('scrolling');
            debounceScrollEnd();
          }
          prevScrollPos = scrollPos;
        };
        viewport.addEventListener('scroll', handleScroll);
        return () => viewport.removeEventListener('scroll', handleScroll);
      }

      return undefined;
    }, [context.viewport, isHorizontal, debounceScrollEnd]);

    if (forceMount || state !== 'hidden') {
      return (
        <ScrollAreaScrollbarVisible
          data-state={state === 'hidden' ? 'hidden' : 'visible'}
          {...scrollbarProps}
          ref={red}
          onPointerEnter={composeEventHandlers(props.onPointerEnter, () => setState('interacting'))}
          onPointerLeave={composeEventHandlers(props.onPointerLeave, () => setState('idle'))}
        />
      );
    }

    return null;
  }
);
