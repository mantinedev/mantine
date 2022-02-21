/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Box } from '@mantine/core';
import { Search } from 'tabler-icons-react';
import { SpotlightProvider, useSpotlight, SpotlightProviderProps, SpotlightAction } from '.';

const DEFAULT_ACTIONS: SpotlightAction[] = [
  {
    title: 'Action 1',
    description: 'This action will trigger something important',
    onTrigger: () => console.log('Action 1'),
    keywords: 'home, work',
  },
  { title: 'Action 2', onTrigger: () => console.log('Action 2'), keywords: ['hello', 'there'] },
];

const LARGE_ACTIONS_SET: SpotlightAction[] = Array(100)
  .fill(0)
  .map((_, index) => ({
    title: `Action ${index + 1}`,
    onTrigger: () => console.log('Action'),
  }));

function Control() {
  const spotlight = useSpotlight();
  return (
    <Box sx={{ padding: 40 }}>
      <Button onClick={() => spotlight.openSpotlight()}>Open spotlight</Button>
    </Box>
  );
}

function Wrapper(props: Omit<SpotlightProviderProps, 'children'>) {
  return (
    <SpotlightProvider {...props}>
      <Control />
    </SpotlightProvider>
  );
}

const defaultProps: Omit<SpotlightProviderProps, 'children'> = {
  actions: DEFAULT_ACTIONS,
  searchPlaceholder: 'Search...',
  nothingFoundMessage: 'Nothing found...',
};

storiesOf('@mantine/spotlight', module)
  .add('Default', () => <Wrapper {...defaultProps} />)
  .add('Centered', () => <Wrapper {...defaultProps} centered />)
  .add('With search icon', () => <Wrapper {...defaultProps} searchIcon={<Search size={18} />} />)
  .add('With action icon', () => (
    <Wrapper
      {...defaultProps}
      searchIcon={<Search size={18} />}
      actions={[
        { title: 'Search', icon: <Search size={18} />, onTrigger: () => console.log('Search') },
        {
          title: 'Search',
          description: 'Search action with description',
          icon: <Search size={18} />,
          onTrigger: () => console.log('Search'),
        },
        {
          title: 'Search',
          description:
            'Action description that may collapse to next line and may break the icon, bu who know how it will turn out',
          icon: <Search size={18} />,
          onTrigger: () => console.log('Search'),
        },
        {
          title:
            'Action title that will overflow to next line and may collapse the icon or maybe not, who knows',
          description: 'Search action with description',
          icon: <Search size={18} />,
          onTrigger: () => console.log('Search'),
        },
        {
          title: 'Icon that has really huge icon',
          description: 'This is user fault, will not be handled on library side',
          icon: <Search size={100} />,
          onTrigger: () => console.log('Search'),
        },
      ]}
    />
  ))
  .add('Custom filter', () => (
    <Wrapper
      {...defaultProps}
      filter={(query, actions) => actions.filter((action) => action.title.includes(query))}
    />
  ))
  .add('Limit', () => <Wrapper {...defaultProps} actions={LARGE_ACTIONS_SET} limit={5} />);
