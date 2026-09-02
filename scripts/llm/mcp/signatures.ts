import { DocSection } from './sections';

function extractFencedCode(body: string): string | null {
  const match = /```[a-z]*\n([\s\S]*?)```/.exec(body);
  return match ? match[1].trim() : null;
}

function findSection(sections: DocSection[], slug: string): DocSection | undefined {
  return sections.find((section) => section.slug === slug);
}

function parseImportTypeNames(body: string): string[] | null {
  const match = /import (?:type )?\{([^}]*)\}/.exec(body);
  if (!match) {
    return null;
  }

  return match[1]
    .split(',')
    .map((name) => name.trim())
    .filter(Boolean);
}

/**
 * Extracts the fenced code block from a page's `## Definition` section, which
 * contains the hook's signature together with its related interfaces and type aliases.
 */
export function extractSignature(sections: DocSection[]): string | null {
  const section = findSection(sections, 'definition');
  return section ? extractFencedCode(section.body) : null;
}

/**
 * Extracts the names of the types listed in a page's `## Exported types` section by
 * parsing its `import type { ... } from '...'` or `import { ... } from '...'` statement.
 * Returns `null` when the section is absent, or when it is present but no such import
 * statement is found.
 */
export function extractExportedTypeNames(sections: DocSection[]): string[] | null {
  const section = findSection(sections, 'exported-types');
  return section ? parseImportTypeNames(section.body) : null;
}
