import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, mergeStyles } from '../../../theme';
import useStyles from './Thumb.styles';

export type ThumbStylesNames = keyof ReturnType<typeof useStyles>;

interface ThumbProps extends DefaultProps<ThumbStylesNames> {
  color: string;
  size: number;
  position: { x: number; y: number };
  style?: React.CSSProperties;
}

export function Thumb({
  color,
  size,
  position,
  themeOverride,
  style,
  styles,
  classNames,
}: ThumbProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, 'color-input');
  const _styles = mergeStyles(classes, styles);

  return (
    <div
      className={classes.thumb}
      style={{
        left: `calc(${position.x * 100}% - ${size / 2}px)`,
        top: `calc(${position.y * 100}% - ${size / 2}px)`,
        width: size,
        height: size,
        borderRadius: size,
        ...style,
      }}
    >
      <div className={cx(classes.thumbOverlay, classes.thumbCheckers)} />
      <div
        className={classes.thumbOverlay}
        style={{ ..._styles.thumbOverlay, backgroundColor: color }}
      />
    </div>
  );
}

Thumb.displayName = '@mantine/core/Thumb';
