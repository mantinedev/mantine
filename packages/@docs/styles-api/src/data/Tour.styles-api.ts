import type { TourFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const TourStylesApi: StylesApiData<TourFactory> = {
  selectors: {
    root: 'Root element',
    overlay: 'Overlay that dims the page and contains the spotlight cutout',
    spotlight: 'Cutout in the overlay that highlights the current step target',
    tooltip: 'Floating element with the current step content',
    title: 'Step title',
    body: 'Step body content',
    navigation: 'Container of the navigation buttons and step counter',
    navigationButton: 'Previous and next step buttons',
    closeButton: 'Button that closes the tour',
    stepCounter: 'Current step index displayed in the navigation',
    beacon: 'Pulsing marker displayed on the step target before the tour starts',
    beaconPulse: 'Animated ring rendered inside the beacon',
  },

  vars: {
    root: {
      '--tour-z-index': 'Controls `z-index` of all tour elements',
      '--tour-overlay-color': 'Controls `background-color` of the overlay',
      '--tour-tooltip-radius': 'Controls `border-radius` of the tooltip',
      '--tour-tooltip-shadow': 'Controls `box-shadow` of the tooltip',
      '--tour-beacon-size': 'Controls `width` and `height` of the beacon',
      '--tour-beacon-color': 'Controls `background-color` of the beacon',
      '--tour-spotlight-padding': 'Controls padding around the spotlight cutout',
      '--tour-spotlight-radius': 'Controls `border-radius` of the spotlight cutout',
    },
  },

  modifiers: [
    {
      modifier: 'data-with-overlay-interaction',
      selector: 'overlay',
      condition: '`withOverlayInteraction` prop is set',
    },
    {
      modifier: 'data-centered',
      selector: 'tooltip',
      condition: 'Current step does not have a target element and is displayed in the center',
    },
  ],
};
