import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineColor,
  Selectors,
  MantineNumberSize,
  useComponentDefaultProps,
  Variants,
} from '@mantine/styles';
import { useId } from '@mantine/hooks';
import { CloseButton } from '../CloseButton';
import { Box } from '../Box';
import useStyles, { AlertStylesParams } from './Alert.styles';

export type AlertStylesNames = Selectors<typeof useStyles>;

export interface AlertProps
  extends DefaultProps<AlertStylesNames, AlertStylesParams>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Alert title */
  title?: React.ReactNode;

  /** Controls Alert background, color and border styles, "light" by default */
  variant?: Variants<'filled' | 'outline' | 'light'>;

  /** Alert message */
  children: React.ReactNode;

  /** Key of theme.colors */
  color?: MantineColor;

  /** Icon displayed next to the title */
  icon?: React.ReactNode;

  /** Determines whether close button should be displayed, false by default */
  withCloseButton?: boolean;

  /** Called when close button is clicked */
  onClose?(): void;

  /** Close button aria-label */
  closeButtonLabel?: string;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
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
    unstyled,
    ...others
  } = useComponentDefaultProps('Alert', defaultProps, props);

  const { classes, cx } = useStyles(
    { color, radius },
    { classNames, styles, unstyled, variant, name: 'Alert' }
  );

  const rootId = useId(id);
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
            <div className={classes.title} data-with-close-button={withCloseButton || undefined}>
              <span id={titleId} className={classes.label}>
                {title}
              </span>
            </div>
          )}

          <div id={bodyId} className={classes.message}>
            {children}
          </div>
        </div>

        {withCloseButton && (
          <CloseButton
            className={classes.closeButton}
            onClick={onClose}
            variant="transparent"
            size={16}
            iconSize={16}
            aria-label={closeButtonLabel}
          />
        )}
      </div>
    </Box>
  );
});

Alert.displayName = '@mantine/core/Alert';
