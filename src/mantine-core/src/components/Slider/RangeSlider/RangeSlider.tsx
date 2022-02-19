import React, { useRef, useState, forwardRef, useEffect } from 'react';
import { useMove, useUncontrolled, useMergedRef } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  useMantineTheme,
  useMantineDefaultProps,
} from '@mantine/styles';
import { MantineTransition } from '../../Transition';
import { getClientPosition } from '../utils/get-client-position/get-client-position';
import { getPosition } from '../utils/get-position/get-position';
import { getChangeValue } from '../utils/get-change-value/get-change-value';
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

  /** Called when user stops dragging slider or changes value with arrows */
  onChangeEnd?(value: Value): void;

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

  /**If true slider label will appear on hover */
  showLabelOnHover?: boolean;

  /** Thumbs children, can be used to add icons */
  thumbChildren?: React.ReactNode;
}

const defaultProps: Partial<RangeSliderProps> = {
  size: 'md',
  radius: 'xl',
  min: 0,
  max: 100,
  minRange: 10,
  step: 1,
  marks: [],
  label: (f) => f,
  labelTransition: 'skew-down',
  labelTransitionDuration: 0,
  labelAlwaysOn: false,
  thumbFromLabel: '',
  thumbToLabel: '',
  showLabelOnHover: true,
};

export const RangeSlider = forwardRef<HTMLDivElement, RangeSliderProps>(
  (props: RangeSliderProps, ref) => {
    const {
      classNames,
      styles,
      color,
      value,
      onChange,
      onChangeEnd,
      size,
      radius,
      min,
      max,
      minRange,
      step,
      defaultValue,
      name,
      marks,
      label,
      labelTransition,
      labelTransitionDuration,
      labelTransitionTimingFunction,
      labelAlwaysOn,
      thumbFromLabel,
      thumbToLabel,
      showLabelOnHover,
      thumbChildren,
      ...others
    } = useMantineDefaultProps('RangeSlider', defaultProps, props);

    const theme = useMantineTheme();
    const [focused, setFocused] = useState(-1);
    const [hovered, setHovered] = useState(false);
    const [_value, setValue] = useUncontrolled<Value>({
      value,
      defaultValue,
      finalValue: [min, max],
      rule: (val) => Array.isArray(val),
      onChange,
    });
    const valueRef = useRef(_value);
    const thumbs = useRef<HTMLDivElement[]>([]);
    const thumbIndex = useRef<number>(undefined);
    const positions = [
      getPosition({ value: _value[0], min, max }),
      getPosition({ value: _value[1], min, max }),
    ];

    const _setValue = (val: Value) => {
      setValue(val);
      valueRef.current = val;
    };

    useEffect(
      () => {
        if (Array.isArray(value)) {
          valueRef.current = value;
        }
      },
      Array.isArray(value) ? [value[0], value[1]] : [null, null]
    );

    const setRangedValue = (val: number, index: number, triggerChangeEnd: boolean) => {
      const clone: Value = [...valueRef.current];
      clone[index] = val;

      if (index === 0) {
        if (val > clone[1] - minRange) {
          clone[1] = Math.min(val + minRange, max);
        }

        if (val > (max - minRange || min)) {
          clone[index] = valueRef.current[index];
        }
      }

      if (index === 1) {
        if (val < clone[0] + minRange) {
          clone[0] = Math.max(val - minRange, min);
        }

        if (val < (minRange || min)) {
          clone[index] = valueRef.current[index];
        }
      }
      _setValue(clone);

      if (triggerChangeEnd) {
        onChangeEnd?.(valueRef.current);
      }
    };

    const handleChange = (val: number) => {
      const nextValue = getChangeValue({ value: val, min, max, step });
      setRangedValue(nextValue, thumbIndex.current, false);
    };

    const { ref: container, active } = useMove(
      ({ x }) => handleChange(x),
      { onScrubEnd: () => onChangeEnd?.(valueRef.current) },
      theme.dir
    );

    function handleThumbMouseDown(
      event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
      index: number
    ) {
      if (event.cancelable) {
        event.preventDefault();
        event.stopPropagation();
      }

      thumbIndex.current = index;
    }

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
      const _nearestHandle = theme.dir === 'ltr' ? nearestHandle : nearestHandle === 1 ? 0 : 1;

      thumbIndex.current = _nearestHandle;
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
        case 'ArrowUp': {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            Math.min(Math.max(valueRef.current[focusedIndex] + step, min), max),
            focusedIndex,
            true
          );
          break;
        }
        case 'ArrowRight': {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            Math.min(
              Math.max(
                theme.dir === 'rtl'
                  ? valueRef.current[focusedIndex] - step
                  : valueRef.current[focusedIndex] + step,
                min
              ),
              max
            ),
            focusedIndex,
            true
          );
          break;
        }

        case 'ArrowDown': {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            Math.min(Math.max(valueRef.current[focusedIndex] - step, min), max),
            focusedIndex,
            true
          );
          break;
        }
        case 'ArrowLeft': {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            Math.min(
              Math.max(
                theme.dir === 'rtl'
                  ? valueRef.current[focusedIndex] + step
                  : valueRef.current[focusedIndex] - step,
                min
              ),
              max
            ),
            focusedIndex,
            true
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

    const hasArrayThumbChildren = Array.isArray(thumbChildren);

    return (
      <SliderRoot
        {...others}
        size={size}
        ref={useMergedRef(container, ref)}
        onTouchStartCapture={handleTrackMouseDownCapture}
        onTouchEndCapture={() => {
          thumbIndex.current = -1;
        }}
        onMouseDownCapture={handleTrackMouseDownCapture}
        onMouseUpCapture={() => {
          thumbIndex.current = -1;
        }}
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
          onMouseEnter={showLabelOnHover ? () => setHovered(true) : undefined}
          onMouseLeave={showLabelOnHover ? () => setHovered(false) : undefined}
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
            dragging={active}
            label={typeof label === 'function' ? label(_value[0]) : label}
            ref={(node) => {
              thumbs.current[0] = node;
            }}
            thumbLabel={thumbFromLabel}
            onMouseDown={(event) => handleThumbMouseDown(event, 0)}
            onFocus={() => setFocused(0)}
            showLabelOnHover={showLabelOnHover && hovered}
          >
            {hasArrayThumbChildren ? thumbChildren[0] : thumbChildren}
          </Thumb>

          <Thumb
            {...sharedThumbProps}
            thumbLabel={thumbToLabel}
            value={_value[1]}
            position={positions[1]}
            dragging={active}
            label={typeof label === 'function' ? label(_value[1]) : label}
            ref={(node) => {
              thumbs.current[1] = node;
            }}
            onMouseDown={(event) => handleThumbMouseDown(event, 1)}
            onFocus={() => setFocused(1)}
            showLabelOnHover={showLabelOnHover && hovered}
          >
            {hasArrayThumbChildren ? thumbChildren[1] : thumbChildren}
          </Thumb>
        </Track>

        <input type="hidden" name={`${name}_from`} value={_value[0]} />
        <input type="hidden" name={`${name}_to`} value={_value[1]} />
      </SliderRoot>
    );
  }
);

RangeSlider.displayName = '@mantine/core/RangeSlider';
