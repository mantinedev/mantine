import type { SpotlightFactory } from '@mantine/spotlight';
import type { StylesApiData } from '../types';
import { ModalStylesApi } from './Modal.styles-api';

export const SpotlightStylesApi: StylesApiData<SpotlightFactory> = {
  selectors: {
    ...ModalStylesApi.selectors,
    search: 'Search input (`Spotlight.Search`)',
    actionsList: 'Actions list (`Spotlight.ActionsList`)',
    empty: 'Empty state (`Spotlight.Empty`)',
    footer: 'Footer (`Spotlight.Footer`)',
    action: 'Action (`Spotlight.Action`)',
    actionBody: 'Body of the action, contains label and description',
    actionLabel: '`Spotlight.Action` label',
    actionDescription: '`Spotlight.Action` description',
    actionSection: '`Spotlight.Action` left and right sections',
    actionsGroup: '`Spotlight.ActionsGroup` root element',
  },

  vars: {},

  modifiers: [
    {
      modifier: 'data-selected',
      selector: 'action',
      condition: 'Action is selected with up/down keys',
    },

    {
      modifier: 'data-position',
      selector: 'actionSection',
      value: 'Section position: left or right',
    },

    {
      modifier: 'data-dimmed',
      selector: 'actionSection',
      condition: '`dimmedSections` prop is set on `Spotlight.Action` component',
    },
  ],
};
