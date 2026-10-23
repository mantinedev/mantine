import { render, screen, userEvent, waitFor, within } from '@test-utils';
import { afterEach, describe, expect, it, vi } from 'vite-plus/test';
import { Notifications, notifications } from '@mantine/notifications';
import { DeleteOrganization } from './DeleteOrganization';

vi.mock('../delay', () => ({ delay: () => Promise.resolve() }));

function renderDelete() {
  const user = userEvent.setup();
  render(
    <>
      <Notifications />
      <DeleteOrganization organizationName="Acme" />
    </>
  );
  return { user };
}

async function openConfirmation(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole('button', { name: 'Delete organization' }));
  return screen.getByRole('dialog');
}

const confirmationField = (dialog: HTMLElement) =>
  within(dialog).getByRole('textbox', { name: 'Type Acme to confirm' });

afterEach(() => {
  notifications.clean();
});

describe('delete organization', () => {
  it('opens a confirmation that asks to type the organization name', async () => {
    const { user } = renderDelete();
    const dialog = await openConfirmation(user);
    expect(confirmationField(dialog)).toHaveFocus();
  });

  it('refuses to delete when the typed name does not match', async () => {
    const { user } = renderDelete();
    const dialog = await openConfirmation(user);
    await user.type(confirmationField(dialog), 'acme');
    await user.click(within(dialog).getByRole('button', { name: 'Delete organization' }));

    expect(within(dialog).getByText('Type Acme to confirm', { selector: 'p' })).toBeInTheDocument();
    expect(screen.queryByText('Organization deleted')).not.toBeInTheDocument();
  });

  it('deletes the organization when the typed name matches', async () => {
    const { user } = renderDelete();
    const dialog = await openConfirmation(user);
    await user.type(confirmationField(dialog), 'Acme');
    await user.click(within(dialog).getByRole('button', { name: 'Delete organization' }));

    expect(await screen.findByText('Organization deleted')).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });

  it('starts with an empty confirmation when opened again', async () => {
    const { user } = renderDelete();
    const dialog = await openConfirmation(user);
    await user.type(confirmationField(dialog), 'Ac');
    await user.click(within(dialog).getByRole('button', { name: 'Cancel' }));

    expect(confirmationField(await openConfirmation(user))).toHaveValue('');
  });
});
