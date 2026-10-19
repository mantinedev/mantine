import { randomId } from '@mantine/hooks';
import type {
  ContentModelPayload,
  ContentModelValues,
  FieldPayload,
  FieldType,
  FieldValues,
  SelectOption,
} from './types';

export const KEY_PATTERN = /^[a-z0-9_]+$/;

export function slugify(value: string) {
  return value
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

export function createOption(): SelectOption {
  return { id: randomId(), value: '', label: '' };
}

export function createField(type: FieldType): FieldValues {
  return {
    id: randomId(),
    type,
    label: '',
    key: '',
    description: '',
    required: false,
    textDisplay: 'input',
    maxLength: '',
    textDefault: '',
    booleanDefault: 'false',
    jsonDefault: '',
    options: [createOption(), createOption()],
    defaultOption: null,
    targetModel: null,
    allowMultiple: false,
  };
}

function toFieldPayload(field: FieldValues): FieldPayload {
  const base = {
    label: field.label.trim(),
    key: field.key,
    description: field.description.trim(),
    required: field.required,
  };

  switch (field.type) {
    case 'text':
      return {
        ...base,
        type: 'text',
        display: field.textDisplay,
        maxLength: field.maxLength === '' ? null : Number(field.maxLength),
        defaultValue: field.textDefault,
      };
    case 'boolean':
      return { ...base, type: 'boolean', defaultValue: field.booleanDefault === 'true' };
    case 'json':
      return {
        ...base,
        type: 'json',
        defaultValue: field.jsonDefault.trim() === '' ? null : JSON.parse(field.jsonDefault),
      };
    case 'select':
      return {
        ...base,
        type: 'select',
        options: field.options.map(({ value, label }) => ({ value, label })),
        defaultValue: field.defaultOption,
      };
    case 'reference':
      return {
        ...base,
        type: 'reference',
        targetModel: field.targetModel!,
        allowMultiple: field.allowMultiple,
      };
    default:
      return { ...base, type: field.type };
  }
}

export function toModelPayload(values: ContentModelValues): ContentModelPayload {
  return {
    name: values.name.trim(),
    key: values.key,
    description: values.description.trim(),
    fields: values.fields.map(toFieldPayload),
  };
}
