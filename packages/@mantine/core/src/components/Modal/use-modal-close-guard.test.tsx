import { useState } from 'react';
import { waitFor } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { Drawer } from '../Drawer';
import { useDrawerCloseGuard } from '../Drawer/use-drawer-close-guard';
import { Modal } from './Modal';
import { useModal } from './use-modal';
import { ModalCloseGuard, useModalCloseGuard } from './use-modal-close-guard';

function Guarded({ guard, label = 'guarded-close' }: { guard?: ModalCloseGuard; label?: string }) {
  const closeModal = useModalCloseGuard(guard);
  return (
    <button type="button" onClick={closeModal}>
      {label}
    </button>
  );
}

function renderModal(guard: ModalCloseGuard | undefined, onClose = jest.fn()) {
  const result = render(
    <Modal opened onClose={onClose} title="test-title" withinPortal={false}>
      <Guarded guard={guard} />
    </Modal>
  );

  return { ...result, onClose };
}

const overlay = (container: HTMLElement) => container.querySelector('.mantine-Modal-overlay')!;
const closeButton = () =>
  document.querySelector<HTMLButtonElement>('.mantine-Modal-close, .mantine-Drawer-close')!;

describe('@mantine/core/useModalCloseGuard', () => {
  it('blocks close button, Escape and overlay click when the guard returns false', async () => {
    const guard = jest.fn(() => false);
    const { container, onClose } = renderModal(guard);

    await userEvent.click(closeButton());
    await userEvent.keyboard('{Escape}');
    await userEvent.click(overlay(container));

    expect(guard).toHaveBeenCalledTimes(3);
    expect(onClose).not.toHaveBeenCalled();
  });

  it('closes when the guard returns true', async () => {
    const { onClose } = renderModal(() => true);
    await userEvent.click(closeButton());
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('waits for an async guard and closes only when it resolves to true', async () => {
    const { onClose, rerender } = renderModal(() => Promise.resolve(false));
    await userEvent.click(closeButton());
    await waitFor(() => expect(onClose).not.toHaveBeenCalled());

    rerender(
      <Modal opened onClose={onClose} title="test-title" withinPortal={false}>
        <Guarded guard={() => Promise.resolve(true)} />
      </Modal>
    );
    await userEvent.click(closeButton());
    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1));
  });

  it('ignores close requests while an async guard is pending', async () => {
    let resolve: (value: boolean) => void = () => {};
    const guard = jest.fn(() => new Promise<boolean>((res) => (resolve = res)));
    const { onClose } = renderModal(guard);

    await userEvent.click(closeButton());
    await userEvent.keyboard('{Escape}');
    expect(guard).toHaveBeenCalledTimes(1);

    resolve(true);
    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1));
  });

  it('drops a pending async guard when the modal is closed programmatically', async () => {
    let resolve: (value: boolean) => void = () => {};
    const guard = jest.fn(() => new Promise<boolean>((res) => (resolve = res)));
    const onClose = jest.fn();
    const { rerender } = render(
      <Modal opened onClose={onClose} title="test-title" withinPortal={false}>
        <Guarded guard={guard} />
      </Modal>
    );

    await userEvent.click(closeButton());
    rerender(
      <Modal opened={false} onClose={onClose} title="test-title" withinPortal={false}>
        <Guarded guard={guard} />
      </Modal>
    );
    rerender(
      <Modal opened onClose={onClose} title="test-title" withinPortal={false}>
        <Guarded guard={guard} />
      </Modal>
    );

    resolve(true);
    await waitFor(() => expect(guard).toHaveBeenCalledTimes(1));
    expect(onClose).not.toHaveBeenCalled();

    await userEvent.click(closeButton());
    expect(guard).toHaveBeenCalledTimes(2);
  });

  it('runs guards in order and stops at the first one that returns false', async () => {
    const first = jest.fn(() => false);
    const second = jest.fn(() => true);
    const onClose = jest.fn();
    render(
      <Modal opened onClose={onClose} title="test-title" withinPortal={false}>
        <Guarded guard={first} label="first" />
        <Guarded guard={second} label="second" />
      </Modal>
    );

    await userEvent.click(closeButton());

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
    expect(onClose).not.toHaveBeenCalled();
  });

  it('closes through the guards with the returned function', async () => {
    const guard = jest.fn(() => false);
    const { onClose, rerender } = renderModal(guard);

    await userEvent.click(screen.getByRole('button', { name: 'guarded-close' }));
    expect(guard).toHaveBeenCalledTimes(1);
    expect(onClose).not.toHaveBeenCalled();

    rerender(
      <Modal opened onClose={onClose} title="test-title" withinPortal={false}>
        <Guarded guard={() => true} />
      </Modal>
    );
    await userEvent.click(screen.getByRole('button', { name: 'guarded-close' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('reads the latest guard without re-registering', async () => {
    function Content() {
      const [locked, setLocked] = useState(true);
      useModalCloseGuard(() => !locked);
      return (
        <button type="button" onClick={() => setLocked(false)}>
          unlock
        </button>
      );
    }

    const onClose = jest.fn();
    render(
      <Modal opened onClose={onClose} title="test-title" withinPortal={false}>
        <Content />
      </Modal>
    );

    await userEvent.click(closeButton());
    expect(onClose).not.toHaveBeenCalled();

    await userEvent.click(screen.getByRole('button', { name: 'unlock' }));
    await userEvent.click(closeButton());
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('removes the guard when the component that registered it unmounts', async () => {
    function Content() {
      const [mounted, setMounted] = useState(true);
      return (
        <>
          {mounted && <Guarded guard={() => false} />}
          <button type="button" onClick={() => setMounted(false)}>
            unmount
          </button>
        </>
      );
    }

    const onClose = jest.fn();
    render(
      <Modal opened onClose={onClose} title="test-title" withinPortal={false}>
        <Content />
      </Modal>
    );

    await userEvent.click(closeButton());
    expect(onClose).not.toHaveBeenCalled();

    await userEvent.click(screen.getByRole('button', { name: 'unmount' }));
    await userEvent.click(closeButton());
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does nothing outside of a modal', async () => {
    render(<Guarded guard={() => false} />);
    await userEvent.click(screen.getByRole('button', { name: 'guarded-close' }));
    expect(screen.getByRole('button', { name: 'guarded-close' })).toBeInTheDocument();
  });

  it('does not block modal.close() of useModal', async () => {
    function Content({ onDone }: { onDone: () => void }) {
      useModalCloseGuard(() => false);
      return (
        <button type="button" onClick={onDone}>
          save
        </button>
      );
    }

    function Demo() {
      const modal = useModal({
        title: 'Managed',
        children: <Content onDone={() => modal.close()} />,
      });
      return (
        <button type="button" onClick={() => modal.open()}>
          open
        </button>
      );
    }

    render(<Demo />);
    await userEvent.click(screen.getByRole('button', { name: 'open' }));
    expect(screen.getByText('Managed')).toBeInTheDocument();

    await userEvent.click(closeButton());
    expect(screen.getByText('Managed')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'save' }));
    await waitFor(() => expect(screen.queryByText('Managed')).not.toBeInTheDocument());
  });
});

describe('@mantine/core/useDrawerCloseGuard', () => {
  it('blocks close button and Escape when the guard returns false', async () => {
    function Content() {
      useDrawerCloseGuard(() => false);
      return null;
    }

    const onClose = jest.fn();
    render(
      <Drawer opened onClose={onClose} title="test-title" withinPortal={false}>
        <Content />
      </Drawer>
    );

    await userEvent.click(closeButton());
    await userEvent.keyboard('{Escape}');
    expect(onClose).not.toHaveBeenCalled();
  });
});
