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
  /** Controls overlay `background-color` opacity 0–1, disregarded when `gradient` prop is set, `0.6` by default */
  backgroundOpacity?: number;

  /** Overlay `background-color`, `#000` by default */
  color?: React.CSSProperties['backgroundColor'];

  /** Overlay background blur, `0` by default */
  blur?: number | string;

  /** Changes overlay to gradient. If set, `color` prop is ignored */
  gradient?: string;

  /** Overlay z-index, `200` by default */
  zIndex?: string | number;

  /** Key of `theme.radius` or any valid CSS value to set border-radius, `0` by default */
  radius?: MantineRadius;

  /** Content inside overlay */
  children?: React.ReactNode;

  /** Determines whether content inside overlay should be vertically and horizontally centered, `false` by default */
  center?: boolean;

  /** Determines whether overlay should have fixed position instead of absolute, `false` by default */
  fixed?: boolean;
}

export type OverlayFactory = PolymorphicFactory<{
  props: OverlayProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: OverlayStylesNames;
  vars: OverlayCssVariables;
}>;

const defaultProps: Partial<OverlayProps> = {
  zIndex: getDefaultZIndex('modal'),
};

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

export const Overlay = polymorphicFactory<OverlayFactory>((_props, ref) => {
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
    vars,
    varsResolver,
  });

  return (
    <Box ref={ref} {...getStyles('root')} mod={[{ center, fixed }, mod]} {...others}>
      {children}
    </Box>
  );
});

Overlay.classes = classes;
Overlay.displayName = '@mantine/core/Overlay';
