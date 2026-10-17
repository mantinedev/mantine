import createMDX from '@next/mdx';

const withMDX = createMDX({
  options: {
    rehypePlugins: ['rehype-slug'],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  pageExtensions: ['ts', 'tsx', 'mdx'],
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks', '@mantine/code-highlight'],
  },
  turbopack: {},
};

export default withMDX(nextConfig);
