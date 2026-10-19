import { createRequire } from 'node:module';
import path from 'node:path';
import createMdx from '@next/mdx';

const require = createRequire(import.meta.url);
const workspaceRoot = path.resolve(path.dirname(require.resolve('next/package.json')), '..', '..');

const withMDX = createMdx({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    rehypePlugins: ['rehype-slug'],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  pageExtensions: ['tsx', 'mdx'],
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: [
      '@mantine/core',
      '@mantine/hooks',
      '@mantine/dates',
      '@mantine/form',
      '@mantine/charts',
      '@mantine/carousel',
      '@mantine/lightbox',
      '@mantine/code-highlight',
      '@mantine/dropzone',
      '@mantine/modals',
      '@mantine/notifications',
      '@mantine/nprogress',
      '@mantine/spotlight',
      '@mantine/tiptap',
      '@mantine/store',
      '@docs/demos',
      '@mantinex/demo',
    ],
  },
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 10,
  },
  turbopack: {
    root: workspaceRoot,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          child_process: false,
          fs: false,
          'builtin-modules': false,
          worker_threads: false,
        },
      };
    }

    return config;
  },
};

export default withMDX(nextConfig);
