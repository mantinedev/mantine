import { useCallback, useRef } from 'react';
import { clamp, useMergedRef, useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './AngleSlider.module.css';

export type AngleSliderStylesNames = 'root' | 'thumb' | 'label';
export type AngleSliderCssVariables = {
  root: '--test';
};

export interface AngleSliderProps
  extends BoxProps,
    StylesApiProps<AngleSliderFactory>,
    ElementProps<'div', 'onChange'> {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  withLabel?: boolean;
}

export type AngleSliderFactory = Factory<{
  props: AngleSliderProps;
  ref: HTMLDivElement;
  stylesNames: AngleSliderStylesNames;
  vars: AngleSliderCssVariables;
}>;

function radiansToDegrees(radians: number) {
  return radians * (180 / Math.PI);
}

function getElementCenter(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return [rect.left + rect.width / 2, rect.top + rect.height / 2];
}

function getAngle(vector: [number, number], element: HTMLElement) {
  const center = getElementCenter(element);
  const x = vector[0] - center[0];
  const y = vector[1] - center[1];
  let deg = radiansToDegrees(Math.atan2(x, y));
  deg += 180;
  if (deg < 0) {
    deg += 360;
  }
  return 360 - deg;
}

function normalize(degree: number, { max, min, step }: { max: number; min: number; step: number }) {
  const clamped = clamp(degree, min, max);
  const high = Math.ceil(clamped / step);
  const low = Math.round(clamped / step);
  return high >= clamped / step ? (high * step === 360 ? 0 : high * step) : low * step;
}

const defaultProps: Partial<AngleSliderProps> = {
  min: 0,
  max: 360,
  step: 1,
  withLabel: true,
};

const varsResolver = createVarsResolver<AngleSliderFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const AngleSlider = factory<AngleSliderFactory>((_props, ref) => {
  const props = useProps('AngleSlider', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    min,
    max,
    step,
    value,
    defaultValue,
    onChange,
    onMouseDown,
    withLabel,
    ...others
  } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: 0,
    onChange,
  });

  const getStyles = useStyles<AngleSliderFactory>({
    name: 'AngleSlider',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const updateWithEvent = (event: MouseEvent) => {
    const deg = getAngle([event.x, event.y], rootRef.current!);
    const val = normalize(deg, { min: min!, max: max!, step: step! });
    setValue(val);
  };

  const handleMouseMove = useCallback((event: MouseEvent) => {
    updateWithEvent(event);
  }, []);

  const handleMouseUp = useCallback((event: MouseEvent) => {
    updateWithEvent(event);
    endTracking();
  }, []);

  const beginTracking = () => {
    document.addEventListener('mousemove', handleMouseMove, false);
    document.addEventListener('mouseup', handleMouseUp, false);
  };

  const endTracking = () => {
    document.removeEventListener('mousemove', handleMouseMove, false);
    document.removeEventListener('mouseup', handleMouseUp, false);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseDown?.(event);
    beginTracking();
  };

  return (
    <Box
      ref={useMergedRef(ref, rootRef)}
      {...getStyles('root')}
      onMouseDown={handleMouseDown}
      {...others}
    >
      {withLabel && <div {...getStyles('label')}>{_value}</div>}
      <div {...getStyles('thumb', { style: { transform: `rotate(${_value}deg)` } })} />
    </Box>
  );
});

AngleSlider.displayName = '@mantine/core/AngleSlider';
AngleSlider.classes = classes;
