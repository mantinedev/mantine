import InvisibleCharacters from '@tiptap/extension-invisible-characters';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import { MantineDemo } from '@mantinex/demo';

const code = `
import InvisibleCharacters from '@tiptap/extension-invisible-characters';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, InvisibleCharacters.configure({ visible: false })],
    content: \`
      <p>Toggle the control to reveal spaces and paragraph breaks.</p>
      <p>Each space becomes a dot and every paragraph ends with a pilcrow.</p>
\`,
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar sticky>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.InvisibleCharacters />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;

function Demo() {
  const editor = useEditor({
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
    extensions: [StarterKit, InvisibleCharacters.configure({ visible: false })],
    content: `
      <p>Toggle the control to reveal spaces and paragraph breaks.</p>
      <p>Each space becomes a dot and every paragraph ends with a pilcrow.</p>
`,
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar sticky>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.InvisibleCharacters />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

export const invisibleCharacters: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
