import { createSafeContext, GetStylesApi } from '@mantine/core';
import { Editor } from '@tiptap/react';
import { RichTextEditorLabels } from './labels';
import type { RichTextEditorFactory } from './RichTextEditor';

interface RichTextEditorContext {
  getStyles: GetStylesApi<RichTextEditorFactory>;
  editor: Editor | null;
  labels: RichTextEditorLabels;
  withCodeHighlightStyles: boolean | undefined;
  withTypographyStyles: boolean | undefined;
  unstyled: boolean | undefined;
}

export const [RichTextEditorProvider, useRichTextEditorContext] =
  createSafeContext<RichTextEditorContext>('RichTextEditor component was not found in tree');
