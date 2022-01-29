import React, { forwardRef } from 'react';
import { DefaultProps, ClassNames } from '@mantine/styles';
import { Text } from '../Text';
import { Box } from '../Box';
import useStyles from './Breadcrumbs.styles';

export type BreadcrumbsStylesNames = ClassNames<typeof useStyles>;

export interface BreadcrumbsProps
  extends DefaultProps<BreadcrumbsStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Separator between breadcrumbs */
  separator?: React.ReactNode;

  /** React nodes that should be separated */
  children: React.ReactNode;
}

export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  (
    { className, children, separator = '/', classNames, styles, ...others }: BreadcrumbsProps,
    ref
  ) => {
    const { classes, cx } = useStyles(null, { classNames, styles, name: 'Breadcrumbs' });

    const items = React.Children.toArray(children).reduce(
      (acc: any[], child: any, index, array) => {
        acc.push(React.cloneElement(child, { className: classes.breadcrumb, key: index }));

        if (index !== array.length - 1) {
          acc.push(
            <Text size="sm" className={classes.separator} key={`separator-${index}`}>
              {separator}
            </Text>
          );
        }

        return acc;
      },
      []
    );

    return (
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        {items}
      </Box>
    );
  }
);

Breadcrumbs.displayName = '@mantine/core/Breadcrumbs';
