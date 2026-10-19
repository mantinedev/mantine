import { render, screen, userEvent, waitFor, within } from '@test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vite-plus/test';
import { notifications } from '@mantine/notifications';
import { ContentModelForm } from './ContentModelForm';

type User = ReturnType<typeof userEvent.setup>;

const getDialog = () => screen.getByRole('dialog');

async function openFieldOptions(user: User, typeLabel: string) {
  await user.click(screen.getByRole('button', { name: 'Add field' }));
  await user.click(within(getDialog()).getByRole('button', { name: new RegExp(`^${typeLabel}`) }));
}

async function addField(user: User, typeLabel: string, label: string) {
  await openFieldOptions(user, typeLabel);
  await user.type(within(getDialog()).getByLabelText(/^Label/), label);
}

async function saveField(user: User) {
  await user.click(within(getDialog()).getByRole('button', { name: 'Save' }));
}

async function fillModel(user: User) {
  await user.type(screen.getByLabelText(/^Model name/), 'Blog post');
}

function getSubmittedPayload(spy: ReturnType<typeof vi.spyOn>) {
  const { message } = spy.mock.calls[0][0] as { message: React.ReactElement<{ children: string }> };
  return JSON.parse(message.props.children);
}

// dnd-kit measures rows to find the drop target, jsdom reports zero-size rects
function mockRowRects() {
  return vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function (
    this: Element
  ) {
    const index = this.parentElement ? Array.from(this.parentElement.children).indexOf(this) : 0;
    const top = index * 60;
    return {
      x: 0,
      y: top,
      top,
      left: 0,
      right: 400,
      bottom: top + 50,
      width: 400,
      height: 50,
      toJSON: () => ({}),
    };
  });
}

async function moveDown(user: User, handle: HTMLElement) {
  handle.focus();
  await user.keyboard('[Space]');
  await user.keyboard('[ArrowDown]');
  await user.keyboard('[Space]');
}

