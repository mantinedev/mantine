import { act, fireEvent, render, screen, userEvent, waitFor, within } from '@test-utils';
import { notifications, Notifications } from '@mantine/notifications';
import { AccountSettings } from './AccountSettings';

type User = ReturnType<typeof userEvent.setup>;

async function renderSettings() {
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
  render(
    <>
      <Notifications />
      <AccountSettings />
    </>
  );
  await screen.findByRole('textbox', { name: 'Full name' });
  return { user };
}

const section = (name: string) => within(screen.getByRole('region', { name }));
const bar = () => within(screen.getByRole('group', { name: 'Unsaved changes actions' }));
const queryBar = () => screen.queryByRole('group', { name: 'Unsaved changes actions' });

async function replaceText(user: User, field: HTMLElement, text: string) {
  await user.clear(field);
  text && (await user.type(field, text));
}

async function pickOption(user: User, field: HTMLElement, option: string) {
  await user.click(field);
  await user.click(screen.getByRole('option', { name: option }));
}

async function saveChanges(user: User) {
  await user.click(bar().getByRole('button', { name: 'Save' }));
}

function dispatchBeforeUnload() {
  const event = new Event('beforeunload', { cancelable: true });
  fireEvent(window, event);
  return event;
}

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  notifications.clean();
  jest.useRealTimers();
});

describe('loading', () => {
  it('shows a loading state in every section until the settings load', async () => {
    render(<AccountSettings />);

    for (const name of ['Profile', 'Organization', 'Billing', 'Notifications', 'Danger zone']) {
      expect(screen.getByRole('status', { name: `Loading ${name}` })).toBeInTheDocument();
    }
    expect(screen.queryByRole('textbox', { name: 'Full name' })).not.toBeInTheDocument();

    await screen.findByRole('textbox', { name: 'Full name' });
    expect(screen.queryByRole('status', { name: /^Loading/ })).not.toBeInTheDocument();
  });

  it('fills the sections with the loaded settings', async () => {
    await renderSettings();

    expect(section('Profile').getByRole('textbox', { name: 'Full name' })).toHaveValue(
      'Ada Lovelace'
    );
    expect(section('Profile').getByRole('combobox', { name: 'Timezone' })).toHaveValue('London');
    expect(section('Organization').getByRole('combobox', { name: 'Country' })).toHaveValue(
      'United Kingdom'
    );
  });

  it('does not show the unsaved changes bar after loading', async () => {
    await renderSettings();

    expect(queryBar()).not.toBeInTheDocument();
  });
});

