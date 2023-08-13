import React, { useEffect, useRef, useState, forwardRef } from 'react';
import {
  useReducedMotion,
  useResizeObserver,
  useUncontrolled,
  useId,
  useMergedRef,
  useIsomorphicEffect,
} from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  MantineColor,
  Selectors,
  useComponentDefaultProps,
  useMantineTheme,
} from '@mantine/styles';
import { Box } from '../Box';
import useStyles, {
  WRAPPER_PADDING,
  SegmentedControlStylesParams,
} from './SegmentedControl.styles';

export interface SegmentedControlItem {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export type SegmentedControlStylesNames = Selectors<typeof useStyles>;

export interface SegmentedControlProps
  extends DefaultProps<SegmentedControlStylesNames, SegmentedControlStylesParams>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  variant?: string;

  /** Segments to render */
  data: string[] | SegmentedControlItem[];

  /** Current selected value */
  value?: string;

  /** Disabled input state */
  disabled?: boolean;

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

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: MantineNumberSize;

  /** Transition duration in ms, set to 0 to turn off transitions */
  transitionDuration?: number;

  /** Transition timing function for all transitions, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Default value for uncontrolled component */
  defaultValue?: string;

  /** The orientation of the component */
  orientation?: 'vertical' | 'horizontal';

  /** Determines whether the user can change value */
  readOnly?: boolean;
}

const defaultProps = {
  disabled: false,
  size: 'sm' as const,
  transitionDuration: 200,
};

export const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>((props, ref) => {
  const {
    className,
    disabled,
    data: _data,
    name,
    value,
    onChange,
    color,
    fullWidth,
    radius,
    size,
    transitionDuration,
    transitionTimingFunction,
    classNames,
    styles,
    defaultValue,
    orientation,
    unstyled,
    variant,
    readOnly,
    ...others
  } = useComponentDefaultProps('SegmentedControl', defaultProps, props);
  const theme = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;

  const data = _data.map(
    (item: string | SegmentedControlItem): SegmentedControlItem =>
      typeof item === 'string' ? { label: item, value: item } : item
  );
  const mounted = useRef<Boolean>();

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [_value, handleValueChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: Array.isArray(data)
      ? data.find((item) => !item.disabled)?.value ?? data[0]?.value ?? null
      : null,
    onChange,
  });

  const { classes, cx } = useStyles(
    {
      fullWidth,
      color,
      radius,
      shouldAnimate: reduceMotion || !shouldAnimate,
      transitionDuration,
      transitionTimingFunction,
      orientation,
    },
    { name: 'SegmentedControl', classNames, styles, unstyled, variant, size }
  );

  const [activePosition, setActivePosition] = useState({
    width: 0,
    height: 0,
    translate: [0, 0],
  });
  const uuid = useId(name);
  const refs = useRef<Record<string, HTMLLabelElement>>({});
  const [observerRef, containerRect] = useResizeObserver();

  useIsomorphicEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      setShouldAnimate(false);
    } else {
      setShouldAnimate(true);
    }
  });

  useEffect(() => {
    if (_value in refs.current && observerRef.current) {
      const element = refs.current[_value];
      const elementRect = element.getBoundingClientRect();
      const scaledValue = element.offsetWidth / elementRect.width;
      const width = elementRect.width * scaledValue || 0;
      const height = elementRect.height * scaledValue || 0;

      const offsetRight =
        containerRect.width - element.parentElement.offsetLeft + WRAPPER_PADDING - width;
      const offsetLeft = element.parentElement.offsetLeft - WRAPPER_PADDING;

      setActivePosition({
        width,
        height,
        translate: [
          theme.dir === 'rtl' ? offsetRight : offsetLeft,
          element.parentElement.offsetTop - WRAPPER_PADDING,
        ],
      });
    }
  }, [_value, containerRect]);

  const controls = data.map((item) => (
    <div
      className={cx(classes.control, { [classes.controlActive]: _value === item.value })}
      key={item.value}
    >
      <input
        className={classes.input}
        disabled={disabled || item.disabled}
        type="radio"
        name={uuid}
        value={item.value}
        id={`${uuid}-${item.value}`}
        checked={_value === item.value}
        onChange={() => !readOnly && handleValueChange(item.value)}
      />

      <label
        className={classes.label}
        data-active={(_value === item.value && !(disabled || item.disabled)) || undefined}
        data-disabled={disabled || item.disabled || undefined}
        htmlFor={`${uuid}-${item.value}`}
        ref={(node) => {
          refs.current[item.value] = node;
        }}
      >
        {item.label}
      </label>
    </div>
  ));

  const mergedRef = useMergedRef(observerRef, ref);

  if (data.length === 0) {
    return null;
  }

  return (
    <Box className={cx(classes.root, className)} ref={mergedRef} {...others}>
      {typeof _value === 'string' && shouldAnimate && (
        <Box
          component="span"
          className={classes.indicator}
          sx={{
            width: activePosition.width,
            height: activePosition.height,
            transform: `translate(${activePosition.translate[0]}px, ${activePosition.translate[1]}px)`,
          }}
        />
      )}

      {controls}
    </Box>
  );
});

SegmentedControl.displayName = '@mantine/core/SegmentedControl';
