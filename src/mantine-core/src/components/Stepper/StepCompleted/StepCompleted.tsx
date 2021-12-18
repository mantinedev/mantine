import React from 'react';
import { DefaultProps } from '@mantine/styles';

export interface StepCompletedProps extends DefaultProps {
  /** Label content */
  children: React.ReactNode;
}

export function StepCompleted(
  // Props should be kept for ts integration
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: StepCompletedProps
) {
  return null;
}

StepCompleted.displayName = '@mantine/core/StepCompleted';
