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

  it('moves focus to the active page when the focused next control becomes disabled', async () => {
    render(<Pagination {...edgeProps} total={3} />);
    const next = screen.getByRole('button', { name: 'next' });
    next.focus();
    await userEvent.keyboard('{Enter}{Enter}');
    expect(next).toBeDisabled();
    expect(screen.getByRole('button', { name: '3' })).toHaveFocus();
  });

  it('moves focus to the active page when the focused previous control becomes disabled', async () => {
    render(<Pagination {...edgeProps} total={3} defaultValue={3} />);
    const previous = screen.getByRole('button', { name: 'previous' });
    previous.focus();
    await userEvent.keyboard('{Enter}{Enter}');
    expect(previous).toBeDisabled();
    expect(screen.getByRole('button', { name: '1' })).toHaveFocus();
  });

  it('moves focus to the active page when the focused first and last controls become disabled', async () => {
    render(<Pagination {...edgeProps} total={5} defaultValue={3} />);
    const last = screen.getByRole('button', { name: 'last' });
    last.focus();
    await userEvent.keyboard('{Enter}');
    expect(screen.getByRole('button', { name: '5' })).toHaveFocus();

    const first = screen.getByRole('button', { name: 'first' });
    first.focus();
    await userEvent.keyboard('{Enter}');
    expect(screen.getByRole('button', { name: '1' })).toHaveFocus();
  });

  it('moves focus to the active page when the browser blurs the next control before the update', async () => {
    render(
      <Pagination
        {...edgeProps}
        total={2}
        onNextPage={() => (document.activeElement as HTMLElement).blur()}
      />
    );
    screen.getByRole('button', { name: 'next' }).focus();
    await userEvent.keyboard('{Enter}');
    expect(screen.getByRole('button', { name: '2' })).toHaveFocus();
  });

  it('does not move focus when another element was focused before the update', async () => {
    render(
      <>
        <input aria-label="search" />
        <Pagination
          {...edgeProps}
          total={2}
          onNextPage={() => screen.getByRole('textbox', { name: 'search' }).focus()}
        />
      </>
    );
    screen.getByRole('button', { name: 'next' }).focus();
    await userEvent.keyboard('{Enter}');
    expect(screen.getByRole('textbox', { name: 'search' })).toHaveFocus();
  });

  it('moves focus to the active page in the composed API', async () => {
    render(
      <Pagination.Root total={2}>
        <Pagination.Items />
        <Pagination.Next aria-label="next" />
      </Pagination.Root>
    );
    const next = screen.getByRole('button', { name: 'next' });
    next.focus();
    await userEvent.keyboard('{Enter}');
    expect(screen.getByRole('button', { name: '2' })).toHaveFocus();
  });

  it('does not move focus when the focused next control stays enabled', async () => {
    const { rerender } = render(<Pagination {...edgeProps} value={2} />);
    const next = screen.getByRole('button', { name: 'next' });
    next.focus();
    rerender(<Pagination {...edgeProps} value={5} />);
    expect(next).toHaveFocus();
  });

  it('does not move focus when the next control becomes disabled while not focused', async () => {
    const { rerender } = render(<Pagination {...edgeProps} value={2} />);
    const page = screen.getByRole('button', { name: '1' });
    page.focus();
    rerender(<Pagination {...edgeProps} value={10} />);
    expect(screen.getByRole('button', { name: 'next' })).toBeDisabled();
    expect(page).toHaveFocus();
  });
});
