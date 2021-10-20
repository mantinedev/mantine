import React, { forwardRef } from 'react';
import { DefaultProps, MantineColor, ClassNames, useExtractedMargins } from '@mantine/styles';
import { CloseButton } from '../ActionIcon';
import useStyles from './Alert.styles';

export type AlertStylesNames = ClassNames<typeof useStyles>;

export interface AlertProps
  extends DefaultProps<AlertStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Optional alert title */
  title?: React.ReactNode;

  /** Alert message */
  children: React.ReactNode;

  /** Alert title and line colors from theme */
  color?: MantineColor;

  /** Icon displayed before title */
  icon?: React.ReactNode;

  /** Display close button */
  withCloseButton?: boolean;

  /** Called when close button is clicked */
  onClose?(): void;

  /** Close button aria-label */
  closeButtonLabel?: string;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      title,
      children,
      color,
      style,
      classNames,
      icon,
      styles,
      onClose,
      withCloseButton,
      ...others
    }: AlertProps,
    ref
  ) => {
    const { classes, cx } = useStyles({ color }, { classNames, styles, name: 'Alert' });
    const { mergedStyles, rest } = useExtractedMargins({ others, style });

    return (
      <div className={cx(classes.root, className)} style={mergedStyles} ref={ref} {...rest}>
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
                  />
                )}
              </div>
            )}

            <div className={classes.message}>{children}</div>
          </div>
        </div>
      </div>
    );
  }
);

Alert.displayName = '@mantine/core/Alert';
