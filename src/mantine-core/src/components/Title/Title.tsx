import React, { forwardRef } from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../Box';
import useStyles from './Title.styles';

export type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;

export interface TitleProps extends DefaultProps, React.ComponentPropsWithoutRef<'h1'> {
  /** Defines component and styles which will be used */
  order?: TitleOrder;

  /** Defined text-align */
  align?: 'right' | 'left' | 'center' | 'justify';
}

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, order = 1, children, align, style, ...others }: TitleProps, ref) => {
    if (![1, 2, 3, 4, 5, 6].includes(order)) {
      return null;
    }

    const { classes, cx } = useStyles({ element: `h${order}` }, { name: 'Title' });
    const styles: React.CSSProperties = { ...style };

    if (align) {
      styles.textAlign = align;
    }

    return (
      <Box
        component={`h${order}`}
        ref={ref}
        className={cx(classes.root, className)}
        style={styles}
        {...others}
      >
        {children}
      </Box>
    );
  }
);

Title.displayName = '@mantine/core/Title';
