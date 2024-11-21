// import { IconColorPicker } from '@tabler/icons-react';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { Color } from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import Placeholder from '@tiptap/extension-placeholder';
import SubScript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TaskItem from '@tiptap/extension-task-item';
import TipTapTaskList from '@tiptap/extension-task-list';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { BubbleMenu, FloatingMenu, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import { createLowlight } from 'lowlight';
import { AppShell } from '@mantine/core';
import { Link } from './extensions/Link';
import { getTaskListExtension } from './extensions/TaskList';
import { RichTextEditor, RichTextEditorProps } from './RichTextEditor';
import { RichTextEditorToolbarProps } from './RichTextEditorToolbar/RichTextEditorToolbar';

const lowlight = createLowlight();

lowlight.register('html', html);
lowlight.register('css', css);
lowlight.register('js', js);
lowlight.register('ts', ts);

export default { title: 'TipTap' };

const lorem =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis necessitatibus, impedit tempora, provident voluptate aliquid eos eveniet expedita iusto mollitia accusamus illum sunt fugiat quisquam tempore molestias nulla voluptatem cumque!';
const htmlContent = Array.from({ length: 10 }).fill(`<p>${lorem}</p>`).join('');

function BasicEditor({
  editorProps,
  content,
  toolbarProps,
}: {
  editorProps?: Partial<RichTextEditorProps>;
  content?: string;
  toolbarProps?: Partial<RichTextEditorToolbarProps>;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      TextStyle,
      Color,
      Highlight,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: content || htmlContent,
  });

  return (
    <div style={{ padding: 40 }}>
      <RichTextEditor editor={editor} {...editorProps}>
        <RichTextEditor.Toolbar {...toolbarProps}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.ColorPicker
              colors={[
                '#25262b',
                '#868e96',
                '#fa5252',
                '#e64980',
                '#be4bdb',
                '#7950f2',
                '#4c6ef5',
                '#228be6',
                '#15aabf',
                '#12b886',
                '#40c057',
                '#82c91e',
                '#fab005',
                '#fd7e14',
              ]}
            />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
            <RichTextEditor.H5 />
            <RichTextEditor.H6 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.Hr />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Undo />
            <RichTextEditor.Redo />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Subscript />
            <RichTextEditor.Superscript />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Code />
            <RichTextEditor.CodeBlock />
          </RichTextEditor.ControlsGroup>

          {/* <RichTextEditor.ControlsGroup>
            <RichTextEditor.Control interactive={false}>
              <IconColorPicker size={16} stroke={1.5} />
            </RichTextEditor.Control>
            <RichTextEditor.Color color="#F03E3E" />
            <RichTextEditor.Color color="#7048E8" />
            <RichTextEditor.Color color="#1098AD" />
            <RichTextEditor.Color color="#37B24D" />
            <RichTextEditor.Color color="#F59F00" />
            <RichTextEditor.UnsetColor />
          </RichTextEditor.ControlsGroup> */}
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
    </div>
  );
}

export function Usage() {
  return <BasicEditor />;
}

export function SubtleVariant() {
  return <BasicEditor editorProps={{ variant: 'subtle' }} />;
}

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const code =
  escapeHtml(`// Valid braces Kata – https://www.codewars.com/kata/5277c8a221e209d3f6000b56

const pairs: Record<string, string> = {
  '[': ']',
  '{': '}',
  '(': ')',
};

const openBraces = Object.keys(pairs);

export function validBraces(braces: string) {
  const opened: string[] = [];

  for (let i = 0; i < braces.length; i += 1) {
    const brace = braces[i];

    if (openBraces.includes(brace)) {
      opened.push(brace);
      continue;
    }

    if (pairs[opened[opened.length - 1]] !== brace) {
      return false
    }

    opened.pop();
  }

  return opened.length === 0;
}`);

export function CodeHighlight() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: `<p>
    That’s a boring paragraph followed by a fenced code block:
  </p>
  <pre><code>${code}</code></pre>
  <p>
    Press Command/Ctrl + Enter to leave the fenced code block and continue typing in boring paragraphs.
  </p>`,
  });

  return (
    <div style={{ padding: 40 }}>
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.CodeBlock />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
    </div>
  );
}

const largeContent = Array(20)
  .fill(0)
  .map(() => `<p>${lorem}</p>`)
  .join('');
const scrollContent = Array(10)
  .fill(0)
  .map((_, index) => <p key={index}>{lorem}</p>);

export function StickyToolbar() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>Header</AppShell.Header>
      {scrollContent}
      <BasicEditor content={largeContent} toolbarProps={{ sticky: true, stickyOffset: 60 }} />
      {scrollContent}
      {scrollContent}
      {scrollContent}
    </AppShell>
  );
}

export function Floating() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World!</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      {editor && (
        <FloatingMenu editor={editor}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.BulletList />
          </RichTextEditor.ControlsGroup>
        </FloatingMenu>
      )}
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

export function Bubble() {
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: '<p>Hello World!</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      {editor && (
        <BubbleMenu editor={editor}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Link />
          </RichTextEditor.ControlsGroup>
        </BubbleMenu>
      )}
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

export function Unstyled() {
  return <BasicEditor editorProps={{ unstyled: true }} />;
}

export function PlaceholderExtension() {
  const editor = useEditor({
    extensions: [StarterKit, Placeholder.configure({ placeholder: 'This is placeholder' })],
    content: '',
  });

  return (
    <div style={{ padding: 40 }}>
      <RichTextEditor editor={editor}>
        <RichTextEditor.Content />
      </RichTextEditor>
    </div>
  );
}

const TestIcon = () => <div>$</div>;

export function ControlStylesApi() {
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: '',
  });

  return (
    <div style={{ padding: 40 }}>
      <RichTextEditor editor={editor} styles={{ control: { backgroundColor: 'pink' } }}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Link icon={TestIcon} />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
    </div>
  );
}

export function Tasks() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link,
      getTaskListExtension(TipTapTaskList),
      TaskItem.configure({
        nested: true,
        HTMLAttributes: {
          class: 'test-item',
        },
      }),
    ],
    content: `
        <p>Some text</p>
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>
        <p>And a paragraph</p>
      `,
  });

  return (
    <div style={{ padding: 40 }}>
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.TaskList />
            <RichTextEditor.TaskListLift />
            <RichTextEditor.TaskListSink />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
    </div>
  );
}
