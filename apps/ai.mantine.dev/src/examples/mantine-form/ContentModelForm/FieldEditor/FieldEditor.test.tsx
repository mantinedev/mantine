import { render, screen, userEvent, within } from '@test-utils';
import { createField } from '../fields';
import { mockSortableLayout } from '../sortable-layout';
import type { ModelField } from '../types';
import { FieldEditor } from './FieldEditor';

afterEach(() => {
  jest.restoreAllMocks();
});

type User = ReturnType<typeof userEvent.setup>;

function renderEditor({
  field = null,
  takenKeys = [],
}: { field?: ModelField | null; takenKeys?: string[] } = {}) {
  const user = userEvent.setup();
  const onSave = jest.fn();
  const onCancel = jest.fn();
  render(<FieldEditor field={field} takenKeys={takenKeys} onSave={onSave} onCancel={onCancel} />);
  return { user, onSave, onCancel };
}

function textbox(name: string) {
  return screen.getByRole('textbox', { name });
}

function combobox(name: string) {
  return screen.getByRole('combobox', { name });
}

async function pickType(user: User, type: string) {
  await user.click(screen.getByRole('button', { name: type }));
}

async function fillLabel(user: User, label: string) {
  await user.type(textbox('Label'), label);
}

async function save(user: User) {
  await user.click(screen.getByRole('button', { name: 'Save' }));
}

async function startField(user: User, type: string, label = 'Title') {
  await pickType(user, type);
  await fillLabel(user, label);
}

function existingField(overrides: Partial<ModelField> = {}): ModelField {
  return { ...createField('text'), label: 'Title', key: 'title', ...overrides };
}

describe('type picker', () => {
  it('lists every field type with its description', () => {
    renderEditor();

    const types = within(screen.getByRole('group', { name: 'Field type' })).getAllByRole('button');

    expect(types.map((type) => type.textContent)).toEqual([
      'TextTitles, names and other plain text',
      'Rich textFormatted text with headings, links and lists',
      'BooleanA yes or no value',
      'JSONStructured data stored as JSON',
      'SelectOne value from a list of options',
      'ImageA picture from the media library',
      'FileA document or any other uploaded file',
      'ReferenceA link to entries of another model',
    ]);
  });

  it('shows the options form of the picked type', async () => {
    const { user } = renderEditor();

    await pickType(user, 'Reference');

    expect(combobox('Target model')).toBeInTheDocument();
  });

  it('focuses the label after a type is picked', async () => {
    const { user } = renderEditor();

    await pickType(user, 'Text');

    expect(textbox('Label')).toHaveFocus();
  });

  it('returns to the type picker with Back', async () => {
    const { user } = renderEditor();
    await pickType(user, 'Text');

    await user.click(screen.getByRole('button', { name: 'Back' }));

    expect(screen.getByRole('group', { name: 'Field type' })).toBeInTheDocument();
  });

  it('calls onCancel from the picker', async () => {
    const { user, onCancel } = renderEditor();

    await user.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onCancel).toHaveBeenCalled();
  });
});

describe('common options', () => {
  it('fills the key from the label', async () => {
    const { user } = renderEditor();

    await startField(user, 'Text', 'Hero Image URL');

    expect(textbox('Key')).toHaveValue('hero_image_url');
  });

  it('stops filling the key once it is edited by hand', async () => {
    const { user } = renderEditor();
    await startField(user, 'Text', 'Title');
    await user.clear(textbox('Key'));
    await user.type(textbox('Key'), 'headline');

    await user.type(textbox('Label'), ' text');

    expect(textbox('Key')).toHaveValue('headline');
  });

  it('shows required errors for label and key', async () => {
    const { user } = renderEditor();
    await pickType(user, 'Text');

    await save(user);

    expect(screen.getByText('Label is required')).toBeInTheDocument();
    expect(screen.getByText('Key is required')).toBeInTheDocument();
  });

  it('focuses the label when saved empty', async () => {
    const { user } = renderEditor();
    await pickType(user, 'Text');

    await save(user);

    expect(textbox('Label')).toHaveFocus();
  });

  it('rejects a key with characters other than lowercase letters, digits and underscores', async () => {
    const { user } = renderEditor();
    await pickType(user, 'Text');
    await user.type(textbox('Key'), 'Hero-Image');

    await user.tab();

    expect(screen.getByText('Use lowercase letters, digits and underscores')).toBeInTheDocument();
  });

  it('rejects a key used by another field of the model', async () => {
    const { user, onSave } = renderEditor({ takenKeys: ['title'] });
    await startField(user, 'Text', 'Title');

    await save(user);

    expect(screen.getByText('Another field already uses this key')).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();
  });

  it('saves the common options', async () => {
    const { user, onSave } = renderEditor();
    await startField(user, 'Rich text', 'Body');
    await user.type(textbox('Description'), 'Main content');
    await user.click(screen.getByRole('checkbox', { name: 'Required' }));

    await save(user);

    expect(onSave).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'rich_text',
        label: 'Body',
        key: 'body',
        description: 'Main content',
        required: true,
      }),
      expect.anything()
    );
  });

  it('shows no type-specific options for rich text, image and file', async () => {
    const { user } = renderEditor();

    await pickType(user, 'Image');

    expect(screen.queryByRole('textbox', { name: 'Default value' })).not.toBeInTheDocument();
    expect(
      screen.getAllByRole('textbox').map((input) => input.getAttribute('placeholder'))
    ).toEqual(['Title', 'title', 'Help text shown to editors']);
  });
});

