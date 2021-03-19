import React, { useState } from 'react';
import { TextInput } from '@mantine/core';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import getDocsData from '../../get-docs-data';
import useStyles from './Search.styles';

interface SearchProps {
  data: ReturnType<typeof getDocsData>;
}

export default function Search({ data }: SearchProps) {
  const classes = useStyles();
  const [query, setQuery] = useState('');

  return (
    <div className={classes.wrapper}>
      <TextInput
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
        placeholder="Search"
        icon={<MagnifyingGlassIcon />}
      />
    </div>
  );
}
