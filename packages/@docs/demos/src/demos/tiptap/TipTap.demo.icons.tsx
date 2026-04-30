import { TextBIcon, TextItalicIcon } from '@phosphor-icons/react';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import { TextBIcon, TextItalicIcon } from '@phosphor-icons/react';

const BoldIcon = () => <TextBIcon size={16} />;
const ItalicIcon = () => <TextItalicIcon size={16} />;

function Demo() {
  const editor = useEditor({
    shouldRerenderOnTransaction: true,
    extensions: [StarterKit],
    content: '<p>Customize icons with icon prop</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold icon={BoldIcon} />
          <RichTextEditor.Italic icon={ItalicIcon} />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;

const BoldIcon = () => <TextBIcon size={16} />;
const ItalicIcon = () => <TextItalicIcon size={16} />;

function Demo() {
  const editor = useEditor({
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
    extensions: [StarterKit],
    content: '<p>Customize icons with icon prop</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold icon={BoldIcon} />
          <RichTextEditor.Italic icon={ItalicIcon} />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

export const icons: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
