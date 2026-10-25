import '@mantine/core/styles.css';
import '@mantinex/mantine-header/styles.css';
import '@mantinex/mantine-logo/styles.css';

import type { Metadata } from 'next';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { theme } from '@/theme';

const socialPreview =
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/social-preview.png';

export const metadata: Metadata = {
  title: 'Mantine theme editor',
  description: 'Build a Mantine theme and preview it on dashboard, blog and marketing pages',
  keywords: ['react', 'mantine', 'theme', 'theme editor', 'colors'],
  openGraph: {
    type: 'website',
    url: 'https://themes.mantine.dev/',
    title: 'Mantine theme editor',
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
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
