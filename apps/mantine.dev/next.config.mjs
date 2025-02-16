import createMdx from '@next/mdx';
import rehypeSlug from 'rehype-slug';

const withMDX = createMdx({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    rehypePlugins: [rehypeSlug],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'mdx'],
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
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
