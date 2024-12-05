import {
  BoxProps,
  createVarsResolver,
  getRadius,
  getSize,
  MantineRadius,
  MantineSize,
  polymorphicFactory,
  PolymorphicFactory,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { UnstyledButton } from '../UnstyledButton';
import { CloseIcon } from './CloseIcon';
import classes from './CloseButton.module.css';

export type CloseButtonVariant = 'subtle' | 'transparent';
export type CloseButtonStylesNames = 'root';
export type CloseButtonCssVariables = {
  root: '--cb-icon-size' | '--cb-size' | '--cb-radius';
};

export interface __CloseButtonProps {
  'data-disabled'?: boolean;

  /** Controls width and height of the button. Numbers are converted to rem. `'md'` by default. */
  size?: MantineSize | (string & {}) | number;

  /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
  radius?: MantineRadius;

  /** Sets `disabled` and `data-disabled` attributes on the button element */
  disabled?: boolean;

  /** `X` icon `width` and `height`, `80%` by default */
  iconSize?: number | string;

  /** Content rendered inside the button, for example `VisuallyHidden` with label for screen readers */
  children?: React.ReactNode;

  /** Replaces default close icon. If set, `iconSize` prop is ignored. */
  icon?: React.ReactNode;
}

export interface CloseButtonProps
  extends __CloseButtonProps,
    BoxProps,
    StylesApiProps<CloseButtonFactory> {
  __staticSelector?: string;
}

export type CloseButtonFactory = PolymorphicFactory<{
  props: CloseButtonProps;
  defaultComponent: 'button';
  defaultRef: HTMLButtonElement;
  stylesNames: CloseButtonStylesNames;
  variant: CloseButtonVariant;
  vars: CloseButtonCssVariables;
}>;

const defaultProps: Partial<CloseButtonProps> = {
  variant: 'subtle',
};

const varsResolver = createVarsResolver<CloseButtonFactory>((_, { size, radius, iconSize }) => ({
  root: {
    '--cb-size': getSize(size, 'cb-size'),
    '--cb-radius': radius === undefined ? undefined : getRadius(radius),
    '--cb-icon-size': rem(iconSize),
  },
}));

export const CloseButton = polymorphicFactory<CloseButtonFactory>((_props, ref) => {
  const props = useProps('CloseButton', defaultProps, _props);
  const {
    iconSize,
    children,
    vars,
    radius,
    className,
    classNames,
    style,
    styles,
    unstyled,
    'data-disabled': dataDisabled,
    disabled,
    variant,
    icon,
    mod,
    __staticSelector,
    ...others
  } = props;

  const getStyles = useStyles<CloseButtonFactory>({
    name: __staticSelector || 'CloseButton',
    props,
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <UnstyledButton
      ref={ref}
      {...others}
      unstyled={unstyled}
      variant={variant}
      disabled={disabled}
      mod={[{ disabled: disabled || dataDisabled }, mod]}
      {...getStyles('root', { variant, active: !disabled && !dataDisabled })}
    >
      {icon || <CloseIcon />}
      {children}
    </UnstyledButton>
  );
});

CloseButton.classes = classes;
CloseButton.displayName = '@mantine/core/CloseButton';
