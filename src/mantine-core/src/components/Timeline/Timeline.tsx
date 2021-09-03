import React from 'react';
import { DefaultProps } from '../../theme';
import { TimelineItem, TimelineItemProps } from './TimelineItem/TimelineItem';

export { TimelineItem };
export type { TimelineItemProps };

export interface TimelineProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** <Timeline.Item /> components only */
  children: React.ReactNode;
}

export function Timeline({ children, ...others }: TimelineProps) {
  return <div {...others}>{children}</div>;
}

Timeline.Item = TimelineItem;
Timeline.displayName = '@mantine/core/Timeline';
