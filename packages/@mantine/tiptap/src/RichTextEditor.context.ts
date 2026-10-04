import { Editor } from '@tiptap/react';
import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { ImageUploadResult } from './extensions/UploadImage';
import { ResolvedRichTextEditorLabels } from './labels';
import type { RichTextEditorFactory } from './RichTextEditor';

interface RichTextEditorContext {
  getStyles: GetStylesApi<RichTextEditorFactory>;
  editor: Editor | null;
  labels: ResolvedRichTextEditorLabels;
  withCodeHighlightStyles: boolean | undefined;
  withTypographyStyles: boolean | undefined;
  unstyled: boolean | undefined;
  variant: string | undefined;
  onSourceCodeTextSwitch?: (isSourceCodeModeActive: boolean) => void;
  onImageUpload?: (file: File) => Promise<string | ImageUploadResult>;
  onImageUploadError?: (file: File, error: unknown) => void;
}

export const [RichTextEditorProvider, useRichTextEditorContext] =
  createSafeContext<RichTextEditorContext>('RichTextEditor component was not found in tree');
