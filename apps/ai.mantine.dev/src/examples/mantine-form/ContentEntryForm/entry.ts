import { DEFAULT_LANGUAGE } from './data';
import type {
  ContentEntry,
  ContentField,
  ContentModel,
  EntryValues,
  FieldOfType,
  FieldType,
  FieldValue,
  FileSummary,
} from './types';

export const fieldPath = (field: ContentField) => `values.${field.key}` as const;

const prettyJson = (value: string) => {
  try {
    return JSON.stringify(JSON.parse(value), null, 2);
  } catch {
    return value;
  }
};

const FIELD_INITIAL_VALUES: { [T in FieldType]: (field: FieldOfType<T>) => FieldValue } = {
  text: (field) => field.defaultValue,
  richText: () => '',
  boolean: (field) => field.defaultValue,
  json: (field) => (field.defaultValue.trim() === '' ? '' : prettyJson(field.defaultValue)),
  select: (field) => field.defaultValue,
  image: () => null,
  file: () => null,
  reference: () => [],
};

const summarizeFile = (file: File | null): FileSummary | null =>
  file && { name: file.name, size: file.size, type: file.type };

const FIELD_OUTPUTS: { [T in FieldType]: (value: any, field: FieldOfType<T>) => unknown } = {
  text: (value: string) => value,
  richText: (value: string) => value,
  boolean: (value: boolean) => value,
  json: (value: string) => (value.trim() === '' ? null : JSON.parse(value)),
  select: (value: string | null) => value,
  image: summarizeFile,
  file: summarizeFile,
  reference: (value: string[], field) => (field.multiple ? value : (value[0] ?? null)),
};

export const buildInitialValues = (model: ContentModel): EntryValues => ({
  key: '',
  language: DEFAULT_LANGUAGE,
  tags: [],
  values: Object.fromEntries(
    model.fields.map((field) => [
      field.key,
      (FIELD_INITIAL_VALUES[field.type] as (field: ContentField) => FieldValue)(field),
    ])
  ),
});

export const buildEntry = (model: ContentModel, values: EntryValues): ContentEntry => ({
  key: values.key,
  language: values.language,
  tags: values.tags,
  model: model.key,
  values: Object.fromEntries(
    model.fields.map((field) => [
      field.key,
      (FIELD_OUTPUTS[field.type] as (value: FieldValue, field: ContentField) => unknown)(
        values.values[field.key],
        field
      ),
    ])
  ),
});
