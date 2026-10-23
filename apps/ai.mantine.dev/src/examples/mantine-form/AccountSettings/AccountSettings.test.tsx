import { render, screen, userEvent, waitFor, within } from '@test-utils';
import { afterEach, describe, expect, it, vi } from 'vite-plus/test';
import { Notifications, notifications } from '@mantine/notifications';
import { AccountSettings } from './AccountSettings';

const { delay } = vi.hoisted(() => ({
  delay: vi.fn<(ms: number) => Promise<void>>(() => Promise.resolve()),
}));
vi.mock('./delay', () => ({ delay }));

type User = ReturnType<typeof userEvent.setup>;

async function renderSettings() {
  const user = userEvent.setup();
  render(
    <>
      <Notifications />
      <AccountSettings />
    </>
  );
  await screen.findByRole('textbox', { name: 'Full name' });
  return { user };
}

const section = (name: string) => screen.getByRole('region', { name });
const saveButton = () => screen.queryByRole('button', { name: 'Save' });
const cancelButton = () => screen.getByRole('button', { name: 'Cancel' });

async function replaceText(user: User, field: HTMLElement, text: string) {
  await user.clear(field);
  if (text) {
    await user.type(field, text);
  }
}

async function pickOption(user: User, field: HTMLElement, option: string) {
  await user.click(field);
  await user.click(screen.getByRole('option', { name: option }));
}

afterEach(() => {
  notifications.clean();
  delay.mockClear();
});

describe('loading', () => {
  it('shows a loading state in every section until the settings arrive', async () => {
    render(<AccountSettings />);
    expect(screen.getAllByRole('status', { name: /^Loading .* settings$/ })).toHaveLength(5);
    expect(await screen.findByRole('textbox', { name: 'Full name' })).toBeInTheDocument();
    expect(screen.queryByRole('status', { name: /^Loading/ })).not.toBeInTheDocument();
  });

  it('fills the sections with the saved settings', async () => {
    await renderSettings();
    expect(screen.getByRole('textbox', { name: 'Full name' })).toHaveValue('Jane Cooper');
    expect(screen.getByRole('textbox', { name: 'Organization name' })).toHaveValue('Acme');
    expect(screen.getByRole('textbox', { name: 'Billing email' })).toHaveValue('billing@acme.com');
    expect(screen.getByRole('combobox', { name: 'Timezone' })).toHaveValue('Berlin');
  });
});

describe('unsaved changes bar', () => {
  it('is hidden while nothing has changed', async () => {
    await renderSettings();
    expect(saveButton()).not.toBeInTheDocument();
  });

  it('names the section that has changes', async () => {
    const { user } = await renderSettings();
    await user.type(screen.getByRole('textbox', { name: 'Job title' }), ' and Finance');
    expect(screen.getAllByText('Unsaved changes in Profile')[0]).toBeVisible();
  });

  it('names every section that has changes', async () => {
    const { user } = await renderSettings();
    await user.type(screen.getByRole('textbox', { name: 'Job title' }), ' and Finance');
    await user.click(screen.getByRole('checkbox', { name: 'Product updates by Email' }));
    expect(screen.getAllByText('Unsaved changes in Profile and Notifications')[0]).toBeVisible();
  });

  it('hides when a change is undone by hand', async () => {
    const { user } = await renderSettings();
    const legalName = screen.getByRole('textbox', { name: 'Legal name' });
    await user.type(legalName, 'X');
    expect(saveButton()).toBeInTheDocument();
    await user.type(legalName, '{Backspace}');
    expect(saveButton()).not.toBeInTheDocument();
  });

  it('reverts every changed section to its saved values on Cancel', async () => {
    const { user } = await renderSettings();
    await replaceText(user, screen.getByRole('textbox', { name: 'Full name' }), 'Ada Lovelace');
    await replaceText(user, screen.getByRole('textbox', { name: 'Tax ID' }), 'DE000');
    await user.click(cancelButton());

    expect(screen.getByRole('textbox', { name: 'Full name' })).toHaveValue('Jane Cooper');
    expect(screen.getByRole('textbox', { name: 'Tax ID' })).toHaveValue('DE123456789');
    expect(saveButton()).not.toBeInTheDocument();
  });

  it('shows a notification naming the saved sections', async () => {
    const { user } = await renderSettings();
    await replaceText(user, screen.getByRole('textbox', { name: 'Display name' }), 'JC');
    await replaceText(user, screen.getByRole('textbox', { name: 'Legal name' }), 'Acme AG');
    await user.click(saveButton()!);

    expect(await screen.findByText('Changes saved')).toBeInTheDocument();
    expect(screen.getByText('Profile and Organization updated')).toBeInTheDocument();
  });

  it('hides after saving', async () => {
    const { user } = await renderSettings();
    await replaceText(user, screen.getByRole('textbox', { name: 'Display name' }), 'JC');
    await user.click(saveButton()!);
    await waitFor(() => expect(saveButton()).not.toBeInTheDocument());
  });

  it('makes the saved values the baseline for Cancel', async () => {
    const { user } = await renderSettings();
    const displayName = screen.getByRole('textbox', { name: 'Display name' });
    await replaceText(user, displayName, 'JC');
    await user.click(saveButton()!);
    await screen.findByText('Changes saved');

    await user.type(displayName, '!');
    await user.click(cancelButton());
    expect(displayName).toHaveValue('JC');
  });

  it('shows Save as loading while the sections are being saved', async () => {
    const { user } = await renderSettings();
    let finishSave = () => {};
    delay.mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          finishSave = resolve;
        })
    );
    await replaceText(user, screen.getByRole('textbox', { name: 'Display name' }), 'JC');
    await user.click(saveButton()!);

    expect(saveButton()).toHaveAttribute('data-loading');
    finishSave();
    expect(await screen.findByText('Changes saved')).toBeInTheDocument();
  });

  it('keeps a section with validation errors unsaved and focuses its first invalid field', async () => {
    const { user } = await renderSettings();
    await user.clear(screen.getByRole('textbox', { name: 'Full name' }));
    await user.click(saveButton()!);

    expect(screen.getByText('Enter your full name')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Full name' })).toHaveFocus();
    expect(screen.getAllByText('Unsaved changes in Profile')[0]).toBeVisible();
  });

  it('saves the valid sections when another section has errors', async () => {
    const { user } = await renderSettings();
    await user.clear(screen.getByRole('textbox', { name: 'Full name' }));
    await replaceText(user, screen.getByRole('textbox', { name: 'Legal name' }), 'Acme AG');
    await user.click(saveButton()!);

    await waitFor(() => expect(screen.getAllByText('Unsaved changes in Profile')[0]).toBeVisible());
    expect(await screen.findByText('Could not save Profile')).toBeInTheDocument();
  });
});

