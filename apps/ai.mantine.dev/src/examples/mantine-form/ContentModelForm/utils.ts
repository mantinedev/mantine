import { randomId } from '@mantine/hooks';
import type { ContentField, ContentModelValues, FieldType, FieldValues } from './types';

export const KEY_PATTERN = /^[a-z0-9_]+$/;
export const KEY_ERROR = 'Use lowercase letters, digits and underscores';

export function slugify(value: string) {
  return value
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

export function createSelectOption() {
  return { id: randomId(), value: '', label: '' };
}

export function createFieldValues(type: FieldType): FieldValues {
  return {
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
    selectOptions: type === 'select' ? [createSelectOption(), createSelectOption()] : [],
    selectDefault: null,
    referenceModel: null,
    allowMultiple: false,
  };
}

function getFieldOptions(field: ContentField) {
  switch (field.type) {
    case 'text':
      return {
        display: field.textDisplay,
        maxLength: field.maxLength === '' ? null : Number(field.maxLength),
        defaultValue: field.textDefault === '' ? null : field.textDefault,
      };
    case 'boolean':
      return { defaultValue: field.booleanDefault === 'true' };
    case 'json':
      return {
        defaultValue: field.jsonDefault.trim() === '' ? null : JSON.parse(field.jsonDefault),
      };
    case 'select':
      return {
        options: field.selectOptions.map(({ value, label }) => ({ value, label })),
        defaultValue: field.selectDefault,
      };
    case 'reference':
      return { targetModel: field.referenceModel, allowMultiple: field.allowMultiple };
    default:
      return {};
  }
}

export function toModelJson(values: ContentModelValues) {
  return {
    name: values.name.trim(),
    key: values.key,
    description: values.description.trim(),
    fields: values.fields.map((field) => ({
      type: field.type,
      label: field.label.trim(),
      key: field.key,
      description: field.description.trim(),
      required: field.required,
      options: getFieldOptions(field),
    })),
  };
}
