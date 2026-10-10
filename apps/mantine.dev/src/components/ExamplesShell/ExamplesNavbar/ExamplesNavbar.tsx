import { useEffect, useRef, useState } from 'react';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { ScrollArea, Text, TextInput } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import type { ExampleItem, ExamplesGroup } from '../types';
import { ExamplesLinksGroup } from './ExamplesLinksGroup/ExamplesLinksGroup';
import classes from './ExamplesNavbar.module.css';

interface ExamplesNavbarProps {
  data: ExampleItem[];
  groups: ExamplesGroup[];
  basePath: string;
  opened: boolean;
  onClose: () => void;
}

function splitWords(value: string) {
  return value
    .toLowerCase()
    .split(' ')
    .filter((part) => part.trim().length > 0);
}

export function ExamplesNavbar({ data, groups, basePath, opened, onClose }: ExamplesNavbarProps) {
  const [search, setSearch] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const splittedSearch = splitWords(search);

  const filteredData = data.filter((item) => {
    const words = [
      ...splitWords(item.name),
      ...splitWords(item.description),
      ...(item.features || []).map((feature) => feature.toLowerCase()),
    ];

    return splittedSearch.every(
      (part) => words.some((word) => word.includes(part)) || item.type.includes(part)
    );
  });

  const groupsList = groups.map((group) => (
    <ExamplesLinksGroup
      key={group.type}
      group={group}
      items={filteredData.filter((item) => item.type === group.type)}
      basePath={basePath}
      searchQuery={splittedSearch}
      onClose={onClose}
    />
  ));

  useHotkeys([['mod + shift + k', () => searchInputRef.current?.focus()]], []);

  useEffect(() => {
    setTimeout(() => {
      document
        .querySelector('[data-navbar-link-active]')
        ?.scrollIntoView({ block: 'center', behavior: 'instant' });
    }, 500);
  }, []);

  return (
    <nav className={classes.navbar} data-hidden={!opened || undefined}>
      <TextInput
        placeholder="Ctrl + Shift + K to search"
        classNames={{ root: classes.search, input: classes.searchInput }}
        leftSection={<MagnifyingGlassIcon className={classes.searchIcon} />}
        radius="md"
        size="md"
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
        ref={searchInputRef}
      />

      <ScrollArea className={classes.scroll} type="scroll" scrollbarSize={6}>
        {groupsList}
        <Text className={classes.empty}>Nothing found...</Text>
      </ScrollArea>
    </nav>
  );
}
