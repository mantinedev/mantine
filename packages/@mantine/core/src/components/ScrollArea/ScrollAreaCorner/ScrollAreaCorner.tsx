import { useState } from 'react';
import { useScrollAreaContext } from '../ScrollArea.context';
import { useResizeObserver } from '../use-resize-observer';

interface ScrollAreaCornerProps extends React.ComponentProps<'div'> {}

export function Corner(props: ScrollAreaCornerProps) {
  const { style, ...others } = props;
  const ctx = useScrollAreaContext();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
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

  return hasSize ? <div {...others} style={{ ...style, width, height }} /> : null;
}

export function ScrollAreaCorner(props: ScrollAreaCornerProps) {
  const ctx = useScrollAreaContext();
  const hasBothScrollbarsVisible = Boolean(ctx.scrollbarX && ctx.scrollbarY);
  const hasCorner = ctx.type !== 'scroll' && hasBothScrollbarsVisible;
  return hasCorner ? <Corner {...props} /> : null;
}
