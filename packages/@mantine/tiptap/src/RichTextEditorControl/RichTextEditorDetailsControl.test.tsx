import { act, waitFor } from '@testing-library/react';
import { Details, DetailsContent, DetailsSummary } from '@tiptap/extension-details';
import { NodeSelection } from '@tiptap/pm/state';
import { Editor, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { render, screen, userEvent } from '@mantine-tests/core';
import { RichTextEditor } from '../RichTextEditor';

interface DetailsTestEditorProps {
  withDetails?: boolean;
  content?: string;
  disabled?: boolean;
  onEditor?: (editor: Editor | null) => void;
}

function DetailsTestEditor({
  withDetails = true,
  content,
  disabled,
  onEditor,
}: DetailsTestEditorProps) {
  const editor = useEditor({
    extensions: withDetails ? [StarterKit, Details, DetailsSummary, DetailsContent] : [StarterKit],
    content: content ?? '<p></p>',
    shouldRerenderOnTransaction: true,
  });

  onEditor?.(editor);

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.Details disabled={disabled} />
      </RichTextEditor.Toolbar>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

const label = 'Toggle collapsible section';

// jsdom does not implement layout. When the editor is focused ProseMirror measures the current
// selection to scroll it into view; the cursor lands inside the collapsed (hidden) details content,
// whose nodes expose no client rects, which throws. Provide empty geometry so the command that the
// control runs does not fail in the test environment (this is a no-op in real browsers).
beforeAll(() => {
  const rectList = () => ({ length: 0, item: () => null }) as unknown as DOMRectList;
  const rect = () =>
    ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0, x: 0, y: 0 }) as DOMRect;

  for (const proto of [Range.prototype, Text.prototype, Element.prototype]) {
    (proto as any).getClientRects = rectList;
    (proto as any).getBoundingClientRect = rect;
  }
});

describe('@mantine/tiptap/RichTextEditorDetailsControl', () => {
  it('disables the control when the details extension is not installed', async () => {
    render(<DetailsTestEditor withDetails={false} />);
    const control = await screen.findByLabelText(label);
    await waitFor(() => expect(control).toBeDisabled());
  });

  it('enables the control in a regular paragraph when the extension is installed', async () => {
    let editor: Editor | null = null;
    render(<DetailsTestEditor content="<p>Collapsible</p>" onEditor={(e) => (editor = e)} />);

    const control = await screen.findByLabelText(label);
    await waitFor(() => expect(editor).not.toBeNull());

    act(() => {
      editor!.chain().focus('start').run();
    });

    await waitFor(() => expect(control).not.toBeDisabled());
  });

  it('honors a caller-provided disabled prop even when the extension is available', async () => {
    render(<DetailsTestEditor disabled />);
    const control = await screen.findByLabelText(label);
    await waitFor(() => expect(control).toBeDisabled());
  });

  it('wraps the block in a details node and removes it on the next toggle', async () => {
    let editor: Editor | null = null;
    render(<DetailsTestEditor content="<p>Collapsible</p>" onEditor={(e) => (editor = e)} />);

    const control = await screen.findByLabelText(label);
    await waitFor(() => expect(editor).not.toBeNull());

    act(() => {
      editor!.chain().focus('start').run();
    });
    await waitFor(() => expect(control).not.toBeDisabled());

    await userEvent.click(control);
    await waitFor(() => expect(editor!.getHTML()).toContain('<details'));
    await waitFor(() => expect(control).toHaveAttribute('aria-pressed', 'true'));

    await userEvent.click(control);
    await waitFor(() => expect(editor!.getHTML()).not.toContain('<details'));
  });

  it('is not marked active when the details node is selected but cannot be unset', async () => {
    let editor: Editor | null = null;
    render(
      <DetailsTestEditor
        content="<details><summary>S</summary><p>C</p></details><p></p>"
        onEditor={(e) => (editor = e)}
      />
    );

    const control = await screen.findByLabelText(label);
    await waitFor(() => expect(editor).not.toBeNull());

    // Select the details node itself: `isActive('details')` is true, but `unsetDetails` (which only
    // searches parent nodes) cannot run, so the control must not appear active with a dead click.
    act(() => {
      editor!.view.dispatch(
        editor!.state.tr.setSelection(NodeSelection.create(editor!.state.doc, 0))
      );
    });

    await waitFor(() => expect(control).not.toHaveAttribute('aria-pressed', 'true'));
    expect(control).not.toBeDisabled();
  });
});
