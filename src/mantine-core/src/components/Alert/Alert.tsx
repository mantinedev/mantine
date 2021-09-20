import React from 'react';
import { mergeStyles, DefaultProps, MantineColor } from '@mantine/tss';
import { CloseButton } from '../ActionIcon/CloseButton/CloseButton';
import useStyles from './Alert.styles';

export type AlertStylesName = keyof ReturnType<typeof useStyles>['classes'];

export interface AlertProps
  extends DefaultProps<AlertStylesName>,
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

export function Alert({
  className,
  title,
  children,
  color,
  style,
  classNames,
  icon,
  styles,
  withCloseButton,
  ...others
}: AlertProps) {
  const { classes, cx } = useStyles({ color, withIcon: !!icon }, classNames, 'alert');
  const _styles = mergeStyles(classes, styles);

  return (
    <div className={cx(classes.root, className)} style={{ ...style, ..._styles.root }} {...others}>
      <div className={classes.wrapper} style={_styles.wrapper}>
        {icon && (
          <div className={classes.icon} style={_styles.icon}>
            {icon}
          </div>
        )}

        <div className={classes.body} style={_styles.body}>
          {title && (
            <div className={classes.title} style={_styles.title}>
              <span>{title}</span>
              {withCloseButton && (
                <CloseButton
                  className={classes.closeButton}
                  style={_styles.closeButton}
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

Alert.displayName = '@mantine/core/Alert';
