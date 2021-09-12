import React from 'react';
import type { RichTextEditorProps } from '../index';

export function SSRWrapper(props: RichTextEditorProps) {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line import/extensions, global-require
    const { RichTextEditor } = require('./components/RichTextEditor/RichTextEditor');
    return <RichTextEditor {...props} />;
  }

  return null;
}
