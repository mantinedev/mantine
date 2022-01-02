import React, { forwardRef } from 'react';
import { DefaultProps, MantineColor, ClassNames, MantineNumberSize } from '@mantine/styles';
import { Box } from '../Box';
import { CloseButton } from '../ActionIcon';
import useStyles from './Alert.styles';

export type AlertStylesNames = ClassNames<typeof useStyles>;

export interface AlertProps
  extends DefaultProps<AlertStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Alert title */
  title?: React.ReactNode;

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

  /** Radius from theme.radius, or number to set border-radius in px */
  radius?: MantineNumberSize;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      title,
      children,
      color,
      classNames,
      icon,
      styles,
      onClose,
      radius = 'sm',
      withCloseButton,
      closeButtonLabel,
      ...others
    }: AlertProps,
    ref
  ) => {
    const { classes, cx } = useStyles({ color, radius }, { classNames, styles, name: 'Alert' });

    return (
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        <div className={classes.wrapper}>
          {icon && <div className={classes.icon}>{icon}</div>}

          <div className={classes.body}>
            {title && (
              <div className={classes.title}>
                <span className={classes.label}>{title}</span>

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

            <div className={classes.message}>{children}</div>
          </div>
        </div>
      </Box>
    );
  }
);

Alert.displayName = '@mantine/core/Alert';
