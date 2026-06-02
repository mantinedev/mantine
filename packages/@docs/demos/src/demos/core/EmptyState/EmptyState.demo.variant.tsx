import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { EmptyState } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: any) {
  return (
    <EmptyState
      icon={<MagnifyingGlassIcon />}
      title="No results found"
      description="We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results."
      {...props}
    />
  );
}

const code = `
import { EmptyState } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <EmptyState
      icon={<MagnifyingGlassIcon />}
      title="No results found"
      description="We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results."{{props}}
    />
  );
}
`;

export const variant: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 420,
  controls: [
    {
      prop: 'variant',
      type: 'segmented',
      data: [
        { value: 'filled', label: 'Filled' },
        { value: 'light', label: 'Light' },
      ],
      initialValue: 'light',
      libraryValue: 'light',
    },
    { prop: 'color', type: 'color', initialValue: 'blue', libraryValue: null },
  ],
};
