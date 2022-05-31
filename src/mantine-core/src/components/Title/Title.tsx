import React, { forwardRef } from 'react';
import { DefaultProps, useMantineDefaultProps } from '@mantine/styles';
import { Box } from '../Box';
import useStyles, { TitleStylesParams } from './Title.styles';

export type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;

export interface TitleProps
  extends DefaultProps<never, TitleStylesParams>,
    React.ComponentPropsWithoutRef<'h1'> {
  /** Defines component and styles which will be used */
  order?: TitleOrder;

  /** Defined text-align */
  align?: React.CSSProperties['textAlign'];
}

const defaultProps: Partial<TitleProps> = {
  order: 1,
};

export const Title = forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { className, order, children, align, unstyled, ...others } = useMantineDefaultProps(
    'Title',
    defaultProps,
    props
  );

  const { classes, cx } = useStyles({ element: `h${order}`, align }, { name: 'Title', unstyled });

  if (![1, 2, 3, 4, 5, 6].includes(order)) {
    return null;
  }

  return (
    <Box component={`h${order}`} ref={ref} className={cx(classes.root, className)} {...others}>
      {children}
    </Box>
  );
});

Title.displayName = '@mantine/core/Title';
