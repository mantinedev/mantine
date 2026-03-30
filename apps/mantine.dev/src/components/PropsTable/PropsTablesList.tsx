import { useState } from 'react';
import { Text, TextInput, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { PhosphorIcons } from '../icons';
import { getComponentName } from './getComponentName';
import { PropsTable } from './PropsTable';
import classes from './PropsTablesList.module.css';

export interface PropsTablesListProps {
  components: string[];
  componentPrefix?: string;
}

export function PropsTablesList({ components, componentPrefix }: PropsTablesListProps) {
  const [query, setQuery] = useState('');
  const isNonTouchDevice = useMediaQuery('(hover: hover) and (pointer: fine)', false, {
    getInitialValueInEffect: false,
  });

  const tables = components.map((component) => (
    <div key={component} className={classes.section} data-props-table-section>
      <Title order={2} className={classes.title}>
        {getComponentName({ component, componentPrefix })} props
      </Title>
      <PropsTable component={component} query={query} />
    </div>
  ));

  return (
    <div className={classes.root}>
      <TextInput
        className={classes.search}
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
        leftSection={<PhosphorIcons.MagnifyingGlassIcon className={classes.searchIcon} />}
        placeholder="Search props"
        radius="md"
        size="lg"
        autoFocus={isNonTouchDevice}
        pt={7}
      />
      {tables}
      <Text className={classes.nothingFound}>Nothing found...</Text>
    </div>
  );
}
