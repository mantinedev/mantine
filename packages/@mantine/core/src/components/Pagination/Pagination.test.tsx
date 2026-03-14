import { render, screen, tests } from '@mantine-tests/core';
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

  it('sets data-layout="responsive" on root when layout="responsive"', () => {
    const { container } = render(<Pagination {...defaultProps} layout="responsive" />);
    expect(container.querySelector('[data-layout="responsive"]')).toBeTruthy();
  });

  it('renders label with correct default text in responsive mode', () => {
    render(<Pagination {...defaultProps} layout="responsive" />);
    expect(screen.getByText('Page 1 of 10')).toBeTruthy();
  });

  it('renders label with custom formatLabel in responsive mode', () => {
    render(
      <Pagination
        {...defaultProps}
        layout="responsive"
        formatLabel={({ page, totalPages }) => `${page}/${totalPages}`}
      />
    );
    expect(screen.getByText('1/10')).toBeTruthy();
  });

  it('renders items wrapper in responsive mode', () => {
    const { container } = render(<Pagination {...defaultProps} layout="responsive" />);
    expect(container.querySelector('[data-layout="responsive"]')).toBeTruthy();
  });
});
