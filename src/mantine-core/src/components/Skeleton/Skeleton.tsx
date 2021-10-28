import React, { forwardRef } from 'react';
import { DefaultProps, useExtractedMargins, MantineNumberSize } from '@mantine/styles';
import useStyles from './Skeleton.styles';

export interface SkeletonProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Should skeleton overlay be displayed */
  visible?: boolean;

  /** Skeleton height */
  height?: number | string;

  /** Skeleton width */
  width?: number | string;

  /** If Skeleton is a circle, it's width and border-radius will be equal to height */
  circle?: boolean;

  /** Radius from theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({
    height = 'auto',
    width = '100%',
    visible = true,
    sx,
    className,
    style,
    circle,
    radius = 'sm',
    ...others
  }: SkeletonProps) => {
    const { classes, cx } = useStyles({ height, width, circle, radius }, { name: 'Skeleton', sx });
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    return (
      <div
        className={cx(classes.root, { [classes.visible]: visible }, className)}
        style={mergedStyles}
        {...rest}
      />
    );
  }
);

Skeleton.displayName = '@mantine/core/Skeleton';
