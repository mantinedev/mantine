import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineColor,
  Selectors,
  MantineNumberSize,
  useMantineDefaultProps,
} from '@mantine/styles';
import { useUuid } from '@mantine/hooks';
import { CloseButton } from '../ActionIcon';
import { Box } from '../Box';
import useStyles from './Alert.styles';

export type AlertVariant = 'filled' | 'outline' | 'light';
export type AlertStylesNames = Selectors<typeof useStyles>;

export interface AlertProps
  extends DefaultProps<AlertStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Alert title */
  title?: React.ReactNode;

  /** Controls Alert background, color and border styles, defaults to light */
  variant?: AlertVariant;

  /** Alert message */
  children: React.ReactNode;

  /** Color from theme.colors */
  color?: MantineColor;

  /** Icon displayed next to title */
  icon?: React.ReactNode;

  /** True to display close button */
  withCloseButton?: boolean;

  /** Called when close button is clicked */
  onClose?(): void;

  /** Close button aria-label */
  closeButtonLabel?: string;

  /** Radius from theme.radius, or number to set border-radius in px, defaults to theme.defaultRadius */
  radius?: MantineNumberSize;
}

const defaultProps: Partial<AlertProps> = {
  variant: 'light',
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props: AlertProps, ref) => {
  const {
    id,
    className,
    title,
    variant,
    children,
    color,
    classNames,
    icon,
    styles,
    onClose,
    radius,
    withCloseButton,
    closeButtonLabel,
    ...others
  } = useMantineDefaultProps('Alert', defaultProps, props);

  const { classes, cx } = useStyles(
    { color, radius, variant },
    { classNames, styles, name: 'Alert' }
  );

  const rootId = useUuid(id);

  const titleId = title && `${rootId}-title`;
  const bodyId = `${rootId}-body`;

  return (
    <Box
      id={rootId}
      role="alert"
      aria-labelledby={titleId}
      aria-describedby={bodyId}
      className={cx(classes.root, classes[variant], className)}
      ref={ref}
      {...others}
    >
      <div className={classes.wrapper}>
        {icon && <div className={classes.icon}>{icon}</div>}

        <div className={classes.body}>
          {title && (
            <div className={classes.title}>
              <span id={titleId} className={classes.label}>
                {title}
              </span>

              {withCloseButton && (
                <CloseButton
                  className={classes.closeButton}
                  onClick={() => onClose?.()}
                  variant="transparent"
                  size={16}
                  iconSize={16}
                  aria-label={closeButtonLabel}
                />
              )}
            </div>
          )}

          <div id={bodyId} className={classes.message}>
            {children}
          </div>
        </div>
      </div>
    </Box>
  );
});

Alert.displayName = '@mantine/core/Alert';
