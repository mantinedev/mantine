import { act, fireEvent } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Tabs } from '../Tabs';
import { Scroller, ScrollerProps, ScrollerStylesNames } from './Scroller';

const defaultProps: ScrollerProps = {
  children: <div style={{ width: 1000 }}>Test content</div>,
};

describe('@mantine/core/Scroller', () => {
  tests.axe([
    <Scroller {...defaultProps} key="1" />,
    <Scroller {...defaultProps} showStartControl showEndControl key="2" />,
    <Tabs defaultValue="1" key="3">
      <Scroller showStartControl showEndControl>
        <Tabs.List>
          <Tabs.Tab value="1">Tab 1</Tabs.Tab>
          <Tabs.Tab value="2">Tab 2</Tabs.Tab>
        </Tabs.List>
      </Scroller>
    </Tabs>,
  ]);

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

  it('hides controls that cannot scroll from keyboard and assistive technologies', () => {
    const { container } = render(<Scroller {...defaultProps} />);
    const [start, end] = Array.from(container.querySelectorAll('button'));
    [start, end].forEach((control) => {
      expect(control).toHaveAttribute('data-hidden');
      expect(control).toHaveAttribute('aria-hidden', 'true');
      expect(control).toHaveAttribute('tabindex', '-1');
    });
  });

  it('exposes controls when showStartControl and showEndControl are set', () => {
    const { rerender } = render(<Scroller {...defaultProps} showStartControl />);
    expect(screen.getByRole('button', { name: 'Scroll left' })).not.toHaveAttribute('data-hidden');
    expect(screen.getByRole('button', { name: 'Scroll left' })).toHaveAttribute('tabindex', '0');
    expect(screen.queryByRole('button', { name: 'Scroll right' })).not.toBeInTheDocument();

    rerender(<Scroller {...defaultProps} showEndControl />);
    expect(screen.getByRole('button', { name: 'Scroll right' })).toHaveAttribute('tabindex', '0');
    expect(screen.queryByRole('button', { name: 'Scroll left' })).not.toBeInTheDocument();
  });

  it('moves focus to the other control when the focused control is hidden', () => {
    const { rerender } = render(<Scroller {...defaultProps} showStartControl showEndControl />);
    const end = screen.getByLabelText('Scroll right');
    act(() => end.focus());

    rerender(<Scroller {...defaultProps} showStartControl />);
    expect(screen.getByLabelText('Scroll left')).toHaveFocus();

    rerender(<Scroller {...defaultProps} />);
    expect(document.body).toHaveFocus();
  });

  it('labels controls by their physical direction in RTL', () => {
    render(
      <Scroller {...defaultProps} style={{ direction: 'rtl' }} showStartControl showEndControl />
    );
    expect(screen.getByLabelText('Scroll right')).toHaveAttribute('data-position', 'start');
    expect(screen.getByLabelText('Scroll left')).toHaveAttribute('data-position', 'end');
  });

  it('keeps RTL labels overridable with control props', () => {
    render(
      <Scroller
        {...defaultProps}
        style={{ direction: 'rtl' }}
        showStartControl
        startControlProps={{ 'aria-label': 'Previous' }}
      />
    );
    expect(screen.getByLabelText('Previous')).toHaveAttribute('data-position', 'start');
  });

  it('scrolls keyboard-focused content out from under the controls', async () => {
    const scrollBy = jest.fn();
    const originalScrollBy = HTMLElement.prototype.scrollBy;
    HTMLElement.prototype.scrollBy = scrollBy;

    try {
      const { container } = render(
        <Scroller showStartControl showEndControl>
          <button type="button">First</button>
          <button type="button">Last</button>
        </Scroller>
      );
      const viewport = container.querySelector<HTMLDivElement>('.mantine-Scroller-container')!;
      const [first, last] = screen.getAllByRole('button', { name: /First|Last/ });
      container
        .querySelectorAll<HTMLButtonElement>('.mantine-Scroller-control')
        .forEach((control) => {
          Object.defineProperty(control, 'offsetWidth', { value: 50, configurable: true });
        });
      viewport.getBoundingClientRect = () => ({ left: 0, right: 500 }) as DOMRect;
      first.getBoundingClientRect = () => ({ left: 20, right: 100 }) as DOMRect;
      last.getBoundingClientRect = () => ({ left: 440, right: 520 }) as DOMRect;

      await userEvent.tab();
      await userEvent.tab();
      expect(first).toHaveFocus();
      expect(scrollBy).toHaveBeenLastCalledWith({ left: -30 });

      await userEvent.tab();
      expect(last).toHaveFocus();
      expect(scrollBy).toHaveBeenLastCalledWith({ left: 70 });
    } finally {
      HTMLElement.prototype.scrollBy = originalScrollBy;
    }
  });

  it('sets data-dragging while the content is dragged', () => {
    const { container } = render(<Scroller {...defaultProps} />);
    const viewport = container.querySelector('.mantine-Scroller-container')!;
    expect(viewport).toHaveAttribute('data-draggable');
    expect(viewport).not.toHaveAttribute('data-dragging');

    fireEvent.mouseDown(viewport);
    expect(viewport).toHaveAttribute('data-dragging');

    fireEvent.mouseUp(viewport);
    expect(viewport).not.toHaveAttribute('data-dragging');
  });

  it('does not set drag attributes when draggable is false', () => {
    const { container } = render(<Scroller {...defaultProps} draggable={false} />);
    const viewport = container.querySelector('.mantine-Scroller-container')!;
    fireEvent.mouseDown(viewport);
    expect(viewport).not.toHaveAttribute('data-draggable');
    expect(viewport).not.toHaveAttribute('data-dragging');
  });
});
