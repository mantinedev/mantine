import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/styles';
import { Box } from '../Box';
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

  /** The number of skeleton elements to render */
  count?: number;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      height = 'auto',
      width = '100%',
      visible = true,
      className,
      circle,
      radius = 'sm',
      count = 1,
      classNames,
      styles,
      ...others
    }: SkeletonProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { height, width, circle, radius },
      { classNames, styles, name: 'Skeleton' }
    );

    const skeletonElements = [];

    for (let i = 0; i < count; i += 1) {
      skeletonElements.push(
        <Box
          className={cx(classes.root, { [classes.visible]: visible }, className)}
          ref={ref}
          key={i}
          {...others}
        />
      );
    }

    return <>{skeletonElements.map((element) => element)}</>;
  }
);

Skeleton.displayName = '@mantine/core/Skeleton';
