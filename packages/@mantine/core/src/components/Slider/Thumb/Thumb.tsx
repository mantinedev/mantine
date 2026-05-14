import { useState } from 'react';
import { Box } from '../../../core';
import { Transition, TransitionOverride } from '../../Transition';
import { useSliderContext } from '../Slider.context';

export interface ThumbProps extends Omit<React.ComponentProps<'div'>, 'value'> {
  max: number;
  min: number;
  value: number;
  position: number;
  dragging: boolean;
  label: React.ReactNode;
  onKeyDownCapture?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onMouseDown?: (event: any) => void;
  labelTransitionProps: TransitionOverride | undefined;
  labelAlwaysOn: boolean | undefined;
  thumbLabel: string | undefined;
  showLabelOnHover: boolean | undefined;
  isHovered?: boolean;
  children?: React.ReactNode;
  disabled: boolean | undefined;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  style?: React.CSSProperties;
}

export function Thumb({
  max,
  min,
  value,
  position,
  label,
  dragging,
  onMouseDown,
  onKeyDownCapture,
  labelTransitionProps,
  labelAlwaysOn,
  thumbLabel,
  onFocus,
  onBlur,
  showLabelOnHover,
  isHovered,
  children = null,
  disabled,
  orientation = 'horizontal',
  ref,
}: ThumbProps) {
  const { getStyles } = useSliderContext();

  const [focused, setFocused] = useState(false);

  const isVisible = labelAlwaysOn || dragging || focused || (showLabelOnHover && isHovered);

  return (
    <Box<'div'>
      tabIndex={disabled ? -1 : 0}
      role="slider"
      aria-label={thumbLabel}
      aria-valuemax={max}
      aria-valuemin={min}
      aria-valuenow={value}
      aria-disabled={disabled}
      aria-orientation={orientation}
      ref={ref}
      __vars={{ '--slider-thumb-offset': `${position}%` }}
      {...getStyles('thumb', { focusable: true })}
      mod={{ dragging, disabled }}
      onFocus={(event) => {
        setFocused(true);
        typeof onFocus === 'function' && onFocus(event);
      }}
      onBlur={(event) => {
        setFocused(false);
        typeof onBlur === 'function' && onBlur(event);
      }}
      onTouchStart={onMouseDown}
      onMouseDown={onMouseDown}
      onKeyDownCapture={onKeyDownCapture}
      onClick={(event) => event.stopPropagation()}
    >
      {children}
      <Transition
        mounted={label != null && !!isVisible}
        transition="fade"
        duration={0}
        {...labelTransitionProps}
      >
        {(transitionStyles) => (
          <div {...getStyles('label', { style: transitionStyles })}>{label}</div>
        )}
      </Transition>
    </Box>
  );
}

Thumb.displayName = '@mantine/core/SliderThumb';
