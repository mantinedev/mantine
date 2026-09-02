#!/usr/bin/env tsx
import path from 'node:path';
import fs from 'fs-extra';
import { collectNavPages, PageEntry } from './mcp/page-source';
import { createSearchText } from './mcp/search-text';
import { SNIPPET_LENGTH, splitSections } from './mcp/sections';
import { extractExportedTypeNames, extractSignature } from './mcp/signatures';

const config = {
  rootDir: process.cwd(),
  siteUrl: (
    process.env.MCP_DOCS_SITE_URL ||
    process.env.LLM_DOCS_SITE_URL ||
    'https://mantine.dev'
  ).replace(/\/+$/, ''),
  helpSiteUrl: (process.env.MCP_HELP_SITE_URL || 'https://help.mantine.dev').replace(/\/+$/, ''),
  propsDataPath: './apps/mantine.dev/src/.docgen/docgen.json',
  llmsPath: './apps/mantine.dev/public/llms',
  publicMcpPath: './apps/mantine.dev/public/mcp',
  helpLlmsPrefix: 'q-',
};

function normalizeProps(propsData: Record<string, any>, componentNames: string[]) {
  const result: any[] = [];

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

function faqTitle(markdown: string, fallback: string): string {
  const match = /^#\s+(.+)$/m.exec(markdown);
  return match ? match[1].trim() : fallback;
}

function faqDescription(markdown: string): string {
  const titleMatch = /^#\s+.+$/m.exec(markdown);
  if (!titleMatch) {
    return '';
  }

  const rest = markdown.slice(titleMatch.index + titleMatch[0].length).split('\n');
  const descriptionLine = rest.find((line) => line.trim().length > 0);
  return descriptionLine ? descriptionLine.trim() : '';
}

function resolveDocsUrl(page: PageEntry): string {
  return page.kind === 'faq'
    ? `${config.helpSiteUrl}${page.route}`
    : `${config.siteUrl}${page.route}`;
}

/**
 * Structural self-check for the compiled output, run on every `compile:mcp`.
 * The equivalent jest assertions only run when compiled data already exists
 * on disk, so this is the only check that always runs in CI.
 */
function validateCompiledOutput(index: any[], docFileCount: number): void {
  const violations: string[] = [];

  if (!index.some((item) => item.kind === 'hook')) {
    violations.push('no item has kind === "hook"');
  }

  if (!index.some((item) => item.package === '@mantine/form')) {
    violations.push('no item has package === "@mantine/form"');
  }

  const changelogItems = index.filter((item) => String(item.route).startsWith('/changelog'));
  if (changelogItems.length > 0) {
    violations.push(
      `${changelogItems.length} item(s) have a route starting with /changelog: ${changelogItems
        .map((item) => item.id)
        .join(', ')}`
    );
  }

  index.forEach((item) => {
    if (!item.id) {
      violations.push(`an item is missing a non-empty id (route: ${item.route})`);
    }

    if (!item.docsUrl) {
      violations.push(`item "${item.id}" is missing a non-empty docsUrl`);
    }

    if (!Array.isArray(item.headings)) {
      violations.push(`item "${item.id}" is missing a headings array`);
    }
  });

  index
    .filter((item) => item.kind === 'faq')
    .forEach((item) => {
      if (!item.description) {
        violations.push(`FAQ item "${item.id}" is missing a non-empty description`);
      }
    });

  if (docFileCount !== index.length) {
    violations.push(
      `docs/<id>.json file count (${docFileCount}) does not match index length (${index.length})`
    );
  }

  if (violations.length > 0) {
    throw new Error(
      `MCP data compilation produced invalid output:\n${violations.map((v) => `- ${v}`).join('\n')}`
    );
  }
}

async function collectFaqPages(): Promise<PageEntry[]> {
  const files = (await fs.readdir(config.llmsPath)).filter(
    (file) => file.startsWith(config.helpLlmsPrefix) && file.endsWith('.md')
  );

  return Promise.all(
    files.sort().map(async (file) => {
      const id = file.replace(/\.md$/, '');
      const markdown = await fs.readFile(path.join(config.llmsPath, file), 'utf-8');

      return {
        id,
        name: faqTitle(markdown, id),
        kind: 'faq' as const,
        group: 'gettingStarted' as const,
        category: 'FAQ',
        route: `/q/${id.slice(config.helpLlmsPrefix.length)}`,
        description: faqDescription(markdown),
        propsRefs: [],
      };
    })
  );
}

async function compile() {
  const propsData = await fs.readJSON(config.propsDataPath);
  const pages = [...collectNavPages(), ...(await collectFaqPages())];

  const docsDir = path.join(config.publicMcpPath, 'docs');
  await fs.remove(path.join(config.publicMcpPath, 'components'));
  await fs.remove(docsDir);
  await fs.ensureDir(docsDir);

  const index: any[] = [];
  const sectionIndex: any[] = [];
  const missingPages: PageEntry[] = [];

  for (const page of pages) {
    const llmFileName = `${page.id}.md`;
    const llmFilePath = path.join(config.llmsPath, llmFileName);

    if (!(await fs.pathExists(llmFilePath))) {
      missingPages.push(page);
      continue;
    }

    const markdown = await fs.readFile(llmFilePath, 'utf-8');
    const { intro, sections } = splitSections(markdown);
    const props = normalizeProps(propsData, page.propsRefs);
    const signature = extractSignature(sections);
    const exportedTypeNames = extractExportedTypeNames(sections);
    const headings = sections.map((section) => section.heading);

    const item = {
      id: page.id,
      name: page.name,
      kind: page.kind,
      group: page.group,
      category: page.category,
      package: page.package,
      route: page.route,
      docsUrl: resolveDocsUrl(page),
      description: page.description,
      searchTags: page.searchTags,
      headings,
      propsCount: props.length,
      hasSignature: signature !== null,
      llmUrl: `${config.siteUrl}/llms/${llmFileName}`,
      searchText: createSearchText({
        name: page.name,
        description: page.description,
        package: page.package,
        route: page.route,
        category: page.category,
        searchTags: page.searchTags,
        headings,
        propNames: props.map((prop) => prop.name),
      }),
    };

    index.push(item);

    sections.forEach((section) => {
      sectionIndex.push({
        id: page.id,
        slug: section.slug,
        heading: section.heading,
        snippet: section.body.slice(0, SNIPPET_LENGTH),
      });
    });

    await fs.writeJSON(
      path.join(docsDir, `${page.id}.json`),
      {
        item,
        intro,
        sections,
        props,
        signature,
        exportedTypeNames,
        source: page.source,
        docs: page.docs,
      },
      { spaces: 2 }
    );
  }

  if (missingPages.length > 0) {
    const details = missingPages.map((page) => `${page.id} (${page.route})`).join(', ');
    throw new Error(`Missing generated markdown for ${missingPages.length} page(s): ${details}`);
  }

  const docFiles = (await fs.readdir(docsDir)).filter((file) => file.endsWith('.json'));
  validateCompiledOutput(index, docFiles.length);

  const packageJson = await fs.readJSON(path.join(config.rootDir, 'package.json'));

  await fs.writeJSON(path.join(config.publicMcpPath, 'index.json'), index, { spaces: 2 });
  await fs.writeJSON(path.join(config.publicMcpPath, 'sections.json'), sectionIndex, { spaces: 0 });
  await fs.writeJSON(
    path.join(config.publicMcpPath, 'version.json'),
    {
      schemaVersion: 2,
      generatedAt: new Date().toISOString(),
      mantineVersion: packageJson.version,
      siteUrl: config.siteUrl,
      itemsCount: index.length,
      sectionsCount: sectionIndex.length,
    },
    { spaces: 2 }
  );

  // oxlint-disable-next-line no-console
  console.log(`Compiled ${index.length} documents, ${sectionIndex.length} sections`);
}

compile().catch((error) => {
  // oxlint-disable-next-line no-console
  console.error('Failed to compile MCP data', error);
  process.exit(1);
});
