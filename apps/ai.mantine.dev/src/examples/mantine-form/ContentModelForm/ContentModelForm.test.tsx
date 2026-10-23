import { render, screen, userEvent, waitFor, within } from '@test-utils';
import { Notifications, notifications } from '@mantine/notifications';
import { ContentModelForm } from './ContentModelForm';
import { mockSortableLayout } from './sortable-layout';

type User = ReturnType<typeof userEvent.setup>;

interface FieldInput {
  type?: string;
  label: string;
  key?: string;
  required?: boolean;
}

function renderForm() {
  const user = userEvent.setup();
  render(
    <>
      <Notifications />
      <ContentModelForm />
    </>
  );
  return { user };
}

function textbox(name: string) {
  return screen.getByRole('textbox', { name });
}

function dialog() {
  return within(screen.getByRole('dialog'));
}

async function addField(user: User, { type = 'Text', label, key, required }: FieldInput) {
  await user.click(screen.getByRole('button', { name: 'Add field' }));
  await user.click(dialog().getByRole('button', { name: type }));
  await user.type(dialog().getByRole('textbox', { name: 'Label' }), label);
  if (key) {
    await user.clear(dialog().getByRole('textbox', { name: 'Key' }));
    await user.type(dialog().getByRole('textbox', { name: 'Key' }), key);
  }
  if (required) {
    await user.click(dialog().getByRole('checkbox', { name: 'Required' }));
  }
  await user.click(dialog().getByRole('button', { name: 'Save' }));
  await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
}

async function fillModel(user: User, name = 'Blog post') {
  await user.type(textbox('Model name'), name);
}

async function submit(user: User) {
  await user.click(screen.getByRole('button', { name: 'Create model' }));
}

function fieldLabels() {
  return screen
    .queryAllByRole('button', { name: /^Edit field / })
    .map((button) => button.getAttribute('aria-label')!.replace('Edit field ', ''));
}

function fieldRow(label: string) {
  return screen.getByRole('button', { name: `Edit field ${label}` }).closest('li')!;
}

function submittedModel() {
  return JSON.parse(screen.getByLabelText('Model JSON').textContent!);
}

afterEach(() => {
  notifications.clean();
  jest.restoreAllMocks();
});

describe('model details', () => {
  it('fills the key from the model name', async () => {
    const { user } = renderForm();

    await fillModel(user, 'Blog Post 2');

    expect(textbox('Model key')).toHaveValue('blog_post_2');
  });

  it('stops filling the key once it is edited by hand', async () => {
    const { user } = renderForm();
    await fillModel(user, 'Blog');
    await user.type(textbox('Model key'), '_entry');

    await user.type(textbox('Model name'), ' post');

    expect(textbox('Model key')).toHaveValue('blog_entry');
  });

  it('shows required errors for name and key and focuses the name', async () => {
    const { user } = renderForm();

    await submit(user);

    expect(screen.getByText('Model name is required')).toBeInTheDocument();
    expect(screen.getByText('Model key is required')).toBeInTheDocument();
    expect(textbox('Model name')).toHaveFocus();
  });

  it('rejects a model name shorter than 2 characters', async () => {
    const { user } = renderForm();
    await fillModel(user, 'B');

    await user.tab();

    expect(screen.getByText('Model name must be 2–60 characters')).toBeInTheDocument();
  });

  it('limits the model name to 60 characters', async () => {
    const { user } = renderForm();

    await fillModel(user, 'x'.repeat(65));

    expect(textbox('Model name')).toHaveValue('x'.repeat(60));
  });

  it('rejects a key with characters other than lowercase letters, digits and underscores', async () => {
    const { user } = renderForm();
    await user.type(textbox('Model key'), 'Blog-Post');

    await user.tab();

    expect(screen.getByText('Use lowercase letters, digits and underscores')).toBeInTheDocument();
  });

  it('clears the key error once the key is fixed', async () => {
    const { user } = renderForm();
    await user.type(textbox('Model key'), 'Blog');
    await user.tab();

    await user.clear(textbox('Model key'));
    await user.type(textbox('Model key'), 'blog');

    expect(
      screen.queryByText('Use lowercase letters, digits and underscores')
    ).not.toBeInTheDocument();
  });

  it('counts description characters up to 200', async () => {
    const { user } = renderForm();

    await user.type(textbox('Description'), 'Articles');

    expect(screen.getByText('8/200')).toBeInTheDocument();
  });
});

