import { useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  getRadius,
  getSize,
  MantineColor,
  MantineRadius,
  MantineSize,
  polymorphicFactory,
  PolymorphicFactory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './Toggle.module.css';

export type ToggleStylesNames = 'root';
export type ToggleVariant = 'light' | 'filled';

export type ToggleCssVariables = {
  root:
    | '--toggle-size'
    | '--toggle-radius'
    | '--toggle-active-bg'
    | '--toggle-active-hover'
    | '--toggle-active-color';
};

export interface ToggleProps
  extends BoxProps, StylesApiProps<ToggleFactory>, ElementProps<'button'> {
  /** Controlled active state */
  active?: boolean;

  /** Uncontrolled default active state */
  defaultActive?: boolean;

  /** Called when active state changes */
  onActiveChange?: (active: boolean) => void;

  /** If set, the toggle is disabled */
  disabled?: boolean;

  /** Controls toggle height and min-width, `'md'` by default */
  size?: MantineSize | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
  radius?: MantineRadius;

  /** If set, the toggle width adjusts to content instead of being square, `false` by default */
  autoWidth?: boolean;

  /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Determines whether icon color with filled variant should be changed based on the given `color` prop */
  autoContrast?: boolean;
}

export type ToggleFactory = PolymorphicFactory<{
  props: ToggleProps;
  defaultRef: HTMLButtonElement;
  defaultComponent: 'button';
  stylesNames: ToggleStylesNames;
  vars: ToggleCssVariables;
  variant: ToggleVariant;
}>;

const defaultProps = {
  variant: 'filled',
} satisfies Partial<ToggleProps>;

const varsResolver = createVarsResolver<ToggleFactory>(
  (theme, { size, radius, color, variant, autoContrast }) => {
    const activeColors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant: variant || 'filled',
      autoContrast,
    });

    return {
      root: {
        '--toggle-size': size !== undefined ? getSize(size, 'toggle-size') : undefined,
        '--toggle-radius': radius !== undefined ? getRadius(radius) : undefined,
        '--toggle-active-bg': color || variant ? activeColors.background : undefined,
        '--toggle-active-hover': color || variant ? activeColors.hover : undefined,
        '--toggle-active-color': color || variant ? activeColors.color : undefined,
      },
    };
  }
);

export const Toggle = polymorphicFactory<ToggleFactory>((_props) => {
  const props = useProps('Toggle', defaultProps, _props);
  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    active,
    defaultActive,
    onActiveChange,
    disabled,
    size,
    radius,
    autoWidth,
    color,
    autoContrast,
    children,
    component,
    onClick,
    tabIndex,
    attributes,
    ...others
  } = props as typeof props & { component?: any };

  const [_active, handleActiveChange] = useUncontrolled({
    value: active,
    defaultValue: defaultActive,
    finalValue: false,
    onChange: onActiveChange,
  });

  const getStyles = useStyles<ToggleFactory>({
    name: 'Toggle',
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

  return (
    <Box
      component={component || 'button'}
      type={!component || component === 'button' ? 'button' : undefined}
      {...others}
      {...getStyles('root', { focusable: true })}
      data-active={_active || undefined}
      data-disabled={disabled || undefined}
      data-auto-width={autoWidth || undefined}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      aria-pressed={_active}
      tabIndex={disabled ? -1 : tabIndex}
      size={size}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) {
          event.preventDefault();
          return;
        }
        handleActiveChange(!_active);
        onClick?.(event);
      }}
    >
      {children}
    </Box>
  );
});

Toggle.classes = classes;
Toggle.varsResolver = varsResolver;
Toggle.displayName = '@mantine/core/Toggle';
