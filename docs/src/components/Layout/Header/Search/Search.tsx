import React, { useState, useEffect, useRef } from 'react';
import { TextInput, Kbd } from '@mantine/core';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import getDocsData from '../../get-docs-data';
import useStyles from './Search.styles';

interface SearchProps {
  data: ReturnType<typeof getDocsData>;
}

export default function Search({ data }: SearchProps) {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>();
  console.log(data);

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
        ref={inputRef}
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
        placeholder="Search"
        icon={<MagnifyingGlassIcon />}
        rightSection={rightSection}
        rightSectionWidth={50}
      />
    </div>
  );
}
