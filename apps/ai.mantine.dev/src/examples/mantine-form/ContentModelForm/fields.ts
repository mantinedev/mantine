import { randomId } from '@mantine/hooks';
import type { FieldType, ModelField, SelectOption } from './types';

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

export function createSelectOption(): SelectOption {
  return { id: randomId(), value: '', label: '' };
}

export function createField(type: FieldType): ModelField {
  return {
    id: randomId(),
    type,
    label: '',
    key: '',
    description: '',
    required: false,
    text: { display: 'input', maxLength: '', defaultValue: '' },
    boolean: { defaultValue: 'false' },
    json: { defaultValue: '' },
    select: { options: [createSelectOption(), createSelectOption()], defaultValue: null },
    reference: { targetModel: null, multiple: false },
  };
}
