import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Scroller, ScrollerProps, ScrollerStylesNames } from './Scroller';

const defaultProps: ScrollerProps = {
  children: <div style={{ width: 1000 }}>Test content</div>,
};

describe('@mantine/core/Scroller', () => {
  tests.itSupportsSystemProps<ScrollerProps, ScrollerStylesNames>({
    component: Scroller,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/Scroller',
    stylesApiSelectors: ['root', 'container', 'content'],
  });

  it('supports custom scrollAmount prop', async () => {
    const scrollBy = jest.fn();
    const originalScrollBy = HTMLElement.prototype.scrollBy;
    HTMLElement.prototype.scrollBy = scrollBy;

    try {
      render(<Scroller {...defaultProps} scrollAmount={500} showEndControl />);
      await userEvent.click(screen.getByLabelText('Scroll right'));
      expect(scrollBy).toHaveBeenCalledWith(expect.objectContaining({ left: 500 }));
    } finally {
      HTMLElement.prototype.scrollBy = originalScrollBy;
    }
  });

  it('resolves controlSize from theme sizes and numbers', () => {
    const { container, rerender } = render(<Scroller controlSize="xl">test</Scroller>);
    expect(container.querySelector('.mantine-Scroller-root')).toHaveStyle({
      '--scroller-control-size': 'var(--scroller-control-size-xl)',
    });
    rerender(<Scroller controlSize={80}>test</Scroller>);
    expect(container.querySelector('.mantine-Scroller-root')).toHaveStyle({
      '--scroller-control-size': 'calc(5rem * var(--mantine-scale))',
    });
  });

  it('does not render controls when withControls is false', () => {
    const { container } = render(
      <Scroller showStartControl showEndControl withControls={false}>
        test-children
      </Scroller>
    );
    expect(container.querySelectorAll('button')).toHaveLength(0);
  });

  it('renders start control when showStartControl is true', () => {
    render(<Scroller {...defaultProps} showStartControl />);
    expect(screen.getByLabelText('Scroll left')).toBeInTheDocument();
  });

  it('renders end control when showEndControl is true', () => {
    render(<Scroller {...defaultProps} showEndControl />);
    expect(screen.getByLabelText('Scroll right')).toBeInTheDocument();
  });

  it('renders both controls when both show props are true', () => {
    render(<Scroller {...defaultProps} showStartControl showEndControl />);
    expect(screen.getByLabelText('Scroll left')).toBeInTheDocument();
    expect(screen.getByLabelText('Scroll right')).toBeInTheDocument();
  });

  it('applies startControlProps to start control', () => {
    render(
      <Scroller
        {...defaultProps}
        showStartControl
        startControlProps={{ 'aria-label': 'Custom start label' }}
      />
    );
    expect(screen.getByLabelText('Custom start label')).toBeInTheDocument();
  });

  it('applies endControlProps to end control', () => {
    render(
      <Scroller
        {...defaultProps}
        showEndControl
        endControlProps={{ 'aria-label': 'Custom end label' }}
      />
    );
    expect(screen.getByLabelText('Custom end label')).toBeInTheDocument();
  });

  it('renders custom startControlIcon', () => {
    render(
      <Scroller
        {...defaultProps}
        showStartControl
        startControlIcon={<span data-testid="custom-start-icon" />}
      />
    );
    expect(screen.getByTestId('custom-start-icon')).toBeInTheDocument();
  });

  it('renders custom endControlIcon', () => {
    render(
      <Scroller
        {...defaultProps}
        showEndControl
        endControlIcon={<span data-testid="custom-end-icon" />}
      />
    );
    expect(screen.getByTestId('custom-end-icon')).toBeInTheDocument();
  });

  it('sets data-position attribute on controls', () => {
    render(<Scroller {...defaultProps} showStartControl showEndControl />);
    expect(screen.getByLabelText('Scroll left')).toHaveAttribute('data-position', 'start');
    expect(screen.getByLabelText('Scroll right')).toHaveAttribute('data-position', 'end');
  });
});
