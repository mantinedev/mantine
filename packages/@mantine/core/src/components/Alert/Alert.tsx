import { useId } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  MantineColor,
  MantineRadius,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { CloseButton } from '../CloseButton';
import classes from './Alert.module.css';

export type AlertStylesNames =
  | 'root'
  | 'body'
  | 'label'
  | 'title'
  | 'icon'
  | 'wrapper'
  | 'message'
  | 'closeButton';
export type AlertVariant = 'filled' | 'light' | 'outline' | 'default' | 'transparent' | 'white';
export type AlertCssVariables = {
  root: '--alert-radius' | '--alert-bg' | '--alert-color' | '--alert-bd';
};

export interface AlertProps
  extends BoxProps,
    StylesApiProps<AlertFactory>,
    ElementProps<'div', 'title'> {
  /** Key of `theme.radius` or any valid CSS value to set border-radius @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** Key of `theme.colors` or any valid CSS color @default `theme.primaryColor`  */
  color?: MantineColor;

  /** Alert title */
  title?: React.ReactNode;

  /** Icon displayed next to the title */
  icon?: React.ReactNode;

  /** Determines whether close button should be displayed @default `false` */
  withCloseButton?: boolean;

  /** Called when the close button is clicked */
  onClose?: () => void;

  /** Close button `aria-label` */
  closeButtonLabel?: string;

  /** If set, adjusts text color based on background color for `filled` variant */
  autoContrast?: boolean;
}

export type AlertFactory = Factory<{
  props: AlertProps;
  ref: HTMLDivElement;
  stylesNames: AlertStylesNames;
  vars: AlertCssVariables;
  variant: AlertVariant;
}>;

const varsResolver = createVarsResolver<AlertFactory>(
  (theme, { radius, color, variant, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant: variant || 'light',
      autoContrast,
    });

    return {
      root: {
        '--alert-radius': radius === undefined ? undefined : getRadius(radius),
        '--alert-bg': color || variant ? colors.background : undefined,
        '--alert-color': colors.color,
        '--alert-bd': color || variant ? colors.border : undefined,
      },
    };
  }
);

export const Alert = factory<AlertFactory>((_props, ref) => {
  const props = useProps('Alert', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    radius,
    color,
    title,
    children,
    id,
    icon,
    withCloseButton,
    onClose,
    closeButtonLabel,
    variant,
    autoContrast,
    role,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<AlertFactory>({
    name: 'Alert',
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

  const rootId = useId(id);
  const titleId = (title && `${rootId}-title`) || undefined;
  const bodyId = `${rootId}-body`;

  return (
    <Box
      id={rootId}
      {...getStyles('root', { variant })}
      variant={variant}
      ref={ref}
      role={role || 'alert'}
      {...others}
      aria-describedby={children ? bodyId : undefined}
      aria-labelledby={title ? titleId : undefined}
    >
      <div {...getStyles('wrapper')}>
        {icon && <div {...getStyles('icon')}>{icon}</div>}

        <div {...getStyles('body')}>
          {title && (
            <div {...getStyles('title')} data-with-close-button={withCloseButton || undefined}>
              <span id={titleId} {...getStyles('label')}>
                {title}
              </span>
            </div>
          )}

          {children && (
            <div id={bodyId} {...getStyles('message')} data-variant={variant}>
              {children}
            </div>
          )}
        </div>

        {withCloseButton && (
          <CloseButton
            {...getStyles('closeButton')}
            onClick={onClose}
            variant="transparent"
            size={16}
            iconSize={16}
            aria-label={closeButtonLabel}
            unstyled={unstyled}
          />
        )}
      </div>
    </Box>
  );
});

Alert.classes = classes;
Alert.displayName = '@mantine/core/Alert';
