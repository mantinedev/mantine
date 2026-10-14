import type { NavLinkFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const NavLinkStylesApi: StylesApiData<NavLinkFactory> = {
  selectors: {
    root: 'Root element',
    body: 'Contains label and description',
    section: 'Left and right sections',
    label: 'NavLink label',
    description: 'Dimmed description displayed below the label',
    children: 'Wrapper around nested links',
    chevron: 'Default chevron icon',
    collapse: 'Nested links Collapse container',
  },

  vars: {
    root: {
      '--nl-bg': 'Controls link `background-color`',
      '--nl-color': 'Controls link `color`',
      '--nl-hover': 'Controls link `background-color` when hovered',
      '--nl-rail-color': 'Controls color of the bar of active link, `rail` variant only',
      '--nl-rail-icon-color':
        'Controls color of the left section icon of active link, `rail` variant only',
      '--nl-radius': 'Controls link `border-radius`',
      '--nl-fz': 'Controls label `font-size`',
      '--nl-description-fz': 'Controls description `font-size`',
      '--nl-padding-y': 'Controls link vertical padding',
      '--nl-padding-x': 'Controls link horizontal padding',
      '--nl-section-gap': 'Controls gap between sections and label',
      '--nl-chevron-size': 'Controls default chevron size',
    },

    children: {
      '--nl-offset': 'Controls nested links offset',
    },
  },

  modifiers: [
    { modifier: 'data-active', selector: 'root', condition: '`active` prop is set' },
    { modifier: 'data-variant', selector: 'root', value: 'Value of `variant` prop' },
    {
      modifier: 'data-with-guideline',
      selector: 'children',
      condition: '`withGuideline` prop is set',
    },
    { modifier: 'data-variant', selector: 'children', value: 'Value of `variant` prop' },
  ],
};
