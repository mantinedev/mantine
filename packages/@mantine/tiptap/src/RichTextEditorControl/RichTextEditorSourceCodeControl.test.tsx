import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { waitFor } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { RichTextEditor } from '../RichTextEditor';

function TestEditor({ onUpdate, content }: { onUpdate: (html: string) => void; content: string }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => onUpdate(editor.getHTML()),
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.SourceCode />
      </RichTextEditor.Toolbar>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

describe('@mantine/tiptap/RichTextEditorSourceCodeControl', () => {
  it('does not emit an update when switching to source code mode', async () => {
    const onUpdate = jest.fn();
    render(<TestEditor content="<p>Hello world</p>" onUpdate={onUpdate} />);

    const control = await screen.findByLabelText('Switch between text/source code');
    await userEvent.click(control);

    await waitFor(() => expect(control).toHaveAttribute('data-active', 'true'));
    expect(onUpdate).not.toHaveBeenCalled();
  });
});
