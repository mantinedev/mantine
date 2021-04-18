import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { Text } from '../Text/Text';
import useStyles from './Breadcrumbs.styles';

interface BreadcrumbsProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Separator between breadcrumbs */
  separator?: React.ReactNode;

  /** React nodes that should be separated */
  children: React.ReactNode;
}

export function Breadcrumbs({
  className,
  themeOverride,
  children,
  separator = '/',
  ...others
}: BreadcrumbsProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });

  const items = React.Children.toArray(children).reduce((acc: any[], child: any, index, array) => {
    acc.push(
      React.cloneElement(child, {
        className: classes.breadcrumb,
        key: index,
        'data-mantine-breadcrumb': true,
      })
    );

    if (index !== array.length - 1) {
      acc.push(
        <Text
          size="sm"
          data-mantine-separator
          className={classes.separator}
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
    <div className={cx(classes.breadcrumbs, className)} {...others}>
      {items}
    </div>
  );
}

Breadcrumbs.displayName = '@mantine/core/Breadcrumbs';
