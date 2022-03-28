import React from 'react';
import type { RichTextEditorProps } from '@mantine/rte';

export function SSRWrapper(props: RichTextEditorProps) {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line import/extensions, global-require
    const { RichTextEditor } = require('@mantine/rte');
    return <RichTextEditor {...props} />;
  }

  return null;
}
