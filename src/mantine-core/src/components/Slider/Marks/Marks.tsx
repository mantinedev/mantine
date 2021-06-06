import React from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, mergeStyles, useMantineTheme } from '../../../theme';
import { getPosition } from '../get-position';
import useStyles from './Marks.styles';

export type MarksStylesNames = keyof ReturnType<typeof useStyles>;

interface MarksProps extends DefaultProps<MarksStylesNames> {
  marks: { value: number; label?: React.ReactNode }[];
  size: MantineNumberSize;
  color: string;
  min: number;
  max: number;
  value: number;
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
}: MarksProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, size, color }, classNames);
  const _styles = mergeStyles(classes, styles);

  const items = marks.map((mark, index) => (
    <div
      className={classes.markWrapper}
      style={{ ..._styles.markWrapper, left: `${getPosition({ value: mark.value, min, max })}%` }}
      key={index}
    >
      <div
        className={cx(classes.mark, { [classes.markFilled]: mark.value <= value })}
        style={{ ..._styles.mark, ...(mark.value <= value ? _styles.markFilled : null) }}
      />
      {mark.label && (
        <div className={classes.markLabel} style={_styles.markLabel}>
          {mark.label}
        </div>
      )}
    </div>
  ));

  return <>{items}</>;
}

Marks.displayName = '@mantine/core/SliderMarks';
