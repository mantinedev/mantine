import Editor, { Quill } from 'react-quill';

import {
  RichTextEditor,
  DEFAULT_CONTROLS,
  DEFAULT_LABELS,
} from './components/RichTextEditor/RichTextEditor';

export { RichTextEditor, DEFAULT_CONTROLS, DEFAULT_LABELS, Quill, Editor };
export default RichTextEditor;

export { Toolbar } from './components/Toolbar/Toolbar';

export type {
  RichTextEditorProps,
  RichTextEditorLabels,
  RichTextEditorStylesNames,
} from './components/RichTextEditor/RichTextEditor';
export type { ToolbarProps } from './components/Toolbar/Toolbar';
