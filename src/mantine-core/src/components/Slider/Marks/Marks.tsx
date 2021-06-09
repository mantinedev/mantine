import React from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, mergeStyles, useMantineTheme } from '../../../theme';
import { getPosition } from '../utils/get-position/get-position';
import { isMarkFilled } from './is-mark-filled';
import useStyles from './Marks.styles';

export type MarksStylesNames = keyof ReturnType<typeof useStyles>;

interface MarksProps extends DefaultProps<MarksStylesNames> {
  marks: { value: number; label?: React.ReactNode }[];
  size: MantineNumberSize;
  color: string;
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
  themeOverride,
  classNames,
  styles,
  offset,
  onChange,
}: MarksProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, size, color }, classNames, 'slider-marks');
  const _styles = mergeStyles(classes, styles);

  const items = marks.map((mark, index) => (
    <div
      className={classes.markWrapper}
      style={{ ..._styles.markWrapper, left: `${getPosition({ value: mark.value, min, max })}%` }}
      key={index}
    >
      <div
        style={{ ..._styles.mark, ...(mark.value <= value ? _styles.markFilled : null) }}
        className={cx(classes.mark, {
          [classes.markFilled]: isMarkFilled({ mark, value, offset }),
        })}
      />
      {mark.label && (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          className={classes.markLabel}
          style={_styles.markLabel}
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
