import { clamp, useMergedRef, useReducedMotion, useTilt } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  MantineRadius,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { TiltProvider } from './Tilt.context';
import {
  TiltLayer,
  type TiltLayerFactory,
  type TiltLayerProps,
  type TiltLayerStylesNames,
} from './TiltLayer';
import classes from './Tilt.module.css';

export type TiltStylesNames = 'root' | 'content' | 'glare' | TiltLayerStylesNames;
export type TiltCssVariables = {
  root: '--tilt-perspective' | '--tilt-radius';
};

export interface TiltProps extends BoxProps, StylesApiProps<TiltFactory>, ElementProps<'div'> {
  /** Content of the component, usually `Tilt.Layer` components for a layered depth effect */
  children?: React.ReactNode;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` of the content and glare, numbers are converted to rem */
  radius?: MantineRadius;

  /** Maximum rotation in degrees applied to the content at the edges @default 15 */
  maxRotate?: number;

  /** Perspective distance of the 3D container, numbers are converted to rem @default 1000 */
  perspective?: number | string;

  /** Transition duration in ms while the pointer moves over the element @default 150 */
  transitionDuration?: number;

  /** Transition duration in ms when the element returns to its neutral position,
   *  `transitionDuration * 2` by default */
  resetTransitionDuration?: number;

  /** If set, the component reacts to the pointer position anywhere on the page @default false */
  trackWindow?: boolean;

  /** If set, the content returns to its neutral position when the pointer leaves the element @default true */
  resetOnLeave?: boolean;

  /** If set, a light glare that follows the pointer is displayed over the content @default false */
  withGlare?: boolean;
}

export type TiltFactory = Factory<{
  props: TiltProps;
  ref: HTMLDivElement;
  stylesNames: TiltStylesNames;
  vars: TiltCssVariables;
  staticComponents: {
    Layer: typeof TiltLayer;
  };
}>;

const defaultProps = {
  maxRotate: 15,
  perspective: 1000,
  transitionDuration: 150,
  trackWindow: false,
  resetOnLeave: true,
  withGlare: false,
} satisfies Partial<TiltProps>;

const varsResolver = createVarsResolver<TiltFactory>((_, { perspective, radius }) => ({
  root: {
    '--tilt-perspective': rem(perspective),
    '--tilt-radius': radius === undefined ? undefined : getRadius(radius),
  },
}));

export const Tilt = factory<TiltFactory>((_props) => {
  const props = useProps('Tilt', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    radius,
    maxRotate,
    perspective,
    transitionDuration,
    resetTransitionDuration,
    trackWindow,
    resetOnLeave,
    withGlare,
    mod,
    attributes,
    ref,
    ...others
  } = props;

  const getStyles = useStyles<TiltFactory>({
    name: 'Tilt',
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

  const reduceMotion = useReducedMotion();
  const { ref: tiltRef, roll, tilt } = useTilt<HTMLDivElement>({ trackWindow, resetOnLeave });

  const activeRoll = reduceMotion ? 0 : clamp(roll * 2, -1, 1);
  const activeTilt = reduceMotion ? 0 : clamp(tilt * 2, -1, 1);
  const isNeutral = activeRoll === 0 && activeTilt === 0;

  const duration = isNeutral
    ? (resetTransitionDuration ?? transitionDuration! * 2)
    : transitionDuration;
  const transition = `transform ${duration}ms ease-out`;

  return (
    <TiltProvider value={{ getStyles, roll: activeRoll, tilt: activeTilt, transition }}>
      <Box
        ref={useMergedRef(ref, tiltRef)}
        {...getStyles('root')}
        mod={[{ 'track-window': trackWindow, glare: withGlare }, mod]}
        {...others}
      >
        <div
          {...getStyles('content', {
            style: {
              transform: `rotateX(${activeRoll * maxRotate!}deg) rotateY(${activeTilt * maxRotate!}deg)`,
              transition,
            },
          })}
        >
          {children}
          {withGlare && (
            <div
              {...getStyles('glare', {
                style: {
                  transform: `translate(${activeTilt * 28}%, ${-activeRoll * 28}%)`,
                  transition,
                },
              })}
            />
          )}
        </div>
      </Box>
    </TiltProvider>
  );
});

Tilt.classes = classes;
Tilt.varsResolver = varsResolver;
Tilt.displayName = '@mantine/core/Tilt';
Tilt.Layer = TiltLayer;

export namespace Tilt {
  export type Props = TiltProps;
  export type StylesNames = TiltStylesNames;
  export type CssVariables = TiltCssVariables;
  export type Factory = TiltFactory;

  export namespace Layer {
    export type Props = TiltLayerProps;
    export type StylesNames = TiltLayerStylesNames;
    export type Factory = TiltLayerFactory;
  }
}
