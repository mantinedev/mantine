import {
  Box,
  BoxProps,
  createVarsResolver,
  getFontSize,
  getRadius,
  getSize,
  MantineColor,
  MantineGradient,
  MantineRadius,
  MantineSize,
  polymorphicFactory,
  PolymorphicFactory,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { Loader, LoaderProps } from '../Loader';
import { MantineTransition, Transition } from '../Transition';
import { UnstyledButton } from '../UnstyledButton';
import { ButtonGroup } from './ButtonGroup/ButtonGroup';
import { ButtonGroupSection } from './ButtonGroupSection/ButtonGroupSection';
import classes from './Button.module.css';

export type ButtonStylesNames = 'root' | 'inner' | 'loader' | 'section' | 'label';
export type ButtonVariant =
  | 'filled'
  | 'light'
  | 'outline'
  | 'transparent'
  | 'white'
  | 'subtle'
  | 'default'
  | 'gradient';

export type ButtonCssVariables = {
  root:
    | '--button-justify'
    | '--button-height'
    | '--button-padding-x'
    | '--button-fz'
    | '--button-radius'
    | '--button-bg'
    | '--button-hover'
    | '--button-hover-color'
    | '--button-color'
    | '--button-bd';
};

export interface ButtonProps extends BoxProps, StylesApiProps<ButtonFactory> {
  'data-disabled'?: boolean;

  /** Controls button `height`, `font-size` and horizontal `padding` @default `'sm'` */
  size?: MantineSize | `compact-${MantineSize}` | (string & {});

  /** Key of `theme.colors` or any valid CSS color @default `theme.primaryColor` */
  color?: MantineColor;

  /** Sets `justify-content` of `inner` element, can be used to change distribution of sections and label @default `'center'` */
  justify?: React.CSSProperties['justifyContent'];

  /** Content displayed on the left side of the button label */
  leftSection?: React.ReactNode;

  /** Content displayed on the right side of the button label */
  rightSection?: React.ReactNode;

  /** If set, the button takes 100% width of its parent container @default `false` */
  fullWidth?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** Gradient configuration used when `variant="gradient"` @default `theme.defaultGradient` */
  gradient?: MantineGradient;

  /** Sets `disabled` attribute, applies disabled styles */
  disabled?: boolean;

  /** Button content */
  children?: React.ReactNode;

  /** If set, the `Loader` component is displayed over the button */
  loading?: boolean;

  /** Props added to the `Loader` component (only visible when `loading` prop is set) */
  loaderProps?: LoaderProps;

  /** If set, adjusts text color based on background color for `filled` variant */
  autoContrast?: boolean;
}

export type ButtonFactory = PolymorphicFactory<{
  props: ButtonProps;
  defaultRef: HTMLButtonElement;
  defaultComponent: 'button';
  stylesNames: ButtonStylesNames;
  vars: ButtonCssVariables;
  variant: ButtonVariant;
  staticComponents: {
    Group: typeof ButtonGroup;
    GroupSection: typeof ButtonGroupSection;
  };
}>;

const loaderTransition: MantineTransition = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${rem(1)}))` },
  out: { opacity: 0, transform: 'translate(-50%, -200%)' },
  common: { transformOrigin: 'center' },
  transitionProperty: 'transform, opacity',
};

const varsResolver = createVarsResolver<ButtonFactory>(
  (theme, { radius, color, gradient, variant, size, justify, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || 'filled',
      autoContrast,
    });

    return {
      root: {
        '--button-justify': justify,
        '--button-height': getSize(size, 'button-height'),
        '--button-padding-x': getSize(size, 'button-padding-x'),
        '--button-fz': size?.includes('compact')
          ? getFontSize(size.replace('compact-', ''))
          : getFontSize(size),
        '--button-radius': radius === undefined ? undefined : getRadius(radius),
        '--button-bg': color || variant ? colors.background : undefined,
        '--button-hover': color || variant ? colors.hover : undefined,
        '--button-color': colors.color,
        '--button-bd': color || variant ? colors.border : undefined,
        '--button-hover-color': color || variant ? colors.hoverColor : undefined,
      },
    };
  }
);

export const Button = polymorphicFactory<ButtonFactory>((_props, ref) => {
  const props = useProps('Button', null, _props);
  const {
    style,
    vars,
    className,
    color,
    disabled,
    children,
    leftSection,
    rightSection,
    fullWidth,
    variant,
    radius,
    loading,
    loaderProps,
    gradient,
    classNames,
    styles,
    unstyled,
    'data-disabled': dataDisabled,
    autoContrast,
    mod,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<ButtonFactory>({
    name: 'Button',
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

  const hasLeftSection = !!leftSection;
  const hasRightSection = !!rightSection;

  return (
    <UnstyledButton
      ref={ref}
      {...getStyles('root', { active: !disabled && !loading && !dataDisabled })}
      unstyled={unstyled}
      variant={variant}
      disabled={disabled || loading}
      mod={[
        {
          disabled: disabled || dataDisabled,
          loading,
          block: fullWidth,
          'with-left-section': hasLeftSection,
          'with-right-section': hasRightSection,
        },
        mod,
      ]}
      {...others}
    >
      {typeof loading === 'boolean' && (
        <Transition mounted={loading} transition={loaderTransition} duration={150}>
          {(transitionStyles) => (
            <Box component="span" {...getStyles('loader', { style: transitionStyles })} aria-hidden>
              <Loader
                color="var(--button-color)"
                size="calc(var(--button-height) / 1.8)"
                {...loaderProps}
              />
            </Box>
          )}
        </Transition>
      )}

      <span {...getStyles('inner')}>
        {leftSection && (
          <Box component="span" {...getStyles('section')} mod={{ position: 'left' }}>
            {leftSection}
          </Box>
        )}

        <Box component="span" mod={{ loading }} {...getStyles('label')}>
          {children}
        </Box>

        {rightSection && (
          <Box component="span" {...getStyles('section')} mod={{ position: 'right' }}>
            {rightSection}
          </Box>
        )}
      </span>
    </UnstyledButton>
  );
});

Button.classes = classes;
Button.displayName = '@mantine/core/Button';
Button.Group = ButtonGroup;
Button.GroupSection = ButtonGroupSection;
