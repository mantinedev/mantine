import React, { useRef, useState, useEffect } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { DefaultProps, MantineNumberSize, MantineColor } from '@mantine/tss';
import { MantineTransition } from '../../Transition/Transition';
import { getClientPosition } from '../utils/get-client-position/get-client-position';
import { getPosition } from '../utils/get-position/get-position';
import { getChangeValue } from '../utils/get-change-value/get-change-value';
import { getDragEventsAssigner } from '../utils/get-drag-events-assigner/get-drag-events-assigner';
import { Thumb, ThumbStylesNames } from '../Thumb/Thumb';
import { Track, TrackStylesNames } from '../Track/Track';
import { MarksStylesNames } from '../Marks/Marks';
import { SliderRoot, SliderRootStylesNames } from '../SliderRoot/SliderRoot';

export type RangeSliderStylesNames =
  | SliderRootStylesNames
  | ThumbStylesNames
  | TrackStylesNames
  | MarksStylesNames;

type Value = [number, number];

export interface RangeSliderProps
  extends DefaultProps<RangeSliderStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange' | 'defaultValue'> {
  /** Color from theme.colors */
  color?: MantineColor;

  /** Track border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Predefined track and thumb size, number to set sizes in px */
  size?: MantineNumberSize;

  /** Minimal possible value */
  min?: number;

  /** Maximum possible value */
  max?: number;

  /** Minimal range interval */
  minRange?: number;

  /** Number by which value will be incremented/decremented with thumb drag and arrows */
  step?: number;

  /** Current value for controlled slider */
  value?: Value;

  /** Default value for uncontrolled slider */
  defaultValue?: Value;

  /** Called each time value changes */
  onChange?(value: Value): void;

  /** Hidden input name, use with uncontrolled variant */
  name?: string;

  /** Marks which will be placed on the track */
  marks?: { value: number; label?: React.ReactNode }[];

  /** Function to generate label or any react node to render instead, set to null to disable label */
  label?: React.ReactNode | ((value: number) => React.ReactNode);

  /** Label appear/disappear transition */
  labelTransition?: MantineTransition;

  /** Label appear/disappear transition duration in ms */
  labelTransitionDuration?: number;

  /** Label appear/disappear transition timing function, defaults to theme.transitionRimingFunction */
  labelTransitionTimingFunction?: string;

  /** If true label will be not be hidden when user stops dragging */
  labelAlwaysOn?: boolean;

  /** First thumb aria-label */
  thumbFromLabel?: string;

  /** Second thumb aria-label */
  thumbToLabel?: string;
}

