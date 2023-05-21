import React from 'react';
import { DefaultProps, MantineNumberSize, MantineColor, Selectors } from '@mantine/styles';
import { Box } from '../../Box';
import { getPosition } from '../utils/get-position/get-position';
import { isMarkFilled } from './is-mark-filled';
import useStyles from './Marks.styles';

export type MarksStylesNames = Selectors<typeof useStyles>;

export interface MarksProps extends DefaultProps<MarksStylesNames> {
  marks: { value: number; label?: React.ReactNode }[];
  size: MantineNumberSize;
  thumbSize?: number;
  color: MantineColor;
  min: number;
  max: number;
  value: number;
  onChange(value: number): void;
  offset?: number;
  disabled: boolean;
  inverted?: boolean;
  variant: string;
}

export function Marks({
  marks,
  color,
  size,
  thumbSize,
  min,
  max,
  value,
  classNames,
  styles,
  offset,
  onChange,
  disabled,
  unstyled,
  inverted,
  variant,
}: MarksProps) {
  const { classes, cx } = useStyles(
    { color, disabled, thumbSize },
    { name: 'Slider', classNames, styles, unstyled, variant, size }
  );

  const items = marks.map((mark, index) => (
    <Box
      className={classes.markWrapper}
      sx={{ left: `${getPosition({ value: mark.value, min, max })}%` }}
      key={index}
    >
      <div
        className={cx(classes.mark, {
          [classes.markFilled]: isMarkFilled({ mark, value, offset, inverted }),
        })}
      />
      {mark.label && (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          className={classes.markLabel}
          onMouseDown={(event) => {
            event.stopPropagation();
            !disabled && onChange(mark.value);
          }}
          onTouchStart={(event) => {
            event.stopPropagation();
            !disabled && onChange(mark.value);
          }}
        >
          {mark.label}
        </div>
      )}
    </Box>
  ));

  return <div className={classes.marksContainer}>{items}</div>;
}

Marks.displayName = '@mantine/core/SliderMarks';
