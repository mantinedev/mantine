export type ItemKind = 'component' | 'hook';

export interface IndexItem {
  id: string;
  name: string;
  kind: ItemKind;
  package: string;
  route: string;
  description: string;
  propsCount: number;
  llmUrl: string;
  componentDataUrl: string;
  searchText: string;
}

export interface ItemData extends Omit<IndexItem, 'componentDataUrl'> {
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

export interface ListItemsArgs {
  kind?: ItemKind;
  package?: string;
  query?: string;
  limit?: number;
}

export interface GetItemArgs {
  name: string;
  kind?: ItemKind;
}

export interface SearchDocsArgs {
  kind?: ItemKind;
  query: string;
  limit?: number;
}
