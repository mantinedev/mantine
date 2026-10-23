import { screen, waitFor, within } from '@test-utils';
import { notifications } from '@mantine/notifications';
import { BLOG_POST_MODEL } from './data';
import {
  booleanField,
  fillKey,
  jsonField,
  modelWith,
  referenceField,
  renderForm,
  richTextField,
  selectField,
  submit,
  textField,
} from './test-helpers';

afterEach(() => {
  notifications.clean();
});

describe('entry settings', () => {
  it('starts with English selected as the language', () => {
    renderForm(modelWith(textField()));
    expect(screen.getByRole('combobox', { name: 'Language' })).toHaveValue('English (en-US)');
  });

  it('shows an error and focuses the content key when submitted without it', async () => {
    const { user } = renderForm(modelWith(textField()));
    await submit(user);
    expect(screen.getByText('Content key is required')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Content key' })).toHaveFocus();
  });

  it('rejects a content key with uppercase letters or spaces on blur', async () => {
    const { user } = renderForm(modelWith(textField()));
    await fillKey(user, 'Hello World');
    await user.tab();
    expect(screen.getByText('Use lowercase letters, digits and dashes only')).toBeInTheDocument();
  });

  it('removes the content key error once the key is fixed', async () => {
    const { user } = renderForm(modelWith(textField()));
    await fillKey(user, 'Hello');
    await user.tab();
    const input = screen.getByRole('textbox', { name: 'Content key' });
    await user.clear(input);
    await user.type(input, 'hello');
    expect(
      screen.queryByText('Use lowercase letters, digits and dashes only')
    ).not.toBeInTheDocument();
  });

  it('submits the chosen language and tags', async () => {
    const { user, onSubmit } = renderForm(modelWith(textField()));
    await fillKey(user);
    await user.click(screen.getByRole('combobox', { name: 'Language' }));
    await user.click(screen.getByRole('option', { name: 'German (de-DE)' }));
    await user.click(screen.getByRole('combobox', { name: 'Tags' }));
    await user.click(screen.getByRole('option', { name: 'news' }));
    await user.type(screen.getByRole('combobox', { name: 'Tags' }), 'launch{Enter}');
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ language: 'de-DE', tags: ['news', 'launch'] })
    );
  });
});

describe('fields from the model', () => {
  it('renders the fields in model order', () => {
    renderForm(
      modelWith(
        selectField({ key: 'a', label: 'Theme' }),
        textField({ key: 'b', label: 'Title' }),
        booleanField({ key: 'c', label: 'Featured' })
      )
    );
    const theme = screen.getByRole('combobox', { name: 'Theme' });
    const title = screen.getByRole('textbox', { name: 'Title' });
    const featured = screen.getByRole('checkbox', { name: 'Featured' });
    expect(theme.compareDocumentPosition(title)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(title.compareDocumentPosition(featured)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });

  it('shows the field description', () => {
    renderForm(modelWith(textField({ description: 'Shown as the page heading' })));
    expect(screen.getByRole('textbox', { name: 'Title' })).toHaveAccessibleDescription(
      'Shown as the page heading'
    );
  });
});

describe('text field', () => {
  it('pre-fills the default value', () => {
    renderForm(modelWith(textField({ defaultValue: 'Build faster' })));
    expect(screen.getByRole('textbox', { name: 'Title' })).toHaveValue('Build faster');
  });

  it('renders a textarea when the display setting is textarea', () => {
    renderForm(modelWith(textField({ display: 'textarea' })));
    expect(screen.getByRole('textbox', { name: 'Title' }).tagName).toBe('TEXTAREA');
  });

  it('counts the characters against the max length', async () => {
    const { user } = renderForm(modelWith(textField({ maxLength: 20 })));
    await user.type(screen.getByRole('textbox', { name: 'Title' }), 'Hello');
    expect(screen.getByText('5/20')).toBeInTheDocument();
  });

  it('shows an error when required and empty', async () => {
    const { user } = renderForm(modelWith(textField({ required: true })));
    await fillKey(user);
    await submit(user);
    expect(screen.getByText('Title is required')).toBeInTheDocument();
  });

  it('rejects a value longer than the max length', async () => {
    const { user } = renderForm(modelWith(textField({ maxLength: 5, defaultValue: 'Too long' })));
    await fillKey(user);
    await submit(user);
    expect(screen.getByText('Title must be at most 5 characters')).toBeInTheDocument();
  });
});

describe('rich text field', () => {
  it('shows an error when required and empty', async () => {
    const { user } = renderForm(modelWith(richTextField({ required: true })));
    await fillKey(user);
    await submit(user);
    expect(screen.getByText('Body is required')).toBeInTheDocument();
  });

  it('submits the editor content as HTML', async () => {
    const { user, onSubmit } = renderForm(modelWith(richTextField({ required: true })));
    await fillKey(user);
    await user.click(await screen.findByRole('textbox', { name: 'Body' }));
    await user.keyboard('Hello world');
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ values: { body: '<p>Hello world</p>' } })
    );
  });

  it('has formatting controls for bold, italic, headings, lists and links', async () => {
    renderForm(modelWith(richTextField()));
    for (const name of [
      'Bold',
      'Italic',
      'Heading 2',
      'Heading 3',
      'Heading 4',
      'Bullet list',
      'Ordered list',
      'Link',
      'Remove link',
    ]) {
      expect(await screen.findByRole('button', { name })).toBeInTheDocument();
    }
  });
});

