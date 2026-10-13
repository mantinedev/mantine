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

  it('applies open() overrides on top of hook options and clears them on close', () => {
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
});
