import React, { useRef, useState } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, mergeStyles, MantineNumberSize } from '../../theme';
import { getClientPosition, ClientPositionEvent } from './get-client-position';
import { getFilledPosition } from './get-filled-position';
import { getChangeValue } from './get-change-value';
import { getEventsManager } from './get-events-manager';
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
  value: number;
  onChange(value: number): void;
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
}: SliderProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme, color, radius, size }, classNames);
  const _styles = mergeStyles(classes, styles);
  const [dragging, setDragging] = useState(false);
  const container = useRef<HTMLDivElement>();
  const thumb = useRef<HTMLDivElement>();
  const start = useRef<number>();
  const offset = useRef<number>();
  const position = getFilledPosition({ value, min, max });

  const handleChange = (val: number) =>
    onChange(
      getChangeValue({
        value: val,
        containerWidth: container.current.getBoundingClientRect().width,
        min,
        max,
        step,
      })
    );

  function handleDrag(e: ClientPositionEvent) {
    container.current.focus();
    handleChange(getClientPosition(e).x + start.current - offset.current);
  }

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const events = getEventsManager({ onDrag: handleDrag, onDragEnd: handleDragEnd });

  function handleDragEnd() {
    events.remove();
    setDragging(false);
  }

  function handleThumbMouseDown(
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) {
    event.preventDefault();
    event.stopPropagation();

    start.current = thumb.current.offsetLeft;
    offset.current = getClientPosition(event as any).x;

    events.add();
  }

  const handleTrackMouseDown = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    const changePosition = getClientPosition(event as any);
    const rect = container.current.getBoundingClientRect();

    start.current = changePosition.x - rect.left;
    offset.current = changePosition.x;

    events.add();
    handleChange(changePosition.x - rect.left);
  };

  const handleTrackKeydownCapture = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.nativeEvent.code) {
      case 'ArrowUp':
      case 'ArrowRight': {
        event.preventDefault();
        thumb.current.focus();
        onChange(Math.min(Math.max(value + step, min), max));
        break;
      }

      case 'ArrowDown':
      case 'ArrowLeft': {
        event.preventDefault();
        thumb.current.focus();
        onChange(Math.min(Math.max(value - step, min), max));
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
          aria-valuenow={value}
          className={cx(classes.thumb, { [classes.dragging]: dragging })}
          ref={thumb}
          onTouchStart={handleThumbMouseDown}
          onMouseDown={handleThumbMouseDown}
          style={{ left: `${position}%` }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      </div>

      <input type="hidden" value={value} />
    </div>
  );
}

Slider.displayName = '@mantine/core/Slider';
