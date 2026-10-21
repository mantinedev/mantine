import type React from 'react';
import {
  hasLength,
  isJSONString,
  isNotEmpty,
  isNotEmptyHTML,
  isOneOf,
  matches,
  type FormRulesRecord,
} from '@mantine/form';
import { REFERENCE_ENTRIES } from './models';
import type {
  BooleanModelField,
  ContentModel,
  EntryValues,
  FieldType,
  FieldValue,
  FileModelField,
  ImageModelField,
  JsonModelField,
  ModelField,
  ReferenceModel,
  ReferenceModelField,
  RichTextModelField,
  SelectModelField,
  TextModelField,
} from './types';

export const LANGUAGES = [
  { value: 'en-US', label: 'English (en-US)' },
  { value: 'de-DE', label: 'German (de-DE)' },
  { value: 'fr-FR', label: 'French (fr-FR)' },
  { value: 'es-ES', label: 'Spanish (es-ES)' },
];

export const DEFAULT_LANGUAGE = 'en-US';

export const SUGGESTED_TAGS = ['featured', 'evergreen', 'seasonal', 'internal', 'draft-review'];

export const MAX_TAGS = 10;

export const REFERENCE_MODELS: { value: ReferenceModel; label: string }[] = [
  { value: 'author', label: 'Author' },
  { value: 'category', label: 'Category' },
  { value: 'page', label: 'Page' },
  { value: 'product', label: 'Product' },
];

export const IMAGE_MIME_PREFIX = 'image/';

type Rule = (value: any) => React.ReactNode;

function compose(...rules: (Rule | false)[]): Rule {
  const active = rules.filter((rule): rule is Rule => rule !== false);
  return (value) => {
    for (const rule of active) {
      const error = rule(value);
      if (error) {
        return error;
      }
    }
    return null;
  };
}

function optional(rule: Rule): Rule {
  return (value) => (value === '' || value === null ? null : rule(value));
}

const isFile = (value: FieldValue): value is File => value instanceof File;

export const isImageFile = (error: string) => (value: FieldValue) =>
  isFile(value) && !value.type.startsWith(IMAGE_MIME_PREFIX) ? error : null;

const hasNoDuplicates = (error: string) => (value: string[]) =>
  new Set(value.map((item) => item.toLowerCase())).size === value.length ? null : error;

const requiredError = (field: ModelField) => `${field.label} is required`;

const referencesExist = (targetModel: ReferenceModel | null, error: string) => (value: string[]) =>
  value.every((key) =>
    REFERENCE_ENTRIES.some(
      (entry) => entry.key === key && (targetModel === null || entry.model === targetModel)
    )
  )
    ? null
    : error;

const textRule = (field: TextModelField) =>
  compose(
    field.required && isNotEmpty(requiredError(field)),
    field.maxLength !== null &&
      hasLength(
        { max: field.maxLength },
        `${field.label} must be at most ${field.maxLength} characters`
      )
  );

const richTextRule = (field: RichTextModelField) =>
  compose(field.required && isNotEmptyHTML(requiredError(field)));

const booleanRule = (field: BooleanModelField) =>
  compose(field.required && isNotEmpty(`${field.label} must be checked`));

const jsonRule = (field: JsonModelField) =>
  compose(
    field.required && isNotEmpty(requiredError(field)),
    optional(isJSONString(`${field.label} must be valid JSON`))
  );

const selectRule = (field: SelectModelField) =>
  compose(
    field.required && isNotEmpty(requiredError(field)),
    optional(
      isOneOf(
        field.options.map((option) => option.value),
        `${field.label} must be one of the options`
      )
    )
  );

const imageRule = (field: ImageModelField) =>
  compose(
    field.required && isNotEmpty(requiredError(field)),
    isImageFile(`${field.label} must be an image`)
  );

const fileRule = (field: FileModelField) =>
  compose(field.required && isNotEmpty(requiredError(field)));

const referenceRule = (field: ReferenceModelField) =>
  compose(
    field.required &&
      isNotEmpty(field.allowMultiple ? 'Select at least one entry' : 'Select an entry'),
    !field.allowMultiple && hasLength({ max: 1 }, 'Only one entry can be selected'),
    referencesExist(field.targetModel, 'Selected entry is not available')
  );

const FIELD_RULES: { [Type in FieldType]: (field: Extract<ModelField, { type: Type }>) => Rule } = {
  text: textRule,
  richText: richTextRule,
  boolean: booleanRule,
  json: jsonRule,
  select: selectRule,
  image: imageRule,
  file: fileRule,
  reference: referenceRule,
};

export function buildFieldRule(field: ModelField): Rule {
  return (FIELD_RULES[field.type] as (field: ModelField) => Rule)(field);
}

export function buildValidate(model: ContentModel): FormRulesRecord<EntryValues> {
  return {
    key: compose(
      isNotEmpty('Content key is required'),
      matches(/^[a-z0-9-]+$/, 'Use lowercase letters, digits and dashes')
    ),
    language: compose(
      isNotEmpty('Language is required'),
      isOneOf(
        LANGUAGES.map((language) => language.value),
        'Select a supported language'
      )
    ),
    tags: compose(
      hasLength({ max: MAX_TAGS }, `Use at most ${MAX_TAGS} tags`),
      hasNoDuplicates('Tags must be unique')
    ),
    fields: Object.fromEntries(model.fields.map((field) => [field.key, buildFieldRule(field)])),
  };
}

const BLUR_VALIDATED: ModelField['type'][] = ['text', 'json'];

export function getBlurValidatedPaths(model: ContentModel) {
  return [
    'key',
    ...model.fields
      .filter((field) => BLUR_VALIDATED.includes(field.type))
      .map((field) => `fields.${field.key}`),
  ];
}
