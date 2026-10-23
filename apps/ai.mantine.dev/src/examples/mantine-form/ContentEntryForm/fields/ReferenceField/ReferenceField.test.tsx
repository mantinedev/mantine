import { screen, within } from '@test-utils';
import {
  fillKey,
  modelWith,
  referenceField,
  renderForm,
  submit,
  type User,
} from '../../test-helpers';

const singleAuthor = () => modelWith(referenceField());

const relatedEntries = () =>
  modelWith(
    referenceField({ key: 'related', label: 'Related', targetModel: null, multiple: true })
  );

async function openPicker(user: User, label: string) {
  await user.click(screen.getByRole('textbox', { name: label }));
  return screen.getByRole('dialog');
}

async function pick(user: User, label: string, entryKeys: string[]) {
  const dialog = await openPicker(user, label);
  const role = within(dialog).queryAllByRole('checkbox').length > 0 ? 'checkbox' : 'radio';
  for (const key of entryKeys) {
    await user.click(within(dialog).getByRole(role, { name: new RegExp(`^${key} `) }));
  }
  await user.click(within(dialog).getByRole('button', { name: 'Select' }));
}

describe('reference input', () => {
  it('shows a placeholder when no entry is selected', () => {
    renderForm(singleAuthor());
    expect(screen.getByPlaceholderText('Select an entry')).toBeInTheDocument();
  });

  it('opens the picker when clicked', async () => {
    const { user } = renderForm(singleAuthor());
    const dialog = await openPicker(user, 'Author');
    expect(within(dialog).getByRole('heading', { name: 'Select entry' })).toBeInTheDocument();
  });

  it('opens the picker with the Enter key', async () => {
    const { user } = renderForm(singleAuthor());
    screen.getByRole('textbox', { name: 'Author' }).focus();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('shows the picked entry key as a pill', async () => {
    const { user } = renderForm(singleAuthor());
    await pick(user, 'Author', ['grace-hopper']);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByText('grace-hopper')).toBeInTheDocument();
  });

  it('removes an entry with its pill remove button', async () => {
    const { user } = renderForm(relatedEntries());
    await pick(user, 'Related', ['ada-lovelace', 'pricing']);
    await user.click(screen.getByLabelText('Remove ada-lovelace'));
    expect(screen.queryByText('ada-lovelace')).not.toBeInTheDocument();
    expect(screen.getByText('pricing')).toBeInTheDocument();
  });

  it('removes the last entry with Backspace', async () => {
    const { user } = renderForm(relatedEntries());
    await pick(user, 'Related', ['ada-lovelace', 'pricing']);
    screen.getByRole('textbox', { name: 'Related' }).focus();
    await user.keyboard('{Backspace}');
    expect(screen.queryByText('pricing')).not.toBeInTheDocument();
    expect(screen.getByText('ada-lovelace')).toBeInTheDocument();
  });
});

describe('reference picker', () => {
  it('lists only entries of the target model', async () => {
    const { user } = renderForm(singleAuthor());
    const dialog = await openPicker(user, 'Author');
    expect(within(dialog).getAllByRole('radio')).toHaveLength(3);
    expect(within(dialog).queryByRole('radio', { name: /^pricing / })).not.toBeInTheDocument();
  });

  it('shows the key first and the title second for every entry', async () => {
    const { user } = renderForm(singleAuthor());
    const dialog = await openPicker(user, 'Author');
    expect(
      within(dialog).getByRole('radio', { name: 'ada-lovelace (Ada Lovelace)' })
    ).toHaveTextContent(/^ada-lovelaceAda Lovelace/);
  });

  it('hides the model filter when the target model is fixed', async () => {
    const { user } = renderForm(singleAuthor());
    const dialog = await openPicker(user, 'Author');
    expect(within(dialog).queryByRole('combobox', { name: 'Model' })).not.toBeInTheDocument();
  });

  it('filters entries by model when the target model is not fixed', async () => {
    const { user } = renderForm(relatedEntries());
    const dialog = await openPicker(user, 'Related');
    await user.click(within(dialog).getByRole('combobox', { name: 'Model' }));
    await user.click(screen.getByRole('option', { name: 'Page' }));
    expect(
      within(dialog)
        .getAllByRole('checkbox')
        .map((row) => row.getAttribute('aria-label'))
    ).toEqual(['pricing (Pricing)', 'about-us (About us)', 'contact (Contact)']);
  });

  it('filters entries by key or title with the search input', async () => {
    const { user } = renderForm(relatedEntries());
    const dialog = await openPicker(user, 'Related');
    await user.type(within(dialog).getByRole('textbox', { name: 'Search entries' }), 'plan');
    expect(
      within(dialog)
        .getAllByRole('checkbox')
        .map((row) => row.getAttribute('aria-label'))
    ).toEqual(['starter-plan (Starter plan)', 'team-plan (Team plan)']);
  });

  it('says so when no entry matches the search', async () => {
    const { user } = renderForm(relatedEntries());
    const dialog = await openPicker(user, 'Related');
    await user.type(within(dialog).getByRole('textbox', { name: 'Search entries' }), 'zzz');
    expect(within(dialog).getByText('No entries match your search')).toBeInTheDocument();
  });

  it('keeps the previous selection when cancelled', async () => {
    const { user } = renderForm(singleAuthor());
    await pick(user, 'Author', ['grace-hopper']);
    const dialog = await openPicker(user, 'Author');
    await user.click(within(dialog).getByRole('radio', { name: /^alan-turing / }));
    await user.click(within(dialog).getByRole('button', { name: 'Cancel' }));
    expect(screen.getByText('grace-hopper')).toBeInTheDocument();
    expect(screen.queryByText('alan-turing')).not.toBeInTheDocument();
  });

  it('opens with the current selection checked', async () => {
    const { user } = renderForm(relatedEntries());
    await pick(user, 'Related', ['design']);
    const dialog = await openPicker(user, 'Related');
    expect(within(dialog).getByRole('checkbox', { name: /^design / })).toBeChecked();
  });

  it('replaces the entry in single selection mode', async () => {
    const { user } = renderForm(singleAuthor());
    await pick(user, 'Author', ['grace-hopper', 'alan-turing']);
    expect(screen.queryByText('grace-hopper')).not.toBeInTheDocument();
    expect(screen.getByText('alan-turing')).toBeInTheDocument();
  });
});

describe('reference validation and payload', () => {
  it('requires an entry when the field is required', async () => {
    const { user } = renderForm(modelWith(referenceField({ required: true })));
    await fillKey(user);
    await submit(user);
    expect(screen.getByText('Select an entry')).toBeInTheDocument();
  });

  it('requires at least one entry when a required field allows several', async () => {
    const { user } = renderForm(
      modelWith(referenceField({ required: true, multiple: true, targetModel: null }))
    );
    await fillKey(user);
    await submit(user);
    expect(screen.getByText('Select at least one entry')).toBeInTheDocument();
  });

  it('submits the entry key for a single reference', async () => {
    const { user, onSubmit } = renderForm(singleAuthor());
    await fillKey(user);
    await pick(user, 'Author', ['ada-lovelace']);
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ values: { author: 'ada-lovelace' } })
    );
  });

  it('submits the entry keys in picker order for a multiple reference', async () => {
    const { user, onSubmit } = renderForm(relatedEntries());
    await fillKey(user);
    await pick(user, 'Related', ['design', 'pricing']);
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ values: { related: ['design', 'pricing'] } })
    );
  });
});
