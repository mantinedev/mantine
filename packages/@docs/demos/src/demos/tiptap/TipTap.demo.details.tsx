import {
  DetailsContent,
  DetailsSummary,
  Details as TipTapDetails,
} from '@tiptap/extension-details';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Details, DetailsContent, DetailsSummary } from '@tiptap/extension-details';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    shouldRerenderOnTransaction: true,
    extensions: [
      StarterKit,
      Details.configure({
        persist: true,
        HTMLAttributes: {
          class: 'details',
        },
      }),
      DetailsContent,
      DetailsSummary,
    ],
    content: \`
        <p>Look at these details</p>
        <details>
          <summary>This is a summary</summary>
          <p>Surprise!</p>
        </details>
        <p>Nested details are also supported</p>
        <details open>
          <summary>This is another summary</summary>
          <p>And there is even more.</p>
          <details>
            <summary>We need to go deeper</summary>
            <p>Booya!</p>
          </details>
        </details>
      \`,
  });

  return (
    <div style={{ padding: 40 }}>
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.SetDetails />
            <RichTextEditor.UnsetDetails />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
    </div>
  );
}
`;

function Demo() {
  const editor = useEditor({
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
    extensions: [
      StarterKit,
      TipTapDetails.configure({
        persist: true,
        HTMLAttributes: {
          class: 'details',
        },
      }),
      DetailsContent,
      DetailsSummary,
    ],
    content: `
        <p>Look at these details</p>
        <details>
          <summary>This is a summary</summary>
          <p>Surprise!</p>
        </details>
        <p>Nested details are also supported</p>
        <details open>
          <summary>This is another summary</summary>
          <p>And there is even more.</p>
          <details>
            <summary>We need to go deeper</summary>
            <p>Booya!</p>
          </details>
        </details>
      `,
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.SetDetails />
          <RichTextEditor.UnsetDetails />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

export const details: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
