import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, mergeStyles } from '../../theme';
import { Text } from '../Text/Text';
import useStyles from './Breadcrumbs.styles';

export type BreadcrumbsStylesNames = keyof ReturnType<typeof useStyles>;

export interface BreadcrumbsProps
  extends DefaultProps<BreadcrumbsStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Separator between breadcrumbs */
  separator?: React.ReactNode;

  /** React nodes that should be separated */
  children: React.ReactNode;
}

export function Breadcrumbs({
  className,
  style,
  themeOverride,
  children,
  separator = '/',
  classNames,
  styles,
  ...others
}: BreadcrumbsProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, 'breadcrumbs');
  const _styles = mergeStyles(classes, styles);

  const items = React.Children.toArray(children).reduce((acc: any[], child: any, index, array) => {
    acc.push(
      React.cloneElement(child, {
        className: classes.breadcrumb,
        style: _styles.breadcrumb,
        key: index,
      })
    );

    if (index !== array.length - 1) {
      acc.push(
        <Text
          size="sm"
          className={classes.separator}
          style={_styles.separator}
          key={`separator-${index}`}
          themeOverride={themeOverride}
        >
          {separator}
        </Text>
      );
    }

    return acc;
  }, []);

  return (
    <div className={cx(classes.root, className)} style={{ ...style, ..._styles.root }} {...others}>
      {items}
    </div>
  );
}

Breadcrumbs.displayName = '@mantine/core/Breadcrumbs';
