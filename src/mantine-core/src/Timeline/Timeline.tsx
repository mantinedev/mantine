import React, { forwardRef, Children } from 'react';
import {
  DefaultProps,
  MantineColor,
  MantineNumberSize,
  CSSObject,
  useComponentDefaultProps,
  rem,
  Selectors,
} from '@mantine/styles';
import { ForwardRefWithStaticComponents, packSx } from '@mantine/utils';
import { Box } from '../Box';
import { TimelineItem, TimelineItemStylesNames } from './TimelineItem/TimelineItem';
import useStyles from './Timeline.styles';

export type TimelineStylesNames = Selectors<typeof useStyles> | TimelineItemStylesNames;

export interface TimelineProps
  extends DefaultProps<TimelineStylesNames>,
    React.ComponentPropsWithRef<'div'> {
  variant?: string;

  /** <Timeline.Item /> components only */
  children: React.ReactNode;

  /** Index of active element */
  active?: number;

  /** Active color from theme */
  color?: MantineColor;

  /** Key of theme.radius or any valid CSS value to set border-radius, "xl" by default */
  radius?: MantineNumberSize;

  /** Bullet size */
  bulletSize?: number | string;

  /** Timeline alignment */
  align?: 'right' | 'left';

  /** Line width */
  lineWidth?: number | string;

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
      className,
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
      variant,
      ...others
    } = useComponentDefaultProps('Timeline', defaultProps, props);

    const { classes, cx } = useStyles(null, {
      name: 'Timeline',
      classNames,
      styles,
      unstyled,
      variant,
    });

    const _children = Children.toArray(children);
    const items = _children.map((item: React.ReactElement, index) =>
      React.cloneElement(item, {
        variant,
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
        ? { paddingLeft: `calc(${rem(bulletSize)} / 2 + ${rem(lineWidth)} / 2)` }
        : { paddingRight: `calc(${rem(bulletSize)} / 2 + ${rem(lineWidth)} / 2)` };

    return (
      <Box
        className={cx(classes.root, className)}
        ref={ref}
        sx={[offset, ...packSx(sx)]}
        {...others}
      >
        {items}
      </Box>
    );
  }
) as any;

Timeline.Item = TimelineItem;
Timeline.displayName = '@mantine/core/Timeline';
