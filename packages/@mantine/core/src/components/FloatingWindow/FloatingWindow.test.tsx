import { fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { Select } from '../Select';
import { Tooltip } from '../Tooltip';
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

  it('renders portalled overlays above FloatingWindow by default', () => {
    render(
      <FloatingWindow data-testid="floating-window">
        <Select
          aria-label="Library"
          data={['React', 'Angular']}
          dropdownOpened
          comboboxProps={{ transitionProps: { duration: 0 } }}
        />

        <Tooltip
          opened
          label="Tooltip content"
          data-testid="tooltip"
          transitionProps={{ duration: 0 }}
        >
          <button type="button">Tooltip target</button>
        </Tooltip>

        <Tooltip.Floating
          defaultOpened
          label="Floating tooltip content"
          data-testid="floating-tooltip"
        >
          <button type="button">Floating tooltip target</button>
        </Tooltip.Floating>
      </FloatingWindow>,
      undefined,
      { env: 'default' }
    );

    const floatingWindow = screen.getByTestId('floating-window');
    const floatingWindowZIndex = Number(
      floatingWindow.style.getPropertyValue('--floating-window-z-index')
    );
    const selectDropdown = screen.getByRole('listbox').closest<HTMLElement>('[data-composed]')!;
    const overlays = [
      selectDropdown,
      screen.getByTestId('tooltip'),
      screen.getByTestId('floating-tooltip'),
    ];

    overlays.forEach((overlay) => {
      expect(floatingWindow).not.toContainElement(overlay);
      expect(overlay.parentElement).toBe(floatingWindow.parentElement);
      expect(Number(overlay.style.zIndex)).toBeGreaterThan(floatingWindowZIndex);
    });
  });

  it('supports custom z-index', () => {
    render(<FloatingWindow data-testid="floating-window" zIndex={450} />);
    expect(screen.getByTestId('floating-window')).toHaveStyle({
      '--floating-window-z-index': '450',
    });
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
