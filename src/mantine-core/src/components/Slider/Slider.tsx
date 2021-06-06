import React, { useRef, useState, useEffect } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, mergeStyles, MantineNumberSize } from '../../theme';
import { Transition } from '../Transition/Transition';
import { getClientPosition, ClientPositionEvent } from './get-client-position';
import { getPosition } from './get-position';
import { getChangeValue } from './get-change-value';
import { getDragEventsAssigner } from './get-drag-events-assigner';
import useStyles from './Slider.styles';

interface SliderProps
  extends DefaultProps<typeof useStyles>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  color?: string;
  radius?: MantineNumberSize;
  size?: MantineNumberSize;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?(value: number): void;
  name?: string;
  marks?: { value: number; label?: React.ReactNode }[];
  label?: React.ReactNode | ((value: number) => React.ReactNode);
}

export function Slider({
  className,
  style,
  themeOverride,
  classNames,
  styles,
  color,
  value,
  onChange,
  size = 'md',
  radius = 'xl',
  min = 0,
  max = 100,
  step = 1,
  defaultValue,
  name,
  marks = [],
  label = (f) => f,
}: SliderProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, color, radius, size }, classNames);
  const _styles = mergeStyles(classes, styles);
  const [dragging, setDragging] = useState(false);
  const [thumbFocused, setThumbFocused] = useState(false);
  const [_value, setValue] = useState(
    typeof value === 'number' ? value : typeof defaultValue === 'number' ? defaultValue : 0
  );
  const container = useRef<HTMLDivElement>();
  const thumb = useRef<HTMLDivElement>();
  const start = useRef<number>();
  const offset = useRef<number>();
  const position = getPosition({ value: _value, min, max });
  const _label = typeof label === 'function' ? label(_value) : label;
  const markItems = marks.map((mark, index) => (
    <div
      className={classes.markWrapper}
      style={{ left: `${getPosition({ value: mark.value, min, max })}%` }}
      key={index}
    >
      <div className={cx(classes.mark, { [classes.markFilled]: mark.value <= _value })} />
      {mark.label && <div className={classes.markLabel}>{mark.label}</div>}
    </div>
  ));

  useEffect(() => {
    if (typeof value === 'number') {
      setValue(value);
    }
  }, [value]);

  const handleChange = (val: number) => {
    const containerWidth = container.current.getBoundingClientRect().width;
    const nextValue = getChangeValue({ value: val, containerWidth, min, max, step });
    setValue(nextValue);
    typeof onChange === 'function' && onChange(nextValue);
  };

  const assignEvents = getDragEventsAssigner({
    onDrag: (event: ClientPositionEvent) => {
      container.current.focus();
      handleChange(getClientPosition(event) + start.current - offset.current);
    },
    onDragEnd: () => {
      setDragging(false);
    },
  });

  function handleThumbMouseDown(
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) {
    event.preventDefault();
    event.stopPropagation();

    start.current = thumb.current.offsetLeft;
    offset.current = getClientPosition(event as any);

    assignEvents();
  }

  const handleTrackMouseDown = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    const changePosition = getClientPosition(event as any);
    const rect = container.current.getBoundingClientRect();

    start.current = changePosition - rect.left;
    offset.current = changePosition;

    assignEvents();
    handleChange(changePosition - rect.left);
  };

  const handleTrackKeydownCapture = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.nativeEvent.code) {
      case 'ArrowUp':
      case 'ArrowRight': {
        event.preventDefault();
        thumb.current.focus();
        onChange(Math.min(Math.max(_value + step, min), max));
        break;
      }

      case 'ArrowDown':
      case 'ArrowLeft': {
        event.preventDefault();
        thumb.current.focus();
        onChange(Math.min(Math.max(_value - step, min), max));
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      tabIndex={-1}
      className={cx(classes.root, className)}
      ref={container}
      onTouchStart={handleTrackMouseDown}
      onMouseDown={handleTrackMouseDown}
      onMouseDownCapture={() => setDragging(true)}
      onMouseUpCapture={() => setDragging(false)}
      onKeyDownCapture={handleTrackKeydownCapture}
      style={{ ...style, ..._styles.root }}
    >
      <div className={classes.track}>
        <div className={classes.bar} style={{ width: `${position}%` }} />
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div
          tabIndex={0}
          role="slider"
          aria-valuemax={max}
          aria-valuemin={min}
          aria-valuenow={_value}
          className={cx(classes.thumb, { [classes.dragging]: dragging })}
          ref={thumb}
          onFocus={() => setThumbFocused(true)}
          onBlur={() => setThumbFocused(false)}
          onTouchStart={handleThumbMouseDown}
          onMouseDown={handleThumbMouseDown}
          style={{ left: `${position}%` }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Transition
            mounted={_label != null && (dragging || thumbFocused)}
            duration={150}
            transition="skew-down"
          >
            {(transitionStyles) => (
              <div style={{ ...transitionStyles }} className={classes.label}>
                {_label}
              </div>
            )}
          </Transition>
        </div>
        {markItems}
      </div>

      <input type="hidden" name={name} value={_value} />
    </div>
  );
}

Slider.displayName = '@mantine/core/Slider';
