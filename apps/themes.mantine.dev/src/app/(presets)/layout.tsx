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

const EMBED_SCRIPT = `try{if(window.self!==window.top){var r=document.documentElement;r.setAttribute("data-embedded","");var s=new URLSearchParams(location.search).get("scheme");if(s==="light"||s==="dark")r.setAttribute("data-mantine-color-scheme",s);}}catch(e){}`;

interface PresetsLayoutProps {
  children: React.ReactNode;
}

export default function PresetsLayout({ children }: PresetsLayoutProps) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <script dangerouslySetInnerHTML={{ __html: EMBED_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
