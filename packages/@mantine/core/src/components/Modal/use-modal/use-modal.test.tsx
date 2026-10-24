import { useState } from 'react';
import {
  act,
  fireEvent,
  render as testingLibraryRender,
  screen,
  waitFor,
} from '@testing-library/react';
import { render, userEvent } from '@mantine-tests/core';
import { MantineProvider } from '../../../core';
import { useDrawer } from '../../Drawer/use-drawer/use-drawer';
import { Modal } from '../Modal';
import { useModal, UseModalOptions } from './use-modal';

function Caller({ options, label = 'open' }: { options?: UseModalOptions; label?: string }) {
  const modal = useModal(options);

  return (
    <>
      <button type="button" onClick={() => modal.open()}>
        {label}
      </button>
      <button type="button" onClick={() => modal.close()}>
        close {label}
      </button>
      <button type="button" onClick={() => modal.toggle()}>
        toggle {label}
      </button>
      <output data-testid={`state-${label}`}>
        {String(modal.opened)}/{String(modal.isOpened())}
      </output>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const modal = useModal({
    title: `Count: ${count}`,
    children: <output data-testid="content">{count}</output>,
  });

  return (
    <>
      <button type="button" onClick={() => modal.open()}>
        open
      </button>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        increment
      </button>
    </>
  );
}

const getModals = () => document.querySelectorAll('.mantine-Modal-root');

describe('@mantine/core/useModal', () => {
  it('renders the modal through MantineProvider without any additional setup', () => {
    render(<Caller options={{ title: 'Managed title' }} />);
    expect(screen.queryByText('Managed title')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('open'));
    expect(screen.getByText('Managed title')).toBeInTheDocument();
    expect(screen.getByTestId('state-open')).toHaveTextContent('true/true');
  });

  it('updates modal props when the caller re-renders', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('open'));
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
    expect(screen.getByTestId('content')).toHaveTextContent('0');

    fireEvent.click(screen.getByText('increment'));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
    expect(screen.getByTestId('content')).toHaveTextContent('1');
  });

  it('applies open() overrides on top of hook options and replaces them on the next open() call', () => {
    function Demo() {
      const modal = useModal({ title: 'Base', children: 'base-content' });
      return (
        <>
          <button type="button" onClick={() => modal.open({ title: 'Override' })}>
            open-override
          </button>
          <button type="button" onClick={() => modal.open()}>
            open
          </button>
          <button type="button" onClick={() => modal.close()}>
            close
          </button>
        </>
      );
    }

    render(<Demo />);
    fireEvent.click(screen.getByText('open-override'));
    expect(screen.getByText('Override')).toBeInTheDocument();
    expect(screen.getByText('base-content')).toBeInTheDocument();

    fireEvent.click(screen.getByText('close'));
    fireEvent.click(screen.getByText('open'));
    expect(screen.getByText('Base')).toBeInTheDocument();
    expect(screen.queryByText('Override')).not.toBeInTheDocument();
  });

  it('closes with the close button and calls onClose/onOpen', () => {
    const onClose = jest.fn();
    const onOpen = jest.fn();
    render(<Caller options={{ title: 'Title', onClose, onOpen }} />);

    fireEvent.click(screen.getByText('open'));
    expect(onOpen).toHaveBeenCalledTimes(1);

    fireEvent.click(document.querySelector('.mantine-Modal-close')!);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('state-open')).toHaveTextContent('false/false');
    expect(screen.queryByText('Title')).not.toBeInTheDocument();
  });

  it('supports toggle and defaultOpened', () => {
    render(<Caller options={{ title: 'Default opened', defaultOpened: true }} />);
    expect(screen.getByText('Default opened')).toBeInTheDocument();

    fireEvent.click(screen.getByText('toggle open'));
    expect(screen.queryByText('Default opened')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('toggle open'));
    expect(screen.getByText('Default opened')).toBeInTheDocument();
  });

  it('removes the modal when the caller unmounts', () => {
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
    expect(screen.queryByText('Unmount me')).not.toBeInTheDocument();
    expect(getModals()).toHaveLength(0);
  });

  it('keeps every opened modal mounted and stacks them', () => {
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

    expect(getModals()).toHaveLength(2);
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();

    fireEvent.click(screen.getByText('close second'));
    expect(screen.getByTestId('first-input')).toHaveValue('typed');
  });

  it('renders inside an explicit Modal.Outlet instead of the automatic one', () => {
    function Demo() {
      return (
        <div data-testid="explicit">
          <Modal.Outlet />
          <Caller options={{ title: 'Explicit', defaultOpened: true }} />
        </div>
      );
    }

    render(<Demo />);
    expect(getModals()).toHaveLength(1);
    expect(screen.getByTestId('explicit').querySelector('.mantine-Modal-root')).not.toBeNull();
  });

  describe('multiple Modal.Outlet components', () => {
    function Outlets({ first, second }: { first: boolean; second: boolean }) {
      return (
        <>
          {first && (
            <div data-testid="first-outlet">
              <Modal.Outlet />
            </div>
          )}
          {second && (
            <div data-testid="second-outlet">
              <Modal.Outlet />
            </div>
          )}
          <Caller options={{ title: 'Auth', defaultOpened: true }} />
        </>
      );
    }

    const getOutletModals = (testId: string) =>
      screen.queryByTestId(testId)?.querySelectorAll('.mantine-Modal-root').length ?? 0;

    const expectRenderedOnce = () => {
      expect(getModals()).toHaveLength(1);
      expect(screen.getAllByText('Auth')).toHaveLength(1);
    };

    const expectRenderedInOneOutlet = () => {
      expectRenderedOnce();
      expect(getOutletModals('first-outlet') + getOutletModals('second-outlet')).toBe(1);
    };

    it('renders every modal once when several outlets are mounted', () => {
      render(<Outlets first second />);
      expectRenderedInOneOutlet();
    });

    it.each([
      ['first', 'second'],
      ['second', 'first'],
    ] as const)(
      'renders every modal once when outlets mount and unmount (%s outlet unmounts)',
      (unmounted, remaining) => {
        const { rerender } = render(<Outlets first={false} second={false} />);
        expectRenderedOnce();

        rerender(<Outlets first={unmounted === 'first'} second={unmounted === 'second'} />);
        expectRenderedOnce();
        expect(getOutletModals(`${unmounted}-outlet`)).toBe(1);

        rerender(<Outlets first second />);
        expectRenderedInOneOutlet();

        rerender(<Outlets first={remaining === 'first'} second={remaining === 'second'} />);
        expectRenderedOnce();
        expect(getOutletModals(`${remaining}-outlet`)).toBe(1);

        rerender(<Outlets first={false} second={false} />);
        expectRenderedOnce();
      }
    );
  });

  it.each([
    [1000, 'calc(1000 + 0 + 2)'],
    ['1000', 'calc(1000 + 0 + 2)'],
    ['var(--custom-z-index)', 'calc(max(200, var(--custom-z-index)) + 0 + 2)'],
  ])('keeps zIndex=%p in the stack z-index', (zIndex, expected) => {
    render(<Caller options={{ title: 'z-index', zIndex, defaultOpened: true }} />);
    expect((getModals()[0] as HTMLElement).style.getPropertyValue('--mb-z-index')).toBe(expected);
  });

  it('keeps content mounted when keepMounted is set', () => {
    render(
      <Caller
        options={{ title: 'Kept', keepMounted: true, children: <div data-testid="kept-content" /> }}
      />
    );

    fireEvent.click(screen.getByText('open'));
    expect(screen.getByTestId('kept-content')).toBeInTheDocument();
    fireEvent.click(screen.getByText('close open'));
    expect(screen.getByTestId('kept-content')).toBeInTheDocument();
  });

  it('uses the id option as modal id', () => {
    render(<Caller options={{ id: 'custom-modal', title: 'Custom id', defaultOpened: true }} />);
    expect(document.getElementById('custom-modal')).not.toBeNull();
  });

  it('does not call onOpen when already opened and onClose when already closed', () => {
    const onClose = jest.fn();
    const onOpen = jest.fn();
    render(<Caller options={{ onClose, onOpen }} />);

    fireEvent.click(screen.getByText('close open'));
    expect(onClose).not.toHaveBeenCalled();

    fireEvent.click(screen.getByText('open'));
    fireEvent.click(screen.getByText('open'));
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it('renders a closed modal shell for every hook so enter transition and focus return work', async () => {
    render(<Caller options={{ title: 'Focus' }} />);
    expect(getModals()).toHaveLength(1);
    expect(screen.queryByText('Focus')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('open'));
    await waitFor(() => expect(screen.getByText('Focus')).toBeInTheDocument());
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.getByText('open')).toHaveFocus());
  });

  it('keeps open() overrides after close until the next open call', () => {
    function Demo() {
      const modal = useModal({ title: 'Base', keepMounted: true });
      return (
        <>
          <button type="button" onClick={() => modal.open({ title: 'Override' })}>
            open-override
          </button>
          <button type="button" onClick={() => modal.close()}>
            close
          </button>
        </>
      );
    }

    render(<Demo />);
    fireEvent.click(screen.getByText('open-override'));
    fireEvent.click(screen.getByText('close'));
    expect(screen.getByText('Override')).toBeInTheDocument();
    expect(screen.queryByText('Base')).not.toBeInTheDocument();
  });

  it('scopes managed modals to the root MantineProvider', () => {
    testingLibraryRender(
      <>
        <MantineProvider env="test">
          <Modal.Outlet />
          <Caller options={{ title: 'Root A', defaultOpened: true }} label="a" />
        </MantineProvider>
        <MantineProvider env="test">
          <Caller options={{ title: 'Root B', defaultOpened: true }} label="b" />
        </MantineProvider>
      </>
    );

    expect(getModals()).toHaveLength(2);
    expect(screen.getAllByText('Root A')).toHaveLength(1);
    expect(screen.getAllByText('Root B')).toHaveLength(1);
  });

  it('applies options changed while the modal was closed on the next open', () => {
    function Demo() {
      const [count, setCount] = useState(0);
      const modal = useModal({ title: `Title ${count}` });
      return (
        <>
          <button type="button" onClick={() => setCount((c) => c + 1)}>
            increment
          </button>
          <button type="button" onClick={() => modal.open()}>
            open
          </button>
          <button type="button" onClick={() => modal.close()}>
            close
          </button>
        </>
      );
    }

    render(<Demo />);
    fireEvent.click(screen.getByText('increment'));
    fireEvent.click(screen.getByText('increment'));
    fireEvent.click(screen.getByText('open'));
    expect(screen.getByText('Title 2')).toBeInTheDocument();

    fireEvent.click(screen.getByText('close'));
    fireEvent.click(screen.getByText('increment'));
    fireEvent.click(screen.getByText('open'));
    expect(screen.getByText('Title 3')).toBeInTheDocument();
  });

  it('exposes stable actions', () => {
    const actions: any[] = [];
    function Demo() {
      const modal = useModal();
      actions.push([modal.open, modal.close, modal.toggle, modal.isOpened]);
      return (
        <button type="button" onClick={() => modal.toggle()}>
          toggle
        </button>
      );
    }

    render(<Demo />);
    act(() => {
      fireEvent.click(screen.getByText('toggle'));
    });
    expect(actions.length).toBeGreaterThan(1);
    expect(actions[0]).toEqual(actions[actions.length - 1]);
  });

  describe('closed modals performance', () => {
    function Row({ index }: { index: number }) {
      const modal = useModal({ id: `row-${index}`, title: `Row ${index}` });
      return (
        <>
          <button type="button" onClick={() => modal.open()}>
            open-{index}
          </button>
          <button type="button" onClick={() => modal.close()}>
            close-{index}
          </button>
        </>
      );
    }

    function Rows() {
      return Array.from({ length: 20 }, (_, index) => <Row key={index} index={index} />);
    }

    function renderRows(env: 'test' | 'default' = 'test') {
      const renders = { count: 0, ids: [] as string[] };
      const result = render(
        <Rows />,
        {
          components: {
            Modal: {
              vars: (_theme: unknown, props: { id?: string }) => {
                renders.count += 1;
                renders.ids.push(props.id!);
                return {};
              },
            },
          },
        },
        { env }
      );
      return { ...result, renders };
    }

    it('does not re-render closed modals when another modal opens', () => {
      const { renders } = renderRows();
      renders.count = 0;

      fireEvent.click(screen.getByText('open-5'));
      expect(screen.getByText('Row 5')).toBeInTheDocument();
      expect(renders.count).toBeLessThan(10);
    });

    it('removes a closed modal from the stack after the exit transition', async () => {
      const { renders } = renderRows('default');

      fireEvent.click(screen.getByText('open-5'));
      await waitFor(() => expect(screen.getByText('Row 5')).toBeInTheDocument());
      fireEvent.click(screen.getByText('close-5'));
      await waitFor(() => expect(screen.queryByText('Row 5')).not.toBeInTheDocument());

      renders.ids = [];
      fireEvent.click(screen.getByText('open-6'));
      await waitFor(() => expect(screen.getByText('Row 6')).toBeInTheDocument());
      expect(renders.ids).toContain('row-6');
      expect(renders.ids).not.toContain('row-5');
      expect((getModals()[6] as HTMLElement).style.getPropertyValue('--mb-z-index')).toBe(
        'calc(200 + 0 + 2)'
      );
    });
  });

  describe('exit transition', () => {
    it('remounts content when reopened during the exit transition', async () => {
      function Content() {
        const [count, setCount] = useState(0);
        return (
          <button type="button" onClick={() => setCount((c) => c + 1)}>
            count {count}
          </button>
        );
      }

      render(
        <Caller
          options={{ title: 'Remount', transitionProps: { duration: 30 }, children: <Content /> }}
        />,
        undefined,
        { env: 'default' }
      );

      fireEvent.click(screen.getByText('open'));
      await waitFor(() => expect(screen.getByText('count 0')).toBeInTheDocument());
      fireEvent.click(screen.getByText('count 0'));
      expect(screen.getByText('count 1')).toBeInTheDocument();

      fireEvent.click(screen.getByText('close open'));
      fireEvent.click(screen.getByText('open'));
      await act(() => new Promise((resolve) => setTimeout(resolve, 100)));

      expect(screen.getByText('count 0')).toBeVisible();
    });

    it.each(['props', 'overrides', 'theme'] as const)(
      'keeps content state after close and reopen with keepMounted from %s',
      async (source) => {
        function Demo() {
          const modal = useModal({
            title: 'Kept',
            transitionProps: { duration: 10 },
            children: <input data-testid="kept-input" />,
            ...(source === 'props' && { keepMounted: true }),
          });
          return (
            <>
              <button
                type="button"
                onClick={() =>
                  modal.open(source === 'overrides' ? { keepMounted: true } : undefined)
                }
              >
                open
              </button>
              <button type="button" onClick={() => modal.close()}>
                close
              </button>
            </>
          );
        }

        render(
          <Demo />,
          source === 'theme'
            ? { components: { Modal: Modal.extend({ defaultProps: { keepMounted: true } }) } }
            : undefined,
          { env: 'default' }
        );

        fireEvent.click(screen.getByText('open'));
        await waitFor(() => expect(screen.getByTestId('kept-input')).toBeVisible());
        fireEvent.change(screen.getByTestId('kept-input'), { target: { value: 'typed' } });
        const input = screen.getByTestId('kept-input');

        fireEvent.click(screen.getByText('close'));
        await waitFor(() => expect(screen.getByTestId('kept-input')).not.toBeVisible());
        await act(() => new Promise((resolve) => setTimeout(resolve, 50)));

        fireEvent.click(screen.getByText('open'));
        await waitFor(() => expect(screen.getByTestId('kept-input')).toBeVisible());
        expect(screen.getByTestId('kept-input')).toBe(input);
        expect(screen.getByTestId('kept-input')).toHaveValue('typed');
      }
    );

    it('stays in the stack when reopened during the exit transition', async () => {
      const onExitTransitionEnd = jest.fn();
      render(
        <Caller
          options={{ title: 'Reopened', transitionProps: { duration: 30 }, onExitTransitionEnd }}
        />,
        undefined,
        { env: 'default' }
      );

      fireEvent.click(screen.getByText('open'));
      await waitFor(() => expect(screen.getByText('Reopened')).toBeInTheDocument());
      fireEvent.click(screen.getByText('close open'));
      fireEvent.click(screen.getByText('open'));
      await act(() => new Promise((resolve) => setTimeout(resolve, 100)));

      expect(screen.getByText('Reopened')).toBeVisible();
      expect(onExitTransitionEnd).not.toHaveBeenCalled();
      expect((getModals()[0] as HTMLElement).style.getPropertyValue('--mb-z-index')).toBe(
        'calc(200 + 0 + 2)'
      );

      fireEvent.click(screen.getByText('close open'));
      await waitFor(() => expect(screen.queryByText('Reopened')).not.toBeInTheDocument());
      await act(() => new Promise((resolve) => setTimeout(resolve, 50)));
      expect(onExitTransitionEnd).toHaveBeenCalledTimes(1);
    });

    it.each(['props', 'overrides', 'theme'] as const)(
      'calls onExitTransitionEnd from %s once per close',
      async (source) => {
        const onExitTransitionEnd = jest.fn();

        function Demo() {
          const modal = useModal({
            title: 'Exit',
            transitionProps: { duration: 10 },
            ...(source === 'props' && { onExitTransitionEnd }),
          });
          return (
            <>
              <button
                type="button"
                onClick={() =>
                  modal.open(source === 'overrides' ? { onExitTransitionEnd } : undefined)
                }
              >
                open
              </button>
              <button type="button" onClick={() => modal.close()}>
                close
              </button>
            </>
          );
        }

        render(
          <Demo />,
          source === 'theme'
            ? { components: { Modal: Modal.extend({ defaultProps: { onExitTransitionEnd } }) } }
            : undefined,
          { env: 'default' }
        );

        for (let round = 1; round <= 2; round += 1) {
          fireEvent.click(screen.getByText('open'));
          await waitFor(() => expect(screen.getByText('Exit')).toBeInTheDocument());
          fireEvent.click(screen.getByText('close'));
          await waitFor(() => expect(screen.queryByText('Exit')).not.toBeInTheDocument());
          await act(() => new Promise((resolve) => setTimeout(resolve, 50)));
          expect(onExitTransitionEnd).toHaveBeenCalledTimes(round);
        }
      }
    );
  });

  describe('stacking with useDrawer', () => {
    const getZIndex = (selector: string) =>
      Array.from(document.querySelectorAll<HTMLElement>(selector)).map((root) =>
        root.style.getPropertyValue('--mb-z-index')
      );

    function InlineModal() {
      const [opened, setOpened] = useState(false);
      return (
        <>
          <button type="button" onClick={() => setOpened(true)}>
            open-inline
          </button>
          <Modal opened={opened} onClose={() => setOpened(false)} title="Inline title" />
        </>
      );
    }

    function ModalFromDrawer() {
      const confirm = useModal({ title: 'Confirm title' });
      const drawer = useDrawer({
        title: 'Drawer title',
        children: (
          <button type="button" onClick={() => confirm.open()}>
            open-confirm
          </button>
        ),
      });

      return (
        <button type="button" onClick={() => drawer.open()}>
          open-drawer
        </button>
      );
    }

    it('displays a managed modal opened from a managed drawer above the drawer', async () => {
      render(<ModalFromDrawer />);
      fireEvent.click(screen.getByText('open-drawer'));
      fireEvent.click(screen.getByText('open-confirm'));

      expect(getZIndex('.mantine-Drawer-root')).toStrictEqual(['calc(200 + 0 + 2)']);
      expect(getZIndex('.mantine-Modal-root')).toStrictEqual(['calc(200 + 2 + 2)']);

      await userEvent.keyboard('{Escape}');
      expect(screen.queryByText('Confirm title')).not.toBeInTheDocument();
      expect(screen.getByText('Drawer title')).toBeInTheDocument();
    });

    it('displays an inline Modal rendered in managed drawer content above the drawer', () => {
      function Demo() {
        const drawer = useDrawer({ title: 'Drawer title', children: <InlineModal /> });
        return (
          <button type="button" onClick={() => drawer.open()}>
            open-drawer
          </button>
        );
      }

      render(<Demo />);
      fireEvent.click(screen.getByText('open-drawer'));
      fireEvent.click(screen.getByText('open-inline'));

      expect(getZIndex('.mantine-Drawer-root')).toStrictEqual(['calc(200 + 0 + 2)']);
      expect(getZIndex('.mantine-Modal-root')).toStrictEqual(['calc(200 + 2 + 2)']);
    });
  });
});
