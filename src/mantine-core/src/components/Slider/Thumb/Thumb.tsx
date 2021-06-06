import React, { useState } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, mergeStyles, MantineNumberSize } from '../../../theme';
import { Transition } from '../../Transition/Transition';
import useStyles from './Thumb.styles';

export type ThumbStylesNames = keyof ReturnType<typeof useStyles>;

interface ThumbProps extends DefaultProps<ThumbStylesNames> {
  max: number;
  min: number;
  value: number;
  position: number;
  dragging: boolean;
  color: string;
  size: MantineNumberSize;
  label: React.ReactNode;
  elementRef: React.ForwardedRef<HTMLDivElement>;
  onMouseDown(event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): void;
}

export function Thumb({
  max,
  min,
  value,
  position,
  label,
  elementRef,
  dragging,
  onMouseDown,
  color,
  themeOverride,
  classNames,
  styles,
  size,
}: ThumbProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ color, theme, size }, classNames);
  const _styles = mergeStyles(classes, styles);
  const [focused, setFocused] = useState(false);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      tabIndex={0}
      role="slider"
      aria-valuemax={max}
      aria-valuemin={min}
      aria-valuenow={value}
      className={cx(classes.thumb, { [classes.dragging]: dragging })}
      ref={elementRef}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onTouchStart={onMouseDown}
      onMouseDown={onMouseDown}
      style={{ ..._styles.thumb, ...(dragging ? _styles.dragging : null), left: `${position}%` }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Transition
        mounted={label != null && (dragging || focused)}
        duration={150}
        transition="skew-down"
      >
        {(transitionStyles) => (
          <div style={{ ..._styles.label, ...transitionStyles }} className={classes.label}>
            {label}
          </div>
        )}
      </Transition>
    </div>
  );
}

Thumb.displayName = '@mantine/core/SliderThumb';
