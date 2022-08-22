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

export type NotificationStylesNames = Exclude<Selectors<typeof useStyles>, 'withIcon'>;

export interface NotificationProps
  extends DefaultProps<NotificationStylesNames, NotificationStylesParams>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Called when close button is clicked */
  onClose?(): void;

  /** Notification line or icon color */
  color?: MantineColor;

  /** Radius from theme.radius, or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Notification icon, replaces color line */
  icon?: React.ReactNode;

  /** Notification title, displayed before body */
  title?: React.ReactNode;

  /** Notification body, place main text here */
  children?: React.ReactNode;

  /** Replaces colored line or icon with Loader component */
  loading?: boolean;

  /** Removes close button */
  disallowClose?: boolean;

  /** Props spread to close button */
  closeButtonProps?: Record<string, any>;
}

export const Notification = forwardRef<HTMLDivElement, NotificationProps>((props, ref) => {
  const {
    className,
    color,
    radius,
    loading,
    disallowClose,
    title,
    icon,
    children,
    onClose,
    closeButtonProps,
    classNames,
    styles,
    unstyled,
    ...others
  } = useComponentDefaultProps('Notification', {}, props);

  const { classes, cx } = useStyles(
    { color, radius, withTitle: !!title },
    { classNames, styles, unstyled, name: 'Notification' }
  );
  const withIcon = icon || loading;

  return (
    <Box
      className={cx(classes.root, { [classes.withIcon]: withIcon }, className)}
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

      {!disallowClose && (
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
