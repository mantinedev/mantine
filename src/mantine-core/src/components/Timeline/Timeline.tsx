import React, { Children } from 'react';
import { DefaultProps, MantineColor, useExtractedMargins } from '@mantine/styles';
import { TimelineItem, TimelineItemStylesNames } from './TimelineItem/TimelineItem';

export interface TimelineProps
  extends DefaultProps<TimelineItemStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** <Timeline.Item /> components only */
  children: React.ReactNode;

  /** Index of active element */
  active?: number;

  /** Active color from theme */
  color?: MantineColor;

  /** Bullet size in px */
  bulletSize?: number;

  /** Timeline alignment */
  align?: 'right' | 'left';

  /** Line width in px */
  lineWidth?: number;
}

export function Timeline({
  children,
  style,
  active,
  color,
  bulletSize = 20,
  align = 'left',
  lineWidth = 4,
  classNames,
  styles,
  ...others
}: TimelineProps) {
  const hasActive = typeof active === 'number';
  const { mergedStyles, rest } = useExtractedMargins({ others, style });

  const items = Children.toArray(children)
    .filter((child: React.ReactElement) => child.type === TimelineItem)
    .map((item: React.ReactElement, index) =>
      React.cloneElement(item, {
        classNames,
        styles,
        align,
        lineWidth,
        color: item.props.color || color,
        bulletSize: item.props.bulletSize || bulletSize,
        active: item.props.active || (hasActive && active >= index),
        lineActive: item.props.lineActive || (hasActive && active - 1 >= index),
      })
    );

  const offset: React.CSSProperties =
    align === 'left'
      ? { paddingLeft: bulletSize / 2 + lineWidth / 2 }
      : { paddingRight: bulletSize / 2 + lineWidth / 2 };

  return (
    <div style={{ ...offset, ...mergedStyles }} {...rest}>
      {items}
    </div>
  );
}

Timeline.Item = TimelineItem;
Timeline.displayName = '@mantine/core/Timeline';
