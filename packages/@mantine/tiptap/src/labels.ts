export interface RichTextEditorLabels {
  /** RichTextEditor.Bold control aria-label */
  boldControlLabel: string;

  /** RichTextEditor.Hr control aria-label */
  hrControlLabel: string;

  /** RichTextEditor.Italic control aria-label */
  italicControlLabel: string;

  /** RichTextEditor.Underline control aria-label */
  underlineControlLabel: string;

  /** RichTextEditor.Strike control aria-label */
  strikeControlLabel: string;

  /** RichTextEditor.ClearFormatting control aria-label */
  clearFormattingControlLabel: string;

  /** RichTextEditor.Link control aria-label */
  linkControlLabel: string;

  /** RichTextEditor.Unlink control aria-label */
  unlinkControlLabel: string;

  /** RichTextEditor.BulletList control aria-label */
  bulletListControlLabel: string;

  /** RichTextEditor.OrderedList control aria-label */
  orderedListControlLabel: string;

  /** RichTextEditor.H1 control aria-label */
  h1ControlLabel: string;

  /** RichTextEditor.H2 control aria-label */
  h2ControlLabel: string;

  /** RichTextEditor.H3 control aria-label */
  h3ControlLabel: string;

  /** RichTextEditor.H4 control aria-label */
  h4ControlLabel: string;

  /** RichTextEditor.H5 control aria-label */
  h5ControlLabel: string;

  /** RichTextEditor.H6 control aria-label */
  h6ControlLabel: string;

  /** RichTextEditor.Blockquote control aria-label */
  blockquoteControlLabel: string;

  /** RichTextEditor.AlignLeft control aria-label */
  alignLeftControlLabel: string;

  /** RichTextEditor.AlignCenter control aria-label */
  alignCenterControlLabel: string;

  /** RichTextEditor.AlignRight control aria-label */
  alignRightControlLabel: string;

  /** RichTextEditor.AlignJustify control aria-label */
  alignJustifyControlLabel: string;

  /** RichTextEditor.Code control aria-label */
  codeControlLabel: string;

  /** RichTextEditor.CodeBlock control aria-label */
  codeBlockControlLabel: string;

  /** RichTextEditor.Subscript control aria-label */
  subscriptControlLabel: string;

  /** RichTextEditor.Superscript control aria-label */
  superscriptControlLabel: string;

  /** RichTextEditor.ColorPicker control aria-label */
  colorPickerControlLabel: string;

  /** RichTextEditor.UnsetColor control aria-label */
  unsetColorControlLabel: string;

  /** RichTextEditor.Highlight control aria-label */
  highlightControlLabel: string;

  /** RichTextEditor.Undo control aria-label */
  undoControlLabel: string;

  /** RichTextEditor.Redo control aria-label */
  redoControlLabel: string;

  /** A function go get RichTextEditor.Color control aria-label based on color that control applies */
  colorControlLabel: (color: string) => string;

  /** RichTextEditor.SourceCode control aria-label */
  sourceCodeControlLabel: string;

  /** Aria-label for link editor url input */
  linkEditorInputLabel: string;

  /** Placeholder for link editor url input */
  linkEditorInputPlaceholder: string;

  /** Content of external button tooltip in link editor when the link was chosen to open in a new tab */
  linkEditorExternalLink: string;

  /** Content of external button tooltip in link editor when the link was chosen to open in the same tab */
  linkEditorInternalLink: string;

  /** Save button content in link editor */
  linkEditorSave: string;

  /** Cancel button title text in color picker control */
  colorPickerCancel: string;

  /** Clear button title text in color picker control */
  colorPickerClear: string;

  /** Color picker button title text in color picker control */
  colorPickerColorPicker: string;

  /** Palette button title text in color picker control */
  colorPickerPalette: string;

  /** Save button title text in color picker control */
  colorPickerSave: string;

  /** Aria-label for color palette colors */
  colorPickerColorLabel: (color: string) => string;

  /** Aria-label for task list control */
  tasksControlLabel: string;

  /** Aria-label for task list sink task */
  tasksSinkLabel: string;

  /** Aria-label for task list lift task */
  tasksLiftLabel: string;

  /** Aria-label for set details task */
  setDetailsLabel: string;

  /** Aria-label for unset details task */
  unsetDetailsLabel: string;

  /** Aria-label for insert table task */
  insertTableLabel: string;

  /** Aria-label for add column before task */
  addColumnBeforeLabel: string;

  /** Aria-label for add column after task */
  addColumnAfterLabel: string;

  /** Aria-label for delete column task */
  deleteColumnLabel: string;

  /** Aria-label for add row before task */
  addRowBeforeLabel: string;

  /** Aria-label for add row after task */
  addRowAfterLabel: string;

  /** Aria-label for delete row task */
  deleteRowLabel: string;

  /** Aria-label for delete table task */
  deleteTableLabel: string;

  /** Aria-label for merge cells task */
  mergeCellsLabel: string;

  /** Aria-label for split cell task */
  splitCellLabel: string;

  /** Aria-label for toggle header column task */
  toggleHeaderColumnLabel: string;

  /** Aria-label for toggle header row task */
  toggleHeaderRowLabel: string;

  /** Aria-label for toggle header cell task */
  toggleHeaderCellLabel: string;

  /** Aria-label for merge or split task */
  mergeOrSplitLabel: string;

  /** Aria-label for set cell attribute task */
  setCellAttributeLabel: string;

  /** Aria-label for fix tables task */
  fixTablesLabel: string;

  /** Aria-label for go to next cell task */
  goToNextCellLabel: string;

  /** Aria-label for go to previous cell task */
  goToPreviousCellLabel: string;
}

