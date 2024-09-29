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

export type AngleSliderStylesNames = 'root' | 'thumb' | 'label' | 'marks' | 'mark';
export type AngleSliderCssVariables = {
  root: '--test';
};

export interface AngleSliderProps
  extends BoxProps,
    StylesApiProps<AngleSliderFactory>,
    ElementProps<'div', 'onChange'> {
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

function getAngle(coordinates: [number, number], element: HTMLElement) {
  const center = getElementCenter(element);
  const x = coordinates[0] - center[0];
  const y = coordinates[1] - center[1];
  const deg = radiansToDegrees(Math.atan2(x, y)) + 180;
  return 360 - deg;
}

function normalize(degree: number, step: number) {
  const clamped = clamp(degree, 0, 360);
  const high = Math.ceil(clamped / step);
  const low = Math.round(clamped / step);
  return high >= clamped / step ? (high * step === 360 ? 0 : high * step) : low * step;
}

const defaultProps: Partial<AngleSliderProps> = {
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
    const val = normalize(deg, step || 1);
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
      <div {...getStyles('marks')}>
        <div {...getStyles('mark', { style: { '--angle': `${_value}deg` } })} data-label={_value} />
      </div>

      {withLabel && <div {...getStyles('label')}>{_value}</div>}
      <div {...getStyles('thumb', { style: { transform: `rotate(${_value}deg)` } })} />
    </Box>
  );
});

AngleSlider.displayName = '@mantine/core/AngleSlider';
AngleSlider.classes = classes;
