import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize, useMantineDefaultProps } from '@mantine/styles';
import { Box } from '../Box';
import useStyles, { SkeletonStylesParams } from './Skeleton.styles';

export interface SkeletonProps
  extends DefaultProps<never, SkeletonStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
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

  /** Whether to show the animation effect */
  animate?: boolean;
}

const defaultProps: Partial<SkeletonProps> = {
  height: 'auto',
  width: '100%',
  visible: true,
  animate: true,
};

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const { height, width, visible, animate, className, circle, radius, unstyled, ...others } =
    useMantineDefaultProps('Skeleton', defaultProps, props);

  const { classes, cx } = useStyles(
    { height, width, circle, radius, animate },
    { unstyled, name: 'Skeleton' }
  );

  return (
    <Box
      className={cx(classes.root, { [classes.visible]: visible }, className)}
      ref={ref}
      {...others}
    />
  );
});

Skeleton.displayName = '@mantine/core/Skeleton';
