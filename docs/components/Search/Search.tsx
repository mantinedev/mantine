import React from 'react';
import { useRouter } from 'next/router';
import { IconSearch } from '@tabler/icons-react';
import { rem } from '@mantine/core';
import { Spotlight, createSpotlight } from '@mantine/spotlight';
import { ALL_MDX_PAGES } from '@/mdx';

export const [searchStore, searchHandlers] = createSpotlight();

export function Search() {
  const router = useRouter();

  const actions = ALL_MDX_PAGES.map((page) => ({
    id: page.slug,
    label: page.title,
    description: page.search || page.description || page.date,
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
