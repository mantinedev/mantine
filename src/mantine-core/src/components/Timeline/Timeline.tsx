import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineColor,
  ForwardRefWithStaticComponents,
  MantineNumberSize,
  CSSObject,
} from '@mantine/styles';
import { filterChildrenByType } from '../../utils';
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

  /** Radius from theme.radius, or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Bullet size in px */
  bulletSize?: number;

  /** Timeline alignment */
  align?: 'right' | 'left';

  /** Line width in px */
  lineWidth?: number;

  /** Reverse active direction without reversing items */
  reverseActive?: boolean;
}

type TimelineComponent = ForwardRefWithStaticComponents<
  TimelineProps,
  { Item: typeof TimelineItem }
>;

export const Timeline: TimelineComponent = forwardRef<HTMLDivElement, TimelineProps>(
  (
    {
      children,
      active = -1,
      color,
      radius = 'xl',
      bulletSize = 20,
      align = 'left',
      lineWidth = 4,
      classNames,
      styles,
      sx,
      reverseActive = false,
      ...others
    }: TimelineProps,
    ref
  ) => {
    const _children = filterChildrenByType(children, TimelineItem);
    const items = _children.map((item: React.ReactElement, index) =>
      React.cloneElement(item, {
        classNames,
        styles,
        align,
        lineWidth,
        radius: item.props.radius || radius,
        color: item.props.color || color,
        bulletSize: item.props.bulletSize || bulletSize,
        active:
          item.props.active ||
          (reverseActive ? active >= _children.length - index - 1 : active >= index),
        lineActive:
          item.props.lineActive ||
          (reverseActive ? active >= _children.length - index - 1 : active - 1 >= index),
      })
    );

    const offset: CSSObject =
      align === 'left'
        ? { paddingLeft: bulletSize / 2 + lineWidth / 2 }
        : { paddingRight: bulletSize / 2 + lineWidth / 2 };

    return (
      <Box ref={ref} sx={[offset, sx]} {...others}>
        {items}
      </Box>
    );
  }
) as any;

Timeline.Item = TimelineItem;
Timeline.displayName = '@mantine/core/Timeline';
