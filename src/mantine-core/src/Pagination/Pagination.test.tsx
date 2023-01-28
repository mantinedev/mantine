import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { render } from '@testing-library/react';
import { Pagination, PaginationProps } from './Pagination';

const defaultProps: PaginationProps = {
  total: 10,
  getItemAriaLabel: () => 'test-label',
};

describe('@mantine/core/Pagination', () => {
  checkAccessibility([<Pagination {...defaultProps} />]);
  itSupportsSystemProps({
    component: Pagination,
    props: defaultProps,
    displayName: '@mantine/core/Pagination',
    refType: HTMLDivElement,
    providerName: 'Pagination',
  });

  it('renders nothing if total value is negative', () => {
    const { container } = render(<Pagination total={-10} />);
    expect(container.firstChild).toBe(null);
  });

  it('renders nothing if total value is zero', () => {
    const { container } = render(<Pagination total={0} />);
    expect(container.firstChild).toBe(null);
  });
});