describe('unsaved changes bar', () => {
  it('names the sections that have changes', async () => {
    const { user } = await renderSettings();

    await user.type(section('Profile').getByRole('textbox', { name: 'Job title' }), ' & CTO');
    await user.type(section('Billing').getByRole('textbox', { name: 'Invoice notes' }), 'PO 42');

    expect(bar().getByText('Unsaved changes in Profile, Billing')).toBeInTheDocument();
  });

  it('hides the bar when a change is undone by hand', async () => {
    const { user } = await renderSettings();
    const jobTitle = section('Profile').getByRole('textbox', { name: 'Job title' });

    await user.type(jobTitle, 'x');
    await user.type(jobTitle, '{Backspace}');

    expect(queryBar()).not.toBeInTheDocument();
  });

  it('reverts every changed section on Cancel', async () => {
    const { user } = await renderSettings();
    await replaceText(user, section('Profile').getByRole('textbox', { name: 'Full name' }), 'Ada');
    await replaceText(
      user,
      section('Organization').getByRole('textbox', { name: 'City' }),
      'Cambridge'
    );
    await user.click(section('Notifications').getByRole('checkbox', { name: 'Comments: SMS' }));

    await user.click(bar().getByRole('button', { name: 'Cancel' }));

    expect(section('Profile').getByRole('textbox', { name: 'Full name' })).toHaveValue(
      'Ada Lovelace'
    );
    expect(section('Organization').getByRole('textbox', { name: 'City' })).toHaveValue('London');
    expect(
      section('Notifications').getByRole('checkbox', { name: 'Comments: SMS' })
    ).not.toBeChecked();
    expect(queryBar()).not.toBeInTheDocument();
  });

  it('shows a notification naming the saved sections', async () => {
    const { user } = await renderSettings();
    await user.type(section('Profile').getByRole('textbox', { name: 'Display name' }), 'a');
    await user.type(section('Organization').getByRole('textbox', { name: 'Tax ID' }), '0');

    await saveChanges(user);

    expect(await screen.findByText('Changes saved')).toBeInTheDocument();
    expect(screen.getByText('Profile, Organization')).toBeInTheDocument();
  });

  it('shows Save as loading while the requests run', async () => {
    const { user } = await renderSettings();
    await user.type(section('Profile').getByRole('textbox', { name: 'Display name' }), 'a');

    await saveChanges(user);

    expect(bar().getByRole('button', { name: 'Save' })).toHaveAttribute('data-loading');
    await screen.findByText('Changes saved');
  });

  it('hides the bar after saving', async () => {
    const { user } = await renderSettings();
    await user.type(section('Profile').getByRole('textbox', { name: 'Display name' }), 'a');

    await saveChanges(user);

    await waitFor(() => expect(queryBar()).not.toBeInTheDocument());
  });

  it('makes the saved values the baseline that Cancel returns to', async () => {
    const { user } = await renderSettings();
    const displayName = section('Profile').getByRole('textbox', { name: 'Display name' });
    await replaceText(user, displayName, 'Countess');
    await saveChanges(user);
    await screen.findByText('Changes saved');

    await replaceText(user, displayName, 'Lady Ada');
    await user.click(bar().getByRole('button', { name: 'Cancel' }));

    expect(displayName).toHaveValue('Countess');
  });

  it('does not save any section while one of them is invalid', async () => {
    const { user } = await renderSettings();
    await replaceText(user, section('Profile').getByRole('textbox', { name: 'Full name' }), '');
    await user.type(section('Organization').getByRole('textbox', { name: 'Tax ID' }), '0');

    await saveChanges(user);

    expect(await screen.findByText('Changes not saved')).toBeInTheDocument();
    expect(bar().getByText('Unsaved changes in Profile, Organization')).toBeInTheDocument();
  });

  it('focuses the first invalid field when saving fails validation', async () => {
    const { user } = await renderSettings();
    await replaceText(
      user,
      section('Organization').getByRole('textbox', { name: 'Organization name' }),
      ''
    );

    await saveChanges(user);

    expect(
      section('Organization').getByRole('textbox', { name: 'Organization name' })
    ).toHaveFocus();
  });
});

