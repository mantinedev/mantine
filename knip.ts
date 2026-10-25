import type { KnipConfig } from 'knip';

const mdxImports = (text: string) =>
  [...text.replace(/```[\s\S]*?```/g, '').matchAll(/^import[^;]+;?$/gm)]
    .map((match) => match[0])
    .join('\n');

const packageWorkspace = {
  entry: ['src/index.ts', 'src/**/*.story.{ts,tsx}', 'src/**/*.test.{ts,tsx}'],
  project: ['src/**/*.{ts,tsx}'],
};

const config: KnipConfig = {
  ignoreExportsUsedInFile: true,
  rules: {
    dependencies: 'off',
    devDependencies: 'off',
    unlisted: 'off',
    binaries: 'off',
    duplicates: 'off',
  },
  compilers: {
    mdx: mdxImports,
  },
  workspaces: {
    '.': {
      entry: ['scripts/**/*.ts', '.storybook/*.{ts,tsx}', '@types/**/*.ts'],
      project: ['scripts/**/*.ts', '@types/**/*.ts'],
    },
    'packages/@mantine/*': packageWorkspace,
    'packages/@mantinex/*': packageWorkspace,
    'packages/@docs/*': {
      entry: ['src/index.ts', 'src/**/*.story.{ts,tsx}'],
      project: ['src/**/*.{ts,tsx}'],
    },
    'packages/@mantine-tests/*': {
      entry: ['src/index.ts'],
      project: ['src/**/*.{ts,tsx}'],
    },
    'apps/mantine.dev': {
      entry: ['src/pages/**/*.mdx'],
      project: ['src/**/*.{ts,tsx,mdx}'],
    },
    'apps/help.mantine.dev': {
      entry: ['src/pages/**/*.mdx'],
      project: ['src/**/*.{ts,tsx,mdx}'],
    },
    'apps/ai.mantine.dev': {
      entry: ['src/app/**/*.mdx'],
      project: ['src/**/*.{ts,tsx,mdx}', 'test-utils/**/*.ts', '@types/**/*.ts'],
    },
    'apps/themes.mantine.dev': {
      entry: ['src/app/**/*.tsx'],
      project: ['src/**/*.{ts,tsx}', '@types/**/*.ts'],
    },
  },
};

export default config;
