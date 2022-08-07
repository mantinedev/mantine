import React from 'react';
import { RichTextEditorDemos } from '@mantine/demos';

export function RichText() {
  const Component = RichTextEditorDemos.usage.component as any;
  return (
    <Component
      controls={[
        ['bold', 'italic', 'underline', 'strike', 'clean'],
        ['h1', 'h2', 'h3', 'h4'],
        ['unorderedList', 'orderedList'],
        ['link', 'image', 'video', 'blockquote'],
        ['alignLeft', 'alignCenter', 'alignRight'],
      ]}
    />
  );
}