describe('profile', () => {
  it('requires a full name', async () => {
    const { user } = await renderSettings();
    await replaceText(user, section('Profile').getByRole('textbox', { name: 'Full name' }), '');

    await saveChanges(user);

    expect(section('Profile').getByText('Enter your full name')).toBeInTheDocument();
  });

  it('requires an email', async () => {
    const { user } = await renderSettings();
    await replaceText(user, section('Profile').getByRole('textbox', { name: 'Email' }), '');

    await saveChanges(user);

    expect(section('Profile').getByText('Enter your email')).toBeInTheDocument();
  });

  it('rejects an invalid email when the field loses focus', async () => {
    const { user } = await renderSettings();
    await replaceText(user, section('Profile').getByRole('textbox', { name: 'Email' }), 'ada@');

    await user.tab();

    expect(section('Profile').getByText('Enter a valid email address')).toBeInTheDocument();
  });

  it('clears the email error when the email is fixed', async () => {
    const { user } = await renderSettings();
    const email = section('Profile').getByRole('textbox', { name: 'Email' });
    await replaceText(user, email, 'ada@');
    await user.tab();

    await user.type(email, 'example.com');

    expect(section('Profile').queryByText('Enter a valid email address')).not.toBeInTheDocument();
  });

  it('counts the bio characters against the limit', async () => {
    const { user } = await renderSettings();

    await replaceText(user, section('Profile').getByRole('textbox', { name: 'Bio' }), 'Poet');

    expect(section('Profile').getByText('4/200')).toBeInTheDocument();
  });

  it('does not accept a bio longer than 200 characters', async () => {
    const { user } = await renderSettings();
    const bio = section('Profile').getByRole('textbox', { name: 'Bio' });

    await user.clear(bio);
    await user.type(bio, 'a'.repeat(205));

    expect(bio).toHaveValue('a'.repeat(200));
    expect(section('Profile').getByText('200/200')).toBeInTheDocument();
  });

  it('shows the server error on the email field when the email is taken', async () => {
    const { user } = await renderSettings();
    await replaceText(
      user,
      section('Profile').getByRole('textbox', { name: 'Email' }),
      'taken@example.com'
    );

    await saveChanges(user);

    expect(
      await section('Profile').findByText('This email is already used by another account')
    ).toBeInTheDocument();
    expect(section('Profile').getByRole('textbox', { name: 'Email' })).toHaveAttribute(
      'aria-invalid',
      'true'
    );
  });

  it('keeps the profile unsaved when the server rejects the email', async () => {
    const { user } = await renderSettings();
    await replaceText(
      user,
      section('Profile').getByRole('textbox', { name: 'Email' }),
      'taken@example.com'
    );

    await saveChanges(user);

    expect(await screen.findByText('Some changes were not saved')).toBeInTheDocument();
    expect(bar().getByText('Unsaved changes in Profile')).toBeInTheDocument();
  });

  it('saves the other sections when the server rejects the profile email', async () => {
    const { user } = await renderSettings();
    await replaceText(
      user,
      section('Profile').getByRole('textbox', { name: 'Email' }),
      'taken@example.com'
    );
    await user.type(section('Organization').getByRole('textbox', { name: 'Tax ID' }), '0');

    await saveChanges(user);

    await screen.findByText('Some changes were not saved');
    expect(bar().getByText('Unsaved changes in Profile')).toBeInTheDocument();
  });
});

describe('organization', () => {
  it('requires an organization name', async () => {
    const { user } = await renderSettings();
    await replaceText(
      user,
      section('Organization').getByRole('textbox', { name: 'Organization name' }),
      ''
    );

    await saveChanges(user);

    expect(section('Organization').getByText('Enter the organization name')).toBeInTheDocument();
  });

  it('rejects an invalid website when the field loses focus', async () => {
    const { user } = await renderSettings();
    await replaceText(
      user,
      section('Organization').getByRole('textbox', { name: 'Website' }),
      'not a url'
    );

    await user.tab();

    expect(
      section('Organization').getByText('Enter a valid URL, for example https://example.com')
    ).toBeInTheDocument();
  });

  it('saves without a website', async () => {
    const { user } = await renderSettings();
    await replaceText(user, section('Organization').getByRole('textbox', { name: 'Website' }), '');

    await saveChanges(user);

    expect(await screen.findByText('Changes saved')).toBeInTheDocument();
  });

  it('requires the address city', async () => {
    const { user } = await renderSettings();
    await replaceText(user, section('Organization').getByRole('textbox', { name: 'City' }), '');

    await saveChanges(user);

    expect(section('Organization').getByText('Enter a city')).toBeInTheDocument();
  });

  it('saves without a state or region', async () => {
    const { user } = await renderSettings();
    await user.type(
      section('Organization').getByRole('textbox', { name: 'State or region' }),
      'Greater London'
    );
    await saveChanges(user);
    await screen.findByText('Changes saved');
    act(() => notifications.clean());

    await replaceText(
      user,
      section('Organization').getByRole('textbox', { name: 'State or region' }),
      ''
    );
    await saveChanges(user);

    expect(await screen.findByText('Changes saved')).toBeInTheDocument();
  });
});

