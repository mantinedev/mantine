import React, { useState, useEffect, useRef } from 'react';
import cx from 'clsx';
import { navigate } from 'gatsby';
import { TextInput, Kbd, Text, Paper, Highlight } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { DocItem, DocsData } from '../../get-docs-data';
import useStyles from './Search.styles';

interface SearchProps {
  data: DocsData;
}

function filterData(query: string, data: DocsData): DocItem[] {
  return Object.keys(data)
    .reduce((acc: DocItem[], key) => {
      const filteredItems = data[key].filter(
        (item) =>
          item.title.toLowerCase().includes(query.trim().toLowerCase()) &&
          item.title.toLowerCase() !== 'getting started'
      );

      return [...acc, ...filteredItems];
    }, [])
    .slice(0, 10);
}

export default function Search({ data }: SearchProps) {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [dropdownOpened, setDropdownOpened] = useState(true);
  const closeDropdown = () => setDropdownOpened(false);
  const dropdownRef = useClickOutside(closeDropdown);
  const inputRef = useRef<HTMLInputElement>();
  const filteredData = filterData(query, data);
  const handleSubmit = (to: string) => {
    navigate(to);
    closeDropdown();
    setQuery('');
  };

  const handleKeyboardEvents = (event: KeyboardEvent) => {
    if (event.code === 'KeyK' && (event.ctrlKey || event.metaKey)) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboardEvents);
    return () => window.removeEventListener('keydown', handleKeyboardEvents);
  }, []);

  const items = filteredData.map((item) => (
    <button
      type="button"
      key={item.to}
      onClick={() => handleSubmit(item.to)}
      className={cx(classes.item)}
      tabIndex={-1}
    >
      <Highlight highlight={query}>{item.title}</Highlight>
      <Text color="gray" size="sm">
        {item.package}
      </Text>
    </button>
  ));

  const rightSection = (
    <div className={classes.shortcut}>
      <Kbd className={classes.kbd}>⌘</Kbd>
      <Kbd className={classes.kbd}>K</Kbd>
    </div>
  );

  return (
    <div className={classes.wrapper}>
      <TextInput
        className={classes.input}
        ref={inputRef}
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
        placeholder="Search"
        icon={<MagnifyingGlassIcon />}
        rightSection={rightSection}
        rightSectionWidth={50}
        onFocus={() => setDropdownOpened(true)}
      />

      {dropdownOpened && (
        <Paper className={classes.dropdown} shadow="md" ref={dropdownRef}>
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
