import {
  Box,
  BoxProps,
  createVarsResolver,
  getRadius,
  getSize,
  MantineColor,
  MantineGradient,
  MantineRadius,
  MantineSize,
  polymorphicFactory,
  PolymorphicFactory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { Loader, LoaderProps } from '../Loader';
import { Transition } from '../Transition';
import { UnstyledButton } from '../UnstyledButton';
import { ActionIconGroup } from './ActionIconGroup/ActionIconGroup';
import { ActionIconGroupSection } from './ActionIconGroupSection/ActionIconGroupSection';
import classes from './ActionIcon.module.css';

export type ActionIconVariant =
  | 'filled'
  | 'light'
  | 'outline'
  | 'transparent'
  | 'white'
  | 'subtle'
  | 'default'
  | 'gradient';

export type ActionIconStylesNames = 'root' | 'loader' | 'icon';
export type ActionIconCssVariables = {
  root:
    | '--ai-radius'
    | '--ai-size'
    | '--ai-bg'
    | '--ai-hover'
    | '--ai-hover-color'
    | '--ai-color'
    | '--ai-bd';
};

export interface ActionIconProps extends BoxProps, StylesApiProps<ActionIconFactory> {
  'data-disabled'?: boolean;
  __staticSelector?: string;

  /** If set, `Loader` component is displayed instead of the `children` */
  loading?: boolean;

  /** Props passed down to the `Loader` component. Ignored when `loading` prop is not set. */
  loaderProps?: LoaderProps;

  /** Controls width and height of the button. Numbers are converted to rem. @default `'md'`. */
  size?: MantineSize | `input-${MantineSize}` | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color. @default `theme.primaryColor`. */
  color?: MantineColor;

  /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** Gradient values used with `variant="gradient"`. @default `theme.defaultGradient`. */
  gradient?: MantineGradient;

  /** Sets `disabled` attribute, prevents interactions */
  disabled?: boolean;

  /** Icon element */
  children?: React.ReactNode;

  /** If set, adjusts text color based on background color for `filled` variant */
  autoContrast?: boolean;
}

export type ActionIconFactory = PolymorphicFactory<{
  props: ActionIconProps;
  defaultComponent: 'button';
  defaultRef: HTMLButtonElement;
  stylesNames: ActionIconStylesNames;
  variant: ActionIconVariant;
  vars: ActionIconCssVariables;
  staticComponents: {
    Group: typeof ActionIconGroup;
    GroupSection: typeof ActionIconGroupSection;
  };
}>;

const varsResolver = createVarsResolver<ActionIconFactory>(
  (theme, { size, radius, variant, gradient, color, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || 'filled',
      autoContrast,
    });

    return {
      root: {
        '--ai-size': getSize(size, 'ai-size'),
        '--ai-radius': radius === undefined ? undefined : getRadius(radius),
        '--ai-bg': color || variant ? colors.background : undefined,
        '--ai-hover': color || variant ? colors.hover : undefined,
        '--ai-hover-color': color || variant ? colors.hoverColor : undefined,
        '--ai-color': colors.color,
        '--ai-bd': color || variant ? colors.border : undefined,
      },
    };
  }
);

export const ActionIcon = polymorphicFactory<ActionIconFactory>((_props, ref) => {
  const props = useProps('ActionIcon', null, _props);
  const {
    className,
    unstyled,
    variant,
    classNames,
    styles,
    style,
    loading,
    loaderProps,
    size,
    color,
    radius,
    __staticSelector,
    gradient,
    vars,
    children,
    disabled,
    'data-disabled': dataDisabled,
    autoContrast,
    mod,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<ActionIconFactory>({
    name: ['ActionIcon', __staticSelector],
    props,
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  return (
    <UnstyledButton
      {...getStyles('root', { active: !disabled && !loading && !dataDisabled })}
      {...others}
      unstyled={unstyled}
      variant={variant}
      size={size}
      disabled={disabled || loading}
      ref={ref}
      mod={[{ loading, disabled: disabled || dataDisabled }, mod]}
    >
      {typeof loading === 'boolean' && (
        <Transition mounted={loading} transition="slide-down" duration={150}>
          {(transitionStyles) => (
            <Box component="span" {...getStyles('loader', { style: transitionStyles })} aria-hidden>
              <Loader color="var(--ai-color)" size="calc(var(--ai-size) * 0.55)" {...loaderProps} />
            </Box>
          )}
        </Transition>
      )}

      <Box component="span" mod={{ loading }} {...getStyles('icon')}>
        {children}
      </Box>
    </UnstyledButton>
  );
});

ActionIcon.classes = classes;
ActionIcon.displayName = '@mantine/core/ActionIcon';
ActionIcon.Group = ActionIconGroup;
ActionIcon.GroupSection = ActionIconGroupSection;
