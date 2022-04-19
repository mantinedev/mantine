import React, { useEffect, useRef, useState, forwardRef } from 'react';
import {
  useReducedMotion,
  useResizeObserver,
  useUncontrolled,
  useUuid,
  useMergedRef,
  useIsomorphicEffect,
} from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  MantineColor,
  ClassNames,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';
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

  /** Border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Transition duration in ms, set to 0 to turn off transitions */
  transitionDuration?: number;

  /** Transition timing function for all transitions, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Default value for uncontrolled component */
  defaultValue?: string;

  /** Display Vertically */
  orientation?: 'vertical' | 'horizontal';
}

const defaultProps: Partial<SegmentedControlProps> = {
  disabled: false,
  size: 'sm',
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
    ...others
  } = useMantineDefaultProps('SegmentedControl', defaultProps, props);

  const reduceMotion = useReducedMotion();
  const data = _data.map((item: any) =>
    typeof item === 'string' ? { label: item, value: item } : item
  );
  const mounted = useRef<Boolean>();

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [_value, handleValueChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: Array.isArray(data) ? data[0].value : null,
    onChange,
    rule: (val) => !!val,
  });

  const { classes, cx, theme } = useStyles(
    {
      size,
      fullWidth,
      color,
      radius,
      shouldAnimate: reduceMotion || !shouldAnimate,
      transitionDuration,
      transitionTimingFunction,
      orientation,
    },
    { classNames, styles, name: 'SegmentedControl' }
  );

  const [activePosition, setActivePosition] = useState({
    width: 0,
    height: 0,
    translate: [0, 0],
  });
  const uuid = useUuid(name);
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
        disabled={disabled}
        type="radio"
        name={uuid}
        value={item.value}
        id={`${uuid}-${item.value}`}
        checked={_value === item.value}
        onChange={() => handleValueChange(item.value)}
      />

      <label
        className={cx(classes.label, {
          [classes.labelActive]: _value === item.value,
          [classes.disabled]: disabled,
        })}
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
    <Box className={cx(classes.root, className)} ref={useMergedRef(observerRef, ref)} {...others}>
      {!!_value && shouldAnimate && (
        <Box
          component="span"
          className={classes.active}
          sx={{
            width: activePosition.width,
            height: activePosition.height,
            transform: `translate(${activePosition.translate[0]}px, ${activePosition.translate[1]}px )`,
          }}
        />
      )}

      {controls}
    </Box>
  );
});

SegmentedControl.displayName = '@mantine/core/SegmentedControl';
