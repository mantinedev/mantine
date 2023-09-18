import React from 'react';
import { useId } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  getRadius,
  MantineRadius,
  MantineColor,
} from '../../core';
import classes from './Alert.module.css';
import { CloseButton } from '../CloseButton';

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
  /** Key of `theme.radius` or any valid CSS value to set border-radius, `theme.defaultRadius` by default */
  radius?: MantineRadius;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: MantineColor;

  /** Alert title */
  title?: React.ReactNode;

  /** Icon displayed next to the title */
  icon?: React.ReactNode;

  /** Determines whether close button should be displayed, `false` by default */
  withCloseButton?: boolean;

  /** Called when the close button is clicked */
  onClose?(): void;

  /** Close button `aria-label` */
  closeButtonLabel?: string;
}

export type AlertFactory = Factory<{
  props: AlertProps;
  ref: HTMLDivElement;
  stylesNames: AlertStylesNames;
  vars: AlertCssVariables;
  variant: AlertVariant;
}>;

const defaultProps: Partial<AlertProps> = {};

const varsResolver = createVarsResolver<AlertFactory>((theme, { radius, color, variant }) => {
  const colors = theme.variantColorResolver({
    color: color || theme.primaryColor,
    theme,
    variant: variant || 'light',
  });

  return {
    root: {
      '--alert-radius': radius === undefined ? undefined : getRadius(radius),
      '--alert-bg': color || variant ? colors.background : undefined,
      '--alert-color': color || variant ? colors.color : undefined,
      '--alert-bd': color || variant ? colors.border : undefined,
    },
  };
});

export const Alert = factory<AlertFactory>((_props, ref) => {
  const props = useProps('Alert', defaultProps, _props);
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
      {...others}
      role="alert"
      aria-describedby={bodyId}
      aria-labelledby={titleId}
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

          <div id={bodyId} {...getStyles('message')}>
            {children}
          </div>
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
