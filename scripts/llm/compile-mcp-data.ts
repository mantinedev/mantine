#!/usr/bin/env tsx
import path from 'node:path';
import glob from 'fast-glob';
import fs from 'fs-extra';

interface CompilerConfig {
  rootDir: string;
  siteUrl: string;
  mdxDataPath: string;
  propsDataPath: string;
  publicPath: string;
}

interface MdxEntry {
  id: string;
  name: string;
  kind: 'component' | 'hook';
  packageName: string;
  route: string;
  description: string;
  source?: string;
  docs?: string;
  propsRefs: string[];
}

interface IndexItem {
  id: string;
  name: string;
  kind: 'component' | 'hook';
  package: string;
  route: string;
  description: string;
  propsCount: number;
  llmUrl: string;
  componentDataUrl: string;
  searchText: string;
}

interface ComponentData extends Omit<IndexItem, 'componentDataUrl'> {
  source?: string;
  docs?: string;
  markdown: string;
  props: Array<{
    name: string;
    description?: string;
    required?: boolean;
    defaultValue?: unknown;
    type?: unknown;
    sourceComponent: string;
  }>;
}

const config: CompilerConfig = {
  rootDir: process.cwd(),
  siteUrl: process.env.MCP_DOCS_SITE_URL || process.env.LLM_DOCS_SITE_URL || 'https://mantine.dev',
  mdxDataPath: './apps/mantine.dev/src/mdx/data',
  propsDataPath: './apps/mantine.dev/src/.docgen/docgen.json',
  publicPath: './apps/mantine.dev/public',
};

function getRouteFileName(route: string, extension: string) {
  const trimmed = route.replace(/^\/+/, '');
  const base = trimmed === '' ? 'index' : trimmed.replace(/\//g, '-');
  return `${base}.${extension}`;
}

function parseArrayLiteral(content: string, key: string): string[] {
  const match = content.match(new RegExp(`${key}:\\s*\\[([^\\]]*)\\]`));
  if (!match) {
    return [];
  }

  return match[1]
    .split(',')
    .map((item) => item.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);
}

function parseMdxEntries(fileContent: string): MdxEntry[] {
  const exportMatch = fileContent.match(/export const MDX_\w+_DATA[^=]*=\s*{([\s\S]*?)};/);
  if (!exportMatch) {
    return [];
  }

  const dataContent = exportMatch[1];
  const componentRegex = /(\w+):\s*{([^{}]*(?:{[^{}]*}[^{}]*)*)}/g;
  const result: MdxEntry[] = [];

  let match: RegExpExecArray | null;
  while ((match = componentRegex.exec(dataContent)) !== null) {
    const id = match[1];
    const block = match[2];

    const packageMatch = block.match(/package:\s*['"](@mantine\/[^'"]+)['"]/);
    const slugMatch = block.match(/slug:\s*['"]([^'"]+)['"]/);
    const titleMatch = block.match(/title:\s*['"]([^'"]+)['"]/);

    if (!packageMatch || !slugMatch || !titleMatch) {
      continue;
    }

    const packageName = packageMatch[1];
    const route = slugMatch[1];
    const name = titleMatch[1];
    const descriptionMatch = block.match(/description:\s*['"]([^'"]+)['"]/);
    const sourceMatch = block.match(/source:\s*['"]([^'"]+)['"]/);
    const docsMatch = block.match(/docs:\s*['"]([^'"]+)['"]/);
    const propsRefs = parseArrayLiteral(block, 'props');

    const kind: 'component' | 'hook' = packageName === '@mantine/hooks' ? 'hook' : 'component';

    result.push({
      id,
      name,
      kind,
      packageName,
      route,
      description: descriptionMatch ? descriptionMatch[1] : '',
      source: sourceMatch?.[1],
      docs: docsMatch?.[1],
      propsRefs,
    });
  }

  return result;
}

function normalizeProps(propsData: Record<string, any>, componentNames: string[]) {
  const result: ComponentData['props'] = [];

  componentNames.forEach((componentName) => {
    const props = propsData?.[componentName]?.props;
    if (!props || typeof props !== 'object') {
      return;
    }

    Object.keys(props).forEach((propName) => {
      const propData = props[propName] || {};
      result.push({
        name: propName,
        description: propData.description,
        required: propData.required,
        defaultValue: propData.defaultValue,
        type: propData.type,
        sourceComponent: componentName,
      });
    });
  });

  return result;
}

function createSearchText(item: {
  name: string;
  description: string;
  packageName: string;
  route: string;
  props: ComponentData['props'];
}) {
  return [
    item.name,
    item.description,
    item.packageName,
    item.route,
    item.props.map((prop) => prop.name).join(' '),
  ]
    .join(' ')
    .toLowerCase();
}

async function compile() {
  const mdxDataFiles = await glob('mdx-*-data.ts', {
    cwd: config.mdxDataPath,
    absolute: true,
  });

  const allEntries: MdxEntry[] = [];

  for (const file of mdxDataFiles) {
    const content = await fs.readFile(file, 'utf-8');
    allEntries.push(...parseMdxEntries(content));
  }

  const propsData = await fs.readJSON(config.propsDataPath);

  const siteUrl = config.siteUrl.replace(/\/+$/, '');
  const publicMcpDir = path.join(config.publicPath, 'mcp');
  const componentsDir = path.join(publicMcpDir, 'components');

  await fs.ensureDir(componentsDir);

  const componentEntries = allEntries
    .filter((entry) => entry.kind === 'component')
    .filter((entry) => entry.packageName.startsWith('@mantine/'))
    .filter((entry) => entry.packageName !== '@mantine/hooks')
    .filter((entry) => entry.propsRefs.length > 0)
    .sort((a, b) => a.name.localeCompare(b.name));

  const index: IndexItem[] = [];

  for (const entry of componentEntries) {
    const llmFileName = getRouteFileName(entry.route, 'md');
    const llmFilePath = path.join(config.publicPath, 'llms', llmFileName);

    if (!(await fs.pathExists(llmFilePath))) {
      continue;
    }

    const markdown = await fs.readFile(llmFilePath, 'utf-8');
    const props = normalizeProps(propsData, entry.propsRefs);
    const componentDataFileName = getRouteFileName(entry.route, 'json');

    const item: IndexItem = {
      id: llmFileName.replace(/\.md$/, ''),
      name: entry.name,
      kind: 'component',
      package: entry.packageName,
      route: entry.route,
      description: entry.description,
      propsCount: props.length,
      llmUrl: `${siteUrl}/llms/${llmFileName}`,
      componentDataUrl: `/mcp/components/${componentDataFileName}`,
      searchText: createSearchText({
        name: entry.name,
        description: entry.description,
        packageName: entry.packageName,
        route: entry.route,
        props,
      }),
    };

    const componentData: ComponentData = {
      ...item,
      source: entry.source,
      docs: entry.docs,
      markdown,
      props,
    };

    await fs.writeJSON(path.join(componentsDir, componentDataFileName), componentData, { spaces: 2 });
    index.push(item);
  }

  const packageJson = await fs.readJSON(path.join(config.rootDir, 'package.json'));

  await fs.writeJSON(path.join(publicMcpDir, 'index.json'), index, { spaces: 2 });
  await fs.writeJSON(
    path.join(publicMcpDir, 'version.json'),
    {
      schemaVersion: 1,
      generatedAt: new Date().toISOString(),
      mantineVersion: packageJson.version,
      siteUrl,
      itemsCount: index.length,
    },
    { spaces: 2 }
  );
}

compile().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('Failed to compile MCP data', error);
  process.exit(1);
});
