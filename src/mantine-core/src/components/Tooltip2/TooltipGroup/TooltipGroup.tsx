import React from 'react';
import { FloatingDelayGroup } from '@floating-ui/react-dom-interactions';

export interface TooltipGroupProps {
  children: React.ReactNode;
}

export function TooltipGroup({ children }: TooltipGroupProps) {
  return <FloatingDelayGroup delay={{ open: 1000, close: 200 }}>{children}</FloatingDelayGroup>;
}
