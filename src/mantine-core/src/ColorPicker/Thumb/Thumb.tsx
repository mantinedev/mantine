import React from 'react';
import { DefaultProps, MantineSize, Selectors } from '@mantine/styles';
import useStyles, { THUMB_SIZES } from './Thumb.styles';

export type ThumbStylesNames = Selectors<typeof useStyles>;

interface Position {
  x: number;
  y: number;
}

export interface ThumbProps extends DefaultProps<ThumbStylesNames> {
  variant?: string;
  position: Position;
  size: MantineSize;
  __staticSelector: string;
}

export function Thumb({
  position,
  className,
  styles,
  classNames,
  style,
  size,
  __staticSelector,
  unstyled,
  variant,
}: ThumbProps) {
  const { classes, cx } = useStyles(null, {
    classNames,
    styles,
    name: __staticSelector,
    unstyled,
    size,
    variant,
  });

  return (
    <div
      className={cx(classes.thumb, className)}
      style={{
        left: `calc(${position.x * 100}% - ${THUMB_SIZES[size]} / 2)`,
        top: `calc(${position.y * 100}% - ${THUMB_SIZES[size]} / 2)`,
        ...style,
      }}
    />
  );
}

Thumb.displayName = '@mantine/core/Thumb';
