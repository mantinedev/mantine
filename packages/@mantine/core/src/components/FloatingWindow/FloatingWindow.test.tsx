import { fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { FloatingWindow, FloatingWindowProps, FloatingWindowStylesNames } from './FloatingWindow';

const defaultProps: FloatingWindowProps = {};

describe('@mantine/core/FloatingWindow', () => {
  tests.itSupportsSystemProps<FloatingWindowProps, FloatingWindowStylesNames>({
    component: FloatingWindow,
    props: defaultProps,
    polymorphic: true,
    children: true,
    styleProps: false, // some style props are overridden internally
    displayName: '@mantine/core/FloatingWindow',
    stylesApiSelectors: ['root'],
  });

  it('renders ResizeHandle with correct ARIA attributes', () => {
    render(
      <FloatingWindow dimensions={{ initialWidth: 200, minWidth: 100, maxWidth: 400 }}>
        <FloatingWindow.ResizeHandle>
          <div>handle</div>
        </FloatingWindow.ResizeHandle>
      </FloatingWindow>
    );

    const handle = screen.getByRole('separator');
    expect(handle).toHaveAttribute('aria-valuenow', '200');
    expect(handle).toHaveAttribute('aria-valuemin', '100');
    expect(handle).toHaveAttribute('aria-valuemax', '400');
    expect(handle).toHaveAttribute('tabindex', '0');
  });

  it('renders ResizeHandle children', () => {
    render(
      <FloatingWindow dimensions={{ initialWidth: 200 }}>
        <FloatingWindow.ResizeHandle>
          <div data-testid="handle-content">grip</div>
        </FloatingWindow.ResizeHandle>
      </FloatingWindow>
    );

    expect(screen.getByTestId('handle-content')).toBeInTheDocument();
  });

  it('updates aria-valuenow on Home/End keyboard events', () => {
    render(
      <FloatingWindow
        dimensions={{ initialWidth: 200, minWidth: 100, maxWidth: 400 }}
        withinPortal={false}
      >
        <FloatingWindow.ResizeHandle>
          <div>handle</div>
        </FloatingWindow.ResizeHandle>
      </FloatingWindow>
    );

    const handle = screen.getByRole('separator');

    fireEvent.keyDown(handle, { key: 'End' });
    expect(handle).toHaveAttribute('aria-valuenow', '400');

    fireEvent.keyDown(handle, { key: 'Home' });
    expect(handle).toHaveAttribute('aria-valuenow', '100');
  });

  it('supports height dimensions', () => {
    render(
      <FloatingWindow
        dimensions={{
          initialWidth: 200,
          initialHeight: 150,
          minHeight: 80,
          maxHeight: 300,
        }}
      >
        <FloatingWindow.ResizeHandle>
          <div>handle</div>
        </FloatingWindow.ResizeHandle>
      </FloatingWindow>
    );

    const handle = screen.getByRole('separator');
    expect(handle).toBeInTheDocument();
  });

  it('throws error when ResizeHandle is used outside FloatingWindow', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() =>
      render(
        <FloatingWindow.ResizeHandle>
          <div>handle</div>
        </FloatingWindow.ResizeHandle>
      )
    ).toThrow('FloatingWindow.ResizeHandle must be used within FloatingWindow');

    spy.mockRestore();
  });
});
