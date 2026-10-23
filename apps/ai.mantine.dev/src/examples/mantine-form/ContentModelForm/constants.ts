import {
  IconAlignLeft,
  IconBraces,
  IconLetterT,
  IconLink,
  IconListDetails,
  IconPaperclip,
  IconPhoto,
  IconToggleLeft,
  type Icon,
} from '@tabler/icons-react';
import type { FieldType } from './types';

export interface FieldTypeDefinition {
  label: string;
  description: string;
  icon: Icon;
  color: string;
}

export const FIELD_TYPES: Record<FieldType, FieldTypeDefinition> = {
  text: {
    label: 'Text',
    description: 'Titles, names and other plain text',
    icon: IconLetterT,
    color: 'blue',
  },
  rich_text: {
    label: 'Rich text',
    description: 'Formatted text with headings, links and lists',
    icon: IconAlignLeft,
    color: 'violet',
  },
  boolean: {
    label: 'Boolean',
    description: 'A yes or no value',
    icon: IconToggleLeft,
    color: 'teal',
  },
  json: {
    label: 'JSON',
    description: 'Structured data stored as JSON',
    icon: IconBraces,
    color: 'orange',
  },
  select: {
    label: 'Select',
    description: 'One value from a list of options',
    icon: IconListDetails,
    color: 'cyan',
  },
  image: {
    label: 'Image',
    description: 'A picture from the media library',
    icon: IconPhoto,
    color: 'green',
  },
  file: {
    label: 'File',
    description: 'A document or any other uploaded file',
    icon: IconPaperclip,
    color: 'yellow',
  },
  reference: {
    label: 'Reference',
    description: 'A link to entries of another model',
    icon: IconLink,
    color: 'grape',
  },
};

export const FIELD_TYPE_ORDER = Object.keys(FIELD_TYPES) as FieldType[];

export const REFERENCE_MODELS = [
  { value: 'author', label: 'Author' },
  { value: 'category', label: 'Category' },
  { value: 'page', label: 'Page' },
  { value: 'product', label: 'Product' },
];

export const MODEL_NAME_MAX_LENGTH = 60;
export const MODEL_DESCRIPTION_MAX_LENGTH = 200;
export const TEXT_MAX_LENGTH_LIMIT = 100000;
