import React, { forwardRef } from 'react';
import { ScrollArea, ScrollAreaProps } from '../../ScrollArea';

interface SelectScrollAreaProps extends ScrollAreaProps {
  maxHeight?: number;
}

export const SelectScrollArea = forwardRef<HTMLDivElement, SelectScrollAreaProps>(
  ({ maxHeight = 220, ...props }: SelectScrollAreaProps, ref) => (
    <ScrollArea
      {...props}
      style={{ ...props.style, position: 'absolute', maxHeight, width: '100%' }}
      viewportRef={ref}
    >
      {props.children}
    </ScrollArea>
  )
);

SelectScrollArea.displayName = '@mantine/core/SelectScrollArea';
