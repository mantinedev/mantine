import React, { Children } from 'react';
import { DefaultProps } from '../../theme';
import {
  TimelineItem,
  TimelineItemProps,
  TimelineItemStylesNames,
} from './TimelineItem/TimelineItem';

export { TimelineItem };
export type { TimelineItemProps };
export type TimelineStylesNames = TimelineItemStylesNames;

export interface TimelineProps
  extends DefaultProps<TimelineStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** <Timeline.Item /> components only */
  children: React.ReactNode;

  /** Index of active element */
  active?: number;

  /** Active color from theme */
  color?: string;

  /** Bullet size in px */
  bulletSize?: number;

  /** Timeline alignment */
  align?: 'right' | 'left';

  /** Line width in px */
  lineWidth?: number;
}

export function Timeline({
  children,
  active,
  color,
  bulletSize,
  align = 'left',
  lineWidth = 4,
  classNames,
  styles,
  ...others
}: TimelineProps) {
  const hasActive = typeof active === 'number';

  const items = Children.toArray(children)
    .filter((child: React.ReactElement) => child.type === TimelineItem)
    .map((item: React.ReactElement, index) =>
      React.cloneElement(item, {
        classNames,
        styles,
        align,
        lineWidth,
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
