import React, { useEffect, useRef, useState } from 'react';
import { useId, useReducedMotion, useUncontrolled } from '@mantine/hooks';
import {
  mergeStyles,
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  MantineColor,
  ClassNames,
} from '@mantine/styles';
import useStyles, { WRAPPER_PADDING } from './SegmentedControl.styles';

export interface SegmentedControlItem {
  value: string;
  label: React.ReactNode;
}

export type SegmentedControlStylesNames = ClassNames<typeof useStyles>;

export interface SegmentedControlProps
  extends DefaultProps<SegmentedControlStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  /** Data based on which controls are rendered */
  data: string[] | SegmentedControlItem[];

  /** Current selected value */
  value?: string;

  /** Called when value changes */
  onChange?(value: string): void;

  /** Name of the radio group, default to random id */
  name?: string;

  /** True if component should have 100% width */
  fullWidth?: boolean;

  /** Active control color from theme.colors, defaults to white in light color scheme and theme.colors.dark[9] in dark */
  color?: MantineColor;

  /** Controls font-size, paddings and height */
  size?: MantineSize;

  /** Border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Transition duration in ms, set to 0 to turn off transitions */
  transitionDuration?: number;

  /** Transition timing function for all transitions, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Default value for uncontrolled component */
  defaultValue?: string;
}

export function SegmentedControl({
  className,
  style,
  data: _data,
  name,
  value,
  onChange,
  color,
  fullWidth,
  radius = 'sm',
  size = 'sm',
  transitionDuration = 200,
  transitionTimingFunction,
  classNames,
  styles,
  defaultValue,
  ...others
}: SegmentedControlProps) {
  const reduceMotion = useReducedMotion();
  const data = _data.map((item: any) =>
    typeof item === 'string' ? { label: item, value: item } : item
  );

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [_value, handleValueChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: Array.isArray(data) ? data[0].value : null,
    onChange,
    rule: (val) => !!val,
  });

  const { classes, cx } = useStyles(
    {
      size,
      fullWidth,
      color,
      radius,
      shouldAnimate: reduceMotion || !shouldAnimate,
      transitionDuration,
      transitionTimingFunction,
    },
    classNames,
    'segmented-control'
  );

  const _styles = mergeStyles(classes, styles);
  const [activePosition, setActivePosition] = useState({ width: 0, translate: 0 });
  const uuid = useId(name);
  const refs = useRef<Record<string, HTMLLabelElement>>({});
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (_value in refs.current && wrapperRef.current) {
        const element = refs.current[_value];
        const rect = element.getBoundingClientRect();
        setActivePosition({
          width: rect.width,
          translate: rect.x - wrapperRef.current.getBoundingClientRect().x - WRAPPER_PADDING,
        });

        if (!shouldAnimate) {
          setTimeout(() => {
            setShouldAnimate(true);
          }, 4);
        }
      }
    });
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [_value]);

  const controls = data.map((item) => (
    <div
      className={cx(classes.control, { [classes.controlActive]: _value === item.value })}
      style={{ ..._styles.control, ...(_value === item.value ? _styles.controlActive : null) }}
      key={item.value}
    >
      <input
        className={classes.input}
        style={_styles.input}
        type="radio"
        name={uuid}
        value={item.value}
        id={`${uuid}-${item.value}`}
        checked={_value === item.value}
        onChange={() => handleValueChange(item.value)}
      />

      <label
        className={cx(classes.label, { [classes.labelActive]: _value === item.value })}
        style={{ ..._styles.label, ...(_value === item.value ? _styles.labelActive : null) }}
        htmlFor={`${uuid}-${item.value}`}
        ref={(node) => {
          refs.current[item.value] = node;
        }}
      >
        {item.label}
      </label>
    </div>
  ));

  return (
    <div
      className={cx(classes.root, className)}
      ref={wrapperRef}
      style={{ ...style, ..._styles.root }}
      {...others}
    >
      {!!_value && (
        <span
          className={classes.active}
          style={{
            ..._styles.active,
            width: activePosition.width,
            transform: `translateX(${activePosition.translate}px)`,
          }}
        />
      )}

      {controls}
    </div>
  );
}

SegmentedControl.displayName = '@mantine/core/SegmentedControl';
