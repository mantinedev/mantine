import { useEffect, useRef, useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import { ScrollArea, Text, TextInput } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { COMBOBOX_EXAMPLES_DATA } from '../../combobox-examples-data';
import { ComboboxLinksGroup } from './ComboboxLinksGroup/ComboboxLinksGroup';
import { getGroupedData } from './get-grouped-data';
import classes from './ComboboxNavbar.module.css';

interface ComboboxNavbarProps {
  opened: boolean;
  onClose: () => void;
}

export function ComboboxNavbar({ opened, onClose }: ComboboxNavbarProps) {
  const [search, setSearch] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const splittedSearch = search
    .toLowerCase()
    .split(' ')
    .filter((item) => item.trim().length > 0);

  const filteredData = COMBOBOX_EXAMPLES_DATA.filter((item) => {
    const splittedName = item.name
      .toLowerCase()
      .split(' ')
      .filter((part) => part.trim().length > 0);
    const splittedDescription = item.description
      .toLowerCase()
      .split(' ')
      .filter((part) => part.trim().length > 0);

    return splittedSearch.every(
      (part) =>
        splittedName.some((name) => name.includes(part)) ||
        splittedDescription.some((name) => name.includes(part)) ||
        item.type.includes(part)
    );
  });

  const groupedData = getGroupedData(filteredData);

  const groups = groupedData.map((item) => (
    <ComboboxLinksGroup
      data={item}
      key={item.group}
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
        leftSection={<IconSearch className={classes.searchIcon} stroke={1.5} />}
        radius="md"
        size="md"
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
        ref={searchInputRef}
      />

      <ScrollArea className={classes.scroll} type="scroll" scrollbarSize={6}>
        {groups}
        <Text className={classes.empty}>Nothing found...</Text>
      </ScrollArea>
    </nav>
  );
}
