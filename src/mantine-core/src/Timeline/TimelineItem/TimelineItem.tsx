import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineColor,
  Selectors,
  MantineNumberSize,
  useComponentDefaultProps,
} from '@mantine/styles';
import { Text } from '../../Text';
import { Box } from '../../Box';
import useStyles from './TimelineItem.styles';

export type TimelineItemStylesNames = Selectors<typeof useStyles>;

export interface TimelineItemProps
  extends DefaultProps<TimelineItemStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  variant?: string;

  /** Item title, rendered next to bullet */
  title?: React.ReactNode;

  /** React node that should be rendered inside bullet – icon, image, avatar, etc. */
  bullet?: React.ReactNode;

  /** Bullet width, height and border-radius, controlled by Timeline component */
  bulletSize?: number;

  /** Key of theme.radius or any valid CSS value to set border-radius, "xl" by default */
  radius?: MantineNumberSize;

  /** React node that will be rendered after title */
  children?: React.ReactNode;

  /** Should this item be highlighted, controlled by Timeline component */
  active?: boolean;

  /** Should line of this item be highlighted, controlled by Timeline component */
  lineActive?: boolean;

  /** Highlight color for active item */
  color?: MantineColor;

  /** Line and bullet position relative to item content, controlled by Timeline component */
  align?: 'right' | 'left';

  /** Line border style */
  lineVariant?: 'solid' | 'dashed' | 'dotted';

  /** Line border width, controlled by Timeline component */
  lineWidth?: number;
}

const defaultProps: Partial<TimelineItemProps> = {
  bulletSize: 20,
  radius: 'xl',
  lineWidth: 4,
  lineVariant: 'solid',
};

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>((props, ref) => {
  const {
    className,
    bullet,
    title,
    bulletSize,
    radius,
    lineWidth,
    active,
    lineActive,
    classNames,
    styles,
    children,
    color,
    align,
    lineVariant,
    unstyled,
    variant,
    ...others
  } = useComponentDefaultProps('TimelineItem', defaultProps, props);

  const { classes, cx } = useStyles(
    { bulletSize, color, radius, align, lineVariant, lineWidth },
    { name: 'Timeline', classNames, styles, unstyled, variant }
  );

  return (
    <Box
      className={cx(classes.item, className)}
      data-line-active={lineActive || undefined}
      data-active={active || undefined}
      ref={ref}
      {...others}
    >
      <div
        className={classes.itemBullet}
        data-with-child={!!bullet || undefined}
        data-active={active || undefined}
      >
        {bullet}
      </div>

      <div className={classes.itemBody}>
        {title && <Text className={classes.itemTitle}>{title}</Text>}
        <div className={classes.itemContent}>{children}</div>
      </div>
    </Box>
  );
});

TimelineItem.displayName = '@mantine/core/TimelineItem';
