import React from 'react';
import { mergeStyles, DefaultProps, MantineColor } from '@mantine/styles';
import { Text } from '../Text/Text';
import { Loader } from '../Loader/Loader';
import { CloseButton } from '../ActionIcon/CloseButton/CloseButton';
import useStyles from './Notification.styles';

export type NotificationStylesNames = Exclude<
  keyof ReturnType<typeof useStyles>['classes'],
  'withIcon'
>;

export interface NotificationProps
  extends DefaultProps<NotificationStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Called when close button is clicked */
  onClose(): void;

  /** Notification line or icon color */
  color?: MantineColor;

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
  closeButtonProps?: React.ComponentPropsWithoutRef<'button'> & { [key: string]: any };
}

export function Notification({
  className,
  style,
  color = 'blue',
  loading = false,
  disallowClose = false,
  title,
  icon,
  children,
  onClose,
  closeButtonProps,
  classNames,
  styles,
  ...others
}: NotificationProps) {
  const { classes, cx } = useStyles({ color, disallowClose }, classNames, 'notification');
  const _styles = mergeStyles(classes, styles);
  const withIcon = icon || loading;

  return (
    <div
      className={cx(classes.root, { [classes.withIcon]: withIcon }, className)}
      role="alert"
      style={{ ...style, ..._styles.root, ...(withIcon ? _styles.withIcon : null) }}
      {...others}
    >
      {icon && !loading && (
        <div className={classes.icon} style={_styles.icon}>
          {icon}
        </div>
      )}

      {loading && (
        <Loader size={28} color={color} className={classes.loader} style={_styles.loader} />
      )}

      <div className={classes.body} style={_styles.body}>
        {title && (
          <Text className={classes.title} size="sm" weight={500} style={_styles.title}>
            {title}
          </Text>
        )}

        <Text color="dimmed" className={classes.description} size="sm" style={_styles.description}>
          {children}
        </Text>
      </div>

      {!disallowClose && (
        <CloseButton
          {...closeButtonProps}
          iconSize={16}
          color="gray"
          onClick={onClose}
          variant="hover"
        />
      )}
    </div>
  );
}

Notification.displayName = '@mantine/core/Notification';
