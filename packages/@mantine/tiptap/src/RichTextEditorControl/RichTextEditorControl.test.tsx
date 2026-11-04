import { act, waitFor } from '@testing-library/react';
import TextAlign from '@tiptap/extension-text-align';
import { Editor, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { render, screen } from '@mantine-tests/core';
import { RichTextEditor } from '../RichTextEditor';
import type { RichTextEditorControlBaseProps } from './RichTextEditorControl';

function TestEditor({
  immediatelyRender,
  onEditor,
  boldControlProps,
}: {
  immediatelyRender: boolean;
  onEditor?: (editor: Editor | null) => void;
  boldControlProps?: RichTextEditorControlBaseProps;
}) {
  const editor = useEditor({
    extensions: [StarterKit, TextAlign.configure({ types: ['heading', 'paragraph'] })],
    content: '<p>Hello world</p>',
    immediatelyRender,
  });

  onEditor?.(editor);

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.Bold {...boldControlProps} />
        <RichTextEditor.AlignLeft />
        <RichTextEditor.AlignCenter />
        <RichTextEditor.Undo />
        <RichTextEditor.ClearFormatting />
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

  it('keeps aria-pressed on toggle controls in both states', async () => {
    let editor: Editor | null = null;
    render(<TestEditor immediatelyRender onEditor={(e) => (editor = e)} />);

    const control = await screen.findByLabelText('Bold');
    await waitFor(() => expect(editor).not.toBeNull());
    expect(control).toHaveAttribute('aria-pressed', 'false');

    act(() => {
      editor!.chain().selectAll().toggleBold().run();
    });

    await waitFor(() => expect(control).toHaveAttribute('aria-pressed', 'true'));
  });

  it('does not set aria-pressed on action controls', async () => {
    render(<TestEditor immediatelyRender />);

    expect(await screen.findByLabelText('Undo')).not.toHaveAttribute('aria-pressed');
    expect(await screen.findByLabelText('Clear formatting')).not.toHaveAttribute('aria-pressed');
  });

  it('computes active state of text align controls', async () => {
    let editor: Editor | null = null;
    render(<TestEditor immediatelyRender onEditor={(e) => (editor = e)} />);

    const alignLeft = await screen.findByLabelText('Align text: left');
    const alignCenter = await screen.findByLabelText('Align text: center');
    await waitFor(() => expect(editor).not.toBeNull());
    expect(alignLeft).toHaveAttribute('aria-pressed', 'false');
    expect(alignCenter).toHaveAttribute('aria-pressed', 'false');

    act(() => {
      editor!.chain().selectAll().setTextAlign('center').run();
    });

    await waitFor(() => expect(alignCenter).toHaveAttribute('aria-pressed', 'true'));
    expect(alignLeft).toHaveAttribute('aria-pressed', 'false');
  });

  it('allows overriding aria-pressed with a prop', async () => {
    render(<TestEditor immediatelyRender boldControlProps={{ 'aria-pressed': true }} />);

    const control = await screen.findByLabelText('Bold');
    expect(control).not.toHaveAttribute('data-active');
    expect(control).toHaveAttribute('aria-pressed', 'true');
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
