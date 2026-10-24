import { act, waitFor } from '@testing-library/react';
import { Color, TextStyle } from '@tiptap/extension-text-style';
import { Editor, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { createContextContainer, render, screen, tests, userEvent } from '@mantine-tests/core';
import { Link } from './extensions/Link';
import { RichTextEditor, RichTextEditorProps, RichTextEditorStylesNames } from './RichTextEditor';
import {
  RichTextEditorContent,
  RichTextEditorContentProps,
} from './RichTextEditorContent/RichTextEditorContent';
import {
  RichTextEditorToolbar,
  RichTextEditorToolbarProps,
} from './RichTextEditorToolbar/RichTextEditorToolbar';

const defaultProps: RichTextEditorProps = {
  editor: null,
  children: null,
};

function TestEditor({
  content = '<p>Hello world</p>',
  onEditor,
  children,
}: {
  content?: string;
  onEditor?: (editor: Editor | null) => void;
  children?: React.ReactNode;
}) {
  const editor = useEditor({
    extensions: [StarterKit.configure({ link: false }), Link, TextStyle, Color],
    content,
    immediatelyRender: true,
    editorProps: { attributes: { 'aria-label': 'Editor content' } },
  });

  onEditor?.(editor);

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar>{children}</RichTextEditor.Toolbar>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

beforeAll(() => {
  const emptyRect = () => new DOMRect(0, 0, 0, 0);
  Range.prototype.getClientRects = () => [] as unknown as DOMRectList;
  Range.prototype.getBoundingClientRect = emptyRect;
});

describe('@mantine/tiptap/RichTextEditor', () => {
  tests.itSupportsSystemProps<RichTextEditorProps, RichTextEditorStylesNames>({
    component: RichTextEditor,
    props: defaultProps,
    children: true,
    displayName: '@mantine/tiptap/RichTextEditor',
    stylesApiSelectors: ['root'],
    variant: false,
    size: true,
  });

  tests.axe([
    <TestEditor key="1">
      <RichTextEditor.ControlsGroup>
        <RichTextEditor.Bold />
        <RichTextEditor.Italic />
        <RichTextEditor.Link />
      </RichTextEditor.ControlsGroup>
    </TestEditor>,
  ]);

  it('exposes static components', () => {
    expect(RichTextEditor.Toolbar).toBe(RichTextEditorToolbar);
    expect(RichTextEditor.Content).toBe(RichTextEditorContent);
  });

  it('sets content font size and controls size css variables from size prop', () => {
    const { container, rerender } = render(<RichTextEditor {...defaultProps} />);
    const root = container.querySelector('.mantine-RichTextEditor-root')!;
    expect(root).toHaveStyle({ '--rte-fz': 'var(--mantine-font-size-sm)' });
    expect(root).toHaveStyle({ '--rte-control-size': 'var(--rte-control-size-sm)' });
    expect(root).toHaveStyle({ '--rte-control-icon-size': 'var(--rte-control-icon-size-sm)' });

    rerender(<RichTextEditor {...defaultProps} size="lg" />);
    expect(root).toHaveStyle({ '--rte-fz': 'var(--mantine-font-size-lg)' });
    expect(root).toHaveStyle({ '--rte-control-size': 'var(--rte-control-size-lg)' });
    expect(root).toHaveStyle({ '--rte-control-icon-size': 'var(--rte-control-icon-size-lg)' });
  });
});

describe('@mantine/tiptap/RichTextEditorToolbar', () => {
  tests.itSupportsSystemProps<RichTextEditorToolbarProps>({
    component: createContextContainer(RichTextEditorToolbar, RichTextEditor, defaultProps),
    props: {},
    children: true,
    displayName: '@mantine/tiptap/RichTextEditorToolbar',
    stylesApiName: 'RichTextEditor',
    stylesApiSelectors: ['toolbar'],
    selector: '[role="toolbar"]',
    providerStylesApi: false,
    compound: true,
    variant: false,
  });

  tests.itThrowsContextError({
    component: RichTextEditorToolbar,
    props: {},
    error: 'RichTextEditor component was not found in tree',
  });

  it('has toolbar role with a single tab stop', async () => {
    render(
      <TestEditor>
        <RichTextEditor.Bold />
        <RichTextEditor.Italic />
        <RichTextEditor.Underline />
      </TestEditor>
    );

    const toolbar = screen.getByRole('toolbar');
    expect(toolbar).toHaveAttribute('aria-orientation', 'horizontal');

    const bold = await screen.findByLabelText('Bold');
    await waitFor(() => expect(bold).not.toBeDisabled());
    await waitFor(() => expect(bold).toHaveAttribute('tabindex', '0'));
    expect(screen.getByLabelText('Italic')).toHaveAttribute('tabindex', '-1');
    expect(screen.getByLabelText('Underline')).toHaveAttribute('tabindex', '-1');
  });

  it('moves focus between controls with arrow keys, Home and End', async () => {
    render(
      <TestEditor>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Underline />
        </RichTextEditor.ControlsGroup>
      </TestEditor>
    );

    const bold = await screen.findByLabelText('Bold');
    const italic = screen.getByLabelText('Italic');
    const underline = screen.getByLabelText('Underline');
    await waitFor(() => expect(underline).not.toBeDisabled());

    act(() => bold.focus());

    await userEvent.keyboard('{ArrowRight}');
    expect(italic).toHaveFocus();
    expect(italic).toHaveAttribute('tabindex', '0');
    expect(bold).toHaveAttribute('tabindex', '-1');

    await userEvent.keyboard('{ArrowRight}');
    expect(underline).toHaveFocus();

    await userEvent.keyboard('{ArrowRight}');
    expect(bold).toHaveFocus();

    await userEvent.keyboard('{ArrowLeft}');
    expect(underline).toHaveFocus();

    await userEvent.keyboard('{Home}');
    expect(bold).toHaveFocus();

    await userEvent.keyboard('{End}');
    expect(underline).toHaveFocus();
  });
});

describe('@mantine/tiptap/RichTextEditorContent', () => {
  tests.itSupportsSystemProps<RichTextEditorContentProps>({
    component: createContextContainer(RichTextEditorContent, RichTextEditor, {
      ...defaultProps,
      withTypographyStyles: false,
    }),
    props: {},
    displayName: '@mantine/tiptap/RichTextEditorContent',
    stylesApiName: 'RichTextEditor',
    stylesApiSelectors: ['content'],
    selector: '.mantine-RichTextEditor-content',
    providerStylesApi: false,
    compound: true,
    variant: false,
    size: false,
    polymorphic: false,
  });

  it('renders editor content', () => {
    render(<TestEditor content="<p>Editor text</p>" />);
    expect(screen.getByText('Editor text')).toBeInTheDocument();
  });
});

describe('@mantine/tiptap/RichTextEditorControl', () => {
  it('does not hide non-interactive control from assistive technologies', () => {
    render(
      <RichTextEditor editor={null}>
        <RichTextEditor.Control interactive={false} aria-label="label-control" />
      </RichTextEditor>
    );

    const control = screen.getByLabelText('label-control');
    expect(control).not.toHaveAttribute('aria-hidden');
    expect(control).toHaveAttribute('tabindex', '-1');
  });

  it('does not throw when controls are used after the editor is destroyed', async () => {
    let editor: Editor | null = null;
    render(
      <TestEditor onEditor={(e) => (editor = e)}>
        <RichTextEditor.Bold />
        <RichTextEditor.Link />
        <RichTextEditor.ColorPicker colors={['#ff0000']} />
        <RichTextEditor.Color color="#ff0000" />
      </TestEditor>
    );

    const bold = await screen.findByLabelText('Bold');
    await waitFor(() => expect(bold).not.toBeDisabled());

    act(() => {
      editor!.destroy();
    });

    await userEvent.click(bold);
    await userEvent.click(screen.getByLabelText('Set text color #ff0000'));
    expect(screen.getByRole('toolbar')).toBeInTheDocument();
  });
});

describe('@mantine/tiptap/RichTextEditorColorControl', () => {
  it('reflects current text color of the selection', async () => {
    let editor: Editor | null = null;
    render(
      <TestEditor onEditor={(e) => (editor = e)}>
        <RichTextEditor.Color color="#ff0000" />
      </TestEditor>
    );

    const control = await screen.findByLabelText('Set text color #ff0000');
    await waitFor(() => expect(editor).not.toBeNull());
    expect(control).not.toHaveAttribute('data-active');

    act(() => {
      (editor!.chain().selectAll() as any).setColor('#ff0000').run();
    });

    await waitFor(() => expect(control).toHaveAttribute('data-active', 'true'));

    act(() => {
      (editor!.chain().selectAll() as any).unsetColor().run();
    });

    await waitFor(() => expect(control).not.toHaveAttribute('data-active'));
  });
});

describe('@mantine/tiptap/RichTextEditorLinkControl', () => {
  it('sets link from the link editor', async () => {
    let editor: Editor | null = null;
    render(
      <TestEditor onEditor={(e) => (editor = e)}>
        <RichTextEditor.Link />
      </TestEditor>
    );

    await waitFor(() => expect(editor).not.toBeNull());
    act(() => {
      editor!.commands.selectAll();
    });

    await userEvent.click(screen.getByLabelText('Link'));
    const input = await screen.findByLabelText('Enter URL');
    await userEvent.type(input, 'https://mantine.dev');
    await userEvent.click(screen.getByRole('button', { name: 'Save' }));

    await waitFor(() => expect(editor!.getHTML()).toContain('href="https://mantine.dev"'));
  });

  it('opens link editor with current link and unsets link when saved empty', async () => {
    let editor: Editor | null = null;
    render(
      <TestEditor
        content='<p><a href="https://mantine.dev">Mantine</a></p>'
        onEditor={(e) => (editor = e)}
      >
        <RichTextEditor.Link />
      </TestEditor>
    );

    await waitFor(() => expect(editor).not.toBeNull());
    act(() => {
      editor!.commands.setTextSelection(3);
    });

    await userEvent.click(screen.getByLabelText('Link'));
    const input = await screen.findByLabelText('Enter URL');
    expect(input).toHaveValue('https://mantine.dev');

    await userEvent.clear(input);
    await userEvent.type(input, '{Enter}');

    await waitFor(() => expect(editor!.getHTML()).not.toContain('<a'));
    expect(editor!.getText()).toBe('Mantine');
  });

  it('opens link editor only for the editor where Mod-k was pressed', async () => {
    const editors: Editor[] = [];
    render(
      <>
        <TestEditor onEditor={(e) => e && (editors[0] = e)}>
          <RichTextEditor.Link popoverProps={{ withinPortal: false }} data-testid="link-1" />
        </TestEditor>
        <TestEditor onEditor={(e) => e && (editors[1] = e)}>
          <RichTextEditor.Link popoverProps={{ withinPortal: false }} data-testid="link-2" />
        </TestEditor>
      </>
    );

    await waitFor(() => expect(editors).toHaveLength(2));

    act(() => {
      editors[0].commands.keyboardShortcut('Mod-k');
    });

    expect(await screen.findAllByLabelText('Enter URL')).toHaveLength(1);
    expect(screen.getAllByRole('toolbar')[0]).toContainElement(screen.getByLabelText('Enter URL'));
  });
});
