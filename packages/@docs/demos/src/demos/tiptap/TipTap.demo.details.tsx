import { Details, DetailsContent, DetailsSummary } from '@tiptap/extension-details';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Details, DetailsSummary, DetailsContent } from '@tiptap/extension-details';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, Details, DetailsSummary, DetailsContent],
    content: \`
      <details>
        <summary>Shipping and delivery</summary>
        <p>Orders are processed within 1–2 business days and delivered in 3–5 business days.</p>
      </details>
      <details>
        <summary>Returns and refunds</summary>
        <p>You can return any item within 30 days of delivery for a full refund.</p>
      </details>
      <p></p>
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
          <RichTextEditor.Details />
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
    extensions: [StarterKit, Details, DetailsSummary, DetailsContent],
    content: `
      <details>
        <summary>Shipping and delivery</summary>
        <p>Orders are processed within 1–2 business days and delivered in 3–5 business days.</p>
      </details>
      <details>
        <summary>Returns and refunds</summary>
        <p>You can return any item within 30 days of delivery for a full refund.</p>
      </details>
      <p></p>
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
          <RichTextEditor.Details />
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
