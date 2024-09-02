import { forwardRef, useEffect, useState } from 'react';
import { useScrollAreaContext } from '../ScrollArea.context';
import { ScrollAreaScrollbarAuto, ScrollAreaScrollbarAutoProps } from './ScrollAreaScrollbarAuto';

interface ScrollAreaScrollbarHoverProps extends ScrollAreaScrollbarAutoProps {
  forceMount?: true;
}

export const ScrollAreaScrollbarHover = forwardRef<HTMLDivElement, ScrollAreaScrollbarHoverProps>(
  (props, ref) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const { scrollArea } = context;
      let hideTimer = 0;
      if (scrollArea) {
        const handlePointerEnter = () => {
          window.clearTimeout(hideTimer);
          setVisible(true);
        };
        const handlePointerLeave = () => {
          hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
        };
        scrollArea.addEventListener('pointerenter', handlePointerEnter);
        scrollArea.addEventListener('pointerleave', handlePointerLeave);

        return () => {
          window.clearTimeout(hideTimer);
          scrollArea.removeEventListener('pointerenter', handlePointerEnter);
          scrollArea.removeEventListener('pointerleave', handlePointerLeave);
        };
      }

      return undefined;
    }, [context.scrollArea, context.scrollHideDelay]);

    if (forceMount || visible) {
      return (
        <ScrollAreaScrollbarAuto
          data-state={visible ? 'visible' : 'hidden'}
          {...scrollbarProps}
          ref={ref}
        />
      );
    }

    return null;
  }
);

ScrollAreaScrollbarHover.displayName = '@mantine/core/ScrollAreaScrollbarHover';