describe('profile', () => {
  it('rejects an invalid email', async () => {
    const { user } = await renderSettings();
    await replaceText(user, screen.getByRole('textbox', { name: 'Email' }), 'jane@');
    await user.click(saveButton()!);
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument();
  });

  it('shows the server error on the email field when the email is taken', async () => {
    const { user } = await renderSettings();
    const email = screen.getByRole('textbox', { name: 'Email' });
    await replaceText(user, email, 'taken@example.com');
    await user.click(saveButton()!);

    expect(
      await screen.findByText('This email is already used by another account')
    ).toBeInTheDocument();
    expect(email).toHaveAttribute('aria-invalid', 'true');
  });

  it('keeps the changes unsaved when the server rejects the email', async () => {
    const { user } = await renderSettings();
    await replaceText(user, screen.getByRole('textbox', { name: 'Email' }), 'taken@example.com');
    await user.click(saveButton()!);

    expect(await screen.findByText('Could not save Profile')).toBeInTheDocument();
    expect(screen.getAllByText('Unsaved changes in Profile')[0]).toBeVisible();
  });

  it('counts the bio characters', async () => {
    const { user } = await renderSettings();
    const bio = screen.getByRole('textbox', { name: 'Bio' });
    await replaceText(user, bio, 'Hello');
    expect(screen.getByText('5/200')).toBeInTheDocument();
  });

  it('stops the bio at 200 characters', async () => {
    const { user } = await renderSettings();
    const bio = screen.getByRole('textbox', { name: 'Bio' });
    await user.clear(bio);
    await user.click(bio);
    await user.paste('a'.repeat(210));
    expect(screen.getByText('200/200')).toBeInTheDocument();
  });
});

describe('organization', () => {
  it('rejects an invalid website', async () => {
    const { user } = await renderSettings();
    await replaceText(user, screen.getByRole('textbox', { name: 'Website' }), 'acme');
    await user.click(saveButton()!);
    expect(screen.getByText('Enter a valid URL, like https://acme.com')).toBeInTheDocument();
  });

  it('saves without a website', async () => {
    const { user } = await renderSettings();
    await user.clear(screen.getByRole('textbox', { name: 'Website' }));
    await user.click(saveButton()!);
    expect(await screen.findByText('Changes saved')).toBeInTheDocument();
  });

  it('requires the city of the address', async () => {
    const { user } = await renderSettings();
    const address = screen.getByRole('group', { name: 'Address' });
    await user.clear(within(address).getByRole('textbox', { name: 'City' }));
    await user.click(saveButton()!);
    expect(within(address).getByText('Enter a city')).toBeInTheDocument();
  });

  it('saves without a state or region', async () => {
    const { user } = await renderSettings();
    const address = screen.getByRole('group', { name: 'Address' });
    await replaceText(
      user,
      within(address).getByRole('textbox', { name: 'Street' }),
      'Unter den Linden 5'
    );
    await user.click(saveButton()!);
    expect(await screen.findByText('Changes saved')).toBeInTheDocument();
  });
});

