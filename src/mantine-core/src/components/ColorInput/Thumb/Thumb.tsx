import React from 'react';
import { useMantineTheme, DefaultProps, mergeStyles } from '../../../theme';
import useStyles from './Thumb.styles';

export type ThumbStylesNames = keyof ReturnType<typeof useStyles>;

interface ThumbProps extends DefaultProps<ThumbStylesNames> {
  position: { x: number; y: number };
}

export function Thumb({ position, themeOverride, styles, classNames, style }: ThumbProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, 'color-input');
  const _styles = mergeStyles(classes, styles);

  return (
    <div
      className={classes.thumb}
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
