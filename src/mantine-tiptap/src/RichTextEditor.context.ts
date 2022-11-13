import { createSafeContext } from '@mantine/utils';
import { Editor } from '@tiptap/react';
import { RichTextEditorLabels } from './labels';

interface RichTextEditorContext {
  editor: Editor;
  labels: RichTextEditorLabels;
  withCodeHighlightStyles: boolean;
  withTypographyStyles: boolean;
}

export const [RichTextEditorProvider, useRichTextEditorContext] =
  createSafeContext<RichTextEditorContext>('RichTextEditor was not found in tree');
