/* eslint-disable no-console */
import React, { ReactElement, useState } from 'react';
import { fireEvent, render, RenderOptions, RenderResult, screen } from '@testing-library/react';
import { useFocusTrap } from './use-focus-trap';

function InnerComponent({ testId }: { testId: string }) {
  const ref = useFocusTrap();
  return (
    <div data-testid={testId}>
      <div ref={ref} />
    </div>
  );
}

function WrapperComponent({ shouldMount = true }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <button type="button" onClick={handleToggle}>
        Toggle
      </button>
      <div data-testid="root-1" />
      <div data-testid="root-2" />
      <script data-testid="root-script" />
      {!toggle && shouldMount && <InnerComponent testId="container-1" />}
      {toggle && shouldMount && <InnerComponent testId="container-2" />}
    </>
  );
}

function quietRender(ui: ReactElement, options: RenderOptions): RenderResult {
  const originalConsoleError = console.error;
  console.error = jest.fn();
  const rendered = render(ui, options);
  console.error = originalConsoleError;
  return rendered;
}

describe('@mantine/hooks/use-focus-trap', () => {
  it('correctly assigns aria-hidden to non-encompassing root nodes', () => {
    quietRender(<WrapperComponent />, { container: document.body });

    expect(screen.getByTestId('root-1')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByTestId('root-2')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByTestId('root-script')).not.toHaveAttribute('aria-hidden');
    expect(screen.getByTestId('container-1')).not.toHaveAttribute('aria-hidden');
  });
  it('correctly restores aria attributes on unmount', () => {
    const { rerender } = quietRender(<WrapperComponent />, { container: document.body });
    rerender(<WrapperComponent shouldMount={false} />);

    expect(screen.getByTestId('root-1')).not.toHaveAttribute('aria-hidden');
    expect(screen.getByTestId('root-2')).not.toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByTestId('root-script')).not.toHaveAttribute('aria-hidden');
    expect(screen.queryByTestId('container-1')).toBeFalsy();
  });
  it('correctly abandons restoration of aria-hidden if another handler has instantiated before cleanup', () => {
    const { rerender } = quietRender(<WrapperComponent />, { container: document.body });
    expect(screen.getByTestId('root-1')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByTestId('root-2')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByTestId('container-1')).not.toHaveAttribute('aria-hidden');

    fireEvent.click(screen.getByText('Toggle'));
    expect(screen.queryByTestId('container-1')).toBeFalsy();
    expect(screen.getByTestId('container-2')).not.toHaveAttribute('aria-hidden');

    expect(screen.getByTestId('root-1')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByTestId('root-2')).toHaveAttribute('aria-hidden', 'true');

    rerender(<WrapperComponent shouldMount={false} />);
    expect(screen.getByTestId('root-1')).not.toHaveAttribute('aria-hidden');
    expect(screen.getByTestId('root-2')).not.toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByTestId('root-script')).not.toHaveAttribute('aria-hidden');
    expect(screen.queryByTestId('container-1')).toBeFalsy();
    expect(screen.queryByTestId('container-2')).toBeFalsy();
  });
});
