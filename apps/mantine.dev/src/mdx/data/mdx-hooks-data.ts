import { Frontmatter } from '@/types';

function hDocs(hook: string, description: string): Frontmatter {
  const name = hook.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  return {
    title: name,
    package: '@mantine/hooks',
    slug: `/hooks/${name}`,
    description,
    import: `import { ${hook} } from '@mantine/hooks';`,
    source: `@mantine/hooks/src/${name}/${name}.ts`,
    docs: `hooks/${name}.mdx`,
    searchTags: `${hook} ${name.split('-').join(' ')}`,
  };
}

export const MDX_HOOKS_DATA: Record<string, Frontmatter> = {
  useClickOutside: hDocs(
    'useClickOutside',
    'Detects click and touch events outside of given element or elements group'
  ),

  useClipboard: hDocs('useClipboard', 'Wrapper around navigator.clipboard with feedback timeout'),

  useColorScheme: hDocs(
    'useColorScheme',
    'Detects user system color scheme with window.matchMedia API'
  ),

  useCounter: hDocs('useCounter', 'Increments/decrements state within given boundaries'),
  useDebouncedState: hDocs('useDebouncedState', 'Debounces value changes'),
  useDebouncedValue: hDocs('useDebouncedValue', 'Debounces value changes'),

  useDidUpdate: hDocs(
    'useDidUpdate',
    'Calls given function in useEffect when value changes, but not when the component mounts'
  ),

  useDisclosure: hDocs(
    'useDisclosure',
    'Manages boolean state, provides open, close and toggle handlers, usually used with modals, drawers and popovers'
  ),
  useDocumentTitle: hDocs('useDocumentTitle', 'Sets document.title to given string'),
  useDocumentVisibility: hDocs('useDocumentVisibility', 'Detects if the current tab is active'),

  useElementSize: {
    title: 'use-element-size',
    package: '@mantine/hooks',
    slug: '/hooks/use-element-size',
    description: 'Returns element width and height and observes changes with ResizeObserver',
    import: "import { useElementSize } from '@mantine/hooks';",
    source: '@mantine/hooks/src/use-resize-observer/use-resize-observer.ts',
    docs: 'hooks/use-element-size.mdx',
  },

  useEventListener: hDocs('useEventListener', 'Subscribes to events of a given element with a ref'),
  useEyeDropper: hDocs('useEyeDropper', 'Pick color from any pixel on the screen'),
  useFavicon: hDocs('useFavicon', 'Changes favicon'),

  useFocusReturn: hDocs(
    'useFocusReturn',
    'Captures last focused element on the page and returns focus to it once given condition is met'
  ),

  useFocusTrap: hDocs('useFocusTrap', 'Traps focus inside given element'),
  useFocusWithin: hDocs(
    'useFocusWithin',
    'Detects if any element within the given element has focus'
  ),
  useForceUpdate: hDocs('useForceUpdate', 'Forces the component to rerender without state change'),
  useFullscreen: hDocs(
    'useFullscreen',
    'Enter/exit fullscreen mode with given element or entire page'
  ),
  useHash: hDocs('useHash', 'Get and set hash value in the URL'),

  useHeadroom: hDocs(
    'useHeadroom',
    'Create headers that are hidden after user scrolls past given distance'
  ),

  useHotkeys: hDocs('useHotkeys', 'Listen for keys combinations on document element'),
  useHover: hDocs('useHover', 'Detects if given element is hovered'),
  useId: hDocs('useId', 'Generates memoized random id'),
  useIdle: hDocs('useIdle', 'Detects if the user does nothing on the page'),
  useInputState: hDocs('useInputState', 'Manages input state'),
  useIntersection: hDocs(
    'useIntersection',
    'Detects if given element is visible in the viewport or other element with IntersectionObserver'
  ),
  useInterval: hDocs('useInterval', 'Calls function with a given interval'),

  useIsomorphicEffect: hDocs('useIsomorphicEffect', 'useLayoutEffect replacement'),

  useListState: hDocs('useListState', 'Manages array state'),

  useLocalStorage: hDocs(
    'useLocalStorage',
    'Exposes localStorage value as react state, syncs state across opened tabs'
  ),

  useLogger: hDocs('useLogger', 'Logs given values to console when component renders'),
  useMediaQuery: hDocs('useMediaQuery', 'Subscribes to media queries with window.matchMedia'),
  useMergedRef: hDocs(
    'useMergedRef',
    'Merges multiple refs objects or functions into one ref callback'
  ),
  useMouse: hDocs('useMouse', 'Tracks mouse position over the viewport or given element'),

  useMove: hDocs(
    'useMove',
    'Handles move behavior over given element, can be used to build custom sliders'
  ),

  useNetwork: hDocs('useNetwork', 'Returns current connection status'),
  useOs: hDocs('useOs', 'Detects user operating system'),
  usePageLeave: hDocs('usePageLeave', 'Calls given function when the mouse leaves the page'),
  usePrevious: hDocs('usePrevious', 'Returns previous value of given state'),
  useQueue: hDocs('useQueue', 'Manages queue of values'),
  useReducedMotion: hDocs('useReducedMotion', 'Detects if user prefers to reduce motion'),
  useResizeObserver: hDocs(
    'useResizeObserver',
    'Tracks element size and position changes with ResizeObserver'
  ),
  useScrollIntoView: hDocs('useScrollIntoView', 'Scrolls given element into view'),
  useSetState: hDocs('useSetState', 'Manages state with setState-like API'),

  useShallowEffect: hDocs(
    'useShallowEffect',
    'useEffect drop in replacement with dependencies shallow comparison'
  ),

  useTextSelection: hDocs('useTextSelection', 'Returns current selected text on the page'),
  useTimeout: hDocs('useTimeout', 'Calls function in given timeout'),
  useToggle: hDocs('useToggle', 'Switches between given values'),

  useUncontrolled: hDocs(
    'useUncontrolled',
    'Manage state of both controlled and uncontrolled components'
  ),

  useValidatedState: hDocs('useValidatedState', 'Manages state with validation'),
  useViewportSize: hDocs(
    'useViewportSize',
    'Returns viewport width and height and subscribes to changes'
  ),

  useWindowEvent: hDocs(
    'useWindowEvent',
    'Adds event listener to the window object on component mount and removes the event when the component unmounts'
  ),

  useWindowScroll: hDocs('useWindowScroll', 'Tracks window scroll position'),
  usePagination: hDocs('usePagination', 'Manages pagination state'),
  useInViewport: hDocs('useInViewport', 'Detects if element is visible in the viewport'),
  useMutationObserver: hDocs(
    'useMutationObserver',
    'Subscribe to changes being made to the DOM tree'
  ),
  useMounted: hDocs('useMounted', 'Returns true if the component is mounted'),
  useStateHistory: hDocs('useStateHistory', 'Move back/forward in state history'),
  useOrientation: hDocs(
    'useOrientation',
    'Detects device orientation and subscribe to its changes'
  ),
  useFetch: hDocs('useFetch', 'Fetch data with built-in loading and error states'),
  useIsFirstRender: hDocs(
    'useIsFirstRender',
    'Detects if the component is rendered for the first time'
  ),
  useThrottledState: hDocs('useThrottledState', 'Throttles state changes'),
  useThrottledValue: hDocs('useThrottledValue', 'Throttles value changes'),
  useThrottledCallback: hDocs('useThrottledCallback', 'Throttles function calls'),
  useDebouncedCallback: hDocs('useDebouncedCallback', 'Debounces function calls'),
  useSet: hDocs('useSet', 'Use Set as React state'),
  useMap: hDocs('useMap', 'Use Map as React state'),
  useRadialMove: hDocs(
    'useRadialMove',
    'Handles radial move behavior over given element, can be used to build custom radial sliders'
  ),
  useScrollSpy: hDocs(
    'useScrollSpy',
    'Track scroll position and detect which heading is currently in the viewport, can be used for table of contents'
  ),
};
