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

  /** Bullet size in px */
  bulletSize?: number;
}

export function Timeline({ children, active, color, bulletSize, ...others }: TimelineProps) {
  const hasActive = typeof active === 'number';

  const items = Children.toArray(children)
    .filter((child: React.ReactElement) => child.type === TimelineItem)
    .map((item: React.ReactElement, index) =>
      React.cloneElement(item, {
        color: item.props.color || color,
        bulletSize: item.props.bulletSize,
        active: item.props.active || (hasActive && active >= index),
        lineActive: item.props.lineActive || (hasActive && active - 1 >= index),
      })
    );

  return <div {...others}>{items}</div>;
}

Timeline.Item = TimelineItem;
Timeline.displayName = '@mantine/core/Timeline';
