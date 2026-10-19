import {
  IconBraces,
  IconFile,
  IconLink,
  IconLetterCase,
  IconList,
  IconPhoto,
  IconTextCaption,
  IconToggleLeft,
  type Icon,
} from '@tabler/icons-react';
import type { FieldType } from './types';

export interface FieldTypeDefinition {
  value: FieldType;
  label: string;
  description: string;
  icon: Icon;
  color: string;
}

export const FIELD_TYPES: FieldTypeDefinition[] = [
  {
    value: 'text',
    label: 'Text',
    description: 'Titles, names and other plain text',
    icon: IconLetterCase,
    color: 'blue',
  },
  {
    value: 'richText',
    label: 'Rich text',
    description: 'Formatted text with headings, links and lists',
    icon: IconTextCaption,
    color: 'violet',
  },
  {
    value: 'boolean',
    label: 'Boolean',
    description: 'A true or false switch',
    icon: IconToggleLeft,
    color: 'teal',
  },
  {
    value: 'json',
    label: 'JSON',
    description: 'Structured data stored as JSON',
    icon: IconBraces,
    color: 'orange',
  },
  {
    value: 'select',
    label: 'Select',
    description: 'One value from a list of options',
    icon: IconList,
    color: 'cyan',
  },
  {
    value: 'image',
    label: 'Image',
    description: 'A picture from the media library',
    icon: IconPhoto,
    color: 'green',
  },
  {
    value: 'file',
    label: 'File',
    description: 'A document or any other uploaded file',
    icon: IconFile,
    color: 'yellow',
  },
  {
    value: 'reference',
    label: 'Reference',
    description: 'A link to entries of another model',
    icon: IconLink,
    color: 'grape',
  },
];

export const REFERENCE_TARGETS = ['Author', 'Category', 'Page', 'Product'];

export function getFieldType(type: FieldType) {
  return FIELD_TYPES.find((item) => item.value === type)!;
}
