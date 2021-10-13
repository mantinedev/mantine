import React, { forwardRef } from 'react';
import {
  mergeStyles,
  DefaultProps,
  MantineColor,
  ClassNames,
  useExtractedMargins,
} from '@mantine/styles';
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
    const { classes, cx } = useStyles({ color }, classNames, 'alert');
    const _styles = mergeStyles(classes, styles);
    const { mergedStyles, rest } = useExtractedMargins({ others, style, rootStyle: _styles.root });

    return (
      <div className={cx(classes.root, className)} style={mergedStyles} ref={ref} {...rest}>
        <div className={classes.wrapper} style={_styles.wrapper}>
          {icon && (
            <div className={classes.icon} style={_styles.icon}>
              {icon}
            </div>
          )}

          <div className={classes.body} style={_styles.body}>
            {title && (
              <div className={classes.title} style={_styles.title}>
                <span className={classes.label} style={_styles.label}>
                  {title}
                </span>

                {withCloseButton && (
                  <CloseButton
                    className={classes.closeButton}
                    style={_styles.closeButton}
                    onClick={() => onClose?.()}
                    variant="transparent"
                    size={16}
                    iconSize={16}
                  />
                )}
              </div>
            )}

            <div className={classes.message} style={_styles.message}>
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Alert.displayName = '@mantine/core/Alert';