describe('billing', () => {
  const billingAddress = () =>
    within(section('Billing').getByRole('group', { name: 'Billing address' }));
  const sameAsOrganization = () =>
    section('Billing').getByRole('checkbox', { name: 'Same as organization address' });

  it('requires a billing email', async () => {
    const { user } = await renderSettings();
    await replaceText(user, section('Billing').getByRole('textbox', { name: 'Billing email' }), '');

    await saveChanges(user);

    expect(section('Billing').getByText('Enter a billing email')).toBeInTheDocument();
  });

  it('copies the organization address into the billing address', async () => {
    const { user } = await renderSettings();

    await user.click(sameAsOrganization());

    expect(billingAddress().getByRole('textbox', { name: 'Street' })).toHaveValue(
      '12 Marylebone Road'
    );
    expect(billingAddress().getByRole('textbox', { name: 'City' })).toHaveValue('London');
    expect(billingAddress().getByRole('textbox', { name: 'Postal code' })).toHaveValue('NW1 5LR');
    expect(billingAddress().getByRole('textbox', { name: 'State or region' })).toHaveValue('');
  });

  it('copies organization address edits that are not saved yet', async () => {
    const { user } = await renderSettings();
    await replaceText(
      user,
      section('Organization').getByRole('textbox', { name: 'Street' }),
      '221B Baker Street'
    );

    await user.click(sameAsOrganization());

    expect(billingAddress().getByRole('textbox', { name: 'Street' })).toHaveValue(
      '221B Baker Street'
    );
  });

  it('disables the billing address fields while the address is copied', async () => {
    const { user } = await renderSettings();

    await user.click(sameAsOrganization());

    expect(billingAddress().getByRole('textbox', { name: 'Street' })).toBeDisabled();
    expect(billingAddress().getByRole('combobox', { name: 'Country' })).toBeDisabled();
  });

  it('keeps the billing address in sync with organization address edits while copied', async () => {
    const { user } = await renderSettings();
    await user.click(sameAsOrganization());

    await replaceText(
      user,
      section('Organization').getByRole('textbox', { name: 'City' }),
      'Leeds'
    );

    expect(billingAddress().getByRole('textbox', { name: 'City' })).toHaveValue('Leeds');
  });

  it('restores the previous billing address when the copy is turned off', async () => {
    const { user } = await renderSettings();
    await user.click(sameAsOrganization());

    await user.click(sameAsOrganization());

    expect(billingAddress().getByRole('textbox', { name: 'Street' })).toHaveValue(
      '1 Finance Street'
    );
    expect(billingAddress().getByRole('textbox', { name: 'Street' })).toBeEnabled();
  });

  it('leaves no unsaved changes after checking and unchecking the copy', async () => {
    const { user } = await renderSettings();
    await user.click(sameAsOrganization());

    await user.click(sameAsOrganization());

    expect(queryBar()).not.toBeInTheDocument();
  });

  it('restores a billing address the user typed before the copy', async () => {
    const { user } = await renderSettings();
    await replaceText(user, billingAddress().getByRole('textbox', { name: 'City' }), 'Bristol');
    await user.click(sameAsOrganization());

    await user.click(sameAsOrganization());

    expect(billingAddress().getByRole('textbox', { name: 'City' })).toHaveValue('Bristol');
  });
});

describe('notifications', () => {
  it('keeps security alerts on for email', async () => {
    await renderSettings();

    const checkbox = section('Notifications').getByRole('checkbox', {
      name: 'Security alerts: Email',
    });

    expect(checkbox).toBeChecked();
    expect(checkbox).toBeDisabled();
  });

  it('lets security alerts be turned off for other channels', async () => {
    const { user } = await renderSettings();
    const sms = section('Notifications').getByRole('checkbox', { name: 'Security alerts: SMS' });

    await user.click(sms);

    expect(sms).not.toBeChecked();
  });

  it('shows the digest day while the weekly digest has a channel on', async () => {
    await renderSettings();

    expect(section('Notifications').getByRole('combobox', { name: 'Digest day' })).toHaveValue(
      'Monday'
    );
  });

  it('hides the digest day when every weekly digest channel is off', async () => {
    const { user } = await renderSettings();

    await user.click(
      section('Notifications').getByRole('checkbox', { name: 'Weekly digest: Email' })
    );

    expect(
      section('Notifications').queryByRole('combobox', { name: 'Digest day' })
    ).not.toBeInTheDocument();
  });

  it('shows the digest day again when a weekly digest channel is turned on', async () => {
    const { user } = await renderSettings();
    await user.click(
      section('Notifications').getByRole('checkbox', { name: 'Weekly digest: Email' })
    );

    await user.click(
      section('Notifications').getByRole('checkbox', { name: 'Weekly digest: Push' })
    );

    expect(section('Notifications').getByRole('combobox', { name: 'Digest day' })).toHaveValue(
      'Monday'
    );
  });

  it('saves a new digest day', async () => {
    const { user } = await renderSettings();
    await pickOption(
      user,
      section('Notifications').getByRole('combobox', { name: 'Digest day' }),
      'Friday'
    );

    await saveChanges(user);

    const notification = await screen.findByRole('alert');
    expect(within(notification).getByText('Changes saved')).toBeInTheDocument();
    expect(within(notification).getByText('Notifications')).toBeInTheDocument();
  });
});

