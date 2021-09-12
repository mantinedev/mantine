import React from 'react';
import type { RichTextEditorProps } from '../RichTextEditor/RichTextEditor';

export function SSRRichTextEditor(props: RichTextEditorProps) {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line import/extensions, global-require
    const { RichTextEditor } = require('../RichTextEditor/RichTextEditor');
    return <RichTextEditor {...props} />;
  }

  return null;
}