describe('boolean field', () => {
  it('starts with the default from the model', () => {
    renderForm(modelWith(booleanField({ defaultValue: true })));
    expect(screen.getByRole('checkbox', { name: 'Featured' })).toBeChecked();
  });

  it('submits the checkbox state', async () => {
    const { user, onSubmit } = renderForm(modelWith(booleanField()));
    await fillKey(user);
    await user.click(screen.getByRole('checkbox', { name: 'Featured' }));
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ values: { featured: true } }));
  });

  it('requires a required checkbox to be checked', async () => {
    const { user } = renderForm(modelWith(booleanField({ required: true })));
    await fillKey(user);
    await submit(user);
    expect(screen.getByText('Featured must be checked')).toBeInTheDocument();
  });
});

describe('json field', () => {
  it('pre-fills the default pretty-printed', () => {
    renderForm(modelWith(jsonField({ defaultValue: '{"a":1}' })));
    expect(screen.getByRole('textbox', { name: 'Settings' })).toHaveValue('{\n  "a": 1\n}');
  });

  it('pretty-prints valid JSON on blur', async () => {
    const { user } = renderForm(modelWith(jsonField()));
    await user.click(screen.getByRole('textbox', { name: 'Settings' }));
    await user.paste('{"b":[1,2]}');
    await user.tab();
    expect(screen.getByRole('textbox', { name: 'Settings' })).toHaveValue(
      '{\n  "b": [\n    1,\n    2\n  ]\n}'
    );
  });

  it('shows an error for invalid JSON', async () => {
    const { user } = renderForm(modelWith(jsonField()));
    await fillKey(user);
    await user.click(screen.getByRole('textbox', { name: 'Settings' }));
    await user.paste('{"b":');
    await submit(user);
    expect(screen.getByText('Settings must be valid JSON')).toBeInTheDocument();
  });

  it('submits the parsed JSON value', async () => {
    const { user, onSubmit } = renderForm(modelWith(jsonField({ defaultValue: '{"a":1}' })));
    await fillKey(user);
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ values: { settings: { a: 1 } } })
    );
  });
});

describe('select field', () => {
  it('starts with the default option', () => {
    renderForm(modelWith(selectField({ defaultValue: 'dark' })));
    expect(screen.getByRole('combobox', { name: 'Theme' })).toHaveValue('Dark');
  });

  it('shows an error when required and nothing is picked', async () => {
    const { user } = renderForm(modelWith(selectField({ required: true })));
    await fillKey(user);
    await submit(user);
    expect(screen.getByText('Theme is required')).toBeInTheDocument();
  });

  it('submits the picked option value', async () => {
    const { user, onSubmit } = renderForm(modelWith(selectField()));
    await fillKey(user);
    await user.click(screen.getByRole('combobox', { name: 'Theme' }));
    await user.click(screen.getByRole('option', { name: 'Light' }));
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ values: { theme: 'light' } }));
  });
});

describe('submit', () => {
  it('focuses the first invalid field in model order', async () => {
    const { user } = renderForm(
      modelWith(
        textField({ key: 'a', label: 'Title' }),
        selectField({ key: 'b', label: 'Theme', required: true }),
        textField({ key: 'c', label: 'Subtitle', required: true })
      )
    );
    await fillKey(user);
    await submit(user);
    expect(screen.getByRole('combobox', { name: 'Theme' })).toHaveFocus();
  });

  it('focuses the rich text editor when it is the first invalid field', async () => {
    const { user } = renderForm(modelWith(richTextField({ required: true })));
    await fillKey(user);
    await submit(user);
    expect(screen.getByRole('textbox', { name: 'Body' })).toHaveFocus();
  });

  it('focuses the reference input when it is the first invalid field', async () => {
    const { user } = renderForm(modelWith(referenceField({ required: true })));
    await fillKey(user);
    await submit(user);
    expect(screen.getByRole('textbox', { name: 'Author' })).toHaveFocus();
  });

  it('does not submit while a field is invalid', async () => {
    const { user, onSubmit } = renderForm(modelWith(textField({ required: true })));
    await fillKey(user);
    await submit(user);
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('shows a notification with the entry key and model name', async () => {
    const { user } = renderForm(modelWith(textField()));
    await fillKey(user);
    await submit(user);
    expect(await screen.findByText('Entry created')).toBeInTheDocument();
    expect(screen.getByText('hello-world · Test model')).toBeInTheDocument();
  });

  it('shows the entry JSON under the form', async () => {
    const { user } = renderForm(modelWith(textField({ defaultValue: 'Hello' })));
    await fillKey(user);
    await submit(user);
    const section = screen.getByRole('region', { name: 'Entry JSON' });
    expect(JSON.parse(within(section).getByText(/"key"/).textContent!)).toEqual({
      key: 'hello-world',
      language: 'en-US',
      tags: [],
      model: 'test_model',
      values: { title: 'Hello' },
    });
  });

  it('keeps the form values after submit', async () => {
    const { user } = renderForm(modelWith(textField()));
    await fillKey(user);
    await user.type(screen.getByRole('textbox', { name: 'Title' }), 'Hello');
    await submit(user);
    await waitFor(() => expect(screen.getByText('Entry created')).toBeInTheDocument());
    expect(screen.getByRole('textbox', { name: 'Content key' })).toHaveValue('hello-world');
    expect(screen.getByRole('textbox', { name: 'Title' })).toHaveValue('Hello');
  });

  it('shows every required error of the blog post model', async () => {
    const { user } = renderForm(BLOG_POST_MODEL);
    await fillKey(user);
    await submit(user);
    expect(screen.getByText('Title is required')).toBeInTheDocument();
    expect(screen.getByText('Body is required')).toBeInTheDocument();
    expect(screen.getByText('Select an entry')).toBeInTheDocument();
    expect(screen.getByText('Cover image is required')).toBeInTheDocument();
  });
});
