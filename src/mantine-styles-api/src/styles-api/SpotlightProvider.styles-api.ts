import type { SpotlightStylesNames } from '@mantine/spotlight';

export const SpotlightProvider: Record<SpotlightStylesNames, string> = {
  root: 'Root element',
  inner: 'Element used to center spotlight, has fixed position, takes entire screen',
  content: 'Spotlight content root element',
  overlay: 'Overlay displayed under the Spotlight',
  body: 'Spotlight body, displayed after header',

  searchInput: 'Search input',
  nothingFound: 'Nothing found message',
  actions: 'Actions list',
  actionsGroup: 'Actions group label',
  action: 'Default action',
  actionIcon: 'Default action icon wrapper',
  actionBody: 'Default action body',
  actionDescription: 'Default action description',
  actionHighlight: 'Highlighted query in default action title',
};
