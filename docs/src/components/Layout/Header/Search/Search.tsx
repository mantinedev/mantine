import React, { useState, useRef } from 'react';
import cx from 'clsx';
import { navigate } from 'gatsby';
import { TextInput, Kbd, Text, Paper, Highlight } from '@mantine/core';
import { useClickOutside, useWindowEvent, upperFirst } from '@mantine/hooks';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { getDocsData } from '../../get-docs-data';
import useStyles from './Search.styles';

interface SearchProps {
  data: ReturnType<typeof getDocsData>;
  isMacOS: boolean;
}

function filterData(query: string, data: ReturnType<typeof getDocsData>) {
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
  }, []);

  return pages
    .filter((page) => page.title.toLowerCase().includes(query.trim().toLowerCase()))
    .slice(0, 10);
}

export default function Search({ data, isMacOS }: SearchProps) {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [hovered, setHovered] = useState(0);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const closeDropdown = () => setDropdownOpened(false);
  const dropdownRef = useClickOutside(closeDropdown);
  const inputRef = useRef<HTMLInputElement>();
  const filteredData = filterData(query, data);
  const handleSubmit = (to: string) => {
    navigate(to);
    closeDropdown();
    setQuery('');
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDropdownOpened(true);
    setQuery(event.currentTarget.value);
    setHovered(0);
  };

  const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.code === 'ArrowDown') {
      event.preventDefault();
      setHovered((current) => (current < filteredData.length - 1 ? current + 1 : current));
    }

    if (event.nativeEvent.code === 'ArrowUp') {
      event.preventDefault();
      setHovered((current) => (current > 0 ? current - 1 : current));
    }

    if (event.nativeEvent.code === 'Enter' && filteredData[hovered]) {
      handleSubmit(filteredData[hovered].slug);
    }

    if (event.nativeEvent.code === 'Escape') {
      setQuery('');
      setDropdownOpened(false);
    }
  };

  useWindowEvent('keydown', (event) => {
    if (event.code === 'KeyK' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      inputRef.current.focus();
    }
  });

  const items = filteredData.map((item, index) => (
    <button
      type="button"
      key={item.slug}
      onMouseDown={() => handleSubmit(item.slug)}
      className={cx(classes.item, { [classes.itemHovered]: hovered === index })}
      tabIndex={-1}
    >
      <Highlight highlight={query}>{item.title}</Highlight>
      <Text color="gray" size="sm" className={classes.package}>
        {item.package ? item.package.replace('mantine-', '@mantine/') : upperFirst(item.group)}
      </Text>
    </button>
  ));

  const rightSection = dropdownOpened ? (
    <div className={classes.shortcut}>
      <Kbd className={classes.kbdEnter}>↵</Kbd>
    </div>
  ) : (
    <div className={classes.shortcut}>
      <Kbd className={classes.kbd}>{isMacOS ? '⌘' : 'Ctrl'}</Kbd>
      <Kbd className={classes.kbd}>K</Kbd>
    </div>
  );

  return (
    <div className={classes.wrapper} onBlurCapture={closeDropdown}>
      <TextInput
        className={classes.input}
        elementRef={inputRef}
        value={query}
        onChange={handleQueryChange}
        placeholder="Search"
        icon={<MagnifyingGlassIcon />}
        rightSection={rightSection}
        rightSectionWidth={isMacOS ? 50 : 72}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        onFocus={() => setDropdownOpened(true)}
        onKeyDown={handleInputKeydown}
      />

      {dropdownOpened && (
        <Paper className={classes.dropdown} shadow="md" elementRef={dropdownRef}>
          <div className={classes.dropdownBody}>
            {items}
            {filteredData.length === 0 && (
              <Text color="gray" size="sm" align="center">
                Nothing found
              </Text>
            )}
          </div>
        </Paper>
      )}
    </div>
  );
}
