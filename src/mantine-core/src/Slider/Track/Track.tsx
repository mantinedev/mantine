import React from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  Selectors,
  getSize,
  rem,
} from '@mantine/styles';
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
  thumbSize?: number;
  radius: MantineNumberSize;
  color: MantineColor;
  min: number;
  max: number;
  value: number;
  children: React.ReactNode;
  onChange(value: number): void;
  disabled: boolean;
  inverted?: boolean;
  variant: string;
  containerProps?: React.PropsWithRef<React.ComponentProps<'div'>>;
}

export function Track({
  filled,
  size,
  thumbSize,
  color,
  classNames,
  styles,
  radius,
  children,
  offset,
  disabled,
  marksOffset,
  unstyled,
  inverted,
  variant,
  containerProps,
  ...others
}: TrackProps) {
  const { classes } = useStyles(
    { color, radius, disabled, inverted, thumbSize },
    { name: 'Slider', classNames, styles, unstyled, variant, size }
  );

  return (
    <>
      <div className={classes.trackContainer} {...containerProps}>
        <div className={classes.track}>
          <Box
            className={classes.bar}
            sx={{
              left: `calc(${offset}% - ${
                thumbSize ? rem(thumbSize / 2) : getSize({ size, sizes })
              })`,
              width: `calc(${filled}% + 2 * ${
                thumbSize ? rem(thumbSize / 2) : getSize({ size, sizes })
              })`,
            }}
          />

          {children}
        </div>
      </div>

      <Marks
        {...others}
        size={size}
        thumbSize={thumbSize}
        color={color}
        offset={marksOffset}
        classNames={classNames}
        styles={styles}
        disabled={disabled}
        unstyled={unstyled}
        inverted={inverted}
        variant={variant}
      />
    </>
  );
}

Track.displayName = '@mantine/core/SliderTrack';
