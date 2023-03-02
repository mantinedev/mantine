import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { lowlight } from 'lowlight';
import tsLanguageSyntax from 'highlight.js/lib/languages/typescript';

const code = `
import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { lowlight } from 'lowlight';
import tsLanguageSyntax from 'highlight.js/lib/languages/typescript';

// register languages that your are planning to use
lowlight.registerLanguage('ts', tsLanguageSyntax);

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const codeExample =
  escapeHtml(\`// Valid braces Kata – https://www.codewars.com/kata/5277c8a221e209d3f6000b56

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
}\`);

function Demo() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: \`<p>Regular paragraph</p><pre><code>\${codeExample}</code></pre>\`,
  });

  return (
    <RichTextEditor
      editor={editor}
      styles={(theme) => ({
        content: {
          pre: {
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.fn.rgba(theme.colors.gray[0], 0.65),
            borderRadius: theme.fn.radius(),
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
            fontFamily: theme.fontFamilyMonospace,
            padding: \`\${theme.spacing.md} \${theme.spacing.xl}\`,

            '& code': {
              background: 'none',
              color: 'inherit',
              fontSize: theme.fontSizes.sm,
              padding: 0,
            },

            ' & .hljs-comment, & .hljs-quote': {
              color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
            },

            '& .hljs-variable, & .hljs-template-variable, & .hljs-attribute, & .hljs-tag, & .hljs-name, & .hljs-regexp, & .hljs-link, & .hljs-name, & .hljs-selector-id, & .hljs-selector-class':
              {
                color: theme.colors.orange[5],
              },

            '& .hljs-number, & .hljs-meta, & .hljs-built_in, & .hljs-builtin-name, & .hljs-literal, & .hljs-type, & .hljs-params':
              {
                color: theme.colors[theme.colorScheme === 'dark' ? 'yellow' : 'lime'][5],
              },

            '& .hljs-string, & .hljs-symbol, & .hljs-bullet': {
              color: theme.colors.orange[5],
            },

            '& .hljs-title, & .hljs-section': {
              color: theme.colors[theme.colorScheme === 'dark' ? 'lime' : 'red'][5],
            },

            '& .hljs-keyword, & .hljs-selector-tag': {
              color: theme.colors.indigo[5],
            },

            '& .hljs-emphasis': {
              fontStyle: 'italic',
            },

            '& .hljs-strong': {
              fontWeight: 700,
            },
          },
        },
      })}
    >
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.CodeBlock />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;

// register languages that your are planning to use
lowlight.registerLanguage('ts', tsLanguageSyntax);

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const codeExample =
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

function Demo() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: `<p>Regular paragraph</p><pre><code>${codeExample}</code></pre>`,
  });

  return (
    <RichTextEditor
      editor={editor}
      styles={(theme) => ({
        content: {
          pre: {
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.fn.rgba(theme.colors.gray[0], 0.65),
            borderRadius: theme.fn.radius(),
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
            fontFamily: theme.fontFamilyMonospace,
            padding: `${theme.spacing.md} ${theme.spacing.xl}`,

            '& code': {
              background: 'none',
              color: 'inherit',
              fontSize: theme.fontSizes.sm,
              padding: 0,
            },

            ' & .hljs-comment, & .hljs-quote': {
              color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
            },

            '& .hljs-variable, & .hljs-template-variable, & .hljs-attribute, & .hljs-tag, & .hljs-name, & .hljs-regexp, & .hljs-link, & .hljs-name, & .hljs-selector-id, & .hljs-selector-class':
              {
                color: theme.colors.orange[5],
              },

            '& .hljs-number, & .hljs-meta, & .hljs-built_in, & .hljs-builtin-name, & .hljs-literal, & .hljs-type, & .hljs-params':
              {
                color: theme.colors[theme.colorScheme === 'dark' ? 'yellow' : 'lime'][5],
              },

            '& .hljs-string, & .hljs-symbol, & .hljs-bullet': {
              color: theme.colors.orange[5],
            },

            '& .hljs-title, & .hljs-section': {
              color: theme.colors[theme.colorScheme === 'dark' ? 'lime' : 'red'][5],
            },

            '& .hljs-keyword, & .hljs-selector-tag': {
              color: theme.colors.indigo[5],
            },

            '& .hljs-emphasis': {
              fontStyle: 'italic',
            },

            '& .hljs-strong': {
              fontWeight: 700,
            },
          },
        },
      })}
    >
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.CodeBlock />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

export const codeHighlightStyles: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
