import { render, screen, userEvent, waitFor, within } from '@test-utils';
import { Notifications, notifications } from '@mantine/notifications';
import { ContentEntryForm } from './ContentEntryForm';
import { BLOG_POST_MODEL } from './models';
import type { ContentModel, EntryPayload, ModelField } from './types';

type User = ReturnType<typeof userEvent.setup>;

function renderForm(model: ContentModel = BLOG_POST_MODEL, options?: { applyAccept?: boolean }) {
  const user = userEvent.setup(options);
  const onSubmit = vi.fn<(entry: EntryPayload) => void>();
  render(
    <>
      <Notifications />
      <ContentEntryForm model={model} onSubmit={onSubmit} />
    </>
  );
  return { user, onSubmit };
}

function modelWith(...fields: ModelField[]): ContentModel {
  return { name: 'Test', key: 'test', description: '', fields };
}

const textbox = (name: string) => screen.getByRole('textbox', { name });
const combobox = (name: string) => screen.getByRole('combobox', { name });
const pills = (name: string) => within(textbox(name).parentElement as HTMLElement);
const submit = (user: User) => user.click(screen.getByRole('button', { name: 'Create entry' }));

const imageFile = () => new File(['image'], 'cover.png', { type: 'image/png' });

function entryOption(dialog: HTMLElement, key: string) {
  const name = new RegExp(`^${key} `);
  return (
    within(dialog).queryByRole('checkbox', { name }) ?? within(dialog).getByRole('radio', { name })
  );
}

async function pickEntries(user: User, fieldLabel: string, keys: string[]) {
  await user.click(textbox(fieldLabel));
  const dialog = screen.getByRole('dialog');
  for (const key of keys) {
    await user.click(entryOption(dialog, key));
  }
  await user.click(within(dialog).getByRole('button', { name: /^Select entr/ }));
}

async function fillRequiredBlogPost(user: User) {
  await user.type(textbox('Content key'), 'hello-world');
  await user.type(textbox('Title'), 'Hello world');
  await user.type(textbox('Body'), 'First post');
  await user.upload(screen.getByLabelText('Upload Cover image'), imageFile());
  await pickEntries(user, 'Author', ['ada-lovelace']);
}

afterEach(() => {
  notifications.clean();
});

describe('fields from the model', () => {
  it('renders the model fields in model order after the entry details', () => {
    renderForm();
    const labels = [
      'Content key',
      'Language',
      'Tags',
      ...BLOG_POST_MODEL.fields.map((field) => field.label),
    ];
    const nodes = labels.map((label) => screen.getAllByText(label)[0]);
    nodes.slice(1).forEach((node, index) => {
      expect(
        nodes[index].compareDocumentPosition(node) & Node.DOCUMENT_POSITION_FOLLOWING
      ).toBeTruthy();
    });
  });

  it('shows the field description under the label', () => {
    renderForm();
    expect(screen.getByText('Shown as the page heading')).toBeInTheDocument();
  });

  it('renders a textarea for a text field displayed as textarea', () => {
    renderForm();
    expect(textbox('Excerpt').tagName).toBe('TEXTAREA');
    expect(textbox('Title').tagName).toBe('INPUT');
  });

  it('pre-fills the defaults of the fields', () => {
    renderForm();
    expect(combobox('Language')).toHaveValue('English (en-US)');
    expect(combobox('Category')).toHaveValue('News');
    expect(screen.getByRole('checkbox', { name: 'Featured' })).not.toBeChecked();
    expect(textbox('SEO metadata')).toHaveValue('{\n  "index": true,\n  "follow": true\n}');
  });

  it('pre-fills a text default and a checked boolean default', () => {
    renderForm(
      modelWith(
        {
          type: 'text',
          key: 'headline',
          label: 'Headline',
          description: '',
          required: false,
          display: 'input',
          maxLength: null,
          defaultValue: 'Hello',
        },
        {
          type: 'boolean',
          key: 'cta',
          label: 'Show CTA',
          description: '',
          required: false,
          defaultValue: true,
        }
      )
    );
    expect(textbox('Headline')).toHaveValue('Hello');
    expect(screen.getByRole('checkbox', { name: 'Show CTA' })).toBeChecked();
  });
});

