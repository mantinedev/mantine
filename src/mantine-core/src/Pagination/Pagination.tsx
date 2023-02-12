import React from 'react';
import { getSize, useComponentDefaultProps, useMantineTheme } from '@mantine/styles';
import { Group, GroupProps } from '../Group';
import { PaginationRoot, PaginationRootSettings } from './PaginationRoot/PaginationRoot';
import { PaginationItems } from './PaginationItems/PaginationItems';
import { PaginationControl } from './PaginationControl/PaginationControl';
import { PaginationDots } from './PaginationDots/PaginationDots';
import {
  PaginationNext,
  PaginationFirst,
  PaginationLast,
  PaginationPrevious,
} from './PaginationEdges/PaginationEdges';

export interface PaginationProps
  extends PaginationRootSettings,
    Omit<GroupProps, keyof PaginationRootSettings> {
  /** Determines whether first/last controls should be rendered, false by default */
  withEdges?: boolean;

  /** Determines whether next/previous controls should be rendered, true by default */
  withControls?: boolean;
}

const defaultProps: Partial<PaginationProps> = {
  withControls: true,
  siblings: 1,
  boundaries: 1,
};

export function Pagination(props: PaginationProps) {
  const {
    withEdges,
    withControls,
    classNames,
    styles,
    unstyled,
    variant,
    size,
    total,
    value,
    defaultValue,
    onChange,
    disabled,
    siblings,
    boundaries,
    color,
    radius,
    onNextPage,
    onPreviousPage,
    onFirstPage,
    onLastPage,
    getItemProps,
    spacing,
    ...others
  } = useComponentDefaultProps('Pagination', defaultProps, props);
  const theme = useMantineTheme();

  return (
    <PaginationRoot
      classNames={classNames}
      styles={styles}
      unstyled={unstyled}
      variant={variant}
      size={size}
      total={total}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      disabled={disabled}
      siblings={siblings}
      boundaries={boundaries}
      color={color}
      radius={radius}
      onNextPage={onNextPage}
      onPreviousPage={onPreviousPage}
      onFirstPage={onFirstPage}
      onLastPage={onLastPage}
      getItemProps={getItemProps}
    >
      <Group
        spacing={spacing || `calc(${getSize({ size, sizes: theme.spacing })} / 2)`}
        {...others}
      >
        {withEdges && <PaginationFirst />}
        {withControls && <PaginationPrevious />}
        <PaginationItems />
        {withControls && <PaginationNext />}
        {withEdges && <PaginationLast />}
      </Group>
    </PaginationRoot>
  );
}

Pagination.displayName = '@mantine/core/Pagination';
Pagination.Root = PaginationRoot;
Pagination.Items = PaginationItems;
Pagination.Control = PaginationControl;
Pagination.Dots = PaginationDots;
Pagination.Next = PaginationNext;
Pagination.Previous = PaginationPrevious;
Pagination.Last = PaginationLast;
Pagination.First = PaginationFirst;
