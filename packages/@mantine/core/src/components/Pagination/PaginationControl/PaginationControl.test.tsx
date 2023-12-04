import React from 'react';
import { tests, createContextContainer, screen, render } from '@mantine-tests/core';
import {
  PaginationControl,
  PaginationControlProps,
  PaginationControlStylesNames,
} from './PaginationControl';
import { PaginationRoot } from '../PaginationRoot/PaginationRoot';

const TestContainer = createContextContainer(PaginationControl, PaginationRoot, { total: 10 });

const defaultProps: PaginationControlProps = {};

describe('@mantine/core/PaginationControl', () => {
  tests.itSupportsSystemProps<PaginationControlProps, PaginationControlStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/PaginationControl',
    stylesApiSelectors: ['control'],
    stylesApiName: 'Pagination',
    compound: true,
    providerStylesApi: false,
    selector: '.mantine-Pagination-control',
  });

  tests.itThrowsContextError({
    component: PaginationControl,
    props: defaultProps,
    error: 'Pagination.Root component was not found in tree',
  });

  it('has data-active attribute when active prop is set', () => {
    const { rerender } = render(<TestContainer {...defaultProps} active={false} />);
    expect(screen.getByRole('button')).not.toHaveAttribute('data-active');

    rerender(<TestContainer {...defaultProps} active />);
    expect(screen.getByRole('button')).toHaveAttribute('data-active');
  });

  it('has data-disabled attribute when disabled prop is set', () => {
    const { rerender } = render(<TestContainer {...defaultProps} disabled={false} />);
    expect(screen.getByRole('button')).not.toHaveAttribute('data-disabled');

    rerender(<TestContainer {...defaultProps} disabled />);
    expect(screen.getByRole('button')).toHaveAttribute('data-disabled');
  });
});
