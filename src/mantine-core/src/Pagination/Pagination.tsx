import React, { forwardRef } from 'react';
import { usePagination } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  Selectors,
  useComponentDefaultProps,
} from '@mantine/styles';
import { Group, GroupProps } from '../Group/Group';
import { DefaultItem, PaginationItemProps } from './DefaultItem/DefaultItem';
import useStyles, { PaginationStylesParams } from './Pagination.styles';

export type PaginationStylesNames = Selectors<typeof useStyles>;

export interface PaginationProps
  extends DefaultProps<PaginationStylesNames, PaginationStylesParams>,
    Omit<GroupProps, 'classNames' | 'styles' | 'onChange'> {
  /** Change item component */
  itemComponent?: React.FC<PaginationItemProps>;

  /** Active item color from theme, defaults to theme.primaryColor */
  color?: MantineColor;

  /** Active initial page for uncontrolled component */
  initialPage?: number;

  /** Controlled active page number */
  page?: number;

  /** Total amount of pages */
  total: number;

  /** Siblings amount on left/right side of selected page */
  siblings?: number;

  /** Amount of elements visible on left/right edges */
  boundaries?: number;

  /** Callback fired after change of each page */
  onChange?: (page: number) => void;

  /** Callback to control aria-labels */
  getItemAriaLabel?: (
    page: number | 'dots' | 'prev' | 'next' | 'first' | 'last'
  ) => string | undefined;

  /** Spacing between items from theme or number to set value in px, defaults to theme.spacing.xs / 2 */
  spacing?: MantineNumberSize;

  /** Predefined item size or number to set width and height in px */
  size?: MantineNumberSize;

  /** Predefined item radius or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Show/hide jump to start/end controls */
  withEdges?: boolean;

  /** Show/hide prev/next controls */
  withControls?: boolean;

  /** Determines whether all controls should be disabled */
  disabled?: boolean;
}

const defaultProps: Partial<PaginationProps> = {
  itemComponent: DefaultItem,
  initialPage: 1,
  siblings: 1,
  boundaries: 1,
  size: 'md',
  radius: 'sm',
  withEdges: false,
  withControls: true,
};

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>((props, ref) => {
  const {
    itemComponent: Item,
    classNames,
    styles,
    page,
    initialPage,
    color,
    total,
    siblings,
    boundaries,
    size,
    radius,
    onChange,
    getItemAriaLabel,
    spacing,
    withEdges,
    withControls,
    sx,
    unstyled,
    disabled,
    ...others
  } = useComponentDefaultProps('Pagination', defaultProps, props);

  const { classes, theme } = useStyles(
    { color, size, radius },
    { classNames, styles, unstyled, name: 'Pagination' }
  );

  const { range, setPage, next, previous, active, first, last } = usePagination({
    page,
    siblings,
    total,
    onChange,
    initialPage,
    boundaries,
  });

  const items = range.map((pageNumber, index) => (
    <Item
      key={index}
      page={pageNumber}
      active={pageNumber === active}
      aria-current={pageNumber === active ? 'page' : undefined}
      aria-label={typeof getItemAriaLabel === 'function' ? getItemAriaLabel(pageNumber) : null}
      tabIndex={pageNumber === 'dots' ? -1 : 0}
      data-dots={pageNumber === 'dots' || undefined}
      data-active={pageNumber === active || undefined}
      className={classes.item}
      onClick={pageNumber !== 'dots' ? () => setPage(pageNumber) : undefined}
      disabled={disabled}
    />
  ));

  return (
    <Group
      role="navigation"
      spacing={spacing || theme.fn.size({ size, sizes: theme.spacing }) / 2}
      ref={ref}
      sx={sx}
      unstyled={unstyled}
      {...others}
    >
      {withEdges && (
        <Item
          page="first"
          onClick={first}
          aria-label={getItemAriaLabel ? getItemAriaLabel('first') : undefined}
          aria-disabled={active === 1 || disabled}
          className={classes.item}
          disabled={active === 1 || disabled}
        />
      )}

      {withControls && (
        <Item
          page="prev"
          onClick={previous}
          aria-label={getItemAriaLabel ? getItemAriaLabel('prev') : undefined}
          aria-disabled={active === 1 || disabled}
          className={classes.item}
          disabled={active === 1 || disabled}
        />
      )}

      {items}

      {withControls && (
        <Item
          page="next"
          onClick={next}
          aria-label={getItemAriaLabel ? getItemAriaLabel('next') : undefined}
          aria-disabled={active === total || disabled}
          className={classes.item}
          disabled={active === total || disabled}
        />
      )}

      {withEdges && (
        <Item
          page="last"
          onClick={last}
          aria-label={getItemAriaLabel ? getItemAriaLabel('last') : undefined}
          aria-disabled={active === total || disabled}
          className={classes.item}
          disabled={active === total || disabled}
        />
      )}
    </Group>
  );
});

Pagination.displayName = '@mantine/core/Pagination';
