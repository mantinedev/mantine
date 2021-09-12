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
  video: string;
  alignCenter: string;
  alignLeft: string;
  alignRight: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  sub: string;
  sup: string;
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
  video: 'Embed video',
  alignCenter: 'Align text to center',
  alignLeft: 'Align text to left',
  alignRight: 'Align text to right',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  h4: 'Heading 4',
  h5: 'Heading 5',
  h6: 'Heading 6',
  sup: 'Super script',
  sub: 'Sub script',
};
