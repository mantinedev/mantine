import type {
  ContentModel,
  EntryPayload,
  EntryPayloadValue,
  EntryValues,
  FieldValue,
  ModelField,
} from './types';
import { DEFAULT_LANGUAGE } from './validation';

export function formatJson(value: string) {
  try {
    return JSON.stringify(JSON.parse(value), null, 2);
  } catch {
    return value;
  }
}

function getInitialFieldValue(field: ModelField): FieldValue {
  switch (field.type) {
    case 'text':
      return field.defaultValue;
    case 'json':
      return field.defaultValue.trim() === '' ? '' : formatJson(field.defaultValue);
    case 'boolean':
      return field.defaultValue;
    case 'select':
      return field.defaultValue;
    case 'reference':
      return [];
    case 'richText':
      return '';
    case 'image':
    case 'file':
      return null;
  }
}

export function buildInitialValues(model: ContentModel): EntryValues {
  return {
    key: '',
    language: DEFAULT_LANGUAGE,
    tags: [],
    fields: Object.fromEntries(
      model.fields.map((field) => [field.key, getInitialFieldValue(field)])
    ),
  };
}

const isEmptyHtml = (html: string) => html.replace(/<[^>]*>/g, '').trim() === '';

function toPayloadValue(field: ModelField, value: FieldValue): EntryPayloadValue {
  switch (field.type) {
    case 'json':
      return typeof value === 'string' && value.trim() !== '' ? JSON.parse(value) : null;
    case 'richText':
      return typeof value === 'string' && !isEmptyHtml(value) ? value : '';
    case 'image':
    case 'file':
      return value instanceof File
        ? { name: value.name, size: value.size, type: value.type }
        : null;
    case 'reference': {
      const keys = Array.isArray(value) ? value : [];
      return field.allowMultiple ? keys : (keys[0] ?? null);
    }
    default:
      return value;
  }
}

export function buildEntryPayload(model: ContentModel, values: EntryValues): EntryPayload {
  return {
    key: values.key,
    language: values.language,
    tags: values.tags,
    model: model.key,
    values: Object.fromEntries(
      model.fields.map((field) => [field.key, toPayloadValue(field, values.fields[field.key])])
    ),
  };
}
