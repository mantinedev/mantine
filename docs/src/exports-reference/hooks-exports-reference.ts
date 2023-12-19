import { ExportReferenceGroup } from './types';

export const HOOKS_EXPORTS_REFERENCE: ExportReferenceGroup = {
  package: '@mantine/hooks',
  exports: [
    {
      type: 'hook',
      name: 'use-click-outside',
      description: 'Detects click and touch events outside of given element or elements group',
      link: '/hooks/use-click-outside/',
    },
    {
      type: 'hook',
      name: 'use-color-scheme',
      description: 'Detects user system color scheme with window.matchMedia API',
      link: '/hooks/use-color-scheme/',
    },
    {
      type: 'hook',
      name: 'use-element-size',
      description: 'Returns element width and height and observes changes with ResizeObserver',
      link: '/hooks/use-color-scheme/',
    },
    {
      type: 'hook',
      name: 'use-event-listener',
      description: 'Subscribes to events of a given element with a ref',
      link: '/hooks/use-event-listener/',
    },
    {
      type: 'hook',
      name: 'use-focus-return',
      description:
        'Captures last focused element on the page and returns focus to it once given condition is met',
      link: '/hooks/use-focus-return/',
    },
    {
      type: 'hook',
      name: 'use-focus-trap',
      description: 'Traps focus inside given element',
      link: '/hooks/use-focus-trap/',
    },
    {
      type: 'hook',
      name: 'use-focus-within',
      description: 'Detects if any element within the given element has focus',
      link: '/hooks/use-focus-within/',
    },
    {
      type: 'hook',
      name: 'use-fullscreen',
      description: 'Enter/exit fullscreen mode with given element or entire page',
      link: '/hooks/use-fullscreen/',
    },
    {
      type: 'hook',
      name: 'use-hotkeys',
      description: 'Listen for keys combinations on document element',
      link: '/hooks/use-hotkeys/',
      children: [
        {
          type: 'function',
          name: 'getHotkeyHandler',
          description: 'Add hotkey events to elements and components',
          link: '/hooks/use-hotkeys/#targeting-elements',
        },
      ],
    },
    {
      type: 'hook',
      name: 'use-hover',
      description: 'Detects if given element is hovered',
      link: '/hooks/use-hover/',
    },
    {
      type: 'hook',
      name: 'use-intersection',
      description:
        'Detects if given element is visible in the viewport or other element with IntersectionObserver',
      link: '/hooks/use-intersection/',
    },
    {
      type: 'hook',
      name: 'use-media-query',
      description: 'Subscribes to media queries with window.matchMedia',
      link: '/hooks/use-media-query/',
    },
    {
      type: 'hook',
      name: 'use-mouse',
      description: 'Tracks mouse position over the viewport or given element',
      link: '/hooks/use-mouse/',
    },
    {
      type: 'hook',
      name: 'use-move',
      description: 'Handles move behavior over given element, can be used to build custom sliders',
      link: '/hooks/use-move/',
    },
    {
      type: 'hook',
      name: 'use-reduced-motion',
      description: 'Detects if user prefers to reduce motion',
      link: '/hooks/use-reduced-motion/',
    },
    {
      type: 'hook',
      name: 'use-resize-observer',
      description: 'Tracks element size and position changes with ResizeObserver',
      link: '/hooks/use-resize-observer/',
    },
    {
      type: 'hook',
      name: 'use-scroll-into-view',
      description: 'Scrolls given element into view',
      link: '/hooks/use-scroll-into-view/',
    },
    {
      type: 'hook',
      name: 'use-viewport-size',
      description: 'Returns viewport width and height and subscribes to changes',
      link: '/hooks/use-viewport-size/',
    },
    {
      type: 'hook',
      name: 'use-window-event',
      description:
        'Adds event listener to the window object on component mount and removes the event when the component unmounts',
      link: '/hooks/use-window-event/',
    },
    {
      type: 'hook',
      name: 'use-window-scroll',
      description: 'Tracks window scroll position',
      link: '/hooks/use-window-scroll/',
    },
  ],
};
