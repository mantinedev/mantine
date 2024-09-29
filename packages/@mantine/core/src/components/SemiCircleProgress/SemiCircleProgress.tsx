import { clamp } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getThemeColor,
  MantineColor,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './SemiCircleProgress.module.css';

export type SemiCircleProgressStylesNames =
  | 'root'
  | 'svg'
  | 'emptySegment'
  | 'filledSegment'
  | 'label';

export type SemiCircleProgressCssVariables = {
  root:
    | '--scp-filled-segment-color'
    | '--scp-empty-segment-color'
    | '--scp-rotation'
    | '--scp-transition-duration'
    | '--scp-thickness';
};

export interface SemiCircleProgressProps
  extends BoxProps,
    StylesApiProps<SemiCircleProgressFactory>,
    ElementProps<'div'> {
  /** Progress value from `0` to `100` */
  value: number;

  /** Diameter of the svg in px, `200` by default */
  size?: number;

  /** Circle thickness in px, `12` by default */
  thickness?: number;

  /** Orientation of the circle, `'up'` by default */
  orientation?: 'up' | 'down';

  /** Direction from which the circle is filled, `'left-to-right'` by default */
  fillDirection?: 'right-to-left' | 'left-to-right';

  /** Key of `theme.colors` or any valid CSS color value, `theme.primaryColor` by default */
  filledSegmentColor?: MantineColor;

  /** Key of `theme.colors` or any valid CSS color value, by default the value is determined based on the color scheme value */
  emptySegmentColor?: MantineColor;

  /** Transition duration of filled section styles changes in ms, `0` by default */
  transitionDuration?: number;

  /** Label rendered inside the circle */
  label?: React.ReactNode;

  /** Label position relative to the circle center, `'bottom'` by default */
  labelPosition?: 'center' | 'bottom';
}

export type SemiCircleProgressFactory = Factory<{
  props: SemiCircleProgressProps;
  ref: HTMLDivElement;
  stylesNames: SemiCircleProgressStylesNames;
  vars: SemiCircleProgressCssVariables;
}>;

const defaultProps: Partial<SemiCircleProgressProps> = {
  size: 200,
  thickness: 12,
  orientation: 'up',
  fillDirection: 'left-to-right',
  labelPosition: 'bottom',
};

function getRotation({
  orientation,
  fillDirection,
}: Pick<SemiCircleProgressProps, 'orientation' | 'fillDirection'>) {
  if (orientation === 'down') {
    if (fillDirection === 'right-to-left') {
      return 'rotate(180deg) rotateY(180deg)';
    }
    return 'rotate(180deg)';
  }
  if (fillDirection === 'left-to-right') {
    return 'rotateY(180deg)';
  }

  return undefined;
}

const varsResolver = createVarsResolver<SemiCircleProgressFactory>(
  (
    theme,
    {
      filledSegmentColor,
      emptySegmentColor,
      orientation,
      fillDirection,
      transitionDuration,
      thickness,
    }
  ) => ({
    root: {
      '--scp-filled-segment-color': filledSegmentColor
        ? getThemeColor(filledSegmentColor, theme)
        : undefined,
      '--scp-empty-segment-color': emptySegmentColor
        ? getThemeColor(emptySegmentColor, theme)
        : undefined,
      '--scp-rotation': getRotation({ orientation, fillDirection }),
      '--scp-transition-duration': transitionDuration ? `${transitionDuration}ms` : undefined,
      '--scp-thickness': rem(thickness),
    },
  })
);

export const SemiCircleProgress = factory<SemiCircleProgressFactory>((_props, ref) => {
  const props = useProps('SemiCircleProgress', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    thickness,
    value,
    orientation,
    fillDirection,
    filledSegmentColor,
    emptySegmentColor,
    transitionDuration,
    label,
    labelPosition,
    ...others
  } = props;

  const getStyles = useStyles<SemiCircleProgressFactory>({
    name: 'SemiCircleProgress',
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

  const coordinateForCircle = size! / 2;
  const radius = (size! - 2 * thickness!) / 2;
  const circumference = Math.PI * radius;
  const semiCirclePercentage = clamp(value, 0, 100) * (circumference / 100);

  return (
    <Box ref={ref} size={size} {...getStyles('root')} {...others}>
      {label && (
        <p {...getStyles('label')} data-position={labelPosition} data-orientation={orientation}>
          {label}
        </p>
      )}

      <svg width={size} height={size! / 2} {...getStyles('svg')}>
        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill="none"
          stroke="var(--scp-empty-segment-color)"
          strokeWidth={thickness}
          strokeDasharray={circumference}
          {...getStyles('emptySegment', { style: { strokeDashoffset: circumference } })}
        />

        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill="none"
          stroke="var(--scp-filled-segment-color)"
          strokeWidth={thickness}
          strokeDasharray={circumference}
          {...getStyles('filledSegment', { style: { strokeDashoffset: semiCirclePercentage } })}
        />
      </svg>
    </Box>
  );
});

SemiCircleProgress.displayName = '@mantine/core/SemiCircleProgress';
SemiCircleProgress.classes = classes;
