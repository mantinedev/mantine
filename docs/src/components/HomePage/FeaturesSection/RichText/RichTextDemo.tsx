import React from 'react';
import { usage } from '@demos/rte';

export function RichTextDemo() {
  const Component = usage.component as any;
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