describe('billing', () => {
  const sameAsCheckbox = () =>
    screen.getByRole('checkbox', { name: 'Same as organization address' });
  const billingAddress = () => screen.getByRole('group', { name: 'Billing address' });
  const billingCity = () => within(billingAddress()).getByRole('textbox', { name: 'City' });

  it('copies the organization address into the billing address', async () => {
    const { user } = await renderSettings();
    await user.click(sameAsCheckbox());
    expect(billingCity()).toHaveValue('Berlin');
    expect(within(billingAddress()).getByRole('textbox', { name: 'Street' })).toHaveValue(
      'Torstraße 1'
    );
  });

  it('copies the unsaved organization address', async () => {
    const { user } = await renderSettings();
    const organizationAddress = screen.getByRole('group', { name: 'Address' });
    await replaceText(
      user,
      within(organizationAddress).getByRole('textbox', { name: 'City' }),
      'Potsdam'
    );
    await user.click(sameAsCheckbox());
    expect(billingCity()).toHaveValue('Potsdam');
  });

  it('disables the billing address while it is the same as the organization address', async () => {
    const { user } = await renderSettings();
    await user.click(sameAsCheckbox());
    expect(billingCity()).toBeDisabled();
  });

  it('follows changes of the organization address while the checkbox is on', async () => {
    const { user } = await renderSettings();
    await user.click(sameAsCheckbox());
    const organizationAddress = screen.getByRole('group', { name: 'Address' });
    await replaceText(
      user,
      within(organizationAddress).getByRole('textbox', { name: 'City' }),
      'Hamburg'
    );
    expect(billingCity()).toHaveValue('Hamburg');
  });

  it('restores the previous billing address when the checkbox is turned off', async () => {
    const { user } = await renderSettings();
    await user.click(sameAsCheckbox());
    await user.click(sameAsCheckbox());
    expect(billingCity()).toHaveValue('Frankfurt');
    expect(billingCity()).toBeEnabled();
  });

  it('leaves no unsaved changes after checking and unchecking', async () => {
    const { user } = await renderSettings();
    await user.click(sameAsCheckbox());
    await user.click(sameAsCheckbox());
    expect(saveButton()).not.toBeInTheDocument();
  });

  it('rejects an invalid billing email', async () => {
    const { user } = await renderSettings();
    await replaceText(user, screen.getByRole('textbox', { name: 'Billing email' }), 'billing');
    await user.click(saveButton()!);
    expect(screen.getByText('Enter a valid billing email')).toBeInTheDocument();
  });
});

describe('notifications', () => {
  it('keeps security alerts by email on', async () => {
    await renderSettings();
    const checkbox = screen.getByRole('checkbox', { name: 'Security alerts by Email' });
    expect(checkbox).toBeChecked();
    expect(checkbox).toBeDisabled();
  });

  it('hides the digest day when the weekly digest has no channel on', async () => {
    const { user } = await renderSettings();
    await user.click(screen.getByRole('checkbox', { name: 'Weekly digest by Email' }));
    expect(screen.queryByRole('combobox', { name: 'Digest day' })).not.toBeInTheDocument();
  });

  it('shows the digest day while the weekly digest has a channel on', async () => {
    const { user } = await renderSettings();
    await user.click(screen.getByRole('checkbox', { name: 'Weekly digest by Email' }));
    await user.click(screen.getByRole('checkbox', { name: 'Weekly digest by SMS' }));
    expect(screen.getByRole('combobox', { name: 'Digest day' })).toHaveValue('Monday');
  });

  it('saves a new digest day', async () => {
    const { user } = await renderSettings();
    await pickOption(user, screen.getByRole('combobox', { name: 'Digest day' }), 'Friday');
    expect(screen.getAllByText('Unsaved changes in Notifications')[0]).toBeVisible();
    await user.click(saveButton()!);
    expect(await screen.findByText('Notifications updated')).toBeInTheDocument();
  });
});

describe('leaving the page', () => {
  const dispatchBeforeUnload = () => {
    const event = new Event('beforeunload', { cancelable: true });
    window.dispatchEvent(event);
    return event;
  };

  it('asks for confirmation while a section has unsaved changes', async () => {
    const { user } = await renderSettings();
    await user.click(screen.getByRole('checkbox', { name: 'Mentions by SMS' }));
    expect(dispatchBeforeUnload().defaultPrevented).toBe(true);
  });

  it('does not ask for confirmation without unsaved changes', async () => {
    await renderSettings();
    expect(dispatchBeforeUnload().defaultPrevented).toBe(false);
  });
});

describe('danger zone', () => {
  it('asks to type the saved organization name', async () => {
    const { user } = await renderSettings();
    await replaceText(
      user,
      screen.getByRole('textbox', { name: 'Organization name' }),
      'Acme Labs'
    );
    await user.click(
      within(section('Danger zone')).getByRole('button', { name: 'Delete organization' })
    );
    expect(
      within(screen.getByRole('dialog')).getByRole('textbox', { name: 'Type Acme to confirm' })
    ).toBeInTheDocument();
  });
});
