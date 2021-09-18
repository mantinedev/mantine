import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, mergeStyles, MantineSize } from '../../../theme';
import useStyles, { THUMB_SIZES } from './Thumb.styles';

export type ThumbStylesNames = keyof ReturnType<typeof useStyles>;

interface Position {
  x: number;
  y: number;
}

interface ThumbProps extends DefaultProps<ThumbStylesNames> {
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
}: ThumbProps) {
  const theme = useMantineTheme();
  const classes = useStyles({ theme, size }, classNames, __staticSelector);
  const _styles = mergeStyles(classes, styles);

  return (
    <div
      className={cx(classes.thumb, className)}
      style={{
        ..._styles.thumb,
        left: `calc(${position.x * 100}% - ${THUMB_SIZES[size] / 2}px)`,
        top: `calc(${position.y * 100}% - ${THUMB_SIZES[size] / 2}px)`,
        ...style,
      }}
    />
  );
}

Thumb.displayName = '@mantine/core/Thumb';
