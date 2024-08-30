import { useRouter } from 'next/router';
import { IconSearch } from '@tabler/icons-react';
import { rem } from '@mantine/core';
import { createSpotlight, Spotlight } from '@mantine/spotlight';
import { SEARCH_MDX_PAGES } from '@/mdx';

export const [searchStore, searchHandlers] = createSpotlight();

export function Search() {
  const router = useRouter();

  const actions = SEARCH_MDX_PAGES.filter((page) => !page.hideInSearch).map((page) => ({
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
        leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} />,
        placeholder: 'Search documentation...',
      }}
    />
  );
}
