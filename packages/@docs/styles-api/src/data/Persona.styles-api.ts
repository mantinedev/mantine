import type { PersonaFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const PersonaStylesApi: StylesApiData<PersonaFactory> = {
  selectors: {
    root: 'Root element',
    avatarWrapper: 'Wrapper around the avatar and the presence badge',
    avatar: 'Avatar element',
    presence: 'Presence badge element',
    body: 'Wrapper around the text lines',
    text: 'Text line element, level is controlled by the `data-level` attribute',
  },

  vars: {
    root: {
      '--persona-gap': 'Controls gap between the avatar and the text',
      '--persona-presence-size': 'Controls presence badge width and height',
      '--persona-primary-fz': 'Controls primary text `font-size`',
      '--persona-secondary-fz': 'Controls secondary, tertiary and quaternary text `font-size`',
    },
  },

  modifiers: [
    {
      modifier: 'data-text-position',
      selector: 'root',
      value: 'Value of `textPosition` prop',
    },
    {
      modifier: 'data-text-alignment',
      selector: 'root',
      value: 'Value of `textAlignment` prop',
    },
    {
      modifier: 'data-presence-only',
      selector: 'root',
      condition: '`presenceOnly` prop is set',
    },
    {
      modifier: 'data-variant',
      selector: 'presence',
      value: '`filled` for solid statuses, `outline` for ring statuses',
    },
    {
      modifier: 'data-processing',
      selector: 'presence',
      condition: 'Presence `processing` is set',
    },
    {
      modifier: 'data-level',
      selector: 'text',
      value: 'Text line level, `1` for the primary line and `2`–`4` for secondary lines',
    },
  ],
};
