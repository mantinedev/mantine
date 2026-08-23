import { TableKit } from '@tiptap/extension-table';
import { Editor, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { act, waitFor } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { RichTextEditor } from '../RichTextEditor';

interface TableTestEditorProps {
  withTable?: boolean;
  content?: string;
  insertDisabled?: boolean;
  columnBeforeDisabled?: boolean;
  onEditor?: (editor: Editor | null) => void;
}

function TableTestEditor({
  withTable = true,
  content,
  insertDisabled,
  columnBeforeDisabled,
  onEditor,
}: TableTestEditorProps) {
  const editor = useEditor({
    extensions: withTable ? [StarterKit, TableKit] : [StarterKit],
    content: content ?? '<p></p>',
    shouldRerenderOnTransaction: true,
  });

  onEditor?.(editor);

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.TableInsert disabled={insertDisabled} />
        <RichTextEditor.TableColumnBefore disabled={columnBeforeDisabled} />
        <RichTextEditor.TableRowAfter />
        <RichTextEditor.TableDelete />
      </RichTextEditor.Toolbar>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

const tableContent = `
  <table>
    <tr><th>A</th><th>B</th></tr>
    <tr><td>1</td><td>2</td></tr>
  </table>
`;

describe('@mantine/tiptap/RichTextEditor table controls', () => {
  it('disables all table controls when the table extension is not installed', async () => {
    render(<TableTestEditor withTable={false} />);

    const insert = await screen.findByLabelText('Insert table');
    const columnBefore = await screen.findByLabelText('Add column before');
    const rowAfter = await screen.findByLabelText('Add row after');
    const deleteTable = await screen.findByLabelText('Delete table');

    await waitFor(() => expect(insert).toBeDisabled());
    expect(columnBefore).toBeDisabled();
    expect(rowAfter).toBeDisabled();
    expect(deleteTable).toBeDisabled();
  });

  it('disables manipulation controls when the cursor is not inside a table', async () => {
    render(<TableTestEditor content="<p>Outside table</p>" />);

    const columnBefore = await screen.findByLabelText('Add column before');
    await waitFor(() => expect(columnBefore).toBeDisabled());
  });

  it('enables manipulation controls when the cursor is inside a table', async () => {
    let editor: Editor | null = null;
    render(<TableTestEditor content={tableContent} onEditor={(e) => (editor = e)} />);

    const columnBefore = await screen.findByLabelText('Add column before');
    await waitFor(() => expect(editor).not.toBeNull());

    act(() => {
      editor!.chain().focus('start', { scrollIntoView: false }).run();
    });

    await waitFor(() => expect(columnBefore).not.toBeDisabled());
  });

  it('honors a caller-provided disabled prop on TableInsert even when the extension is available', async () => {
    render(<TableTestEditor insertDisabled />);

    const insert = await screen.findByLabelText('Insert table');
    await waitFor(() => expect(insert).toBeDisabled());
  });

  it('renders the TableInsert picker in a portal so it is not clipped by the editor root', async () => {
    // The editor root sets `overflow: clip`, so a non-portaled dropdown taller than the
    // editor is cut off. Portals are disabled in the default test env, hence `env: 'default'`.
    const { container } = render(<TableTestEditor />, undefined, { env: 'default' });

    const insertControl = await screen.findByLabelText('Insert table');
    await userEvent.click(insertControl);

    const cell = await screen.findByLabelText('Insert 1 × 1 table');
    const editorRoot = container.querySelector('[class*="RichTextEditor-root"]');

    expect(editorRoot).not.toBeNull();
    expect(editorRoot!.contains(cell)).toBe(false);
  });

  it('inserts a table with the size selected in the grid picker', async () => {
    let editor: Editor | null = null;
    render(<TableTestEditor onEditor={(e) => (editor = e)} />);

    const insertControl = await screen.findByLabelText('Insert table');
    await userEvent.click(insertControl);

    const cell = await screen.findByLabelText('Insert 3 × 2 table');
    await userEvent.click(cell);

    await waitFor(() => expect(editor!.getHTML()).toContain('<table'));

    const html = editor!.getHTML();
    const rows = html.match(/<tr/g) ?? [];
    const headerCells = html.match(/<th/g) ?? [];
    expect(rows).toHaveLength(2);
    expect(headerCells).toHaveLength(3);
  });

  it('does not let disabled={false} enable a control whose command is unavailable', async () => {
    render(<TableTestEditor withTable={false} columnBeforeDisabled={false} />);

    await waitFor(() =>
      expect(screen.getByLabelText('Add column before')).toHaveAttribute('data-disabled')
    );

    expect(screen.getByLabelText('Add column before')).toBeDisabled();
  });
});
