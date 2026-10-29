'use client';

import { CodeHighlightAdapterProvider, createShikiAdapter } from '@mantine/code-highlight';

async function loadShiki() {
  const { createHighlighter } = await import('shiki');
  return createHighlighter({ langs: ['tsx', 'scss', 'css', 'html', 'json'], themes: [] });
}

const shikiAdapter = createShikiAdapter(loadShiki);

export function HighlightProvider({ children }: { children: React.ReactNode }) {
  return (
    <CodeHighlightAdapterProvider adapter={shikiAdapter}>{children}</CodeHighlightAdapterProvider>
  );
}
