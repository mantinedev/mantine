import React from 'react';
import { render, screen } from '@testing-library/react';
import { itSupportsSystemProps, createContextContainer } from '@mantine/tests';
import { PaginationDots, PaginationDotsProps } from './PaginationDots';
import { PaginationRoot } from '../PaginationRoot/PaginationRoot';

const TestComponent = createContextContainer(PaginationDots, PaginationRoot, { total: 10 });

const defaultProps: PaginationDotsProps = {};

describe('@mantine/core/PaginationDots', () => {
  itSupportsSystemProps({
    component: TestComponent,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/PaginationDots',
    providerName: 'PaginationDots',
  });

  it('allows to change dots icon', () => {
    render(<TestComponent icon={() => <div>test-dots</div>} />);
    expect(screen.getByText('test-dots')).toBeInTheDocument();
  });
});