export function RangeSlider({
  classNames,
  styles,
  color,
  value,
  onChange,
  size = 'md',
  radius = 'xl',
  min = 0,
  max = 100,
  minRange = 10,
  step = 1,
  defaultValue,
  name,
  marks = [],
  label = (f) => f,
  labelTransition = 'skew-down',
  labelTransitionDuration = 150,
  labelTransitionTimingFunction,
  labelAlwaysOn = false,
  thumbFromLabel = '',
  thumbToLabel = '',
  ...others
}: RangeSliderProps) {
  const [dragging, setDragging] = useState(-1);
  const [focused, setFocused] = useState(-1);
  const [_value, setValue] = useUncontrolled<Value>({
    value,
    defaultValue,
    finalValue: [min, max],
    rule: (val) => Array.isArray(val),
    onChange,
  });
  const _valueRef = useRef(_value);
  const container = useRef<HTMLDivElement>();
  const thumbs = useRef<HTMLDivElement[]>([]);
  const start = useRef<number>();
  const offset = useRef<number>();
  const positions = [
    getPosition({ value: _value[0], min, max }),
    getPosition({ value: _value[1], min, max }),
  ];

  const _setValue = (val: Value) => {
    setValue(val);
    _valueRef.current = val;
  };

  const setRangedValue = (val: number, index: number) => {
    const clone: Value = [..._valueRef.current];
    clone[index] = val;

    if (index === 0) {
      if (val > clone[1] - minRange) {
        clone[1] = Math.min(val + minRange, max);
      }

      if (val > (max - minRange || min)) {
        clone[index] = _valueRef.current[index];
      }
    }

    if (index === 1) {
      if (val < clone[0] + minRange) {
        clone[0] = Math.max(val - minRange, min);
      }

      if (val < (minRange || min)) {
        clone[index] = _valueRef.current[index];
      }
    }
    _setValue(clone);
  };

  const handleChange = (val: number, index: number) => {
    if (container.current) {
      const containerWidth = container.current.getBoundingClientRect().width;
      const nextValue = getChangeValue({ value: val, containerWidth, min, max, step });
      setRangedValue(nextValue, index);
    }
  };

  const onDrag = (event: any) => {
    container.current && container.current.focus();
    handleChange(getClientPosition(event) + start.current - offset.current, dragging);
  };

  const onDragEnd = () => {
    setDragging(-1);
  };

  const { assignEvents, removeEvents } = getDragEventsAssigner({
    onDrag,
    onDragEnd,
  });

  useEffect(() => removeEvents, []);

  function handleThumbMouseDown(
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    index: number
  ) {
    if (event.cancelable) {
      event.preventDefault();
      event.stopPropagation();
    }

    start.current = thumbs.current[index].offsetLeft;
    offset.current = getClientPosition(event as any);

    assignEvents();
  }

  const handleTrackMouseDown = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (event.cancelable) {
      event.preventDefault();
    }

    const changePosition = getClientPosition(event.nativeEvent);
    const rect = container.current.getBoundingClientRect();

    start.current = changePosition - rect.left;
    offset.current = changePosition;

    assignEvents();
    handleChange(changePosition - rect.left, dragging);
  };

  const handleTrackMouseDownCapture = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (event.cancelable) {
      event.preventDefault();
    }

    container.current.focus();
    const rect = container.current.getBoundingClientRect();
    const changePosition = getClientPosition(event.nativeEvent);
    const changeValue = getChangeValue({
      value: changePosition - rect.left,
      max,
      min,
      step,
      containerWidth: rect.width,
    });

    const nearestHandle =
      Math.abs(_value[0] - changeValue) > Math.abs(_value[1] - changeValue) ? 1 : 0;

    setDragging(nearestHandle);
  };

  const getFocusedThumbIndex = () => {
    if (focused !== 1 && focused !== 0) {
      setFocused(0);
      return 0;
    }

    return focused;
  };

  const handleTrackKeydownCapture = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.nativeEvent.code) {
      case 'ArrowUp':
      case 'ArrowRight': {
        event.preventDefault();
        const focusedIndex = getFocusedThumbIndex();
        thumbs.current[focusedIndex].focus();
        setRangedValue(
          Math.min(Math.max(_valueRef.current[focusedIndex] + step, min), max),
          focusedIndex
        );
        break;
      }

      case 'ArrowDown':
      case 'ArrowLeft': {
        event.preventDefault();
        const focusedIndex = getFocusedThumbIndex();
        thumbs.current[focusedIndex].focus();
        setRangedValue(
          Math.min(Math.max(_valueRef.current[focusedIndex] - step, min), max),
          focusedIndex
        );
        break;
      }

      default: {
        break;
      }
    }
  };

  const sharedThumbProps = {
    max,
    min,
    color,
    size,
    labelTransition,
    labelTransitionDuration,
    labelTransitionTimingFunction,
    labelAlwaysOn,
    onBlur: () => setFocused(-1),
    classNames,
    styles,
  };

  return (
    <SliderRoot
      {...others}
      size={size}
      elementRef={container}
      onTouchStart={handleTrackMouseDown}
      onMouseDown={handleTrackMouseDown}
      onTouchStartCapture={handleTrackMouseDownCapture}
      onTouchEndCapture={() => setDragging(-1)}
      onMouseDownCapture={handleTrackMouseDownCapture}
      onMouseUpCapture={() => setDragging(-1)}
      onKeyDownCapture={handleTrackKeydownCapture}
      styles={styles}
      classNames={classNames}
    >
      <Track
        offset={positions[0]}
        filled={positions[1] - positions[0]}
        marks={marks}
        size={size}
        radius={radius}
        color={color}
        min={min}
        max={max}
        value={_value[1]}
        styles={styles}
        classNames={classNames}
        onChange={(val) => {
          const nearestValue = Math.abs(_value[0] - val) > Math.abs(_value[1] - val) ? 1 : 0;
          const clone: Value = [..._value];
          clone[nearestValue] = val;
          _setValue(clone);
        }}
      >
        <Thumb
          {...sharedThumbProps}
          value={_value[0]}
          position={positions[0]}
          dragging={dragging === 0}
          label={typeof label === 'function' ? label(_value[0]) : label}
          elementRef={(node) => {
            thumbs.current[0] = node;
          }}
          thumbLabel={thumbFromLabel}
          onMouseDown={(event) => handleThumbMouseDown(event, 0)}
          onFocus={() => setFocused(0)}
        />

        <Thumb
          {...sharedThumbProps}
          thumbLabel={thumbToLabel}
          value={_value[1]}
          position={positions[1]}
          dragging={dragging === 1}
          label={typeof label === 'function' ? label(_value[1]) : label}
          elementRef={(node) => {
            thumbs.current[1] = node;
          }}
          onMouseDown={(event) => handleThumbMouseDown(event, 1)}
          onFocus={() => setFocused(1)}
        />
      </Track>

      <input type="hidden" name={`${name}_from`} value={_value[0]} />
      <input type="hidden" name={`${name}_to`} value={_value[1]} />
    </SliderRoot>
  );
}

RangeSlider.displayName = '@mantine/core/RangeSlider';
