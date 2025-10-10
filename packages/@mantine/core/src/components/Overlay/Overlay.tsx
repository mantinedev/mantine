import {
  Box,
  BoxProps,
  createVarsResolver,
  getDefaultZIndex,
  getRadius,
  MantineRadius,
  polymorphicFactory,
  PolymorphicFactory,
  rem,
  rgba,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './Overlay.module.css';

export type OverlayStylesNames = 'root';
export type OverlayCssVariables = {
  root: '--overlay-bg' | '--overlay-filter' | '--overlay-radius' | '--overlay-z-index';
};

export interface OverlayProps extends BoxProps, StylesApiProps<OverlayFactory> {
  /** Overlay `background-color` opacity 0–1, ignored when `gradient` prop is set @default `0.6` */
  backgroundOpacity?: number;

  /** Overlay `background-color` @default `#000` */
  color?: React.CSSProperties['backgroundColor'];

  /** Overlay background blur @default `0` */
  blur?: number | string;

  /** Changes overlay to gradient. If set, `color` prop is ignored. */
  gradient?: string;

  /** Overlay z-index @default `200` */
  zIndex?: string | number;

  /** Key of `theme.radius` or any valid CSS value to set border-radius @default `0` */
  radius?: MantineRadius;

  /** Content inside overlay */
  children?: React.ReactNode;

  /** Centers content inside the overlay @default `false` */
  center?: boolean;

  /** Changes position to `fixed` @default `false` */
  fixed?: boolean;
}

export type OverlayFactory = PolymorphicFactory<{
  props: OverlayProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: OverlayStylesNames;
  vars: OverlayCssVariables;
}>;

const defaultProps = {
  zIndex: getDefaultZIndex('modal'),
} satisfies Partial<OverlayProps>;

const varsResolver = createVarsResolver<OverlayFactory>(
  (_, { gradient, color, backgroundOpacity, blur, radius, zIndex }) => ({
    root: {
      '--overlay-bg':
        gradient ||
        ((color !== undefined || backgroundOpacity !== undefined) &&
          rgba(color || '#000', backgroundOpacity ?? 0.6)) ||
        undefined,
      '--overlay-filter': blur ? `blur(${rem(blur)})` : undefined,
      '--overlay-radius': radius === undefined ? undefined : getRadius(radius),
      '--overlay-z-index': zIndex?.toString(),
    },
  })
);

export const Overlay = polymorphicFactory<OverlayFactory>((_props) => {
  const props = useProps('Overlay', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    fixed,
    center,
    children,
    radius,
    zIndex,
    gradient,
    blur,
    color,
    backgroundOpacity,
    mod,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<OverlayFactory>({
    name: 'Overlay',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  return (
    <Box {...getStyles('root')} mod={[{ center, fixed }, mod]} {...others}>
      {children}
    </Box>
  );
});

Overlay.classes = classes;
Overlay.displayName = '@mantine/core/Overlay';