describe('danger zone', () => {
  async function openModal(user: User, button: string) {
    await user.click(section('Danger zone').getByRole('button', { name: button }));
    return within(screen.getByRole('dialog'));
  }

  it('asks for the new owner before transferring ownership', async () => {
    const { user } = await renderSettings();
    const dialog = await openModal(user, 'Transfer ownership');

    await user.click(dialog.getByRole('button', { name: 'Transfer ownership' }));

    expect(dialog.getByText('Select the new owner')).toBeInTheDocument();
  });

  it('transfers ownership to the selected member after confirmation', async () => {
    const { user } = await renderSettings();
    const dialog = await openModal(user, 'Transfer ownership');
    await pickOption(user, dialog.getByRole('combobox', { name: 'New owner' }), 'Alan Turing');

    await user.click(dialog.getByRole('button', { name: 'Transfer ownership' }));

    const notification = await screen.findByRole('alert');
    expect(within(notification).getByText('Ownership transferred')).toBeInTheDocument();
    expect(within(notification).getByText('Alan Turing')).toBeInTheDocument();
  });

  it('closes the transfer modal on Cancel without transferring', async () => {
    const { user } = await renderSettings();
    const dialog = await openModal(user, 'Transfer ownership');

    await user.click(dialog.getByRole('button', { name: 'Cancel' }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByText('Ownership transferred')).not.toBeInTheDocument();
  });

  it('does not delete the organization until its name is typed', async () => {
    const { user } = await renderSettings();
    const dialog = await openModal(user, 'Delete organization');
    await user.type(dialog.getByRole('textbox', { name: 'Organization name' }), 'Analytical');

    await user.click(dialog.getByRole('button', { name: 'Delete organization' }));

    expect(dialog.getByText('Type the organization name to confirm')).toBeInTheDocument();
  });

  it('deletes the organization when its name is typed', async () => {
    const { user } = await renderSettings();
    const dialog = await openModal(user, 'Delete organization');
    await user.type(
      dialog.getByRole('textbox', { name: 'Organization name' }),
      'Analytical Engines'
    );

    await user.click(dialog.getByRole('button', { name: 'Delete organization' }));

    expect(await screen.findByText('Organization deleted')).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });

  it('asks for the saved organization name, not an unsaved edit', async () => {
    const { user } = await renderSettings();
    await replaceText(
      user,
      section('Organization').getByRole('textbox', { name: 'Organization name' }),
      'Difference Engines'
    );
    const dialog = await openModal(user, 'Delete organization');
    await user.type(
      dialog.getByRole('textbox', { name: 'Organization name' }),
      'Difference Engines'
    );

    await user.click(dialog.getByRole('button', { name: 'Delete organization' }));

    expect(dialog.getByText('Type the organization name to confirm')).toBeInTheDocument();
  });
});

describe('leaving the page', () => {
  it('asks for confirmation when a section has unsaved changes', async () => {
    const { user } = await renderSettings();
    await user.type(section('Billing').getByRole('textbox', { name: 'Invoice notes' }), 'PO 42');

    expect(dispatchBeforeUnload().defaultPrevented).toBe(true);
  });

  it('lets the page close without unsaved changes', async () => {
    await renderSettings();

    expect(dispatchBeforeUnload().defaultPrevented).toBe(false);
  });

  it('lets the page close after the changes are saved', async () => {
    const { user } = await renderSettings();
    await user.type(section('Billing').getByRole('textbox', { name: 'Invoice notes' }), 'PO 42');
    await saveChanges(user);
    await screen.findByText('Changes saved');

    expect(dispatchBeforeUnload().defaultPrevented).toBe(false);
  });
});
