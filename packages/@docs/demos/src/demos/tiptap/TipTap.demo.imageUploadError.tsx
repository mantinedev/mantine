import TipTapImage from '@tiptap/extension-image';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { notifications } from '@mantine/notifications';
import { getUploadImageExtension, RichTextEditor } from '@mantine/tiptap';
import { MantineDemo } from '@mantinex/demo';

const code = `
import TipTapImage from '@tiptap/extension-image';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { notifications } from '@mantine/notifications';
import { getUploadImageExtension, RichTextEditor } from '@mantine/tiptap';

function handleImageUpload(file: File): Promise<string> {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Upload failed: server error'));
    }, 3000);
  });
}

function Demo() {
  const editor = useEditor({
    shouldRerenderOnTransaction: true,
    extensions: [
      StarterKit,
      getUploadImageExtension(TipTapImage, {
        onImageUpload: handleImageUpload,
        onImageUploadError: (_file, error) => {
          notifications.show({
            title: 'Image upload failed',
            message: (error as Error).message,
            color: 'red',
          });
        },
      }),
    ],
    content: '<p>Try uploading an image – it will fail after 3 seconds and be removed from the editor.</p>',
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

function handleImageUpload(_file: File): Promise<string> {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Upload failed: server error'));
    }, 3000);
  });
}

function Demo() {
  const editor = useEditor({
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
    extensions: [
      StarterKit,
      getUploadImageExtension(TipTapImage, {
        onImageUpload: handleImageUpload,
        onImageUploadError: (_file, error) => {
          notifications.show({
            title: 'Image upload failed',
            message: (error as Error).message,
            color: 'red',
          });
        },
      }),
    ],
    content:
      '<p>Try uploading an image – it will fail after 3 seconds and be removed from the editor.</p>',
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

export const imageUploadError: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
