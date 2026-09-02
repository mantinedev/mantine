import { createSearchScorer, SearchScorer, suggestNames } from './search';
import {
  DocData,
  GetItemArgs,
  IndexItem,
  ListItemsArgs,
  SearchDocsArgs,
  SectionRecord,
} from './types';

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function clampLimit(limit: number | undefined, fallback: number, max: number): number {
  if (typeof limit !== 'number' || Number.isNaN(limit)) {
    return fallback;
  }

  return Math.max(1, Math.min(max, Math.floor(limit)));
}

const INDEX_REVALIDATE_INTERVAL_MS = 5 * 60 * 1000;

/** Fetches and caches the static MCP data published alongside the docs site */
export class MantineMcpDataClient {
  private readonly baseUrl: string;
  private readonly timeoutMs: number;
  private indexCache: IndexItem[] | null = null;
  private indexEtag: string | null = null;
  private indexCheckedAt = 0;
  private sectionsCache: SectionRecord[] | null = null;
  private docCache = new Map<string, DocData>();
  private scorer: SearchScorer | null = null;

  constructor(baseUrl = 'https://mantine.dev/mcp', timeoutMs = 10000) {
    this.baseUrl = baseUrl.replace(/\/+$/, '');
    this.timeoutMs = timeoutMs;
  }

  private async fetchJson<T>(relativePath: string, etag?: string | null) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const url = `${this.baseUrl}/${relativePath.replace(/^\/+/, '')}`;
      const headers = etag ? { 'If-None-Match': etag } : undefined;
      const response = await fetch(url, { signal: controller.signal, headers });

