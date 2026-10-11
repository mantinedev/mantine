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
  extends BoxProps, StylesApiProps<SemiCircleProgressFactory>, ElementProps<'div'> {
  /** Progress value from `0` to `100` @category state */
  value: number;

  /** Width of the component and diameter of the full circle in px. The visible SVG height will be size/2 @default 200 @category appearance */
  size?: number;

  /** Stroke width of the circle segments in px. Cannot exceed size / 2 and will be automatically clamped if necessary @default 12 @category appearance */
  thickness?: number;

  /** Orientation of the circle @default 'up' @category appearance */
  orientation?: 'up' | 'down';

  /** Direction from which the circle is filled @default 'left-to-right' @category appearance */
  fillDirection?: 'right-to-left' | 'left-to-right';

  /** Key of `theme.colors` or any valid CSS color value @default theme.primaryColor @category appearance */
  filledSegmentColor?: MantineColor;

  /** Key of `theme.colors` or any valid CSS color value @default var(--mantine-color-track) @category appearance */
  emptySegmentColor?: MantineColor;

  /** Transition duration for the filled segment progress changes in ms. Does not affect color transitions @default 0 @category appearance */
  transitionDuration?: number;

  /** Label rendered inside the circle @category appearance */
  label?: React.ReactNode;

  /** Label position relative to the circle center @default 'bottom' @category appearance */
  labelPosition?: 'center' | 'bottom';

  /** Determines whether `role="progressbar"` and `aria-*` value attributes should be added to the root element @default true @category accessibility */
  withAria?: boolean;
}

export type SemiCircleProgressFactory = Factory<{
  props: SemiCircleProgressProps;
  ref: HTMLDivElement;
  stylesNames: SemiCircleProgressStylesNames;
  vars: SemiCircleProgressCssVariables;
}>;

const defaultProps = {
  size: 200,
  thickness: 12,
  orientation: 'up',
  fillDirection: 'left-to-right',
  labelPosition: 'bottom',
  withAria: true,
} satisfies Partial<SemiCircleProgressProps>;

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

function getClampedThickness(thickness: number, size: number) {
  return Math.min(thickness, size / 2);
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
      size,
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
      '--scp-thickness': rem(getClampedThickness(thickness!, size!)),
    },
  })
);

export const SemiCircleProgress = factory<SemiCircleProgressFactory>((_props) => {
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
    withAria,
    attributes,
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
    attributes,
    vars,
    varsResolver,
  });

  const clampedThickness = getClampedThickness(thickness, size);
  const clampedValue = clamp(value, 0, 100);
  const coordinateForCircle = size / 2;
  const radius = (size - 2 * clampedThickness) / 2;
  const circumference = Math.PI * radius;
  const semiCirclePercentage = clampedValue * (circumference / 100);

  const ariaAttributes = withAria
    ? {
        role: 'progressbar',
        'aria-valuemin': 0,
        'aria-valuemax': 100,
        'aria-valuenow': clampedValue,
        'aria-valuetext': `${clampedValue}%`,
      }
    : {};

  return (
    <Box size={size} {...getStyles('root')} {...ariaAttributes} {...others}>
      {label && (
        <div {...getStyles('label')} data-position={labelPosition} data-orientation={orientation}>
          {label}
        </div>
      )}

      <svg
        width={size}
        height={size / 2}
        viewBox={`0 0 ${size} ${size / 2}`}
        aria-hidden
        {...getStyles('svg')}
      >
        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill="none"
          stroke="var(--scp-empty-segment-color)"
          strokeWidth={clampedThickness}
          strokeDasharray={circumference}
          {...getStyles('emptySegment', { style: { strokeDashoffset: circumference } })}
        />

        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill="none"
          stroke="var(--scp-filled-segment-color)"
          strokeWidth={clampedThickness}
          strokeDasharray={circumference}
          {...getStyles('filledSegment', {
            style: {
              strokeDashoffset: semiCirclePercentage,
              ...(semiCirclePercentage === 0 ? { strokeOpacity: 0 } : null),
            },
          })}
        />
      </svg>
    </Box>
  );
});

SemiCircleProgress.displayName = '@mantine/core/SemiCircleProgress';
SemiCircleProgress.classes = classes;
SemiCircleProgress.varsResolver = varsResolver;

export namespace SemiCircleProgress {
  export type Props = SemiCircleProgressProps;
  export type StylesNames = SemiCircleProgressStylesNames;
  export type CssVariables = SemiCircleProgressCssVariables;
  export type Factory = SemiCircleProgressFactory;
}
