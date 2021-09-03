import React, { Children } from 'react';
import { DefaultProps } from '../../theme';
import { TimelineItem, TimelineItemProps } from './TimelineItem/TimelineItem';

export { TimelineItem };
export type { TimelineItemProps };

export interface TimelineProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** <Timeline.Item /> components only */
  children: React.ReactNode;

  /** Index of active element */
  active?: number;

  /** Active color from theme */
  color?: string;
}

export function Timeline({ children, active, color, ...others }: TimelineProps) {
  const hasActive = typeof active === 'number';

  const items = Children.toArray(children)
    .filter((child: React.ReactElement) => child.type === TimelineItem)
    .map((item: React.ReactElement, index) =>
      React.cloneElement(item, {
        color,
        active: hasActive && active >= index,
        lineActive: hasActive && active - 1 >= index,
      })
    );

  return <div {...others}>{items}</div>;
}

Timeline.Item = TimelineItem;
Timeline.displayName = '@mantine/core/Timeline';
