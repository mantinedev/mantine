import { clamp } from '@mantine/hooks';
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

export type AngleSliderStylesNames = 'root';
export type AngleSliderVariant = string;
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
}

export type AngleSliderFactory = Factory<{
  props: AngleSliderProps;
  ref: HTMLDivElement;
  stylesNames: AngleSliderStylesNames;
  vars: AngleSliderCssVariables;
  variant: AngleSliderVariant;
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
  deg -= 90;
  if (deg < 0) {
    deg += 360;
  }
  return deg;
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
    ...others
  } = props;

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

  return <Box ref={ref} {...getStyles('root')} {...others} />;
});

AngleSlider.displayName = '@mantine/core/AngleSlider';
AngleSlider.classes = classes;
