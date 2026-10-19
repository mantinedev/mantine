'use client';

import { CodeHighlightAdapterProvider, createShikiAdapter } from '@mantine/code-highlight';

async function loadShiki() {
  const { createHighlighter } = await import('shiki');
  const shiki = await createHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json', 'markdown'],
    themes: [],
  });

  return shiki;
}

const shikiAdapter = createShikiAdapter(loadShiki);

interface CodeHighlightProviderProps {
  children: React.ReactNode;
}

export function CodeHighlightProvider({ children }: CodeHighlightProviderProps) {
  return (
    <CodeHighlightAdapterProvider adapter={shikiAdapter}>{children}</CodeHighlightAdapterProvider>
  );
}
