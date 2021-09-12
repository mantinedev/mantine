export interface RichTextEditorLabels {
  bold: string;
  italic: string;
  underline: string;
  strike: string;
  link: string;
  unorderedList: string;
  orderedList: string;
  save: string;
  clean: string;
  'align-center': string;
  'align-left': string;
  'align-right': string;
}

export const DEFAULT_LABELS: RichTextEditorLabels = {
  bold: 'Bold',
  italic: 'Italic',
  underline: 'Underline',
  strike: 'Strikethrough',
  link: 'Link',
  unorderedList: 'Bullet list',
  orderedList: 'Ordered list',
  save: 'Save',
  clean: 'Clean formatting',
  'align-center': 'Align text to center',
  'align-left': 'Align text to left',
  'align-right': 'Align text to right',
};
