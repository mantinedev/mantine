import React, { useState } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, mergeStyles, MantineNumberSize } from '../../../theme';
import { Transition, MantineTransition } from '../../Transition/Transition';
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
  labelTransition?: MantineTransition;
  labelTransitionDuration?: number;
  labelTransitionTimingFunction?: string;
  labelAlwaysOn: boolean;
  thumbLabel: string;
  onFocus?(): void;
  onBlur?(): void;
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
  labelTransition,
  labelTransitionDuration,
  labelTransitionTimingFunction,
  labelAlwaysOn,
  thumbLabel,
  onFocus,
  onBlur,
}: ThumbProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ color, theme, size }, classNames, 'slider');
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
      ref={elementRef}
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

Thumb.displayName = '@mantine/core/SliderThumb';
