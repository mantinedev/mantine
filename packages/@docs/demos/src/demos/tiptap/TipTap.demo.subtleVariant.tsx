import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import { MantineDemo } from '@mantinex/demo';

const content = '<p>Subtle rich text editor variant</p>';

const code = `
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';

const content = '<p>Subtle rich text editor variant</p>';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Highlight],
    content,
  });

  return (
    <RichTextEditor editor={editor} variant="subtle">
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Highlight],
    content,
  });

  return (
    <RichTextEditor editor={editor} variant="subtle">
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

export const subtleVariant: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
