import React from 'react';
import { DefaultProps, useMantineTheme, mergeStyles, MantineNumberSize } from '../../../theme';
import { Marks } from '../Marks/Marks';
import useStyles from './Track.styles';

export type TrackStylesNames = keyof ReturnType<typeof useStyles>;

interface TrackProps extends DefaultProps<TrackStylesNames> {
  filled: number;
  offset: number;
  marks: { value: number; label?: React.ReactNode }[];
  size: MantineNumberSize;
  radius: MantineNumberSize;
  color: string;
  min: number;
  max: number;
  value: number;
  children: React.ReactNode;
  onChange(value: number): void;
}

export function Track({
  filled,
  size,
  color,
  classNames,
  styles,
  radius,
  themeOverride,
  children,
  offset,
  ...others
}: TrackProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, color, size, radius }, classNames, 'slider');
  const _styles = mergeStyles(classes, styles);

  return (
    <div className={classes.track} style={_styles.track}>
      <div
        className={classes.bar}
        style={{ ..._styles.bar, left: `${offset}%`, width: `${filled}%` }}
      />

      {children}

      <Marks
        {...others}
        size={size}
        color={color}
        offset={offset}
        themeOverride={themeOverride}
        classNames={classNames as any}
        styles={styles as any}
      />
    </div>
  );
}

Track.displayName = '@mantine/core/SliderTrack';
