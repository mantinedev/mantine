import { render, screen, userEvent } from '@test-utils';
import { Notifications } from '@mantine/notifications';
import { ContentEntryForm } from './ContentEntryForm';
import type {
  BooleanFieldSchema,
  ContentField,
  ContentModel,
  FileFieldSchema,
  ImageFieldSchema,
  JsonFieldSchema,
  ReferenceFieldSchema,
  RichTextFieldSchema,
  SelectFieldSchema,
  TextFieldSchema,
} from './types';

export type User = ReturnType<typeof userEvent.setup>;

const base = { description: '', required: false };

export const textField = (overrides: Partial<TextFieldSchema> = {}): TextFieldSchema => ({
  ...base,
  type: 'text',
  key: 'title',
  label: 'Title',
  display: 'input',
  maxLength: null,
  defaultValue: '',
  ...overrides,
});

export const richTextField = (
  overrides: Partial<RichTextFieldSchema> = {}
): RichTextFieldSchema => ({ ...base, type: 'richText', key: 'body', label: 'Body', ...overrides });

export const booleanField = (overrides: Partial<BooleanFieldSchema> = {}): BooleanFieldSchema => ({
  ...base,
  type: 'boolean',
  key: 'featured',
  label: 'Featured',
  defaultValue: false,
  ...overrides,
});

export const jsonField = (overrides: Partial<JsonFieldSchema> = {}): JsonFieldSchema => ({
  ...base,
  type: 'json',
  key: 'settings',
  label: 'Settings',
  defaultValue: '',
  ...overrides,
});

export const selectField = (overrides: Partial<SelectFieldSchema> = {}): SelectFieldSchema => ({
  ...base,
  type: 'select',
  key: 'theme',
  label: 'Theme',
  options: [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
  ],
  defaultValue: null,
  ...overrides,
});

export const imageField = (overrides: Partial<ImageFieldSchema> = {}): ImageFieldSchema => ({
  ...base,
  type: 'image',
  key: 'cover',
  label: 'Cover image',
  ...overrides,
});

export const fileField = (overrides: Partial<FileFieldSchema> = {}): FileFieldSchema => ({
  ...base,
  type: 'file',
  key: 'attachment',
  label: 'Attachment',
  ...overrides,
});

export const referenceField = (
  overrides: Partial<ReferenceFieldSchema> = {}
): ReferenceFieldSchema => ({
  ...base,
  type: 'reference',
  key: 'author',
  label: 'Author',
  targetModel: 'author',
  multiple: false,
  ...overrides,
});

export const modelWith = (...fields: ContentField[]): ContentModel => ({
  name: 'Test model',
  key: 'test_model',
  fields,
});

export function renderForm(
  model: ContentModel,
  userOptions?: Parameters<typeof userEvent.setup>[0]
) {
  const user = userEvent.setup(userOptions);
  const onSubmit = jest.fn();
  render(
    <>
      <Notifications />
      <ContentEntryForm model={model} onSubmit={onSubmit} />
    </>
  );
  return { user, onSubmit };
}

export async function fillKey(user: User, key = 'hello-world') {
  await user.type(screen.getByRole('textbox', { name: 'Content key' }), key);
}

export async function submit(user: User) {
  await user.click(screen.getByRole('button', { name: 'Create entry' }));
}
