import type { ReactNode } from 'react';
import { isJSONString, isNotEmpty, isNotEmptyHTML, isOneOf, matches } from '@mantine/form';
import { LANGUAGES, MAX_TAGS } from './data';
import type { ContentField, ContentModel, FieldOfType, FieldType } from './types';

type Rule = (value: any) => ReactNode | null;

const firstError =
  (...rules: (Rule | false)[]): Rule =>
  (value) => {
    for (const rule of rules) {
      const error = rule && rule(value);
      if (error) {
        return error;
      }
    }
    return null;
  };

const required = (field: ContentField) =>
  field.required && isNotEmpty(`${field.label} is required`);

const textRule = (field: FieldOfType<'text'>) =>
  firstError(
    required(field),
    field.maxLength !== null &&
      ((value: string) =>
        value.length > field.maxLength!
          ? `${field.label} must be at most ${field.maxLength} characters`
          : null)
  );

const richTextRule = (field: FieldOfType<'richText'>) =>
  firstError(field.required && isNotEmptyHTML(`${field.label} is required`));

const booleanRule = (field: FieldOfType<'boolean'>) =>
  firstError(
    field.required && ((value: boolean) => (value ? null : `${field.label} must be checked`))
  );

const jsonRule = (field: FieldOfType<'json'>) =>
  firstError(required(field), (value: string) =>
    value.trim() === '' ? null : isJSONString(`${field.label} must be valid JSON`)(value)
  );

const selectRule = (field: FieldOfType<'select'>) =>
  firstError(required(field), (value: string | null) =>
    value === null
      ? null
      : isOneOf(
          field.options.map((option) => option.value),
          `Pick one of the ${field.label} options`
        )(value)
  );

const imageRule = (field: FieldOfType<'image'>) =>
  firstError(required(field), (value: File | null) =>
    value && !value.type.startsWith('image/') ? `${field.label} must be an image` : null
  );

const fileRule = (field: FieldOfType<'file'>) => firstError(required(field));

const referenceRule = (field: FieldOfType<'reference'>) =>
  firstError(
    field.required && isNotEmpty(field.multiple ? `Select at least one entry` : `Select an entry`),
    !field.multiple && ((value: string[]) => (value.length > 1 ? 'Select only one entry' : null))
  );

const FIELD_RULES: { [T in FieldType]: (field: FieldOfType<T>) => Rule } = {
  text: textRule,
  richText: richTextRule,
  boolean: booleanRule,
  json: jsonRule,
  select: selectRule,
  image: imageRule,
  file: fileRule,
  reference: referenceRule,
};

const fieldRule = (field: ContentField) =>
  (FIELD_RULES[field.type] as (field: ContentField) => Rule)(field);

const keyRule = firstError(
  isNotEmpty('Content key is required'),
  matches(/^[a-z0-9-]+$/, 'Use lowercase letters, digits and dashes only')
);

const languageRule = firstError(
  isNotEmpty('Language is required'),
  isOneOf(
    LANGUAGES.map((language) => language.value),
    'Pick a language from the list'
  )
);

const tagsRule = (tags: string[]) => {
  if (tags.length > MAX_TAGS) {
    return `Add at most ${MAX_TAGS} tags`;
  }
  return new Set(tags).size !== tags.length ? 'Tags must be unique' : null;
};

// Keys follow the visual order, so the first error key is the first invalid field
export const buildRules = (model: ContentModel) => ({
  key: keyRule,
  language: languageRule,
  tags: tagsRule,
  values: Object.fromEntries(model.fields.map((field) => [field.key, fieldRule(field)])),
});

const BLUR_VALIDATED: FieldType[] = ['text', 'json'];

export const buildBlurPaths = (model: ContentModel) => [
  'key',
  ...model.fields
    .filter((field) => BLUR_VALIDATED.includes(field.type))
    .map((field) => `values.${field.key}`),
];
