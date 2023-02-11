import React, { forwardRef } from 'react';
import {
  MantineNumberSize,
  Selectors,
  useComponentDefaultProps,
  DefaultProps,
} from '@mantine/styles';
import { Box } from '../../Box';
import { PaginationDotsIcon, PaginationIconProps, getIconSize } from '../Pagination.icons';
import useStyles from './PaginationDots.styles';

export type PaginationDotsStylesNames = Selectors<typeof useStyles>;

export interface PaginationDotsProps
  extends DefaultProps<PaginationDotsStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;

  /** Controls icon size */
  size?: MantineNumberSize;

  /** Custom dots icon component, must accept svg element props and size prop */
  icon?: React.FC<PaginationIconProps>;
}

const defaultProps: Partial<PaginationDotsProps> = {
  size: 'md',
  icon: PaginationDotsIcon,
};

export const PaginationDots = forwardRef<HTMLDivElement, PaginationDotsProps>((props, ref) => {
  const {
    size,
    variant,
    className,
    icon: Icon,
    ...others
  } = useComponentDefaultProps('PaginationDots', defaultProps, props);

  const { classes, cx } = useStyles(null, { name: 'Pagination', size, variant });

  return (
    <Box ref={ref} className={cx(classes.dots, className)} {...others}>
      <Icon size={getIconSize(size)} />
    </Box>
  );
});

PaginationDots.displayName = '@mantine/core/PaginationDots';
