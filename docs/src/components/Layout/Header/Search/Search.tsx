import React, { useState, useRef } from 'react';
import { navigate } from 'gatsby';
import { Kbd, Autocomplete } from '@mantine/core';
import { useShallowEffect, useWindowEvent } from '@mantine/hooks';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { getDocsData } from '../../get-docs-data';
import { Frontmatter } from '../../../../types';
import useStyles from './Search.styles';
import SearchItem from './SearchItem';

export interface AutocompleteItem extends Frontmatter {
  value: string;
}

interface SearchProps {
  data: ReturnType<typeof getDocsData>;
  isMacOS: boolean;
}

function constructPages(data: ReturnType<typeof getDocsData>): AutocompleteItem[] {
  const pages = data.reduce((acc, part) => {
    if (!part || !Array.isArray(part.groups)) {
      return acc;
    }

    part.groups.forEach((group) => {
      if (group && Array.isArray(group.pages)) {
        acc.push(...group.pages);
      }
    });

    part.uncategorized
      .filter((page) => page.title.toLowerCase() !== 'getting started')
      .forEach((page) => {
        acc.push(page);
      });

    return acc;
  }, []) as AutocompleteItem[];

  return pages.map((page) => {
    const { group, ...pageData } = page;
    return {
      value: pageData.title,
      mantineGroup: group,
      ...pageData,
    };
  });
}

function filterPages(query: string, pages: AutocompleteItem[]) {
  return pages.filter((page) =>
    page.title.toLowerCase().includes(query.trim().toLocaleLowerCase())
  );
}

export default function Search({ data, isMacOS }: SearchProps) {
  const { classes } = useStyles();
  const [query, setQuery] = useState('');
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const closeDropdown = () => setDropdownOpened(false);
  const inputRef = useRef<HTMLInputElement>();
  const pagesRef = useRef<AutocompleteItem[]>(constructPages(data));
  const filteredPages = filterPages(query, pagesRef.current);

  const handleSubmit = (item) => {
    setQuery('');
    navigate(item.slug);
    closeDropdown();
  };

  const handleQueryChange = (value: string) => {
    setDropdownOpened(true);
    setQuery(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.code === 'Escape') {
      setQuery('');
      closeDropdown();
    }
    if (event.nativeEvent.code === 'Enter') {
      setQuery('');
    }
  };

  const handleFocus = () => {
    setDropdownOpened(true);
  };

  useShallowEffect(() => {
    pagesRef.current = constructPages(data);
  }, [data]);

  useWindowEvent('keydown', (event) => {
    if (event.code === 'KeyK' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      inputRef.current.focus();
    }
  });

  const rightSection = dropdownOpened ? (
    <div className={classes.shortcut}>
      <Kbd className={classes.kbdEnter}> ↵ </Kbd>
    </div>
  ) : (
    <div className={classes.shortcut}>
      <Kbd className={classes.kbd}>{isMacOS ? '⌘' : 'Ctrl'}</Kbd>
      <Kbd className={classes.kbd}>K</Kbd>
    </div>
  );

  return (
    <div className={classes.wrapper} onBlurCapture={closeDropdown}>
      <Autocomplete
        className={classes.input}
        data={filteredPages}
        ref={inputRef}
        value={query}
        itemComponent={({ slug, title, package: mantinePackage, mantineGroup, ...others }) => (
          <SearchItem
            query={query}
            slug={slug}
            title={title}
            mantinePackage={mantinePackage}
            group={mantineGroup}
            {...others}
          />
        )}
        onFocus={handleFocus}
        onChange={handleQueryChange}
        onKeyDown={handleKeyDown}
        placeholder="Search"
        icon={<MagnifyingGlassIcon />}
        rightSection={rightSection}
        rightSectionWidth={isMacOS ? 50 : 72}
        classNames={{
          hovered: classes.itemHovered,
          item: classes.item,
        }}
        styles={{
          rightSection: {
            pointerEvents: 'none',
          },
          dropdown: {
            padding: '0px',
          },
        }}
        limit={10}
        onItemSubmit={handleSubmit}
      />
    </div>
  );
}
