import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, useRichTextEditorContext } from '@mantine/tiptap';
import { IconStar } from '@tabler/icons-react';

const code = `
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, useRichTextEditorContext } from '@mantine/tiptap';
import { IconStar } from '@tabler/icons-react';

function InsertStarControl() {
  const { editor } = useRichTextEditorContext();
  return (
    <RichTextEditor.Control
      onClick={() => editor?.commands.insertContent('⭐')}
      aria-label="Insert star emoji"
      title="Insert star emoji"
    >
      <IconStar stroke={1.5} size="1rem" />
    </RichTextEditor.Control>
  );
}

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Click control to insert star emoji</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <InsertStarControl />
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;

function InsertStarControl() {
  const { editor } = useRichTextEditorContext();
  return (
    <RichTextEditor.Control
      onClick={() => editor?.commands.insertContent('⭐')}
      aria-label="Insert star emoji"
      title="Insert star emoji"
    >
      <IconStar stroke={1.5} size="1rem" />
    </RichTextEditor.Control>
  );
}

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Click control to insert star emoji</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <InsertStarControl />
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

export const customControl: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
