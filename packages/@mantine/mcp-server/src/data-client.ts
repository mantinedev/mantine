import { GetItemArgs, IndexItem, ItemData, ItemKind, ListItemsArgs, SearchDocsArgs } from './types';

function normalizeValue(value: string) {
  return value.trim().toLowerCase();
}

function clampLimit(limit: number | undefined, fallback: number, max: number) {
  if (typeof limit !== 'number' || Number.isNaN(limit)) {
    return fallback;
  }

  return Math.max(1, Math.min(max, Math.floor(limit)));
}

export class MantineMcpDataClient {
  private readonly baseUrl: string;
  private readonly timeoutMs: number;
  private indexCache: IndexItem[] | null = null;
  private itemCache = new Map<string, ItemData>();

  constructor(baseUrl = 'https://mantine.dev/mcp', timeoutMs = 10000) {
    this.baseUrl = baseUrl.replace(/\/+$/, '');
    this.timeoutMs = timeoutMs;
  }

  private async fetchJson<T>(relativePath: string): Promise<T> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const url = `${this.baseUrl}/${relativePath.replace(/^\/+/, '')}`;
      const response = await fetch(url, { signal: controller.signal });

      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.status}`);
      }

      return (await response.json()) as T;
    } finally {
      clearTimeout(timer);
    }
  }

  async getIndex() {
    if (this.indexCache) {
      return this.indexCache;
    }

    this.indexCache = await this.fetchJson<IndexItem[]>('index.json');
    return this.indexCache;
  }

  async listItems(args: ListItemsArgs = {}) {
    const kind = args.kind || 'component';
    const query = args.query ? normalizeValue(args.query) : null;
    const packageName = args.package ? normalizeValue(args.package) : null;
    const limit = clampLimit(args.limit, 30, 200);

    const index = await this.getIndex();

    return index
      .filter((item) => item.kind === kind)
      .filter((item) => (packageName ? normalizeValue(item.package) === packageName : true))
      .filter((item) => {
        if (!query) {
          return true;
        }

        return (
          normalizeValue(item.name).includes(query) ||
          normalizeValue(item.description).includes(query) ||
          normalizeValue(item.searchText).includes(query)
        );
      })
      .slice(0, limit);
  }

  private scoreMatch(item: IndexItem, query: string) {
    const normalizedQuery = normalizeValue(query);
    const normalizedName = normalizeValue(item.name);

    if (normalizedName === normalizedQuery) {
      return 100;
    }

    if (normalizedName.startsWith(normalizedQuery)) {
      return 80;
    }

    if (normalizedName.includes(normalizedQuery)) {
      return 70;
    }

    if (normalizeValue(item.searchText).includes(normalizedQuery)) {
      return 40;
    }

    const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
    const matchedTokens = tokens.filter((token) => normalizeValue(item.searchText).includes(token));

    if (tokens.length > 0 && matchedTokens.length > 0) {
      return 10 + (matchedTokens.length / tokens.length) * 20;
    }

    return 0;
  }

  async searchDocs(args: SearchDocsArgs) {
    const kind: ItemKind = args.kind || 'component';
    const limit = clampLimit(args.limit, 20, 100);
    const query = args.query.trim();

    if (!query) {
      return [];
    }

    const index = await this.getIndex();

    return index
      .filter((item) => item.kind === kind)
      .map((item) => ({ item, score: this.scoreMatch(item, query) }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map((entry) => ({
        id: entry.item.id,
        name: entry.item.name,
        kind: entry.item.kind,
        package: entry.item.package,
        route: entry.item.route,
        description: entry.item.description,
        score: Number(entry.score.toFixed(2)),
      }));
  }

  private async getItemDataById(id: string): Promise<ItemData> {
    const cached = this.itemCache.get(id);
    if (cached) {
      return cached;
    }

    const data = await this.fetchJson<ItemData>(`components/${id}.json`);
    this.itemCache.set(id, data);
    return data;
  }

  async findItem(args: GetItemArgs) {
    const kind = args.kind || 'component';
    const requested = normalizeValue(args.name);
    const index = await this.getIndex();

    const byKind = index.filter((item) => item.kind === kind);

    const exactId = byKind.find((item) => normalizeValue(item.id) === requested);
    if (exactId) {
      return exactId;
    }

    const exactName = byKind.find((item) => normalizeValue(item.name) === requested);
    if (exactName) {
      return exactName;
    }

    const prefixName = byKind.find((item) => normalizeValue(item.name).startsWith(requested));
    if (prefixName) {
      return prefixName;
    }

    return byKind.find((item) => normalizeValue(item.searchText).includes(requested)) || null;
  }

  async getItemDoc(args: GetItemArgs) {
    const item = await this.findItem(args);
    if (!item) {
      return null;
    }

    const data = await this.getItemDataById(item.id);

    return {
      item: {
        id: data.id,
        name: data.name,
        kind: data.kind,
        package: data.package,
        route: data.route,
        description: data.description,
        llmUrl: data.llmUrl,
      },
      markdown: data.markdown,
    };
  }

  async getItemProps(args: GetItemArgs) {
    const item = await this.findItem(args);
    if (!item) {
      return null;
    }

    const data = await this.getItemDataById(item.id);

    return {
      item: {
        id: data.id,
        name: data.name,
        kind: data.kind,
        package: data.package,
        route: data.route,
        description: data.description,
      },
      props: data.props,
    };
  }
}