      if (response.status === 304) {
        return { data: null as T | null, etag };
      }

      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.status}`);
      }

      return { data: (await response.json()) as T, etag: response.headers.get('etag') };
    } finally {
      clearTimeout(timer);
    }
  }

  /**
   * Re-fetches the index if the published copy changed since it was cached.
   *
   * Best-effort: a revalidation failure (network blip, non-ok response) is logged and
   * swallowed so the still-good cached index keeps serving the in-flight request instead of
   * failing it outright.
   */
  private async revalidateIndex(): Promise<void> {
    try {
      const { data, etag } = await this.fetchJson<IndexItem[]>('index.json', this.indexEtag);

      if (data) {
        this.indexCache = data;
        this.indexEtag = etag ?? null;
        this.sectionsCache = null;
        this.docCache.clear();
        this.scorer = null;
      }
    } catch (error) {
      // oxlint-disable-next-line no-console
      console.error('Failed to revalidate Mantine MCP index, serving cached data', error);
    }
  }

  async getIndex(): Promise<IndexItem[]> {
    if (!this.indexCache) {
      const { data, etag } = await this.fetchJson<IndexItem[]>('index.json');
      this.indexCache = data ?? [];
      this.indexEtag = etag ?? null;
      this.indexCheckedAt = Date.now();
      return this.indexCache;
    }

    const now = Date.now();
    if (now - this.indexCheckedAt >= INDEX_REVALIDATE_INTERVAL_MS) {
      this.indexCheckedAt = now;
      await this.revalidateIndex();
    }

    return this.indexCache;
  }

  async getSections(): Promise<SectionRecord[]> {
    if (this.sectionsCache) {
      return this.sectionsCache;
    }

    const { data } = await this.fetchJson<SectionRecord[]>('sections.json');
    this.sectionsCache = data ?? [];
    return this.sectionsCache;
  }

  private async getScorer(): Promise<SearchScorer> {
    if (this.scorer) {
      return this.scorer;
    }

    const index = await this.getIndex();
    const sections = await this.getSections();
    this.scorer = createSearchScorer(index, sections);
    return this.scorer;
  }

  private async getDocData(id: string): Promise<DocData> {
    const cached = this.docCache.get(id);
    if (cached) {
      return cached;
    }

    const { data } = await this.fetchJson<DocData>(`docs/${id}.json`);
    if (!data) {
      throw new Error(`Missing document data for ${id}`);
    }

    this.docCache.set(id, data);
    return data;
  }

  async listItems(args: ListItemsArgs = {}): Promise<IndexItem[]> {
    const limit = clampLimit(args.limit, 30, 500);
    const query = args.query ? normalize(args.query) : null;
    const index = await this.getIndex();

    return index
      .filter((item) => (args.kind ? item.kind === args.kind : true))
      .filter((item) => (args.group ? item.group === args.group : true))
      .filter((item) =>
        args.category ? normalize(item.category) === normalize(args.category) : true
      )
      .filter((item) =>
        args.package ? normalize(item.package || '') === normalize(args.package) : true
      )
      .filter((item) => (query ? item.searchText.includes(query) : true))
      .slice(0, limit);
  }

  async findItem(args: GetItemArgs): Promise<IndexItem | null> {
    const requested = normalize(args.name);
    const index = await this.getIndex();
    const candidates = args.kind ? index.filter((item) => item.kind === args.kind) : index;

    return (
      candidates.find((item) => normalize(item.id) === requested) ||
      candidates.find((item) => normalize(item.name) === requested) ||
      candidates.find((item) => normalize(item.name).startsWith(requested)) ||
      candidates.find((item) => item.searchText.includes(requested)) ||
      null
    );
  }

  /** Names close to a failed lookup, for a helpful error message */
  async suggestFor(name: string): Promise<string[]> {
    return suggestNames(await this.getIndex(), name);
  }

  async search(args: SearchDocsArgs) {
    const limit = clampLimit(args.limit, 20, 100);
    const query = args.query.trim();

    if (!query) {
      return [];
    }

    const index = await this.getIndex();
    const sections = await this.getSections();
    const scorer = await this.getScorer();

    const allowed = index
      .filter((item) => (args.kind ? item.kind === args.kind : true))
      .filter((item) =>
        args.package ? normalize(item.package || '') === normalize(args.package) : true
      );
    const allowedIds = new Map(allowed.map((item) => [item.id, item]));

    const sectionHits = sections
      .filter((section) => allowedIds.has(section.id))
      .map((section) => ({ section, score: scorer.scoreSection(section, query) }))
      .filter((entry) => entry.score > 0);

    const pageHits = allowed
      .map((item) => ({ item, score: scorer.scoreItem(item, query) }))
      .filter((entry) => entry.score > 0);

    const merged = new Map<string, { item: IndexItem; section?: SectionRecord; score: number }>();

    pageHits.forEach((hit) => {
      merged.set(hit.item.id, { item: hit.item, score: hit.score });
    });

    sectionHits.forEach((hit) => {
      const item = allowedIds.get(hit.section.id)!;
      const key = `${hit.section.id}#${hit.section.slug}`;
      merged.set(key, { item, section: hit.section, score: hit.score });
    });

    return Array.from(merged.values())
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map((entry) => ({
        id: entry.item.id,
        name: entry.item.name,
        kind: entry.item.kind,
        package: entry.item.package,
        route: entry.item.route,
        docsUrl: entry.item.docsUrl,
        description: entry.item.description,
        section: entry.section?.slug,
        heading: entry.section?.heading,
        snippet: entry.section?.snippet,
        score: Number(entry.score.toFixed(2)),
      }));
  }

  async getDoc(args: GetItemArgs) {
    const item = await this.findItem(args);
    if (!item) {
      return null;
    }

    const data = await this.getDocData(item.id);

    if (args.full) {
      const body = [data.intro, ...data.sections.map((s) => `## ${s.heading}\n\n${s.body}`)].join(
        '\n\n'
      );
      return { item, mode: 'full' as const, markdown: body };
    }

    if (args.section) {
      const requested = normalize(args.section);
      const section =
        data.sections.find((s) => s.slug === requested) ||
        data.sections.find((s) => normalize(s.heading) === requested);

      if (!section) {
        return {
          item,
          mode: 'section-not-found' as const,
          availableSections: data.sections.map((s) => s.slug),
        };
      }

      return { item, mode: 'section' as const, heading: section.heading, markdown: section.body };
    }

    return {
      item,
      mode: 'outline' as const,
      intro: data.intro,
      sections: data.sections.map((s) => ({ slug: s.slug, heading: s.heading })),
      source: data.source,
      docs: data.docs,
    };
  }

  /** The section that most plausibly documents a page's API, when no structured props or signature exist */
  private findApiSection(sections: DocData['sections']) {
    return sections.find((s) => /api|return type|overview/i.test(s.heading));
  }

  async getProps(args: GetItemArgs) {
    const item = await this.findItem(args);
    if (!item) {
      return null;
    }

    const data = await this.getDocData(item.id);

    if (data.props.length > 0) {
      return { item, kind: 'props' as const, props: data.props };
    }

    if (data.signature) {
      return {
        item,
        kind: 'signature' as const,
        signature: data.signature,
        exportedTypeNames: data.exportedTypeNames,
      };
    }

    const apiSection = this.findApiSection(data.sections);

    return {
      item,
      kind: 'sections' as const,
      message: `${item.name} has no generated props or signature. Use get_item_doc with a section instead.`,
      suggestedSection: apiSection?.slug,
      availableSections: data.sections.map((s) => s.slug),
    };
  }

  async getApi(symbol: string) {
    const index = await this.getIndex();
    const requested = normalize(symbol);

    const candidates = index.filter(
      (item) => item.hasSignature || item.propsCount > 0 || item.kind === 'hook'
    );

    const match =
      candidates.find(
        (item) => normalize(item.name).replace(/-/g, '') === requested.replace(/-/g, '')
      ) || candidates.find((item) => item.searchText.includes(requested));

    if (!match) {
      return null;
    }

    const data = await this.getDocData(match.id);
    const hasExportedTypeNames = !!data.exportedTypeNames && data.exportedTypeNames.length > 0;

    if (!data.signature && !hasExportedTypeNames) {
      const apiSection = this.findApiSection(data.sections);

      return {
        item: match,
        signature: data.signature,
        exportedTypeNames: data.exportedTypeNames,
        propsCount: data.props.length,
        suggestedSection: apiSection?.slug,
        availableSections: data.sections.map((s) => s.slug),
      };
    }

    return {
      item: match,
      signature: data.signature,
      exportedTypeNames: data.exportedTypeNames,
      propsCount: data.props.length,
    };
  }
}
