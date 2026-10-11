import { createRef, forwardRef } from 'react';
import { render, screen } from '@mantine-tests/core';
import { FocusTrap } from './FocusTrap';

const CustomRefComponent = forwardRef<HTMLDivElement, { rootRef?: React.Ref<HTMLDivElement> }>(
  ({ rootRef }, _ref) => <div ref={rootRef} data-testid="custom" />
);

describe('@mantine/core/FocusTrap', () => {
  it('has correct displayName', () => {
    expect(FocusTrap.displayName).toBe('@mantine/core/FocusTrap');
    expect(FocusTrap.InitialFocus.displayName).toBe('@mantine/core/FocusTrapInitialFocus');
  });

  it('passes ref to the child element with the default ref prop', () => {
    const innerRef = createRef<HTMLDivElement>();
    render(
      <FocusTrap innerRef={innerRef} active={false}>
        <div data-testid="child" />
      </FocusTrap>
    );
    expect(innerRef.current).toBe(screen.getByTestId('child'));
  });

  it('passes ref to the child element with a custom refProp', () => {
    const innerRef = createRef<HTMLDivElement>();
    render(
      <FocusTrap innerRef={innerRef} refProp="rootRef" active={false}>
        <CustomRefComponent />
      </FocusTrap>
    );
    expect(innerRef.current).toBe(screen.getByTestId('custom'));
  });

  it('moves focus inside the child when active', async () => {
    render(
      <FocusTrap>
        <div>
          <button type="button">first</button>
          <button type="button">second</button>
        </div>
      </FocusTrap>
    );
    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(screen.getByRole('button', { name: 'first' })).toHaveFocus();
  });

  it('does not move focus when active is false', async () => {
    render(
      <FocusTrap active={false}>
        <div>
          <button type="button">first</button>
        </div>
      </FocusTrap>
    );
    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(screen.getByRole('button', { name: 'first' })).not.toHaveFocus();
  });

  it('returns non-element children as is', () => {
    const { container } = render(<FocusTrap>text-child</FocusTrap>);
    expect(container).toHaveTextContent('text-child');
  });

  it('renders FocusTrap.InitialFocus with tabIndex -1 and data-autofocus', () => {
    render(<FocusTrap.InitialFocus data-testid="initial-focus" />);
    const node = screen.getByTestId('initial-focus');
    expect(node).toHaveAttribute('tabindex', '-1');
    expect(node).toHaveAttribute('data-autofocus');
  });

  it('focuses FocusTrap.InitialFocus when the trap is activated', async () => {
    render(
      <FocusTrap>
        <div>
          <FocusTrap.InitialFocus data-testid="initial-focus" />
          <button type="button">first</button>
        </div>
      </FocusTrap>
    );
    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(screen.getByTestId('initial-focus')).toHaveFocus();
  });
});
