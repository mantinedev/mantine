import { render, tests } from '@mantine-tests/core';
import { Pagination, PaginationProps, PaginationStylesNames } from './Pagination';

const defaultProps: PaginationProps = {
  total: 10,
  getControlProps: () => ({ 'aria-label': 'test-label' }),
};

describe('@mantine/core/Pagination', () => {
  tests.axe([<Pagination {...defaultProps} key="1" />]);

  tests.itSupportsSystemProps<PaginationProps, PaginationStylesNames>({
    component: Pagination,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Pagination',
    stylesApiSelectors: ['root', 'control', 'dots'],
  });

  it('renders nothing if total value is negative', () => {
    const { container } = render(<Pagination total={-10} />);
    expect(container.querySelectorAll('*:not(style)')).toHaveLength(0);
  });

  it('renders nothing if total value is zero', () => {
    const { container } = render(<Pagination total={0} />);
    expect(container.querySelectorAll('*:not(style)')).toHaveLength(0);
  });

  it('renders nothing if total value is 1 and hideWithOnePage is true', () => {
    const { container } = render(<Pagination total={1} hideWithOnePage />);
    expect(container.querySelectorAll('*:not(style)')).toHaveLength(0);
  });
});
