import { useRouter } from 'next/router';
import { IconSearch } from '@tabler/icons-react';
import { createSpotlight, Spotlight } from '@mantine/spotlight';
import { MDX_NAV_SEARCH_PAGES } from '@/mdx';

export const [searchStore, searchHandlers] = createSpotlight();

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
      highlightQuery
      clearQueryOnClose
      radius="md"
      limit={7}
      nothingFound="Nothing found..."
      searchProps={{
        leftSection: <IconSearch size={20} />,
        placeholder: 'Search documentation...',
      }}
    />
  );
}
