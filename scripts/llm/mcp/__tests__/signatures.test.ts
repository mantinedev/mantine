/** @jest-environment node */
import { splitSections } from '../sections';
import { extractExportedTypeNames, extractSignature } from '../signatures';

const HOOK_DOC = `# use-disclosure

## Usage

Some usage.

## Definition

\`\`\`tsx
interface UseDisclosureOptions {
  onOpen?: () => void;
}

interface UseDisclosureReturnValue {
  open: () => void;
}

function useDisclosure(
  initialState?: boolean,
  options?: UseDisclosureOptions,
): UseDisclosureReturnValue
\`\`\`

## Exported types

The \`UseDisclosureOptions\` and \`UseDisclosureReturnValue\` types are exported from
the \`@mantine/hooks\` package; you can import them in your application:

\`\`\`tsx
import type { UseDisclosureOptions, UseDisclosureReturnValue } from '@mantine/hooks';
\`\`\`
`;

describe('extractSignature', () => {
  it('returns the fenced code inside the Definition section', () => {
    const { sections } = splitSections(HOOK_DOC);
    expect(extractSignature(sections)).toContain('function useDisclosure(');
    expect(extractSignature(sections)).toContain('interface UseDisclosureOptions');
    expect(extractSignature(sections)).not.toContain('```');
  });

  it('returns null when there is no Definition section', () => {
    const { sections } = splitSections('# x\n\n## Usage\n\nbody\n');
    expect(extractSignature(sections)).toBeNull();
  });
});

describe('extractExportedTypeNames', () => {
  it('returns the type names parsed from a real-shaped Exported types section', () => {
    const { sections } = splitSections(HOOK_DOC);
    expect(extractExportedTypeNames(sections)).toEqual([
      'UseDisclosureOptions',
      'UseDisclosureReturnValue',
    ]);
  });

  it('returns null when there is no Exported types section', () => {
    const { sections } = splitSections('# x\n\n## Definition\n\n```tsx\nconst a = 1;\n```\n');
    expect(extractExportedTypeNames(sections)).toBeNull();
  });

  it('returns null when the section has no import statement', () => {
    const doc = `# x

## Exported types

No types are exported from this hook.
`;
    const { sections } = splitSections(doc);
    expect(extractExportedTypeNames(sections)).toBeNull();
  });

  it('parses a single-type import', () => {
    const doc = `# x

## Exported types

\`\`\`tsx
import type { UseHoverReturnValue } from '@mantine/hooks';
\`\`\`
`;
    const { sections } = splitSections(doc);
    expect(extractExportedTypeNames(sections)).toEqual(['UseHoverReturnValue']);
  });

  it('parses a plain import missing the type keyword', () => {
    const doc = `# x

## Exported types

The \`UseHashOptions\` and \`UseHashReturnValue\` types are exported from \`@mantine/hooks\`;

\`\`\`tsx
import { UseHashOptions, UseHashReturnValue } from '@mantine/hooks';
\`\`\`
`;
    const { sections } = splitSections(doc);
    expect(extractExportedTypeNames(sections)).toEqual(['UseHashOptions', 'UseHashReturnValue']);
  });
});
