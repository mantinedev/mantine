import { act, waitFor } from '@testing-library/react';
import { Editor, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { render, screen, userEvent } from '@mantine-tests/core';
import { RichTextEditor } from '../RichTextEditor';

function TestEditor({
  onUpdate,
  content,
  onEditor,
  onSourceCodeTextSwitch,
}: {
  onUpdate: (html: string) => void;
  content: string;
  onEditor?: (editor: Editor | null) => void;
  onSourceCodeTextSwitch?: (active: boolean) => void;
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => onUpdate(editor.getHTML()),
  });

  onEditor?.(editor);

  return (
    <RichTextEditor editor={editor} onSourceCodeTextSwitch={onSourceCodeTextSwitch}>
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

  it('displays HTML source as plain text and restores rich content', async () => {
    let editor: Editor | null = null;
    render(
      <TestEditor
        content="<p>Hello <strong>world</strong></p>"
        onUpdate={() => {}}
        onEditor={(e) => (editor = e)}
      />
    );

    const control = await screen.findByLabelText('Switch between text/source code');
    await userEvent.click(control);

    expect(editor!.getText()).toBe('<p>Hello <strong>world</strong></p>');

    await userEvent.click(control);
    expect(editor!.getHTML()).toBe('<p>Hello <strong>world</strong></p>');
  });

  it('round-trips escaped text and textarea closing tags', async () => {
    let editor: Editor | null = null;
    const content = '<p>&lt;b&gt;not bold&lt;/b&gt; &lt;/textarea&gt;<strong>after</strong></p>';
    render(<TestEditor content={content} onUpdate={() => {}} onEditor={(e) => (editor = e)} />);

    const control = await screen.findByLabelText('Switch between text/source code');
    await userEvent.click(control);
    expect(editor!.getText()).toBe(content);

    await userEvent.click(control);
    expect(editor!.getHTML()).toBe(content);
    expect(editor!.getText()).toBe('<b>not bold</b> </textarea>after');
  });

  it('exits source code mode when content is reset externally', async () => {
    let editor: Editor | null = null;
    const onSourceCodeTextSwitch = jest.fn();
    render(
      <TestEditor
        content="<p>Hello</p>"
        onUpdate={() => {}}
        onEditor={(e) => (editor = e)}
        onSourceCodeTextSwitch={onSourceCodeTextSwitch}
      />
    );

    const control = await screen.findByLabelText('Switch between text/source code');
    await userEvent.click(control);
    await waitFor(() => expect(control).toHaveAttribute('data-active', 'true'));
    expect(onSourceCodeTextSwitch).toHaveBeenLastCalledWith(true);

    act(() => {
      editor!.commands.setContent('<p>Reset <strong>content</strong></p>');
    });

    await waitFor(() => expect(control).not.toHaveAttribute('data-active'));
    expect(onSourceCodeTextSwitch).toHaveBeenLastCalledWith(false);

    await userEvent.click(control);
    expect(editor!.getText()).toBe('<p>Reset <strong>content</strong></p>');
  });
});
