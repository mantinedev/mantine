import { ScrollArea, ScrollAreaProps } from '@mantine/core';
import React, { forwardRef } from 'react';

export const CascaderScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ style, ...others }: ScrollAreaProps, ref) => (
    <ScrollArea {...others} style={{ width: '100%', ...style }} viewportRef={ref}>
      {others.children}
    </ScrollArea>
  )
);

CascaderScrollArea.displayName = '@mantine/core/CascaderScrollArea';
