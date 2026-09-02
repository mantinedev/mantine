import TipTapImage from '@tiptap/extension-image';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { getUploadImageExtension, ImageUploadResult, RichTextEditor } from '@mantine/tiptap';
import { MantineDemo } from '@mantinex/demo';

const code = `
import TipTapImage from '@tiptap/extension-image';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { getUploadImageExtension, ImageUploadResult, RichTextEditor } from '@mantine/tiptap';

function handleImageUpload(file: File): Promise<ImageUploadResult> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ src: URL.createObjectURL(file), alt: file.name });
    }, 3000);
  });
}

function Demo() {
  const editor = useEditor({
    shouldRerenderOnTransaction: true,
    extensions: [
      StarterKit,
      getUploadImageExtension(TipTapImage, { onImageUpload: handleImageUpload }),
    ],
    content: '<p>Click the image button in the toolbar, or drag & drop / paste an image into the editor.</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.ImageUpload />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;

function handleImageUpload(file: File): Promise<ImageUploadResult> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ src: URL.createObjectURL(file), alt: file.name });
    }, 3000);
  });
}

function Demo() {
  const editor = useEditor({
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
    extensions: [
      StarterKit,
      getUploadImageExtension(TipTapImage, { onImageUpload: handleImageUpload }),
    ],
    content:
      '<p>Click the image button in the toolbar, or drag & drop / paste an image into the editor.</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.ImageUpload />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

export const imageUpload: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
