import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { Button, EmptyState } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: any) {
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

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 420,
  controls: [
    { prop: 'size', type: 'size', libraryValue: 'md', initialValue: 'md' },
    {
      prop: 'align',
      type: 'segmented',
      data: [
        { value: 'center', label: 'Center' },
        { value: 'left', label: 'Left' },
        { value: 'right', label: 'Right' },
      ],
      initialValue: 'center',
      libraryValue: 'center',
    },
    {
      prop: 'withIndicatorBackground',
      type: 'boolean',
      libraryValue: false,
      initialValue: false,
    },
  ],
};
