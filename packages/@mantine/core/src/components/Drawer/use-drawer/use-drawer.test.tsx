import { useState } from 'react';
import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { render, userEvent } from '@mantine-tests/core';
import { Drawer } from '../Drawer';
import { useDrawer, UseDrawerOptions } from './use-drawer';

function Caller({ options, label = 'open' }: { options?: UseDrawerOptions; label?: string }) {
  const drawer = useDrawer(options);

  return (
    <>
      <button type="button" onClick={() => drawer.open()}>
        {label}
      </button>
      <button type="button" onClick={() => drawer.close()}>
        close {label}
      </button>
      <output data-testid={`state-${label}`}>{String(drawer.opened)}</output>
    </>
  );
}

const getDrawers = () => document.querySelectorAll('.mantine-Drawer-root');

describe('@mantine/core/useDrawer', () => {
  it('renders the drawer through MantineProvider and updates props on caller re-render', () => {
    function Demo() {
      const [count, setCount] = useState(0);
      const drawer = useDrawer({ title: `Count: ${count}`, position: 'top' });
      return (
        <>
          <button type="button" onClick={() => drawer.open()}>
            open
          </button>
          <button type="button" onClick={() => setCount((c) => c + 1)}>
            increment
          </button>
        </>
      );
    }

    render(<Demo />);
    expect(screen.queryByText('Count: 0')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('open'));
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
    expect(document.querySelector('.mantine-Drawer-root')).toHaveStyle({
      '--drawer-align': 'flex-start',
    });
    fireEvent.click(screen.getByText('increment'));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  it('applies open() overrides and closes with the close button', () => {
    const onClose = jest.fn();
    function Demo() {
      const drawer = useDrawer({ title: 'Base', onClose });
      return (
        <button type="button" onClick={() => drawer.open({ title: 'Override' })}>
          open
        </button>
      );
    }

    render(<Demo />);
    fireEvent.click(screen.getByText('open'));
    expect(screen.getByText('Override')).toBeInTheDocument();
    fireEvent.click(document.querySelector('.mantine-Drawer-close')!);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Override')).not.toBeInTheDocument();
  });

  it('keeps every opened drawer mounted', () => {
    render(
      <>
        <Caller
          options={{ title: 'First', children: <input data-testid="first-input" /> }}
          label="first"
        />
        <Caller options={{ title: 'Second' }} label="second" />
      </>
    );

    fireEvent.click(screen.getByText('first'));
    fireEvent.change(screen.getByTestId('first-input'), { target: { value: 'typed' } });
    fireEvent.click(screen.getByText('second'));
    expect(getDrawers()).toHaveLength(2);
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();

    fireEvent.click(screen.getByText('close second'));
    expect(screen.getByTestId('first-input')).toHaveValue('typed');
  });

  it('renders a closed drawer shell from mount and returns focus to the opener', async () => {
    render(<Caller options={{ title: 'Focus' }} />);
    expect(getDrawers()).toHaveLength(1);
    expect(screen.queryByText('Focus')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('open'));
    await waitFor(() => expect(screen.getByText('Focus')).toBeInTheDocument());
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.getByText('open')).toHaveFocus());
  });

  it('renders inside an explicit Drawer.Outlet instead of the automatic one', () => {
    render(
      <div data-testid="explicit">
        <Drawer.Outlet />
        <Caller options={{ title: 'Explicit', defaultOpened: true }} />
      </div>
    );

    expect(getDrawers()).toHaveLength(1);
    expect(screen.getByTestId('explicit').querySelector('.mantine-Drawer-root')).not.toBeNull();
  });

  it('removes the drawer when the caller unmounts', () => {
    function Demo() {
      const [mounted, setMounted] = useState(true);
      return (
        <>
          {mounted && <Caller options={{ title: 'Unmount me', defaultOpened: true }} />}
          <button type="button" onClick={() => setMounted(false)}>
            unmount
          </button>
        </>
      );
    }

    render(<Demo />);
    expect(screen.getByText('Unmount me')).toBeInTheDocument();
    fireEvent.click(screen.getByText('unmount'));
    expect(getDrawers()).toHaveLength(0);
  });

  it('uses separate stores for modals and drawers', () => {
    render(<Caller options={{ title: 'Drawer only', defaultOpened: true }} />);
    expect(getDrawers()).toHaveLength(1);
    expect(document.querySelectorAll('.mantine-Modal-root')).toHaveLength(0);
  });

  it('keeps keepMounted content state and calls theme onExitTransitionEnd once per close', async () => {
    const onExitTransitionEnd = jest.fn();
    render(
      <Caller
        options={{
          title: 'Kept',
          transitionProps: { duration: 10 },
          children: <input data-testid="kept-input" />,
        }}
      />,
      {
        components: {
          Drawer: Drawer.extend({ defaultProps: { keepMounted: true, onExitTransitionEnd } }),
        },
      },
      { env: 'default' }
    );

    fireEvent.click(screen.getByText('open'));
    await waitFor(() => expect(screen.getByTestId('kept-input')).toBeVisible());
    fireEvent.change(screen.getByTestId('kept-input'), { target: { value: 'typed' } });
    const input = screen.getByTestId('kept-input');

    fireEvent.click(screen.getByText('close open'));
    await waitFor(() => expect(screen.getByTestId('kept-input')).not.toBeVisible());
    await act(() => new Promise((resolve) => setTimeout(resolve, 50)));
    expect(onExitTransitionEnd).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('open'));
    await waitFor(() => expect(screen.getByTestId('kept-input')).toBeVisible());
    expect(screen.getByTestId('kept-input')).toBe(input);
    expect(screen.getByTestId('kept-input')).toHaveValue('typed');
  });
});
