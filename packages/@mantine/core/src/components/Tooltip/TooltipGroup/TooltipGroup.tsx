import React from 'react';
import { FloatingDelayGroup } from '@floating-ui/react';
import { useProps } from '../../../core';
import { TooltipGroupProvider } from './TooltipGroup.context';

export interface TooltipGroupProps {
  /** <Tooltip /> components */
  children: React.ReactNode;

  /** Open delay in ms */
  openDelay?: number;

  /** Close delay in ms */
  closeDelay?: number;
}

const defaultProps: Partial<TooltipGroupProps> = {
  openDelay: 0,
  closeDelay: 0,
};

export function TooltipGroup(props: TooltipGroupProps) {
  const { openDelay, closeDelay, children } = useProps('TooltipGroup', defaultProps, props);

  return (
    <TooltipGroupProvider value>
      <FloatingDelayGroup delay={{ open: openDelay, close: closeDelay }}>
        {children}
      </FloatingDelayGroup>
    </TooltipGroupProvider>
  );
}

TooltipGroup.displayName = '@mantine/core/TooltipGroup';