describe('editing', () => {
  it('opens on the options form with the field values', () => {
    renderEditor({ field: existingField({ description: 'Shown in lists', required: true }) });

    expect(textbox('Label')).toHaveValue('Title');
    expect(textbox('Key')).toHaveValue('title');
    expect(textbox('Description')).toHaveValue('Shown in lists');
    expect(screen.getByRole('checkbox', { name: 'Required' })).toBeChecked();
  });

  it('has no Back action', () => {
    renderEditor({ field: existingField() });

    expect(screen.queryByRole('button', { name: 'Back' })).not.toBeInTheDocument();
  });

  it('keeps a key that differs from the label slug', async () => {
    const { user } = renderEditor({ field: existingField({ key: 'headline' }) });

    await user.type(textbox('Label'), ' text');

    expect(textbox('Key')).toHaveValue('headline');
  });

  it('saves the changes with the same field id', async () => {
    const field = existingField();
    const { user, onSave } = renderEditor({ field });
    await user.type(textbox('Label'), ' text');

    await save(user);

    expect(onSave).toHaveBeenCalledWith(
      expect.objectContaining({ id: field.id, label: 'Title text', key: 'title_text' }),
      expect.anything()
    );
  });
});

describe('text options', () => {
  it('rejects a max character count above 100,000', async () => {
    const { user } = renderEditor();
    await startField(user, 'Text');
    await user.type(textbox('Max characters'), '100001');

    await user.tab();

    expect(screen.getByText('Max length must be between 1 and 100,000')).toBeInTheDocument();
  });

  it('rejects a max character count of 0', async () => {
    const { user } = renderEditor();
    await startField(user, 'Text');
    await user.type(textbox('Max characters'), '0');

    await user.tab();

    expect(screen.getByText('Max length must be between 1 and 100,000')).toBeInTheDocument();
  });

  it('rejects a default value longer than the max character count', async () => {
    const { user } = renderEditor();
    await startField(user, 'Text');
    await user.type(textbox('Max characters'), '3');
    await user.type(textbox('Default value'), 'Draft');

    await save(user);

    expect(screen.getByText('Default value must be 3 characters or fewer')).toBeInTheDocument();
  });

  it('shows a multiline default value input for the textarea display', async () => {
    const { user } = renderEditor();
    await startField(user, 'Text');

    await user.click(screen.getByRole('radio', { name: 'Textarea' }));

    expect(textbox('Default value').tagName).toBe('TEXTAREA');
  });

  it('saves the text options', async () => {
    const { user, onSave } = renderEditor();
    await startField(user, 'Text');
    await user.click(screen.getByRole('radio', { name: 'Textarea' }));
    await user.type(textbox('Max characters'), '120');
    await user.type(textbox('Default value'), 'Untitled');

    await save(user);

    expect(onSave).toHaveBeenCalledWith(
      expect.objectContaining({
        text: { display: 'textarea', maxLength: 120, defaultValue: 'Untitled' },
      }),
      expect.anything()
    );
  });
});

describe('boolean options', () => {
  it('defaults to false', async () => {
    const { user } = renderEditor();

    await pickType(user, 'Boolean');

    expect(screen.getByRole('radio', { name: 'False' })).toBeChecked();
  });

  it('saves the default value', async () => {
    const { user, onSave } = renderEditor();
    await startField(user, 'Boolean', 'Featured');
    await user.click(screen.getByRole('radio', { name: 'True' }));

    await save(user);

    expect(onSave).toHaveBeenCalledWith(
      expect.objectContaining({ boolean: { defaultValue: 'true' } }),
      expect.anything()
    );
  });
});

describe('JSON options', () => {
  it('rejects a default value that is not valid JSON', async () => {
    const { user } = renderEditor();
    await startField(user, 'JSON', 'Metadata');
    await user.type(textbox('Default value'), 'not json');

    await user.tab();

    expect(screen.getByText('Default value must be valid JSON')).toBeInTheDocument();
  });

  it('saves a valid JSON default value', async () => {
    const { user, onSave } = renderEditor();
    await startField(user, 'JSON', 'Metadata');
    await user.click(textbox('Default value'));
    await user.paste('{"featured":true}');

    await save(user);

    expect(onSave).toHaveBeenCalledWith(
      expect.objectContaining({ json: { defaultValue: '{"featured":true}' } }),
      expect.anything()
    );
  });
});

