import createMDX from '@next/mdx';

const withMDX = createMDX({
  options: {
    rehypePlugins: ['rehype-slug'],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'mdx'],
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {},
};

export default withMDX(nextConfig);
