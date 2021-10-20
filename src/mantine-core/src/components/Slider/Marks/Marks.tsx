import React from 'react';
import { DefaultProps, MantineNumberSize, MantineColor, ClassNames } from '@mantine/styles';
import { getPosition } from '../utils/get-position/get-position';
import { isMarkFilled } from './is-mark-filled';
import useStyles from './Marks.styles';

export type MarksStylesNames = ClassNames<typeof useStyles>;

interface MarksProps extends DefaultProps<MarksStylesNames> {
  marks: { value: number; label?: React.ReactNode }[];
  size: MantineNumberSize;
  color: MantineColor;
  min: number;
  max: number;
  value: number;
  onChange(value: number): void;
  offset?: number;
}

export function Marks({
  marks,
  color,
  size,
  min,
  max,
  value,
  classNames,
  styles,
  offset,
  onChange,
}: MarksProps) {
  const { classes, cx } = useStyles({ size, color }, { classNames, styles, name: 'Slider' });

  const items = marks.map((mark, index) => (
    <div
      className={classes.markWrapper}
      style={{ left: `${getPosition({ value: mark.value, min, max })}%` }}
      key={index}
    >
      <div
        className={cx(classes.mark, {
          [classes.markFilled]: isMarkFilled({ mark, value, offset }),
        })}
      />
      {mark.label && (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          className={classes.markLabel}
          onMouseDown={(event) => {
            event.stopPropagation();
            onChange(mark.value);
          }}
          onTouchStart={(event) => {
            event.stopPropagation();
            onChange(mark.value);
          }}
        >
          {mark.label}
        </div>
      )}
    </div>
  ));

  return <div>{items}</div>;
}

Marks.displayName = '@mantine/core/SliderMarks';
