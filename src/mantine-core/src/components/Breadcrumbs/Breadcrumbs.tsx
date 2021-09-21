import React from 'react';
import { mergeStyles, DefaultProps } from '@mantine/styles';

import { Text } from '../Text/Text';
import useStyles from './Breadcrumbs.styles';

export type BreadcrumbsStylesNames = keyof ReturnType<typeof useStyles>['classes'];

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
  children,
  separator = '/',
  classNames,
  styles,
  ...others
}: BreadcrumbsProps) {
  const { classes, cx } = useStyles(null, classNames, 'breadcrumbs');
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
