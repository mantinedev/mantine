import React, { forwardRef } from 'react';
import { Selectors, useComponentDefaultProps, DefaultProps } from '@mantine/styles';
import { Box } from '../../Box';
import { PaginationDotsIcon, PaginationIconProps, getIconSize } from '../Pagination.icons';
import useStyles from './PaginationDots.styles';
import { usePaginationContext } from '../Pagination.context';

export type PaginationDotsStylesNames = Selectors<typeof useStyles>;

export interface PaginationDotsProps
  extends DefaultProps<PaginationDotsStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Custom dots icon component, must accept svg element props and size prop */
  icon?: React.FC<PaginationIconProps>;
}

const defaultProps: Partial<PaginationDotsProps> = {
  icon: PaginationDotsIcon,
};

export const PaginationDots = forwardRef<HTMLDivElement, PaginationDotsProps>((props, ref) => {
  const {
    className,
    icon: Icon,
    ...others
  } = useComponentDefaultProps('PaginationDots', defaultProps, props);

  const ctx = usePaginationContext();
  const { classes, cx } = useStyles(null, ctx.stylesApi);

  return (
    <Box ref={ref} className={cx(classes.dots, className)} {...others}>
      <Icon size={getIconSize(ctx.stylesApi.size)} />
    </Box>
  );
});

PaginationDots.displayName = '@mantine/core/PaginationDots';
