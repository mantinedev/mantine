import {
  Box,
  BoxProps,
  createVarsResolver,
  DataAttributes,
  ElementProps,
  factory,
  Factory,
  getRadius,
  getThemeColor,
  MantineColor,
  MantineRadius,
  MantineTheme,
  parseThemeColor,
  PartialVarsResolver,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { __CloseButtonProps, CloseButton } from '../CloseButton';
import { Loader, LoaderFactory, LoaderProps } from '../Loader';
import classes from './Notification.module.css';

export type NotificationStylesNames =
  | 'root'
  | 'icon'
  | 'loader'
  | 'body'
  | 'title'
  | 'description'
  | 'closeButton';
export type NotificationVariant = 'filled' | 'light' | 'transparent';
export type NotificationCssVariables = {
  root:
    | '--notification-radius'
    | '--notification-color'
    | '--notification-icon-bg'
    | '--notification-icon-color';
};

export interface NotificationProps
  extends BoxProps, StylesApiProps<NotificationFactory>, ElementProps<'div', 'title'> {
  /** Called when the close button is clicked @category behavior */
  onClose?: () => void;

  /** Controls icon colors, accent line color and loader color, key of `theme.colors` or any valid CSS color. When `icon` is provided, styles the icon. When no icon is provided, sets the colored accent line on the left. @default theme.primaryColor @category appearance */
  color?: MantineColor;

  /** Controls how the icon is rendered: `filled` – solid circle with contrast icon, `light` – tinted circle with colored icon, `transparent` – icon without background @default 'filled' */
  variant?: NotificationVariant | (string & {});

  /** Determines whether icon color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for icon color, otherwise `theme.black`. Overrides `theme.autoContrast`. @category appearance */
  autoContrast?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default theme.defaultRadius @category appearance */
  radius?: MantineRadius;

  /** Notification icon, replaces color line @category appearance */
  icon?: React.ReactNode;

  /** Notification title, displayed above the message body @category appearance */
  title?: React.ReactNode;

  /** Notification description, displayed below the title. When no title is provided, this serves as the main message. @category appearance */
  children?: React.ReactNode;

  /** If set, displays a `Loader` component instead of the icon. Takes precedence over the `icon` prop if both are provided. @category appearance */
  loading?: boolean;

  /** Adds border to the root element @category appearance */
  withBorder?: boolean;

  /** If set, the close button is visible @default true @category appearance */
  withCloseButton?: boolean;

  /** Props passed down to the close button */
  closeButtonProps?: __CloseButtonProps & ElementProps<'button'> & DataAttributes;

  /** Props passed down to the `Loader` component */
  loaderProps?: LoaderProps;
}

export type NotificationFactory = Factory<{
  props: NotificationProps;
  ref: HTMLDivElement;
  stylesNames: NotificationStylesNames;
  vars: NotificationCssVariables;
  variant: NotificationVariant;
}>;

const defaultProps = {
  withCloseButton: true,
  variant: 'filled',
} satisfies Partial<NotificationProps>;

const loaderVars: PartialVarsResolver<LoaderFactory> = (_theme, { size, color }) => ({
  root: {
    '--loader-size': size === undefined ? 'var(--notification-icon-size)' : undefined,
    '--loader-color': color === undefined ? 'var(--notification-color)' : undefined,
  },
});

function getAccentColor(color: string, theme: MantineTheme) {
  const parsed = parseThemeColor({ color, theme });

  if (parsed.isThemeColor && parsed.shade === undefined) {
    return `var(--mantine-color-${parsed.color}-text)`;
  }

  return parsed.variable ? `var(${parsed.variable})` : parsed.color;
}

const varsResolver = createVarsResolver<NotificationFactory>(
  (theme, { radius, color, variant, autoContrast }) => {
    const resolvedColor = color || theme.primaryColor;
    const resolvedVariant = variant || 'filled';
    const colors = theme.variantColorResolver({
      color: resolvedColor,
      theme,
      variant: resolvedVariant,
      autoContrast,
    });

    return {
      root: {
        '--notification-radius': radius === undefined ? undefined : getRadius(radius),
        '--notification-color': color ? getThemeColor(color, theme) : undefined,
        '--notification-icon-bg': colors.background,
        '--notification-icon-color':
          resolvedVariant === 'transparent' ? getAccentColor(resolvedColor, theme) : colors.color,
      },
    };
  }
);

export const Notification = factory<NotificationFactory>((_props) => {
  const props = useProps('Notification', defaultProps, _props);
  const {
    className,
    color,
    variant,
    autoContrast,
    radius,
    loading,
    withCloseButton,
    withBorder,
    title,
    icon,
    children,
    onClose,
    closeButtonProps,
    classNames,
    style,
    styles,
    unstyled,
    vars,
    mod,
    loaderProps,
    role,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<NotificationFactory>({
    name: 'Notification',
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
      {...getStyles('root')}
      mod={[{ withIcon: !!icon || loading, withBorder }, mod]}
      variant={variant}
      role={role || 'alert'}
      {...others}
    >
      {icon && !loading && (
        <Box {...getStyles('icon')} mod={{ variant }}>
          {icon}
        </Box>
      )}
      {loading && <Loader vars={loaderVars} {...getStyles('loader')} {...loaderProps} />}

      <div {...getStyles('body')}>
        {title && <div {...getStyles('title')}>{title}</div>}

        <Box {...getStyles('description')} mod={{ withTitle: !!title }}>
          {children}
        </Box>
      </div>

      {withCloseButton && (
        <CloseButton
          variant="transparent"
          size="sm"
          iconSize={16}
          {...closeButtonProps}
          unstyled={unstyled}
          onClick={(event) => {
            closeButtonProps?.onClick?.(event);
            onClose?.();
          }}
          {...getStyles('closeButton')}
        />
      )}
    </Box>
  );
});

Notification.classes = classes;
Notification.varsResolver = varsResolver;
Notification.displayName = '@mantine/core/Notification';

export namespace Notification {
  export type Props = NotificationProps;
  export type StylesNames = NotificationStylesNames;
  export type Factory = NotificationFactory;
  export type CssVariables = NotificationCssVariables;
  export type Variant = NotificationVariant;
}
