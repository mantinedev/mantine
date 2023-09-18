import { Frontmatter } from '@/types';

function hDocs(hook: string, description: string): Frontmatter {
  const name = hook.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  return {
    title: name,
    package: '@mantine/hooks',
    slug: `/hooks/${name}`,
    description,
    import: `import { ${hook} } from '@mantine/hooks';`,
    source: `mantine-hooks/src/${name}/${name}.ts`,
    docs: `hooks/${name}.mdx`,
  };
}

export const MDX_HOOKS_DATA: Record<string, Frontmatter> = {
  useClickOutside: hDocs(
    'useClickOutside',
    'Detects click and touch events outside of given element'
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
    'Calls function in useEffect when value changes, but not when component mounts'
  ),

  useDisclosure: hDocs('useDisclosure', 'Manages boolean state and provides controls to toggle it'),
  useDocumentTitle: hDocs('useDocumentTitle', 'Sets document.title to given string'),
  useDocumentVisibility: hDocs('useDocumentVisibility', 'Detects if current tab is active'),

  useElementSize: hDocs(
    'useElementSize',
    'Returns element width and height and subscribe to changes'
  ),

  useEventListener: hDocs('useEventListener', 'Subscribes to events with a ref'),
  useEyeDropper: hDocs('useEyeDropper', 'Pick color from any pixel on the screen'),
  useFavicon: hDocs('useFavicon', 'Changes favicon'),

  useFocusReturn: hDocs(
    'useFocusReturn',
    'Captures last focused element on the page and returns focus to it once the condition is met'
  ),

  useFocusTrap: hDocs('useFocusTrap', 'Traps focus inside given node'),
  useFocusWithin: hDocs('useFocusWithin', 'Detects if any element within other element has focus'),
  useForceUpdate: hDocs('useForceUpdate', 'Force component to rerender without state change'),
  useFullscreen: hDocs('useFullscreen', 'Enter/exit fullscreen mode'),
  useHash: hDocs('useHash', 'Get and set hash value in url'),

  useHeadroom: hDocs(
    'useHeadroom',
    'Create headers that are hidden after user scrolls past given distance'
  ),

  useHotkeys: hDocs('useHotkeys', 'Listen for keys combinations on document element'),
  useHover: hDocs('useHover', 'Detects if element is hovered'),
  useId: hDocs('useId', 'Generates memoized random id'),
  useIdle: hDocs('useIdle', 'Detects if user does nothing on page'),
  useInputState: hDocs('useInputState', 'Manages input state'),
  useIntersection: hDocs('useIntersection', 'Detects if element is visible in viewport'),
  useInterval: hDocs('useInterval', 'Calls function in given interval'),

  useIsomorphicEffect: hDocs(
    'useIsomorphicEffect',
    'useLayoutEffect that does not show warning when used in SSR'
  ),

  useListState: hDocs('useListState', 'Manages array state'),

  useLocalStorage: hDocs(
    'useLocalStorage',
    'Use localStorage value as react state, sync state across opened tabs'
  ),

  useLogger: hDocs('useLogger', 'Log given values to console when component renders'),
  useMediaQuery: hDocs('useMediaQuery', 'Subscribes to media queries with window.matchMedia'),
  useMergedRef: hDocs('useMergedRef', 'Merges multiple refs into one'),
  useMouse: hDocs('useMouse', 'Tracks mouse position over the viewport or given element'),

  useMove: hDocs(
    'useMove',
    'Handles move behavior over any element, use to build custom sliders, color pickers, etc.'
  ),

  useNetwork: hDocs('useNetwork', 'Returns current connection status'),
  useOs: hDocs('useOs', 'Detects user operating system'),
  usePageLeave: hDocs('usePageLeave', 'Calls given function when mouse leaves the page'),
  usePrevious: hDocs('usePrevious', 'Returns previous value of given state'),
  useQueue: hDocs('useQueue', 'Manages queue of values'),
  useReducedMotion: hDocs('useReducedMotion', 'Detects if user prefers reduced motion'),
  useResizeObserver: hDocs('useResizeObserver', 'Tracks element size and position changes'),
  useScrollIntoView: hDocs('useScrollIntoView', 'Scrolls element into view'),
  useSetState: hDocs('useSetState', 'Manages state with setState-like API'),

  useShallowEffect: hDocs(
    'useShallowEffect',
    'useEffect drop in replacement with dependencies shallow comparison'
  ),

  useTextSelection: hDocs('useTextSelection', 'Returns current selected text on the page'),
  useTimeout: hDocs('useTimeout', 'Calls function in given timeout'),
  useToggle: hDocs('useToggle', 'Switch between given values'),

  useUncontrolled: hDocs(
    'useUncontrolled',
    'Manage state of both controlled and uncontrolled components'
  ),

  useValidatedState: hDocs('useValidatedState', 'Manages state with validation'),
  useViewportSize: hDocs('useViewportSize', 'Returns current viewport size'),

  useWindowEvent: hDocs(
    'useWindowEvent',
    'Adds event listener to window on component mount and removes it on unmount'
  ),

  useWindowScroll: hDocs('useWindowScroll', 'Tracks window scroll position'),
  usePagination: hDocs('usePagination', 'Manages pagination state'),
};
