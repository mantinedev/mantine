import { Frontmatter } from '@/types';

export const MDX_CODE_HIGHLIGHT_DATA: Record<string, Frontmatter> = {
  GettingStartedCodeHighlight: {
    title: 'Getting started',
    description: 'Get started with @mantine/code-highlight package',
    package: '@mantine/code-highlight',
    license: 'MIT',
    slug: '/code-highlight/getting-started',
    docs: 'code-highlight/getting-started.mdx',
    hideInSearch: true,
  },

  CodeHighlight: {
    title: 'CodeHighlight',
    package: '@mantine/code-highlight',
    slug: '/code-highlight/code-highlight',
    props: ['CodeHighlight', 'CodeHighlightTabs', 'CodeHighlightFileTree', 'InlineCodeHighlight'],
    styles: ['CodeHighlight', 'CodeHighlightTabs', 'CodeHighlightFileTree', 'InlineCodeHighlight'],
    description: 'Highlight code with shiki or highlight.js',
    source: '@mantine/code-highlight/src',
    license: 'MIT',
    docs: 'code-highlight/code-highlight.mdx',
    searchTags: 'syntax highlighting, prism, shiki, highlight.js, code block, snippet',
  },

  CodeHighlightMoved: {
    title: 'CodeHighlight',
    slug: '/x/code-highlight',
    docs: 'x/code-highlight.mdx',
    hideHeader: true,
    hideInSearch: true,
    hideSiblings: true,
  },

  JsonViewer: {
    title: 'JsonViewer',
    package: '@mantine/code-highlight',
    slug: '/code-highlight/json-viewer',
    props: ['JsonViewer'],
    styles: ['JsonViewer'],
    description:
      'Interactive JSON data viewer with expand/collapse, type indicators and copy to clipboard',
    source: '@mantine/code-highlight/src/JsonViewer/JsonViewer.tsx',
    license: 'MIT',
    docs: 'code-highlight/json-viewer.mdx',
    searchTags: 'json tree, json explorer, json view',
  },

  Diff: {
    title: 'Diff',
    package: '@mantine/code-highlight',
    slug: '/code-highlight/diff',
    props: ['Diff'],
    styles: ['Diff'],
    description: 'Highlight differences between two strings',
    source: '@mantine/code-highlight/src/Diff/Diff.tsx',
    license: 'MIT',
    docs: 'code-highlight/diff.mdx',
    searchTags: 'diff, compare, changes, code review, side by side',
  },
};
