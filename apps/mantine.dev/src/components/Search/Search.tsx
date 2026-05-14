import { useRouter } from 'next/router';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import Fuse from 'fuse.js';
import { createSpotlight, Spotlight, SpotlightFilterFunction } from '@mantine/spotlight';
import { MDX_NAV_SEARCH_PAGES } from '@/mdx';

export const [searchStore, searchHandlers] = createSpotlight();

const fuzzySearchFilter: SpotlightFilterFunction = (query, actions) => {
  if (!query.trim()) {
    return actions;
  }

  const flatActions = actions.reduce<any[]>((acc, item) => {
    if ('actions' in item) {
      return [...acc, ...item.actions.map((action) => ({ ...action, group: item.group }))];
    }
    return [...acc, item];
  }, []);

  const fuse = new Fuse(flatActions, {
    keys: ['label', 'description', 'keywords'],
    threshold: 0.3,
    minMatchCharLength: 1,
  });

  const results = fuse.search(query).map((result) => result.item);

  const groups: Record<string, any> = {};
  const result: any[] = [];

  results.forEach((action) => {
    if (action.group) {
      if (!groups[action.group]) {
        groups[action.group] = { pushed: false, data: { group: action.group, actions: [] } };
      }
      groups[action.group].data.actions.push(action);
      if (!groups[action.group].pushed) {
        groups[action.group].pushed = true;
        result.push(groups[action.group].data);
      }
    } else {
      result.push(action);
    }
  });

  return result;
};

export function Search() {
  const router = useRouter();

  const actions = MDX_NAV_SEARCH_PAGES.filter((page) => !page.hideInSearch).map((page) => ({
    id: page.slug,
    label: page.title,
    description:
      page.search || page.description || (page.date ? `Released ${page.date}` : undefined),
    keywords: page.searchTags,
    onClick: () => router.push(page.slug),
  }));

  return (
    <Spotlight
      store={searchStore}
      shortcut={['mod + K', 'mod + P', '/']}
      actions={actions}
      tagsToIgnore={[]}
      filter={fuzzySearchFilter}
      highlightQuery
      clearQueryOnClose
      radius="md"
      limit={7}
      nothingFound="Nothing found..."
      searchProps={{
        leftSection: <MagnifyingGlassIcon size={20} />,
        placeholder: 'Search documentation...',
      }}
    />
  );
}
