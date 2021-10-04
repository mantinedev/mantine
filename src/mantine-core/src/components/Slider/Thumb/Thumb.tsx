import React, { useState, forwardRef } from 'react';
import {
  useMantineTheme,
  mergeStyles,
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  ClassNames,
} from '@mantine/styles';
import { Transition, MantineTransition } from '../../Transition';
import useStyles from './Thumb.styles';

export type ThumbStylesNames = ClassNames<typeof useStyles>;

interface ThumbProps extends DefaultProps<ThumbStylesNames> {
  max: number;
  min: number;
  value: number;
  position: number;
  dragging: boolean;
  color: MantineColor;
  size: MantineNumberSize;
  label: React.ReactNode;
  onMouseDown(event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): void;
  labelTransition?: MantineTransition;
  labelTransitionDuration?: number;
  labelTransitionTimingFunction?: string;
  labelAlwaysOn: boolean;
  thumbLabel: string;
  onFocus?(): void;
  onBlur?(): void;
}

export const Thumb = forwardRef<HTMLDivElement, ThumbProps>(
  (
    {
      max,
      min,
      value,
      position,
      label,
      dragging,
      onMouseDown,
      color,
      classNames,
      styles,
      size,
      labelTransition,
      labelTransitionDuration,
      labelTransitionTimingFunction,
      labelAlwaysOn,
      thumbLabel,
      onFocus,
      onBlur,
    }: ThumbProps,
    ref
  ) => {
    const theme = useMantineTheme();
    const { classes, cx } = useStyles({ color, size }, classNames, 'slider');
    const _styles = mergeStyles(classes, styles);
    const [focused, setFocused] = useState(false);

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        tabIndex={0}
        role="slider"
        aria-label={thumbLabel}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
        ref={ref}
        className={cx(classes.thumb, { [classes.dragging]: dragging })}
        onFocus={() => {
          setFocused(true);
          typeof onFocus === 'function' && onFocus();
        }}
        onBlur={() => {
          setFocused(false);
          typeof onBlur === 'function' && onBlur();
        }}
        onTouchStart={onMouseDown}
        onMouseDown={onMouseDown}
        onClick={(event) => event.stopPropagation()}
        style={{ ..._styles.thumb, ...(dragging ? _styles.dragging : null), left: `${position}%` }}
      >
        <Transition
          mounted={label != null && (labelAlwaysOn || dragging || focused)}
          duration={labelTransitionDuration}
          transition={labelTransition}
          timingFunction={labelTransitionTimingFunction || theme.transitionTimingFunction}
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
);

Thumb.displayName = '@mantine/core/SliderThumb';
