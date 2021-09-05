import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, mergeStyles } from '../../theme';
import { Text } from '../Text/Text';
import { CloseButton } from '../ActionIcon/CloseButton/CloseButton';
import useStyles from './Alert.styles';

export type AlertStylesName = keyof ReturnType<typeof useStyles>;

export interface AlertProps
  extends DefaultProps<AlertStylesName>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Optional alert title */
  title?: React.ReactNode;

  /** Alert message */
  children: React.ReactNode;

  /** Alert title and line colors from theme */
  color?: string;

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
  themeOverride,
  color,
  style,
  classNames,
  icon,
  styles,
  withCloseButton,
  ...others
}: AlertProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ color, theme, withIcon: !!icon }, classNames, 'alert');
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
            <Text
              themeOverride={themeOverride}
              weight={700}
              className={classes.title}
              style={_styles.title}
              size="sm"
            >
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
            </Text>
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