describe('entry details', () => {
  it('requires the content key', async () => {
    const { user } = renderForm();
    await submit(user);
    expect(screen.getByText('Content key is required')).toBeInTheDocument();
  });

  it('rejects a content key with uppercase letters or spaces on blur', async () => {
    const { user } = renderForm();
    await user.type(textbox('Content key'), 'Hello World');
    await user.tab();
    expect(screen.getByText('Use lowercase letters, digits and dashes')).toBeInTheDocument();
  });

  it('clears the key error when the key is fixed', async () => {
    const { user } = renderForm();
    await user.type(textbox('Content key'), 'Hello');
    await user.tab();
    await user.clear(textbox('Content key'));
    await user.type(textbox('Content key'), 'hello-2');
    expect(screen.queryByText('Use lowercase letters, digits and dashes')).not.toBeInTheDocument();
  });

  it('lets the user pick another language', async () => {
    const { user } = renderForm();
    await user.click(combobox('Language'));
    await user.click(screen.getByRole('option', { name: 'German (de-DE)' }));
    expect(combobox('Language')).toHaveValue('German (de-DE)');
  });

  it('offers the suggested tags', async () => {
    const { user } = renderForm();
    await user.click(combobox('Tags'));
    expect(screen.getAllByRole('option').map((option) => option.textContent)).toEqual([
      'featured',
      'evergreen',
      'seasonal',
      'internal',
      'draft-review',
    ]);
  });

  it('accepts free-form tags', async () => {
    const { user } = renderForm();
    await user.type(combobox('Tags'), 'launch{Enter}');
    expect(screen.getByText('launch')).toBeInTheDocument();
  });

  it('does not add a duplicate tag', async () => {
    const { user } = renderForm();
    await user.type(combobox('Tags'), 'launch{Enter}launch{Enter}');
    expect(screen.getAllByText('launch')).toHaveLength(1);
  });

  it('stops adding tags after ten', async () => {
    const { user } = renderForm();
    for (let index = 1; index <= 11; index += 1) {
      await user.type(combobox('Tags'), `tag-${index}{Enter}`);
    }
    expect(screen.getByText('tag-10')).toBeInTheDocument();
    expect(screen.queryByText('tag-11')).not.toBeInTheDocument();
  });
});

describe('text fields', () => {
  it('shows a character counter with the max length', async () => {
    const { user } = renderForm();
    await user.type(textbox('Title'), 'Hello');
    expect(screen.getByText('5/80')).toBeInTheDocument();
  });

  it('requires a required text field', async () => {
    const { user } = renderForm();
    await submit(user);
    expect(screen.getByText('Title is required')).toBeInTheDocument();
  });

  it('rejects a value longer than the max length', async () => {
    const { user } = renderForm(
      modelWith({
        type: 'text',
        key: 'code',
        label: 'Code',
        description: '',
        required: false,
        display: 'input',
        maxLength: 3,
        defaultValue: 'abcdef',
      })
    );
    await submit(user);
    expect(screen.getByText('Code must be at most 3 characters')).toBeInTheDocument();
  });
});

describe('rich text', () => {
  it('requires content in a required rich text field', async () => {
    const { user } = renderForm();
    await submit(user);
    expect(screen.getByText('Body is required')).toBeInTheDocument();
  });

  it('shows the formatting controls', () => {
    renderForm();
    ['Bold', 'Italic', 'Heading 2', 'Bullet list', 'Ordered list', 'Link'].forEach((name) => {
      expect(screen.getByRole('button', { name })).toBeInTheDocument();
    });
  });

  it('clears the required error once text is typed', async () => {
    const { user } = renderForm();
    await submit(user);
    await user.type(textbox('Body'), 'Some text');
    expect(screen.queryByText('Body is required')).not.toBeInTheDocument();
  });
});

