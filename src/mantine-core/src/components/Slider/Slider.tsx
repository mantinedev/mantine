import React, { useRef } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, mergeStyles, MantineNumberSize } from '../../theme';
import useStyles from './Slider.styles';

interface SliderProps
  extends DefaultProps<typeof useStyles>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  color?: string;
  radius?: MantineNumberSize;
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange(value: number): void;
}

function getClientPosition(e) {
  const { touches } = e;

  if (touches && touches.length) {
    const finger = touches[0];
    return {
      x: finger.clientX,
      y: finger.clientY,
    };
  }

  return {
    x: e.clientX,
    y: e.clientY,
  };
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
  radius = 'sm',
  min = 0,
  max = 100,
  step = 1,
}: SliderProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, color, radius }, classNames);
  const _styles = mergeStyles(classes, styles);
  const container = useRef(null);
  const thumb = useRef<HTMLDivElement>(null);
  const start = useRef<{ x: number; y: number }>(null);
  const offset = useRef<{ x: number; y: number }>(null);

  function getPosition() {
    let left = ((value - min) / (max - min)) * 100;
    if (left > 100) left = 100;
    if (left < 0) left = 0;
    return left;
  }

  function change(val) {
    let left = val;
    const { width } = container.current.getBoundingClientRect();
    let dx = 0;
    if (left < 0) left = 0;
    if (left > width) left = width;
    dx = (left / width) * (max - min);
    onChange((dx !== 0 ? Math.floor(dx / step) * step : 0) + min);
  }

  function getPos(e) {
    return getClientPosition(e).x + start.current.x - offset.current.x;
  }

  function handleDrag(e) {
    e.preventDefault();
    container.current.focus();
    change(getPos(e));
    document.body.classList.add(classes.grabbing);
  }

  function handleDragEnd(e) {
    e.preventDefault();
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleDragEnd);

    document.removeEventListener('touchmove', handleDrag);
    document.removeEventListener('touchend', handleDragEnd);
    document.removeEventListener('touchcancel', handleDragEnd);
    document.body.classList.remove(classes.grabbing);
  }

  function handleMouseDown(e) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const dom = thumb.current;
    const clientPos = getClientPosition(e);

    start.current = {
      x: dom.offsetLeft,
      y: dom.offsetTop,
    };

    offset.current = {
      x: clientPos.x,
      y: clientPos.y,
    };

    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchmove', handleDrag, { passive: false });
    document.addEventListener('touchend', handleDragEnd);
    document.addEventListener('touchcancel', handleDragEnd);
  }

  function handleTrackMouseDown(e) {
    e.preventDefault();
    const clientPos = getClientPosition(e);
    const rect = container.current.getBoundingClientRect();

    start.current = {
      x: clientPos.x - rect.left,
      y: clientPos.y - rect.top,
    };

    offset.current = {
      x: clientPos.x,
      y: clientPos.y,
    };

    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchmove', handleDrag, { passive: false });
    document.addEventListener('touchend', handleDragEnd);
    document.addEventListener('touchcancel', handleDragEnd);

    change(clientPos.x - rect.left);
  }

  const handleThumbKeydown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.nativeEvent.code) {
      case 'ArrowUp':
      case 'ArrowRight': {
        thumb.current.focus();
        event.preventDefault();
        onChange(Math.min(Math.max(value + step, min), max));
        break;
      }

      case 'ArrowDown':
      case 'ArrowLeft': {
        thumb.current.focus();
        event.preventDefault();
        onChange(Math.min(Math.max(value - step, min), max));
        break;
      }

      default: {
        break;
      }
    }
  };

  const position = getPosition();

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      tabIndex={-1}
      className={cx(classes.root, className)}
      ref={container}
      onTouchStart={handleTrackMouseDown}
      onMouseDown={handleTrackMouseDown}
      onKeyDownCapture={handleThumbKeydown}
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
          aria-valuenow={value}
          className={classes.thumb}
          ref={thumb}
          onTouchStart={handleMouseDown}
          onMouseDown={handleMouseDown}
          style={{ left: `${position}%` }}
          onClick={(e) => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
          }}
        />
      </div>

      <input type="hidden" value={value} />
    </div>
  );
}

Slider.displayName = '@mantine/core/Slider';
