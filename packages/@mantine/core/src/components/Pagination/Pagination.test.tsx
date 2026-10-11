import { render, screen, tests, userEvent } from '@mantine-tests/core';
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

  it('preserves data-layout when a custom mod is provided', () => {
    const { container } = render(
      <Pagination {...defaultProps} layout="responsive" mod={{ 'data-custom': true }} />
    );
    const root = container.querySelector('[data-layout="responsive"]');
    expect(root).toBeTruthy();
    expect(root).toHaveAttribute('data-custom');
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

  const edgeProps: PaginationProps = {
    total: 10,
    withEdges: true,
    getControlProps: (control) => ({ 'aria-label': control }),
  };

  it('renders root as a nav landmark', () => {
    render(<Pagination {...edgeProps} aria-label="Pages" />);
    expect(screen.getByRole('navigation', { name: 'Pages' })).toBeInTheDocument();
  });

  it('hides dots from assistive technologies', () => {
    const { container } = render(<Pagination total={20} value={10} />);
    container.querySelectorAll('.mantine-Pagination-dots').forEach((dots) => {
      expect(dots).toHaveAttribute('aria-hidden', 'true');
    });
    expect(container.querySelectorAll('.mantine-Pagination-dots').length).toBeGreaterThan(0);
  });

  it('disables first and previous controls on the first page', () => {
    render(<Pagination {...edgeProps} />);
    expect(screen.getByRole('button', { name: 'first' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'previous' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'next' })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: 'last' })).not.toBeDisabled();
  });

  it('disables next and last controls on the last page', () => {
    render(<Pagination {...edgeProps} defaultValue={10} />);
    expect(screen.getByRole('button', { name: 'next' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'last' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'previous' })).not.toBeDisabled();
  });

  it('disables first and previous controls on the first page with startValue', async () => {
    render(<Pagination {...edgeProps} startValue={5} />);
    expect(screen.getByRole('button', { name: '5' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('button', { name: 'first' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'previous' })).toBeDisabled();

    await userEvent.click(screen.getByRole('button', { name: 'next' }));
    expect(screen.getByRole('button', { name: 'previous' })).not.toBeDisabled();
  });

  it('calls onChange when page control is clicked', async () => {
    const spy = jest.fn();
    render(<Pagination total={10} onChange={spy} />);
    await userEvent.click(screen.getByRole('button', { name: '3' }));
    expect(spy).toHaveBeenCalledWith(3);
    expect(screen.getByRole('button', { name: '3' })).toHaveAttribute('data-active', 'true');
  });

  it('supports controlled value', async () => {
    const spy = jest.fn();
    const { rerender } = render(<Pagination total={10} value={2} onChange={spy} />);
    expect(screen.getByRole('button', { name: '2' })).toHaveAttribute('data-active', 'true');

    await userEvent.click(screen.getByRole('button', { name: '4' }));
    expect(spy).toHaveBeenCalledWith(4);
    expect(screen.getByRole('button', { name: '2' })).toHaveAttribute('data-active', 'true');
    expect(screen.getByRole('button', { name: '4' })).not.toHaveAttribute('data-active');

    rerender(<Pagination total={10} value={4} onChange={spy} />);
    expect(screen.getByRole('button', { name: '4' })).toHaveAttribute('data-active', 'true');
  });
});
