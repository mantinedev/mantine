import type { SpotlightStylesNames } from '@mantine/spotlight';

export const SpotlightProvider: Record<SpotlightStylesNames, string> = {
  inner: 'Element used to center spotlight, has fixed position, takes entire screen',
  content: 'Spotlight content root element',
  overlay: 'Overlay displayed under the Spotlight',
  body: 'Spotlight body, displayed after header',

  searchInput: 'Search input',
  nothingFound: 'Nothing found message',
  actions: 'Actions list',
  actionsGroup: 'Actions group label',
  action: 'Action',
  actionIcon: 'Action icon wrapper',
  actionBody: 'Action body',
};
