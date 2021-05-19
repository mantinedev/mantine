import React, { useState, useRef } from 'react';
import cx from 'clsx';
import { navigate } from 'gatsby';
import { TextInput, Kbd, Text, Paper, Highlight, useMantineTheme } from '@mantine/core';
import { useClickOutside, useWindowEvent } from '@mantine/hooks';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { DocItem, DocsData } from '../../get-docs-data';
import useStyles from './Search.styles';

interface SearchProps {
  data: DocsData;
  isMacOS: boolean;
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

export default function Search({ data, isMacOS }: SearchProps) {
  const theme = useMantineTheme();
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
      handleSubmit(filteredData[hovered].to);
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
      key={item.to}
      onMouseDown={() => handleSubmit(item.to)}
      className={cx(classes.item, { [classes.itemHovered]: hovered === index })}
      tabIndex={-1}
    >
      <Highlight highlight={query}>{item.title}</Highlight>
      <Text color="gray" size="sm" className={classes.package}>
        {item.package.replace('mantine-', '@mantine/')}
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
        rightSectionProps={{ style: { pointerEvents: 'none' } }}
        onFocus={() => setDropdownOpened(true)}
        onKeyDown={handleInputKeydown}
        variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
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
