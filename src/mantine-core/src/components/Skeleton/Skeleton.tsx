import cx from 'clsx';
import React from 'react';
import useStyles from './Skeleton.styles';
import { DefaultProps } from '../../theme';

export interface SkeletonProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** React node*/
  children?: React.ReactNode;
  /** Sets height css property */
  height: React.CSSProperties['height'];
  /** Controls appearance // defaults to rectangle */
  type?: 'rectangle' | 'circle';
  /** True if it should be animated */
  animated?: boolean;
  /** Start color of the animation */
  startColor?: string;
  /** End color of the animation */
  endColor?: string;
}

export function Skeleton({
  endColor,
  startColor,
  children,
  height,
  type,
  animated,
  classNames,
  className,
  ...others
}: SkeletonProps) {
  const classes = useStyles(
    { height, type, animated, startColor, endColor },
    classNames,
    'skeleton'
  );

  return (
    <div
      className={cx(classes.body, className)}
      type={type}
      animated={animated}
      startColor={startColor}
      endColor={endColor}
      {...others}
    >
      {children}
    </div>
  );
}

Skeleton.displayName = '@mantine/core/Skeleton';
