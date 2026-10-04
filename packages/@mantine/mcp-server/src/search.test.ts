/** @jest-environment node */
import { createSearchScorer, suggestNames } from './search';
import { IndexItem, SectionRecord } from './types';

const item = (over: Partial<IndexItem>): IndexItem =>
  ({
    id: 'core-button',
    name: 'Button',
    kind: 'component',
    group: 'components',
    category: 'Buttons',
    package: '@mantine/core',
    route: '/core/button',
    description: 'Button component',
    headings: ['Usage'],
    propsCount: 10,
    hasSignature: false,
    llmUrl: '',
    searchText: 'button button component @mantine/core /core/button buttons usage',
    ...over,
  }) as IndexItem;

const section = (over: Partial<SectionRecord>): SectionRecord => ({
  id: 'core-button',
  slug: 'usage',
  heading: 'Usage',
  snippet: 'Basic usage of the Button component.',
  ...over,
});

describe('createSearchScorer', () => {
  it('ranks the rare-token record in the top 3 for a natural-language query dominated by a common filler word', () => {
    const noiseItems = [
      item({
        id: 'core-alert',
        name: 'Alert',
        searchText: 'alert message form banner notification ui',
      }),
      item({
        id: 'core-badge',
        name: 'Badge',
        searchText: 'badge label form indicator status ui element',
      }),
      item({
        id: 'core-card',
        name: 'Card',
        searchText: 'card surface form container content group',
      }),
      item({
        id: 'core-tabs',
        name: 'Tabs',
        searchText: 'tabs navigation form panel switch ui element',
      }),
      item({
        id: 'core-modal',
        name: 'Modal',
        searchText: 'modal dialog form overlay window ui element',
      }),
    ];

    const noiseSections = [
      section({
        id: 'form-usage',
        slug: 'usage',
        heading: 'Usage',
        snippet: 'basic usage guide with form controls for a form',
      }),
      section({
        id: 'form-setup',
        slug: 'setup',
        heading: 'Setup',
        snippet: 'setup instructions for a new form with default values',
      }),
    ];

    const targetSection = section({
      id: 'form-schema-validation',
      slug: 'zod',
      heading: 'zod',
      snippet: 'zod schema validation example using zod resolver validate fields',
    });

    const scorer = createSearchScorer(noiseItems, [...noiseSections, targetSection]);
    const query = 'validate a form with zod';

    const ranked = [
      ...noiseItems.map((entry) => ({ id: entry.id, score: scorer.scoreItem(entry, query) })),
      ...noiseSections.map((entry) => ({
        id: `${entry.id}#${entry.slug}`,
        score: scorer.scoreSection(entry, query),
      })),
      {
        id: `${targetSection.id}#${targetSection.slug}`,
        score: scorer.scoreSection(targetSection, query),
      },
    ].sort((a, b) => b.score - a.score);

    const rank = ranked.findIndex((entry) => entry.id === 'form-schema-validation#zod');
    expect(rank).toBeLessThan(3);
    expect(ranked[rank].score).toBeGreaterThan(0);
  });

  it('ranks a record matching the one meaningful token above records matching only stopwords', () => {
    const targetItem = item({
      id: 'form-schema-validation',
      name: 'Form schema validation',
      searchText: 'validate form data using zod schema library',
    });
    const stopwordOnlyItem = item({
      id: 'core-guide',
      name: 'Getting started',
      searchText: 'how to do things and use the library',
    });

    const scorer = createSearchScorer([targetItem, stopwordOnlyItem], []);
    const query = 'how do I use zod';

    const targetScore = scorer.scoreItem(targetItem, query);
    const stopwordScore = scorer.scoreItem(stopwordOnlyItem, query);

    expect(targetScore).toBeGreaterThan(stopwordScore);
    expect(stopwordScore).toBe(0);
  });

  it('ranks an exact name match above a body-text match for the same term', () => {
    const exactMatch = item({ id: 'core-button', name: 'Button', searchText: 'button component' });
    const bodyMatch = item({
      id: 'core-card',
      name: 'Card',
      searchText: 'card layout can contain a button inside its content',
    });

    const scorer = createSearchScorer([exactMatch, bodyMatch], []);

    expect(scorer.scoreItem(exactMatch, 'Button')).toBeGreaterThan(
      scorer.scoreItem(bodyMatch, 'Button')
    );
  });

  it('ranks a heading-exact section above a snippet-only section', () => {
    const headingMatch = section({
      id: 'form-schema-validation',
      slug: 'zod',
      heading: 'zod',
      snippet: 'Use zod schema validation with useForm and zodResolver.',
    });
    const snippetOnly = section({
      id: 'form-schema-validation',
      slug: 'other',
      heading: 'Other',
      snippet: 'mentions zod once',
    });

    const scorer = createSearchScorer([], [headingMatch, snippetOnly]);

    expect(scorer.scoreSection(headingMatch, 'zod')).toBeGreaterThan(
      scorer.scoreSection(snippetOnly, 'zod')
    );
  });

  it('carries a match through the raw-token fallback when every token is filtered out', () => {
    const grid = item({ id: 'core-grid', name: 'Grid', searchText: 'grid layout component' });
    const noiseWithoutTheLetter = [
      item({ id: 'core-icon', name: 'Icon', searchText: 'icon control widget' }),
      item({ id: 'core-menu', name: 'Menu', searchText: 'menu item list' }),
    ];
    const scorer = createSearchScorer([grid, ...noiseWithoutTheLetter], []);

    expect(scorer.scoreItem(grid, 'a')).toBeGreaterThan(0);
  });

  it('ranks a page whose name contains a query token above a page matching only via body text', () => {
    const titleMatch = item({
      id: 'core-rare-widget',
      name: 'Rare Widget',
      searchText: 'rare gadget component library',
    });
    const bodyOnly = item({
      id: 'core-other',
      name: 'Other Component',
      searchText: 'rare gadget component library',
    });
    const filler = item({
      id: 'core-filler',
      name: 'Filler',
      searchText: 'unrelated filler content page',
    });

    const scorer = createSearchScorer([titleMatch, bodyOnly, filler], []);
    const query = 'rare gadget';

    expect(scorer.scoreItem(titleMatch, query)).toBeGreaterThan(scorer.scoreItem(bodyOnly, query));
  });
});

describe('suggestNames', () => {
  const index = [
    item({ id: 'hooks-use-disclosure', name: 'use-disclosure', searchText: 'use-disclosure' }),
    item({
      id: 'hooks-use-click-outside',
      name: 'use-click-outside',
      searchText: 'use-click-outside',
    }),
  ];

  it('suggests near matches for a typo', () => {
    expect(suggestNames(index, 'use-disclose')).toContain('use-disclosure');
  });

  it('returns an empty list when nothing is close', () => {
    expect(suggestNames(index, 'zzzzzzzz')).toEqual([]);
  });
});
