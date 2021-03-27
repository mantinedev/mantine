import React, { useState, useEffect, useRef } from 'react';
import { TextInput, Kbd, Text, Paper } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import getDocsData from '../../get-docs-data';
import useStyles from './Search.styles';

interface SearchProps {
  data: ReturnType<typeof getDocsData>;
}

export default function Search({ data }: SearchProps) {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [dropdownOpened, setDropdownOpened] = useState(true);
  const closeDropdown = () => setDropdownOpened(false);
  const dropdownRef = useClickOutside(closeDropdown);
  const inputRef = useRef<HTMLInputElement>();

  const handleKeyboardEvents = (event: KeyboardEvent) => {
    if (event.code === 'KeyK' && (event.ctrlKey || event.metaKey)) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboardEvents);
    return () => window.removeEventListener('keydown', handleKeyboardEvents);
  }, []);

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
            <Text color="gray" size="lg" align="center">
              Nothing found
            </Text>
          </div>
        </Paper>
      )}
    </div>
  );
}
