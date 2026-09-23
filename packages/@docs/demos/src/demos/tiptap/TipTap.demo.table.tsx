import { TableKit } from '@tiptap/extension-table';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TableKit } from '@tiptap/extension-table';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, TableKit],
    content: \`
      <table>
        <tbody>
          <tr><th><p>Framework</p></th><th><p>Language</p></th></tr>
          <tr><td><p>Mantine</p></td><td><p>TypeScript</p></td></tr>
          <tr><td><p>Tiptap</p></td><td><p>TypeScript</p></td></tr>
        </tbody>
      </table>
      <p></p>
\`,
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar sticky>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.TableInsert />
          <RichTextEditor.TableDelete />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.TableColumnBefore />
          <RichTextEditor.TableColumnAfter />
          <RichTextEditor.TableColumnDelete />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.TableRowBefore />
          <RichTextEditor.TableRowAfter />
          <RichTextEditor.TableRowDelete />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.TableToggleHeaderRow />
          <RichTextEditor.TableToggleHeaderColumn />
          <RichTextEditor.TableMergeCells />
          <RichTextEditor.TableSplitCell />
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
    extensions: [StarterKit, TableKit],
    content: `
      <table>
        <tbody>
          <tr><th><p>Framework</p></th><th><p>Language</p></th></tr>
          <tr><td><p>Mantine</p></td><td><p>TypeScript</p></td></tr>
          <tr><td><p>Tiptap</p></td><td><p>TypeScript</p></td></tr>
        </tbody>
      </table>
      <p></p>
`,
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar sticky>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.TableInsert />
          <RichTextEditor.TableDelete />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.TableColumnBefore />
          <RichTextEditor.TableColumnAfter />
          <RichTextEditor.TableColumnDelete />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.TableRowBefore />
          <RichTextEditor.TableRowAfter />
          <RichTextEditor.TableRowDelete />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.TableToggleHeaderRow />
          <RichTextEditor.TableToggleHeaderColumn />
          <RichTextEditor.TableMergeCells />
          <RichTextEditor.TableSplitCell />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

export const table: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
