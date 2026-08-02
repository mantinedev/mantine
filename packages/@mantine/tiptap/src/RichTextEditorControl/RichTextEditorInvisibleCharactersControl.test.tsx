import InvisibleCharacters from '@tiptap/extension-invisible-characters';
import { Editor, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { waitFor } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { RichTextEditor } from '../RichTextEditor';

interface InvisibleCharactersTestEditorProps {
  withExtension?: boolean;
  visible?: boolean;
  disabled?: boolean;
  onEditor?: (editor: Editor | null) => void;
}

function InvisibleCharactersTestEditor({
  withExtension = true,
  visible = false,
  disabled,
  onEditor,
}: InvisibleCharactersTestEditorProps) {
  const editor = useEditor({
    extensions: withExtension
      ? [StarterKit, InvisibleCharacters.configure({ visible })]
      : [StarterKit],
    content: '<p>Formatting marks</p>',
    shouldRerenderOnTransaction: true,
  });

  onEditor?.(editor);

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.InvisibleCharacters disabled={disabled} />
      </RichTextEditor.Toolbar>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

const label = 'Toggle invisible characters';

// jsdom does not implement layout. When the editor is focused ProseMirror measures the current
// selection to scroll it into view, which reads client rects that jsdom nodes do not expose and
// throws. Provide empty geometry so the command that the control runs does not fail in the test
// environment (this is a no-op in real browsers).
beforeAll(() => {
  const rectList = () => ({ length: 0, item: () => null }) as unknown as DOMRectList;
  const rect = () =>
    ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0, x: 0, y: 0 }) as DOMRect;

  for (const proto of [Range.prototype, Text.prototype, Element.prototype]) {
    (proto as any).getClientRects = rectList;
    (proto as any).getBoundingClientRect = rect;
  }
});

describe('@mantine/tiptap/RichTextEditorInvisibleCharactersControl', () => {
  it('disables the control when the extension is not installed', async () => {
    render(<InvisibleCharactersTestEditor withExtension={false} />);
    const control = await screen.findByLabelText(label);
    await waitFor(() => expect(control).toBeDisabled());
  });

  it('enables the control when the extension is installed', async () => {
    render(<InvisibleCharactersTestEditor />);
    const control = await screen.findByLabelText(label);
    await waitFor(() => expect(control).not.toBeDisabled());
  });

  it('honors a caller-provided disabled prop even when the extension is available', async () => {
    render(<InvisibleCharactersTestEditor disabled />);
    const control = await screen.findByLabelText(label);
    await waitFor(() => expect(control).toBeDisabled());
  });

  it('is pressed on mount when invisible characters are visible by default', async () => {
    render(<InvisibleCharactersTestEditor visible />);
    const control = await screen.findByLabelText(label);
    await waitFor(() => expect(control).toHaveAttribute('aria-pressed', 'true'));
  });

  it('toggles the visibility of invisible characters', async () => {
    let editor: Editor | null = null;
    render(<InvisibleCharactersTestEditor visible={false} onEditor={(e) => (editor = e)} />);

    const control = await screen.findByLabelText(label);
    await waitFor(() => expect(editor).not.toBeNull());
    await waitFor(() => expect(control).not.toBeDisabled());
    expect(control).not.toHaveAttribute('aria-pressed', 'true');

    await userEvent.click(control);
    await waitFor(() =>
      expect((editor!.storage as any).invisibleCharacters.visibility()).toBe(true)
    );
    await waitFor(() => expect(control).toHaveAttribute('aria-pressed', 'true'));

    await userEvent.click(control);
    await waitFor(() =>
      expect((editor!.storage as any).invisibleCharacters.visibility()).toBe(false)
    );
    await waitFor(() => expect(control).not.toHaveAttribute('aria-pressed', 'true'));
  });
});
