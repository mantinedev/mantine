/** @jest-environment node */
import path from 'node:path';
import fs from 'fs-extra';

const MCP_DIR = path.join(process.cwd(), 'apps/mantine.dev/public/mcp');
const MCP_DATA_EXISTS = fs.pathExistsSync(path.join(MCP_DIR, 'index.json'));

const describeCompiled = MCP_DATA_EXISTS ? describe : describe.skip;

describeCompiled('compiled MCP data (skipped: run npm run compile:mcp first)', () => {
  let index: any[];

  beforeAll(async () => {
    index = await fs.readJSON(path.join(MCP_DIR, 'index.json'));
  });

  it('indexes more than 400 documents', () => {
    expect(index.length).toBeGreaterThan(400);
  });

  it('includes hooks — the original bug', () => {
    const hooks = index.filter((i) => i.kind === 'hook' && i.group === 'hooks');
    expect(hooks.length).toBeGreaterThan(80);
    expect(index.find((i) => i.id === 'hooks-use-disclosure')?.kind).toBe('hook');
  });

  it('includes @mantine/form pages — the reported bug', () => {
    const formPages = index.filter((i) => i.package === '@mantine/form');
    expect(formPages.length).toBeGreaterThan(14);
    expect(index.find((i) => i.id === 'form-use-form')?.package).toBe('@mantine/form');
  });

  it('includes more than 70 FAQ pages', () => {
    expect(index.filter((i) => i.kind === 'faq').length).toBeGreaterThan(70);
  });

  it('excludes changelogs and non-code pages', () => {
    expect(index.some((i) => i.route.startsWith('/changelog'))).toBe(false);
    expect(index.some((i) => ['/about', '/support', '/contribute'].includes(i.route))).toBe(false);
  });

  it('keeps installation pages', () => {
    expect(index.some((i) => i.route === '/form/package')).toBe(true);
    expect(index.some((i) => i.route === '/dates/getting-started')).toBe(true);
  });

  it('gives every entry a reachable doc file', async () => {
    for (const item of index) {
      expect(Array.isArray(item.headings)).toBe(true);
      expect(await fs.pathExists(path.join(MCP_DIR, 'docs', `${item.id}.json`))).toBe(true);
    }
  });

  it('gives every non-FAQ entry at least one section', () => {
    // 16 q-* FAQ pages legitimately use #### headings and have no ## sections.
    // Every other indexed page must have a section outline, or get_item_doc's
    // outline mode has nothing to return.
    const emptyNonFaq = index.filter((i) => i.kind !== 'faq' && i.headings.length === 0);
    expect(emptyNonFaq.map((i) => i.id)).toEqual([]);
  });

  it('carries searchTags into searchText', () => {
    const spotlight = index.find((i) => i.route === '/x/spotlight');
    expect(spotlight.searchText).toContain('command palette');
  });

  it('marks hooks as having signatures', () => {
    const useDisclosure = index.find((i) => i.id === 'hooks-use-disclosure');
    expect(useDisclosure.hasSignature).toBe(true);
  });

  it('emits a section index that excludes changelog sections', async () => {
    const sections = await fs.readJSON(path.join(MCP_DIR, 'sections.json'));
    expect(sections.length).toBeGreaterThan(2900);
    expect(sections.some((s: any) => s.id.startsWith('changelog-'))).toBe(false);
    expect(sections.some((s: any) => s.id === 'form-schema-validation' && s.slug === 'zod')).toBe(
      true
    );
  });

  it('bumps the schema version', async () => {
    const version = await fs.readJSON(path.join(MCP_DIR, 'version.json'));
    expect(version.schemaVersion).toBe(2);
  });

  it('gives every entry a non-empty docsUrl', () => {
    index.forEach((item) => {
      expect(typeof item.docsUrl).toBe('string');
      expect(item.docsUrl.length).toBeGreaterThan(0);
    });
  });

  it('points FAQ docsUrl at help.mantine.dev and every other docsUrl at mantine.dev', () => {
    index
      .filter((i) => i.kind === 'faq')
      .forEach((item) => {
        expect(item.docsUrl.startsWith('https://help.mantine.dev')).toBe(true);
      });

    index
      .filter((i) => i.kind !== 'faq')
      .forEach((item) => {
        expect(item.docsUrl.startsWith('https://mantine.dev')).toBe(true);
      });
  });

  it('gives every FAQ entry a non-empty description', () => {
    index
      .filter((i) => i.kind === 'faq')
      .forEach((item) => {
        expect(typeof item.description).toBe('string');
        expect(item.description.length).toBeGreaterThan(0);
      });
  });

  it('carries the FAQ description into searchText', () => {
    const selectFuzzy = index.find((i) => i.id === 'q-select-fuzzy');
    expect(selectFuzzy.searchText).toContain('third-party');
  });
});
