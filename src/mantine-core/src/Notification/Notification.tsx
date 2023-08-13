import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineColor,
  Selectors,
  MantineNumberSize,
  useComponentDefaultProps,
} from '@mantine/styles';
import { Text } from '../Text';
import { Loader } from '../Loader';
import { CloseButton } from '../CloseButton';
import { Box } from '../Box';
import useStyles, { NotificationStylesParams } from './Notification.styles';

export type NotificationStylesNames = Selectors<typeof useStyles>;

export interface NotificationProps
  extends DefaultProps<NotificationStylesNames, NotificationStylesParams>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  variant?: string;

  /** Called when close button is clicked */
  onClose?(): void;

  /** Notification line or icon color */
  color?: MantineColor;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: MantineNumberSize;

  /** Notification icon, replaces color line */
  icon?: React.ReactNode;

  /** Notification title, displayed before body */
  title?: React.ReactNode;

  /** Notification body, place main text here */
  children?: React.ReactNode;

  /** Replaces colored line or icon with Loader component */
  loading?: boolean;

  /** Adds border styles */
  withBorder?: boolean;

  /** Determines whether close button should be visible, true by default */
  withCloseButton?: boolean;

  /** Props spread to close button */
  closeButtonProps?: Record<string, any>;
}

const defaultProps: Partial<NotificationProps> = {
  withCloseButton: true,
};

export const Notification = forwardRef<HTMLDivElement, NotificationProps>((props, ref) => {
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
    styles,
    unstyled,
    variant,
    ...others
  } = useComponentDefaultProps('Notification', defaultProps, props);

  const { classes, cx } = useStyles(
    { color, radius, withTitle: !!title },
    { name: 'Notification', classNames, styles, unstyled, variant }
  );

  return (
    <Box
      className={cx(classes.root, className)}
      data-with-icon={!!icon || loading || undefined}
      data-with-border={withBorder || undefined}
      role="alert"
      ref={ref}
      {...others}
    >
      {icon && !loading && <div className={classes.icon}>{icon}</div>}
      {loading && <Loader size={28} color={color} className={classes.loader} />}

      <div className={classes.body}>
        {title && (
          <Text className={classes.title} size="sm" weight={500}>
            {title}
          </Text>
        )}

        <Text color="dimmed" className={classes.description} size="sm">
          {children}
        </Text>
      </div>

      {withCloseButton && (
        <CloseButton
          iconSize={16}
          color="gray"
          {...closeButtonProps}
          onClick={onClose}
          className={classes.closeButton}
        />
      )}
    </Box>
  );
});

Notification.displayName = '@mantine/core/Notification';
