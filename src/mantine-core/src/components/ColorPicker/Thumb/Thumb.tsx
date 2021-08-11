import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, mergeStyles } from '../../../theme';
import useStyles from './Thumb.styles';

export type ThumbStylesNames = keyof ReturnType<typeof useStyles>;

interface Position {
  x: number;
  y: number;
}

interface ThumbProps extends DefaultProps<ThumbStylesNames> {
  position: Position;
}

export function Thumb({
  position,
  themeOverride,
  className,
  styles,
  classNames,
  style,
}: ThumbProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, 'color-input');
  const _styles = mergeStyles(classes, styles);

  return (
    <div
      className={cx(classes.thumb, className)}
      style={{
        ..._styles.thumb,
        left: `calc(${position.x * 100}% - 6px)`,
        top: `calc(${position.y * 100}% - 6px)`,
        ...style,
      }}
    />
  );
}

Thumb.displayName = '@mantine/core/Thumb';
