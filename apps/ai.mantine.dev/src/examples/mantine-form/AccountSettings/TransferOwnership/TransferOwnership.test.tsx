import { render, screen, userEvent, waitFor, within } from '@test-utils';
import { afterEach, describe, expect, it, vi } from 'vite-plus/test';
import { Notifications, notifications } from '@mantine/notifications';
import { MEMBERS } from '../data';
import { TransferOwnership } from './TransferOwnership';

vi.mock('../delay', () => ({ delay: () => Promise.resolve() }));

function renderTransfer() {
  const user = userEvent.setup();
  const onTransferred = vi.fn();
  render(
    <>
      <Notifications />
      <TransferOwnership organizationName="Acme" members={MEMBERS} onTransferred={onTransferred} />
    </>
  );
  return { user, onTransferred };
}

async function openConfirmation(user: ReturnType<typeof userEvent.setup>, member: string) {
  await user.click(screen.getByRole('combobox', { name: 'New owner' }));
  await user.click(screen.getByRole('option', { name: member }));
  await user.click(screen.getByRole('button', { name: 'Transfer ownership' }));
  return screen.getByRole('dialog');
}

afterEach(() => {
  notifications.clean();
});

describe('transfer ownership', () => {
  it('lists the members to pick from', async () => {
    const { user } = renderTransfer();
    await user.click(screen.getByRole('combobox', { name: 'New owner' }));
    expect(screen.getAllByRole('option')).toHaveLength(5);
  });

  it('asks to pick a member before confirming', async () => {
    const { user } = renderTransfer();
    await user.click(screen.getByRole('button', { name: 'Transfer ownership' }));
    expect(screen.getByText('Pick a member to transfer ownership to')).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('names the member and the organization in the confirmation', async () => {
    const { user } = renderTransfer();
    const dialog = await openConfirmation(user, 'Grace Hopper');
    expect(
      within(dialog).getByText(/Grace Hopper will become the owner of Acme/)
    ).toBeInTheDocument();
  });

  it('does not transfer when the confirmation is cancelled', async () => {
    const { user, onTransferred } = renderTransfer();
    const dialog = await openConfirmation(user, 'Grace Hopper');
    await user.click(within(dialog).getByRole('button', { name: 'Cancel' }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(onTransferred).not.toHaveBeenCalled();
  });

  it('transfers ownership to the picked member after confirmation', async () => {
    const { user, onTransferred } = renderTransfer();
    const dialog = await openConfirmation(user, 'Alan Turing');
    await user.click(within(dialog).getByRole('button', { name: 'Transfer ownership' }));

    await waitFor(() => expect(onTransferred).toHaveBeenCalledWith('alan'));
  });

  it('shows a notification and closes the confirmation after the transfer', async () => {
    const { user } = renderTransfer();
    const dialog = await openConfirmation(user, 'Alan Turing');
    await user.click(within(dialog).getByRole('button', { name: 'Transfer ownership' }));

    expect(await screen.findByText('Ownership transferred')).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
