import React from 'react';
import { useMantineTheme, DefaultProps, mergeStyles } from '../../../theme';
import useStyles from './Thumb.styles';

export type ThumbStylesNames = keyof ReturnType<typeof useStyles>;

interface ThumbProps extends DefaultProps<ThumbStylesNames> {
  position: { x: number; y: number };
  type: 'slider' | 'move';
}

export function Thumb({ position, type, themeOverride, styles, classNames }: ThumbProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, type }, classNames, 'color-input');
  const _styles = mergeStyles(classes, styles);

  return (
    <div
      className={classes.thumb}
      style={{
        ..._styles.thumb,
        left: `calc(${position.x * 100}% - ${type === 'slider' ? 3 : 6}px)`,
        top: type === 'slider' ? 1 : `calc(${position.y * 100}% - 6px)`,
      }}
    />
  );
}

Thumb.displayName = '@mantine/core/Thumb';