export const DEFAULT_LABELS: RichTextEditorLabels = {
  // Controls labels
  linkControlLabel: 'Link',
  colorPickerControlLabel: 'Text color',
  highlightControlLabel: 'Highlight text',
  colorControlLabel: (color) => `Set text color ${color}`,
  boldControlLabel: 'Bold',
  italicControlLabel: 'Italic',
  underlineControlLabel: 'Underline',
  strikeControlLabel: 'Strikethrough',
  clearFormattingControlLabel: 'Clear formatting',
  unlinkControlLabel: 'Remove link',
  bulletListControlLabel: 'Bullet list',
  orderedListControlLabel: 'Ordered list',
  sourceCodeControlLabel: 'Switch between text/source code',
  h1ControlLabel: 'Heading 1',
  h2ControlLabel: 'Heading 2',
  h3ControlLabel: 'Heading 3',
  h4ControlLabel: 'Heading 4',
  h5ControlLabel: 'Heading 5',
  h6ControlLabel: 'Heading 6',
  blockquoteControlLabel: 'Blockquote',
  alignLeftControlLabel: 'Align text: left',
  alignCenterControlLabel: 'Align text: center',
  alignRightControlLabel: 'Align text: right',
  alignJustifyControlLabel: 'Align text: justify',
  codeControlLabel: 'Code',
  codeBlockControlLabel: 'Code block',
  subscriptControlLabel: 'Subscript',
  superscriptControlLabel: 'Superscript',
  unsetColorControlLabel: 'Unset color',
  hrControlLabel: 'Horizontal line',
  undoControlLabel: 'Undo',
  redoControlLabel: 'Redo',

  // Task list
  tasksControlLabel: 'Task list',
  tasksSinkLabel: 'Decrease task level',
  tasksLiftLabel: 'Increase task level',

  // Link editor
  linkEditorInputLabel: 'Enter URL',
  linkEditorInputPlaceholder: 'https://example.com/',
  linkEditorExternalLink: 'Open link in a new tab',
  linkEditorInternalLink: 'Open link in the same tab',
  linkEditorSave: 'Save',

  // Color picker control
  colorPickerCancel: 'Cancel',
  colorPickerClear: 'Clear color',
  colorPickerColorPicker: 'Color picker',
  colorPickerPalette: 'Color palette',
  colorPickerSave: 'Save',
  colorPickerColorLabel: (color) => `Set text color ${color}`,

  // Details
  setDetailsLabel: 'Set details',
  unsetDetailsLabel: 'Unset details',

  // Table
  insertTableLabel: 'Insert table',
  addColumnBeforeLabel: 'Add column before',
  addColumnAfterLabel: 'Add column after',
  deleteColumnLabel: 'Delete column',
  addRowBeforeLabel: 'Add row before',
  addRowAfterLabel: 'Add row after',
  deleteRowLabel: 'Delete row',
  deleteTableLabel: 'Delete table',
  mergeCellsLabel: 'Merge cells',
  splitCellLabel: 'Split cell',
  toggleHeaderColumnLabel: 'Toggle header column',
  toggleHeaderRowLabel: 'Toggle header row',
  toggleHeaderCellLabel: 'Toggle header cell',
  mergeOrSplitLabel: 'Merge / split',
  setCellAttributeLabel: 'Set cell attribute',
  fixTablesLabel: 'Fix tables',
  goToNextCellLabel: 'Go to next cell',
  goToPreviousCellLabel: 'Go to previous cell',
};