describe('select options', () => {
  async function fillOption(user: User, index: number, value: string, label: string) {
    await user.type(textbox(`Value of option ${index}`), value);
    await user.type(textbox(`Label of option ${index}`), label);
  }

  function optionValues() {
    return screen
      .getAllByRole('textbox', { name: /^Value of option/ })
      .map((input) => (input as HTMLInputElement).value);
  }

  it('starts with two empty options without errors', async () => {
    const { user } = renderEditor();

    await pickType(user, 'Select');

    expect(optionValues()).toEqual(['', '']);
    expect(screen.queryByText('Value is required')).not.toBeInTheDocument();
  });

  it('adds an option', async () => {
    const { user } = renderEditor();
    await pickType(user, 'Select');

    await user.click(screen.getByRole('button', { name: 'Add option' }));

    expect(optionValues()).toEqual(['', '', '']);
  });

  it('requires at least two options and focuses Add option', async () => {
    const { user } = renderEditor();
    await startField(user, 'Select', 'Status');
    await fillOption(user, 1, 'draft', 'Draft');
    await user.click(screen.getByRole('button', { name: 'Remove option 2' }));

    await save(user);

    expect(screen.getByText('Add at least two options')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add option' })).toHaveFocus();
  });

  it('rejects duplicate option values', async () => {
    const { user } = renderEditor();
    await startField(user, 'Select', 'Status');
    await fillOption(user, 1, 'draft', 'Draft');
    await fillOption(user, 2, 'draft', 'Another draft');

    await save(user);

    expect(screen.getByText('Option values must be unique')).toBeInTheDocument();
  });

  it('requires a value and a label for every option', async () => {
    const { user } = renderEditor();
    await startField(user, 'Select', 'Status');

    await save(user);

    expect(screen.getAllByText('Value is required')).toHaveLength(2);
    expect(screen.getAllByText('Label is required')).toHaveLength(2);
  });

  it('reorders options with the keyboard', async () => {
    const { user } = renderEditor();
    await startField(user, 'Select', 'Status');
    await fillOption(user, 1, 'draft', 'Draft');
    await fillOption(user, 2, 'published', 'Published');
    mockSortableLayout();

    screen.getByRole('button', { name: 'Reorder option 1' }).focus();
    await user.keyboard('[Space]');
    await user.keyboard('{ArrowDown}');
    await user.keyboard('[Space]');

    expect(optionValues()).toEqual(['published', 'draft']);
  });

  it('offers the options as the default option', async () => {
    const { user } = renderEditor();
    await startField(user, 'Select', 'Status');
    await fillOption(user, 1, 'draft', 'Draft');
    await fillOption(user, 2, 'published', 'Published');

    await user.click(combobox('Default option'));

    expect(screen.getAllByRole('option').map((option) => option.textContent)).toEqual([
      'Draft',
      'Published',
    ]);
  });

  it('clears the default option when its option is removed', async () => {
    const { user } = renderEditor();
    await startField(user, 'Select', 'Status');
    await fillOption(user, 1, 'draft', 'Draft');
    await fillOption(user, 2, 'published', 'Published');
    await user.click(combobox('Default option'));
    await user.click(screen.getByRole('option', { name: 'Draft' }));

    await user.click(screen.getByRole('button', { name: 'Remove option 1' }));

    expect(combobox('Default option')).toHaveValue('');
  });

  it('saves the options in display order with the default option', async () => {
    const { user, onSave } = renderEditor();
    await startField(user, 'Select', 'Status');
    await fillOption(user, 1, 'draft', 'Draft');
    await fillOption(user, 2, 'published', 'Published');
    await user.click(combobox('Default option'));
    await user.click(screen.getByRole('option', { name: 'Published' }));

    await save(user);

    expect(onSave).toHaveBeenCalledWith(
      expect.objectContaining({
        select: {
          options: [
            expect.objectContaining({ value: 'draft', label: 'Draft' }),
            expect.objectContaining({ value: 'published', label: 'Published' }),
          ],
          defaultValue: 'published',
        },
      }),
      expect.anything()
    );
  });
});

describe('reference options', () => {
  it('requires a target model', async () => {
    const { user } = renderEditor();
    await startField(user, 'Reference', 'Author');

    await save(user);

    expect(screen.getByText('Target model is required')).toBeInTheDocument();
  });

  it('offers the four models as targets', async () => {
    const { user } = renderEditor();
    await pickType(user, 'Reference');

    await user.click(combobox('Target model'));

    expect(screen.getAllByRole('option').map((option) => option.textContent)).toEqual([
      'Author',
      'Category',
      'Page',
      'Product',
    ]);
  });

  it('saves the target model and allow multiple', async () => {
    const { user, onSave } = renderEditor();
    await startField(user, 'Reference', 'Related products');
    await user.click(combobox('Target model'));
    await user.click(screen.getByRole('option', { name: 'Product' }));
    await user.click(screen.getByRole('checkbox', { name: 'Allow multiple' }));

    await save(user);

    expect(onSave).toHaveBeenCalledWith(
      expect.objectContaining({ reference: { targetModel: 'product', multiple: true } }),
      expect.anything()
    );
  });
});
