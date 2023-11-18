import React from 'react';
import { useScrollAreaContext } from '../ScrollArea.context';
import { useResizeObserver } from '../use-resize-observer';

interface ScrollAreaCornerProps extends React.ComponentPropsWithoutRef<'div'> {}

export const Corner = React.forwardRef<HTMLDivElement, ScrollAreaCornerProps>((props, ref) => {
  const { style, ...others } = props;
  const ctx = useScrollAreaContext();
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const hasSize = Boolean(width && height);

  useResizeObserver(ctx.scrollbarX, () => {
    const h = ctx.scrollbarX?.offsetHeight || 0;
    ctx.onCornerHeightChange(h);
    setHeight(h);
  });

  useResizeObserver(ctx.scrollbarY, () => {
    const w = ctx.scrollbarY?.offsetWidth || 0;
    ctx.onCornerWidthChange(w);
    setWidth(w);
  });

  return hasSize ? <div {...others} ref={ref} style={{ ...style, width, height }} /> : null;
});

export const ScrollAreaCorner = React.forwardRef<HTMLDivElement, ScrollAreaCornerProps>(
  (props, ref) => {
    const ctx = useScrollAreaContext();
    const hasBothScrollbarsVisible = Boolean(ctx.scrollbarX && ctx.scrollbarY);
    const hasCorner = ctx.type !== 'scroll' && hasBothScrollbarsVisible;
    return hasCorner ? <Corner {...props} ref={ref} /> : null;
  }
);
