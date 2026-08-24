import {
  Box,
  BoxProps,
  createVarsResolver,
  getRadius,
  getShadow,
  MantineRadius,
  MantineShadow,
  polymorphicFactory,
  PolymorphicFactory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { SurfaceDepthContext, useSurfaceDepth } from './Surface.context';
import classes from './Surface.module.css';

const MIN_SURFACE_LEVEL = 0;
const MAX_SURFACE_LEVEL = 2;

const SURFACE_LEVEL_VARS = [
  '--mantine-color-surface-page',
  '--mantine-color-surface-panel',
  '--mantine-color-surface-panel-2',
] as const;

export type SurfaceStylesNames = 'root';
export type SurfaceCssVariables = {
  root: '--surface-radius' | '--surface-shadow';
};

export interface SurfaceBaseProps {
  /** Key of `theme.shadows` or any valid CSS value to set `box-shadow` */
  shadow?: MantineShadow;

  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem @default theme.defaultRadius */
  radius?: MantineRadius;

  /** Adds border to the root element */
  withBorder?: boolean;

  /** Explicit surface depth level. Accepts an absolute number/string (`0`–`2`) or a relative value (`'+1'`, `'-1'`) applied against the parent surface level. When set, overrides `autoDepth`. */
  level?: number | string;

  /** Determines whether the surface level is automatically incremented by 1 relative to the parent surface, `true` by default */
  autoDepth?: boolean;
}

export interface SurfaceProps extends BoxProps, SurfaceBaseProps, StylesApiProps<SurfaceFactory> {}

export type SurfaceFactory = PolymorphicFactory<{
  props: SurfaceProps;
  defaultComponent: 'div';
  defaultRef: HTMLDivElement;
  stylesNames: SurfaceStylesNames;
  vars: SurfaceCssVariables;
}>;

const varsResolver = createVarsResolver<SurfaceFactory>((_, { radius, shadow }) => ({
  root: {
    '--surface-radius': radius === undefined ? undefined : getRadius(radius),
    '--surface-shadow': getShadow(shadow),
  },
}));

function clampLevel(value: number) {
  return Math.min(Math.max(Math.round(value), MIN_SURFACE_LEVEL), MAX_SURFACE_LEVEL);
}

function resolveLevel(level: number | string | undefined, autoDepth: boolean, parentLevel: number) {
  if (level !== undefined) {
    if (typeof level === 'string' && /^[+-]\d+$/.test(level)) {
      return clampLevel(parentLevel + Number(level));
    }

    return clampLevel(Number(level));
  }

  return clampLevel(autoDepth ? parentLevel + 1 : parentLevel);
}

export const Surface = polymorphicFactory<SurfaceFactory>((_props) => {
  const props = useProps('Surface', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    withBorder,
    vars,
    radius,
    shadow,
    variant,
    mod,
    attributes,
    level,
    autoDepth = true,
    ...others
  } = props;

  const parentLevel = useSurfaceDepth();
  const resolvedLevel = resolveLevel(level, autoDepth, parentLevel);

  const getStyles = useStyles<SurfaceFactory>({
    name: 'Surface',
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
    <SurfaceDepthContext.Provider value={resolvedLevel}>
      <Box
        mod={[{ 'data-with-border': withBorder, 'data-mantine-surface-level': resolvedLevel }, mod]}
        {...getStyles('root', {
          style: { '--surface-bg': `var(${SURFACE_LEVEL_VARS[resolvedLevel]})` },
        })}
        variant={variant}
        {...others}
      />
    </SurfaceDepthContext.Provider>
  );
});

Surface.classes = classes;
Surface.varsResolver = varsResolver;
Surface.displayName = '@mantine/core/Surface';

export namespace Surface {
  export type Props = SurfaceProps;
  export type StylesNames = SurfaceStylesNames;
  export type CssVariables = SurfaceCssVariables;
  export type Factory = SurfaceFactory;
  export type BaseProps = SurfaceBaseProps;
}
