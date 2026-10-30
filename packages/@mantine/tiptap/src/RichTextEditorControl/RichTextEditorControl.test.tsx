import { act, waitFor } from '@testing-library/react';
import { Editor, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { render, screen } from '@mantine-tests/core';
import { RichTextEditor } from '../RichTextEditor';

function TestEditor({
  immediatelyRender,
  onEditor,
  controlActive,
  ariaPressed,
}: {
  immediatelyRender: boolean;
  onEditor?: (editor: Editor | null) => void;
  controlActive?: boolean;
  ariaPressed?: boolean;
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello world</p>',
    immediatelyRender,
  });

  onEditor?.(editor);

  const controlProps = controlActive === undefined ? {} : { active: controlActive };

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.Bold {...controlProps} aria-pressed={ariaPressed} />
      </RichTextEditor.Toolbar>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

describe('@mantine/tiptap/RichTextEditorControl', () => {
  it('enables controls on init without focusing the editor (immediatelyRender: false)', async () => {
    render(<TestEditor immediatelyRender={false} />);

    const control = await screen.findByLabelText('Bold');
    await waitFor(() => expect(control).not.toBeDisabled());
  });

  it('enables controls on init without focusing the editor (immediatelyRender: true)', async () => {
    render(<TestEditor immediatelyRender />);

    const control = await screen.findByLabelText('Bold');
    await waitFor(() => expect(control).not.toBeDisabled());
  });

  it('sets aria-pressed to false when inactive', async () => {
    render(<TestEditor immediatelyRender controlActive={false} />);

    const control = await screen.findByLabelText('Bold');
    expect(control).toHaveAttribute('aria-pressed', 'false');
  });

  it('sets aria-pressed to true when active', async () => {
    render(<TestEditor immediatelyRender controlActive />);

    const control = await screen.findByLabelText('Bold');
    expect(control).toHaveAttribute('aria-pressed', 'true');
  });

  it('allows overriding aria-pressed', async () => {
    render(<TestEditor immediatelyRender controlActive ariaPressed={false} />);

    const control = await screen.findByLabelText('Bold');
    expect(control).toHaveAttribute('data-active', 'true');
    expect(control).toHaveAttribute('aria-pressed', 'false');
  });

  it('reactively reflects the editor active state', async () => {
    let editor: Editor | null = null;
    render(<TestEditor immediatelyRender onEditor={(e) => (editor = e)} />);

    const control = await screen.findByLabelText('Bold');
    await waitFor(() => expect(editor).not.toBeNull());
    expect(control).not.toHaveAttribute('data-active');

    act(() => {
      editor!.chain().selectAll().toggleBold().run();
    });

    await waitFor(() => expect(control).toHaveAttribute('data-active', 'true'));
  });
});
