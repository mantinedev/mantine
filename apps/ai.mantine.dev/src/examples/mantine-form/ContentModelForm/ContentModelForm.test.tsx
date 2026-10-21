import { render, screen, userEvent, waitFor, within } from '@test-utils';
import { notifications, Notifications } from '@mantine/notifications';
import { ContentModelForm } from './ContentModelForm';

type User = ReturnType<typeof userEvent.setup>;

// Autosize Textarea listens to font loading, jsdom has no FontFaceSet
Object.defineProperty(document, 'fonts', {
  configurable: true,
  value: { addEventListener: () => {}, removeEventListener: () => {} },
});

function setup() {
  const user = userEvent.setup();
  render(
    <>
      <Notifications />
      <ContentModelForm />
    </>
  );
  return user;
}

function getDialog() {
  return screen.getByRole('dialog');
}

async function waitForDialogToClose() {
  await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
}

function getFieldRows() {
  return within(screen.getByRole('list', { name: 'Fields' })).getAllByRole('listitem');
}

async function pickType(user: User, type: string) {
  await user.click(screen.getByRole('button', { name: 'Add field' }));
  await user.click(within(getDialog()).getByRole('button', { name: new RegExp(`^${type} `) }));
}

async function addField(
  user: User,
  type: string,
  label: string,
  configure?: (dialog: HTMLElement) => Promise<void>
) {
  await pickType(user, type);
  const dialog = getDialog();
  await user.type(within(dialog).getByRole('textbox', { name: 'Label' }), label);
  await configure?.(dialog);
  await user.click(within(dialog).getByRole('button', { name: 'Save' }));
  await waitForDialogToClose();
}

async function fillModel(user: User) {
  await user.type(screen.getByRole('textbox', { name: 'Model name' }), 'Blog post');
}

async function submitAndReadJson(user: User) {
  await user.click(screen.getByRole('button', { name: 'Create model' }));
  const title = await screen.findByText('Content model created');
  const notification = title.closest<HTMLElement>('[role="alert"]')!;
  return JSON.parse(within(notification).getByText(/"name"/).textContent!);
}

// jsdom has no layout: give every sortable row a position by its index so that
// dnd-kit keyboard sensor can find the row below
function mockRowRects() {
  const spy = vi
    .spyOn(Element.prototype, 'getBoundingClientRect')
    .mockImplementation(function getBoundingClientRect(this: Element) {
      const item = this.closest('[role="listitem"]');
      const index = item ? Array.from(item.parentElement!.children).indexOf(item) : 0;
      const top = index * 60;
      return {
        x: 0,
        y: top,
        top,
        left: 0,
        width: 400,
        height: 50,
        right: 400,
        bottom: top + 50,
        toJSON: () => ({}),
      };
    });
  return () => {
    spy.mockRestore();
  };
}

