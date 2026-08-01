import { useState } from 'react';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { Color } from '@tiptap/extension-color';
import { Details, DetailsContent, DetailsSummary } from '@tiptap/extension-details';
import Highlight from '@tiptap/extension-highlight';
import Placeholder from '@tiptap/extension-placeholder';
import SubScript from '@tiptap/extension-subscript';
import { Superscript } from '@tiptap/extension-superscript';
import { TableKit } from '@tiptap/extension-table';
import { TaskItem } from '@tiptap/extension-task-item';
import TipTapTaskList from '@tiptap/extension-task-list';
import { TextAlign } from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import { useEditor } from '@tiptap/react';
import { BubbleMenu, FloatingMenu } from '@tiptap/react/menus';
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
const htmlContent = `
<h1>Project Nova — launch plan</h1>
<p>This is the single source of truth for shipping <strong>Nova 1.0</strong> to general availability by the end of the quarter. If a decision is not written down here, it is not part of the launch. Please read the whole thing before the kickoff on Monday and leave comments inline.</p>
<p>Our goal is deliberately narrow: <em>a reliable release we are proud to put our name on</em>. We would rather ship three features that work everywhere than ten with rough edges. Everything below works backward from that.</p>

<h2>Goals</h2>
<p>We are optimizing for trust over surface area. Concretely, launch is a success when all of the following are true on launch day:</p>
<ul>
  <li>The three headline features ship with <mark>no known regressions</mark></li>
  <li>The p95 response time stays under 200ms under the projected load</li>
  <li>Documentation coverage is at or above 90%, including a migration guide</li>
</ul>
<p>If we cannot hit all three, we slip the date rather than lower the bar. That is a group decision, not an individual one.</p>

<h2>Timeline</h2>
<p>The work is split into three two-week phases. Each phase ends with a demo and an explicit go / no-go — we do not roll into the next phase on momentum alone.</p>
<ol>
  <li><strong>Build</strong> — finish the remaining feature work and write tests alongside it, not after</li>
  <li><strong>Harden</strong> — freeze scope, burn down bugs, and run the full load test twice</li>
  <li><strong>Launch</strong> — final docs pass, marketing review, and the staged rollout</li>
</ol>

<h3>Milestones</h3>
<p>Owners are accountable for the date, not necessarily for doing all the work themselves. If a date is at risk, raise it early — surprises are the only unacceptable outcome.</p>
<table>
  <tbody>
    <tr><th><p>Milestone</p></th><th><p>Owner</p></th><th><p>Status</p></th></tr>
    <tr><td><p>Feature freeze</p></td><td><p>Priya</p></td><td><p>Done</p></td></tr>
    <tr><td><p>Load testing</p></td><td><p>Marco</p></td><td><p>In progress</p></td></tr>
    <tr><td><p>Docs review</p></td><td><p>Sam</p></td><td><p>Not started</p></td></tr>
  </tbody>
</table>

<h2>Open tasks</h2>
<p>Grab anything unassigned, add your name in the tracker, and check it off here when it lands. This list is reviewed at every standup.</p>
<ul data-type="taskList">
  <li data-type="taskItem" data-checked="true">Set up the staging environment</li>
  <li data-type="taskItem" data-checked="true">Write the migration guide</li>
  <li data-type="taskItem" data-checked="false">Record the two-minute demo video</li>
  <li data-type="taskItem" data-checked="false">Draft the release announcement</li>
</ul>

<blockquote>
  <p>Slow is smooth, and smooth is fast. We would rather slip a week than ship something we have to roll back.</p>
</blockquote>

<h2>Rollout</h2>
<p>We roll out behind a feature flag: 5% of traffic first, watch the dashboards for a full hour, then ramp to 100% only if the error rate is flat. The flag lets us turn everything off instantly, so nobody needs to ship a hotfix at 2am.</p>
<pre><code>if (errorRate > threshold) {
  rollout.pause();
  notify('#nova-launch', 'Auto-paused: error rate above threshold');
}</code></pre>
<p>Keep these open on launch day: the <a href="https://status.example.com" target="_blank" rel="noopener noreferrer">status dashboard</a>, the <a href="https://runbook.example.com" target="_blank" rel="noopener noreferrer">runbook</a>, and the incident channel. When in doubt, follow the runbook — it exists so we do not have to think under pressure.</p>
<p style="text-align: center;">— The Nova team</p>
<p></p>
`;

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
      Superscript,
      SubScript,
      TextStyle,
      Color,
      Highlight,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      TableKit,
      Details,
      DetailsSummary,
      DetailsContent,
      getTaskListExtension(TipTapTaskList),
      TaskItem.configure({ nested: true }),
    ],
    content: content || htmlContent,
    shouldRerenderOnTransaction: true,
  });

  return (
    <div style={{ padding: 40 }}>
      <RichTextEditor editor={editor} {...editorProps}>
        <RichTextEditor.Toolbar {...toolbarProps}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.SourceCode />
          </RichTextEditor.ControlsGroup>
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

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.TaskList />
            <RichTextEditor.TaskListLift />
            <RichTextEditor.TaskListSink />
            <RichTextEditor.Details />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.TableInsert />
            <RichTextEditor.TableDelete />
            <RichTextEditor.TableColumnBefore />
            <RichTextEditor.TableColumnAfter />
            <RichTextEditor.TableColumnDelete />
            <RichTextEditor.TableRowBefore />
            <RichTextEditor.TableRowAfter />
            <RichTextEditor.TableRowDelete />
            <RichTextEditor.TableToggleHeaderRow />
            <RichTextEditor.TableToggleHeaderColumn />
            <RichTextEditor.TableMergeCells />
            <RichTextEditor.TableSplitCell />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Color color="#F03E3E" />
            <RichTextEditor.Color color="#7048E8" />
            <RichTextEditor.Color color="#1098AD" />
            <RichTextEditor.Color color="#37B24D" />
            <RichTextEditor.Color color="#F59F00" />
            <RichTextEditor.UnsetColor />
          </RichTextEditor.ControlsGroup>
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

export function SourceCodeTextMode() {
  const [isSourceCodeModeActive, onSourceCodeTextSwitch] = useState(false);
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
      <RichTextEditor editor={editor} onSourceCodeTextSwitch={onSourceCodeTextSwitch}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.SourceCode />
          </RichTextEditor.ControlsGroup>
          {!isSourceCodeModeActive && (
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Blockquote />
              <RichTextEditor.Bold />
              <RichTextEditor.Italic />
              <RichTextEditor.Underline />
              <RichTextEditor.Strikethrough />
              <RichTextEditor.ClearFormatting />
              <RichTextEditor.Highlight />
            </RichTextEditor.ControlsGroup>
          )}
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

export function Table() {
  const editor = useEditor({
    extensions: [StarterKit, TableKit.configure({ table: { resizable: true } })],
    content: `
      <table>
        <tr><th>Framework</th><th>Stars</th><th>Language</th></tr>
        <tr><td>Mantine</td><td>28k</td><td>TypeScript</td></tr>
        <tr><td>Tiptap</td><td>31k</td><td>TypeScript</td></tr>
      </table>
      <p></p>
    `,
  });

  return (
    <div style={{ padding: 40 }}>
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar>
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
    </div>
  );
}

export function DetailsControl() {
  const editor = useEditor({
    extensions: [StarterKit, Details, DetailsSummary, DetailsContent],
    content: `
      <details>
        <summary>How do I install Mantine?</summary>
        <p>Follow the getting started guide in the documentation to add Mantine to a new or existing project.</p>
      </details>
      <p></p>
    `,
  });

  return (
    <div style={{ padding: 40 }}>
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Details />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
    </div>
  );
}
