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
        {
          type: 'type',
          name: 'HotkeyItem',
          description: 'A tuple of hotkey string, handler function and options',
          link: '/hooks/use-hotkeys/#types',
        },
        {
          type: 'type',
          name: 'HotkeyItemOptions',
          description: 'Options for hotkey item',
          link: '/hooks/use-hotkeys/#types',
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
      name: 'use-in-viewport',
      description:
        'Detects if element is visible in the viewport, a simpler alternative to use-intersection hook',
      link: '/hooks/use-in-viewport/',
    },
    {
      type: 'hook',
      name: 'use-media-query',
      description: 'Subscribes to media queries with window.matchMedia',
      link: '/hooks/use-media-query/',
      children: [
        {
          type: 'type',
          name: 'UseMediaQueryOptions',
          description: 'use-media-query options type',
          link: '/hooks/use-media-query/#usemediaqueryoptions-type',
        },
      ],
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
      children: [
        {
          type: 'function',
          name: 'clampUseMovePosition',
          description: 'Clamps useMove position to 0-1 range',
          link: '/hooks/use-move/#clampusemoveposition',
        },
        {
          type: 'type',
          name: 'UseMovePosition',
          description: 'x, y position type assigned by useMove hook',
          link: '/hooks/use-move/#usemoveposition',
        },
      ],
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
    {
      type: 'hook',
      name: 'use-counter',
      description: 'Increments/decrements state within given boundaries',
      link: '/hooks/use-counter/',
    },
    {
      type: 'hook',
      name: 'use-debounced-state',
      description: 'Debounces value changes',
      link: '/hooks/use-debounced-state/',
    },
    {
      type: 'hook',
      name: 'use-debounced-value',
      description: 'Debounces value changes',
      link: '/hooks/use-debounced-value/',
    },
    {
      type: 'hook',
      name: 'use-disclosure',
      description:
        'Manages boolean state, provides open, close and toggle handlers, usually used with modals, drawers and popovers',
      link: '/hooks/use-disclosure/',
    },
    {
      type: 'hook',
      name: 'use-id',
      description: 'Generates memoized random id',
      link: '/hooks/use-id/',
    },
    {
      type: 'hook',
      name: 'use-input-state',
      description: 'Manages input state',
      link: '/hooks/use-input-state/',
    },
    {
      type: 'hook',
      name: 'use-list-state',
      description: 'Manages array state',
      link: '/hooks/use-list-state/',
      children: [
        {
          type: 'type',
          name: 'UseListStateHandlers',
          description: 'use-list-state handlers type',
          link: '/hooks/use-list-state/#useliststatehandlers-type',
        },
      ],
    },
    {
      type: 'hook',
      name: 'use-local-storage',
      description: 'Exposes localStorage value as react state, syncs state across opened tabs',
      link: '/hooks/use-local-storage/',
      children: [
        {
          type: 'function',
          name: 'readLocalStorageValue',
          description: 'Read local storage value outside of React components',
          link: '/hooks/use-local-storage/#read-storage-value',
        },
      ],
    },
    {
      type: 'hook',
      name: 'use-session-storage',
      description: 'Exposes sessionStorage value as react state, syncs state across opened tabs',
      link: '/hooks/use-local-storage/',
      children: [
        {
          type: 'function',
          name: 'readSessionStorageValue',
          description: 'Read local storage value outside of React components',
          link: '/hooks/use-local-storage/#read-storage-value',
        },
      ],
    },
    {
      type: 'hook',
      name: 'use-pagination',
      description: 'Manages pagination state',
      link: '/hooks/use-pagination/',
    },
    {
      type: 'hook',
      name: 'use-previous',
      description: 'Returns previous value of given state',
      link: '/hooks/use-previous/',
    },
    {
      type: 'hook',
      name: 'use-queue',
      description: 'Manages queue of values',
      link: '/hooks/use-queue/',
    },
    {
      type: 'hook',
      name: 'use-set-state',
      description: 'Manages state with setState-like API',
      link: '/hooks/use-set-state/',
    },
    {
      type: 'hook',
      name: 'use-toggle',
      description: 'Switches between given values',
      link: '/hooks/use-toggle/',
    },
    {
      type: 'hook',
      name: 'use-uncontrolled',
      description: 'Manage state of both controlled and uncontrolled components',
      link: '/hooks/use-uncontrolled/',
    },
    {
      type: 'hook',
      name: 'use-validated-state',
      description: 'Manages state with validation',
      link: '/hooks/use-validated-state/',
    },
    {
      type: 'hook',
      name: 'use-clipboard',
      description: 'Wrapper around navigator.clipboard with feedback timeout',
      link: '/hooks/use-clipboard/',
    },
    {
      type: 'hook',
      name: 'use-document-title',
      description: 'Sets document.title to given string',
      link: '/hooks/use-document-title/',
    },
    {
      type: 'hook',
      name: 'use-document-visibility',
      description: 'Detects if the current tab is active',
      link: '/hooks/use-document-visibility/',
    },
    {
      type: 'hook',
      name: 'use-eye-dropper',
      description: 'Pick color from any pixel on the screen',
      link: '/hooks/use-eye-dropper/',
    },
    {
      type: 'hook',
      name: 'use-favicon',
      description: 'Changes favicon',
      link: '/hooks/use-favicon/',
    },
    {
      type: 'hook',
      name: 'use-hash',
      description: 'Get and set hash value in the URL',
      link: '/hooks/use-hash/',
    },
    {
      type: 'hook',
      name: 'use-headroom',
      description: 'Create headers that are hidden after user scrolls past given distance',
      link: '/hooks/use-headroom/',
    },
    {
      type: 'hook',
      name: 'use-idle',
      description: 'Detects if the user does nothing on the page',
      link: '/hooks/use-idle/',
    },
    {
      type: 'hook',
      name: 'use-interval',
      description: 'Calls function with a given interval',
      link: '/hooks/use-interval/',
    },
    {
      type: 'hook',
      name: 'use-merged-ref',
      description: 'Merges multiple refs objects or functions into one ref callback',
      link: '/hooks/use-merged-ref/',
    },
    {
      type: 'function',
      name: 'assignRef',
      description: 'Assigns ref to the given ref object or callback',
      link: '/hooks/use-merged-ref/#assignref-function',
    },
    {
      type: 'function',
      name: 'mergeRefs',
      description:
        'Merges multiple refs objects or functions into one ref callback without memoization',
      link: '/hooks/use-merged-ref/#mergerefs-function',
    },
    {
      type: 'hook',
      name: 'use-network',
      description: 'Returns current connection status',
      link: '/hooks/use-network/',
    },
    {
      type: 'hook',
      name: 'use-os',
      description: 'Detects user operating system',
      link: '/hooks/use-os/',
      children: [
        {
          type: 'type',
          name: 'OS',
          description:
            'A union of all possible operating systems that can be returned by use-os hook',
          link: '/hooks/use-os/#os-type',
        },
      ],
    },
    {
      type: 'hook',
      name: 'use-page-leave',
      description: 'Calls given function when the mouse leaves the page',
      link: '/hooks/use-page-leave/',
    },
    {
      type: 'hook',
      name: 'use-text-selection',
      description: 'Returns current selected text on the page',
      link: '/hooks/use-text-selection/',
    },
    {
      type: 'hook',
      name: 'use-timeout',
      description: 'Calls function in given timeout',
      link: '/hooks/use-timeout/',
    },
    {
      type: 'hook',
      name: 'use-did-update',
      description:
        'Calls given function in useEffect when value changes, but not when the component mounts',
      link: '/hooks/use-did-update/',
    },
    {
      type: 'hook',
      name: 'use-force-update',
      description: 'Forces the component to rerender without state change',
      link: '/hooks/use-force-update/',
    },
    {
      type: 'hook',
      name: 'use-isomorphic-effect',
      description: 'useLayoutEffect replacement',
      link: '/hooks/use-isomorphic-effect/',
    },
    {
      type: 'hook',
      name: 'use-logger',
      description: 'Logs given values to console when component renders',
      link: '/hooks/use-logger/',
    },
    {
      type: 'hook',
      name: 'use-shallow-effect',
      description: 'useEffect drop in replacement with dependencies shallow comparison',
      link: '/hooks/use-shallow-effect/',
    },
    {
      type: 'function',
      name: 'clamp',
      description: 'Clamps number within the inclusive lower and upper bounds',
      link: '/guides/functions-reference/#clamp',
    },
    {
      type: 'function',
      name: 'lowerFirst',
      description: 'Converts first character of the string to lower case',
      link: '/guides/functions-reference/#lowerfirst',
    },
    {
      type: 'function',
      name: 'upperFirst',
      description: 'Converts first character of the string to upper case',
      link: '/guides/functions-reference/#upperfirst',
    },
    {
      type: 'function',
      name: 'randomId',
      description: 'Generates random id with mantine- prefix',
      link: '/guides/functions-reference/#randomid',
    },
    {
      type: 'function',
      name: 'range',
      description: 'Generates array of numbers from start to end (inclusive)',
      link: '/guides/functions-reference/#range',
    },
    {
      type: 'function',
      name: 'shallowEqual',
      description: 'Performs shallow equal comparison of two objects',
      link: '/guides/functions-reference/#shallowequal',
    },
  ],
};
