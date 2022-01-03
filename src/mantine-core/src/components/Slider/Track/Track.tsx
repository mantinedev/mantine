import React from 'react';
import { DefaultProps, MantineNumberSize, MantineColor, ClassNames } from '@mantine/styles';
import { Marks, MarksStylesNames } from '../Marks/Marks';
import useStyles from './Track.styles';

export type TrackStylesNames = ClassNames<typeof useStyles> | MarksStylesNames;

export interface TrackProps extends DefaultProps<TrackStylesNames> {
  filled: number;
  offset: number;
  marks: { value: number; label?: React.ReactNode }[];
  size: MantineNumberSize;
  radius: MantineNumberSize;
  color: MantineColor;
  min: number;
  max: number;
  value: number;
  children: React.ReactNode;
  onChange(value: number): void;
  onMouseEnter?(event?: React.MouseEvent<HTMLDivElement>): void;
  onMouseLeave?(event?: React.MouseEvent<HTMLDivElement>): void;
}

export function Track({
  filled,
  size,
  color,
  classNames,
  styles,
  radius,
  children,
  offset,
  onMouseLeave,
  onMouseEnter,
  ...others
}: TrackProps) {
  const { classes } = useStyles({ color, size, radius }, { classNames, styles, name: 'Slider' });

  return (
    <div className={classes.track} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
      <div className={classes.bar} style={{ left: `${offset}%`, width: `${filled}%` }} />

      {children}

      <Marks
        {...others}
        size={size}
        color={color}
        offset={offset}
        classNames={classNames}
        styles={styles}
      />
    </div>
  );
}

Track.displayName = '@mantine/core/SliderTrack';