describe('boolean fields', () => {
  it('requires a required checkbox to be checked', async () => {
    const { user } = renderForm(
      modelWith({
        type: 'boolean',
        key: 'approved',
        label: 'Approved',
        description: '',
        required: true,
        defaultValue: false,
      })
    );
    await submit(user);
    expect(screen.getByText('Approved must be checked')).toBeInTheDocument();
  });
});

describe('json fields', () => {
  it('rejects invalid JSON on blur', async () => {
    const { user } = renderForm();
    await user.clear(textbox('SEO metadata'));
    await user.type(textbox('SEO metadata'), 'not json');
    await user.tab();
    expect(screen.getByText('SEO metadata must be valid JSON')).toBeInTheDocument();
  });

  it('pretty-prints valid JSON on blur', async () => {
    const { user } = renderForm();
    await user.clear(textbox('SEO metadata'));
    await user.click(textbox('SEO metadata'));
    await user.paste('{"a":1}');
    await user.tab();
    expect(textbox('SEO metadata')).toHaveValue('{\n  "a": 1\n}');
  });

  it('requires a required JSON field', async () => {
    const { user } = renderForm(
      modelWith({
        type: 'json',
        key: 'config',
        label: 'Config',
        description: '',
        required: true,
        defaultValue: '',
      })
    );
    await submit(user);
    expect(screen.getByText('Config is required')).toBeInTheDocument();
  });
});

describe('select fields', () => {
  const statusField: ModelField = {
    type: 'select',
    key: 'status',
    label: 'Status',
    description: '',
    required: true,
    options: [
      { value: 'draft', label: 'Draft' },
      { value: 'live', label: 'Live' },
    ],
    defaultValue: null,
  };

  it('lists the options of the field', async () => {
    const { user } = renderForm(modelWith(statusField));
    await user.click(combobox('Status'));
    expect(screen.getAllByRole('option').map((option) => option.textContent)).toEqual([
      'Draft',
      'Live',
    ]);
  });

  it('requires a required select', async () => {
    const { user } = renderForm(modelWith(statusField));
    await submit(user);
    expect(screen.getByText('Status is required')).toBeInTheDocument();
  });
});

describe('image fields', () => {
  it('shows a preview of the chosen image', async () => {
    const { user } = renderForm();
    await user.upload(screen.getByLabelText('Upload Cover image'), imageFile());
    expect(screen.getByRole('img', { name: 'Preview of cover.png' })).toBeInTheDocument();
  });

  it('removes the chosen image', async () => {
    const { user } = renderForm();
    await user.upload(screen.getByLabelText('Upload Cover image'), imageFile());
    await user.click(screen.getByRole('button', { name: 'Remove cover.png' }));
    expect(screen.queryByRole('img', { name: 'Preview of cover.png' })).not.toBeInTheDocument();
    expect(screen.getByLabelText('Upload Cover image')).toBeInTheDocument();
  });

  it('rejects a file that is not an image', async () => {
    const { user } = renderForm(BLOG_POST_MODEL, { applyAccept: false });
    await user.upload(
      screen.getByLabelText('Upload Cover image'),
      new File(['%PDF'], 'report.pdf', { type: 'application/pdf' })
    );
    expect(await screen.findByText('File type must be an image')).toBeInTheDocument();
  });

  it('requires a required image', async () => {
    const { user } = renderForm();
    await submit(user);
    expect(screen.getByText('Cover image is required')).toBeInTheDocument();
  });
});

describe('file fields', () => {
  it('shows the name and size of the chosen file', async () => {
    const { user } = renderForm();
    await user.upload(
      screen.getByLabelText('Upload Attachment'),
      new File(['a'.repeat(2048)], 'guide.pdf', { type: 'application/pdf' })
    );
    expect(screen.getByText('guide.pdf')).toBeInTheDocument();
    expect(screen.getByText('2.05 kB')).toBeInTheDocument();
  });

  it('removes the chosen file', async () => {
    const { user } = renderForm();
    await user.upload(screen.getByLabelText('Upload Attachment'), new File(['a'], 'guide.pdf'));
    await user.click(screen.getByRole('button', { name: 'Remove guide.pdf' }));
    expect(screen.queryByText('guide.pdf')).not.toBeInTheDocument();
  });

  it('requires a required file', async () => {
    const { user } = renderForm(
      modelWith({
        type: 'file',
        key: 'contract',
        label: 'Contract',
        description: '',
        required: true,
      })
    );
    await submit(user);
    expect(screen.getByText('Contract is required')).toBeInTheDocument();
  });
});

