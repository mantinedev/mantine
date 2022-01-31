import React from 'react';
import { useMantineTheme } from '@mantine/core';
import { RichTextEditorDemos } from '@mantine/demos';

export function RichTextDemo() {
  const theme = useMantineTheme();
  const Component = RichTextEditorDemos.usage.component as any;
  return (
    <Component
      style={{
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        borderColor: 'transparent',
        boxShadow: theme.shadows.md,
      }}
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
