import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/schedule/styles.css';

import type { Metadata } from 'next';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

export const metadata: Metadata = {
  title: 'Mantine theme presets',
  robots: { index: false },
  icons: { shortcut: '/favicon.svg' },
};

interface PresetsLayoutProps {
  children: React.ReactNode;
}

export default function PresetsLayout({ children }: PresetsLayoutProps) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