describe('reference fields', () => {
  it('shows a placeholder while no entry is selected', () => {
    renderForm();
    expect(textbox('Author')).toHaveAttribute('placeholder', 'Select entry');
    expect(textbox('Related content')).toHaveAttribute('placeholder', 'Select entries');
  });

  it('opens the picker from the keyboard', async () => {
    const { user } = renderForm();
    textbox('Author').focus();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('opens a picker with a search input', async () => {
    const { user } = renderForm();
    await user.click(textbox('Author'));
    expect(
      within(screen.getByRole('dialog')).getByRole('textbox', { name: 'Search entries' })
    ).toBeInTheDocument();
  });

  it('lists only entries of the target model when it is fixed', async () => {
    const { user } = renderForm();
    await user.click(textbox('Author'));
    const dialog = screen.getByRole('dialog');
    expect(
      within(dialog)
        .getAllByRole('radio')
        .map((radio) => radio.getAttribute('aria-label'))
    ).toEqual([
      'ada-lovelace (Ada Lovelace)',
      'grace-hopper (Grace Hopper)',
      'alan-turing (Alan Turing)',
    ]);
    expect(within(dialog).queryByRole('radiogroup', { name: 'Model' })).not.toBeInTheDocument();
  });

  it('filters entries by the search text', async () => {
    const { user } = renderForm();
    await user.click(textbox('Author'));
    const dialog = screen.getByRole('dialog');
    await user.type(within(dialog).getByRole('textbox', { name: 'Search entries' }), 'grace');
    expect(within(dialog).getAllByRole('radio')).toHaveLength(1);
    expect(entryOption(dialog, 'grace-hopper')).toBeInTheDocument();
  });

  it('filters entries by model when the target model is not fixed', async () => {
    const { user } = renderForm();
    await user.click(textbox('Related content'));
    const dialog = screen.getByRole('dialog');
    await user.click(within(dialog).getByRole('radio', { name: 'Product' }));
    expect(
      within(dialog)
        .getAllByRole('checkbox')
        .map((checkbox) => checkbox.getAttribute('aria-label'))
    ).toEqual([
      'starter-plan (Starter plan)',
      'team-plan (Team plan)',
      'enterprise-plan (Enterprise plan)',
    ]);
  });

  it('shows the selected entry keys as pills inside the input', async () => {
    const { user } = renderForm();
    await pickEntries(user, 'Related content', ['pricing', 'design']);
    expect(pills('Related content').getByText('pricing')).toBeInTheDocument();
    expect(pills('Related content').getByText('design')).toBeInTheDocument();
  });

  it('replaces the entry of a single reference field', async () => {
    const { user } = renderForm();
    await pickEntries(user, 'Author', ['ada-lovelace']);
    await pickEntries(user, 'Author', ['alan-turing']);
    expect(textbox('Author')).toHaveValue('alan-turing');
  });

  it('removes an entry with its pill remove button', async () => {
    const { user } = renderForm();
    await pickEntries(user, 'Related content', ['pricing', 'design']);
    await user.click(screen.getByLabelText('Remove pricing'));
    expect(pills('Related content').queryByText('pricing')).not.toBeInTheDocument();
    expect(pills('Related content').getByText('design')).toBeInTheDocument();
  });

  it('shows a single selection as the input value, without a pill', async () => {
    const { user } = renderForm();
    await pickEntries(user, 'Author', ['ada-lovelace']);
    expect(textbox('Author')).toHaveValue('ada-lovelace');
    expect(screen.queryByLabelText('Remove ada-lovelace')).not.toBeInTheDocument();
  });

  it('clears a single selection with Backspace', async () => {
    const { user } = renderForm();
    await pickEntries(user, 'Author', ['ada-lovelace']);
    textbox('Author').focus();
    await user.keyboard('{Backspace}');
    expect(textbox('Author')).toHaveValue('');
  });

  it('removes the last entry with Backspace', async () => {
    const { user } = renderForm();
    await pickEntries(user, 'Related content', ['pricing', 'design']);
    textbox('Related content').focus();
    await user.keyboard('{Backspace}');
    expect(pills('Related content').queryByText('design')).not.toBeInTheDocument();
    expect(pills('Related content').getByText('pricing')).toBeInTheDocument();
  });

  it('keeps the selection when the picker is cancelled', async () => {
    const { user } = renderForm();
    await pickEntries(user, 'Author', ['ada-lovelace']);
    await user.click(textbox('Author'));
    const dialog = screen.getByRole('dialog');
    await user.click(entryOption(dialog, 'alan-turing'));
    await user.click(within(dialog).getByRole('button', { name: 'Cancel' }));
    expect(textbox('Author')).toHaveValue('ada-lovelace');
  });

  it('requires at least one entry in a required reference field', async () => {
    const { user } = renderForm();
    await submit(user);
    expect(screen.getByText('Select an entry')).toBeInTheDocument();
  });
});

describe('submit', () => {
  it('focuses the content key when everything is empty', async () => {
    const { user } = renderForm();
    await submit(user);
    expect(textbox('Content key')).toHaveFocus();
  });

  it('focuses the first invalid model field', async () => {
    const { user } = renderForm();
    await user.type(textbox('Content key'), 'hello-world');
    await user.type(textbox('Title'), 'Hello world');
    await submit(user);
    expect(textbox('Body')).toHaveFocus();
  });

  it('focuses the reference input when it is the first invalid field', async () => {
    const { user } = renderForm();
    await user.type(textbox('Content key'), 'hello-world');
    await user.type(textbox('Title'), 'Hello world');
    await user.type(textbox('Body'), 'First post');
    await user.upload(screen.getByLabelText('Upload Cover image'), imageFile());
    await submit(user);
    expect(textbox('Author')).toHaveFocus();
  });

  it('does not submit while a field is invalid', async () => {
    const { user, onSubmit } = renderForm();
    await submit(user);
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('submits the entry with values keyed by field key', async () => {
    const { user, onSubmit } = renderForm();
    await fillRequiredBlogPost(user);
    await user.type(combobox('Tags'), 'launch{Enter}');
    await user.click(screen.getByRole('checkbox', { name: 'Featured' }));
    await pickEntries(user, 'Related content', ['pricing', 'starter-plan']);
    await submit(user);

    expect(onSubmit).toHaveBeenCalledWith({
      key: 'hello-world',
      language: 'en-US',
      tags: ['launch'],
      model: 'blog_post',
      values: {
        title: 'Hello world',
        excerpt: '',
        body: '<p>First post</p>',
        cover: { name: 'cover.png', size: 5, type: 'image/png' },
        category: 'news',
        featured: true,
        author: 'ada-lovelace',
        related: ['pricing', 'starter-plan'],
        seo: { index: true, follow: true },
        attachment: null,
      },
    });
  });

  it('shows a short notification with the entry key and model', async () => {
    const { user } = renderForm();
    await fillRequiredBlogPost(user);
    await submit(user);
    expect(await screen.findByText('Entry created')).toBeInTheDocument();
    expect(screen.getByText('hello-world · Blog post')).toBeInTheDocument();
  });

  it('shows the entry JSON under the form', async () => {
    const { user } = renderForm();
    await fillRequiredBlogPost(user);
    await submit(user);
    expect(screen.getByText(/"model": "blog_post"/)).toBeInTheDocument();
  });

  it('keeps the values after submit', async () => {
    const { user } = renderForm();
    await fillRequiredBlogPost(user);
    await submit(user);
    await waitFor(() => expect(screen.getByText('Entry created')).toBeInTheDocument());
    expect(textbox('Content key')).toHaveValue('hello-world');
    expect(textbox('Title')).toHaveValue('Hello world');
    expect(textbox('Author')).toHaveValue('ada-lovelace');
  });
});
