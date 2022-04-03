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
      <Button
        onClick={() =>
          spotlight.registerActions([
            { title: 'Registered', onTrigger: () => console.log('registered') },
          ])
        }
      >
        Register actions
      </Button>
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

function CustomActionComponent() {
  return (
    <SpotlightProvider
      actions={[
        { title: 'Action 1', extra: 'Extra info 1', onTrigger: () => console.log('Action 1') },
        { title: 'Action 2', extra: 'Extra info 2', onTrigger: () => console.log('Action 2') },
      ]}
      actionComponent={({ onTrigger, hovered, action, ...others }) => (
        <button type="button" style={{ background: hovered ? 'red' : undefined }} {...others}>
          {action.extra}
        </button>
      )}
    >
      <Control />
    </SpotlightProvider>
  );
}

function DynamicActions() {
  return (
    <SpotlightProvider
      nothingFoundMessage="Nothing found"
      placeholder="Dynamic actions"
      actions={(query) =>
        query.trim().length > 0
          ? [
              { title: `Search docs: ${query}`, onTrigger: () => console.log('Search') },
              { title: `Create new ticket: ${query}`, onTrigger: () => console.log('Search') },
            ]
          : []
      }
    >
      <Control />
    </SpotlightProvider>
  );
}

const defaultProps: Omit<SpotlightProviderProps, 'children'> = {
  actions: DEFAULT_ACTIONS,
  searchPlaceholder: 'Search...',
  nothingFoundMessage: 'Nothing found...',
};

storiesOf('Spotlight', module)
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
  .add('Limit', () => <Wrapper {...defaultProps} actions={LARGE_ACTIONS_SET} limit={5} />)
  .add('Dynamic actions', () => <DynamicActions />)
  .add('closeOnActionTrigger: false', () => (
    <Wrapper {...defaultProps} closeOnActionTrigger={false} />
  ))
  .add('Custom action component', () => <CustomActionComponent />)
  .add('Custom wrapper component', () => (
    <Wrapper
      {...defaultProps}
      actionsWrapperComponent={({ children }) => (
        <div>
          <div>
            <button type="button">Header button 1</button>
            <button type="button">Header button 2</button>
          </div>
          {children}
          <div>
            <button type="button">Footer button 1</button>
            <button type="button">Footer button 2</button>
          </div>
        </div>
      )}
    />
  ))
  .add('Multiple shortcuts', () => (
    <Wrapper {...defaultProps} shortcut={['mod + K', 'mod + P', 'mod + /']} />
  ))
  .add('Grouped actions', () => (
    <Wrapper
      {...defaultProps}
      actions={[
        { title: 'Create 1', group: 'Create', onTrigger: () => console.log('Crate') },
        { title: 'Search 1', group: 'Search', onTrigger: () => console.log('Search') },
        { title: 'No group', onTrigger: () => console.log('No Group') },
        { title: 'Create 2', group: 'Create', onTrigger: () => console.log('Crate') },
        { title: 'Search 2', group: 'Search', onTrigger: () => console.log('Search') },
        { title: 'Search 3', group: 'Search', onTrigger: () => console.log('Search') },
        { title: 'Create 3', group: 'Create', onTrigger: () => console.log('Crate') },
      ]}
    />
  ))
  .add('Highlight query', () => <Wrapper {...defaultProps} highlightQuery />)
  .add('Highlight with custom color', () => (
    <Wrapper {...defaultProps} highlightColor="red" highlightQuery />
  ));
