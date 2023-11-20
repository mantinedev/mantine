import React, { useState } from 'react';
import { TextInput, Title } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { PropsTable } from './PropsTable';
import { getComponentName } from './getComponentName';
import classes from './PropsTablesList.module.css';

export interface PropsTablesListProps {
  components: string[];
  componentPrefix?: string;
}

export function PropsTablesList({ components, componentPrefix }: PropsTablesListProps) {
  const [query, setQuery] = useState('');

  const tables = components.map((component) => (
    <div key={component} className={classes.section}>
      <Title order={2} className={classes.title}>
        {getComponentName({ component, componentPrefix })} component props
      </Title>
      <PropsTable component={component} query={query} />
    </div>
  ));

  return (
    <div>
      <TextInput
        className={classes.search}
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
        leftSection={<IconSearch className={classes.searchIcon} />}
        placeholder="Search props"
        radius="md"
        size="lg"
        autoFocus
      />
      {tables}
    </div>
  );
}
