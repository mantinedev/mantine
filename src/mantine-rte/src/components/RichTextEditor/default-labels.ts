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
};