describe('ContentModelForm', () => {
  // The notifications store outlives the rendered tree
  afterEach(() => {
    notifications.clean();
  });

  it('fills the model key from the name until the key is edited by hand', async () => {
    const user = setup();
    const name = screen.getByRole('textbox', { name: 'Model name' });
    const key = screen.getByRole('textbox', { name: 'Model key' });

    await user.type(name, 'Blog Post 2');
    expect(key).toHaveValue('blog_post_2');

    await user.clear(key);
    await user.type(key, 'article');
    await user.type(name, 'x');
    expect(key).toHaveValue('article');
  });

  it('validates model name, key and description on blur', async () => {
    const user = setup();

    await user.type(screen.getByRole('textbox', { name: 'Model name' }), 'B');
    await user.tab();
    expect(screen.getByText('Model name must be 2–60 characters')).toBeInTheDocument();

    const key = screen.getByRole('textbox', { name: 'Model key' });
    await user.clear(key);
    await user.type(key, 'Blog-Post');
    await user.tab();
    expect(screen.getByText('Use lowercase letters, digits and underscores')).toBeInTheDocument();

    await user.clear(key);
    await user.tab();
    expect(screen.getByText('Model key is required')).toBeInTheDocument();
  });

  it('shows a description counter', async () => {
    const user = setup();
    await user.type(screen.getByRole('textbox', { name: 'Description' }), 'Posts');
    expect(screen.getByText('5/200')).toBeInTheDocument();
  });

  it('shows an error under the list and focuses "Add field" when submitted without fields', async () => {
    const user = setup();
    await fillModel(user);
    await user.click(screen.getByRole('button', { name: 'Create model' }));

    expect(screen.getByText('Add at least one field')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add field' })).toHaveFocus();
    expect(screen.queryByText('Content model created')).not.toBeInTheDocument();
  });

  it('focuses the first invalid model input on submit', async () => {
    const user = setup();
    await user.click(screen.getByRole('button', { name: 'Create model' }));

    expect(screen.getByText('Model name is required')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Model name' })).toHaveFocus();
  });

  it('lists every field type with a description', async () => {
    const user = setup();
    await user.click(screen.getByRole('button', { name: 'Add field' }));
    const dialog = getDialog();

    expect(within(dialog).getByText('Add field')).toBeInTheDocument();
    for (const type of [
      'Text',
      'Rich text',
      'Boolean',
      'JSON',
      'Select',
      'Image',
      'File',
      'Reference',
    ]) {
      expect(
        within(dialog).getByRole('button', { name: new RegExp(`^${type} `) })
      ).toBeInTheDocument();
    }
    expect(within(dialog).getByText('A link to entries of another model')).toBeInTheDocument();
  });

  it('adds a field and clears the list error', async () => {
    const user = setup();
    await fillModel(user);
    await user.click(screen.getByRole('button', { name: 'Create model' }));
    expect(screen.getByText('Add at least one field')).toBeInTheDocument();

    await addField(user, 'Text', 'Post title', async (dialog) => {
      expect(within(dialog).getByRole('textbox', { name: 'Key' })).toHaveValue('post_title');
      await user.click(within(dialog).getByRole('checkbox', { name: 'Required' }));
    });

    const [row] = getFieldRows();
    expect(within(row).getByText('Post title')).toBeInTheDocument();
    expect(within(row).getByText('post_title')).toBeInTheDocument();
    expect(within(row).getByText(/Text/, { selector: 'p' })).toBeInTheDocument();
    expect(within(row).getByTitle('Required')).toBeInTheDocument();
    expect(screen.queryByText('Add at least one field')).not.toBeInTheDocument();
  });

  it('validates required field options and focuses the first invalid one', async () => {
    const user = setup();
    await pickType(user, 'Image');
    const dialog = getDialog();
    await user.click(within(dialog).getByRole('button', { name: 'Save' }));

    expect(within(dialog).getByText('Label is required')).toBeInTheDocument();
    expect(within(dialog).getByText('Key is required')).toBeInTheDocument();
    expect(within(dialog).getByRole('textbox', { name: 'Label' })).toHaveFocus();
  });

  it('requires field keys to be unique within the model', async () => {
    const user = setup();
    await addField(user, 'Text', 'Title');
    await pickType(user, 'Rich text');
    const dialog = getDialog();
    await user.type(within(dialog).getByRole('textbox', { name: 'Label' }), 'Title');
    await user.click(within(dialog).getByRole('button', { name: 'Save' }));

    expect(within(dialog).getByText('Another field already uses this key')).toBeInTheDocument();
  });

  it('keeps the common options when going back to the type picker', async () => {
    const user = setup();
    await pickType(user, 'Text');
    await user.type(within(getDialog()).getByRole('textbox', { name: 'Label' }), 'Cover');
    await user.click(within(getDialog()).getByRole('button', { name: 'Back' }));
    await user.click(within(getDialog()).getByRole('button', { name: /^Image / }));

    expect(within(getDialog()).getByRole('textbox', { name: 'Label' })).toHaveValue('Cover');
    expect(within(getDialog()).getByText('A picture from the media library')).toBeInTheDocument();
  });

  it('cancels adding a field', async () => {
    const user = setup();
    await pickType(user, 'Text');
    await user.click(within(getDialog()).getByRole('button', { name: 'Cancel' }));
    await waitForDialogToClose();
    expect(screen.getByText('No fields added')).toBeInTheDocument();
  });

  it('edits a field in the same modal opened on the options form', async () => {
    const user = setup();
    await addField(user, 'Text', 'Title');
    await user.click(screen.getByRole('button', { name: 'Edit field Title' }));

    const dialog = getDialog();
    expect(within(dialog).getByText('Edit field')).toBeInTheDocument();
    expect(within(dialog).queryByRole('button', { name: 'Back' })).not.toBeInTheDocument();
    const label = within(dialog).getByRole('textbox', { name: 'Label' });
    expect(label).toHaveValue('Title');

    await user.clear(label);
    await user.type(label, 'Headline');
    expect(within(dialog).getByRole('textbox', { name: 'Key' })).toHaveValue('title');
    await user.click(within(dialog).getByRole('button', { name: 'Save' }));
    await waitForDialogToClose();

    const rows = getFieldRows();
    expect(rows).toHaveLength(1);
    expect(within(rows[0]).getByText('Headline')).toBeInTheDocument();
    expect(within(rows[0]).getByText('title')).toBeInTheDocument();
  });

  it('allows keeping the key of the edited field', async () => {
    const user = setup();
    await addField(user, 'Text', 'Title');
    await user.click(screen.getByRole('button', { name: 'Edit field Title' }));
    await user.click(within(getDialog()).getByRole('button', { name: 'Save' }));
    await waitForDialogToClose();
  });

  it('removes a field', async () => {
    const user = setup();
    await addField(user, 'Text', 'Title');
    await addField(user, 'Boolean', 'Featured');
    await user.click(screen.getByRole('button', { name: 'Remove field Title' }));

    const rows = getFieldRows();
    expect(rows).toHaveLength(1);
    expect(within(rows[0]).getByText('Featured')).toBeInTheDocument();
  });

  it('limits text options', async () => {
    const user = setup();
    await pickType(user, 'Text');
    const dialog = getDialog();
    const max = within(dialog).getByRole('textbox', { name: 'Max characters' });

    await user.type(max, '250000');
    await user.tab();
    expect(max).toHaveValue('100000');

    await user.clear(max);
    await user.type(max, '3');
    await user.click(within(dialog).getByRole('radio', { name: 'Textarea' }));
    const defaultValue = within(dialog).getByRole('textbox', { name: 'Default value' });
    expect(defaultValue.tagName).toBe('TEXTAREA');
    await user.type(defaultValue, 'abcdef');
    expect(defaultValue).toHaveValue('abc');
  });

  it('validates the JSON default value', async () => {
    const user = setup();
    await pickType(user, 'JSON');
    const dialog = getDialog();
    await user.type(within(dialog).getByRole('textbox', { name: 'Label' }), 'Meta');
    await user.type(within(dialog).getByRole('textbox', { name: 'Default value' }), '{{ broken');
    await user.click(within(dialog).getByRole('button', { name: 'Save' }));

    expect(within(dialog).getByText('Enter valid JSON')).toBeInTheDocument();
  });

  it('requires at least two select options with unique values', async () => {
    const user = setup();
    await pickType(user, 'Select');
    const dialog = getDialog();
    await user.type(within(dialog).getByRole('textbox', { name: 'Label' }), 'Status');

    await user.click(within(dialog).getByRole('button', { name: 'Remove option 2' }));
    await user.click(within(dialog).getByRole('button', { name: 'Save' }));
    expect(within(dialog).getByText('Add at least two options')).toBeInTheDocument();
    expect(within(dialog).getByText('Value is required')).toBeInTheDocument();

    await user.click(within(dialog).getByRole('button', { name: 'Add option' }));
    await user.type(within(dialog).getByRole('textbox', { name: 'Option 1 value' }), 'draft');
    await user.type(within(dialog).getByRole('textbox', { name: 'Option 1 label' }), 'Draft');
    await user.type(within(dialog).getByRole('textbox', { name: 'Option 2 value' }), 'draft');
    await user.type(within(dialog).getByRole('textbox', { name: 'Option 2 label' }), 'Draft copy');
    await user.click(within(dialog).getByRole('button', { name: 'Save' }));
    expect(within(dialog).getByText('Option values must be unique')).toBeInTheDocument();

    await user.type(within(dialog).getByRole('textbox', { name: 'Option 2 value' }), '_copy');
    expect(within(dialog).queryByText('Option values must be unique')).not.toBeInTheDocument();
  });

  it('requires a target model for references', async () => {
    const user = setup();
    await pickType(user, 'Reference');
    const dialog = getDialog();
    await user.type(within(dialog).getByRole('textbox', { name: 'Label' }), 'Author');
    await user.click(within(dialog).getByRole('button', { name: 'Save' }));

    expect(within(dialog).getByText('Select a target model')).toBeInTheDocument();
  });

  it('reorders fields with the keyboard drag handle', async () => {
    const restore = mockRowRects();
    try {
      const user = setup();
      await fillModel(user);
      await addField(user, 'Text', 'Title');
      await addField(user, 'Image', 'Cover');

      screen.getByRole('button', { name: 'Reorder field Title' }).focus();
      await user.keyboard(' ');
      await user.keyboard('{ArrowDown}');
      await user.keyboard(' ');

      await waitFor(() => expect(within(getFieldRows()[0]).getByText('Cover')).toBeInTheDocument());
      const json = await submitAndReadJson(user);
      expect(json.fields.map((field: { key: string }) => field.key)).toEqual(['cover', 'title']);
    } finally {
      restore();
    }
  });

  it('shows the model JSON in a notification on submit and keeps the form', async () => {
    const user = setup();
    await fillModel(user);
    await user.type(screen.getByRole('textbox', { name: 'Description' }), 'Articles');

    await addField(user, 'Text', 'Title', async (dialog) => {
      await user.click(within(dialog).getByRole('checkbox', { name: 'Required' }));
      await user.type(within(dialog).getByRole('textbox', { name: 'Max characters' }), '120');
      await user.type(within(dialog).getByRole('textbox', { name: 'Default value' }), 'Untitled');
    });
    await addField(user, 'Boolean', 'Featured', async (dialog) => {
      await user.click(within(dialog).getByRole('radio', { name: 'True' }));
    });
    await addField(user, 'JSON', 'Meta', async (dialog) => {
      await user.type(within(dialog).getByRole('textbox', { name: 'Default value' }), '{{"a": 1}');
    });
    await addField(user, 'Select', 'Status', async (dialog) => {
      await user.type(within(dialog).getByRole('textbox', { name: 'Option 1 value' }), 'draft');
      await user.type(within(dialog).getByRole('textbox', { name: 'Option 1 label' }), 'Draft');
      await user.type(within(dialog).getByRole('textbox', { name: 'Option 2 value' }), 'live');
      await user.type(within(dialog).getByRole('textbox', { name: 'Option 2 label' }), 'Live');
      await user.click(within(dialog).getByRole('combobox', { name: 'Default option' }));
      await user.click(screen.getByRole('option', { name: 'Live' }));
    });
    await addField(user, 'Reference', 'Writer', async (dialog) => {
      await user.click(within(dialog).getByRole('combobox', { name: 'Target model' }));
      await user.click(screen.getByRole('option', { name: 'Author' }));
      await user.click(within(dialog).getByRole('checkbox', { name: 'Allow multiple' }));
    });
    await addField(user, 'File', 'Attachment');

    const json = await submitAndReadJson(user);
    expect(json).toEqual({
      name: 'Blog post',
      key: 'blog_post',
      description: 'Articles',
      fields: [
        {
          type: 'text',
          label: 'Title',
          key: 'title',
          description: '',
          required: true,
          options: { display: 'input', maxLength: 120, defaultValue: 'Untitled' },
        },
        {
          type: 'boolean',
          label: 'Featured',
          key: 'featured',
          description: '',
          required: false,
          options: { defaultValue: true },
        },
        {
          type: 'json',
          label: 'Meta',
          key: 'meta',
          description: '',
          required: false,
          options: { defaultValue: { a: 1 } },
        },
        {
          type: 'select',
          label: 'Status',
          key: 'status',
          description: '',
          required: false,
          options: {
            options: [
              { value: 'draft', label: 'Draft' },
              { value: 'live', label: 'Live' },
            ],
            defaultValue: 'live',
          },
        },
        {
          type: 'reference',
          label: 'Writer',
          key: 'writer',
          description: '',
          required: false,
          options: { targetModel: 'Author', allowMultiple: true },
        },
        {
          type: 'file',
          label: 'Attachment',
          key: 'attachment',
          description: '',
          required: false,
          options: {},
        },
      ],
    });

    expect(screen.getByRole('textbox', { name: 'Model name' })).toHaveValue('Blog post');
    expect(getFieldRows()).toHaveLength(6);
  });
});