describe('ContentModelForm', () => {
  let showSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    showSpy = vi.spyOn(notifications, 'show').mockImplementation(() => 'notification');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('model details', () => {
    it('fills the key from the name until the key is edited by hand', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);

      await user.type(screen.getByLabelText(/^Model name/), 'Blog Post 2');
      expect(screen.getByLabelText(/^Model key/)).toHaveValue('blog_post_2');

      await user.clear(screen.getByLabelText(/^Model key/));
      await user.type(screen.getByLabelText(/^Model key/), 'article');
      await user.type(screen.getByLabelText(/^Model name/), 'x');
      expect(screen.getByLabelText(/^Model key/)).toHaveValue('article');
    });

    it('validates name and key on blur', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);

      await user.type(screen.getByLabelText(/^Model name/), 'A');
      await user.tab();
      expect(screen.getByText('Model name must be 2–60 characters')).toBeInTheDocument();

      await user.clear(screen.getByLabelText(/^Model key/));
      await user.type(screen.getByLabelText(/^Model key/), 'Bad Key');
      await user.tab();
      expect(screen.getByText('Use lowercase letters, digits and underscores')).toBeInTheDocument();
    });

    it('limits the description to 200 characters and shows a counter', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);

      await user.type(screen.getByLabelText('Description'), 'Posts');
      expect(screen.getByText('5/200')).toBeInTheDocument();
      expect(screen.getByLabelText('Description')).toHaveAttribute('maxlength', '200');
    });

    it('focuses the first invalid input on submit', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);

      await user.click(screen.getByRole('button', { name: 'Create model' }));
      expect(screen.getByText('Model name is required')).toBeInTheDocument();
      expect(screen.getByText('Model key is required')).toBeInTheDocument();
      expect(screen.getByLabelText(/^Model name/)).toHaveFocus();
      expect(showSpy).not.toHaveBeenCalled();
    });
  });

  describe('fields list', () => {
    it('shows an error under the list and focuses "Add field" when there are no fields', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);

      await fillModel(user);
      await user.click(screen.getByRole('button', { name: 'Create model' }));

      expect(screen.getByText('Add at least one field')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Add field' })).toHaveFocus();
      expect(showSpy).not.toHaveBeenCalled();
    });

    it('adds a field through the type picker and clears the list error', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);

      await fillModel(user);
      await user.click(screen.getByRole('button', { name: 'Create model' }));

      await user.click(screen.getByRole('button', { name: 'Add field' }));
      const dialog = getDialog();
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
          within(dialog).getByRole('button', { name: new RegExp(`^${type}`) })
        ).toBeInTheDocument();
      }
      expect(within(dialog).getByText('A link to entries of another model')).toBeInTheDocument();

      await user.click(within(dialog).getByRole('button', { name: /^Text/ }));
      await user.type(within(dialog).getByLabelText(/^Label/), 'Post title');
      expect(within(dialog).getByLabelText(/^Key/)).toHaveValue('post_title');
      await user.click(within(dialog).getByLabelText('Required'));
      await saveField(user);

      await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
      expect(screen.getByText('post_title')).toBeInTheDocument();
      expect(screen.getByText('Post title')).toBeInTheDocument();
      expect(screen.getByLabelText('required')).toBeInTheDocument();
      expect(screen.queryByText('Add at least one field')).not.toBeInTheDocument();
    });

    it('goes back from the options form to the type picker', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);

      await addField(user, 'Text', 'Title');
      await user.click(within(getDialog()).getByRole('button', { name: 'Back' }));
      await user.click(within(getDialog()).getByRole('button', { name: /^Rich text/ }));

      expect(within(getDialog()).getByLabelText(/^Label/)).toHaveValue('Title');
      expect(
        within(getDialog()).getByText('Formatted text with headings, links and lists')
      ).toBeInTheDocument();
    });

    it('validates label and key of a field and requires a unique key', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);

      await openFieldOptions(user, 'Text');
      await saveField(user);
      expect(within(getDialog()).getByText('Label is required')).toBeInTheDocument();
      expect(within(getDialog()).getByText('Key is required')).toBeInTheDocument();
      expect(within(getDialog()).getByLabelText(/^Label/)).toHaveFocus();

      await user.type(within(getDialog()).getByLabelText(/^Label/), 'Title');
      await saveField(user);
      await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());

      await addField(user, 'Rich text', 'Title');
      await saveField(user);
      expect(
        within(getDialog()).getByText('Another field already uses this key')
      ).toBeInTheDocument();
      expect(within(getDialog()).getByLabelText(/^Key/)).toHaveFocus();
    });

    it('cancels adding a field without changing the list', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);

      await addField(user, 'Image', 'Cover');
      await user.click(within(getDialog()).getByRole('button', { name: 'Cancel' }));
      await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());

      expect(screen.getByText('No fields added')).toBeInTheDocument();

      await user.click(screen.getByRole('button', { name: 'Add field' }));
      expect(within(getDialog()).getByRole('button', { name: /^Image/ })).toBeInTheDocument();
    });

    it('edits a field in the same modal opened on the options form', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);

      await addField(user, 'Text', 'Title');
      await user.click(within(getDialog()).getByRole('radio', { name: 'Textarea' }));
      await saveField(user);
      await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());

      await user.click(screen.getByRole('button', { name: 'Edit field Title' }));
      const dialog = getDialog();
      expect(within(dialog).getByText('Edit field')).toBeInTheDocument();
      expect(within(dialog).queryByRole('button', { name: 'Back' })).not.toBeInTheDocument();
      expect(within(dialog).getByLabelText(/^Label/)).toHaveValue('Title');
      expect(within(dialog).getByLabelText(/^Key/)).toHaveValue('title');
      expect(within(dialog).getByRole('radio', { name: 'Textarea' })).toBeChecked();

      await user.clear(within(dialog).getByLabelText(/^Key/));
      await user.type(within(dialog).getByLabelText(/^Key/), 'headline');
      await user.type(within(dialog).getByLabelText(/^Label/), ' text');
      await saveField(user);
      await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());

      expect(screen.getByText('Title text')).toBeInTheDocument();
      expect(screen.getByText('headline')).toBeInTheDocument();
      expect(screen.getAllByRole('button', { name: /^Edit field/ })).toHaveLength(1);
    });

    it('removes a field', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);

      await addField(user, 'File', 'Attachment');
      await saveField(user);
      await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());

      await user.click(screen.getByRole('button', { name: 'Remove field Attachment' }));
      expect(screen.queryByText('Attachment')).not.toBeInTheDocument();
      expect(screen.getByText('No fields added')).toBeInTheDocument();
    });

    it('reorders fields with drag and drop', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);
      await fillModel(user);

      for (const label of ['First', 'Second']) {
        await addField(user, 'Text', label);
        await saveField(user);
        await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
      }

      mockRowRects();
      await moveDown(user, screen.getByRole('button', { name: 'Reorder field First' }));

      const labels = screen.getAllByRole('button', { name: /^Edit field/ });
      expect(labels.map((button) => button.getAttribute('aria-label'))).toEqual([
        'Edit field Second',
        'Edit field First',
      ]);

      await user.click(screen.getByRole('button', { name: 'Create model' }));
      expect(
        getSubmittedPayload(showSpy).fields.map((field: { key: string }) => field.key)
      ).toEqual(['second', 'first']);
    });
  });

  describe('type-specific options', () => {
    it('keeps text max length within 1–100000 and validates the default value against it', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);

      await addField(user, 'Text', 'Title');
      const dialog = getDialog();
      await user.type(within(dialog).getByLabelText('Max length'), '200000');
      await user.tab();
      expect(within(dialog).getByLabelText('Max length')).toHaveValue('100,000');

      await user.clear(within(dialog).getByLabelText('Max length'));
      await user.type(within(dialog).getByLabelText('Max length'), '3');
      await user.type(within(dialog).getByLabelText('Default value'), 'Hello');
      await saveField(user);
      expect(
        within(dialog).getByText('Default value is longer than the max length')
      ).toBeInTheDocument();
    });

    it('validates the JSON default value', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);

      await addField(user, 'JSON', 'Metadata');
      await user.type(within(getDialog()).getByLabelText('Default value'), '{{ invalid');
      await saveField(user);

      expect(within(getDialog()).getByText('Invalid JSON')).toBeInTheDocument();
      expect(within(getDialog()).getByLabelText('Default value')).toHaveFocus();
    });

    it('requires at least two select options with unique values', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);

      await addField(user, 'Select', 'Status');
      const dialog = getDialog();
      await user.click(within(dialog).getByRole('button', { name: 'Remove option 2' }));
      await user.type(within(dialog).getByLabelText('Option 1 value'), 'draft');
      await user.type(within(dialog).getByLabelText('Option 1 label'), 'Draft');
      await saveField(user);

      expect(within(dialog).getByText('Add at least two options')).toBeInTheDocument();
      expect(within(dialog).getByRole('button', { name: 'Add option' })).toHaveFocus();

      await user.click(within(dialog).getByRole('button', { name: 'Add option' }));
      expect(within(dialog).queryByText('Add at least two options')).not.toBeInTheDocument();
      await user.type(within(dialog).getByLabelText('Option 2 value'), 'draft');
      await user.type(within(dialog).getByLabelText('Option 2 label'), 'Also draft');
      await saveField(user);

      expect(within(dialog).getAllByText('Values must be unique')).toHaveLength(2);
    });

    it('clears the default option when its option is removed', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);

      await addField(user, 'Select', 'Status');
      const dialog = getDialog();
      await user.type(within(dialog).getByLabelText('Option 1 value'), 'draft');
      await user.type(within(dialog).getByLabelText('Option 1 label'), 'Draft');
      await user.type(within(dialog).getByLabelText('Option 2 value'), 'published');
      await user.type(within(dialog).getByLabelText('Option 2 label'), 'Published');

      await user.click(within(dialog).getByLabelText('Default option', { selector: 'input' }));
      await user.click(screen.getByRole('option', { name: 'Published' }));
      expect(within(dialog).getByLabelText('Default option', { selector: 'input' })).toHaveValue(
        'Published'
      );

      await user.click(within(dialog).getByRole('button', { name: 'Remove option 2' }));
      expect(within(dialog).getByLabelText('Default option', { selector: 'input' })).toHaveValue(
        ''
      );
    });

    it('requires a target model for a reference field', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);

      await addField(user, 'Reference', 'Author');
      await saveField(user);

      expect(within(getDialog()).getByText('Select a target model')).toBeInTheDocument();
    });

    it('shows no extra options for rich text, image and file fields', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);

      for (const type of ['Rich text', 'Image', 'File']) {
        await openFieldOptions(user, type);
        expect(within(getDialog()).queryByText(/options$/)).not.toBeInTheDocument();
        expect(within(getDialog()).queryByLabelText('Default value')).not.toBeInTheDocument();
        await user.click(within(getDialog()).getByRole('button', { name: 'Cancel' }));
        await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
      }
    });
  });

  describe('submit', () => {
    it('shows the model JSON with ordered fields and keeps the form values', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);

      await fillModel(user);
      await user.type(screen.getByLabelText('Description'), 'Articles for the blog');

      await addField(user, 'Text', 'Title');
      await user.click(within(getDialog()).getByLabelText('Required'));
      await user.type(within(getDialog()).getByLabelText('Max length'), '120');
      await user.type(within(getDialog()).getByLabelText('Default value'), 'Untitled');
      await saveField(user);

      await addField(user, 'Boolean', 'Featured');
      await user.click(within(getDialog()).getByRole('radio', { name: 'True' }));
      await saveField(user);

      await addField(user, 'JSON', 'Metadata');
      await user.type(within(getDialog()).getByLabelText('Default value'), '{{"seo": true}');
      await saveField(user);

      await addField(user, 'Select', 'Status');
      await user.type(within(getDialog()).getByLabelText('Option 1 value'), 'draft');
      await user.type(within(getDialog()).getByLabelText('Option 1 label'), 'Draft');
      await user.type(within(getDialog()).getByLabelText('Option 2 value'), 'published');
      await user.type(within(getDialog()).getByLabelText('Option 2 label'), 'Published');
      await user.click(within(getDialog()).getByLabelText('Default option', { selector: 'input' }));
      await user.click(screen.getByRole('option', { name: 'Draft' }));
      await saveField(user);

      await addField(user, 'Reference', 'Author');
      await user.click(within(getDialog()).getByLabelText(/^Target model/, { selector: 'input' }));
      await user.click(screen.getByRole('option', { name: 'Author' }));
      await user.click(within(getDialog()).getByLabelText('Allow multiple'));
      await saveField(user);

      await addField(user, 'Image', 'Cover image');
      await saveField(user);
      await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());

      await user.click(screen.getByRole('button', { name: 'Create model' }));

      expect(showSpy).toHaveBeenCalledTimes(1);
      expect(getSubmittedPayload(showSpy)).toEqual({
        name: 'Blog post',
        key: 'blog_post',
        description: 'Articles for the blog',
        fields: [
          {
            type: 'text',
            label: 'Title',
            key: 'title',
            description: '',
            required: true,
            display: 'input',
            maxLength: 120,
            defaultValue: 'Untitled',
          },
          {
            type: 'boolean',
            label: 'Featured',
            key: 'featured',
            description: '',
            required: false,
            defaultValue: true,
          },
          {
            type: 'json',
            label: 'Metadata',
            key: 'metadata',
            description: '',
            required: false,
            defaultValue: { seo: true },
          },
          {
            type: 'select',
            label: 'Status',
            key: 'status',
            description: '',
            required: false,
            options: [
              { value: 'draft', label: 'Draft' },
              { value: 'published', label: 'Published' },
            ],
            defaultValue: 'draft',
          },
          {
            type: 'reference',
            label: 'Author',
            key: 'author',
            description: '',
            required: false,
            targetModel: 'Author',
            allowMultiple: true,
          },
          {
            type: 'image',
            label: 'Cover image',
            key: 'cover_image',
            description: '',
            required: false,
          },
        ],
      });

      expect(screen.getByLabelText(/^Model name/)).toHaveValue('Blog post');
      expect(screen.getAllByRole('button', { name: /^Edit field/ })).toHaveLength(6);
    });

    it('reorders select options with drag and drop', async () => {
      const user = userEvent.setup();
      render(<ContentModelForm />);
      await fillModel(user);

      await addField(user, 'Select', 'Status');
      await user.type(within(getDialog()).getByLabelText('Option 1 value'), 'draft');
      await user.type(within(getDialog()).getByLabelText('Option 1 label'), 'Draft');
      await user.type(within(getDialog()).getByLabelText('Option 2 value'), 'published');
      await user.type(within(getDialog()).getByLabelText('Option 2 label'), 'Published');

      const rects = mockRowRects();
      await moveDown(user, within(getDialog()).getByRole('button', { name: 'Reorder option 1' }));
      expect(within(getDialog()).getByLabelText('Option 1 value')).toHaveValue('published');
      rects.mockRestore();

      await saveField(user);
      await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
      await user.click(screen.getByRole('button', { name: 'Create model' }));

      expect(getSubmittedPayload(showSpy).fields[0].options).toEqual([
        { value: 'published', label: 'Published' },
        { value: 'draft', label: 'Draft' },
      ]);
    });
  });
});
