import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/schedule/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantinex/demo/styles.css';
import '@mantinex/mantine-header/styles.css';
import '@mantinex/mantine-logo/styles.css';

import type { Metadata } from 'next';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { CodeHighlightProvider } from '@/components/CodeHighlightProvider';
import { Shell } from '@/components/Shell';
import { theme } from '@/theme';

const socialPreview =
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/social-preview.png';

export const metadata: Metadata = {
  title: 'Mantine for AI agents',
  description: 'Skills, MCP server and examples for building Mantine applications with AI agents',
  keywords: ['react', 'mantine', 'ai', 'skills', 'mcp'],
  openGraph: {
    type: 'website',
    url: 'https://ai.mantine.dev/',
    title: 'Mantine for AI agents',
    images: [{ url: socialPreview, width: 1280, height: 640 }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@mantinedev',
    images: [socialPreview],
  },
  icons: { shortcut: '/favicon.svg' },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Notifications />
          <Shell>
            <CodeHighlightProvider>{children}</CodeHighlightProvider>
          </Shell>
        </MantineProvider>
      </body>
    </html>
  );
}
