import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { Button, EmptyState } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo() {
  return (
    <EmptyState>
      <EmptyState.Indicator>
        <MagnifyingGlassIcon />
      </EmptyState.Indicator>
      <EmptyState.Title>No results found</EmptyState.Title>
      <EmptyState.Description>
        We couldn't find anything matching your search. Try adjusting your filters or searching with
        different keywords to see more results.
      </EmptyState.Description>
      <EmptyState.Actions>
        <Button variant="default">Reset filters</Button>
        <Button variant="default">Create new</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}

const code = `
import { Button, EmptyState } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <EmptyState>
      <EmptyState.Indicator>
        <MagnifyingGlassIcon />
      </EmptyState.Indicator>
      <EmptyState.Title>No results found</EmptyState.Title>
      <EmptyState.Description>
        We couldn't find anything matching your search. Try adjusting your filters or searching with
        different keywords to see more results.
      </EmptyState.Description>
      <EmptyState.Actions>
        <Button variant="default">Reset filters</Button>
        <Button variant="default">Create new</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}
`;

export const compound: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 440,
};
