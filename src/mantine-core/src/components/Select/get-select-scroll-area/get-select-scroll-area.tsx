import React, { forwardRef } from 'react';
import { ScrollArea, ScrollAreaProps } from '../../ScrollArea';

interface SelectScrollAreaProps extends ScrollAreaProps {
  maxHeight?: number;
}

export function getSelectScrollArea(props: SelectScrollAreaProps) {
  return forwardRef<HTMLDivElement, SelectScrollAreaProps>(
    ({ maxHeight = props?.maxHeight || 220, ...others }: SelectScrollAreaProps, ref) => (
      <ScrollArea
        {...others}
        {...props}
        style={{ ...others.style, position: 'absolute', maxHeight, width: '100%' }}
        viewportRef={ref}
      >
        {others.children}
      </ScrollArea>
    )
  );
}
