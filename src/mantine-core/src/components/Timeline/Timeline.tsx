import React, { Children, forwardRef } from 'react';
import { DefaultProps, MantineColor, ForwardRefWithStaticComponents } from '@mantine/styles';
import { Box } from '../Box';
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

type TimelineComponent = ForwardRefWithStaticComponents<
  TimelineProps,
  { Item: typeof TimelineItem }
>;

export const Timeline: TimelineComponent = forwardRef<HTMLDivElement, TimelineProps>(
  (
    {
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
    }: TimelineProps,
    ref
  ) => {
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
      <Box ref={ref} style={{ ...offset, ...style }} {...others}>
        {items}
      </Box>
    );
  }
) as any;

Timeline.Item = TimelineItem;
Timeline.displayName = '@mantine/core/Timeline';