describe('fields list', () => {
  it('shows an error under the list and focuses Add field when submitted without fields', async () => {
    const { user } = renderForm();
    await fillModel(user);

    await submit(user);

    expect(screen.getByText('Add at least one field')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add field' })).toHaveFocus();
  });

  it('starts with an empty list', () => {
    renderForm();

    expect(screen.getByText('No fields added')).toBeInTheDocument();
  });

  it('opens the type picker from Add field', async () => {
    const { user } = renderForm();

    await user.click(screen.getByRole('button', { name: 'Add field' }));

    expect(dialog().getByRole('heading', { name: 'Add field' })).toBeInTheDocument();
    expect(dialog().getByRole('group', { name: 'Field type' })).toBeInTheDocument();
  });

  it('adds a saved field to the list and closes the modal', async () => {
    const { user } = renderForm();

    await addField(user, { label: 'Title' });

    expect(fieldLabels()).toEqual(['Title']);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('shows the key and type in the row', async () => {
    const { user } = renderForm();

    await addField(user, { type: 'Boolean', label: 'Is featured' });

    expect(within(fieldRow('Is featured')).getByText('is_featured')).toBeInTheDocument();
    expect(fieldRow('Is featured')).toHaveTextContent('is_featured · Boolean');
  });

  it('marks required fields with an asterisk', async () => {
    const { user } = renderForm();

    await addField(user, { label: 'Title', required: true });

    expect(within(fieldRow('Title')).getByText('*')).toBeInTheDocument();
  });

  it('clears the list error once a field is added', async () => {
    const { user } = renderForm();
    await submit(user);

    await addField(user, { label: 'Title' });

    expect(screen.queryByText('Add at least one field')).not.toBeInTheDocument();
  });

  it('does not add a field when the modal is cancelled', async () => {
    const { user } = renderForm();
    await user.click(screen.getByRole('button', { name: 'Add field' }));
    await user.click(dialog().getByRole('button', { name: 'Text' }));
    await user.type(dialog().getByRole('textbox', { name: 'Label' }), 'Title');

    await user.click(dialog().getByRole('button', { name: 'Cancel' }));

    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(fieldLabels()).toEqual([]);
  });

  it('starts a new field from the type picker after a previous one was added', async () => {
    const { user } = renderForm();
    await addField(user, { label: 'Title' });

    await user.click(screen.getByRole('button', { name: 'Add field' }));

    expect(dialog().getByRole('group', { name: 'Field type' })).toBeInTheDocument();
  });

  it('opens the edit modal on the options form with the field values', async () => {
    const { user } = renderForm();
    await addField(user, { label: 'Title' });

    await user.click(screen.getByRole('button', { name: 'Edit field Title' }));

    expect(dialog().getByRole('heading', { name: 'Edit field' })).toBeInTheDocument();
    expect(dialog().getByRole('textbox', { name: 'Label' })).toHaveValue('Title');
  });

  it('updates the field in place when an edit is saved', async () => {
    const { user } = renderForm();
    await addField(user, { label: 'Title' });
    await addField(user, { label: 'Body' });
    await user.click(screen.getByRole('button', { name: 'Edit field Title' }));
    await user.clear(dialog().getByRole('textbox', { name: 'Label' }));
    await user.type(dialog().getByRole('textbox', { name: 'Label' }), 'Headline');

    await user.click(dialog().getByRole('button', { name: 'Save' }));

    await waitFor(() => expect(fieldLabels()).toEqual(['Headline', 'Body']));
  });

  it('rejects a key that another field of the model uses', async () => {
    const { user } = renderForm();
    await addField(user, { label: 'Title' });
    await user.click(screen.getByRole('button', { name: 'Add field' }));
    await user.click(dialog().getByRole('button', { name: 'Text' }));
    await user.type(dialog().getByRole('textbox', { name: 'Label' }), 'Title');

    await user.click(dialog().getByRole('button', { name: 'Save' }));

    expect(dialog().getByText('Another field already uses this key')).toBeInTheDocument();
  });

  it('allows a field to keep its own key when edited', async () => {
    const { user } = renderForm();
    await addField(user, { label: 'Title' });
    await user.click(screen.getByRole('button', { name: 'Edit field Title' }));

    await user.click(dialog().getByRole('button', { name: 'Save' }));

    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });

  it('removes a field', async () => {
    const { user } = renderForm();
    await addField(user, { label: 'Title' });
    await addField(user, { label: 'Body' });

    await user.click(screen.getByRole('button', { name: 'Remove field Title' }));

    expect(fieldLabels()).toEqual(['Body']);
  });

  it('reorders fields with the keyboard', async () => {
    const { user } = renderForm();
    await addField(user, { label: 'Title' });
    await addField(user, { label: 'Body' });
    mockSortableLayout();

    screen.getByRole('button', { name: 'Reorder field Title' }).focus();
    await user.keyboard('[Space]');
    await user.keyboard('{ArrowDown}');
    await user.keyboard('[Space]');

    expect(fieldLabels()).toEqual(['Body', 'Title']);
  });

  it('keeps the values of a moved field', async () => {
    const { user } = renderForm();
    await addField(user, { label: 'Title', key: 'headline' });
    await addField(user, { label: 'Body' });
    mockSortableLayout();

    screen.getByRole('button', { name: 'Reorder field Title' }).focus();
    await user.keyboard('[Space]');
    await user.keyboard('{ArrowDown}');
    await user.keyboard('[Space]');

    expect(fieldRow('Title')).toHaveTextContent('headline · Text');
  });
});

describe('submit', () => {
  it('shows a notification with the model key and field count', async () => {
    const { user } = renderForm();
    await fillModel(user);
    await addField(user, { label: 'Title' });
    await addField(user, { label: 'Body', type: 'Rich text' });

    await submit(user);

    expect(await screen.findByText('Model created')).toBeInTheDocument();
    expect(screen.getByText('blog_post · 2 fields')).toBeInTheDocument();
  });

  it('shows the model JSON with ordered fields and their options', async () => {
    const { user } = renderForm();
    await fillModel(user);
    await user.type(textbox('Description'), 'Articles for the blog');
    await addField(user, { label: 'Title', required: true });
    await addField(user, { label: 'Featured', type: 'Boolean' });
    await addField(user, { label: 'Cover', type: 'Image' });

    await submit(user);

    expect(submittedModel()).toEqual({
      name: 'Blog post',
      key: 'blog_post',
      description: 'Articles for the blog',
      fields: [
        {
          key: 'title',
          label: 'Title',
          type: 'text',
          description: null,
          required: true,
          options: { display: 'input', maxLength: null, defaultValue: null },
        },
        {
          key: 'featured',
          label: 'Featured',
          type: 'boolean',
          description: null,
          required: false,
          options: { defaultValue: false },
        },
        {
          key: 'cover',
          label: 'Cover',
          type: 'image',
          description: null,
          required: false,
          options: {},
        },
      ],
    });
  });

  it('includes select and reference options in the model JSON', async () => {
    const { user } = renderForm();
    await fillModel(user);
    await user.click(screen.getByRole('button', { name: 'Add field' }));
    await user.click(dialog().getByRole('button', { name: 'Select' }));
    await user.type(dialog().getByRole('textbox', { name: 'Label' }), 'Status');
    await user.type(dialog().getByRole('textbox', { name: 'Value of option 1' }), 'draft');
    await user.type(dialog().getByRole('textbox', { name: 'Label of option 1' }), 'Draft');
    await user.type(dialog().getByRole('textbox', { name: 'Value of option 2' }), 'live');
    await user.type(dialog().getByRole('textbox', { name: 'Label of option 2' }), 'Live');
    await user.click(dialog().getByRole('combobox', { name: 'Default option' }));
    await user.click(screen.getByRole('option', { name: 'Draft' }));
    await user.click(dialog().getByRole('button', { name: 'Save' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    await user.click(screen.getByRole('button', { name: 'Add field' }));
    await user.click(dialog().getByRole('button', { name: 'Reference' }));
    await user.type(dialog().getByRole('textbox', { name: 'Label' }), 'Author');
    await user.click(dialog().getByRole('combobox', { name: 'Target model' }));
    await user.click(screen.getByRole('option', { name: 'Author' }));
    await user.click(dialog().getByRole('button', { name: 'Save' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());

    await submit(user);

    expect(submittedModel().fields.map((field: { options: unknown }) => field.options)).toEqual([
      {
        options: [
          { value: 'draft', label: 'Draft' },
          { value: 'live', label: 'Live' },
        ],
        defaultValue: 'draft',
      },
      { targetModel: 'author', allowMultiple: false },
    ]);
  });

  it('parses the JSON default value in the model JSON', async () => {
    const { user } = renderForm();
    await fillModel(user);
    await user.click(screen.getByRole('button', { name: 'Add field' }));
    await user.click(dialog().getByRole('button', { name: 'JSON' }));
    await user.type(dialog().getByRole('textbox', { name: 'Label' }), 'Metadata');
    await user.click(dialog().getByRole('textbox', { name: 'Default value' }));
    await user.paste('{"tags":["news"]}');
    await user.click(dialog().getByRole('button', { name: 'Save' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());

    await submit(user);

    expect(submittedModel().fields[0].options).toEqual({ defaultValue: { tags: ['news'] } });
  });

  it('lists the fields in their new order after reordering', async () => {
    const { user } = renderForm();
    await fillModel(user);
    await addField(user, { label: 'Title' });
    await addField(user, { label: 'Body' });
    mockSortableLayout();
    screen.getByRole('button', { name: 'Reorder field Title' }).focus();
    await user.keyboard('[Space]');
    await user.keyboard('{ArrowDown}');
    await user.keyboard('[Space]');

    await submit(user);

    expect(submittedModel().fields.map((field: { key: string }) => field.key)).toEqual([
      'body',
      'title',
    ]);
  });

  it('keeps the form values after submit', async () => {
    const { user } = renderForm();
    await fillModel(user);
    await addField(user, { label: 'Title' });

    await submit(user);

    expect(textbox('Model name')).toHaveValue('Blog post');
    expect(textbox('Model key')).toHaveValue('blog_post');
    expect(fieldLabels()).toEqual(['Title']);
  });
});
