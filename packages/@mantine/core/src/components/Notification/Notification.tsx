import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  getThemeColor,
  MantineColor,
  MantineRadius,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { CloseButton } from '../CloseButton';
import { Loader, LoaderProps } from '../Loader';
import classes from './Notification.module.css';

export type NotificationStylesNames =
  | 'root'
  | 'icon'
  | 'loader'
  | 'body'
  | 'title'
  | 'description'
  | 'closeButton';
export type NotificationCssVariables = {
  root: '--notification-radius' | '--notification-color';
};

export interface NotificationProps
  extends BoxProps,
    StylesApiProps<NotificationFactory>,
    ElementProps<'div', 'title'> {
  variant?: string;

  /** Called when the close button is clicked */
  onClose?: () => void;

  /** Controls notification line or icon color, key of `theme.colors` or any valid CSS color @default `theme.primaryColor` */
  color?: MantineColor;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** Notification icon, replaces color line */
  icon?: React.ReactNode;

  /** Notification title, displayed above the message body */
  title?: React.ReactNode;

  /** Main notification message */
  children?: React.ReactNode;

  /** If set, the `Loader` component is displayed instead of the icon */
  loading?: boolean;

  /** Adds border to the root element */
  withBorder?: boolean;

  /** If set, the close button is visible @default `true` */
  withCloseButton?: boolean;

  /** Props passed down to the close button */
  closeButtonProps?: Record<string, any>;

  /** Props passed down to the `Loader` component */
  loaderProps?: LoaderProps;
}

export type NotificationFactory = Factory<{
  props: NotificationProps;
  ref: HTMLDivElement;
  stylesNames: NotificationStylesNames;
  vars: NotificationCssVariables;
}>;

const defaultProps = {
  withCloseButton: true,
} satisfies Partial<NotificationProps>;

const varsResolver = createVarsResolver<NotificationFactory>((theme, { radius, color }) => ({
  root: {
    '--notification-radius': radius === undefined ? undefined : getRadius(radius),
    '--notification-color': color ? getThemeColor(color, theme) : undefined,
  },
}));

export const Notification = factory<NotificationFactory>((_props) => {
  const props = useProps('Notification', defaultProps, _props);
  const {
    className,
    color,
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
    variant,
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
      mod={[{ 'data-with-icon': !!icon || loading, 'data-with-border': withBorder }, mod]}
      variant={variant}
      role={role || 'alert'}
      {...others}
    >
      {icon && !loading && <div {...getStyles('icon')}>{icon}</div>}
      {loading && <Loader size={28} color={color} {...getStyles('loader')} {...loaderProps} />}

      <div {...getStyles('body')}>
        {title && <div {...getStyles('title')}>{title}</div>}

        <Box {...getStyles('description')} mod={{ 'data-with-title': !!title }}>
          {children}
        </Box>
      </div>

      {withCloseButton && (
        <CloseButton
          iconSize={16}
          color="gray"
          {...closeButtonProps}
          unstyled={unstyled}
          onClick={onClose}
          {...getStyles('closeButton')}
        />
      )}
    </Box>
  );
});

Notification.classes = classes;
Notification.displayName = '@mantine/core/Notification';
