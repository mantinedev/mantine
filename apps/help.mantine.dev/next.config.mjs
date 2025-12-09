import createMDX from '@next/mdx';
import rehypeSlug from 'rehype-slug';

const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypeSlug],
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
