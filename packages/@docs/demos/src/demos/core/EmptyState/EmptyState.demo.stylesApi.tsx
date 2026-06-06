import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { Button, EmptyState } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { EmptyStateStylesApi } from '@docs/styles-api';

const code = `
import { Button, EmptyState } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <EmptyState
      icon={<MagnifyingGlassIcon />}
      title="No results found"
      description="We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results."{{props}}
    >
      <EmptyState.Actions>
        <Button variant="default">Reset filters</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}
`;

function Demo(props: any) {
  return (
    <EmptyState
      icon={<MagnifyingGlassIcon />}
      title="No results found"
      description="We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results."
      {...props}
    >
      <EmptyState.Actions>
        <Button variant="default">Reset filters</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: EmptyStateStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 440,
};
