import React from 'react';
import {
  itSupportsSystemProps,
  itIsPolymorphic,
  createContextContainer,
  itThrowsContextError,
} from '@mantine/tests';
import { render, screen } from '@testing-library/react';
import { PaginationControl, PaginationControlProps } from './PaginationControl';
import { PaginationRoot } from '../PaginationRoot/PaginationRoot';

const TestComponent = createContextContainer(PaginationControl, PaginationRoot, { total: 10 });

const defaultProps: PaginationControlProps = {
  children: 10,
};

describe('@mantine/core/PaginationControl', () => {
  itThrowsContextError(
    PaginationControl,
    defaultProps,
    'Pagination.Root component was not found in tree'
  );

  itIsPolymorphic(TestComponent, defaultProps);
  itSupportsSystemProps({
    component: TestComponent,
    props: defaultProps,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/PaginationControl',
    providerName: 'PaginationControl',
  });

  it('has data-active attribute when active prop is set', () => {
    const { rerender } = render(<TestComponent {...defaultProps} active={false} />);
    expect(screen.getByRole('button')).not.toHaveAttribute('data-active');

    rerender(<TestComponent {...defaultProps} active />);
    expect(screen.getByRole('button')).toHaveAttribute('data-active');
  });

  it('has data-disabled attribute when disabled prop is set', () => {
    const { rerender } = render(<TestComponent {...defaultProps} disabled={false} />);
    expect(screen.getByRole('button')).not.toHaveAttribute('data-disabled');

    rerender(<TestComponent {...defaultProps} disabled />);
    expect(screen.getByRole('button')).toHaveAttribute('data-disabled');
  });
});
