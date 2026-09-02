/** @jest-environment node */
import { collectNavPages, isExcludedSlug, resolveKind } from '../page-source';

describe('isExcludedSlug', () => {
  it('excludes every changelog page', () => {
    expect(isExcludedSlug('/changelog/9-0-0')).toBe(true);
    expect(isExcludedSlug('/changelog/7-0-0')).toBe(true);
  });

  it('excludes the five non-code pages', () => {
    ['/about', '/support', '/contribute', '/browser-support', '/guides/llms'].forEach((slug) => {
      expect(isExcludedSlug(slug)).toBe(true);
    });
  });

  it('keeps installation pages, which carry setup code', () => {
    expect(isExcludedSlug('/form/package')).toBe(false);
    expect(isExcludedSlug('/dates/getting-started')).toBe(false);
    expect(isExcludedSlug('/core/package')).toBe(false);
  });

  it('keeps real docs and guides', () => {
    expect(isExcludedSlug('/core/button')).toBe(false);
    expect(isExcludedSlug('/guides/next')).toBe(false);
    expect(isExcludedSlug('/styles/styles-api')).toBe(false);
  });
});

describe('resolveKind', () => {
  it('maps groups to kinds', () => {
    expect(resolveKind('hooks', 'use-disclosure')).toBe('hook');
    expect(resolveKind('components', 'Button')).toBe('component');
    expect(resolveKind('extensions', 'AreaChart')).toBe('component');
    expect(resolveKind('theming', 'Colors')).toBe('guide');
    expect(resolveKind('gettingStarted', 'Next.js')).toBe('guide');
  });

  it('splits the form group: only use-* pages are hooks', () => {
    expect(resolveKind('form', 'use-form')).toBe('hook');
    expect(resolveKind('form', 'use-field')).toBe('hook');
    expect(resolveKind('form', 'Form validation')).toBe('guide');
    expect(resolveKind('form', 'Nested fields')).toBe('guide');
    expect(resolveKind('form', 'Get started')).toBe('guide');
  });

  it('does not treat a title that merely starts with use- as a hook', () => {
    expect(resolveKind('form', 'use-form with all inputs')).toBe('guide');
  });
});

describe('collectNavPages', () => {
  const pages = collectNavPages();

  it('returns every nav page minus exclusions', () => {
    expect(pages.length).toBeGreaterThan(300);
  });

  it('includes hooks', () => {
    const hookPages = pages.filter((p) => p.group === 'hooks');
    expect(hookPages.length).toBeGreaterThan(80);
    expect(hookPages.some((p) => p.id === 'hooks-use-disclosure')).toBe(true);
  });

  it('classifies pages as hooks: the hooks group plus use-form and use-field', () => {
    const hookKindPages = pages.filter((p) => p.kind === 'hook');
    expect(hookKindPages.length).toBeGreaterThan(80);
    expect(hookKindPages.some((p) => p.id === 'hooks-use-disclosure')).toBe(true);
    expect(hookKindPages.some((p) => p.id === 'form-use-form')).toBe(true);
  });

  it('includes form pages', () => {
    const formPages = pages.filter((p) => p.package === '@mantine/form');
    expect(formPages.length).toBeGreaterThan(14);
    expect(formPages.some((p) => p.id === 'form-use-form')).toBe(true);
  });

  it('classifies /form/all-inputs as a guide, not a hook', () => {
    expect(pages.find((p) => p.route === '/form/all-inputs')?.kind).toBe('guide');
  });

  it('carries no changelog or non-code pages', () => {
    expect(pages.some((p) => p.route.startsWith('/changelog'))).toBe(false);
    expect(pages.some((p) => p.route === '/about')).toBe(false);
  });

  it('preserves searchTags where the docs define them', () => {
    const spotlight = pages.find((p) => p.route === '/x/spotlight');
    expect(spotlight?.searchTags).toContain('command palette');
  });

  it('assigns ids matching the llms filename convention', () => {
    expect(pages.find((p) => p.route === '/form/use-form')?.id).toBe('form-use-form');
    expect(pages.find((p) => p.route === '/core/button')?.id).toBe('core-button');
  });

  it('infers package for a landing page only when its group has exactly one package', () => {
    expect(pages.find((p) => p.route === '/core/package')?.package).toBe('@mantine/core');
    expect(pages.find((p) => p.route === '/hooks/package')?.package).toBe('@mantine/hooks');
    expect(pages.find((p) => p.route === '/form/package')?.package).toBe('@mantine/form');
    expect(pages.find((p) => p.route === '/x/extensions')?.package).toBeUndefined();
  });
});
