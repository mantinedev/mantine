import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, mergeStyles } from '../../theme';
import { Text } from '../Text/Text';
import { Paper } from '../Paper/Paper';
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

  /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
  shadow?: string;
}

export function Alert({
  className,
  title,
  children,
  themeOverride,
  color,
  shadow = 'sm',
  style,
  classNames,
  styles,
  ...others
}: AlertProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ color, theme }, classNames, 'alert');
  const _styles = mergeStyles(classes, styles);

  return (
    <Paper
      shadow={shadow}
      className={cx(classes.root, className)}
      themeOverride={themeOverride}
      style={{ ...style, ..._styles.root }}
      {...others}
    >
      {title && (
        <Text
          themeOverride={themeOverride}
          weight={700}
          className={classes.title}
          style={_styles.title}
        >
          {title}
        </Text>
      )}

      <div className={classes.body} style={_styles.body}>
        {children}
      </div>
    </Paper>
  );
}

Alert.displayName = '@mantine/core/Alert';
