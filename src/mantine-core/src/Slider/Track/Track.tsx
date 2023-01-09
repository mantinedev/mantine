import React from 'react';
import { DefaultProps, MantineNumberSize, MantineColor, Selectors, getSize } from '@mantine/styles';
import { Box } from '../../Box';
import { Marks, MarksStylesNames } from '../Marks/Marks';
import { sizes } from '../SliderRoot/SliderRoot.styles';
import useStyles from './Track.styles';

export type TrackStylesNames = Selectors<typeof useStyles> | MarksStylesNames;

export interface TrackProps extends DefaultProps<TrackStylesNames> {
  filled: number;
  offset?: number;
  marksOffset?: number;
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
  disabled: boolean;
  inverted?: boolean;
  variant: string;
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
  disabled,
  marksOffset,
  unstyled,
  inverted,
  variant,
  ...others
}: TrackProps) {
  const { classes } = useStyles(
    { color, radius, disabled, inverted },
    { name: 'Slider', classNames, styles, unstyled, variant, size }
  );

  return (
    <div className={classes.track} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
      <Box
        className={classes.bar}
        sx={{
          left: `calc(${offset}% - ${getSize({ size, sizes })})`,
          width: `calc(${filled}% + ${getSize({ size, sizes })})`,
        }}
      />

      {children}

      <Marks
        {...others}
        size={size}
        color={color}
        offset={marksOffset}
        classNames={classNames}
        styles={styles}
        disabled={disabled}
        unstyled={unstyled}
        inverted={inverted}
        variant={variant}
      />
    </div>
  );
}

Track.displayName = '@mantine/core/SliderTrack';
