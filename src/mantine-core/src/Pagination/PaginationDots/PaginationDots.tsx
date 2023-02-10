import React, { forwardRef } from 'react';
import {
  MantineNumberSize,
  Selectors,
  useComponentDefaultProps,
  DefaultProps,
} from '@mantine/styles';
import { Box } from '../../Box';
import { DotsIcon } from './DotsIcon';
import useStyles from './PaginationDots.styles';

export type PaginationDotsStylesNames = Selectors<typeof useStyles>;

export interface PaginationDotsProps
  extends DefaultProps<PaginationDotsStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;

  /** Controls icon size */
  size?: MantineNumberSize;
}

const defaultProps: Partial<PaginationDotsProps> = {};

export const PaginationDots = forwardRef<HTMLDivElement, PaginationDotsProps>((props, ref) => {
  const { size, variant, className, ...others } = useComponentDefaultProps(
    'PaginationDots',
    defaultProps,
    props
  );

  const { classes, cx } = useStyles(null, { name: 'Pagination', size, variant });

  return (
    <Box ref={ref} className={cx(classes.dots, className)} {...others}>
      <DotsIcon />
    </Box>
  );
});
