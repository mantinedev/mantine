import React, { forwardRef, Children } from 'react';
import {
  DefaultProps,
  MantineColor,
  MantineNumberSize,
  CSSObject,
  useComponentDefaultProps,
} from '@mantine/styles';
import { ForwardRefWithStaticComponents, packSx } from '@mantine/utils';
import { Box } from '../Box';
import { TimelineItem, TimelineItemStylesNames } from './TimelineItem/TimelineItem';

export interface TimelineProps
  extends DefaultProps<TimelineItemStylesNames>,
    React.ComponentPropsWithRef<'div'> {
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

const defaultProps: Partial<TimelineProps> = {
  active: -1,
  radius: 'xl',
  bulletSize: 20,
  align: 'left',
  lineWidth: 4,
  reverseActive: false,
};

export const Timeline: TimelineComponent = forwardRef<HTMLDivElement, TimelineProps>(
  (props, ref) => {
    const {
      children,
      active,
      color,
      radius,
      bulletSize,
      align,
      lineWidth,
      classNames,
      styles,
      sx,
      reverseActive,
      unstyled,
      ...others
    } = useComponentDefaultProps('Timeline', defaultProps, props);

    const _children = Children.toArray(children);
    const items = _children.map((item: React.ReactElement, index) =>
      React.cloneElement(item, {
        classNames,
        styles,
        align,
        lineWidth,
        radius: item.props.radius || radius,
        color: item.props.color || color,
        bulletSize: item.props.bulletSize || bulletSize,
        unstyled,
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
      <Box ref={ref} sx={[offset, ...packSx(sx)]} {...others}>
        {items}
      </Box>
    );
  }
) as any;

Timeline.Item = TimelineItem;
Timeline.displayName = '@mantine/core/Timeline';
